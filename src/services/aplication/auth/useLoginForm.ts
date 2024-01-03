import { useContext } from 'react'
import { UIContext } from '@/contexts/ui'
import { signOut } from 'next-auth/react'
import { AuthContext } from '@/contexts/AuthContext'

export const useLoginForm = (session: any) => {
  const { loggout } = useContext(AuthContext)
  const { formStep, typeAuth, setFormStep, setHomeView, setBoardingStep } =
    useContext(UIContext)

  const completeFormStep = () => {
    setFormStep(formStep + 1)
  }

  const returnFormStep = () => {
    setFormStep(formStep - 1)
  }

  const handleClose = () => {
    if (session) {
      signOut()
    }
    setFormStep(0)
    setHomeView('landing')
    setBoardingStep(0)
    loggout?.()
  }

  return {
    formStep,
    typeAuth,
    completeFormStep,
    returnFormStep,
    handleClose
  }
}
