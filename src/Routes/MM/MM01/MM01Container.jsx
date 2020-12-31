import React from "react";
import MM01Presenter from "./MM01Presenter";
import useInput from "../../../Hooks/useInput";
import { CREATE_USER } from "./MM01Queries";
import { useMutation } from "react-apollo-hooks";

const MM01Container = () => {
 ////////// VARIABLE     //////////

 ////////// USE SATETE   //////////

 const newName = useInput("");
 const newEmail = useInput("");
 const newNickName = useInput("");
 const passWord = useInput("");
 const checkedPassword = useInput("");
 const isDelete = useInput(false);
 const deletedAt = useInput("none");

 ////////// USE REF      //////////

 ////////// USE CONTEXT  //////////

 ////////// USE QUERY    //////////

 ////////// USE MUTATION //////////

 const [createUserMutation] = useMutation(CREATE_USER);

 ////////// HANDLER      //////////
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
  if (!passWord.value || passWord.value.trim() === "") {
   alert("비밀번호는 필수 입력사항 입니다.");
   return;
  }
  if (passWord.value !== checkedPassword.value) {
   alert("비밀번호가 다릅니다");
   return;
  }

  const { data } = await createUserMutation({
   variables: {
    name: newName.value,
    email: newEmail.value,
    nickName: newNickName.value,
    passWord: passWord.value,
    isDelete: isDelete.value,
    deletedAt: deletedAt.value,
   },
  });
  console.log(data);
 };

 ////////// USE EFFECT   //////////

 //////// - EVENT HANDLER- ////////
 return (
  <MM01Presenter
   newName={newName}
   newEmail={newEmail}
   newNickName={newNickName}
   passWord={passWord}
   checkedPassword={checkedPassword}
   createUserHandler={createUserHandler}
  ></MM01Presenter>
 );
};

export default MM01Container;
