import React from "react";
import { Wrapper } from "../../../Components/commonComponents";
import styled from "styled-components";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";

const ActionP = styled.p`
 cursor: pointer;
 width: 100px;
 height: 30px;
 background-color: ${(props) => props.theme.whiteColor};
 color: ${(props) => props.theme.subThemeColor};
 border-radius: ${(props) => props.theme.radius};
 font-size: 14px;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: 0.5s;

 &:hover {
  box-shadow: 1px 3px 5px ${(props) => props.theme.blackColor};
 }
`;

const BoardWrapper = styled.div`
 width: 100%;
 height: 50px;
 padding: 10px;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 border-bottom: 1px solid ${(props) => props.theme.grey2Color};
 transition: 0.5s;
 font-size: ${(props) => props.fs};

 &:hover {
  background-color: ${(props) => props.theme.grey2Color};
  color: ${(props) => props.theme.whiteColor};
 }
`;

const RealTimeWrapper = styled.div`
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 width: ${(props) => props.width || `100%`};
 height: 300px;
 border: 1px solid ${(props) => props.theme.grey2Color};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
`;

const LeftWrapper = styled.div`
 width: 100%;
 height: 30px;
 margin-top: 10px;
 display: flex;
 justify-content: flex-start;
 border-bottom: 1px dashed ${(props) => props.theme.grey2Color};
 font-size: 16px;
 font-weight: 600;
`;

const ActionDiv = styled.div`
 width: 100%;
 height: 50px;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 transition: 0.5s;
 font-size: 14px;
 cursor: pointer;
 &:hover {
  text-decoration-line: underline;
 }
`;

const SliderBox = styled.div`
 width: 230px;
 height: 260px;
 margin: 10px;
 border: 1px solid ${(props) => props.theme.subThemeColor};
 border-radius: ${(props) => props.theme.radius};
`;

const TitleDiv = styled.div`
 width: 95%;
 height: 100%;
 display: flex;
 justify-content: flex-start;
 border-bottom: 3px solid ${(props) => props.theme.grey2Color};
 font-size: 18px;
 font-weight: 600;
 color: ${(props) => props.theme.grey2Color};
`;

const ImgBox = styled.img`
 width: 170px;
 height: 170px;
 background-size: cover;
 border-radius: 5px;
`;

const MM00Presenter = ({ noticeBannerDatum, popularGalleryBannerDatum }) => {
 return (
  <Wrapper>
   <Wrapper width={`20%`}></Wrapper>
   <Wrapper dr={`row`} width={`60%`}>
    <Wrapper dr={`column`}>
     {/** top */}
     <Wrapper>
      <Wrapper>
       <TitleDiv>
        <Wrapper>인기 겔러리</Wrapper>
       </TitleDiv>
       <Wrapper dr={`row`}>
        {popularGalleryBannerDatum ? (
         popularGalleryBannerDatum.length === 0 ? (
          <Wrapper>인기겔러리가 없습니다.</Wrapper>
         ) : (
          popularGalleryBannerDatum.map((data, idx) => {
           return (
            <Wrapper key={idx}>
             <SliderBox>
              <Wrapper>
               <ImgBox src={data.imgPath} />
               <Wrapper height={`40px`} margin={`0px 10px 0px 0px`} fw={`600`}>
                {data.title}
               </Wrapper>
               <Wrapper height={`40px`} margin={`0px 10px 0px 0px`}>
                {data.description}
               </Wrapper>
              </Wrapper>
             </SliderBox>
            </Wrapper>
           );
          })
         )
        ) : (
         <CircularIndeterminate />
        )}
       </Wrapper>
      </Wrapper>
     </Wrapper>
     {/** bottom */}
     <Wrapper dr={`row`}>
      <Wrapper width={`10%`}></Wrapper>
      <Wrapper width={`40%`}>
       <Wrapper bc={`#2d98da`} color={`#fff`} dr={`row`}>
        <Wrapper al={`flex-start`}>공지사항</Wrapper>
        <ActionP>더보기</ActionP>
       </Wrapper>
       {noticeBannerDatum ? (
        noticeBannerDatum.length === 0 ? (
         <Wrapper>공지사항이 없습니다.</Wrapper>
        ) : (
         noticeBannerDatum.map((data, idx) => {
          return (
           <BoardWrapper key={idx}>
            <Wrapper width={`200px`} padding={`none`} al={`flex-start`}>
             {data.type}
            </Wrapper>
            <Wrapper
             margin={`0px 0px 0px 10px`}
             padding={`none`}
             al={`flex-start`}
            >
             {data.title}
            </Wrapper>
            <Wrapper al={`flex-start`}>{data.createdAt}</Wrapper>
           </BoardWrapper>
          );
         })
        )
       ) : (
        <CircularIndeterminate />
       )}
      </Wrapper>
      <Wrapper width={`40%`} margin={`0px 0px 0px 20px`}>
       <Wrapper bc={`#2d98da`} color={`#fff`} dr={`row`}>
        <Wrapper al={`flex-start`}>뭘넣지?</Wrapper>
        <ActionP>더보기</ActionP>
       </Wrapper>
       <BoardWrapper>인기게시판</BoardWrapper>
      </Wrapper>
      <Wrapper width={`10%`}></Wrapper>
     </Wrapper>
    </Wrapper>
    <Wrapper width={`300px`}>
     <RealTimeWrapper width={`100%`} margin={`0px 0px 0px 20px`}>
      <LeftWrapper>실시간검색어</LeftWrapper>
      <ActionDiv> 1. 실시간검색어</ActionDiv>
     </RealTimeWrapper>
    </Wrapper>
   </Wrapper>
   <Wrapper width={`20%`}></Wrapper>
  </Wrapper>
 );
};

export default MM00Presenter;

{
 /* <Wrapper>
<SliderBox>
 <Wrapper>
  <Wrapper>사진</Wrapper>
  <Wrapper height={`40px`}>제목</Wrapper>
 </Wrapper>
</SliderBox>
</Wrapper> */
}
