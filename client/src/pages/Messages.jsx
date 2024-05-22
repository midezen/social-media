import styled from "styled-components";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import { useState } from "react";
import Ayomide from "../img/Ayomide 2.png";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import fire from "../img/fire.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: Calc(100vh - 63px);
`;

const Left = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  border-right: 2px solid ${({ theme }) => theme.bgSoft};
`;

const LeftTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
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
  height: 70%;
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
const Logo = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${({ theme }) => theme.bgSoft};
`;

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const H1 = styled.span`
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "MORF" 15, "SHLN" 50;
  font-size: 30px;
`;

const Right = styled.div`
  width: 70%;
  height: 100%;
`;

const RightTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 3px;
  border-bottom: 2px solid ${({ theme }) => theme.bgSoft};
`;

const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
    border-radius: 5px;
  }
`;

const RightTopProfilePic = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 10px;
  height: 67.6%;
  overflow-y: scroll;
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

const MessagesUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const MessageIcon = styled.div`
  padding: 3px;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgSoft};
  border-radius: 50%;
  cursor: pointer;
  visibility: hidden;
`;

const UserMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  &:hover ${MessageIcon} {
    visibility: visible;
  }
`;

const OtherUserMessageProfilePic = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const MessageDesc = styled.p`
  max-width: 70%;
  background-color: ${(props) =>
    props.mine ? props.theme.spT : props.theme.bgSoft};
  color: ${(props) => (props.mine ? "white" : props.theme.text)};
  padding: 10px;
  border-radius: 20px;
  font-size: 14px;
`;

const OtherUserMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 75%;
  &:hover ${MessageIcon} {
    visibility: visible;
  }
`;
const Searchcontainer = styled.div`
  border-top: 2px solid ${({ theme }) => theme.bgSoft};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgSoft};
  flex: 1;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  outline: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  padding: 13px;
  width: 100%;
  margin-left: 10px;
`;

const Messages = () => {
  const [tab, setTab] = useState("inbox");

  let texttest =
    "This is the last message for this conversation, and that is on period.";

  const handleLastMessageSlice = () => {
    if (texttest.length > 36) {
      texttest = texttest.slice(0, 36);
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
        </Conversations>
        <Logo>
          <LogoImage src={fire} alt="fire" />
          <H1>ConnectiVerse</H1>
          <LogoImage src={fire} alt="fire" />
        </Logo>
      </Left>
      <Right>
        <RightTop>
          <UserInfo>
            <RightTopProfilePic src={Ayomide} alt="" />
            <Name>Ayomide Oluwadiya</Name>
          </UserInfo>
          <Icon>
            <MoreHorizOutlinedIcon
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </Icon>
        </RightTop>
        <MessagesContainer>
          <MessagesUserInfo>
            <ProfilePic src={Ayomide} alt="profile pic" />
            <Name>Ayomide Oluwadiya</Name>
          </MessagesUserInfo>
          <UserMessage>
            <MessageIcon>
              <MoreVertIcon />
            </MessageIcon>
            <MessageDesc mine>
              This is my message, it is a very good insightful message! I'm
              serious.
            </MessageDesc>
          </UserMessage>
          <OtherUserMessage>
            <OtherUserMessageProfilePic src={Ayomide} alt="profile pic" />
            <MessageDesc>
              This is the other user message, it is a very good insightful and
              wonderful message! I'm serious.
            </MessageDesc>
            <MessageIcon>
              <MoreVertIcon />
            </MessageIcon>
          </OtherUserMessage>
        </MessagesContainer>
        <Searchcontainer>
          <Search>
            <SearchInput type="text" placeholder="Type message" />
          </Search>
          <SendIcon style={{ color: "blue" }} />
        </Searchcontainer>
      </Right>
    </Container>
  );
};

export default Messages;
