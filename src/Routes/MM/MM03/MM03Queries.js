import { gql } from "apollo-boost";

export const GET_ALL_RECOM_POP_GALL = gql`
 query getAllRecomPopGall(
  $searchValue: String!
  $limit: Int!
  $currentPage: Int!
 ) {
  getAllRecomPopGall(
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
export const GET_GALLERY = gql`
 query getGallery($id: String!) {
  getGallery(id: $id) {
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

export const GET_ALL_POPULAR_GALLERY_LENGTH = gql`
 query getAllPopularGallerylength($searchValue: String!) {
  getAllPopularGallerylength(searchValue: $searchValue)
 }
`;

// export const CREATE_POPULAR_GALLERY = gql`
//  mutation createPopularGallery(
//   $title: String!
//   $author: String!
//   $description: String!
//   $imgPath: String
//  ) {
//   createPopularGallery(
//    title: $title
//    author: $author
//    description: $description
//    imgPath: $imgPath
//   )
//  }
// `;

export const GET_POPULAR_GALLERY_TOTAL_PAGE = gql`
 query getPopularGalleryTotalPage($limit: Int!, $searchValue: String!) {
  getPopularGalleryTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
