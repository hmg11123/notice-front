import React from "react";
import {
 Wrapper,
 TextInput,
 TitleBox,
 CheckBtn,
} from "../../../Components/commonComponents";

const MM01Presenter = ({
 newName,
 newEmail,
 newNickName,
 passWord,
 checkedPassword,
 createUserHandler,
}) => {
 return (
  <Wrapper margin={`50px 0px`}>
   <Wrapper>
    <TitleBox fs={`25px`} fw={`600`} margin={`0px 0px 50px 0px`}>
     회원가입
    </TitleBox>
   </Wrapper>
   <TextInput
    type={`text`}
    width={`500px`}
    height={`40px`}
    placeholder={`EMAIL...`}
    margin={`0px 0px 30px 0px`}
    fs={`18px`}
    {...newEmail}
   ></TextInput>
   <TextInput
    type={`text`}
    width={`500px`}
    height={`40px`}
    placeholder={`Name...`}
    margin={`0px 0px 30px 0px`}
    {...newName}
   ></TextInput>
   <TextInput
    type={`text`}
    width={`500px`}
    height={`40px`}
    placeholder={`NickName...`}
    margin={`0px 0px 30px 0px`}
    {...newNickName}
   ></TextInput>
   <TextInput
    type={`password`}
    width={`500px`}
    height={`40px`}
    placeholder={`PassWord...`}
    margin={`0px 0px 30px 0px`}
    {...passWord}
   ></TextInput>
   <TextInput
    type={`password`}
    width={`500px`}
    height={`40px`}
    placeholder={`Checked PassWord...`}
    margin={`0px 0px 30px 0px`}
    {...checkedPassword}
   ></TextInput>

   <CheckBtn width={`130px`} height={`40px`} onClick={createUserHandler}>
    회원가입
   </CheckBtn>
  </Wrapper>
 );
};

export default MM01Presenter;
