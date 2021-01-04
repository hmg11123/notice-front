import { gql } from "apollo-boost";

export const TRY_LOGIN = gql`
 mutation tryLogin($email: String!) {
  tryLogin(email: $email)
 }
`;

export const CHECK_CODE = gql`
 query checkCode($email: String!) {
  checkCode(email: $email) {
   secretCode
  }
 }
`;

export const GET_USER = gql`
 query getUser($email: String!) {
  getUser(email: $email) {
   email
   nickName
   name
   mobile
   isDelete
   deletedAt
  }
 }
`;
