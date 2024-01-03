import { UIContext } from '@/contexts/ui'

import { signIn } from 'next-auth/react'
import { useContext } from 'react'

interface AuthStrategyArguments {
  strategy: (args?: T) => void
  [key: string]: any
}

export const useAuthStrategy = () => {
  const { setTypeAuth } = useContext(UIContext)

  const loginWithFacebook = async (): Promise<any> => {
    try {
      await signIn('facebook', { callbackUrl: '/app' })
      setTypeAuth('social')
    } catch (error) {}
  }

  const loginWithGoogle = async (): Promise<any> => {
    try {
      await signIn('google', { callbackUrl: '/app' })
      setTypeAuth('social')
    } catch (error) {}
  }

  const loginWithPhoneNumber = async ({ handleNext }: { handleNext: any }) => {
    setTypeAuth('phone_number')
    handleNext?.()
  }

  const authenticate = async ({
    strategy,
    ...args
  }: AuthStrategyArguments): Promise<any> => {
    try {
      return strategy(args)
    } catch (error) {}
  }

  return {
    useAuthStrategy,
    loginWithFacebook,
    loginWithGoogle,
    loginWithPhoneNumber,
    authenticate
  }
}
