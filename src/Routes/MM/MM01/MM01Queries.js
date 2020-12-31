import { gql } from "apollo-boost";

export const CREATE_USER = gql`
 mutation createUser(
  $email: String!
  $nickName: String!
  $name: String!
  $passWord: String!
  $isDelete: Boolean!
  $deletedAt: String!
 ) {
  createUser(
   email: $email
   nickName: $nickName
   name: $name
   passWord: $passWord
   isDelete: $isDelete
   deletedAt: $deletedAt
  )
 }
`;
