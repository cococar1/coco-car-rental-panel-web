/* eslint-disable camelcase */

import { FieldValues, UseFormSetValue, useForm } from 'react-hook-form'

import {
  Update_RegisterMutationFn,
  Update_UserMutationFn
} from '@/graphql/graphql.hooks'

import {
  uploadImage,
  uploadStrategies
} from '@/services/aplication/user/userUpImageStrategy'
import { PhotoUpload } from '@/types/user.type'
import { useUpdateRegister, useUpdateUser } from '../../domain/useUserHook'
import { UserAppearance } from '@/domain/entities/user'

type UpdateUserMutationFn = (options: {
  variables: {
    id: string
    updateUserInput: {
      email?: string
    }
  }
  refetchQueries: string[]
}) => Promise<any>

type UpdateRegisterMutationFn = (options: {
  variables: {
    id: string
    state: boolean
  }
}) => Promise<any>

export interface UpdateHookReturnType {
  setValue: UseFormSetValue<FieldValues>
  editEmail: (_id: string) => Promise<UpdateUserMutationFn | undefined>
  editName: (_id: string) => Promise<UpdateUserMutationFn>
  editBirthDate: (_id: string) => Promise<UpdateUserMutationFn | undefined>
  updateApparenceUser: (
    aparence: UserAppearance,
    _id: string
  ) => Promise<UpdateUserMutationFn | undefined>
  editGenre: (_id: string) => Promise<UpdateUserMutationFn | undefined>
  editInterests: (_id: string) => Promise<UpdateUserMutationFn | undefined>
  editPhoto: ({
    _id,
    photo,
    photoUpload
  }: PhotoUpload) => Promise<Update_UserMutationFn | undefined>
  completeOnboarding: (_id: string) => Promise<UpdateRegisterMutationFn>
  errors: any
  loading: boolean
  loadComlete: boolean
}

export const useUpdateHook = (): UpdateHookReturnType => {
  const [updateUser, { loading }] = useUpdateUser()
  const [completeRegister, { loading: loadComlete }] = useUpdateRegister()

  const {
    watch,
    formState: { errors },
    setValue
  } = useForm()

  const editEmail = async (
    _id: string
  ): Promise<Update_UserMutationFn | undefined> => {
    const email = watch('email')

    return (await updateUser({
      variables: {
        id: _id!,
        updateUserInput: {
          email,
          geolocation: { coordinates: { lat: 0, lon: 0 } }
        }
      },
      refetchQueries: ['GET_USER_TOKEN']
    })) as Update_UserMutationFn
  }

  const editName = async (_id: string): Promise<Update_UserMutationFn> => {
    const { firstName, lastName } = watch('name') ?? {}
    const result = await updateUser({
      variables: {
        updateUserInput: {
          lastName,
          firstName,
          geolocation: { coordinates: { lat: 0, lon: 0 } }
        },
        id: _id!
      },
      refetchQueries: ['GET_USER_TOKEN']
    })

    return result as Update_UserMutationFn
  }

  const editBirthDate = async (
    _id: string
  ): Promise<Update_UserMutationFn | undefined> => {
    const dateBirth = watch('birthday')
    const result = await updateUser({
      variables: {
        id: _id!,
        updateUserInput: {
          dateBirth,
          geolocation: { coordinates: { lat: 0, lon: 0 } }
        }
      },
      refetchQueries: ['GET_USER_TOKEN']
    })
    if (dateBirth.day && dateBirth.month && dateBirth.year) {
      return result as Update_UserMutationFn
    }
  }

  const editGenre = async (
    _id: string
  ): Promise<Update_UserMutationFn | undefined> => {
    const genre = watch('genre')

    const result = await updateUser({
      variables: {
        id: _id!,
        updateUserInput: {
          genre,
          geolocation: { coordinates: { lat: 0, lon: 0 } }
        }
      },
      refetchQueries: ['GET_USER_TOKEN']
    })

    if (genre) {
      return result as Update_UserMutationFn
    }
  }

  const editInterests = async (
    _id: string
  ): Promise<Update_UserMutationFn | undefined> => {
    const interest = watch('interests')

    const result = await updateUser({
      variables: {
        id: _id!,
        updateUserInput: {
          interest,
          geolocation: { coordinates: { lat: 0, lon: 0 } }
        }
      },
      refetchQueries: ['GET_USER_TOKEN']
    })

    if (interest) {
      return result as Update_UserMutationFn
    }
  }

  const editPhoto = async ({
    _id,
    typePhoto,
    photoUpload
  }: PhotoUpload): Promise<Update_UserMutationFn | undefined> => {
    if (!typePhoto) {
      throw new Error('image is required')
    }

    const strategy = uploadStrategies[typePhoto]
    const result = await uploadImage({
      strategy,
      updateUser,
      _id,
      photo: photoUpload
    })

    return result
  }

  const completeOnboarding = async (
    _id: string
  ): Promise<Update_RegisterMutationFn> => {
    const finish = await completeRegister({
      variables: {
        id: _id!,
        state: true
      }
    })
    return finish as Update_RegisterMutationFn
  }

  const updateApparenceUser = async (
    ocupation: UserAppearance,
    _id: string
  ) => {
    try {
      const { eyeColor, hairColor, height, occupation, weight } =
        ocupation || {}

      if (!eyeColor || !hairColor || !height || !occupation || !weight) {
        throw new Error('all fields are required')
      }

      const result = await updateUser({
        variables: {
          id: _id!,
          updateUserInput: {
            occupation: ocupation.occupation,
            appearance: {
              eyeColor: ocupation.eyeColor,
              hairColor: ocupation.hairColor,
              height: ocupation.height,
              weight: ocupation.weight
            },
            geolocation: { coordinates: { lat: 0, lon: 0 } }
          }
        },
        refetchQueries: ['GET_USER_TOKEN']
      })

      return result
    } catch (error) {
      console.log(error, 'error')
    }
  }

  return {
    setValue,
    editEmail,
    editName,
    editBirthDate,
    editGenre,
    editInterests,
    editPhoto,
    completeOnboarding,
    updateApparenceUser,
    errors,
    loading,
    loadComlete
  }
}
