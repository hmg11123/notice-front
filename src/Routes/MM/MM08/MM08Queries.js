import { gql } from "apollo-boost";

export const GET_ALL_PHOTO = gql`
 query getAllPhoto($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllPhoto(
   searchValue: $searchValue
   limit: $limit
   currentPage: $currentPage
  ) {
   _id
   title
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

export const GET_ALL_PHOTO_LENGTH = gql`
 query getAllPhotolength($searchValue: String!) {
  getAllPhotolength(searchValue: $searchValue)
 }
`;

export const CREATE_PHOTO = gql`
 mutation createPhoto($title: String!, $author: String!, $imgPath: String) {
  createPhoto(title: $title, author: $author, imgPath: $imgPath)
 }
`;

export const GET_PHOTO_TOTAL_PAGE = gql`
 query getPhotoTotalPage($limit: Int!, $searchValue: String!) {
  getPhotoTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
