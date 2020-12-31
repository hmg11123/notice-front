import React from "react";
import {
 Wrapper,
 ActionP,
 Pagenation,
 PagenationBtn,
 PagenationWrapper,
} from "../../../Components/commonComponents";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";

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
 width: 200px;
 height: 260px;
 margin: 10px;
 border: 1px solid ${(props) => props.theme.subThemeColor};
 border-radius: ${(props) => props.theme.radius};
`;

const TitleBox = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 border-bottom: 3px solid ${(props) => props.theme.grey2Color};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 color: ${(props) => props.theme.grey2Color};
`;

const ImgBox = styled.img`
 width: 170px;
 height: 170px;
 background-size: cover;
 border-radius: 5px;
`;

const WrapWrapper = styled(Wrapper)`
 width: 1350px;
 flex-wrap: wrap;
`;

const MM00Presenter = ({
 noticeBannerDatum,
 popularGalleryBannerDatum,
 pages,
 prevAndNextPageChangeNoticeHandler,
 currentPage,
 limit,
 changePageHandler,
 SoprtsBannerDatum,
 HobbyBannerDatum,
 GameBannerDatum,
}) => {
 return (
  <Wrapper>
   <Wrapper width={`20%`}></Wrapper>
   <Wrapper dr={`row`} width={`60%`}>
    <Wrapper dr={`column`}>
     {/** top */}
     <Wrapper>
      <Wrapper>
       <TitleBox dr={`row`} width={`95%`} fs={`18px`} fw={`600`}>
        <Wrapper al={`flex-start`} fs={`18px`}>
         인기 겔러리
        </Wrapper>
        {/**페이지 네이션 */}
        <Wrapper ju={`flex-end`} dr={`row`}>
         {pages && pages.length > 0 && (
          <PagenationWrapper width={`auto`}>
           <PagenationBtn
            onClick={() =>
             popularGalleryBannerDatum &&
             prevAndNextPageChangeNoticeHandler(currentPage - 1)
            }
           >
            <IoIosArrowBack />
           </PagenationBtn>
           {pages.map((data) => {
            return (
             <Pagenation
              className={data === currentPage ? `active` : ``}
              key={data}
              onClick={() => changePageHandler(data)}
             >
              {console.log(popularGalleryBannerDatum)}
              {data + 1}
             </Pagenation>
            );
           })}
           <PagenationBtn
            onClick={() =>
             popularGalleryBannerDatum &&
             prevAndNextPageChangeNoticeHandler(currentPage + 1)
            }
           >
            <IoIosArrowForward />
           </PagenationBtn>
          </PagenationWrapper>
         )}
        </Wrapper>
       </TitleBox>
       <Wrapper dr={`row`}>
        <WrapWrapper dr={`row`}>
         {popularGalleryBannerDatum ? (
          popularGalleryBannerDatum.length === 0 ? (
           <Wrapper>인기겔러리가 없습니다.</Wrapper>
          ) : (
           popularGalleryBannerDatum.map((data, idx) => {
            return (
             <SliderBox key={idx}>
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
            );
           })
          )
         ) : (
          <CircularIndeterminate />
         )}
        </WrapWrapper>
       </Wrapper>
      </Wrapper>
     </Wrapper>
     {/*///////////////////////
      * ////////bottom/////////
      * ///////////////////////*/}
     <Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width={`10%`}></Wrapper>
       <Wrapper width={`40%`}>
        <Wrapper bc={`#2d98da`} color={`#fff`} dr={`row`}>
         <Wrapper al={`flex-start`}>공지사항</Wrapper>
         <ActionP width={`100px`} height={`30px`} fs={`14px`}>
          더보기
         </ActionP>
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
         <Wrapper al={`flex-start`}>스포츠</Wrapper>
         <ActionP width={`100px`} height={`30px`} fs={`14px`}>
          더보기
         </ActionP>
        </Wrapper>
        {SoprtsBannerDatum ? (
         SoprtsBannerDatum.length === 0 ? (
          <Wrapper>게시글이 없습니다.</Wrapper>
         ) : (
          SoprtsBannerDatum.map((data, idx) => {
           return (
            <BoardWrapper key={idx}>
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
       <Wrapper width={`10%`}></Wrapper>
      </Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper width={`10%`}></Wrapper>
       <Wrapper width={`40%`}>
        <Wrapper bc={`#2d98da`} color={`#fff`} dr={`row`}>
         <Wrapper al={`flex-start`}>취미</Wrapper>
         <ActionP width={`100px`} height={`30px`} fs={`14px`}>
          더보기
         </ActionP>
        </Wrapper>
        {HobbyBannerDatum ? (
         HobbyBannerDatum.length === 0 ? (
          <Wrapper>게시글이 없습니다.</Wrapper>
         ) : (
          HobbyBannerDatum.map((data, idx) => {
           return (
            <BoardWrapper key={idx}>
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
         <Wrapper al={`flex-start`}>게임</Wrapper>
         <ActionP width={`100px`} height={`30px`} fs={`14px`}>
          더보기
         </ActionP>
        </Wrapper>
        {GameBannerDatum ? (
         GameBannerDatum.length === 0 ? (
          <Wrapper>게시글이 없습니다.</Wrapper>
         ) : (
          GameBannerDatum.map((data, idx) => {
           return (
            <BoardWrapper key={idx}>
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
       <Wrapper width={`10%`}></Wrapper>
      </Wrapper>
     </Wrapper>
    </Wrapper>
    {/* <Wrapper>
     <RealTimeWrapper width={`200px`} margin={`0px 0px 500px 20px`}>
      <LeftWrapper>실시간검색어</LeftWrapper>
      <ActionDiv> 1. 실시간검색어</ActionDiv>
     </RealTimeWrapper>
    </Wrapper> */}
   </Wrapper>
   <Wrapper width={`20%`}></Wrapper>
  </Wrapper>
 );
};

export default MM00Presenter;
