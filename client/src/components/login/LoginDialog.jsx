import React from "react";
import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 80% no-repeat;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: tomato;
  color: white;
  height: 48px;
  border-radius: 50px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: white;
  color: tomato;
  height: 48px;
  border-radius: 50px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: tomato;
  font-weight: 600;
  cursor: pointer;
`;

// const accountInitialValues={
//     logi
// }
function LoginDialog({ open, setOpen }) {

    const [account, toggleAccount] = useState()

  const handleclose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleclose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">Login</Typography>
            <Typography style={{ marginTop: 20 }}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
          { false ?
          <Wrapper>
            <TextField variant="standard" label="Enter Email/Mobile number" />
            <TextField variant="standard" label="Enter Password" />
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOTP>Request OPT</RequestOTP>
            <CreateAccount>New to Flipkart? Create an account</CreateAccount>
          </Wrapper>
          :
          <Wrapper>
            <TextField variant="standard" label="Enter Firstname" />
            <TextField variant="standard" label="Enter Lastname" />
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Email" />
            <TextField variant="standard" label="Enter Password" />
            <TextField variant="standard" label="Enter Phone" />
            <LoginButton>Continue</LoginButton>
          </Wrapper>
        }
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
