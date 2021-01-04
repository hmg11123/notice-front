import React from "react";
import {
 Wrapper,
 TitleBox,
 CheckBtn,
 TextInput,
} from "../../../Components/commonComponents";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const MM02Presenter = ({
 inputEmail,
 loginClickHandler,
 code,
 _isDialogOpenToggle,
 isDialogOpen,
 checkCode,
}) => {
 return (
  <Wrapper margin={`50px 0px`}>
   <Wrapper>
    <TitleBox fs={`25px`} fw={`600`} margin={`0px 0px 50px 0px`}>
     로그인
    </TitleBox>
   </Wrapper>
   <Wrapper margin={`50px 0px`}>
    <TextInput
     type={`text`}
     width={`500px`}
     height={`40px`}
     placeholder={`email...`}
     margin={`0px 0px 30px 0px`}
     {...inputEmail}
    ></TextInput>
   </Wrapper>
   <Wrapper margin={`0px 0px 40px 0px`}>
    <CheckBtn width={`130px`} height={`40px`} onClick={loginClickHandler}>
     로그인
    </CheckBtn>
   </Wrapper>
   {/* Dialog Area */}
   <Dialog
    onClose={_isDialogOpenToggle}
    aria-labelledby="customized-dialog-title"
    open={isDialogOpen}
   >
    <DialogTitle
     id="customized-dialog-title"
     onClose={_isDialogOpenToggle}
     // class="dialog_title"
    >
     인증코드 확인
    </DialogTitle>
    <DialogContent>
     <Wrapper>인증코드를 보냈으니 메일을 확인해주십시요.</Wrapper>
     <TextInput
      type={`text`}
      width={`300px`}
      height={`40px`}
      placeholder={`code...`}
      margin={`0px 0px 30px 0px`}
      {...code}
     ></TextInput>
    </DialogContent>
    <DialogActions>
     <Button color="primary" onClick={checkCode}>
      확인
     </Button>
     <Button color="secondary" onClick={_isDialogOpenToggle}>
      취소
     </Button>
    </DialogActions>
   </Dialog>

   {/* Dialog Area */}
  </Wrapper>
 );
};

export default MM02Presenter;
