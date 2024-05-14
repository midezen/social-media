import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Ayomide from "../img/Ayomide 2.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import SuggestedSlider from "../components/SuggestedSlider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FriendsComponent from "../components/FriendsComponent";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { axiosInstance } from "../utils/axiosConfig";
import { Rejected, Start, Success } from "../redux/userSlice";
import ProfileLeftComponent from "../components/ProfileLeftComponent";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  width: 100%;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
  height: 100%;
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
  margin-bottom: 15px;
  margin-top: 8px;
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

const ProfileRight = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
`;

const Profile = () => {
  const [tab, setTab] = useState("posts");
  const [expand, setExpand] = useState(false);
  const [userData, setUserData] = useState();

  const location = useLocation();
  const search = location.search.split("=")[1];
  const userID = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  const getUser = async () => {
    dispatch(Start());
    try {
      const res = await axiosInstance.get(`/users/${userID}`, {
        withCredentials: true,
      });

      dispatch(Success());

      setUserData(res.data);
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  useEffect(() => {
    getUser();
    if (search === "friends") {
      setTab("friends");
    } else {
      setTab("posts");
    }
  }, [location]);

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
                  src={userData?.profilePic ? userData.profilePic : Ayomide}
                  alt="profile pic"
                />
                <CameraIconContainer>
                  <CameraAltOutlinedIcon />
                </CameraIconContainer>
              </ProfilePicContainer>
              <WrapperTopLeftInfo>
                <H1>
                  {userData?.firstName} {userData?.lastName}
                </H1>
                <FriendsCount>{userData?.friends.length} Friends</FriendsCount>
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
          <SuggestedSlider expand={expand} setExpand={setExpand} />
          <WrapperBottom>
            <Link
              to={`/profile/${userID}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Posts
                style={{
                  borderBottom: tab === "posts" ? "2px solid #0000ff" : "none",
                }}
                onClick={() => handleTabClick("posts")}
              >
                Posts
              </Posts>
            </Link>

            <Link
              to={`/profile/${userID}?tab=friends`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Friends
                onClick={() => handleTabClick("friends")}
                style={{
                  borderBottom:
                    tab === "friends" ? "2px solid #0000ff" : "none",
                }}
              >
                Friends
              </Friends>
            </Link>
          </WrapperBottom>
        </Wrapper>
      </Top>
      {tab === "posts" ? (
        <ProfileBottom>
          <ProfileLeftComponent userData={userData} getUser={getUser} />
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
        <FriendsComponent tab={tab} setTab={setTab} />
      )}
    </Container>
  );
};

export default Profile;
