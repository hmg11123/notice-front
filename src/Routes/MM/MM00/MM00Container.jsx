import React, { useState, useEffect } from "react";
import MM00Presenter from "./MM00Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import {
 GET_ALL_NOTICE,
 GET_ALL_POPULAR_GALLERY,
 GET_POPULAR_GALLERY_TOTAL_PAGE,
 GET_ALL_SOPRTS,
 GET_ALL_HOBBY,
 GET_ALL_GAME,
 GET_ALL_RECOM_POP_GALL,
} from "./MM00Queries";
import { Check } from "@material-ui/icons";

const MM00Container = ({ history }) => {
 ////////// VARIABLE     //////////

 ////////// USE SATETE   //////////
 const [searchValue, setSearchValue] = useState("");
 const [pages, setPages] = useState(null);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(4);

 ////////// USE REF      //////////

 ////////// USE CONTEXT  //////////

 ////////// USE QUERY    //////////
 const {
  data: noticeBannerDatum,
  loading: noticeBannerLoding,
  refetch: noticeBannerRefetch,
 } = useQuery(GET_ALL_NOTICE, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });

 const {
  data: SoprtsBannerDatum,
  loading: SoprtsBannerLoading,
  refetch: SoprtsBannerRefetch,
 } = useQuery(GET_ALL_SOPRTS, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
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
 const {
  data: HobbyBannerDatum,
  loading: HobbyBannerLoading,
  refetch: HobbyBannerRefetch,
 } = useQuery(GET_ALL_HOBBY, {
  variables: {
   searchValue,
   limit,
   currentPage,
  },
 });
 const {
  data: GameBannerDatum,
  loading: GameBannerLoading,
  refetch: GameBannerRefetch,
 } = useQuery(GET_ALL_GAME, {
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

 //  const e = popularGalleryBannerDatum
 //   ? popularGalleryBannerDatum.length === 0
 //     ? ""
 //     : popularGalleryBannerDatum.getAllPopularGallery.length
 //   : "";
 //  for (let i = 0; i < e; i++) {
 //   const a = popularGalleryBannerDatum
 //    ? popularGalleryBannerDatum.length === 0
 //      ? ""
 //      : popularGalleryBannerDatum.getAllPopularGallery[i].imgPath
 //    : "";
 //  }
 //  console.log(a);

 //  console.log(CheckImgPathHandler);
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
  recomPopGallBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  recomPopGallBannerRefetch();
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

 //////// - EVENT HANDLER- ////////
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

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
  <MM00Presenter
   noticeBannerDatum={noticeBannerDatum && noticeBannerDatum.getAllNotice}
   recomPopGallBannerDatum={
    recomPopGallBannerDatum && recomPopGallBannerDatum.getAllRecomPopGall
   }
   SoprtsBannerDatum={SoprtsBannerDatum && SoprtsBannerDatum.getAllSoprts}
   HobbyBannerDatum={HobbyBannerDatum && HobbyBannerDatum.getAllHobby}
   GameBannerDatum={GameBannerDatum && GameBannerDatum.getAllGame}
   //    popularGalleryTotalPage={popularGalleryTotalPage}
   limit={limit}
   searchValue={searchValue}
   moveLinkHandler={moveLinkHandler}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM00Presenter>
 );
};

export default MM00Container;
