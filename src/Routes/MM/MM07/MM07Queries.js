import { gql } from "apollo-boost";

export const GET_ALL_SOPRTS = gql`
 query getAllSoprts($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllSoprts(
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

export const GET_ALL_SOPRTS_LENGTH = gql`
 query getAllSoprtslength($searchValue: String!) {
  getAllSoprtslength(searchValue: $searchValue)
 }
`;

export const CREATE_SOPRTS = gql`
 mutation createSoprts(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createSoprts(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const GET_SOPRTS_TOTAL_PAGE = gql`
 query getSoprtsTotalPage($limit: Int!, $searchValue: String!) {
  getSoprtsTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
