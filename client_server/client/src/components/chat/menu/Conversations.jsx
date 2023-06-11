import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../services/api";
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import Conversation from "./Conversation";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;
const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({text}) => {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getUsers();
      let filteredData = data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);
  
  return (
    <Component>
      { 
      users.map(user =>(
          user.sub !== account.sub && 
            <>
              <Conversation user={user} />
              <StyledDivider />
            </>
        ))
      }
      ;
    </Component>
  );
};
export default Conversations;
