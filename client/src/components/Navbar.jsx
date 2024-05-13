import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkmodeContext } from "../contexts/darkmode.jsx";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Ayomide from "../img/Ayomide 2.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rejected, Start } from "../redux/userSlice.js";
import { logoutUser } from "../utils/apiCalls/Auth.js";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 2px solid ${({ theme }) => theme.bgSoft};
`;

const Left = styled.div`
  display: flex;
  flex: 0.2;
  align-items: center;
  gap: 10px;
`;

const H1 = styled.h1`
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "MORF" 15, "SHLN" 50;
  font-size: 50px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  padding: 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.input};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.text};
`;

const SearchInput = styled.input`
  outline: 0;
  background-color: transparent;
  border: none;
  color: black;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  flex: 0.6;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    scale: 1.1;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 0.2;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const NavRightItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
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

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Logout = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 14px;
`;

const Navbar = () => {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);
  const dispatch = useDispatch();

  const [active, setActive] = useState("home");
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();

  const handleActiveClick = (prop) => {
    setActive(prop);
  };

  const handleToggle = () => {
    setDarkmode(!darkmode);
  };

  const handleLogout = async () => {
    try {
      dispatch(Start());
      await logoutUser(dispatch, navigate);
    } catch (err) {
      dispatch(Rejected());
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
    }
  };
  return (
    <Container>
      <Left>
        <Link to="/" style={{ color: "none", textDecoration: "none" }}>
          <H1>CTV</H1>
        </Link>
        <SearchContainer>
          <SearchOutlinedIcon style={{ fontSize: "18px" }} />
          <SearchInput type="text" placeholder="Ask me anything" />
        </SearchContainer>
      </Left>
      <Middle>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <NavItem
            onClick={() => handleActiveClick("home")}
            style={{ color: active === "home" ? "#0000ff" : "inherit" }}
          >
            <NotificationIcon>
              <HomeOutlinedIcon style={{ fontSize: "25px" }} />
              <NotificationCount>8</NotificationCount>
            </NotificationIcon>
          </NavItem>
        </Link>
        <Link to="/findFriends?tab=suggested" style={{ color: "inherit" }}>
          <NavItem
            onClick={() => handleActiveClick("friends")}
            style={{ color: active === "friends" ? "#0000ff" : "inherit" }}
          >
            <PeopleAltOutlinedIcon style={{ fontSize: "25px" }} />
          </NavItem>
        </Link>

        {darkmode ? (
          <NavItem onClick={handleToggle}>
            <LightModeOutlinedIcon style={{ fontSize: "25px" }} />
          </NavItem>
        ) : (
          <NavItem onClick={handleToggle}>
            <DarkModeOutlinedIcon style={{ fontSize: "25px" }} />
          </NavItem>
        )}
        <NavItem
          onClick={() => handleActiveClick("saved posts")}
          style={{ color: active === "saved posts" ? "#0000ff" : "inherit" }}
        >
          <BookmarkBorderOutlinedIcon style={{ fontSize: "25px" }} />
        </NavItem>
      </Middle>
      <Right>
        <NavRightItem
          onClick={() => handleActiveClick("messages")}
          style={{ color: active === "messages" ? "#0000ff" : "inherit" }}
        >
          <NotificationIcon>
            <SendOutlinedIcon style={{ fontSize: "25px" }} />
            <NotificationCount>8</NotificationCount>
          </NotificationIcon>
        </NavRightItem>

        <NavRightItem
          onClick={() => handleActiveClick("notifications")}
          style={{ color: active === "notifications" ? "#0000ff" : "inherit" }}
        >
          <NotificationIcon>
            <NotificationsNoneOutlinedIcon style={{ fontSize: "25px" }} />
            <NotificationCount>8</NotificationCount>
          </NotificationIcon>
        </NavRightItem>

        <Link to={`/profile/${userInfo._id}`}>
          <ProfileImage src={Ayomide} alt="profileImage" />
        </Link>
        <Logout onClick={handleLogout}>Logout</Logout>
      </Right>
    </Container>
  );
};

export default Navbar;
