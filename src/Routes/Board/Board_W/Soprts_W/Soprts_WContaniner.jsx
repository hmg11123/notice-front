import React, { useEffect, useState } from "react";
import Soprts_WPresenter from "./Soprts_WPresenter";
import storageRef from "../../../../firebase";
import useInput from "../../../../Hooks/useInput";
import { useQuery, useMutation } from "react-apollo-hooks";
import { CREATE_SOPRTS } from "./Soprts_WQueries";
import { toast } from "react-toastify";

const Soprts_WContainer = ({ history }) => {
 ////////////// - USE CONTEXT- ///////////////

 ////////////// - USE STATE- ///////////////
 const user = useState(window.sessionStorage.getItem(`login`));
 const D = new Date();
 const year = D.getFullYear() + "";
 const month = D.getMonth() + 1 + "";
 const date = D.getDate() + "";

 const today = year + "-" + month + "-" + date;
 const [imagePath, setImagePath] = useState(``);
 const [nickName, setNickName] = useState(JSON.parse(user[0]).getUser.nickName);
 const inputTitle = useInput("");
 const inputDescription = useInput("");

 console.log(inputTitle);
 console.log(inputDescription);
 ///////////// - USE QUERY- ////////////////

 ///////////// - USE MUTATION- /////////////
 const [SoprtsMutation] = useMutation(CREATE_SOPRTS);

 ///////////// - EVENT HANDLER- ////////////
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const cancelHandler = () => {
  history.goBack();
 };

 const writeHandler = async () => {
  const { data } = await SoprtsMutation({
   variables: {
    title: inputTitle.value,
    author: nickName,
    description: inputDescription.value,
    imgPath: imagePath,
    detailAuthor: JSON.parse(user[0]).getUser._id,
   },
  });
  if (data) {
   toast.info("게시글이 추가되었습니다");
   setImagePath(``);
   setNickName(``);
   moveLinkHandler(`SoprtsBoard`);
   console.log(`추가됨`);
  } else {
   toast.error("다시 시도해주세요");
   console.log(`다시`);
  }
 };

 const fileChangeHandler = async (e) => {
  const originFile = e.target.files[0];
  const originFileName = e.target.files[0].name;

  console.log(originFile);
  console.log(originFileName);

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
   const storage = await storageRef.child(
    `NOTICE/uploads/uploadImg/${uploadFileName}`
   );

   await storage.put(originFile);
   const url = await storage.getDownloadURL();

   await setImagePath(url);
   await toast.info("사진이 추가되었습니다");
  } catch (e) {}
 };

 ///////////// - USE EFFECT- ///////////////
 useEffect(() => {
  if (!imagePath) {
   setImagePath(`-`);
  }
 });

 return (
  <Soprts_WPresenter
   inputTitle={inputTitle}
   imagePath={imagePath}
   user={user}
   today={today}
   writeHandler={writeHandler}
   inputDescription={inputDescription}
   fileChangeHandler={fileChangeHandler}
   cancelHandler={cancelHandler}
  ></Soprts_WPresenter>
 );
};

export default Soprts_WContainer;
