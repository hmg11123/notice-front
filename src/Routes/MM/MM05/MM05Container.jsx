import React, { useState, useEffect } from "react";
import MM05Presenter from "./MM05Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_GAME,
 GET_GAME_TOTAL_PAGE,
 GET_ALL_GAME_LENGTH,
} from "./MM05Queries";
import { toast } from "react-toastify";

const MM05Container = ({ history }) => {
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
  data: gameBannerDatum,
  loading: gameBannerLoading,
  refetch: gameBannerRefetch,
 } = useQuery(GET_ALL_GAME, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: gameAll,
  loading: gameAllLoading,
  refetch: gameAllRefetch,
 } = useQuery(GET_ALL_GAME_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: gameTotalPage, refetch: gameTotalPageRefetch } = useQuery(
  GET_GAME_TOTAL_PAGE,
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
  // gameBannerRefetch();
  if (gameTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < gameTotalPage.getGameTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [gameTotalPage]);
 useEffect(() => {
  gameBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  gameBannerRefetch();
  if (gameTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < gameTotalPage.getGameTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [gameTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////

 const writeMoveLinkHandler = () => {
  const key = sessionStorage.getItem(`login`);
  if (key) {
   moveLinkHandler(`Game_W`);
  } else {
   toast.info("로그인을 하고 이용하실수 있습니다");
  }
 };

 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > gameTotalPage.getGameTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };
 const moveLinkHandler = (idx) => {
  history.push(`/${idx}`);
 };
 return (
  <MM05Presenter
   gameBannerDatum={gameBannerDatum && gameBannerDatum.getAllGame}
   writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={gameAll && gameAll.getAllGamelength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM05Presenter>
 );
};

export default MM05Container;
