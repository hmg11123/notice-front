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
 font-size: ${(props) => props.fs || `25px`};
 font-weight: ${(props) => props.fw || `600`};
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
 margin: ${(props) => props.margin};
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 background-color: ${(props) => props.theme.checkColor};
 color: ${(props) => props.theme.whiteColor};
 font-size: ${(props) => props.fs || `16px`};
 border-radius: ${(props) => props.theme.radius};
 cursor: pointer;
 transition: 0.5s;

 &:hover {
  border: 1px solid ${(props) => props.theme.checkColor};
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.checkColor};
 }
`;

export const CancelBtn = styled.button`
 outline: none;
 border: none;
 background: none;
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 background-color: ${(props) => props.theme.greyColor};
 color: ${(props) => props.theme.whiteColor};
 font-size: ${(props) => props.fs || `16px`};
 border-radius: ${(props) => props.theme.radius};
 cursor: pointer;
 transition: 0.5s;

 &:hover {
  border: 1px solid ${(props) => props.theme.greyColor};
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.greyColor};
 }
`;

export const TopBoard = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 display: flex;
 border-top: 3px solid ${(props) => props.theme.pointColor};
 border-bottom: 1px solid ${(props) => props.theme.pointColor};
`;
export const BottomBoard = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 display: flex;
 border-bottom: 1px solid ${(props) => props.theme.grey3Color};
 transition: 0.5s;
 &:hover {
  background-color: ${(props) => props.theme.grey4Color};
 }
`;

export const WriteBtn = styled.div`
 width: ${(props) => props.width || `200px`};
 height: ${(props) => props.height || `60px`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 background-color: ${(props) => props.theme.pointColor};
 color: ${(props) => props.theme.whiteColor};
 display: flex;
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 cursor: pointer;
 transition: 0.5s;
 &:hover {
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.pointColor};
  border: 1px solid ${(props) => props.theme.pointColor};
 }
`;

export const DeleteBtn = styled.div`
 width: ${(props) => props.width || `200px`};
 height: ${(props) => props.height || `60px`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 background-color: ${(props) => props.theme.errorColor};
 color: ${(props) => props.theme.whiteColor};
 display: flex;
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 cursor: pointer;
 transition: 0.5s;
 &:hover {
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.errorColor};
  border: 1px solid ${(props) => props.theme.errorColor};
 }
`;

export const ContentBox = styled.div`
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
 border: 1.5px solid ${(props) => props.theme.pointColor};
`;

export const ImgBox = styled.img`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 border-radius: ${(props) => props.theme.radius};
 background-size: cover;
 background-clip: none;
`;

export const TextArea = styled.textarea`
 width: ${(props) => props.width};
 height: ${(props) => props.height || `100px`};
 border: 1px solid ${(props) => props.theme.pointColor};
 padding: ${(props) => props.padding || `10px`};
 border-radius: ${(props) => props.theme.radius};
 transition: ${(props) => props.transition || props.theme.transition};
 margin: ${(props) => props.margin};
 resize: none;

 &:focus {
  box-shadow: ${(props) => props.theme.boxShadow};
  border: 1px solid ${(props) => props.theme.pointColor};
 }
`;

export const OriginFileBtn = styled.input`
 display: none;
`;

export const FileBtn = styled.label`
 width: 100px;
 height: 40px;
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 background-color: ${(props) => props.theme.pointColor};
 color: ${(props) => props.theme.whiteColor};
 cursor: pointer;
 transition: 0.5s;
 text-align: center;
 &:hover {
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.pointColor};
  border: 1px solid ${(props) => props.theme.pointColor};
 }
`;

export const GoodBtn = styled.div`
 width: ${(props) => props.width || `100px`};
 height: ${(props) => props.height || `100%`};
 margin: ${(props) => props.margin || ``};
 padding: ${(props) => props.padding || `10px`};
 font-size: ${(props) => props.fs || `16px`};
 font-weight: ${(props) => props.fw || ``};
 border: 1px solid ${(props) => props.theme.pointColor};
 border-radius: ${(props) => props.theme.radius};
 color: ${(props) => props.color || ``};
 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 flex-wrap: ${(props) => props.wr || ``};
`;

export const GoodImg = styled.img`
 width: "50px";
 height: "50px";
`;
