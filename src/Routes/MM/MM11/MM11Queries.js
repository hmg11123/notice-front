import { gql } from "apollo-boost";

export const GET_ALL_HOBBY = gql`
 query getAllHobby($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllHobby(
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

export const GET_ALL_HOBBY_LENGTH = gql`
 query getAllHobbylength($searchValue: String!) {
  getAllHobbylength(searchValue: $searchValue)
 }
`;

export const CREATE_HOBBY = gql`
 mutation createHobby(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createHobby(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const GET_HOBBY_TOTAL_PAGE = gql`
 query getHobbyTotalPage($limit: Int!, $searchValue: String!) {
  getHobbyTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
