import { gql } from "apollo-boost";

export const GET_SOPRTS = gql`
 query getSoprts($id: String!) {
  getSoprts(id: $id) {
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
   detailAuthor
  }
 }
`;
export const UPDATE_SOPRTS = gql`
 mutation updateSoprts(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updateSoprts(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_SOPRTS = gql`
 mutation deleteSoprts($id: String!) {
  deleteSoprts(id: $id)
 }
`;

export const RECOMMENDATION_UP = gql`
 mutation soprtsRecomUp(
  $id: String!
  $recomUser: String!
  $recommendation: Int!
 ) {
  soprtsRecomUp(id: $id, recomUser: $recomUser, recommendation: $recommendation)
 }
`;
