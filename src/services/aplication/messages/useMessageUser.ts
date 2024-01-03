/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useContext, useState } from 'react'
import { FieldValues, UseFormSetValue, useForm } from 'react-hook-form'

import {
  useAllMessage,
  useHistoryMessage,
  useSendMessage
} from '@/services/domain/useMessageRepository'
import { ConfigContext } from '@/contexts/ConfigService'
import {
  AllMessage,
  Message,
  ResponseHistory,
  Typemessage
} from '@/graphql/graphql.types'
import { useEventBus } from '@/hooks/useEventBus'
import { EventBusVariant } from '@/types/eventBus.type'
import { IDataImage } from '@/domain/entities/photos'
import {
  ISendMessage,
  ResendObjectBuilder,
  updateQueryAllMessages
} from '@/domain/entities/message'

import { useApolloClient } from '@apollo/client'

interface IFilter {
  dateFrom?: string
  dateTo?: string
  userId: string
}
export interface IResendMessage {
  id: string
  message?: string
  file?: ISendMessage['file']
}
export interface IMessage {
  currentPage: number | null
  messages: Message[] | undefined
  pageInfo: ResponseHistory['pageInfo']
  messageWrite: string
  allMessages: AllMessage[] | null
  allMessagesOptions: {
    loading: boolean
  }
  sendMessageOptions: {
    loading: boolean
  }

  historyMessageOptions: {
    loading: boolean
    error: any
  }
  handleSendMessage: (file: IDataImage) => void
  changePageHistory: (value: number) => void
  refetchAllMessage: () => void
  setValue: UseFormSetValue<FieldValues>
  getMessageByUser: (objet: IFilter) => void
  handleResendMessage: (value: IResendMessage) => void
}

