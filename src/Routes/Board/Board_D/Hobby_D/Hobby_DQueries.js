import { gql } from "apollo-boost";

export const GET_HOBBY = gql`
 query getHobby($id: String!) {
  getHobby(id: $id) {
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
export const UPDATE_HOBBY = gql`
 mutation updateHobby(
  $id: String!
  $title: String!
  $description: String!
  $imgPath: String!
 ) {
  updateHobby(
   id: $id
   title: $title
   description: $description
   imgPath: $imgPath
  )
 }
`;

export const DELETE_HOBBY = gql`
 mutation deleteHobby($id: String!) {
  deleteHobby(id: $id)
 }
`;

export const RECOMMENDATION_UP = gql`
 mutation hobbyRecomUp(
  $id: String!
  $recomUser: String!
  $recommendation: Int!
 ) {
  hobbyRecomUp(id: $id, recomUser: $recomUser, recommendation: $recommendation)
 }
`;
