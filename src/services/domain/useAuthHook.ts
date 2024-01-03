/* eslint-disable import/export */
/* eslint-disable camelcase */
import { SEND_CODE_SMS } from '@/gql/queries/phone.query'
import {
  Code_Sms_LoginDocument,
  Get_User_TokenDocument,
  Get_User_TokenLazyQueryHookResult,
  Update_Status_OnlineDocument,
  Verify_Code_SmsDocument
} from '@/graphql/graphql.hooks'
import {
  Code_Sms_LoginQuery,
  Code_Sms_LoginQueryVariables,
  Get_User_TokenQuery,
  Get_User_TokenQueryVariables,
  Send_Code_SmsQuery,
  Send_Code_SmsQueryVariables,
  Update_Status_OnlineMutation,
  Update_Status_OnlineMutationVariables,
  User,
  Verify_Code_SmsQuery,
  Verify_Code_SmsQueryVariables
} from '@/graphql/graphql.types'

import * as Apollo from '@apollo/client'

import { useContext } from 'react'
import { ConfigContext } from '@/contexts/ConfigService'
import { setTokens } from '../aplication/auth/authCero'
import { GET_USER_TOKEN } from '@/gql/queries/userToken.query'

function useVerifyCodeSmsQuery (
  baseOptions: Apollo.QueryHookOptions<
    Verify_Code_SmsQuery,
    Verify_Code_SmsQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Verify_Code_SmsQuery, Verify_Code_SmsQueryVariables>(
    Verify_Code_SmsDocument,
    options
  )
}

function useLazyVerifyCodeSms (
  baseOptions?: Apollo.LazyQueryHookOptions<
    Verify_Code_SmsQuery,
    Verify_Code_SmsQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    Verify_Code_SmsQuery,
    Verify_Code_SmsQueryVariables
  >(Verify_Code_SmsDocument, options)
}

function useSendCodeSmsQuery (
  baseOptions: Apollo.QueryHookOptions<
    Send_Code_SmsQuery,
    Send_Code_SmsQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Send_Code_SmsQuery, Send_Code_SmsQueryVariables>(
    SEND_CODE_SMS,
    options
  )
}

function useLazySendCodeSms (
  baseOptions?: Apollo.LazyQueryHookOptions<
    Send_Code_SmsQuery,
    Send_Code_SmsQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Send_Code_SmsQuery, Send_Code_SmsQueryVariables>(
    SEND_CODE_SMS,
    options
  )
}

function useCodeSmsLoginQuery (
  baseOptions: Apollo.QueryHookOptions<
    Code_Sms_LoginQuery,
    Code_Sms_LoginQueryVariables
  >
) {
  const defaultOptions = {}
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Code_Sms_LoginQuery, Code_Sms_LoginQueryVariables>(
    Code_Sms_LoginDocument,
    options
  )
}

function useLazyCodeSmsLogin (
  baseOptions?: Apollo.LazyQueryHookOptions<
    Code_Sms_LoginQuery,
    Code_Sms_LoginQueryVariables
  >
) {
  const { setUser } = useContext(ConfigContext) || {}

  const defaultOptions = {
    onCompleted (data: Code_Sms_LoginQuery) {
      const userData = data.verifyCodeSmsLogin

      setUser(userData?.user as User)
      setTokens(userData)
    }
  }
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Code_Sms_LoginQuery, Code_Sms_LoginQueryVariables>(
    Code_Sms_LoginDocument,
    options
  )
}

function useLazyTokenUser (
  baseOptions?: Apollo.LazyQueryHookOptions<
    Get_User_TokenQuery,
    Get_User_TokenQueryVariables
  >
): Get_User_TokenLazyQueryHookResult {
  const { setUser } = useContext(ConfigContext)
  const defaultOptions = {
    onCompleted (data: Get_User_TokenQuery) {
      const userData = data.dataWithToken
      setUser(userData as User)
    },
    notifyOnNetworkStatusChange: true
  }
  const options = {
    ...defaultOptions,
    ...baseOptions
  }
  return Apollo.useLazyQuery<Get_User_TokenQuery, Get_User_TokenQueryVariables>(
    GET_USER_TOKEN,
    options
  )
}

export {
  useVerifyCodeSmsQuery,
  useLazyVerifyCodeSms,
  useSendCodeSmsQuery,
  useLazySendCodeSms,
  useCodeSmsLoginQuery,
  useLazyCodeSmsLogin,
  useLazyTokenUser
}
