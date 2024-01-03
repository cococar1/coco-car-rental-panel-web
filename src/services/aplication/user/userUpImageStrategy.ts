/* eslint-disable camelcase */
import { Update_UserMutationFn } from '@/graphql/graphql.hooks'

import { uploadImageType } from '@/types/user.type'

interface UploadArguments<T> {
  strategy: (args?: T) => void
  [key: string]: any
}

interface IPhoto {
  updateUser: Update_UserMutationFn
  photo: string
  _id: string
}

export const linkUser = async ({
  updateUser,
  photo,
  _id
}: IPhoto): Promise<Update_UserMutationFn | undefined> => {
  const result = await updateUser({
    variables: {
      id: _id!,
      updateUserInput: {
        photo,
        geolocation: { coordinates: { lat: 0, lon: 0 } }
      }
    },
    refetchQueries: ['GET_USER_TOKEN']
  })

  if (photo) {
    return result as Update_UserMutationFn
  }
}

export const fileUser = async ({
  updateUser,
  photo,
  _id
}: IPhoto): Promise<Update_UserMutationFn | undefined> => {
  const result = await updateUser({
    variables: {
      id: _id!,
      updateUserInput: {
        geolocation: { coordinates: { lat: 0, lon: 0 } }
      },
      file: photo
    },
    refetchQueries: ['GET_USER_TOKEN']
  })
  if (photo) {
    return result as Update_UserMutationFn
  }
}

export const uploadStrategies: any = {
  [uploadImageType.FILE]: fileUser,
  [uploadImageType.LINK]: linkUser
}

export const uploadImage = async ({
  strategy,
  ...args
}: UploadArguments<any>): Promise<any | undefined> => {
  try {
    return await strategy(args)
  } catch (error) {}
}
