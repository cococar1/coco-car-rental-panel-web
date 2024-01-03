import { gql } from '@apollo/client'

export const CANDIDATES_PAGINATION = gql`
  query CANDIDATES_PAGINATION(
    $search: String!
    $filter: FilterUserInput!
    $limit: Int
    $page: Int
  ) {
    findUsersFiltered(
      search: $search
      filter: $filter
      limit: $limit
      page: $page
    ) {
      count
      pageInfo {
        currentPage
        perPage
        pageCount
        itemCount
        hasNextPage
        hasPreviousPage
      }
      data {
        _id
        firstName
        lastName
        username
        address {
          country
          street
          city
          province
          long
          lat
        }
        photo
        requestVerified
      }
    }
  }
`
