import { Dialog, Box, Typography, styled, List, ListItem } from "@mui/material";

import { qrCodeImage } from "../../constants/data";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import  {useContext} from 'react';
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../services/api";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const dialogstyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext);

  const onLoginSucess = async (res) => {
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log("login failed", res);
  };

  return (
    <Dialog open={true}
     PaperProps={{ sx: dialogstyle }}
     hideBackdrop={true}
     >
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt="QR code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(32%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSucess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
