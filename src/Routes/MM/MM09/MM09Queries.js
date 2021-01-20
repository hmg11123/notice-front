import { gql } from "apollo-boost";

export const GET_ALL_JOIN = gql`
 query getAllJoin($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllJoin(
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

export const GET_ALL_JOIN_LENGTH = gql`
 query getAllJoinlength($searchValue: String!) {
  getAllJoinlength(searchValue: $searchValue)
 }
`;

export const CREATE_JOIN = gql`
 mutation createJoin(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createJoin(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const GET_JOIN_TOTAL_PAGE = gql`
 query getJoinTotalPage($limit: Int!, $searchValue: String!) {
  getJoinTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
