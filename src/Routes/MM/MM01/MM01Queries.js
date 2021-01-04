import { gql } from "apollo-boost";

export const CREATE_USER = gql`
 mutation createUser(
  $email: String!
  $nickName: String!
  $name: String!
  $mobile: String!
  $isDelete: Boolean!
  $deletedAt: String!
 ) {
  createUser(
   email: $email
   nickName: $nickName
   name: $name
   mobile: $mobile
   isDelete: $isDelete
   deletedAt: $deletedAt
  )
 }
`;
