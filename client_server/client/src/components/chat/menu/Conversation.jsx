import { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
// import {UserContext} from "../../../context/UserProvider"
import { setConversation, getConversation } from "../../../services/api";
import { formatDate } from "../../../utils/common-utils";
import { emptyProfilePicture } from "../../../constants/data";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  curson: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Container = styled(Box)`
  display: flex;
`;
const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  padding-right: 10px;
`;

const Text = styled(Typography)`
  display: block;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

const Conversation = ({ user }) => {
  const url = user.picture || emptyProfilePicture;
  //  const {setPerson} = useContext(UserContext)
  const { account, newMessageFlag, setPerson } = useContext(AccountContext);

  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });

      setMessage({ text: data?.message, timeStamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={url} alt="dp" />
      </Box>
      <Box style={{ width: "100%" }}>
        <Container>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <Timestamp>{formatDate(message?.timeStamp)}</Timestamp>
          )}
        </Container>
        <Box>
          <Text>
            {message?.text?.includes("localhost") ? "media" : message.text}
          </Text>
        </Box>
      </Box>
    </Component>
  );
};
export default Conversation;
