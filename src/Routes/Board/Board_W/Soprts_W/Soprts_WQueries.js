import { gql } from "apollo-boost";

export const CREATE_SOPRTS = gql`
 mutation createSoprts(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createSoprts(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;
