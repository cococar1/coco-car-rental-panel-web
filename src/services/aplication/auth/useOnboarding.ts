/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useContext } from 'react'

import { UIContext } from '@/contexts/ui'
import { AuthContext } from '@/contexts/AuthContext'
import { useDeleteUser } from '../../domain/useUserHook'

export const useOnboarding = () => {
  const { onBoardingStep, setBoardingStep, setFormStep, setHomeView } =
    useContext(UIContext)
  const { loggout, loggedUserOptions } = useContext(AuthContext)
  const [deleteUser] = useDeleteUser()

  const completeonBoardingStep = () => {
    setBoardingStep(onBoardingStep + 1)
  }

  const returnonBoardingStep = () => {
    setBoardingStep(onBoardingStep - 1)
  }

  const handleClose = async () => {
    setHomeView('landing')
    setFormStep(0)
    await deleteUser({
      variables: {
        id: loggedUserOptions?._id!
      }
    }).then(() => {
      loggout?.()
    })
  }

  return {
    onBoardingStep,
    completeonBoardingStep,
    returnonBoardingStep,
    handleClose
  }
}
