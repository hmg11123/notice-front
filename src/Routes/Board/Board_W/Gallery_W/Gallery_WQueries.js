import { gql } from "apollo-boost";

export const CREATE_GALLERY = gql`
 mutation createGallery(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createGallery(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;
