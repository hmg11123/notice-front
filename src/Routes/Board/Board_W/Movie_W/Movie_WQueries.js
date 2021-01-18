import { gql } from "apollo-boost";

export const CREATE_MOVIE_Board = gql`
 mutation createMovieBoard(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createMovieBoard(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;
