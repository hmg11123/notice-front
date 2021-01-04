import React from "react";
import MM01Presenter from "./MM01Presenter";
import useInput from "../../../Hooks/useInput";
import { CREATE_USER } from "./MM01Queries";
import { useMutation } from "react-apollo-hooks";

const MM01Container = ({ history }) => {
 ////////// VARIABLE     //////////

 ////////// USE SATETE   //////////

 const newName = useInput("");
 const newEmail = useInput("");
 const newNickName = useInput("");
 const newMobile = useInput("");
 const isDelete = useInput(false);
 const deletedAt = useInput("none");

 ////////// USE REF      //////////

 ////////// USE CONTEXT  //////////

 ////////// USE QUERY    //////////

 ////////// USE MUTATION //////////

 const [createUserMutation] = useMutation(CREATE_USER);

 ////////// HANDLER      //////////
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };
 const createUserHandler = async () => {
  if (!newEmail.value || newEmail.value.trim() === "") {
   alert("이메일은 필수 입력사항 입니다.");
   return;
  }
  if (!newName.value || newName.value.trim() === "") {
   alert("이름은 필수 입력사항 입니다.");
   return;
  }
  if (!newNickName.value || newNickName.value.trim() === "") {
   alert("닉네임은 필수 입력사항 입니다.");
   return;
  }
  if (!newMobile.value || newMobile.value.trim() === "") {
   alert("전화번호는 필수 입력사항 입니다.");
   return;
  }

  const { data } = await createUserMutation({
   variables: {
    name: newName.value,
    email: newEmail.value,
    nickName: newNickName.value,
    mobile: newMobile.value,
    isDelete: isDelete.value,
    deletedAt: deletedAt.value,
   },
  }).then(moveLinkHandler("SignIN"));
  console.log(data);
 };

 ////////// USE EFFECT   //////////

 //////// - EVENT HANDLER- ////////
 return (
  <MM01Presenter
   newName={newName}
   newEmail={newEmail}
   newNickName={newNickName}
   newMobile={newMobile}
   createUserHandler={createUserHandler}
  ></MM01Presenter>
 );
};

export default MM01Container;
