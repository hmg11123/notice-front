import { gql } from "apollo-boost";

export const CREATE_GAME_BOARD = gql`
 mutation createGameBoard(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
  $detailAuthor: String!
 ) {
  createGameBoard(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
   detailAuthor: $detailAuthor
  )
 }
`;
