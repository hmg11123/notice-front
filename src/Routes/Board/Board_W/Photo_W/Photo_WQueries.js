import { gql } from "apollo-boost";

export const CREATE_PHOTO = gql`
 mutation createPhoto(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
  $detailAuthor: String!
 ) {
  createPhoto(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
   detailAuthor: $detailAuthor
  )
 }
`;
