/* eslint-disable camelcase */
import { CODE_SMS_LOGIN } from '@/gql/queries/phone.query'
import { FACEBOOK_AUTH, GOOGLE_AUTH } from '@/gql/queries/userToken.query'
import { Facebook_AuthQuery, Google_AuthQuery } from '@/graphql/graphql.types'
import { setCookie } from '@/helpers/cookie'
import { initializeApollo } from '@/lib/apolloClient'
import { ProvidersAuthOptions, TypeAuthOptionsValue } from '@/types/auth.types'
import { ApolloClient } from '@apollo/client'

export function handleLoginPhone (
  e: { preventDefault: () => void },
  setTypeAuth: (value: TypeAuthOptionsValue) => void,
  handleNext: () => void
) {
  e.preventDefault()
  setTypeAuth('phone_number')
  handleNext?.()
}

export async function handleLoginWithGoogle (
  e: { preventDefault: () => void },
  signIn: any
) {
  e.preventDefault()
  await signIn('google')
}

export async function fetchFacebookData (
  accessToken: string,
  user: any,
  provider: string
) {
  const apolloClient = initializeApollo()
  const data = await apolloClient.query({
    query: FACEBOOK_AUTH,
    variables: {
      id_token: accessToken,
      location: {
        lat: 0,
        lon: 0
      }
    }
  })

  const userProfile = {
    ...data.data.facebookAuth.user,
    accessToken: data.data.facebookAuth.accessToken,
    refreshToken: data.data.facebookAuth.refreshToken,
    provider,
    image: user?.image
  }

  return userProfile as Facebook_AuthQuery
}

export async function fetchGoogleData (
  accessToken: string,
  user: any,
  provider: string
) {
  const apolloClient = initializeApollo()
  try {
    const data = await apolloClient.query({
      query: GOOGLE_AUTH,
      variables: {
        id_token: accessToken,
        firstName: user?.split(' ')[0],
        lastName: user?.split(' ')[1],
        location: {
          lat: 0,
          lon: 0
        }
      }
    })

    const userProfile = {
      ...data.data.googleAuth.user,
      accessToken: data.data.googleAuth.accessToken,
      refreshToken: data.data.googleAuth.refreshToken,
      provider
    }

    return userProfile as Google_AuthQuery
  } catch (error) {
    return null
  }
}

export const setTokens = (userLogin: any) => {
  setCookie('refresh_token', userLogin?.refreshToken ?? '')
  setCookie('access_token', userLogin?.accessToken ?? '')
}

export const getUserWithPhoneNumber = async (
  credentials: Record<string, string> | undefined
) => {
  const { code, phoneNumber, phoneCode, platform } = credentials ?? {}
  const apolloClient: ApolloClient<any> = initializeApollo()

  try {
    const { data } = await apolloClient.query({
      query: CODE_SMS_LOGIN,
      variables: {
        code,
        phone: { number: phoneNumber, code: phoneCode },
        location: { lon: 0, lat: 0 },
        platform
      }
    })

    const { verifyCodeSmsLogin } = data || {}
    const { user } = verifyCodeSmsLogin || {}

    if (user) {
      return {
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accessToken: verifyCodeSmsLogin.accessToken,
        refreshToken: verifyCodeSmsLogin.refreshToken,
        provider: ProvidersAuthOptions.CREDENTIALS,
        image: user.image
      }
    }
  } catch (error) {
    console.log(error)
  }
}
