/* eslint-disable import/no-duplicates */
/* eslint-disable camelcase */
import * as Apollo from '@apollo/client'

import {
  Delete_UserDocument,
  Registration_ProgressDocument,
  Update_RegisterDocument
} from '@/graphql/graphql.hooks'
import {
  Delete_UserMutation,
  Delete_UserMutationVariables,
  Registration_ProgressQuery,
  Registration_ProgressQueryVariables,
  Update_RegisterMutation,
  Update_RegisterMutationVariables,
  Update_UserMutation,
  Update_UserMutationVariables
} from '@/graphql/graphql.types'
import { ConfigContext } from '@/contexts/ConfigService'
import { useContext } from 'react'
import { UPDATE_USER } from '@/gql/mutations/user.mutation'

function useUpdateUser (
  baseOptions?: Apollo.MutationHookOptions<
    Update_UserMutation,
    Update_UserMutationVariables
  >
) {
  const { setUser } = useContext(ConfigContext) || {}
  const defaultOptions = {
    update: (
      cache: Apollo.ApolloCache<Update_UserMutation>,
      { data }: Apollo.FetchResult<Update_UserMutation>
    ) => {
      if (data?.updateUser) {
        const user = data.updateUser
        setUser?.(user!)
      }
    }
  }
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<Update_UserMutation, Update_UserMutationVariables>(
    UPDATE_USER,
    options
  )
}
function useUpdateRegister (
  baseOptions?: Apollo.MutationHookOptions<
    Update_RegisterMutation,
    Update_RegisterMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Update_RegisterMutation,
    Update_RegisterMutationVariables
  >(Update_RegisterDocument, options)
}

function useDeleteUser (
  baseOptions?: Apollo.MutationHookOptions<
    Delete_UserMutation,
    Delete_UserMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<Delete_UserMutation, Delete_UserMutationVariables>(
    Delete_UserDocument,
    options
  )
}

function useRegistrationStatus (
  baseOptions?: Apollo.QueryHookOptions<
    Registration_ProgressQuery,
    Registration_ProgressQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Registration_ProgressQuery,
    Registration_ProgressQueryVariables
  >(Registration_ProgressDocument, options)
}

export {
  useUpdateUser,
  useUpdateRegister,
  useDeleteUser,
  useRegistrationStatus
}
