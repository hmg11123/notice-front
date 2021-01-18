import React, { useState, useEffect } from "react";
import MM03Presenter from "./MM03Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_RECOM_POP_GALL,
 //  GET_POPULAR_GALLERY_TOTAL_PAGE,
 //  GET_ALL_POPULAR_GALLERY_LENGTH,
} from "./MM03Queries";
import { toast } from "react-toastify";

const MM03Container = ({ history }) => {
 ////////// VARIABLE     //////////
 ////////// USE SATETE   //////////
 const [searchValue, setSearchValue] = useState("");
 const [pages, setPages] = useState(null);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(15);

 ////////// USE REF      //////////
 ////////// USE CONTEXT  //////////
 ////////// USE QUERY    //////////

 const {
  data: recomPopGallBannerDatum,
  loading: recomPopGallBannerLoading,
  refetch: recomPopGallBannerRefetch,
 } = useQuery(GET_ALL_RECOM_POP_GALL, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });

 ////////// USE MUTATION //////////
 ////////// USE EFFECT   //////////

 ////////// HANDLER      //////////
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM03Presenter
   recomPopGallBannerDatum={
    recomPopGallBannerDatum && recomPopGallBannerDatum.getAllRecomPopGall
   }
   //    writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   //    totalCnt={popularGalleryAll && popularGalleryAll.getAllPopularGallerylength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   //    changePageHandler={changePageHandler}
   //    prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM03Presenter>
 );
};

export default MM03Container;
