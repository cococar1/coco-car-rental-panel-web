/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable array-callback-return */
import { useEffect, useContext } from 'react'

import { ConfigContext } from '@/contexts/ConfigService'

import {
  useAcceptFriend,
  useCancelCandidate,
  useRejectPerson,
  useRemoveFromNewsMatches,
  useSendRequestCandidate,
  useToogleFavoriteCandidate
} from '@/services/domain/useCandidateRepository'

import { AuthContext } from '@/contexts/AuthContext'
import { ArrayContent } from '@/utils/constans'
import { personsRequest } from '@/types/user.type'
import { useRetryMutation } from '@/hooks/useRetryMutation'
import { ApolloError } from '@apollo/client'
import { UIContext } from '@/contexts/ui'
import { useEventBus } from '@/hooks/useEventBus'
import { EventBusVariant } from '@/types/eventBus.type'
import { filterByNewsCandidates } from '@/domain/entities/candidates'
import { ISendMessage } from '@/domain/entities/message'

interface IUseCandidates {
  toogleFavorite: (id: string) => void
  cancelRequest: (id: string) => void
  rejectPersonList: (id: string) => void
  userLikesStrategy: (id: string) => void
  sendRequest: (id: string) => void
  removePersonFromNewMatches: (id: string) => void
  favoriteOptions: {
    loading: boolean
    error: ApolloError | undefined
  }
}

export const useCandidates = (): IUseCandidates => {
  const { subscribe } = useEventBus()
  const { refetchUser } = useContext(AuthContext)
  const { setMatchModal } = useContext(UIContext)
  const { levels: { filter = {}, user = {} } = {} } = useContext(ConfigContext)

  const [acceptFriend] = useAcceptFriend()
  const [rejectPerson] = useRejectPerson()
  const [cancelCandidte] = useCancelCandidate()
  const [sendRequestCandidate] = useSendRequestCandidate()
  const [removeFromNewMatches] = useRemoveFromNewsMatches()
  const [
    toogleFavoriteCandidate,
    { loading: ldToogleFav, error: errToogleFav }
  ] = useToogleFavoriteCandidate()

  const retrySendRequest = useRetryMutation(sendRequestCandidate)
  const retryAcceptFriend = useRetryMutation(acceptFriend)
  const retryRejectPerson = useRetryMutation(rejectPerson)

  const isSendRequest = (idSendCandidate: string) => {
    return user?.persons?.find(
      person =>
        person?.user?._id === idSendCandidate &&
        person?.status === personsRequest.REQUESTED
    )
  }

  const sendRequest = async (id: string) => {
    await sendRequestCandidate({
      variables: {
        id
      }
    })
      .then(() => {
        refetchUser()
      })
      .catch(() => {
        retrySendRequest({ id })
        refetchUser()
      })
  }

  const cancelRequest = async (id: string) => {
    await cancelCandidte({
      variables: {
        id
      }
    }).then(() => {
      refetchUser()
    })
  }

  const rejectPersonList = async (id: string) => {
    await rejectPerson({
      variables: {
        id
      },
      fetchPolicy: 'network-only'
    })
      .then(() => {
        refetchUser()
      })
      .catch(() => {
        retryRejectPerson({ id })
      })
  }

  const toogleFavorite = async (id: string): Promise<void> => {
    await toogleFavoriteCandidate({
      variables: {
        id
      }
    }).then(() => {
      refetchUser()
    })
  }

  const acceptFriendRequest = async (id: string): Promise<void> => {
    await acceptFriend({
      variables: {
        id
      }
    })
      .then(() => {
        refetchUser()
      })
      .catch(() => {
        retryAcceptFriend({ id })
        refetchUser()
      })
  }

  const userLikesStrategy = (id: string) => {
    if (isSendRequest(id)) {
      acceptFriendRequest(id).then(() => {
        setMatchModal(true)
      })
    } else {
      sendRequest(id)
    }
  }

  const removePersonFromNewMatches = async (userId: string) => {
    await removeFromNewMatches({
      variables: {
        userId: userId!
      }
    })
      .then(() => {
        refetchUser()
      })
      .catch(() => {
        console.log('error')
      })
  }

  useEffect(() => {
    const isNew = filterByNewsCandidates(user?.persons as Person[])
    const handleMessageSent = (data: ISendMessage) => {
      if (isNew?.length > ArrayContent.EMPTY) {
        removePersonFromNewMatches(data.message.to?._id!)
      }
    }

    subscribe(EventBusVariant.MESSAGE_SEND, handleMessageSent)
  }, [subscribe])

  return {
    favoriteOptions: {
      loading: ldToogleFav,
      error: errToogleFav
    },
    sendRequest,
    cancelRequest,
    toogleFavorite,
    rejectPersonList,
    removePersonFromNewMatches,
    userLikesStrategy
  }
}
