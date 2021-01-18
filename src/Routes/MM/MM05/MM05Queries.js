import { gql } from "apollo-boost";

export const GET_ALL_GAME = gql`
 query getAllGame($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllGame(
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

export const GET_ALL_GAME_LENGTH = gql`
 query getAllGamelength($searchValue: String!) {
  getAllGamelength(searchValue: $searchValue)
 }
`;

export const CREATE_GAME = gql`
 mutation createGame(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createGame(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const GET_GAME_TOTAL_PAGE = gql`
 query getGameTotalPage($limit: Int!, $searchValue: String!) {
  getGameTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
