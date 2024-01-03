/* eslint-disable camelcase */
/* eslint-disable import/export */
import * as Apollo from '@apollo/client'

import {
  Accept_FriendMutation,
  Accept_FriendMutationVariables,
  Cancel_FriendMutation,
  Cancel_FriendMutationVariables,
  Candidates_PaginationQuery,
  Candidates_PaginationQueryVariables,
  Reject_FriendMutation,
  Reject_FriendMutationVariables,
  Reject_PersonMutation,
  Reject_PersonMutationVariables,
  Remove_Candidate_From_NewMutation,
  Remove_Candidate_From_NewMutationVariables,
  Response_Friend_RequestSubscription,
  Response_Friend_RequestSubscriptionVariables,
  Send_Friend_RequestMutation,
  Send_Friend_RequestMutationVariables,
  Toogle_Favorite_CandidateMutation,
  Toogle_Favorite_CandidateMutationVariables
} from '@/graphql/graphql.types'
import {
  Accept_FriendDocument,
  Cancel_FriendDocument,
  Candidates_PaginationDocument,
  Reject_FriendDocument,
  Reject_PersonDocument,
  Remove_Candidate_From_NewDocument,
  Response_Friend_RequestDocument,
  Send_Friend_RequestDocument,
  Toogle_Favorite_CandidateDocument
} from '@/graphql/graphql.hooks'

function useCandidate (
  baseOptions: Apollo.QueryHookOptions<
    Candidates_PaginationQuery,
    Candidates_PaginationQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    Candidates_PaginationQuery,
    Candidates_PaginationQueryVariables
  >(Candidates_PaginationDocument, options)
}

function useLazyCandidatePagination (
  baseOptions?: Apollo.LazyQueryHookOptions<
    Candidates_PaginationQuery,
    Candidates_PaginationQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Candidates_PaginationQuery,
    Candidates_PaginationQueryVariables
  >(Candidates_PaginationDocument, options)
}

function useSendRequestCandidate (
  baseOptions?: Apollo.MutationHookOptions<
    Send_Friend_RequestMutation,
    Send_Friend_RequestMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Send_Friend_RequestMutation,
    Send_Friend_RequestMutationVariables
  >(Send_Friend_RequestDocument, options)
}

function useRejectCandidate (
  baseOptions?: Apollo.MutationHookOptions<
    Reject_FriendMutation,
    Reject_FriendMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Reject_FriendMutation,
    Reject_FriendMutationVariables
  >(Reject_FriendDocument, options)
}
function useToogleFavoriteCandidate (
  baseOptions?: Apollo.MutationHookOptions<
    Toogle_Favorite_CandidateMutation,
    Toogle_Favorite_CandidateMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Toogle_Favorite_CandidateMutation,
    Toogle_Favorite_CandidateMutationVariables
  >(Toogle_Favorite_CandidateDocument, options)
}

function useCancelCandidate (
  baseOptions?: Apollo.MutationHookOptions<
    Cancel_FriendMutation,
    Cancel_FriendMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Cancel_FriendMutation,
    Cancel_FriendMutationVariables
  >(Cancel_FriendDocument, options)
}

function useRejectPerson (
  baseOptions?: Apollo.MutationHookOptions<
    Reject_PersonMutation,
    Reject_PersonMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Reject_PersonMutation,
    Reject_PersonMutationVariables
  >(Reject_PersonDocument, options)
}

function useAcceptFriend (
  baseOptions?: Apollo.MutationHookOptions<
    Accept_FriendMutation,
    Accept_FriendMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Accept_FriendMutation,
    Accept_FriendMutationVariables
  >(Accept_FriendDocument, options)
}

function useRemoveFromNewsMatches (
  baseOptions?: Apollo.MutationHookOptions<
    Remove_Candidate_From_NewMutation,
    Remove_Candidate_From_NewMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Remove_Candidate_From_NewMutation,
    Remove_Candidate_From_NewMutationVariables
  >(Remove_Candidate_From_NewDocument, options)
}

export function useFriendRequestSubscription (
  baseOptions?: Apollo.SubscriptionHookOptions<
    Response_Friend_RequestSubscription,
    Response_Friend_RequestSubscriptionVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    Response_Friend_RequestSubscription,
    Response_Friend_RequestSubscriptionVariables
  >(Response_Friend_RequestDocument, options)
}

export {
  useLazyCandidatePagination,
  useCandidate,
  useSendRequestCandidate,
  useRejectCandidate,
  useCancelCandidate,
  useRejectPerson,
  useToogleFavoriteCandidate,
  useAcceptFriend,
  useRemoveFromNewsMatches
}
