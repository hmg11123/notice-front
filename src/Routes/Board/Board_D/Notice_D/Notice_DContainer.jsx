import React, { useState, useEffect } from "react";
import Notice_DPresenter from "./Notice_DPresenter";
import {
 GET_NOTICE,
 DELETE_NOTICE,
 UPDATE_NOTICE,
 RECOMMENDATION_UP,
} from "./Notice_DQueries";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../../Hooks/useInput";
import storageRef from "../../../../firebase";

const Notice_DContainer = ({ match, history }) => {
 ////////////// - USE CONTEXT- ///////////////

 ////////////// - USE STATE- ///////////////
 //  const inputTitle = useInput("");
 //  const inputDesc = useInput("");
 const [value, setValue] = useState({
  title: "",
  desc: "",
 });
 const user = useState(window.sessionStorage.getItem(`login`));

 const [imagePath, setImagePath] = useState(``);
 const userkey = match.params.key;
 const [currentData, setCurrentData] = useState(null);
 const [isDialogOpen, setIsDialogOpen] = useState(false);

 console.log(userkey);
 ///////////// - USE QUERY- ////////////////
 const {
  data: noticeData,
  loading: noticeLoding,
  refetch: noticeRefetch,
 } = useQuery(GET_NOTICE, {
  variables: {
   id: userkey,
  },
 });

 ///////////// - USE MUTATION- /////////////

 const [deleteNoticeMutation] = useMutation(DELETE_NOTICE, {
  variables: {
   id: userkey,
  },
 });

 const [updateNoticeMutation] = useMutation(UPDATE_NOTICE);
 const [recommendationUpMutation] = useMutation(RECOMMENDATION_UP);

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
  if (JSON.parse(key).getUser.nickName === noticeData.getNotice.author) {
   const { data } = await deleteNoticeMutation();
   if (data) {
    moveLinkHandler("notice");
    toast.info(`게시글이 성공적으로 삭제되었습니다`);
   }
   console.log(data);
  } else {
   console.log(`실패`);
  }
 };

 const updateHandler = async () => {
  const key = sessionStorage.getItem(`login`);
  if (JSON.parse(key).getUser.nickName === noticeData.getNotice.author) {
   const { data } = await updateNoticeMutation({
    variables: {
     id: noticeData && noticeData.getNotice._id,
     title: value.title,
     description: value.desc,
     imgPath: imagePath,
    },
   });
   console.log(data);
   if (data) {
    toast.info("게시글이 수정되었습니다");
    noticeRefetch();
    setIsDialogOpen(false);
   } else {
    toast.error("다시 시도해주세요");
   }
  } else {
   moveLinkHandler("SignIN");
   toast.error("로그인 후 이용해주세요");
  }
 };

 const recommendationUpHandler = async () => {
  console.log(noticeData.getNotice.recomUser.length);
  console.log(JSON.parse(user[0]).getUser._id);
  if (noticeData.getNotice.recomUser !== JSON.parse(user[0]).getUser._id) {
   const { data } = await recommendationUpMutation({
    variables: {
     id: userkey,
     recommendation: noticeData.getNotice.recomUser.length,
     recomUser: JSON.parse(user[0]).getUser._id,
    },
   });
   toast.info("추천하셨습니다.");
  } else {
   toast.error("이미 추천하셧습니다");
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
  if (noticeData && noticeData.getNotice) {
   let tempData = noticeData.getNotice;

   //    const desc = document.getElementById("notice_description-js");

   setCurrentData(tempData);
   setImagePath(tempData.imgPath);
  }
 }, [noticeData]);
 return (
  <Notice_DPresenter
   noticeData={noticeData && noticeData.getNotice}
   imagePath={imagePath}
   _valueChangeHandler={_valueChangeHandler}
   updateHandler={updateHandler}
   deleteHandler={deleteHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   valueTitle={value.title}
   valueDesc={value.desc}
   recommendationUpHandler={recommendationUpHandler}
   fileChangeHandler={fileChangeHandler}
  ></Notice_DPresenter>
 );
};

export default Notice_DContainer;
