import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Ayomide from "../img/Ayomide 2.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Top = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const WrapperTop = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperTopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  flex: 1;
`;

const ProfilePicContainer = styled.div`
  position: relative;
`;

const CameraIconContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 6px;
  border-radius: 50%;
  background-color: lightgray;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 5px;
  bottom: 10px;
  cursor: pointer;
`;

const ProfilePic = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.text};
`;

const WrapperTopLeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const H1 = styled.h1`
  margin-left: -10px;
`;

const FriendsCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: -10px;
  font-weight: bold;
  cursor: pointer;
`;

const FriendsProfilePicContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FriendsProfilePic = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.text};
  margin-left: -10px;
  cursor: pointer;
`;

const WrapperTopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 83px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.bbg};
  border: none;
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  gap: 10px;
  cursor: pointer;
`;

const DropArrowIconContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  padding: 7px 13px;
  background-color: lightgray;
  border-radius: 5px;
  cursor: pointer;
`;

const Divider = styled.hr`
  margin-top: 15px;
  margin-bottom: 5px;
`;

const WrapperBottom = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 20px;
`;

const Posts = styled.span`
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
`;

const Friends = styled.span`
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
`;

const Bottom = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const BottomLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const BottomLeftTop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  padding-top: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const BottomLeftTopItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  width: 80%;
`;

const BottomLeftTopItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  jusify-content: center;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0px 1px 6px 3px ${({ theme }) => theme.bg};
  -webkit-box-shadow: 0px 1px 6px 3px ${({ theme }) => theme.bg};
  -moz-box-shadow: 0px 1px 6px 3px ${({ theme }) => theme.bg};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.bgSoft};
  width: 70px;
  cursor: pointer;
  height: 70px;
`;

const FollowXCount = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.spT};
`;

const FollowX = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.textSoft};
`;

const Button2 = styled.button`
  background: ${({ theme }) => theme.spT};
  border: none;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  gap: 10px;
  cursor: pointer;
  justify-content: center;
  margin-top: 20px;
  width: 80%;
`;

const BottomLeftBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  padding-top: 25px;
  border-radius: 12px;
  padding-left: 25px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const InfoItemHead = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const InfoItemDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const BottomRight = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Profile = () => {
  const [tab, setTab] = useState("posts");

  const handleTabClick = (prop) => {
    setTab(prop);
  };

  return (
    <Container>
      <Top>
        <Wrapper>
          <WrapperTop>
            <WrapperTopLeft>
              <ProfilePicContainer>
                <ProfilePic src={Ayomide} alt="" />
                <CameraIconContainer>
                  <CameraAltOutlinedIcon />
                </CameraIconContainer>
              </ProfilePicContainer>
              <WrapperTopLeftInfo>
                <H1>Ayomide Oluwadiya</H1>
                <FriendsCount>1.4k Friends</FriendsCount>
                <FriendsProfilePicContainer>
                  <FriendsProfilePic src={Ayomide} alt="friends profile pic" />
                  <FriendsProfilePic src={Ayomide} alt="friends profile pic" />
                  <FriendsProfilePic src={Ayomide} alt="friends profile pic" />
                  <FriendsProfilePic src={Ayomide} alt="friends profile pic" />
                  <FriendsProfilePic src={Ayomide} alt="friends profile pic" />
                </FriendsProfilePicContainer>
              </WrapperTopLeftInfo>
            </WrapperTopLeft>
            <WrapperTopRight>
              <Button>
                <AddOutlinedIcon />
                Add to story
              </Button>
              <DropArrowIconContainer>
                <ExpandMoreIcon />
              </DropArrowIconContainer>
            </WrapperTopRight>
          </WrapperTop>
          <Divider />
          <WrapperBottom>
            <Posts
              onClick={() => handleTabClick("posts")}
              style={{
                borderBottom: tab === "posts" ? "2px solid #0000ff" : "none",
              }}
            >
              Posts
            </Posts>
            <Friends
              onClick={() => handleTabClick("friends")}
              style={{
                borderBottom: tab === "friends" ? "2px solid #0000ff" : "none",
              }}
            >
              Friends
            </Friends>
          </WrapperBottom>
        </Wrapper>
      </Top>
      <Bottom>
        <BottomLeft>
          <BottomLeftTop>
            <BottomLeftTopItems>
              <BottomLeftTopItem>
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: "30px", color: "#0000ff" }}
                />
                <FollowXCount>200k</FollowXCount>
                <FollowX>Followers</FollowX>
              </BottomLeftTopItem>
              <BottomLeftTopItem>
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: "30px", color: "#0000ff" }}
                />
                <FollowXCount>2.1k</FollowXCount>
                <FollowX>Following</FollowX>
              </BottomLeftTopItem>
            </BottomLeftTopItems>
            <BottomLeftTopItems>
              <BottomLeftTopItem>
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: "30px", color: "#0000ff" }}
                />
                <FollowXCount>358</FollowXCount>
                <FollowX>Posts</FollowX>
              </BottomLeftTopItem>
              <BottomLeftTopItem>
                <PersonOutlineOutlinedIcon
                  style={{
                    fontSize: "30px",
                    color: "#0000ff",
                    marginTop: "9px",
                  }}
                />

                <FollowX>Edit Profile</FollowX>
              </BottomLeftTopItem>
            </BottomLeftTopItems>
            <Button2>
              <GroupAddOutlinedIcon />
              Follow Now
            </Button2>
            <Button2>
              <SendOutlinedIcon />
              Message
            </Button2>
          </BottomLeftTop>{" "}
          <BottomLeftBottom>
            <InfoItem>
              <InfoItemHead>About</InfoItemHead>
              <InfoItemDesc>I love to code 💻</InfoItemDesc>
            </InfoItem>
            <InfoItem>
              <InfoItemHead>Mobile</InfoItemHead>
              <InfoItemDesc>+2348165553289</InfoItemDesc>
            </InfoItem>
            <InfoItem>
              <InfoItemHead>Email Address</InfoItemHead>
              <InfoItemDesc>victordiya90@gmail.com</InfoItemDesc>
            </InfoItem>
            <InfoItem>
              <InfoItemHead>Location</InfoItemHead>
              <InfoItemDesc>Lagos, Nigeria</InfoItemDesc>
            </InfoItem>
          </BottomLeftBottom>
        </BottomLeft>
        <BottomRight>
          <CreatePost />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </BottomRight>
      </Bottom>
    </Container>
  );
};

export default Profile;
