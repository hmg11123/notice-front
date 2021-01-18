import React, { useState, useEffect } from "react";
import MM07Presenter from "./MM07Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_SOPRTS,
 GET_SOPRTS_TOTAL_PAGE,
 GET_ALL_SOPRTS_LENGTH,
} from "./MM07Queries";
import { toast } from "react-toastify";

const MM07Container = ({ history }) => {
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
  data: soprtsBannerDatum,
  loading: soprtsBannerLoading,
  refetch: soprtsBannerRefetch,
 } = useQuery(GET_ALL_SOPRTS, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: soprtsAll,
  loading: soprtsAllLoading,
  refetch: soprtsAllRefetch,
 } = useQuery(GET_ALL_SOPRTS_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: soprtsTotalPage, refetch: soprtsTotalPageRefetch } = useQuery(
  GET_SOPRTS_TOTAL_PAGE,
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
  // soprtsBannerRefetch();
  if (soprtsTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < soprtsTotalPage.getSoprtsTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [soprtsTotalPage]);
 useEffect(() => {
  soprtsBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  soprtsBannerRefetch();
  if (soprtsTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < soprtsTotalPage.getSoprtsTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [soprtsTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////

 const writeMoveLinkHandler = () => {
  const key = sessionStorage.getItem(`login`);
  if (key) {
   moveLinkHandler(`soprts_W`);
  } else {
   toast.info("로그인을 하고 이용하실수 있습니다");
  }
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > soprtsTotalPage.getSoprtsTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM07Presenter
   soprtsBannerDatum={soprtsBannerDatum && soprtsBannerDatum.getAllSoprts}
   writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={soprtsAll && soprtsAll.getAllSoprtslength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM07Presenter>
 );
};

export default MM07Container;
