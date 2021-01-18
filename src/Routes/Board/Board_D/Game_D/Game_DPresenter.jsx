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

const OverFlowDiv = styled.div`
 overflow-y: auto;
`;

const Game_DPresenter = ({
 gameData,
 deleteHandler,
 _isDialogOpenToggle,
 isDialogOpen,
 updateHandler,
 imagePath,
 valueTitle,
 valueDesc,
 _valueChangeHandler,
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
       {gameData ? gameData.title : <CircularIndeterminate />}
      </Wrapper>
      <TopBoard height={`10%`}>
       <Wrapper width={`10%`}>
        {gameData ? gameData.author : <CircularIndeterminate />}
       </Wrapper>
       <Wrapper width={`15%`}>
        {gameData ? gameData.createdAt : <CircularIndeterminate />}
       </Wrapper>
       <Wrapper width={`45%`}></Wrapper>
       <Wrapper width={`10%`}>추천수</Wrapper>
       <Wrapper width={`10%`}>
        조회수 :{gameData ? gameData.hit : <CircularIndeterminate />}
       </Wrapper>
       <Wrapper width={`10%`}>댓글</Wrapper>
      </TopBoard>
      <Wrapper al={`flex-start`} ju={`flex-start`} margin={`30px`}>
       {gameData ? (
        <Wrapper>{gameData.description}</Wrapper>
       ) : (
        <CircularIndeterminate />
       )}
       {gameData ? (
        gameData.imgPath === "-" ? (
         <Blank></Blank>
        ) : (
         <ImgBox
          width={`300px`}
          height={`300px`}
          src={gameData.imgPath}
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

export default Game_DPresenter;
