import React, { useState, useEffect } from "react";
import MM06Presenter from "./MM06Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_MOVIE,
 GET_MOVIE_TOTAL_PAGE,
 GET_ALL_MOVIE_LENGTH,
} from "./MM06Queries";
import { toast } from "react-toastify";

const MM06Container = ({ history }) => {
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
  data: movieBannerDatum,
  loading: movieBannerLoading,
  refetch: movieBannerRefetch,
 } = useQuery(GET_ALL_MOVIE, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: movieAll,
  loading: movieAllLoading,
  refetch: movieAllRefetch,
 } = useQuery(GET_ALL_MOVIE_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: movieTotalPage, refetch: movieTotalPageRefetch } = useQuery(
  GET_MOVIE_TOTAL_PAGE,
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
  // movieBannerRefetch();
  if (movieTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < movieTotalPage.getMovieTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [movieTotalPage]);
 useEffect(() => {
  movieBannerRefetch();
  movieAllRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  movieBannerRefetch();
  if (movieTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < movieTotalPage.getMovieTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [movieTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////

 const writeMoveLinkHandler = () => {
  const key = sessionStorage.getItem(`login`);
  if (key) {
   moveLinkHandler(`Movie_W`);
  } else {
   toast.info("로그인을 하고 이용하실수 있습니다");
  }
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > movieTotalPage.getMovieTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM06Presenter
   movieBannerDatum={movieBannerDatum && movieBannerDatum.getAllMovie}
   writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={movieAll && movieAll.getAllMovielength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM06Presenter>
 );
};

export default MM06Container;
