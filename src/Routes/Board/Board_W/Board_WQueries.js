import { gql } from "apollo-boost";

export const CREATE_POPULAR_GALLERY = gql`
 mutation createPopularGallery(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createPopularGallery(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;
