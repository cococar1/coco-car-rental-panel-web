/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { ConfigContext } from '@/contexts/ConfigService'

import {
  IDataImage,
  IGalleryServiceAplication,
  removePhotoInStorage,
  setNewPhotoInStorage
} from '@/domain/entities/photos'
import { Photo } from '@/graphql/graphql.types'
import {
  useAddImagesGallery,
  useChangePhotoPrivacy,
  useDeleteImagesGallery
} from '@/services/domain/usePhotos'
import { useUpdateUser } from '@/services/domain/useUserHook'

export const useGallery = (): IGalleryServiceAplication => {
  const { authLoading, refetchUser } = useContext(AuthContext)
  const {
    levels: { user = {}, location = {}, galleryUser = [] } = {},
    setGalleryStorage,
    deleteGalleryStorage
  } = useContext(ConfigContext)
  const { photos } = user ?? {}

  const [addImage, { data, loading: loadingUpImage }] = useAddImagesGallery()
  const [changePricacy] = useChangePhotoPrivacy()
  const [updateUser, { loading }] = useUpdateUser()
  const [deleteImage, { data: dImg, loading: loadingDeleteImage }] =
    useDeleteImagesGallery()

  const addImageGallery = async ({
    file,
    position
  }: {
    file: IDataImage
    position: number
  }) => {
    if (user?._id) {
      await addImage({
        variables: {
          id: user._id!,
          files: [file?.file]
        }
      }).then(({ data = {} }) => {
        const user = data!.addPhotosToGallery

        setNewPhotoInStorage({
          userProfile: user!.photos!,
          photos: galleryUser,
          position,
          fileName: file?.file.name,
          setGalleryStorage
        })

        refetchUser()
      })
    }
  }

  const deleteImageGallery = async (photoId: string) => {
    await deleteImage({
      variables: {
        userId: user!._id!,
        photoId
      }
    }).then(() => {
      removePhotoInStorage({
        photos: galleryUser,
        photoId,
        deleteGalleryStorage
      })
    })
  }

  const changePrivateStatus = async (photoId: string, isPrivate: boolean) => {
    await updateUser({
      variables: {
        id: user?._id as string,
        updateUserInput: {
          geolocation: {
            coordinates: location!
          },
          photos: [{ photo: photoId, private: isPrivate }]
        }
      }
    })
  }

  const TooglePrivacyPhoto = async (photoId: string) => {
    changePricacy({
      variables: {
        userId: user!._id!,
        photoId
      }
    }).then(() => {
      refetchUser()
    })
  }

  return {
    userGallery: photos as Photo[],
    loadingPhoto: {
      ldUpImage: loadingUpImage || authLoading.loadUser,
      ldDeleteImage: loadingDeleteImage || loadingUpImage
    },
    uploadPhoto: addImageGallery,
    deletePhoto: deleteImageGallery,
    TooglePrivacyPhoto,
    changePrivateStatus
  }
}
