import styled from "styled-components";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import { useState } from "react";
import Ayomide from "../img/Ayomide 2.png";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Left = styled.div`
  width: 27%;
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
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
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
  padding-left: 20px;
  padding-right: 20px;
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
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 20px;
  }
`;

const Conversation = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  cursor: pointer;
  padding: 10px 5px;
  width: 93%;
  margin-left: 10px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
  }
`;

const ProfilePic = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const ConversationCenter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const LastMessage = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
`;

const ConversationRight = styled.div`
  width: 10px;
  height: 10px;
  background-color: blue;
  border-radius: 50%;
`;

const Right = styled.div`
  width: 73%;
`;

const Messages = () => {
  const [tab, setTab] = useState("inbox");

  let texttest =
    "This is the last message for this conversation, and that is on period.";

  const handleLastMessageSlice = () => {
    if (texttest.length > 29) {
      texttest = texttest.slice(0, 29);
    }
    return texttest;
  };
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
        <Conversations>
          <Conversation>
            <ProfilePic src={Ayomide} alt="profile pic" />
            <ConversationCenter>
              <Name>Ayomide Oluwadiya</Name>
              <LastMessage>{handleLastMessageSlice()}... 6d</LastMessage>
            </ConversationCenter>

            <ConversationRight></ConversationRight>
            <Icon>
              <MoreHorizOutlinedIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Icon>
          </Conversation>
          <Conversation>
            <ProfilePic src={Ayomide} alt="profile pic" />
            <ConversationCenter>
              <Name>Ayomide Oluwadiya</Name>
              <LastMessage>{handleLastMessageSlice()}... 6d</LastMessage>
            </ConversationCenter>

            <ConversationRight></ConversationRight>
            <Icon>
              <MoreHorizOutlinedIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Icon>
          </Conversation>
          <Conversation>
            <ProfilePic src={Ayomide} alt="profile pic" />
            <ConversationCenter>
              <Name>Ayomide Oluwadiya</Name>
              <LastMessage>{handleLastMessageSlice()}... 6d</LastMessage>
            </ConversationCenter>

            <ConversationRight></ConversationRight>
            <Icon>
              <MoreHorizOutlinedIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Icon>
          </Conversation>
          <Conversation>
            <ProfilePic src={Ayomide} alt="profile pic" />
            <ConversationCenter>
              <Name>Ayomide Oluwadiya</Name>
              <LastMessage>{handleLastMessageSlice()}... 6d</LastMessage>
            </ConversationCenter>

            <ConversationRight></ConversationRight>
            <Icon>
              <MoreHorizOutlinedIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Icon>
          </Conversation>
          <Conversation>
            <ProfilePic src={Ayomide} alt="profile pic" />
            <ConversationCenter>
              <Name>Ayomide Oluwadiya</Name>
              <LastMessage>{handleLastMessageSlice()}... 6d</LastMessage>
            </ConversationCenter>

            <ConversationRight></ConversationRight>
            <Icon>
              <MoreHorizOutlinedIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Icon>
          </Conversation>
          <Conversation>
            <ProfilePic src={Ayomide} alt="profile pic" />
            <ConversationCenter>
              <Name>Ayomide Oluwadiya</Name>
              <LastMessage>{handleLastMessageSlice()}... 6d</LastMessage>
            </ConversationCenter>

            <ConversationRight></ConversationRight>
            <Icon>
              <MoreHorizOutlinedIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Icon>
          </Conversation>
          <Conversation>
            <ProfilePic src={Ayomide} alt="profile pic" />
            <ConversationCenter>
              <Name>Ayomide Oluwadiya</Name>
              <LastMessage>{handleLastMessageSlice()}... 6d</LastMessage>
            </ConversationCenter>

            <ConversationRight></ConversationRight>
            <Icon>
              <MoreHorizOutlinedIcon
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Icon>
          </Conversation>
        </Conversations>
      </Left>
      <Right>right</Right>
    </Container>
  );
};

export default Messages;
