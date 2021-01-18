import React from "react";
import {
 Wrapper,
 TitleBox,
 ContentBox,
 TopBoard,
 BottomBoard,
 ImgBox,
 TextInput,
 TextArea,
 FileBtn,
 OriginFileBtn,
} from "../../../../Components/commonComponents";
import CircularIndeterminate from "../../../../Components/loading/CircularIndeterminate";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

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

const GoodImg = styled.img`
 width: "50px";
 height: "50px";
`;

const OverFlowDiv = styled.div`
 overflow-y: auto;
`;

const GoodBtn = styled.div`
 width: ${(props) => props.width || `100px`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 border: 1px solid ${(props) => props.theme.pointColor};
 border-radius: ${(props) => props.theme.radius};
 color: ${(props) => props.color || ``};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 flex-wrap: ${(props) => props.wr || ``};
`;

const Movie_DPresenter = ({
 movieData,
 deleteHandler,
 _isDialogOpenToggle,
 isDialogOpen,
 updateHandler,
 imagePath,
 valueTitle,
 valueDesc,
 _valueChangeHandler,
 recommendationUpHandler,
 fileChangeHandler,
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
       {movieData ? movieData.title : <CircularIndeterminate />}
      </Wrapper>
      <TopBoard height={`10%`}>
       <Wrapper width={`10%`}>
        {movieData ? movieData.author : <CircularIndeterminate />}
       </Wrapper>
       <Wrapper width={`15%`}>
        {movieData ? movieData.createdAt : <CircularIndeterminate />}
       </Wrapper>
       <Wrapper width={`45%`}></Wrapper>
       <Wrapper width={`10%`}>추천수</Wrapper>
       <Wrapper width={`10%`}>
        조회수 :{movieData ? movieData.hit : <CircularIndeterminate />}
       </Wrapper>
       <Wrapper width={`10%`}>댓글</Wrapper>
      </TopBoard>
      <Wrapper al={`flex-start`} ju={`flex-start`} margin={`30px`}>
       {movieData ? (
        <Wrapper>{movieData.description}</Wrapper>
       ) : (
        <CircularIndeterminate />
       )}
       {movieData ? (
        movieData.imgPath === "-" ? (
         <Blank></Blank>
        ) : (
         <ImgBox
          width={`300px`}
          height={`300px`}
          src={movieData.imgPath}
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
     <Wrapper>
      <GoodBtn margin={`100px 0px 0px 0px`} onClick={recommendationUpHandler}>
       <GoodImg src="data:image/png;base64,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"></GoodImg>
       <Wrapper>추천하기</Wrapper>
      </GoodBtn>
     </Wrapper>
     {window.sessionStorage.getItem(`login`) ? (
      <Wrapper height={`100px`} dr={`row`} ju={`flex-end`}>
       <UpdateBtn
        type={`button`}
        value={`글 수정`}
        onClick={_isDialogOpenToggle}
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
   {/* Dialog Area */}
   {/**====================================================================== */}
   <Dialog
    onClose={_isDialogOpenToggle}
    aria-labelledby="customized-dialog-title"
    open={isDialogOpen}
    fullWidth={true}
   >
    <DialogTitle
     id="customized-dialog-title"
     onClose={_isDialogOpenToggle}
     // class="dialog_title"
    >
     게시글 수정
    </DialogTitle>
    <DialogContent>
     <Wrapper>
      <Wrapper al={`flex-start`}>제목</Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper al={`flex-start`} width={`480px`}>
        <TextInput
         width={`250px`}
         name="title"
         value={valueTitle}
         onChange={_valueChangeHandler}
         placeholder="수정할 제목을 쓰세요"
        />
       </Wrapper>
       <OriginFileBtn type="file" id="uploadImg" onChange={fileChangeHandler} />
       <FileBtn htmlFor="uploadImg" margin={`0px 0px 30px 0px`}>
        사진추가
       </FileBtn>
      </Wrapper>
     </Wrapper>
     <Wrapper>
      <Wrapper al={`flex-start`}>내용</Wrapper>
      <Wrapper al={`flex-start`}>
       <TextArea
        width={`100%`}
        height={`300px`}
        name="desc"
        value={valueDesc}
        onChange={_valueChangeHandler}
        placeholder="수정할 게시글을 쓰세요"
       />
      </Wrapper>
     </Wrapper>
     <Wrapper>
      <ImgBox width={`300px`} height={`300px`} src={`${imagePath}`}></ImgBox>
     </Wrapper>
    </DialogContent>
    <DialogActions>
     <Button color="primary" onClick={updateHandler}>
      수정하기
     </Button>
     <Button color="secondary" onClick={_isDialogOpenToggle}>
      취소
     </Button>
    </DialogActions>
   </Dialog>

   {/* Dialog Area */}
  </Wrapper>
 );
};

export default Movie_DPresenter;
