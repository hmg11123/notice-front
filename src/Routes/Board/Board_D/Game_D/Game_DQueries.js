import { gql } from "apollo-boost";

export const GET_GAME_BOARD = gql`
 query getGameBoard($id: String!) {
  getGameBoard(id: $id) {
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
export const UPDATE_GAME = gql`
 mutation updateGame(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updateGame(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_GAME = gql`
 mutation deleteGame($id: String!) {
  deleteGame(id: $id)
 }
`;
