import React from "react";
import BoardPresenter from "./BoardPresenter";
import {
 GET_POPULAR_GALLERY,
 DELETE_POPULAR_GALLERY,
 //  UPDATE_POPULAR_GALLERY,
} from "./BoardQueries";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../../Hooks/useInput";

const BoardContainer = ({ match, history }) => {
 ////////////// - USE CONTEXT- ///////////////

 ////////////// - USE STATE- ///////////////
 const inputTitle = useInput("");
 const inputDescription = useInput("");
 const imgPath = useInput("");
 const userkey = match.params.key;

 console.log(userkey);

 ///////////// - USE QUERY- ////////////////
 const {
  data: popularGalleryData,
  loading: popularGalleryLoding,
  refetch: popularGalleryRefetch,
 } = useQuery(GET_POPULAR_GALLERY, {
  variables: {
   id: userkey,
  },
 });

 ///////////// - USE MUTATION- /////////////

 const [deletePopularGalleryMutation] = useMutation(DELETE_POPULAR_GALLERY, {
  variables: {
   id: userkey,
  },
 });
 //  const [updatePopularGalleryMutation] = useMutation(UPDATE_POPULAR_GALLERY);

 ///////////// - EVENT HANDLER- ////////////

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const deleteHandler = async () => {
  const key = sessionStorage.getItem(`login`);
  if (
   JSON.parse(key).getUser.nickName ===
   popularGalleryData.getPopularGallery.author
  ) {
   const { data } = await deletePopularGalleryMutation();
   if (data.deletePopularGallery) {
    moveLinkHandler("PopularGallery");
    toast.info(`게시글이 성공적으로 삭제되었습니다`);
   }
   console.log(data);
  } else {
   console.log(`실패`);
  }
 };

 const updateHandler = async () => {
  const key = sessionStorage.getItem(`login`);
  if (
   JSON.parse(key).getUser.nickName ===
   popularGalleryData.getPopularGallery.author
  ) {
   //    const { data } = await updatePopularGalleryMutation({
   //     variables: {
   //      id: popularGalleryData && popularGalleryData.getPopularGallery._id,
   //      title: inputTitle.value,
   //      description: inputDescription.value,
   //      imgPath: imgPath.value,
   //     },
   //    });
   //    if (data.updatePopularGallery) {
   //     toast.info("게시글이 수정되었습니다");
   //    } else {
   //     toast.error("다시 시도해주세요");
   //    }
   moveLinkHandler(`Board_U/${userkey}`);
  } else {
   moveLinkHandler("SignIN");
   toast.error("로그인 후 이용해주세요");
  }
 };

 ///////////// - USE EFFECT- ///////////////

 return (
  <BoardPresenter
   popularGalleryData={
    popularGalleryData && popularGalleryData.getPopularGallery
   }
   updateHandler={updateHandler}
   deleteHandler={deleteHandler}
  ></BoardPresenter>
 );
};

export default BoardContainer;
