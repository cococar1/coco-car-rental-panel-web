import { useEffect, useState } from 'react'

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(defaultValue)

  useEffect(() => {
    const clientValue = localStorage.getItem(key)
    if (clientValue !== null) {
      setStoredValue(JSON.parse(clientValue))
    }
  }, [key])

  const setValue = (value: any) => {
    setStoredValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}
