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
import MM08 from "../../Routes/MM/MM08";
import MM09 from "../../Routes/MM/MM09";
import MM10 from "../../Routes/MM/MM10";
import MM11 from "../../Routes/MM/MM11";
import MM13 from "../../Routes/MM/MM13";
import Gallery_D from "../../Routes/Board/Board_D/Gallery_D";
import Gallery_W from "../../Routes/Board/Board_W/Gallery_W";
import Game_D from "../../Routes/Board/Board_D/Game_D";
import Game_W from "../../Routes/Board/Board_W/Game_W";
import Movie_D from "../../Routes/Board/Board_D/Movie_D";
import Movie_W from "../../Routes/Board/Board_W/Movie_W";
import Soprts_D from "../../Routes/Board/Board_D/Soprts_D";
import Soprts_W from "../../Routes/Board/Board_W/Soprts_W";
import Join_D from "../../Routes/Board/Board_D/Join_D";
import Join_W from "../../Routes/Board/Board_W/Join_W";
import Photo_D from "../../Routes/Board/Board_D/Photo_D";
import Photo_W from "../../Routes/Board/Board_W/Photo_W";
import Hobby_D from "../../Routes/Board/Board_D/Hobby_D";
import Hobby_W from "../../Routes/Board/Board_W/Hobby_W";
import Notice_D from "../../Routes/Board/Board_D/Notice_D";

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
   <Route exact path="/PhotoBoard" component={MM08}></Route>
   <Route exact path="/JoinBoard" component={MM09}></Route>
   <Route exact path="/NoticeBoard" component={MM10}></Route>
   <Route exact path="/HobbyBoard" component={MM11}></Route>
   <Route exact path="/MyPage" component={MM13}></Route>
   <Route exact path="/Gallery_D/:key" component={Gallery_D}></Route>
   <Route exact path="/Game_D/:key" component={Game_D}></Route>
   <Route exact path="/Gallery_W" component={Gallery_W}></Route>
   <Route exact path="/Game_W" component={Game_W}></Route>
   <Route exact path="/Movie_D/:key" component={Movie_D}></Route>
   <Route exact path="/Movie_W" component={Movie_W}></Route>
   <Route exact path="/Soprts_D/:key" component={Soprts_D}></Route>
   <Route exact path="/Soprts_W" component={Soprts_W}></Route>
   <Route exact path="/Join_D/:key" component={Join_D}></Route>
   <Route exact path="/Join_W" component={Join_W}></Route>
   <Route exact path="/Photo_D/:key" component={Photo_D}></Route>
   <Route exact path="/Photo_W" component={Photo_W}></Route>
   <Route exact path="/Hobby_D/:key" component={Hobby_D}></Route>
   <Route exact path="/Hobby_W" component={Hobby_W}></Route>
   <Route exact path="/Notice_D/:key" component={Notice_D}></Route>
   {/* <Route exact path="/Board_U/:key" component={Board_U}></Route> */}
  </WholeWrapper>
 );
};

export default Content;
