import React from "react";
import { Wrapper } from "../../Components/commonComponents";
import styled from "styled-components";

const MM03Presenter = () => {
 return (
  <Wrapper dr={`row`}>
   <Wrapper width={`30%`}></Wrapper>
   <Wrapper width={`40%`}>공지사항</Wrapper>
   <Wrapper width={`20%`}>실시간 검색어</Wrapper>
   <Wrapper width={`10%`}></Wrapper>
  </Wrapper>
 );
};

export default MM03Presenter;
