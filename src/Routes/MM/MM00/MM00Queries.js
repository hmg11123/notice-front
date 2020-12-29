import { gql } from "apollo-boost";

export const GET_ALL_NOTICE = gql`
 query getAllNotice {
  getAllNotice {
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
 query getAllPopularGallery {
  getAllPopularGallery {
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
