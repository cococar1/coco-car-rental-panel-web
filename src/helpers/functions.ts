import { DivBreakpointType } from '@/components/ui/Divider/divider.interface'
import { locationObject } from '@/interfaces/location.interface'

export function isObject (val: DivBreakpointType) {
  if (val === null) return false
  return typeof val === 'function' || typeof val === 'object'
}

export const detectPlataform = (): string | void => {
  const userAgent = navigator?.userAgent
  const osPatterns: Record<string, RegExp> = {
    Windows: /Windows/i,
    macOS: /Macintosh|Mac OS X/i,
    iOS: /iPhone|iPad|iPod/i,
    Android: /Android/i,
    Linux: /Linux/i
  }

  let osName = ''

  if (userAgent) {
    for (const [os, pattern] of Object.entries(osPatterns)) {
      if (pattern.test(userAgent)) {
        osName = os
        break // Detén la búsqueda una vez que se encuentra una coincidencia
      }
    }

    return osName
  }
}

export const getUserLocation = async (): Promise<locationObject> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ lon: coords.longitude, lat: coords.latitude })
      },
      error => {
        reject(error)
      }
    )
  })
}

export const getDayMonthYearFromDate = (maxDateInMs: string) => {
  const newDate = new Date(parseInt(maxDateInMs!))
  const day = newDate.getUTCDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getUTCFullYear()

  return { day, month, year }
}

export const getMinMaxNumbers = (numbers: number[]) => {
  let maxNumber = numbers[0]
  let minNumber = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i]
    }
    if (numbers[i] < minNumber) {
      minNumber = numbers[i]
    }
  }

  return { min: minNumber, max: maxNumber }
}

export const removeNullValuesObject = (obj: Record<string, any>) => {
  const recursiveFilter = (nestedObj: Record<string, any>) => {
    const newObj: Record<string, any> = {}
    for (const [key, value] of Object.entries(nestedObj)) {
      if (value !== null) {
        if (typeof value === 'object' && !Array.isArray(value)) {
          // Recursively filter nested objects
          const filteredNestedObj = recursiveFilter(value)
          if (Object.keys(filteredNestedObj).length > 0) {
            newObj[key] = filteredNestedObj
          }
        } else {
          newObj[key] = value
        }
      }
    }
    return newObj
  }

  return recursiveFilter(obj)
}
export const roundNumberCeil = (num: number) => {
  return Math.ceil(num)
}
