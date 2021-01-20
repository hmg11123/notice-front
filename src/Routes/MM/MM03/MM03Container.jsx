import React, { useState, useEffect } from "react";
import MM03Presenter from "./MM03Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
 GET_ALL_RECOM_POP_GALL,
 GET_POPULAR_GALLERY_TOTAL_PAGE,
 GET_ALL_POPULAR_GALLERY_LENGTH,
 GALLERY_HIT_UP,
 GET_GALLERY,
} from "./MM03Queries";
import { toast } from "react-toastify";

const MM03Container = ({ history }) => {
 ////////// VARIABLE     //////////
 ////////// USE SATETE   //////////
 const [searchValue, setSearchValue] = useState("");
 const [pages, setPages] = useState(null);
 const [currentPage, setCurrentPage] = useState(0);
 const [limit, setLimit] = useState(15);
 const [hit, setHit] = useState();

 ////////// USE REF      //////////
 ////////// USE CONTEXT  //////////
 ////////// USE QUERY    //////////

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
  data: popularGalleryAll,
  loading: popularGalleryAllLoading,
  refetch: popularGalleryAllRefetch,
 } = useQuery(GET_ALL_POPULAR_GALLERY_LENGTH, {
  variables: {
   searchValue: searchValue,
  },
 });
 const { data: galleryTotalPage, refetch: galleryTotalPageRefetch } = useQuery(
  GET_POPULAR_GALLERY_TOTAL_PAGE,
  {
   variables: {
    searchValue,
    limit,
   },
  }
 );

 ////////// USE MUTATION //////////

 const [galleryHitUpMutaion] = useMutation(GALLERY_HIT_UP);
 ////////// USE EFFECT   //////////
 useEffect(() => {
  // noticeDatumRefetch();
  // recomPopGallBannerRefetch();
  if (galleryTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < galleryTotalPage.getPopularGalleryTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [galleryTotalPage]);
 useEffect(() => {
  popularGalleryAllRefetch();
  recomPopGallBannerRefetch();
 }, []);

 useEffect(() => {
  // noticeDatumRefetch();

  recomPopGallBannerRefetch();
  if (galleryTotalPage && !pages) {
   const temp = [];

   for (let i = 0; i < galleryTotalPage.getPopularGalleryTotalPage; i++) {
    temp.push(i);
   }
   setPages(temp);
  }
 }, [galleryTotalPage]);

 const changePageHandler = (page) => {
  setCurrentPage(page);
 };
 ////////// HANDLER      //////////
 const prevAndNextPageChangeNoticeHandler = (page) => {
  if (page < 0) {
   toast.error("첫 페이지 입니다.");
   return;
  }

  if (page > galleryTotalPage.getPopularGalleryTotalPage - 1) {
   toast.error("마지막 페이지 입니다.");
   return;
  }

  setCurrentPage(page);
 };

 //  const getGalleryHandler = async (idx) => {
 //   const { data } = await getOneGalleryMutaion({
 //    variables: {
 //     id: idx,
 //    },
 //   });
 //   console.log(data);
 //   return { data };
 //  };

 const moveLinkHandler = async (idx) => {
  //   console.log(idx);
  //   setHit
  //   const { data } = await galleryHitUpMutaion({
  //    variables: { id: idx, hit: +2 },
  //   }).then(history.push(`/Gallery_D/${idx}`));
  history.push(`/Gallery_D/${idx}`);
 };
 return (
  <MM03Presenter
   recomPopGallBannerDatum={
    recomPopGallBannerDatum && recomPopGallBannerDatum.getAllRecomPopGall
   }
   //    writeMoveLinkHandler={writeMoveLinkHandler}
   limit={limit}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   currentPage={currentPage}
   totalCnt={popularGalleryAll && popularGalleryAll.getAllPopularGallerylength}
   moveLinkHandler={moveLinkHandler}
   setCurrentPage={setCurrentPage}
   pages={pages}
   changePageHandler={changePageHandler}
   prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
  ></MM03Presenter>
 );
};

export default MM03Container;