export const useMessageUser = (): IMessage => {
  const [page, changePage] = useState<number | null>(1)
  const [perPage, changeLimit] = useState<number>(12)
  const [messages, setMessages] = useState<ResponseHistory['data']>()

  const [loadingResend, setLoadingResend] = useState<boolean>(false)
  const { publish } = useEventBus()

  const { levels: { user = {}, currentChat = {} } = {} } =
    useContext(ConfigContext)

  const { watch, setValue } = useForm()
  const [sendMessage] = useSendMessage()
  const {
    data: { history = {} } = {},
    loading: loadHistory,
    error: errHistory
  } = useHistoryMessage({
    variables: {
      to: currentChat?._id!,
      page,
      limit: perPage
    },
    onCompleted: ({ history }) => {
      setMessages(prevList => prevList && [...prevList, ...history?.data])
    }
  })

  const {
    data: { getAllMessage = [] } = {},
    loading: loadAllMessage,
    refetch: refetchAllMesage
  } = useAllMessage()

  const messageWrite = watch('message')
  // const getMessageByUser = async ({ userId }: IFilter) => {
  //   try {
  //     const { data } = await getMessage({
  //       variables: {
  //         to: userId,
  //         page,
  //         limit: perPage
  //       },
  //       fetchPolicy: 'network-only'
  //     })

  //     setMessages(data?.history?.data!)
  //   } catch (error) {}
  // }

  const handleSendMessage = async ({ file }: IDataImage) => {
    const isFile = file instanceof File

    if (isFile) {
      await sendMessage({
        variables: {
          to: currentChat?._id!,
          file
        }
      })
        .then(({ data }) => {
          const messageSended = data?.sendMessage!

          const objetSend = new ResendObjectBuilder()
            .setMessageContent(messageSended.content)
            .setFromUserId(messageSended?.from?._id!)
            .setToUserId(currentChat?._id!)
            .setSentAt(messageSended.sentAt)
            .setErrorStatus(false)
            .setTypeUser(Typemessage.Image)
            .setFileUrl(null)
            .setNameFileName(null)
            .build()
          updateQueryAllMessages(messageSended)
          publish(EventBusVariant.MESSAGE_SEND, objetSend)
        })
        .catch(() => {
          const objet = new ResendObjectBuilder()
            .setMessageContent(null)
            .setFromUserId(user?._id!)
            .setToUserId(currentChat?._id!)
            .setErrorStatus(true)
            .setTypeUser(Typemessage.Image)
            .setFileUrl(URL?.createObjectURL(file))
            .setNameFileName(file?.name)
            .build()

          publish(EventBusVariant.MESSAGE_DONT_SEND, objet)
        })
    } else {
      try {
        if (!messageWrite) {
          throw new Error('Message is required')
        }

        await sendMessage({
          variables: {
            to: currentChat?._id!,
            content: messageWrite
          }
        })
          .then(({ data }) => {
            const messageSended = data?.sendMessage!

            const objetSend = new ResendObjectBuilder()
              .setMessageContent(messageSended.content)
              .setFromUserId(messageSended?.from?._id!)
              .setToUserId(currentChat?._id!)
              .setSentAt(messageSended.sentAt)
              .setErrorStatus(false)
              .setTypeUser(messageSended.type)
              .setFileUrl(null)
              .setNameFileName(null)
              .build()

            updateQueryAllMessages(messageSended)

            publish(EventBusVariant.MESSAGE_SEND, objetSend)
          })
          .catch(_error => {
            const objet = new ResendObjectBuilder()
              .setMessageContent(messageWrite)
              .setFromUserId(user?._id!)
              .setToUserId(currentChat?._id!)
              .setErrorStatus(true)
              .setTypeUser(Typemessage.Text)
              .setNameFileName(null)
              .build()
            publish(EventBusVariant.MESSAGE_DONT_SEND, objet)
          })

        setValue('message', '')
      } catch (error) {}
    }
  }

  const handleResendMessage = async ({ id, message, file }: IResendMessage) => {
    setLoadingResend(true)
    if (file?.url) {
      const getBlobFromUrl = async (url: string): Promise<Blob | null> => {
        try {
          const response = await fetch(url)
          const blob = await response.blob()
          return blob
        } catch (error) {
          console.error('Error al obtener el Blob:', error)
          return null
        }
      }
      const newFile = await getBlobFromUrl(file?.url!)
      const newFile2 = new File(
        [newFile!],
        file?.nameFile?.replace(/\.[^/.]+$/, '')!,
        {
          type: newFile?.type
        }
      )
      return sendMessage({
        variables: {
          to: id!,
          file: newFile2
        }
      }).then(({ data }) => {
        const messageSended = data?.sendMessage!
        const objetSend = new ResendObjectBuilder()
          .setMessageContent(messageSended.content)
          .setFromUserId(messageSended?.from?._id!)
          .setSentAt(messageSended.sentAt)
          .setToUserId(currentChat?._id!)
          .setErrorStatus(false)
          .setTypeUser(messageSended.type)
          .setFileUrl(null)
          .setNameFileName(null)
          .build()
        updateQueryAllMessages(messageSended)
        publish(EventBusVariant.MESSAGE_SEND, objetSend)
      })
    } else {
      return sendMessage({
        variables: {
          to: id,
          content: message
        }
      }).then(({ data }) => {
        const messageSended = data?.sendMessage!
        const objetSend = new ResendObjectBuilder()
          .setMessageContent(messageSended.content)
          .setFromUserId(messageSended?.from?._id!)
          .setToUserId(currentChat?._id!)
          .setSentAt(messageSended.sentAt)
          .setErrorStatus(false)
          .setTypeUser(messageSended.type)
          .setFileUrl(null)
          .setNameFileName(null)
          .build()
        setLoadingResend(false)
        updateQueryAllMessages(messageSended)
        publish(EventBusVariant.MESSAGE_SEND, objetSend)
      })
    }
  }
  const refetchAllMessage = () => {
    refetchAllMesage()
  }

  return {
    messages: messages as Message[],
    pageInfo: history?.pageInfo!,
    currentPage: page,
    messageWrite,
    allMessages: getAllMessage as AllMessage[],

    allMessagesOptions: {
      loading: loadAllMessage
    },
    historyMessageOptions: {
      loading: loadHistory,
      error: errHistory
    },

    sendMessageOptions: {
      loading: loadingResend
    },
    changePageHistory: a => {
      changePage(a)
    },
    handleSendMessage,
    handleResendMessage,
    setValue,
    refetchAllMessage,
    getMessageByUser: () => {}
  }
}
