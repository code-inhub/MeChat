import { Box, Dialog, styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./emptyChat/EmptyChat";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 450px;
   `;
  const RightComponent = styled(Box)`
  width: 73%;
  min-width:300px;
  height:100%;
  border-left:1px solid rgba(0,0,0,0.14);
`;

const dialogstyle = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "none",
};

const ChatDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true} maxWidth={'md'}>
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          <EmptyChat />
        </RightComponent>
      </Component>
    </Dialog>
  );
};
export default ChatDialog;
