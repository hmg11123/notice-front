import { gql } from "apollo-boost";

export const GET_ALL_NOTICE = gql`
 query getAllNotice($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllNotice(
   searchValue: $searchValue
   limit: $limit
   currentPage: $currentPage
  ) {
   _id
   type
   title
   description
   #    author
   createdAt
   isDelete
   deletedAt
  }
 }
`;

export const GET_ALL_POPULAR_GALLERY = gql`
 query getAllPopularGallery(
  $searchValue: String!
  $limit: Int!
  $currentPage: Int!
 ) {
  getAllPopularGallery(
   searchValue: $searchValue
   limit: $limit
   currentPage: $currentPage
  ) {
   _id
   title
   description
   createdAt
   isDelete
   deletedAt
   hit
   imgPath
  }
 }
`;

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
   deletedAt
   hit
   imgPath
  }
 }
`;

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
   deletedAt
   hit
   imgPath
  }
 }
`;

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
   deletedAt
   hit
   imgPath
  }
 }
`;

export const GET_POPULAR_GALLERY_TOTAL_PAGE = gql`
 query getPopularGalleryTotalPage($limit: Int!, $searchValue: String!) {
  getPopularGalleryTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
