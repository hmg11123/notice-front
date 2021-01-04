import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../../Routes/MM/MM00";
import MM01 from "../../Routes/MM/MM01";
import MM02 from "../../Routes/MM/MM02";
import MM03 from "../../Routes/MM/MM03";

const WholeWrapper = styled.div`
 width: 100%;
`;

const Content = () => {
 return (
  <WholeWrapper>
   <Route exact path="/" component={MM00}></Route>
   <Route exact path="/SignUP" component={MM01}></Route>
   <Route exact path="/SignIN" component={MM02}></Route>
   <Route exact path="/PopularGallery" component={MM03}></Route>
  </WholeWrapper>
 );
};

export default Content;
