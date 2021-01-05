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

const BoardPresenter = ({ popularGalleryData }) => {
 return (
  <Wrapper>
   <Wrapper>
    <Wrapper width={`25%`}></Wrapper>
    <ContentBox width={`50%`} height={`700px`}>
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
        popularGalleryData.description
       ) : (
        <CircularIndeterminate />
       )}
       {popularGalleryData ? (
        <ImgBox src={popularGalleryData.imgPath}></ImgBox>
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
    </ContentBox>
    <Wrapper width={`25%`}></Wrapper>
   </Wrapper>
  </Wrapper>
 );
};

export default BoardPresenter;
