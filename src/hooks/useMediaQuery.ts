import { useState, useEffect, useLayoutEffect } from 'react'

export const useMediaQuery = (query: string) => {
  const canUseDOM = typeof window !== 'undefined'
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect
  const [matches, setMatches] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])
  return matches
}
