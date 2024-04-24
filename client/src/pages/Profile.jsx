import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Ayomide from "../img/Ayomide 2.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useState } from "react";

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

const InfoDesc = styled.p`
  margin-left: -10px;
  font-size: 16px;
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

const Bottom = styled.div``;

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
                <InfoDesc>I Love to code💻</InfoDesc>
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
        <BottomLeft></BottomLeft>
        <BottomRight></BottomRight>
      </Bottom>
    </Container>
  );
};

export default Profile;
