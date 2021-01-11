import React, { useState, useEffect } from "react";
import BoardPresenter from "./BoardPresenter";
import {
 GET_POPULAR_GALLERY,
 DELETE_POPULAR_GALLERY,
 UPDATE_POPULAR_GALLERY,
} from "./BoardQueries";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../Hooks/useInput";
import storageRef from "../../../firebase";

const BoardContainer = ({ match, history }) => {
 ////////////// - USE CONTEXT- ///////////////

 ////////////// - USE STATE- ///////////////
 //  const inputTitle = useInput("");
 //  const inputDesc = useInput("");
 const [value, setValue] = useState({
  title: "",
  desc: "",
 });
 const [imagePath, setImagePath] = useState(``);
 const userkey = match.params.key;
 const [currentData, setCurrentData] = useState(null);
 const [isDialogOpen, setIsDialogOpen] = useState(false);

 console.log(userkey);
 ///////////// - USE QUERY- ////////////////
 const {
  data: popularGalleryData,
  loading: popularGalleryLoding,
  refetch: popularGalleryRefetch,
 } = useQuery(GET_POPULAR_GALLERY, {
  variables: {
   id: userkey,
  },
 });

 ///////////// - USE MUTATION- /////////////

 const [deletePopularGalleryMutation] = useMutation(DELETE_POPULAR_GALLERY, {
  variables: {
   id: userkey,
  },
 });

 const [updatePopularGalleryMutation] = useMutation(UPDATE_POPULAR_GALLERY);

 ///////////// - EVENT HANDLER- ////////////
 const _valueChangeHandler = (event) => {
  const nextState = { ...value };

  nextState[event.target.name] = event.target.value;

  setValue(nextState);
 };

 const _isDialogOpenToggle = () => {
  setIsDialogOpen(!isDialogOpen);
  if (!isDialogOpen) {
   setValue({
    title: currentData.title,
    desc: currentData.description,
   });
  }
 };

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const deleteHandler = async () => {
  const key = sessionStorage.getItem(`login`);
  if (
   JSON.parse(key).getUser.nickName ===
   popularGalleryData.getPopularGallery.author
  ) {
   const { data } = await deletePopularGalleryMutation();
   if (data.deletePopularGallery) {
    moveLinkHandler("PopularGallery");
    toast.info(`게시글이 성공적으로 삭제되었습니다`);
   }
   console.log(data);
  } else {
   console.log(`실패`);
  }
 };

 const updateHandler = async () => {
  const key = sessionStorage.getItem(`login`);
  if (
   JSON.parse(key).getUser.nickName ===
   popularGalleryData.getPopularGallery.author
  ) {
   const { data } = await updatePopularGalleryMutation({
    variables: {
     id: popularGalleryData && popularGalleryData.getPopularGallery._id,
     title: value.title,
     description: value.desc,
     imgPath: imagePath,
    },
   });
   if (data.updatePopularGallery) {
    toast.info("게시글이 수정되었습니다");
   } else {
    toast.error("다시 시도해주세요");
   }
   moveLinkHandler(`Board_D/${userkey}`);
  } else {
   moveLinkHandler("SignIN");
   toast.error("로그인 후 이용해주세요");
  }
 };
 const fileChangeHandler = async (e) => {
  const originFile = e.target.files[0];
  const originFileName = e.target.files[0].name;

  console.log(originFile);
  console.log(originFileName);
  console.log(e.target.files[0].name);

  const D = new Date();

  const year = D.getFullYear() + "";
  const month = D.getMonth() + 1 + "";
  const date = D.getDate() + "";
  const hour = D.getHours() + "";
  const min = D.getMinutes() + "";
  const sec = D.getSeconds() + "";

  const suffix = year + month + date + hour + min + sec;

  const uploadFileName = originFileName + suffix;

  try {
   const storage = storageRef.child(
    `NOTICE/uploads/uploadImg/${uploadFileName}`
   );

   await storage.put(originFile);
   const url = await storage.getDownloadURL();
   setImagePath(url);
   await toast.info("사진이 추가되었습니다");
  } catch (e) {}
 };

 ///////////// - USE EFFECT- ///////////////
 useEffect(() => {
  if (popularGalleryData && popularGalleryData.getPopularGallery) {
   let tempData = popularGalleryData.getPopularGallery;

   //    const desc = document.getElementById("notice_description-js");

   setCurrentData(tempData);
   setImagePath(tempData.imgPath);
  }
 }, [popularGalleryData]);
 return (
  <BoardPresenter
   popularGalleryData={
    popularGalleryData && popularGalleryData.getPopularGallery
   }
   imagePath={imagePath}
   _valueChangeHandler={_valueChangeHandler}
   updateHandler={updateHandler}
   deleteHandler={deleteHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   valueTitle={value.title}
   valueDesc={value.desc}
   fileChangeHandler={fileChangeHandler}
  ></BoardPresenter>
 );
};

export default BoardContainer;
