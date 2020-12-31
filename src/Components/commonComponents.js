import styled from "styled-components";

export const Wrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};

 background-color: ${(props) => props.bc || ``};
 color: ${(props) => props.color || ``};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 flex-wrap: ${(props) => props.wr || ``};
`;

export const TitleBox = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 padding: ${(props) => props.padding || `10px`};
 margin: ${(props) => props.margin || ``};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 color: ${(props) => props.theme.grey2Color};
`;

export const ActionP = styled.p`
 cursor: pointer;
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 background-color: ${(props) => props.theme.whiteColor};
 color: ${(props) => props.theme.subThemeColor};
 border-radius: ${(props) => props.theme.radius};
 font-size: ${(props) => props.fs || `16px`};
 display: flex;
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 transition: 0.5s;

 &:hover {
  box-shadow: 1px 3px 5px ${(props) => props.theme.blackColor};
 }
`;

export const PagenationWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 min-width: ${(props) => props.minWidth};
 height: ${(props) => props.height};
 color: ${(props) => props.color};
 display: flex;
 flex-direction: ${(props) => props.dr || `row`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background: ${(props) => props.bgColor};
 color: ${(props) => props.color};
 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-radius: ${(props) => props.radius};
 box-shadow: ${(props) => props.shadow};
 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};
 margin: ${(props) => props.margin || `20px 0px 20px`};
 padding: ${(props) => props.padding};
`;

export const Pagenation = styled.div`
 width: 25px;
 height: 25px;
 display: flex;
 flex-direction: ${(props) => props.dr || `row`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 cursor: pointer;
 padding-top: 3px;

 &.active {
  background-color: ${(props) => props.theme.basicTheme_C};
  color: ${(props) => props.theme.white_C};
  border-radius: 25px;
  box-shadow: 0px 10px 15px rgba(220, 220, 220, 1);
 }
`;

export const PagenationBtn = styled.div`
 text-align: center;
 font-size: 18px;
 width: 25px;
 height: 25px;
 color: ${(props) => props.color || `#eee`};
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 border-radius: 25px;
 margin: 0px 3px;

 &:first-child,
 &:last-child {
  background-color: ${(props) => props.theme.grey_C};
  color: ${(props) => props.theme.black_C};
 }

 &:hover {
  box-shadow: 0px 10px 15px rgba(220, 220, 220, 1);
 }
`;

export const TextInput = styled.input`
 outline: none;
 border: none;
 background: none;
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 background-color: ${(props) => props.theme.whiteColor};
 border-radius: ${(props) => props.theme.radius};
 padding: ${(props) => props.padding || `10px`};
 margin: ${(props) => props.margin || `0px 0px 30px 0px`};
 transition: 0.5s;
 border: 1px solid ${(props) => props.theme.pointColor};

 &:hover {
  box-shadow: 3px 6px 9px ${(props) => props.theme.subThemeColor};
  background-color: ${(props) => props.theme.whiteColor};
 }
 &:focus {
  box-shadow: 3px 6px 9px ${(props) => props.theme.subThemeColor};
  background-color: ${(props) => props.theme.whiteColor};
 }
`;

export const CheckBtn = styled.button`
 outline: none;
 border: none;
 background: none;
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 background-color: ${(props) => props.theme.checkColor};
 color: ${(props) => props.theme.whiteColor};
 font-size: ${(props) => props.fs || `16px`};
 border-radius: ${(props) => props.theme.radius};
 cursor: pointer;
 transition: 0.5s;

 &:hover {
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.checkColor};
 }
`;
