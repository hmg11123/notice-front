import { gql } from "apollo-boost";

export const GET_PHOTO = gql`
 query getPhoto($id: String!) {
  getPhoto(id: $id) {
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
   detailAuthor
  }
 }
`;
export const UPDATE_PHOTO = gql`
 mutation updatePhoto(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updatePhoto(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_PHOTO = gql`
 mutation deletePhoto($id: String!) {
  deletePhoto(id: $id)
 }
`;

export const RECOMMENDATION_UP = gql`
 mutation photoRecomUp(
  $id: String!
  $recomUser: String!
  $recommendation: Int!
 ) {
  photoRecomUp(id: $id, recomUser: $recomUser, recommendation: $recommendation)
 }
`;
