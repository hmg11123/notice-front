import { gql } from "apollo-boost";

export const GET_MOVIE_BOARD = gql`
 query getMovieBoard($id: String!) {
  getMovieBoard(id: $id) {
   _id
   title
   description
   createdAt
   isDelete
   deletedAt
   author
   hit
   imgPath
   recommendation
   recomUser
  }
 }
`;
export const UPDATE_MOVIE = gql`
 mutation updateMovie(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updateMovie(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_MOVIE = gql`
 mutation deleteMovie($id: String!) {
  deleteMovie(id: $id)
 }
`;

export const RECOMMENDATION_UP = gql`
 mutation recommendationUp(
  $id: String!
  $recomUser: String!
  $recommendation: Int!
 ) {
  recommendationUp(
   id: $id
   recomUser: $recomUser
   recommendation: $recommendation
  )
 }
`;
