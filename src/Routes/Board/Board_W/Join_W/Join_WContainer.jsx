import React, { useEffect, useState } from "react";
import Join_WPresenter from "./Join_WPresenter";
import storageRef from "../../../../firebase";
import useInput from "../../../../Hooks/useInput";
import { useQuery, useMutation } from "react-apollo-hooks";
import { CREATE_JOIN } from "./Join_WQueries";
import { toast } from "react-toastify";

const Join_WContainer = ({ history }) => {
 ////////////// - USE CONTEXT- ///////////////

 ////////////// - USE STATE- ///////////////
 const user = useState(window.sessionStorage.getItem(`login`));
 const D = new Date();
 const year = D.getFullYear() + "";
 const month = D.getMonth() + 1 + "";
 const date = D.getDate() + "";

 const today = year + "-" + month + "-" + date;
 const [nickName, setNickName] = useState(JSON.parse(user[0]).getUser.nickName);
 const inputTitle = useInput("");
 const inputDescription = useInput("");

 console.log(inputTitle);
 console.log(inputDescription);
 ///////////// - USE QUERY- ////////////////

 ///////////// - USE MUTATION- /////////////
 const [JoinMutation] = useMutation(CREATE_JOIN);

 ///////////// - EVENT HANDLER- ////////////
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const cancelHandler = () => {
  history.goBack();
 };

 const writeHandler = async () => {
  const { data } = await JoinMutation({
   variables: {
    title: inputTitle.value,
    author: nickName,
    description: inputDescription.value,
    detailAuthor: JSON.parse(user[0]).getUser._id,
   },
  });
  if (data) {
   toast.info("게시글이 추가되었습니다");
   setNickName(``);
   moveLinkHandler(`JoinBoard`);
   console.log(`추가됨`);
  } else {
   toast.error("다시 시도해주세요");
   console.log(`다시`);
  }
 };

 ///////////// - USE EFFECT- ///////////////

 return (
  <Join_WPresenter
   inputTitle={inputTitle}
   user={user}
   today={today}
   writeHandler={writeHandler}
   inputDescription={inputDescription}
   cancelHandler={cancelHandler}
  ></Join_WPresenter>
 );
};

export default Join_WContainer;
