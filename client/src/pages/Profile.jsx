import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Ayomide from "../img/Ayomide 2.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useContext, useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Friend from "../components/Friend";
import SuggestedSlider from "../components/SuggestedSlider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FriendsComponent from "../components/FriendsComponent";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DarkmodeContext } from "../contexts/darkmode";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../utils/axiosConfig";
import { Rejected, Start, Success } from "../redux/userSlice";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  width: 100%;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
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
  background: ${({ theme }) => theme.spT};
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

const ProfileBottom = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const ProfileLeft = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileLeftTop = styled.div`
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

const ProfileLeftTopItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  width: 80%;
`;

const ProfileLeftTopItem = styled.div`
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
  width: 60%;
`;

const ProfileLeftTopBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  padding-top: 25px;
  border-radius: 12px;
  padding-left: 25px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-top: -20px;
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

const ProfileLeftMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 18px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg};
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadingLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FriendsHead = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const HeadingRight = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.spT};
  cursor: pointer;
`;

const ProfileLeftMiddleItems = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

const ProfileLeftBottom = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const ProfileRight = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const TopSpan = styled.span`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalText = styled.span`
  font-size: 13px;
`;

const InputContainer = styled.div`
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  display: flex;
  padding: 7px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: 0;
  color: ${({ theme }) => theme.text};
`;

const TextArea = styled.textarea`
  display: flex;
  padding: 7px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: 0;
  color: ${({ theme }) => theme.text};
`;

const UpdateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UpdateButton = styled.button`
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.spT};
  color: white;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
`;

