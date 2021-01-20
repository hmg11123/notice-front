import { gql } from "apollo-boost";

export const TRY_LOGIN = gql`
 mutation tryLogin($email: String!) {
  tryLogin(email: $email)
 }
`;

export const CHECK_CODE = gql`
 mutation checkCode($email: String!) {
  checkCode(email: $email) {
   secretCode
  }
 }
`;

export const GET_USER = gql`
 mutation getUser($email: String!, $secretCode: String!) {
  getUser(email: $email, secretCode: $secretCode) {
   _id
   email
   nickName
   name
   mobile
   isDelete
   deletedAt
  }
 }
`;

export const GET_ALL_USER = gql`
 mutation getAllUser {
  getAllUser {
   _id
   email
   nickName
   name
   mobile
   isDelete
   deletedAt
  }
 }
`;

export const USER_LENGTH = gql`
 query userLength {
  userLength
 }
`;
