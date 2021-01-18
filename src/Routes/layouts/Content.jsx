import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../../Routes/MM/MM00";
import MM01 from "../../Routes/MM/MM01";
import MM02 from "../../Routes/MM/MM02";
import MM03 from "../../Routes/MM/MM03";
import MM04 from "../../Routes/MM/MM04";
import MM05 from "../../Routes/MM/MM05";
import MM06 from "../../Routes/MM/MM06";
import MM07 from "../../Routes/MM/MM07";
import MM13 from "../../Routes/MM/MM13";
import Gallery_D from "../../Routes/Board/Board_D/Gallery_D";
import Gallery_W from "../../Routes/Board/Board_W/Gallery_W";
import Game_D from "../../Routes/Board/Board_D/Game_D";
import Game_W from "../../Routes/Board/Board_W/Game_W";
import Movie_D from "../../Routes/Board/Board_D/Movie_D";
import Movie_W from "../../Routes/Board/Board_W/Movie_W";
// import Board_U from "../../Routes/Board/Board_U";

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
   <Route exact path="/Gallery" component={MM04}></Route>
   <Route exact path="/GameBoard" component={MM05}></Route>
   <Route exact path="/MovieBoard" component={MM06}></Route>
   <Route exact path="/SoprtsBoard" component={MM07}></Route>
   <Route exact path="/MyPage" component={MM13}></Route>
   <Route exact path="/Gallery_D/:key" component={Gallery_D}></Route>
   <Route exact path="/Game_D/:key" component={Game_D}></Route>
   <Route exact path="/Gallery_W" component={Gallery_W}></Route>
   <Route exact path="/Game_W" component={Game_W}></Route>
   <Route exact path="/Movie_D/:key" component={Movie_D}></Route>
   <Route exact path="/Movie_W" component={Movie_W}></Route>
   {/* <Route exact path="/Board_U/:key" component={Board_U}></Route> */}
  </WholeWrapper>
 );
};

export default Content;
