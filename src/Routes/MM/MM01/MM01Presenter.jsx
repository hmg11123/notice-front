import React from "react";
import {
 Wrapper,
 TextBox,
 TitleBox,
 CheckBtn,
} from "../../../Components/commonComponents";

const MM01Presenter = ({}) => {
 return (
  <Wrapper margin={`50px 0px`}>
   <Wrapper>
    <TitleBox fs={`25px`} fw={`600`} margin={`0px 0px 50px 0px`}>
     회원가입
    </TitleBox>
   </Wrapper>
   <TextBox
    type={`text`}
    width={`500px`}
    height={`40px`}
    placeholder={`EMAIL...`}
    margin={`0px 0px 30px 0px`}
    fs={`18px`}
   ></TextBox>
   <TextBox
    type={`text`}
    width={`500px`}
    height={`40px`}
    placeholder={`Name...`}
    margin={`0px 0px 30px 0px`}
   ></TextBox>
   <TextBox
    type={`text`}
    width={`500px`}
    height={`40px`}
    placeholder={`NickName...`}
    margin={`0px 0px 30px 0px`}
   ></TextBox>
   <TextBox
    type={`text`}
    width={`500px`}
    height={`40px`}
    placeholder={`PassWord...`}
    margin={`0px 0px 30px 0px`}
   ></TextBox>
   <TextBox
    type={`text`}
    width={`500px`}
    height={`40px`}
    placeholder={`Checked PassWord...`}
    margin={`0px 0px 30px 0px`}
   ></TextBox>

   <CheckBtn width={`130px`} height={`40px`}>
    회원가입
   </CheckBtn>
  </Wrapper>
 );
};

export default MM01Presenter;
