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

const MM05Presenter = ({
 gameBannerDatum,
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
     게임게시판
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
     {gameBannerDatum ? (
      gameBannerDatum.length === 0 ? (
       <Wrapper>게임게시글이 없습니다.</Wrapper>
      ) : (
       gameBannerDatum.map((data, idx) => {
        return (
         <BottomBoard
          key={idx}
          onClick={() => moveLinkHandler(`Game_D/${data._id}`)}
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
           {data.recommendation + 1}
          </Wrapper>
         </BottomBoard>
        );
       })
      )
     ) : (
      <CircularIndeterminate />
     )}
     <Wrapper al={`flex-end`}>
      <WriteBtn width={`100px`} height={`40px`} onClick={writeMoveLinkHandler}>
       글쓰기
      </WriteBtn>
     </Wrapper>
     {/**페이지 네이션 */}
     <Wrapper ju={`flex-end`} dr={`row`}>
      {pages && pages.length > 0 && (
       <PagenationWrapper width={`auto`}>
        <PagenationBtn
         onClick={() =>
          gameBannerDatum && prevAndNextPageChangeNoticeHandler(currentPage - 1)
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
          gameBannerDatum && prevAndNextPageChangeNoticeHandler(currentPage + 1)
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

export default MM05Presenter;
