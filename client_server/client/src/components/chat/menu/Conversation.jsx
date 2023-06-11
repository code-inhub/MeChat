import { Box, Typography,styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext} from "react";
import { setConversation } from "../../../services/api";

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

const Conversation = ({ user }) => {
  const {setPerson , account} = useContext(AccountContext);    

  const getUser = async() => {  
        setPerson(user);
        await setConversation({senderId:account.sub, receiverId:user.sub})
  }

  return (
    <Component onClick={()=>getUser()} >
      <Box>
        <Image src={user.picture} alt="user" />
      </Box>
      <Box>
        <Typography>{user.name}</Typography>
      </Box>
    </Component>
  );
};
export default Conversation;
