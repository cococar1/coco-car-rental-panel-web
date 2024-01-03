/* eslint-disable react-hooks/exhaustive-deps */
import { ConfigContext } from '@/contexts/ConfigService'
import { UIContext } from '@/contexts/ui'
import { PageHomeOptions } from '@/types/pageHome'
import { useContext, useEffect } from 'react'

export const useSessionHome = (session: any) => {
  const { homeView, setHomeView, setTypeAuth, setFormStep } =
    useContext(UIContext)
  const {
    levels: { user }
  } = useContext(ConfigContext)

  const isLand = PageHomeOptions.LANDING === homeView
  const isAuth =
    PageHomeOptions.AUTH_LOGIN === homeView ||
    PageHomeOptions.AUTH_REGISTER === homeView

  useEffect(() => {
    if (session?.user) {
      setHomeView('auth/login')
      setTypeAuth('social')
      if (user?.regiterCompleted) {
        setFormStep(0)
      } else {
        setFormStep(1)
      }
    } else {
      setHomeView('landing')
    }
  }, [session])

  return {
    isLand,

    isAuth
  }
}
