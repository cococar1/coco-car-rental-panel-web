import { GetServerSidePropsContext } from 'next'
import {
  ApolloCache,
  BaseMutationOptions,
  DefaultContext,
  OperationVariables
} from '@apollo/client'

export interface RedirectInterface {
  ctx: GetServerSidePropsContext
  location: string
  status?: number
}

export interface IconProps {
  $iconsize?: string | number
  fill?: string
  stroke?: string
  height?: string | number
  width?: string | number
}

export type SizeType = 'small' | 'medium' | 'large'
export type ProgresType = 'valoration' | 'course'
export type PositionType = 'top' | 'start' | 'bottom' | 'end'
export type ShapeType = 'square' | 'rounded' | 'pill'
export type ButtonShapeType = 'square' | 'rounded' | 'half-pill' | 'pill'
export type ShadownType = 'small' | 'default' | 'large'
export type ButtonVariantType =
  | 'text'
  | 'contained'
  | 'outlined'
  | 'translucent'
export type PersonalInfo = 'university' | 'email' | 'phone' | 'career'
export type PaymentsType = 'CARD' | 'YAPE' | 'PLIN'
export type BaseColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'

export type MutationCompleteType<T> = (
  data: T,
  clientOptions?:
    | BaseMutationOptions<
        any,
        OperationVariables,
        DefaultContext,
        ApolloCache<any>
      >
    | undefined
) => void

export type QueryCompleteType<T> = (data: T) => void

export interface SelectOption {
  label: string
  value: string
}
