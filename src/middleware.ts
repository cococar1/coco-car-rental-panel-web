import { getSession } from 'next-auth/react'
import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'

import { initializeApollo } from './lib/apolloClient'
import { GET_USER_TOKEN } from './gql/queries/userToken.query'

export async function middleware (req: NextRequest) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie') ?? undefined
    }
  }
  const session = await getSession({ req: requestForNextAuth })
  const token = await req.cookies.get('access_token')?.value
  const apolloClient = initializeApollo()
  const url = req.nextUrl.clone()
  const redirectedParam = req.url.includes('?redirected=true')

  if (req.nextUrl.pathname.startsWith('/app')) {
    if (!session || !token) {
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }

  if (req.nextUrl.pathname.startsWith('/empieza')) {
    if (session) {
      const accessToken = session?.user?.accessToken
      const response = NextResponse.next()
      response.cookies.set('access_token', accessToken)

      return response
    }
  }

  if (req.nextUrl.pathname.startsWith('/') && !redirectedParam) {
    const accessToken = session?.user?.accessToken

    if (accessToken) {
      try {
        const {
          data: { dataWithToken }
        } = await apolloClient.query({
          query: GET_USER_TOKEN,
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        })
        if (dataWithToken?.regiterCompleted) {
          const url = req.nextUrl.clone()
          url.pathname = '/app'
          url.searchParams.set('redirected', 'true')
          const response = NextResponse.redirect(url)
          response.cookies.set('access_token', accessToken)
          return response
        } else {
          const url = req.nextUrl.clone()
          url.pathname = '/empieza'

          return NextResponse.redirect(url)
        }
      } catch (error) {
        console.log(error, 'error with get user')
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/app', '/empieza']
}

export default withAuth({})
