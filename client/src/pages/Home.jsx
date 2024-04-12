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
  background-color: ${({ theme }) => theme.bgSoft};
  width: 100vw;
  color: ${({ theme }) => theme.text};
  display: flex;
`;

const Left = styled.div`
  width: 25%;
  padding: 30px;
`;

const LeftMiddleItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  padding: 8px;
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
  padding: 8px;
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
  width: 100%;
  margin: 25px 0px;
`;

const Middle = styled.div`
  width: 50%;
  height: 100%;
`;

const Right = styled.div`
  width: 25%;
  height: 100%;
`;

const Home = () => {
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
      <Left>
        {/* Left top */}
        <Profile />
        <Divider />

        {/* Left-Middle items */}
        <LeftMiddleItem
          onClick={() => handleActiveClick("feed")}
          style={{ color: active === "feed" ? "orangered" : "inherit" }}
        >
          <HomeOutlinedIcon />
          Feed
        </LeftMiddleItem>
        <LeftMiddleItem
          onClick={() => handleActiveClick("messages")}
          style={{ color: active === "messages" ? "orangered" : "inherit" }}
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
          style={{ color: active === "friends" ? "orangered" : "inherit" }}
        >
          <PeopleAltOutlinedIcon />
          Friends
        </LeftMiddleItem>
        <LeftMiddleItem
          onClick={() => handleActiveClick("saved posts")}
          style={{ color: active === "saved posts" ? "orangered" : "inherit" }}
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
          <EmailOutlinedIcon
            style={{ marginRight: "35px", color: "orangered" }}
          />
        </LeftBottomItem>
        <LeftBottomItem>
          <Info>
            <ProfileImage src={Ayomide} alt="profilepic" />
            <Spans>
              <Span1>Ayomide Oluwadiya</Span1>
              <Span2>Lagos, Nigeria</Span2>
            </Spans>
          </Info>
          <EmailOutlinedIcon
            style={{ marginRight: "35px", color: "orangered" }}
          />
        </LeftBottomItem>
        <LeftBottomItem>
          <Info>
            <ProfileImage src={Ayomide} alt="profilepic" />
            <Spans>
              <Span1>Ayomide Oluwadiya</Span1>
              <Span2>Lagos, Nigeria</Span2>
            </Spans>
          </Info>
          <EmailOutlinedIcon
            style={{ marginRight: "35px", color: "orangered" }}
          />
        </LeftBottomItem>
      </Left>
      <Middle></Middle>
      <Right>Right</Right>
    </Container>
  );
};

export default Home;
