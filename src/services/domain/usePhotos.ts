/* eslint-disable import/no-duplicates */
/* eslint-disable camelcase */
import * as Apollo from '@apollo/client'

import {
  Add_Photos_GalleryMutation,
  Add_Photos_GalleryMutationVariables,
  Change_Photo_PrivacyMutation,
  Change_Photo_PrivacyMutationVariables,
  Delete_Photos_GalleryMutation,
  Delete_Photos_GalleryMutationVariables,
  Get_ImageQuery,
  Get_ImageQueryVariables
} from '@/graphql/graphql.types'
import {
  Add_Photos_GalleryDocument,
  Change_Photo_PrivacyDocument,
  Delete_Photos_GalleryDocument,
  Get_ImageDocument
} from '@/graphql/graphql.hooks'

function useGetImageLazy (
  baseOptions?: Apollo.LazyQueryHookOptions<
    Get_ImageQuery,
    Get_ImageQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Get_ImageQuery, Get_ImageQueryVariables>(
    Get_ImageDocument,
    options
  )
}

function useAddImagesGallery (
  baseOptions?: Apollo.MutationHookOptions<
    Add_Photos_GalleryMutation,
    Add_Photos_GalleryMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Add_Photos_GalleryMutation,
    Add_Photos_GalleryMutationVariables
  >(Add_Photos_GalleryDocument, options)
}

function useDeleteImagesGallery (
  baseOptions?: Apollo.MutationHookOptions<
    Delete_Photos_GalleryMutation,
    Delete_Photos_GalleryMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Delete_Photos_GalleryMutation,
    Delete_Photos_GalleryMutationVariables
  >(Delete_Photos_GalleryDocument, options)
}

function useChangePhotoPrivacy (
  baseOptions?: Apollo.MutationHookOptions<
    Change_Photo_PrivacyMutation,
    Change_Photo_PrivacyMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Change_Photo_PrivacyMutation,
    Change_Photo_PrivacyMutationVariables
  >(Change_Photo_PrivacyDocument, options)
}

export {
  useAddImagesGallery,
  useGetImageLazy,
  useDeleteImagesGallery,
  useChangePhotoPrivacy
}
