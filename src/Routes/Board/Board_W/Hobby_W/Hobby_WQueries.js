import { gql } from "apollo-boost";

export const CREATE_HOBBY = gql`
 mutation createHobby(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createHobby(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;
