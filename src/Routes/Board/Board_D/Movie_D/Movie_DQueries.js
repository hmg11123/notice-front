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
   detailAuthor
  }
 }
`;
export const UPDATE_MOVIE = gql`
 mutation updateMovieBaord(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updateMovieBaord(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_MOVIE = gql`
 mutation deleteMovieBaord($id: String!) {
  deleteMovieBaord(id: $id)
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
