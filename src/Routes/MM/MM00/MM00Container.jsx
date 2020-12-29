import React from "react";
import MM00Presenter from "./MM00Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_ALL_NOTICE, GET_ALL_POPULAR_GALLERY } from "./MM00Queries";

const MM00Container = () => {
 ////////// VARIABLE     //////////

 ////////// USE SATETE   //////////

 ////////// USE REF      //////////

 ////////// USE CONTEXT  //////////

 ////////// USE QUERY    //////////
 const {
  data: noticeBannerDatum,
  loading: noticeBannerLoding,
  refetch: noticeBannerRefetch,
 } = useQuery(GET_ALL_NOTICE);

 const {
  data: popularGalleryBannerDatum,
  loading: popularGalleryBannerLoading,
  refetch: popularGalleryBannerRefetch,
 } = useQuery(GET_ALL_POPULAR_GALLERY);
 ////////// USE MUTATION //////////

 ////////// USE EFFECT   //////////

 return (
  <MM00Presenter
   noticeBannerDatum={noticeBannerDatum && noticeBannerDatum.getAllNotice}
   popularGalleryBannerDatum={
    popularGalleryBannerDatum && popularGalleryBannerDatum.getAllPopularGallery
   }
  ></MM00Presenter>
 );
};

export default MM00Container;
