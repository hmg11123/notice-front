import { gql } from "apollo-boost";

export const GET_ALL_MOVIE = gql`
 query getAllMovie($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllMovie(
   searchValue: $searchValue
   limit: $limit
   currentPage: $currentPage
  ) {
   _id
   title
   description
   createdAt
   isDelete
   author
   recommendation
   deletedAt
   hit
   imgPath
  }
 }
`;

export const GET_ALL_MOVIE_LENGTH = gql`
 query getAllMovielength($searchValue: String!) {
  getAllMovielength(searchValue: $searchValue)
 }
`;

export const CREATE_MOVIE = gql`
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

export const GET_MOVIE_TOTAL_PAGE = gql`
 query getMovieTotalPage($limit: Int!, $searchValue: String!) {
  getMovieTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
