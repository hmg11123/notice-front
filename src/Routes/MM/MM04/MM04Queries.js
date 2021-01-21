import { gql } from "apollo-boost";

export const GET_ALL_GALLERY = gql`
 query getAllGallery($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllGallery(
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

export const GET_ALL_GALLERY_LENGTH = gql`
 query getAllGallerylength($searchValue: String!) {
  getAllGallerylength(searchValue: $searchValue)
 }
`;

export const CREATE_GALLERY = gql`
 mutation createGallery(
  $title: String!
  $author: String!
  $description: String!
  $imgPath: String
 ) {
  createGallery(
   title: $title
   author: $author
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const GET_GALLERY_TOTAL_PAGE = gql`
 query getGalleryTotalPage($limit: Int!, $searchValue: String!) {
  getGalleryTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
