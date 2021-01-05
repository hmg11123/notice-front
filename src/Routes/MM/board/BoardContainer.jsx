import React from "react";
import BoardPresenter from "./BoardPresenter";
import { GET_POPULAR_GALLERY } from "./BoardQueries";
import { useQuery, useMutation } from "react-apollo-hooks";

const BoardContainer = ({ match }) => {
 ////////////// - USE CONTEXT- ///////////////

 ////////////// - USE STATE- ///////////////

 ///////////// - USE QUERY- ////////////////
 const {
  data: popularGalleryData,
  loading: popularGalleryLoding,
  refetch: popularGalleryRefetch,
 } = useQuery(GET_POPULAR_GALLERY, {
  variables: {
   id: match.params.key,
  },
 });

 ///////////// - USE MUTATION- /////////////

 ///////////// - EVENT HANDLER- ////////////

 ///////////// - USE EFFECT- ///////////////

 return (
  <BoardPresenter
   popularGalleryData={
    popularGalleryData && popularGalleryData.getPopularGallery
   }
  ></BoardPresenter>
 );
};

export default BoardContainer;
