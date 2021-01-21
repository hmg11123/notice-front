import { gql } from "apollo-boost";

export const CREATE_JOIN = gql`
 mutation createJoin(
  $title: String!
  $author: String!
  $description: String!
  $detailAuthor: String!
 ) {
  createJoin(
   title: $title
   author: $author
   description: $description
   detailAuthor: $detailAuthor
  )
 }
`;
