import { gql } from "apollo-boost";

export const GET_POPULAR_GALLERY = gql`
 query getPopularGallery($id: String!) {
  getPopularGallery(id: $id) {
   _id
   title
   description
   createdAt
   isDelete
   deletedAt
   author
   hit
   imgPath
  }
 }
`;
export const UPDATE_POPULAR_GALLERY = gql`
 mutation updatePopularGallery(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updatePopularGallery(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_POPULAR_GALLERY = gql`
 mutation deletePopularGallery($id: String!) {
  deletePopularGallery(id: $id)
 }
`;
