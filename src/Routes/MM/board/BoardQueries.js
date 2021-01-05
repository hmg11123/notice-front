import { gql } from "apollo-boost";

export const GET_POPULAR_GALLERY = gql`
 query getPopularGallery($id: String!) {
  getPopularGallery(id: $id) {
   _id
   title
   description
   createdAt
   isDelete
   deletedAt
   author
   hit
   imgPath
  }
 }
`;
