import { gql } from "apollo-boost";

export const CREATE_JOIN = gql`
 mutation createJoin(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createJoin(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;
