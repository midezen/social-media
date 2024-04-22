import styled from "styled-components";
import Profile from "../components/Profile";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useContext, useState } from "react";
import { DarkmodeContext } from "../contexts/darkmode.jsx";
import Ayomide from "../img/Ayomide 2.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Container = styled.div`
  width: 30%;
  position: sticky;
  top: 30px;
  overflow-y: auto;
  height: Calc(100vh - 40px);
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
  }
`;

const LeftMiddleItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  padding: 12px;
  cursor: pointer;
`;

const LeftBottomSpan1 = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const LeftBottomItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const Spans = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 3px;
`;

const Span1 = styled.span`
  font-size: 14px;
`;

const Span2 = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Divider = styled.hr`
  width: 90%;
  margin: 25px 0px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.spT};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
`;

const HomeLeft = () => {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);
  const [active, setActive] = useState("feed");

  const handleActiveClick = (prop) => {
    setActive(prop);
  };

  const handleToggle = () => {
    setDarkmode(!darkmode);
  };

  return (
    <Container>
      {/* Left top */}
      <Profile />
      <Divider />

      {/* Left-Middle items */}
      <LeftMiddleItem
        onClick={() => handleActiveClick("feed")}
        style={{ color: active === "feed" ? "#0000ff" : "inherit" }}
      >
        <HomeOutlinedIcon />
        Feed
      </LeftMiddleItem>
      <LeftMiddleItem
        onClick={() => handleActiveClick("messages")}
        style={{ color: active === "messages" ? "#0000ff" : "inherit" }}
      >
        <SendOutlinedIcon />
        Messages
      </LeftMiddleItem>
      {darkmode ? (
        <LeftMiddleItem onClick={handleToggle}>
          <LightModeOutlinedIcon /> Light mode
        </LeftMiddleItem>
      ) : (
        <LeftMiddleItem onClick={handleToggle}>
          <DarkModeOutlinedIcon /> Dark mode
        </LeftMiddleItem>
      )}
      <LeftMiddleItem
        onClick={() => handleActiveClick("friends")}
        style={{ color: active === "friends" ? "#0000ff" : "inherit" }}
      >
        <PeopleAltOutlinedIcon />
        Friends
      </LeftMiddleItem>
      <LeftMiddleItem
        onClick={() => handleActiveClick("saved posts")}
        style={{ color: active === "saved posts" ? "#0000ff" : "inherit" }}
      >
        <BookmarkBorderOutlinedIcon />
        Saved Posts
      </LeftMiddleItem>
      <Divider />

      {/* Left Bottom */}
      <LeftBottomSpan1>Contacts</LeftBottomSpan1>
      <LeftBottomItem>
        <Info>
          <ProfileImage src={Ayomide} alt="profilepic" />
          <Spans>
            <Span1>Ayomide Oluwadiya</Span1>
            <Span2>Lagos, Nigeria</Span2>
          </Spans>
        </Info>
        <EmailOutlinedIcon style={{ marginRight: "25px", color: "#0000ff" }} />
      </LeftBottomItem>
      <LeftBottomItem>
        <Info>
          <ProfileImage src={Ayomide} alt="profilepic" />
          <Spans>
            <Span1>Ayomide Oluwadiya</Span1>
            <Span2>Lagos, Nigeria</Span2>
          </Spans>
        </Info>
        <EmailOutlinedIcon style={{ marginRight: "25px", color: "#0000ff" }} />
      </LeftBottomItem>
      <LeftBottomItem>
        <Info>
          <ProfileImage src={Ayomide} alt="profilepic" />
          <Spans>
            <Span1>Ayomide Oluwadiya</Span1>
            <Span2>Lagos, Nigeria</Span2>
          </Spans>
        </Info>
        <EmailOutlinedIcon style={{ marginRight: "25px", color: "#0000ff" }} />
      </LeftBottomItem>
      <Button>View All</Button>
    </Container>
  );
};

export default HomeLeft;