import React, { useState } from "react";
import Board_UPresenter from "./Board_UPresenter";
import storageRef from "../../../firebase";
import useInput from "../../../Hooks/useInput";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

const Board_UContaniner = ({ history }) => {
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

 ///////////// - EVENT HANDLER- ////////////
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const cancelHandler = () => {
  history.goBack();
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

 return (
  <Board_UPresenter
   inputTitle={inputTitle}
   imagePath={imagePath}
   user={user}
   today={today}
   inputDescription={inputDescription}
   fileChangeHandler={fileChangeHandler}
   cancelHandler={cancelHandler}
  ></Board_UPresenter>
 );
};

export default Board_UContaniner;
