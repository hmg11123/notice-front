import React, { useState, useEffect } from "react";
import MM09Presenter from "./MM09Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_JOIN,
 GET_JOIN_TOTAL_PAGE,
 GET_ALL_JOIN_LENGTH,
} from "./MM09Queries";
import { toast } from "react-toastify";

const MM09Container = ({ history }) => {
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
  data: joinBannerDatum,
  loading: joinBannerLoading,
  refetch: joinBannerRefetch,
 } = useQuery(GET_ALL_JOIN, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: joinAll,
  loading: joinAllLoading,
  refetch: joinAllRefetch,
 } = useQuery(GET_ALL_JOIN_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: joinTotalPage, refetch: joinTotalPageRefetch } = useQuery(
  GET_JOIN_TOTAL_PAGE,
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
  // joinBannerRefetch();
  if (joinTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < joinTotalPage.getJoinTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [joinTotalPage]);
 useEffect(() => {
  joinAllRefetch();
  joinBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  joinBannerRefetch();
  if (joinTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < joinTotalPage.getJoinTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [joinTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////

 const writeMoveLinkHandler = () => {
  const key = sessionStorage.getItem(`login`);
  if (key) {
   moveLinkHandler(`Join_W`);
  } else {
   toast.info("로그인을 하고 이용하실수 있습니다");
  }
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > joinTotalPage.getJoinTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM09Presenter
   joinBannerDatum={joinBannerDatum && joinBannerDatum.getAllJoin}
   writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={joinAll && joinAll.getAllJoinlength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM09Presenter>
 );
};

export default MM09Container;
