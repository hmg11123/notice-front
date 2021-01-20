import React, { useState, useEffect } from "react";
import MM10Presenter from "./MM10Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_NOTICE,
 GET_ALL_NOTICE_LENGTH,
 GET_NOTICE_TOTAL_PAGE,
} from "./MM10Queries";
import { toast } from "react-toastify";

const MM10Container = ({ history }) => {
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
  data: noticeBannerDatum,
  loading: noticeBannerLoading,
  refetch: noticeBannerRefetch,
 } = useQuery(GET_ALL_NOTICE, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: noticeAll,
  loading: noticeAllLoading,
  refetch: noticeAllRefetch,
 } = useQuery(GET_ALL_NOTICE_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: noticeTotalPage, refetch: noticeTotalPageRefetch } = useQuery(
  GET_NOTICE_TOTAL_PAGE,
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
  // noticeBannerRefetch();
  if (noticeTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < noticeTotalPage.getNoticeTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [noticeTotalPage]);
 useEffect(() => {
  noticeAllRefetch();
  noticeBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  noticeBannerRefetch();
  if (noticeTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < noticeTotalPage.getNoticeTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [noticeTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > noticeTotalPage.getNoticeTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM10Presenter
   noticeBannerDatum={noticeBannerDatum && noticeBannerDatum.getAllNotice}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={noticeAll && noticeAll.getAllNoticelength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM10Presenter>
 );
};

export default MM10Container;
