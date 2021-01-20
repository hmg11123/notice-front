import React from "react";
import {
 TitleBox,
 Wrapper,
 TopBoard,
 BottomBoard,
 WriteBtn,
 Pagenation,
 ImgBox,
 PagenationBtn,
 PagenationWrapper,
} from "../../../Components/commonComponents";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";

const BoardWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 border: 1px solid ${(props) => props.theme.pointColor};
`;

const TopLine = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 padding: ${(props) => props.padding || `10px`};
 border-top: 3px solid ${(props) => props.theme.pointColor};
`;

const WrapWrapper = styled(Wrapper)`
 flex-wrap: wrap;
`;

const MM08Presenter = ({
 photoBannerDatum,
 limit,
 searchValue,
 setSearchValue,
 currentPage,
 setCurrentPage,
 pages,
 moveLinkHandler,
 changePageHandler,
 totalCnt,
 prevAndNextPageChangeNoticeHandler,
 writeMoveLinkHandler,
}) => {
 return (
  <Wrapper dr={`row`}>
   <Wrapper width={`25%`}></Wrapper>
   <Wrapper width={`70%`}>
    <TitleBox fs={`25px`} fw={`600`} margin={`30px 0px 80px 0px`}>
     사진첩
    </TitleBox>
    <Wrapper>
     {/**Top */}
     <TopLine></TopLine>
     <WrapWrapper dr={`row`}>
      {photoBannerDatum ? (
       photoBannerDatum.length === 0 ? (
        <Wrapper>겔러리가 없습니다.</Wrapper>
       ) : (
        photoBannerDatum.map((data, idx) => {
         return (
          <Wrapper
           dr={`row`}
           width={`250px`}
           height={`300px`}
           key={idx}
           onClick={() => moveLinkHandler(`Photo_D/${data._id}`)}
          >
           <BoardWrapper>
            <Wrapper height={`10%`}>{data.title}</Wrapper>
            <Wrapper height={`10%`} dr={`row`}>
             <Wrapper>{data.createdAt.substring(0, 9)}</Wrapper>
             <Wrapper>{data.author}</Wrapper>
            </Wrapper>
            <ImgBox height={`80%`} src={data.imgPath}></ImgBox>
           </BoardWrapper>
          </Wrapper>
         );
        })
       )
      ) : (
       <CircularIndeterminate />
      )}
     </WrapWrapper>

     <Wrapper al={`flex-end`}>
      <WriteBtn width={`100px`} height={`40px`} onClick={writeMoveLinkHandler}>
       사진 올리기
      </WriteBtn>
     </Wrapper>
     {/**페이지 네이션 */}
     <Wrapper ju={`flex-end`} dr={`row`}>
      {pages && pages.length > 0 && (
       <PagenationWrapper width={`auto`}>
        <PagenationBtn
         onClick={() =>
          photoBannerDatum &&
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
           {data + 1}
          </Pagenation>
         );
        })}
        <PagenationBtn
         onClick={() =>
          photoBannerDatum &&
          prevAndNextPageChangeNoticeHandler(currentPage + 1)
         }
        >
         <IoIosArrowForward />
        </PagenationBtn>
       </PagenationWrapper>
      )}
     </Wrapper>
    </Wrapper>
   </Wrapper>
   <Wrapper width={`25%`}></Wrapper>
  </Wrapper>
 );
};

export default MM08Presenter;
