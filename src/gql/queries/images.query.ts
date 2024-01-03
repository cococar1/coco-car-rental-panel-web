import { gql } from '@apollo/client'

export const GET_IMAGE = gql`
  query GET_IMAGE($key: String!) {
    getImage(key: $key)
  }
`
