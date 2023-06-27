import { Box } from "@mui/material";
// import Footer from "./Footer";
import Messages from "./Messages";
import ChatHeader from "./ChatHeader";
import { useContext, useState, useEffect } from "react";
// import { User } from "../../../context/AccountProvider";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../services/api";
// import { UserContext } from "../../../context/UserProvider";

const ChatBox = () => {
  // const { person } = useContext(UserContext);
  const {account,person } = useContext(AccountContext)
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};
export default ChatBox;
