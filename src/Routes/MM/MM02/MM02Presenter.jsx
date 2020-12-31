import React from "react";
import {
 Wrapper,
 TitleBox,
 CheckBtn,
} from "../../../Components/commonComponents";

const MM02Presenter = ({}) => {
 return (
  <Wrapper margin={`50px 0px`}>
   <Wrapper>
    <TitleBox fs={`25px`} fw={`600`} margin={`0px 0px 50px 0px`}>
     로그인
    </TitleBox>
   </Wrapper>
   <CheckBtn width={`130px`} height={`40px`}>
    로그인
   </CheckBtn>
  </Wrapper>
 );
};

export default MM02Presenter;
