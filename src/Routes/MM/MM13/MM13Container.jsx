import React, { useState } from "react";
import { UPDATE_USER, VIEW_USER } from "./MM13Queries";
import MM13Presenter from "./MM13Presenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
const MM13Container = ({ history }) => {
 ////////// VARIABLE     //////////

 ////////// USE SATETE   //////////
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const user = useState(window.sessionStorage.getItem(`login`));
 const [value, setValue] = useState({
  email: "",
  name: "",
  nickName: "",
  mobile: "",
 });
 ////////// USE REF      //////////

 ////////// USE CONTEXT  //////////

 ////////// USE QUERY    //////////
 const {
  data: viewUserData,
  loading: viewUserLoding,
  refetch: viewUserRefetch,
 } = useQuery(VIEW_USER, {
  variables: {
   email: JSON.parse(user[0]).getUser.email,
  },
 });
 ////////// USE MUTATION //////////
 const [updateUserMutation] = useMutation(UPDATE_USER);
 ////////// HANDLER      //////////
 //////// - EVENT HANDLER- ////////
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };
 const userUpdate = async () => {
  const _id = JSON.parse(user[0]).getUser._id;
  if (JSON.parse(user[0]).getUser._id === viewUserData.viewUser._id) {
   const { data } = await updateUserMutation({
    variables: {
     id: _id,
     email: value.email,
     name: value.name,
     nickName: value.nickName,
     mobile: value.mobile,
    },
   });
   console.log(data);
   if (data.updateUser) {
    toast.info("수정 성공");
    window.sessionStorage.removeItem("login");
    moveLinkHandler(`SignIN`);
   } else {
    toast.error("수정 실패");
   }
  } else {
   toast.error("수정 실패");
  }
 };
 const _isDialogOpenToggle = () => {
  setIsDialogOpen(!isDialogOpen);
  if (!isDialogOpen) {
   setValue({
    email: JSON.parse(user[0]).getUser.email,
    name: JSON.parse(user[0]).getUser.name,
    nickName: JSON.parse(user[0]).getUser.nickName,
    mobile: JSON.parse(user[0]).getUser.mobile,
   });
  }
 };

 const _valueChangeHandler = (event) => {
  const nextState = { ...value };

  nextState[event.target.name] = event.target.value;

  setValue(nextState);
 };
 console.log(value);

 return (
  <MM13Presenter
   user={user}
   valueEmail={value.email}
   valueName={value.name}
   valueNickName={value.nickName}
   valueMobile={value.mobile}
   userUpdate={userUpdate}
   _isDialogOpenToggle={_isDialogOpenToggle}
   isDialogOpen={isDialogOpen}
   _valueChangeHandler={_valueChangeHandler}
  ></MM13Presenter>
 );
};

export default MM13Container;
