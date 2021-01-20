import React from "react";
import styled from "styled-components";
import {
 Wrapper,
 TitleBox,
 TextArea,
 CheckBtn,
 CancelBtn,
 TextInput,
 FileBtn,
 OriginFileBtn,
 ImgBox,
} from "../../../../Components/commonComponents";
const WriteBox = styled.div`
 width: 1000px;
 height: 1000px;
 border: 1.5px solid ${(props) => props.theme.subThemeColor};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
`;
const TextBox = styled.div`
 width: 100%;
 height: 100%;
 margin-bottom: 10px;
 font-size: 16px;
`;
const Gallery_WPresenter = ({
 imagePath,
 fileChangeHandler,
 user,
 today,
 inputTitle,
 inputDescription,
 writeHandler,
 cancelHandler,
}) => {
 return (
  <Wrapper margin={`0px 0px 100px 0px`}>
   <Wrapper margin={`30px 0px`}>
    <TitleBox>겔러리</TitleBox>
   </Wrapper>
   <WriteBox>
    <Wrapper height={`85%`}>
     <Wrapper width={`80%`} height={`20%`} ju={`space-between`} dr={`row`}>
      <TextInput
       type="text"
       width={`40%`}
       height={`40px`}
       {...inputTitle}
       placeholder={`제목을 입력해 주세요.`}
      ></TextInput>
      <Wrapper dr={`row`} ju={`flex-end`}>
       {/* <FileBtn margin={`0px 10px 30px 0px`}>파일추가</FileBtn> */}
       <OriginFileBtn type="file" id="uploadImg" onChange={fileChangeHandler} />
       <FileBtn htmlFor="uploadImg" margin={`0px 0px 30px 0px`}>
        사진추가
       </FileBtn>
      </Wrapper>
     </Wrapper>
     <Wrapper width={`80%`} height={`10%`} al={`flex-start`}>
      <TextBox>아이디 : {JSON.parse(user[0]).getUser.nickName}</TextBox>
      <TextBox>작성날자 : {today}</TextBox>
     </Wrapper>
     <TextArea
      width={`80%`}
      height={`70%`}
      placeholder={`글을 작성해주세요.`}
      {...inputDescription}
     ></TextArea>
     <ImgBox width={`300px`} height={`300px`} src={imagePath} />
    </Wrapper>
    <Wrapper height={`15%`} dr={`row`} ju={`flex-end`}>
     <CheckBtn
      width={`100px`}
      height={`40px`}
      margin={`0px 10px 0px 0px`}
      onClick={writeHandler}
     >
      등록
     </CheckBtn>
     <CancelBtn width={`100px`} height={`40px`} onClick={cancelHandler}>
      취소
     </CancelBtn>
    </Wrapper>
   </WriteBox>
  </Wrapper>
 );
};

export default Gallery_WPresenter;
