import { useState, useEffect, useContext, useRef } from "react";
import { Box, styled } from "@mui/material";

// import { io } from "socket.io-client";

import { getMessages, newMessage } from "../../../services/api";
import { AccountContext } from "../../../context/AccountProvider";

//components
import Message from "./Message";
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

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
   const [newMessageFlag,setNewMessageFlag] = useState(false); 
  const { account } = useContext(AccountContext);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      console.log(data);
      setMessages(data);
    };

    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  const SendText = async (e) => {
    console.log(e);
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      await newMessage(message);
      setValue("");
      setNewMessageFlag(prev=>!prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <Footer sendText={SendText} setValue={setValue} value={value} />
    </Wrapper>
  );
};
export default Messages;
