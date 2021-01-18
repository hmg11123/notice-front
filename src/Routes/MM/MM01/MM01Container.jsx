import React from "react";
import MM01Presenter from "./MM01Presenter";
import useInput from "../../../Hooks/useInput";
import { CREATE_USER, GET_ALL_USER, USER_LENGTH } from "./MM01Queries";
import { useQuery, useMutation } from "react-apollo-hooks";

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

 const {
  data: userLengthData,
  loading: userLengthLoading,
  refetch: userLengthRefetch,
 } = useQuery(USER_LENGTH);

 ////////// USE MUTATION //////////

 const [createUserMutation] = useMutation(CREATE_USER);
 const [getAllUserMutation] = useMutation(GET_ALL_USER);

 ////////// HANDLER      //////////
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const getAllUser = async () => {
  const { data } = await getAllUserMutation({});

  return { data };
 };
 const createUserHandler = async () => {
  for (const i = 0; i < userLengthData.userLength; i++) {
   if ((await getAllUser()).data.getAllUser[i].email === newEmail.value) {
    alert("이미 가입한 이메일 입니다.");
    return;
   } else {
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
      type: "user",
      name: newName.value,
      email: newEmail.value,
      nickName: newNickName.value,
      mobile: newMobile.value,
      isDelete: isDelete.value,
      deletedAt: deletedAt.value,
     },
    }).then(moveLinkHandler("SignIN"));
   }
  }
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
