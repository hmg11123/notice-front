import React, { useState, useEffect } from "react";
import MM08Presenter from "./MM08Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_PHOTO,
 GET_PHOTO_TOTAL_PAGE,
 GET_ALL_PHOTO_LENGTH,
} from "./MM08Queries";
import { toast } from "react-toastify";

const MM08Container = ({ history }) => {
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
  data: photoBannerDatum,
  loading: photoBannerLoading,
  refetch: photoBannerRefetch,
 } = useQuery(GET_ALL_PHOTO, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: photoAll,
  loading: photoAllLoading,
  refetch: photoAllRefetch,
 } = useQuery(GET_ALL_PHOTO_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: photoTotalPage, refetch: photoTotalPageRefetch } = useQuery(
  GET_PHOTO_TOTAL_PAGE,
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
  // photoBannerRefetch();
  if (photoTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < photoTotalPage.getPhotoTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [photoTotalPage]);
 useEffect(() => {
  photoAllRefetch();
  photoBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  photoBannerRefetch();
  if (photoTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < photoTotalPage.getPhotoTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [photoTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////

 const writeMoveLinkHandler = () => {
  const key = sessionStorage.getItem(`login`);
  if (key) {
   moveLinkHandler(`Photo_W`);
  } else {
   toast.info("로그인을 하고 이용하실수 있습니다");
  }
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > photoTotalPage.getPhotoTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM08Presenter
   photoBannerDatum={photoBannerDatum && photoBannerDatum.getAllPhoto}
   writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={photoAll && photoAll.getAllPhotolength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM08Presenter>
 );
};

export default MM08Container;