const Profile = () => {
  const [tab, setTab] = useState("posts");
  const [expand, setExpand] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const location = useLocation();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("profilePageUser"))
  );
  const dispatch = useDispatch();

  const userID = location.pathname.split("/")[2];

  const { darkmode } = useContext(DarkmodeContext);

  useEffect(() => {
    const getUser = async () => {
      dispatch(Start());
      try {
        const res = await axiosInstance.get(`/users/${userID}`, {
          withCredentials: true,
        });
        localStorage.setItem("profilePageUser", JSON.stringify(res.data));
        setUserData(JSON.parse(localStorage.getItem("profilePageUser")));

        dispatch(Success());
      } catch (err) {
        if (err.response.status === 500) {
          alert("server/network error");
        } else {
          alert(err.response.data);
        }
        dispatch(Rejected());
      }
    };
    getUser();
  }, [userID]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleTabClick = (prop) => {
    setTab(prop);
  };

  return (
    <Container style={{ height: tab === "friends" && "100%" }}>
      <Top>
        <Wrapper>
          <WrapperTop>
            <WrapperTopLeft>
              <ProfilePicContainer>
                <ProfilePic
                  src={userData.profilePic ? userData.profilePic : Ayomide}
                  alt="profile pic"
                />
                <CameraIconContainer>
                  <CameraAltOutlinedIcon />
                </CameraIconContainer>
              </ProfilePicContainer>
              <WrapperTopLeftInfo>
                <H1>
                  {userData.firstName} {userData.lastName}
                </H1>
                <FriendsCount>{userData.friends.length} Friends</FriendsCount>
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
              {expand ? (
                <DropArrowIconContainer onClick={() => setExpand(false)}>
                  <KeyboardArrowUpIcon />
                </DropArrowIconContainer>
              ) : (
                <DropArrowIconContainer onClick={() => setExpand(true)}>
                  <ExpandMoreIcon />
                </DropArrowIconContainer>
              )}
            </WrapperTopRight>
          </WrapperTop>
          <Divider />
          <SuggestedSlider expand={expand} />
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
      {tab === "posts" ? (
        <ProfileBottom>
          <ProfileLeft>
            <ProfileLeftTop>
              <ProfileLeftTopItems>
                <ProfileLeftTopItem>
                  <PersonOutlineOutlinedIcon
                    style={{ fontSize: "30px", color: "#0000ff" }}
                  />
                  <FollowXCount>{userData.followers.length}</FollowXCount>
                  <FollowX>Followers</FollowX>
                </ProfileLeftTopItem>
                <ProfileLeftTopItem>
                  <PersonOutlineOutlinedIcon
                    style={{ fontSize: "30px", color: "#0000ff" }}
                  />
                  <FollowXCount>{userData.following.length}</FollowXCount>
                  <FollowX>Following</FollowX>
                </ProfileLeftTopItem>
              </ProfileLeftTopItems>
              <ProfileLeftTopItems>
                <ProfileLeftTopItem>
                  <PersonOutlineOutlinedIcon
                    style={{ fontSize: "30px", color: "#0000ff" }}
                  />
                  <FollowXCount>{userData.posts.length}</FollowXCount>
                  <FollowX>Posts</FollowX>
                </ProfileLeftTopItem>
                <ProfileLeftTopItem onClick={handleModalOpen}>
                  <PersonOutlineOutlinedIcon
                    style={{
                      fontSize: "30px",
                      color: "#0000ff",
                      marginTop: "9px",
                    }}
                  />

                  <FollowX>Edit Profile</FollowX>
                </ProfileLeftTopItem>
              </ProfileLeftTopItems>
              <Button2>
                <GroupAddOutlinedIcon />
                Follow Now
              </Button2>
              <Button2>
                <SendOutlinedIcon />
                Message
              </Button2>
            </ProfileLeftTop>{" "}
            <ProfileLeftTopBottom>
              <InfoItem>
                <InfoItemHead>About</InfoItemHead>
                <InfoItemDesc>{userData.about}</InfoItemDesc>
              </InfoItem>
              <InfoItem>
                <InfoItemHead>Mobile</InfoItemHead>
                <InfoItemDesc>{userData.mobileNo}</InfoItemDesc>
              </InfoItem>
              <InfoItem>
                <InfoItemHead>Email Address</InfoItemHead>
                <InfoItemDesc>{userData.email}</InfoItemDesc>
              </InfoItem>
              <InfoItem>
                <InfoItemHead>Location</InfoItemHead>
                <InfoItemDesc>
                  {userData.province}, {userData.country}
                </InfoItemDesc>
              </InfoItem>
            </ProfileLeftTopBottom>
            <ProfileLeftMiddle
              style={{ position: "sticky", top: "60px", marginBottom: "20px" }}
            >
              <Heading>
                <HeadingLeft>
                  <FriendsHead>Friends</FriendsHead>
                  <FriendsCount style={{ marginLeft: "0", fontWeight: "300" }}>
                    4,305
                  </FriendsCount>
                </HeadingLeft>
                <HeadingRight>See all</HeadingRight>
              </Heading>
              <ProfileLeftMiddleItems>
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
              </ProfileLeftMiddleItems>
              <ProfileLeftBottom>
                Privacy · Terms · Advertising · Ad Choices · Cookies · CTV ©
                2024
              </ProfileLeftBottom>
            </ProfileLeftMiddle>
          </ProfileLeft>
          <ProfileRight>
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </ProfileRight>
        </ProfileBottom>
      ) : (
        <FriendsComponent />
      )}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: "30%", height: "70%" }}
          style={{
            backgroundColor: darkmode ? "#202020" : "white",
            border: darkmode ? "1px solid #181818" : "1px solid #f5f5f0",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: darkmode ? "white" : "black",
            padding: "30px",
            justifyContent: "center",
          }}
        >
          <TopSpan>Edit Profile</TopSpan>
          <ModalGrid>
            <ModalItem>
              <ModalText>First Name</ModalText>
              <InputContainer>
                <Input type="text" />
              </InputContainer>
            </ModalItem>
            <ModalItem>
              <ModalText>Last Name</ModalText>
              <InputContainer>
                <Input type="text" />
              </InputContainer>
            </ModalItem>

            <ModalItem>
              <ModalText>Username</ModalText>
              <InputContainer>
                <Input type="text" />
              </InputContainer>
            </ModalItem>
            <ModalItem>
              <ModalText>Email Address</ModalText>
              <InputContainer>
                <Input type="email" />
              </InputContainer>
            </ModalItem>
            <ModalItem>
              <ModalText>Password</ModalText>
              <InputContainer>
                <Input type="password" />
              </InputContainer>
            </ModalItem>
            <ModalItem>
              <ModalText>Mobile Number</ModalText>
              <InputContainer>
                <Input type="text" />
              </InputContainer>
            </ModalItem>

            <ModalItem>
              <ModalText>Province</ModalText>
              <InputContainer>
                <Input type="text" />
              </InputContainer>
            </ModalItem>
            <ModalItem>
              <ModalText>Country</ModalText>
              <InputContainer>
                <Input type="text" />
              </InputContainer>
            </ModalItem>
          </ModalGrid>
          <ModalItem>
            <ModalText>About</ModalText>
            <InputContainer>
              <TextArea rows="3" maxLength="150" cols="120" />
            </InputContainer>
          </ModalItem>
          <UpdateButtonContainer>
            <UpdateButton>Update</UpdateButton>
          </UpdateButtonContainer>
        </Box>
      </Modal>
    </Container>
  );
};

export default Profile;
