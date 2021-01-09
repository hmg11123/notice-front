import React from "react";
import {
 Wrapper,
 TitleBox,
 ContentBox,
 TopBoard,
 BottomBoard,
 ImgBox,
} from "../../../Components/commonComponents";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import styled from "styled-components";

const Blank = styled.div`
 display: none;
`;

const RemoveBtn = styled.input`
 outline: none;
 background: none;
 border: none;
 width: 100px;
 height: 40px;
 background-color: ${(props) => props.theme.errorColor};
 color: ${(props) => props.theme.whiteColor};
 transition: 0.5s;
 &:hover {
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.errorColor};
  border: 1px solid ${(props) => props.theme.errorColor};
 }
`;

const UpdateBtn = styled.input`
 outline: none;
 background: none;
 border: none;
 width: 100px;
 height: 40px;
 background-color: ${(props) => props.theme.pointColor};
 color: ${(props) => props.theme.whiteColor};
 margin: 0px 10px 0px 0px;
 transition: 0.5s;
 &:hover {
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.pointColor};
  border: 1px solid ${(props) => props.theme.pointColor};
 }
`;

const OverFlowDiv = styled.div`
 overflow-y: auto;
`;

const BoardPresenter = ({
 popularGalleryData,
 deleteHandler,
 updateHandler,
}) => {
 return (
  <Wrapper>
   <Wrapper>
    <Wrapper width={`25%`}></Wrapper>
    <ContentBox width={`50%`} height={`100%`}>
     {/* <Wrapper ju={`flex-start`}>
      <Wrapper height={`10%`} fs={`25px`} al={`flex-start`}>
       제목
      </Wrapper> */}
     <Wrapper ju={`flex-start`}>
      <Wrapper height={`10%`} fs={`25px`} al={`flex-start`}>
       {popularGalleryData ? (
        popularGalleryData.title
       ) : (
        <CircularIndeterminate />
       )}
      </Wrapper>
      <TopBoard height={`10%`}>
       <Wrapper width={`10%`}>
        {popularGalleryData ? (
         popularGalleryData.author
        ) : (
         <CircularIndeterminate />
        )}
       </Wrapper>
       <Wrapper width={`15%`}>
        {popularGalleryData ? (
         popularGalleryData.createdAt
        ) : (
         <CircularIndeterminate />
        )}
       </Wrapper>
       <Wrapper width={`45%`}></Wrapper>
       <Wrapper width={`10%`}>추천수</Wrapper>
       <Wrapper width={`10%`}>
        조회수 :
        {popularGalleryData ? (
         popularGalleryData.hit
        ) : (
         <CircularIndeterminate />
        )}
       </Wrapper>
       <Wrapper width={`10%`}>댓글</Wrapper>
      </TopBoard>
      <Wrapper al={`flex-start`} ju={`flex-start`} margin={`30px`}>
       {popularGalleryData ? (
        <Wrapper>{popularGalleryData.description}</Wrapper>
       ) : (
        <CircularIndeterminate />
       )}
       {popularGalleryData ? (
        popularGalleryData.imgPath === "-" ? (
         <Blank></Blank>
        ) : (
         <ImgBox
          width={`300px`}
          height={`300px`}
          src={popularGalleryData.imgPath}
          margin={`20px 0px`}
         ></ImgBox>
        )
       ) : (
        <CircularIndeterminate />
       )}
      </Wrapper>
     </Wrapper>
     {/* //   <TopBoard height={`10%`}>
    //    <Wrapper width={`10%`}>작성자</Wrapper>
    //    <Wrapper width={`10%`}>작성일</Wrapper>
    //    <Wrapper width={`50%`}></Wrapper>
    //    <Wrapper width={`10%`}>작성자</Wrapper>
    //    <Wrapper width={`10%`}>조회수</Wrapper>
    //    <Wrapper width={`10%`}>댓글</Wrapper>
    //   </TopBoard>
    //   <Wrapper al={`flex-start`} ju={`flex-start`} margin={`30px`}>
    //    작성글
    //   </Wrapper>
    //  </Wrapper> */}
     {window.sessionStorage.getItem(`login`) ? (
      <Wrapper height={`100px`} dr={`row`} ju={`flex-end`}>
       <UpdateBtn
        type={`button`}
        value={`글 수정`}
        onClick={updateHandler}
       ></UpdateBtn>
       <RemoveBtn
        type={`button`}
        value={`글 삭제`}
        onClick={deleteHandler}
       ></RemoveBtn>
      </Wrapper>
     ) : (
      <Blank></Blank>
     )}
    </ContentBox>
    <Wrapper width={`25%`}></Wrapper>
   </Wrapper>
  </Wrapper>
 );
};

export default BoardPresenter;
