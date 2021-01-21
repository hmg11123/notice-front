import React, { useState, useEffect } from "react";
import Join_DPresenter from "./Join_DPresenter";
import {
 GET_JOIN,
 DELETE_JOIN,
 UPDATE_JOIN,
 RECOMMENDATION_UP,
} from "./Join_DQueries";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../../Hooks/useInput";
import storageRef from "../../../../firebase";

const Join_DContainer = ({ match, history }) => {
 ////////////// - USE CONTEXT- ///////////////

 ////////////// - USE STATE- ///////////////
 //  const inputTitle = useInput("");
 //  const inputDesc = useInput("");
 const [value, setValue] = useState({
  title: "",
  desc: "",
 });
 const user = useState(window.sessionStorage.getItem(`login`));

 const userkey = match.params.key;
 const [currentData, setCurrentData] = useState(null);
 const [isDialogOpen, setIsDialogOpen] = useState(false);

 console.log(userkey);
 ///////////// - USE QUERY- ////////////////
 const { data: joinData, loading: joinLoding, refetch: joinRefetch } = useQuery(
  GET_JOIN,
  {
   variables: {
    id: userkey,
   },
  }
 );

 ///////////// - USE MUTATION- /////////////

 const [deleteJoinMutation] = useMutation(DELETE_JOIN, {
  variables: {
   id: userkey,
  },
 });

 const [updateJoinMutation] = useMutation(UPDATE_JOIN);
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
  if (JSON.parse(key).getUser._id === joinData.getJoin.detailAuthor) {
   const { data } = await deleteJoinMutation();
   if (data) {
    moveLinkHandler("JoinBoard");
    toast.info(`게시글이 성공적으로 삭제되었습니다`);
   }
   console.log(data);
  } else {
   console.log(`실패`);
  }
 };

 const updateHandler = async () => {
  const key = sessionStorage.getItem(`login`);
  if (JSON.parse(key).getUser._id === joinData.getJoin.detailAuthor) {
   const { data } = await updateJoinMutation({
    variables: {
     id: joinData && joinData.getJoin._id,
     title: value.title,
     description: value.desc,
    },
   });
   console.log(data);
   if (data) {
    toast.info("게시글이 수정되었습니다");
    joinRefetch();
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
  console.log(joinData.getJoin.recomUser.length);
  console.log(JSON.parse(user[0]).getUser._id);
  if (joinData.getJoin.recomUser !== JSON.parse(user[0]).getUser._id) {
   const { data } = await recommendationUpMutation({
    variables: {
     id: userkey,
     recommendation: joinData.getJoin.recomUser.length,
     recomUser: JSON.parse(user[0]).getUser._id,
    },
   });
   toast.info("추천하셨습니다.");
  } else {
   toast.error("이미 추천하셧습니다");
  }
 };

 ///////////// - USE EFFECT- ///////////////
 useEffect(() => {
  if (joinData && joinData.getJoin) {
   let tempData = joinData.getJoin;

   //    const desc = document.getElementById("notice_description-js");

   setCurrentData(tempData);
  }
 }, [joinData]);
 return (
  <Join_DPresenter
   joinData={joinData && joinData.getJoin}
   _valueChangeHandler={_valueChangeHandler}
   updateHandler={updateHandler}
   deleteHandler={deleteHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   valueTitle={value.title}
   valueDesc={value.desc}
   recommendationUpHandler={recommendationUpHandler}
  ></Join_DPresenter>
 );
};

export default Join_DContainer;
