import { gql } from "apollo-boost";

export const UPDATE_USER = gql`
 mutation updateUser(
  $id: String!
  $email: String!
  $name: String!
  $nickName: String!
  $mobile: String!
 ) {
  updateUser(
   id: $id
   email: $email
   name: $name
   nickName: $nickName
   mobile: $mobile
  )
 }
`;

export const VIEW_USER = gql`
 query viewUser($email: String!) {
  viewUser(email: $email) {
   _id
   email
   name
   nickName
   mobile
  }
 }
`;
