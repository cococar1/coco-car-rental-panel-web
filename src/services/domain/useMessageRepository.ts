/* eslint-disable camelcase */
import * as Apollo from '@apollo/client'

import {
  All_MessagesDocument,
  Check_MessagesDocument,
  History_MessageDocument,
  Message_SubscriptionDocument,
  Send_Messages_UserDocument
} from '@/graphql/graphql.hooks'
import {
  All_MessagesQuery,
  All_MessagesQueryVariables,
  Check_MessagesQuery,
  Check_MessagesQueryVariables,
  History_MessageQuery,
  History_MessageQueryVariables,
  Message_SubscriptionSubscription,
  Message_SubscriptionSubscriptionVariables,
  Send_Messages_UserMutation,
  Send_Messages_UserMutationVariables
} from '@/graphql/graphql.types'

function useCheckMessage (
  baseOptions?: Apollo.QueryHookOptions<
    Check_MessagesQuery,
    Check_MessagesQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Check_MessagesQuery, Check_MessagesQueryVariables>(
    Check_MessagesDocument,
    options
  )
}
function useSendMessage (
  baseOptions?: Apollo.MutationHookOptions<
    Send_Messages_UserMutation,
    Send_Messages_UserMutationVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Send_Messages_UserMutation,
    Send_Messages_UserMutationVariables
  >(Send_Messages_UserDocument, options)
}

function useHistoryMessage (
  baseOptions: Apollo.QueryHookOptions<
    History_MessageQuery,
    History_MessageQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<History_MessageQuery, History_MessageQueryVariables>(
    History_MessageDocument,
    options
  )
}
function useAllMessage (
  baseOptions?: Apollo.QueryHookOptions<
    All_MessagesQuery,
    All_MessagesQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<All_MessagesQuery, All_MessagesQueryVariables>(
    All_MessagesDocument,
    options
  )
}

function useMessageSubs (
  baseOptions?: Apollo.SubscriptionHookOptions<
    Message_SubscriptionSubscription,
    Message_SubscriptionSubscriptionVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    Message_SubscriptionSubscription,
    Message_SubscriptionSubscriptionVariables
  >(Message_SubscriptionDocument, options)
}

export {
  useSendMessage,
  useHistoryMessage,
  useCheckMessage,
  useAllMessage,
  useMessageSubs
}
