import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Wrapper } from "../../Components/commonComponents";

const HeaderWrapper = styled.header`
 width: 100%;
 height: 100%;
 background-color: ${(props) => props.theme.mainThemeColor};
 color: ${(props) => props.theme.whiteColor};
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const InputWrapper = styled.input`
 border-radius: ${(props) => props.br};
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 background-color: ${(props) => props.theme.whiteColor};
 color: ${(props) => props.theme.blackColor};
 outline: none;
 border: none;
 border-left: ${(props) => props.bl};
 display: flex;
 justify-content: ${(props) => props.ju};
 align-items: ${(props) => props.al};
 font-size: 20px;
 cursor: pointer;
 padding: ${(props) => props.padding};
`;

const InputWrapper02 = styled.button`
 border-radius: ${(props) => props.br};
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 background-color: ${(props) => props.theme.whiteColor};
 color: ${(props) => props.theme.mainThemeColor};
 outline: none;
 border: none;
 border-left: ${(props) => props.bl};
 display: flex;
 justify-content: ${(props) => props.ju};
 align-items: ${(props) => props.al};
 font-size: 20px;
 cursor: pointer;
 padding: ${(props) => props.padding};
`;

const ActionP = styled.p`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 padding: ${(props) => props.padding};
 border-radius: ${(props) => props.theme.radius};
 margin: ${(props) => props.margin};
 transition: 0.5s;
 cursor: pointer;
 font-size: 18px;

 &:hover {
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.mainThemeColor};
 }
`;

const Header = ({ history }) => {
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };
 return (
  <HeaderWrapper>
   {/**topHeader */}
   <Wrapper fs={`20px`} height={`75px`} dr={`row`}>
    <Wrapper width={`30%`} ju={`flex-end`} dr={`row`}>
     LOGO
    </Wrapper>
    <Wrapper width={`40%`} dr={`row`}>
     {/* <SearchBox> */}
     <InputWrapper
      width={`250px`}
      br={`10px 0px 0px 10px`}
      type="text"
      placeholder={`searchBox`}
      height={`35px`}
      padding={`20px`}
     />
     <InputWrapper02
      width={`50px`}
      height={`40px`}
      ju={`center`}
      al={`center`}
      bl={`2px solid #4b7bec`}
      br={`0px 10px 10px 0px`}
     >
      <SearchIcon />
     </InputWrapper02>
     {/* </SearchBox> */}
    </Wrapper>
    <Wrapper width={`30%`} ju={`flex-start`} dr={`row`}>
     <ActionP padding={`10px`}>로그인</ActionP>
     <ActionP
      padding={`10px`}
      margin={`0px 0px 0px 10px`}
      onClick={() => moveLinkHandler(`SignUP`)}
     >
      회원가입
     </ActionP>
    </Wrapper>
   </Wrapper>
   {/**bottomHeader */}
   <Wrapper width={`100%`} height={`75px`} dr={`row`}>
    <Wrapper width={`60%`} ju={`space-between`} dr={`row`}>
     <ActionP padding={`10px`} margin={`10px`}>
      인기겔러리
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      겔러리
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      게임
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      영화
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      스포츠
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      취미
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      뉴스
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      가입인사
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      공지사항
     </ActionP>
     <ActionP padding={`10px`} margin={`10px`}>
      QnA
     </ActionP>
    </Wrapper>
   </Wrapper>
  </HeaderWrapper>
 );
};

export default Header;
