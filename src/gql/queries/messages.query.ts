import { gql } from '@apollo/client'

export const CHECK_MESSAGES = gql`
  query CHECK_MESSAGES {
    checkMessages {
      _id
      content
      sentAt
      status
      from {
        _id
        firstName
        lastName
      }
      to {
        _id
        firstName
        lastName
      }
    }
  }
`

export const LIST_NEW_REQUEST = gql`
  query LIST_NEW_REQUEST {
    listRequest {
      user {
        _id
        firstName
        lastName
      }
      status
      sentAt
    }
  }
`
export const HISTORY_MESSAGE = gql`
  query HISTORY_MESSAGE($to: ID!, $limit: Int, $page: Int) {
    history(to: $to, limit: $limit, page: $page) {
      count
      data {
        _id
        content
        type
        status
        sentAt
        from {
          _id
          firstName
          lastName
          photo
          isOnline
        }
        to {
          _id
          firstName
          lastName
          photo
          isOnline
        }
      }
      pageInfo {
        currentPage
        perPage
        pageCount
        itemCount
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

export const ALL_MESSAGES = gql`
  query ALL_MESSAGES {
    getAllMessage {
      fromUser {
        _id
        firstName
        isOnline
        photo
        lastName
      }
      messages {
        _id
        status
        sentAt
        content
        from {
          _id
          firstName
          lastName
        }
        to {
          _id
          firstName
          lastName
        }
      }
    }
  }
`
