import { gql } from "apollo-boost";

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
   author
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
