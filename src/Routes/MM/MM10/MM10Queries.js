import { gql } from "apollo-boost";

export const GET_ALL_NOTICE = gql`
 query getAllNotice($searchValue: String!, $limit: Int!, $currentPage: Int!) {
  getAllNotice(
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

export const GET_ALL_NOTICE_LENGTH = gql`
 query getAllNoticelength($searchValue: String!) {
  getAllNoticelength(searchValue: $searchValue)
 }
`;

export const GET_NOTICE_TOTAL_PAGE = gql`
 query getNoticeTotalPage($limit: Int!, $searchValue: String!) {
  getNoticeTotalPage(limit: $limit, searchValue: $searchValue)
 }
`;
