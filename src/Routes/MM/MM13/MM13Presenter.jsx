import React from "react";
import {
 TitleBox,
 Wrapper,
 TopBoard,
 BottomBoard,
 WriteBtn,
 TextInput,
 DeleteBtn,
 TextArea,
} from "../../../Components/commonComponents";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const MyPageWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};

 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 flex-wrap: ${(props) => props.wr || ``};
 border: 1px solid ${(props) => props.theme.pointColor};
`;

const MM13Presenter = ({
 user,
 isDialogOpen,
 _isDialogOpenToggle,
 valueEmail,
 valueName,
 valueNickName,
 valueMobile,
 _valueChangeHandler,
 userUpdate,
 userDelete,
}) => {
 return (
  <Wrapper>
   <MyPageWrapper width={`1050px`} height={`1000px`}>
    <TitleBox height={`300px`}>마이페이지</TitleBox>
    <Wrapper>
     <Wrapper al={`flex-start`} margin={`0px 0px 0px 200px`}>
      이메일 : {JSON.parse(user[0]).getUser.email}
     </Wrapper>
     <Wrapper al={`flex-start`} margin={`0px 0px 0px 200px`}>
      이름 : {JSON.parse(user[0]).getUser.name}
     </Wrapper>
     <Wrapper al={`flex-start`} margin={`0px 0px 0px 200px`}>
      닉네임 : {JSON.parse(user[0]).getUser.nickName}
     </Wrapper>
     <Wrapper al={`flex-start`} margin={`0px 0px 0px 200px`}>
      전화번호 : {JSON.parse(user[0]).getUser.mobile}
     </Wrapper>
    </Wrapper>
    <Wrapper dr={"row"} ju={`space-around`}>
     <WriteBtn input="button" onClick={_isDialogOpenToggle}>
      정보 수정
     </WriteBtn>
     <DeleteBtn input="button" onClick={userDelete}>
      회원 탈퇴
     </DeleteBtn>
    </Wrapper>
    <Wrapper dr={`row`}>
     <Wrapper width={`90%`}>
      <TitleBox fs={`25px`} fw={`600`} margin={`30px 0px 10px 0px`}>
       내 게시글
      </TitleBox>
      <Wrapper>
       {/**Top */}
       <TopBoard>
        <Wrapper width={`5%`} padding={`5px`}>
         번호
        </Wrapper>
        <Wrapper width={`50%`} padding={`5px`}>
         제목
        </Wrapper>
        <Wrapper width={`10%`} padding={`5px`}>
         글쓴이
        </Wrapper>
        <Wrapper width={`10%`} padding={`5px`}>
         작성일
        </Wrapper>
        <Wrapper width={`10%`} padding={`5px`}>
         조회수
        </Wrapper>
        <Wrapper width={`10%`} padding={`5px`}>
         추천
        </Wrapper>
       </TopBoard>
       {/**Bottom */}
       <BottomBoard>
        <Wrapper width={`5%`} padding={`5px`}>
         번호
        </Wrapper>
        <Wrapper
         width={`50%`}
         padding={`5px`}
         al={`flex-start`}
         margin={`0px 0px 0px 55px`}
        >
         제목
        </Wrapper>
        <Wrapper width={`10%`} padding={`5px`}>
         글쓴이
        </Wrapper>
        <Wrapper width={`10%`} padding={`5px`}>
         작성일
        </Wrapper>
        <Wrapper width={`10%`} padding={`5px`}>
         조회수
        </Wrapper>
        <Wrapper width={`10%`} padding={`5px`}>
         추천
        </Wrapper>
       </BottomBoard>
      </Wrapper>
     </Wrapper>
    </Wrapper>
   </MyPageWrapper>
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
      <Wrapper al={`flex-start`}>이메일</Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
        <TextInput
         width={`250px`}
         height={`50px`}
         name="email"
         value={valueEmail}
         onChange={_valueChangeHandler}
         placeholder="수정할 이메일을 쓰세요"
        />
       </Wrapper>
      </Wrapper>
     </Wrapper>
     <Wrapper>
      <Wrapper al={`flex-start`}>이름</Wrapper>
      <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
       <TextInput
        width={`250px`}
        height={`50px`}
        name="name"
        value={valueName}
        onChange={_valueChangeHandler}
        placeholder="수정할 이름을 쓰세요"
       />
      </Wrapper>
     </Wrapper>
     <Wrapper>
      <Wrapper al={`flex-start`}>닉네임</Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
        <TextInput
         width={`250px`}
         height={`50px`}
         name="nickName"
         value={valueNickName}
         onChange={_valueChangeHandler}
         placeholder="수정할 닉네임을 쓰세요"
        />
       </Wrapper>
      </Wrapper>
     </Wrapper>
     <Wrapper>
      <Wrapper al={`flex-start`}>전화번호</Wrapper>
      <Wrapper dr={`row`}>
       <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
        <TextInput
         width={`250px`}
         height={`50px`}
         name="mobile"
         value={valueMobile}
         onChange={_valueChangeHandler}
         placeholder="수정할 전화번호를 쓰세요"
        />
       </Wrapper>
      </Wrapper>
     </Wrapper>
    </DialogContent>
    <DialogActions>
     <Button color="primary" onClick={userUpdate}>
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

export default MM13Presenter;
