import { InteretsTypeValue } from '@/types/base.types'

export const STAGE_OPTIONS = [
  { label: 'CREO CUENTA', value: 'CREATED' },
  { label: 'COMPLETO INFO', value: 'USER_INFO' },
  { label: 'CREO EMPRESA', value: 'COMPANY_COMPLETED' },
  { label: 'PAGADO', value: 'PAID' },
  { label: 'TODOS', value: 'ALL' }
]

export const interestButtons = {
  [InteretsTypeValue.GENDER]: [
    { label: 'Hombre', id: 'MALE' },
    { label: 'Mujer', id: 'FEMALE' },
    { label: 'Otro', id: 'OTHER' },
    { label: 'Prefiero no decir', id: 'PREFERNOTSAY' }
  ],
  [InteretsTypeValue.GENDER_INTEREST]: [
    {
      label: 'Hombre',

      id: 'MALE'
    },
    { label: 'Mujeres', id: 'FEMALE' },
    { label: 'Ambos', id: 'BOTH' }
  ],
  [InteretsTypeValue.TYPE]: [
    { label: 'Casual', id: 'casual' },
    {
      label: 'Suggar',
      id: 'suggar',
      $btncolor: (theme: any) => theme.palette.secondary.light
    },
    {
      label: 'Relación seria',
      id: 'serious',
      $btncolor: (theme: any) => theme.palette.secondary.light
    },
    {
      label: 'Amigos con derechos',
      id: 'friends',
      $btncolor: (theme: any) => theme.palette.secondary.light
    }
  ]
}
