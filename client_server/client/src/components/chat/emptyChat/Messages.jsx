import { useState, useEffect, useContext, useRef } from "react";
import { Box, styled } from "@mui/material";

// import { io } from "socket.io-client";

// import { getMessages, newMessages } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";

//components
// import Message from "./Message";
import Footer from "./Footer";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const StyledFooter = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
`;

const Component = styled(Box)`
  height: 79vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = () => {
  return (
    <Wrapper>
      <Component></Component>
    </Wrapper>
  );
};
export default Messages;
