import React, { useState, useEffect } from "react";
import MM03Presenter from "./MM03Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_POPULAR_GALLERY,
 GET_POPULAR_GALLERY_TOTAL_PAGE,
} from "./MM03Queries";
import { toast } from "react-toastify";

const MM03Container = () => {
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
  data: popularGalleryBannerDatum,
  loading: popularGalleryBannerLoading,
  refetch: popularGalleryBannerRefetch,
 } = useQuery(GET_ALL_POPULAR_GALLERY, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });

 const {
  data: popularGalleryTotalPage,
  refetch: popularGalleryTotalPageRefetch,
 } = useQuery(GET_POPULAR_GALLERY_TOTAL_PAGE, {
  variables: {
   searchValue,
   limit,
  },
 });
 ////////// USE MUTATION //////////
 ////////// USE EFFECT   //////////
 useEffect(() => {
  // noticeDatumRefetch();
  // popularGalleryBannerRefetch();
  if (popularGalleryTotalPage && !pages) {
   const temp = [];

   for (
    let i = 0;
    i < popularGalleryTotalPage.getPopularGalleryTotalPage;
    i++
   ) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [popularGalleryTotalPage]);
 useEffect(() => {
  popularGalleryBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  popularGalleryBannerRefetch();
  if (popularGalleryTotalPage && !pages) {
   const temp = [];

   for (
    let i = 0;
    i < popularGalleryTotalPage.getPopularGalleryTotalPage;
    i++
   ) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [popularGalleryTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////
 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > popularGalleryTotalPage.getPopularGalleryTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 return (
  <MM03Presenter
   popularGalleryBannerDatum={
    popularGalleryBannerDatum && popularGalleryBannerDatum.getAllPopularGallery
   }
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM03Presenter>
 );
};

export default MM03Container;
