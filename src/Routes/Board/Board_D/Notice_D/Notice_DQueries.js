import { gql } from "apollo-boost";

export const GET_NOTICE = gql`
 query getNotice($id: String!) {
  getNotice(id: $id) {
   _id
   title
   description
   createdAt
   isDelete
   deletedAt
   author
   hit
   imgPath
   recommendation
   recomUser
  }
 }
`;
export const UPDATE_NOTICE = gql`
 mutation updateNotice(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updateNotice(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_NOTICE = gql`
 mutation deleteNotice($id: String!) {
  deleteNotice(id: $id)
 }
`;

export const RECOMMENDATION_UP = gql`
 mutation noticeRecomUp(
  $id: String!
  $recomUser: String!
  $recommendation: Int!
 ) {
  noticeRecomUp(id: $id, recomUser: $recomUser, recommendation: $recommendation)
 }
`;
