import styled from "styled-components";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Left = styled.div`
  width: 25%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  border-right: 2px solid ${({ theme }) => theme.bgSoft};
`;

const LeftTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftTopSpan = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

const Icon = styled.div`
  border-radius: 50%;
  padding: 3px;
  background-color: ${({ theme }) => theme.bgSoft};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LeftTabs = styled.div`
  display: flex;
  gap: 20px;
`;

const Tab = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding: 7px;
  cursor: pointer;
  border-radius: 7px;

  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
  }
`;

const Conversations = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  width: 75%;
`;

const Messages = () => {
  const [tab, setTab] = useState("inbox");
  return (
    <Container>
      <Left>
        <LeftTop>
          <LeftTopSpan>Chats</LeftTopSpan>
          <Icon>
            <DrawOutlinedIcon style={{ fontSize: "27px" }} />
          </Icon>
        </LeftTop>
        <LeftTabs>
          <Tab
            onClick={() => setTab("inbox")}
            style={{
              backgroundColor: tab === "inbox" && "blue",
              color: tab === "inbox" && "white",
            }}
          >
            Inbox
          </Tab>
          <Tab
            onClick={() => setTab("groups")}
            style={{
              backgroundColor: tab === "groups" && "blue",
              color: tab === "groups" && "white",
            }}
          >
            Groups
          </Tab>
        </LeftTabs>
        <Conversations></Conversations>
      </Left>
      <Right>right</Right>
    </Container>
  );
};

export default Messages;
