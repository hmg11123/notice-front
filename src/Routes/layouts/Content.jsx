import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../../Routes/MM/MM00";
import MM01 from "../../Routes/MM/MM01";
import MM02 from "../../Routes/MM/MM02";
import MM03 from "../../Routes/MM/MM03";
import Board_D from "../../Routes/Board/Board_D";
import Board_W from "../../Routes/Board/Board_W";
import Board_U from "../../Routes/Board/Board_U";

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
   <Route exact path="/Board_D/:key" component={Board_D}></Route>
   <Route exact path="/Board_W" component={Board_W}></Route>
   <Route exact path="/Board_U/:key" component={Board_U}></Route>
  </WholeWrapper>
 );
};

export default Content;
