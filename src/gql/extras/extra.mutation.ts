import { gql } from "@apollo/client";

export const CREATE_EXTRA = gql`
  mutation CREATE_EXTRA($data: CreateExtraInput!) {
    createExtra(data: $data) {
      _id
      title
      description
      type
      createdAt
      updatedAt
    }
  }
`;




export const DELETE_EXTRA =gql`
mutation DELETE_EXTRA($id:ID!){
  removeExtra(id:$id)
}
`