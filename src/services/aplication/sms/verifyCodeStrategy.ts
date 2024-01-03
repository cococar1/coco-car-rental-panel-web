import { useContext } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { UIContext } from '@/contexts/ui'
import { AuthContext } from '@/contexts/AuthContext'
import { TypeAuthOptions } from '@/types/auth.types'
import { detectPlataform } from '@/helpers/functions'
import { toast } from 'react-toastify'

interface AuthStrategyArguments {
  strategy: (args?: any) => void
  [key: string]: any
}

interface IProps {
  phone: string
  codeVerify: string
  handleNext?: any
}

export const useVerifyCodeStrategy = () => {
  const { setPhone } = useContext(UIContext)
  const { handleVerifyCode } = useContext(AuthContext)
  const platform = detectPlataform() as string
  const router = useRouter()

  const verify = async ({ codeVerify, phone }: IProps): Promise<any> => {
    try {
      const isVerify = await handleVerifyCode?.(codeVerify, phone as any)
      if (isVerify) {
        router.push('/empieza')
      }
      setPhone('')
    } catch (error) {}
  }

  const loginPhone = async ({ phone, codeVerify }: IProps): Promise<any> => {
    const response = await signIn('credentials', {
      phoneCode: phone?.code,
      phoneNumber: phone?.number,
      code: codeVerify,
      platform,
      redirect: false
    })

    if (response?.error) {
      toast.error('Numero de telefono o codigo invalidos', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        type: 'error'
      })
    } else {
      router.push('/')
    }
  }

  const verifyCode = async ({
    strategy,
    ...args
  }: AuthStrategyArguments): Promise<any> => {
    try {
      return await strategy(args)
    } catch (error) {}
  }

  const validatedStrategies: any = {
    [TypeAuthOptions.PHONE_NUMBER]: loginPhone,
    [TypeAuthOptions.SOCIAL]: verify
  }

  return {
    validatedStrategies,
    verify,
    loginPhone,
    verifyCode
  }
}
