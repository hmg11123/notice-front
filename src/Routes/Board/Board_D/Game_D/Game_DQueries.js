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
   recommendation
   author
   recomUser
   hit
   imgPath
   detailAuthor
  }
 }
`;
export const UPDATE_GAME = gql`
 mutation updateGameBoard(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updateGameBoard(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_GAME = gql`
 mutation deleteGameBaord($id: String!) {
  deleteGameBaord(id: $id)
 }
`;

export const RECOMMENDATION_UP = gql`
 mutation gameRecomUp(
  $id: String!
  $recomUser: String!
  $recommendation: Int!
 ) {
  gameRecomUp(id: $id, recomUser: $recomUser, recommendation: $recommendation)
 }
`;
