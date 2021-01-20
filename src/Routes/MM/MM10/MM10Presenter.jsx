import React from "react";
import {
 TitleBox,
 Wrapper,
 TopBoard,
 BottomBoard,
 WriteBtn,
 Pagenation,
 PagenationBtn,
 PagenationWrapper,
} from "../../../Components/commonComponents";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";

const MM10Presenter = ({
 noticeBannerDatum,
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
     공지사항
    </TitleBox>
    <Wrapper>
     {/**Top */}
     <TopBoard>
      <Wrapper width={`5%`} padding={`5px`}>
       번호
      </Wrapper>
      <Wrapper
       width={`42%`}
       padding={`5px`}
       al={`flex-start`}
       margin={`0px 0px 0px 55px`}
      >
       제목
      </Wrapper>
      <Wrapper width={`12%`} padding={`5px`}>
       글쓴이
      </Wrapper>
      <Wrapper width={`12%`} padding={`5px`}>
       작성일
      </Wrapper>
      <Wrapper width={`12%`} padding={`5px`}>
       조회수
      </Wrapper>
      <Wrapper width={`12%`} padding={`5px`}>
       추천
      </Wrapper>
     </TopBoard>
     {/**Bottom */}
     {noticeBannerDatum ? (
      noticeBannerDatum.length === 0 ? (
       <Wrapper>공지사항이 없습니다.</Wrapper>
      ) : (
       noticeBannerDatum.map((data, idx) => {
        return (
         <BottomBoard
          key={idx}
          onClick={() => moveLinkHandler(`Notice_D/${data._id}`)}
         >
          <Wrapper width={`5%`} padding={`5px`}>
           {/** 번호 */}
           {totalCnt - (currentPage * limit + idx) + ""}
           {/** 번호 */}
          </Wrapper>
          <Wrapper
           width={`42%`}
           padding={`5px`}
           al={`flex-start`}
           margin={`0px 0px 0px 55px`}
          >
           {data.title}
          </Wrapper>
          <Wrapper width={`12%`} padding={`5px`}>
           {data.author}
          </Wrapper>
          <Wrapper width={`12%`} padding={`5px`}>
           {data.createdAt.substring(0, 10)}
          </Wrapper>
          <Wrapper width={`12%`} padding={`5px`}>
           {data.hit}
          </Wrapper>
          <Wrapper width={`12%`} padding={`5px`}>
           {data.recommendation}
          </Wrapper>
         </BottomBoard>
        );
       })
      )
     ) : (
      <CircularIndeterminate />
     )}
     {/**페이지 네이션 */}
     <Wrapper ju={`flex-end`} dr={`row`}>
      {pages && pages.length > 0 && (
       <PagenationWrapper width={`auto`}>
        <PagenationBtn
         onClick={() =>
          noticeBannerDatum &&
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
          noticeBannerDatum &&
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

export default MM10Presenter;
