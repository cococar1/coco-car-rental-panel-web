import { gql } from '@apollo/client'

export const ADD_PHOTOS_GALLERY = gql`
  mutation ADD_PHOTOS_GALLERY($id: ID!, $files: [Upload]) {
    addPhotosToGallery(id: $id, files: $files) {
      _id
      firstName
      lastName
      photos {
        _id
        photo
        private
      }
    }
  }
`
export const DELETE_PHOTOS_GALLERY = gql`
  mutation DELETE_PHOTOS_GALLERY($userId: ID!, $photoId: ID!) {
    deletePhotoFromGallery(userId: $userId, photoId: $photoId) {
      username
      photos {
        _id
        photo
        private
      }
      _id
    }
  }
`

export const CHANGE_PHOTO_PRIVACY = gql`
  mutation CHANGE_PHOTO_PRIVACY($userId: ID!, $photoId: ID!) {
    changePhotoPrivacy(userId: $userId, photoId: $photoId) {
      _id
      firstName
    }
  }
`
