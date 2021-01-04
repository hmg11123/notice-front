import React, { useState } from "react";
import MM02Presenter from "./MM02Presenter";
import useInput from "../../../Hooks/useInput";
import { TRY_LOGIN, CHECK_CODE, GET_USER } from "./MM02Queries";
import { useQuery, useMutation } from "react-apollo-hooks";

const MM02Container = ({ history }) => {
 ////////// VARIABLE     //////////

 ////////// USE SATETE   //////////
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const inputEmail = useInput("");
 const code = useInput("");
 const [skip, setSkip] = useState(true);

 ////////// USE REF      //////////

 ////////// USE CONTEXT  //////////

 ////////// USE QUERY    //////////
 const { data: secretCodeData, refetch: secretCodeRefetch } = useQuery(
  CHECK_CODE,
  {
   variables: {
    email: inputEmail.value,
   },
  }
 );

 const { data: getUserData, refetch: getUserRefetch } = useQuery(GET_USER, {
  variables: {
   email: inputEmail.value,
  },
 });

 ////////// USE MUTATION //////////
 const [tryLoginMutation] = useMutation(TRY_LOGIN);

 ////////// HANDLER      //////////

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };
 const loginClickHandler = async () => {
  if (!inputEmail.value || inputEmail.value.trim() === "") {
   alert("이메일은 필수 입력사항 입니다.");
   return;
  }

  const { data } = await tryLoginMutation({
   variables: {
    email: inputEmail.value,
   },
  }).then(setIsDialogOpen(!isDialogOpen));
  secretCodeRefetch();
 };
 const _isDialogOpenToggle = () => {
  setIsDialogOpen(!isDialogOpen);
 };

 const checkCode = async () => {
  const json = getUserData.getUser;

  if (secretCodeData.checkCode.secretCode === code.value) {
   window.localStorage.setItem("login", JSON.stringify(json));
   moveLinkHandler("");
   setSkip(false);
   console.log("성공");
  } else if (!code.value || code.value.trim() === "") {
   alert("인증코드를 입력하세요");
  } else {
   alert("인증코드가 틀렸습니다");
  }
 };

 //////// - EVENT HANDLER- ////////
 return (
  <MM02Presenter
   inputEmail={inputEmail}
   code={code}
   isDialogOpen={isDialogOpen}
   checkCode={checkCode}
   loginClickHandler={loginClickHandler}
   _isDialogOpenToggle={_isDialogOpenToggle}
  ></MM02Presenter>
 );
};

export default MM02Container;
