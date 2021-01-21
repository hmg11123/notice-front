import { gql } from "apollo-boost";

export const GET_GALLERY = gql`
 query getGallery($id: String!) {
  getGallery(id: $id) {
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
export const UPDATE_GALLERY = gql`
 mutation updateGallery(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updateGallery(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_GALLERY = gql`
 mutation deleteGallery($id: String!) {
  deleteGallery(id: $id)
 }
`;

export const RECOMMENDATION_UP = gql`
 mutation galleryRecomUp(
  $id: String!
  $recomUser: String!
  $recommendation: Int!
 ) {
  galleryRecomUp(
   id: $id
   recomUser: $recomUser
   recommendation: $recommendation
  )
 }
`;
