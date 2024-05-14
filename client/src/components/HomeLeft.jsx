import styled from "styled-components";
import Profile from "../components/Profile";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useContext } from "react";
import { DarkmodeContext } from "../contexts/darkmode.jsx";
import Ayomide from "../img/Ayomide 2.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { ActiveContext } from "../contexts/active.jsx";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 30%;
  position: sticky;
  top: 90px;
  overflow-y: auto;
  height: Calc(100vh - 120px);
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

const LeftMiddleItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;
  width: 80%;

  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
`;

const NotificationIcon = styled.div`
  position: relative;
`;

const NotificationCount = styled.span`
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 11px;
  background-color: red;
  color: white;
  position: absolute;
  padding: 3.5px 3px;
  top: -3px;
  right: -3px;
  font-weight: bolder;
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
  const { setNavActive } = useContext(ActiveContext);

  const handleToggle = () => {
    setDarkmode(!darkmode);
  };

  return (
    <Container>
      {/* Left top */}
      <Profile />
      <Divider />

      {/* Left-Middle items */}

      <LeftMiddleItem onClick={() => setNavActive("messages")}>
        <NotificationIcon>
          <SendOutlinedIcon />
          <NotificationCount>3</NotificationCount>
        </NotificationIcon>
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
      <Link
        to="/findFriends?tab=suggested"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <LeftMiddleItem onClick={() => setNavActive("friends")}>
          <PeopleAltOutlinedIcon />
          Find Friends
        </LeftMiddleItem>
      </Link>
      <LeftMiddleItem onClick={() => setNavActive("saved posts")}>
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
