import { gql } from "apollo-boost";

export const CREATE_USER = gql`
 mutation createUser(
  $type: String!
  $email: String!
  $nickName: String!
  $name: String!
  $mobile: String!
  $isDelete: Boolean!
  $deletedAt: String!
 ) {
  createUser(
   type: $type
   email: $email
   nickName: $nickName
   name: $name
   mobile: $mobile
   isDelete: $isDelete
   deletedAt: $deletedAt
  )
 }
`;

export const GET_ALL_USER = gql`
 mutation getAllUser {
  getAllUser {
   email
  }
 }
`;

export const USER_LENGTH = gql`
 query userLength {
  userLength
 }
`;
