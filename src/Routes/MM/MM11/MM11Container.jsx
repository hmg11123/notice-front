import React, { useState, useEffect } from "react";
import MM11Presenter from "./MM11Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_HOBBY,
 GET_HOBBY_TOTAL_PAGE,
 GET_ALL_HOBBY_LENGTH,
} from "./MM11Queries";
import { toast } from "react-toastify";

const MM11Container = ({ history }) => {
 ////////// VARIABLE     //////////
 ////////// USE SATETE   //////////
 const [searchValue, setSearchValue] = useState("");
 const [pages, setPages] = useState(null);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(35);
 ////////// USE REF      //////////
 ////////// USE CONTEXT  //////////
 ////////// USE QUERY    //////////

 const {
  data: hobbyBannerDatum,
  loading: hobbyBannerLoading,
  refetch: hobbyBannerRefetch,
 } = useQuery(GET_ALL_HOBBY, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: hobbyAll,
  loading: hobbyAllLoading,
  refetch: hobbyAllRefetch,
 } = useQuery(GET_ALL_HOBBY_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: hobbyTotalPage, refetch: hobbyTotalPageRefetch } = useQuery(
  GET_HOBBY_TOTAL_PAGE,
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
  // hobbyBannerRefetch();
  if (hobbyTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < hobbyTotalPage.getHobbyTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [hobbyTotalPage]);
 useEffect(() => {
  hobbyAllRefetch();
  hobbyBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  hobbyBannerRefetch();
  if (hobbyTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < hobbyTotalPage.getHobbyTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [hobbyTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////

 const writeMoveLinkHandler = () => {
  const key = sessionStorage.getItem(`login`);
  if (key) {
   moveLinkHandler(`Hobby_W`);
  } else {
   toast.info("로그인을 하고 이용하실수 있습니다");
  }
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > hobbyTotalPage.getHobbyTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM11Presenter
   hobbyBannerDatum={hobbyBannerDatum && hobbyBannerDatum.getAllHobby}
   writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={hobbyAll && hobbyAll.getAllHobbylength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM11Presenter>
 );
};

export default MM11Container;
