import { gql } from "apollo-boost";

export const GET_JOIN = gql`
 query getJoin($id: String!) {
  getJoin(id: $id) {
   _id
   title
   description
   createdAt
   isDelete
   deletedAt
   author
   hit
   recommendation
   recomUser
   detailAuthor
  }
 }
`;
export const UPDATE_JOIN = gql`
 mutation updateJoin($id: String!, $title: String!, $description: String!) {
  updateJoin(id: $id, title: $title, description: $description)
 }
`;

export const DELETE_JOIN = gql`
 mutation deleteJoin($id: String!) {
  deleteJoin(id: $id)
 }
`;

export const RECOMMENDATION_UP = gql`
 mutation joinRecomUp(
  $id: String!
  $recomUser: String!
  $recommendation: Int!
 ) {
  joinRecomUp(id: $id, recomUser: $recomUser, recommendation: $recommendation)
 }
`;
