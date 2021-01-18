import React, { useState, useEffect } from "react";
import MM04Presenter from "./MM04Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_GALLERY,
 GET_GALLERY_TOTAL_PAGE,
 GET_ALL_GALLERY_LENGTH,
} from "./MM04Queries";
import { toast } from "react-toastify";

const MM04Container = ({ history }) => {
 ////////// VARIABLE     //////////
 ////////// USE SATETE   //////////
 const [searchValue, setSearchValue] = useState("");
 const [pages, setPages] = useState(null);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(15);
 const [recommendation, setrecommendation] = useState(0);
 ////////// USE REF      //////////
 ////////// USE CONTEXT  //////////
 ////////// USE QUERY    //////////

 const {
  data: galleryBannerDatum,
  loading: galleryBannerLoading,
  refetch: galleryBannerRefetch,
 } = useQuery(GET_ALL_GALLERY, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: galleryAll,
  loading: galleryAllLoading,
  refetch: galleryAllRefetch,
 } = useQuery(GET_ALL_GALLERY_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: galleryTotalPage, refetch: galleryTotalPageRefetch } = useQuery(
  GET_GALLERY_TOTAL_PAGE,
  {
   variables: {
    searchValue,
    limit,
   },
  }
 );
 ////////// USE MUTATION //////////
 ////////// USE EFFECT   //////////
 useEffect(() => {
  // noticeDatumRefetch();
  // galleryBannerRefetch();
  if (galleryTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < galleryTotalPage.getgalleryTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [galleryTotalPage]);
 useEffect(() => {
  galleryBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  galleryBannerRefetch();
  if (galleryTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < galleryTotalPage.getgalleryTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [galleryTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////

 const writeMoveLinkHandler = () => {
  const key = sessionStorage.getItem(`login`);
  if (key) {
   moveLinkHandler(`Gallery_W`);
  } else {
   toast.info("로그인을 하고 이용하실수 있습니다");
  }
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > galleryTotalPage.getgalleryTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM04Presenter
   galleryBannerDatum={galleryBannerDatum && galleryBannerDatum.getAllGallery}
   writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={galleryAll && galleryAll.getAllGallerylength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM04Presenter>
 );
};

export default MM04Container;
