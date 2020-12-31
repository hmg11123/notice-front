import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../../Routes/MM/MM00";
import MM01 from "../../Routes/MM/MM01";

const WholeWrapper = styled.div`
 width: 100%;
`;

const Content = () => {
 return (
  <WholeWrapper>
   <Route exact path="/" component={MM00}></Route>
   <Route exact path="/SignUP" component={MM01}></Route>
  </WholeWrapper>
 );
};

export default Content;
