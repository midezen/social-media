import styled from "styled-components";
import {
  Rejected,
  Start,
  Success,
  addFriendSuccess,
  cancelSentRequestSuccess,
  followSuccess,
  unfollowSuccess,
  unfriendSuccess,
} from "../redux/userSlice";
import EditProfile from "../components/EditProfile";
import GppBadOutlinedIcon from "@mui/icons-material/GppBadOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DarkmodeContext } from "../contexts/darkmode";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Friend from "../components/Friend";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../utils/axiosConfig";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Ayomide from "../img/Ayomide 2.png";

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

const ButtonTwos = styled.div`
  display: flex;
  gap: 10px;
`;

const Button2 = styled.button`
  background: ${({ theme }) => theme.spT};
  border: none;
  border-radius: 10px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  gap: 10px;
  cursor: pointer;
  justify-content: center;
  margin-top: 20px;
  width: 70%;
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
  height: fit-content;
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
  grid-template-columns: ${({ length }) =>
    length === 0 ? "none" : "1fr 1fr 1fr"};
  grid-gap: 8px;
`;

const FriendsCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: -10px;
  font-weight: bold;
  cursor: pointer;
`;

const ProfileLeftBottom = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const UnfriendUserSpan = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`;

const UnfriendUserButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 70px;
  justify-content: center;
`;

const UnfriendUserButton = styled.button`
  border: none;
  padding: 12px 17px;
  border-radius: 10px;
  cursor: pointer;
  &:first-child {
    color: white;
    background-color: blue;
  }
  &:last-child {
    color: white;
    background-color: pink;
  }
`;

const FriendsAppearSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 3px;
  background-color: ${({ theme }) => theme.bgSoft};
  color: ${({ theme }) => theme.text};
  border-radius: 50%;
  cursor: pointer;
`;

const ModalItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ModalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

const ModalUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 2;
`;

const ModalProfilePic = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const ModalName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ModalButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${({ theme }) => theme.spT};
  display: flex;
  justify-content: center;
  padding: 7px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  flex: 1;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const ProfileLeftComponent = ({ userData, getUser }) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [addFriendButton, setAddFriendButton] = useState("Add Friend");
  const { darkmode } = useContext(DarkmodeContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [unfriendOpen, setUnfriendOpen] = useState(false);
  const [following, setFollowing] = useState(false);
  const [userFriendsData, setUserFriendsData] = useState([]);
  const [followingOpen, setFollowingOpen] = useState(false);
  const [followersOpen, setFollowersOpen] = useState(false);
  const [followersData, setFollowersData] = useState([]);
  const [followingData, setFollowingData] = useState([]);

  const dispatch = useDispatch();

  const userID = location.pathname.split("/")[2];

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleUnfriendOpen = () => {
    setUnfriendOpen(true);
  };
  const handleUnfriendClose = () => {
    setUnfriendOpen(false);
  };

  useEffect(() => {
    userInfo.sentRequests.includes(userID) &&
      setAddFriendButton("Cancel Request");

    userInfo.following.includes(userID) && setFollowing(true);
  }, [userID, userInfo]);

  const handleAddFriend = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/addfriend/${userID}`, "", {
        withCredentials: true,
      });

      dispatch(addFriendSuccess(userID));
      setAddFriendButton("Cancel Request");
      getUser();
      getUserFriends();
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleCancelRequest = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/cancelsentrequest/${userID}`, "", {
        withCredentials: true,
      });
      dispatch(cancelSentRequestSuccess(userID));
      setAddFriendButton("Add Friend");
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleRequestClick = () => {
    if (addFriendButton === "Add Friend") {
      handleAddFriend();
    } else if (addFriendButton === "Cancel Request") {
      handleCancelRequest();
    }
  };

  const handleUnfriend = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/unfriend/${userID}`, "", {
        withCredentials: true,
      });
      dispatch(unfriendSuccess(userID));
      getUser();
      setUnfriendOpen(false);
      setFollowing(false);
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleFollow = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/followUser/${userID}`, "", {
        withCredentials: true,
      });
      dispatch(followSuccess(userID));
      getUser();
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleUnfollow = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/unfollowUser/${userID}`, "", {
        withCredentials: true,
      });
      dispatch(unfollowSuccess(userID));
      setFollowing(false);
      getUser();
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleModalFollow = async (id) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/followUser/${id}`, "", {
        withCredentials: true,
      });
      dispatch(followSuccess(id));
      getUser();
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleModalUnfollow = async (id) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/unfollowUser/${id}`, "", {
        withCredentials: true,
      });
      dispatch(unfollowSuccess(id));
      getUser();
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const getUserFriends = async () => {
    dispatch(Start());
    try {
      const res = await axiosInstance.get(`/users/getuserfriends/${userID}`, {
        withCredentials: true,
      });

      const response = res.data.slice(0, 9);
      setUserFriendsData(response);
      dispatch(Success());
    } catch (err) {
      dispatch(Rejected());
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
    }
  };

  const getFollowers = async () => {
    dispatch(Start());
    try {
      const res = await axiosInstance.get(`/users/followers/${userID}`, {
        withCredentials: true,
      });
      console.log(res.data);
      setFollowersData(res.data);
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const getFollowings = async () => {
    dispatch(Start());
    try {
      const res = await axiosInstance.get(`/users/followings/${userID}`, {
        withCredentials: true,
      });
      console.log(res.data);
      setFollowingData(res.data);
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
    getUserFriends();
  }, [userID]);

  const displayFollowers = () => {
    getFollowers();
    setFollowersOpen(true);
  };

  const handleFollowersClose = () => {
    getFollowings();
    setFollowersOpen(false);
  };

  const displayFollowing = () => {
    setFollowingOpen(true);
  };

  const handleFollowingClose = () => {
    setFollowingOpen(false);
  };

  useEffect(() => {
    getFollowers();
    getFollowings();
  }, [userID]);

  return (
    <ProfileLeft>
      <ProfileLeftTop>
        <ProfileLeftTopItems>
          <ProfileLeftTopItem onClick={displayFollowers}>
            <PersonOutlineOutlinedIcon
              style={{ fontSize: "30px", color: "#0000ff" }}
            />
            <FollowXCount>{userData?.followers.length}</FollowXCount>
            <FollowX>Followers</FollowX>
          </ProfileLeftTopItem>
          <ProfileLeftTopItem onClick={displayFollowing}>
            <PersonOutlineOutlinedIcon
              style={{ fontSize: "30px", color: "#0000ff" }}
            />
            <FollowXCount>{userData?.following.length}</FollowXCount>
            <FollowX>Following</FollowX>
          </ProfileLeftTopItem>
        </ProfileLeftTopItems>
        <ProfileLeftTopItems>
          <ProfileLeftTopItem>
            <PersonOutlineOutlinedIcon
              style={{ fontSize: "30px", color: "#0000ff" }}
            />
            <FollowXCount>{userData?.posts.length}</FollowXCount>
            <FollowX>Posts</FollowX>
          </ProfileLeftTopItem>
          {userInfo._id === userID ? (
            <ProfileLeftTopItem onClick={handleModalOpen}>
              <EditOutlinedIcon
                style={{
                  fontSize: "30px",
                  marginTop: "9px",
                  color: "#0000ff",
                }}
              />

              <FollowX style={{ marginTop: "13px" }}>Edit Profile</FollowX>
            </ProfileLeftTopItem>
          ) : userInfo.friends.includes(userID) ? (
            <ProfileLeftTopItem onClick={handleUnfriendOpen}>
              <DoneOutlineOutlinedIcon
                style={{
                  fontSize: "30px",
                  marginTop: "9px",
                  color: "#0000ff",
                }}
              />
              <FollowX style={{ marginTop: "13px" }}>Friends ✅</FollowX>
            </ProfileLeftTopItem>
          ) : addFriendButton === "Cancel Request" ? (
            <ProfileLeftTopItem onClick={handleRequestClick}>
              <GppBadOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "#0000ff",
                  marginTop: "3px",
                }}
              />

              <FollowX
                style={{
                  marginTop: "5px",
                }}
              >
                Cancel
                <br /> Request
              </FollowX>
            </ProfileLeftTopItem>
          ) : (
            <ProfileLeftTopItem
              onClick={handleRequestClick}
              style={{ backgroundColor: "blue" }}
            >
              <GroupAddOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "white",
                  marginTop: "5px",
                }}
              />

              <FollowX
                style={{
                  marginTop: "3px",
                  color: "white",
                }}
              >
                Add Friend
              </FollowX>
            </ProfileLeftTopItem>
          )}
        </ProfileLeftTopItems>
        {userInfo._id !== userID && (
          <ButtonTwos>
            {following ? (
              <Button2
                onClick={handleUnfollow}
                style={{ backgroundColor: "lightgray", color: "black" }}
              >
                <DoneOutlineOutlinedIcon />
                Following
              </Button2>
            ) : (
              <Button2 onClick={handleFollow}>
                <GroupAddOutlinedIcon />
                Follow
              </Button2>
            )}
            <Button2>
              <SendOutlinedIcon />
              Message
            </Button2>
          </ButtonTwos>
        )}
      </ProfileLeftTop>
      <ProfileLeftTopBottom>
        {userData?.about && (
          <InfoItem>
            <InfoItemHead>About</InfoItemHead>
            <InfoItemDesc>{userData?.about}</InfoItemDesc>
          </InfoItem>
        )}
        {userData?.mobileNo && (
          <InfoItem>
            <InfoItemHead>Mobile</InfoItemHead>
            <InfoItemDesc>{userData?.mobileNo}</InfoItemDesc>
          </InfoItem>
        )}
        {userData?.email && (
          <InfoItem>
            <InfoItemHead>Email Address</InfoItemHead>
            <InfoItemDesc>{userData?.email}</InfoItemDesc>
          </InfoItem>
        )}
        {userData?.province || userData?.country ? (
          <InfoItem>
            <InfoItemHead>Location</InfoItemHead>
            <InfoItemDesc>
              {userData?.province} {userData?.country}
            </InfoItemDesc>
          </InfoItem>
        ) : (
          ""
        )}
      </ProfileLeftTopBottom>
      <ProfileLeftMiddle
        style={{ position: "sticky", top: "60px", marginBottom: "20px" }}
      >
        <Heading>
          <HeadingLeft>
            <FriendsHead>Friends</FriendsHead>
            <FriendsCount style={{ marginLeft: "0", fontWeight: "300" }}>
              {userFriendsData.length}
            </FriendsCount>
          </HeadingLeft>
          {userFriendsData.length > 9 && <HeadingRight>See all</HeadingRight>}
        </Heading>
        <ProfileLeftMiddleItems length={userFriendsData.length}>
          {userFriendsData.length === 0 ? (
            <FriendsAppearSpan>Your friends will appear here</FriendsAppearSpan>
          ) : (
            userFriendsData.map((data) => {
              return (
                <Link
                  to={`/profile/${data._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Friend key={data._id} data={data} />
                </Link>
              );
            })
          )}
        </ProfileLeftMiddleItems>
        <ProfileLeftBottom>
          Privacy · Terms · Advertising · Ad Choices · Cookies · CTV © 2024
        </ProfileLeftBottom>
      </ProfileLeftMiddle>
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
          <EditProfile setModalOpen={setModalOpen} getUser={getUser} />
        </Box>
      </Modal>
      <Modal
        open={unfriendOpen}
        onClose={handleUnfriendClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: "20%", height: "30%" }}
          style={{
            backgroundColor: darkmode ? "#202020" : "white",
            border: darkmode ? "1px solid #181818" : "1px solid #f5f5f0",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            color: darkmode ? "white" : "black",
            padding: "30px",
            justifyContent: "center",
          }}
        >
          <UnfriendUserSpan>
            Are you sure you want to unfriend {userData?.firstName}?
          </UnfriendUserSpan>
          <UnfriendUserButtons>
            <UnfriendUserButton onClick={handleUnfriend}>
              Yes
            </UnfriendUserButton>
            <UnfriendUserButton onClick={() => setUnfriendOpen(false)}>
              No
            </UnfriendUserButton>
          </UnfriendUserButtons>
        </Box>
      </Modal>
      <Modal
        open={followersOpen}
        onClose={handleFollowersClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: "25%", maxHeight: "50%" }}
          style={{
            backgroundColor: darkmode ? "#202020" : "white",
            border: darkmode ? "1px solid #181818" : "1px solid #f5f5f0",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            color: darkmode ? "white" : "black",
            padding: "10px 5px",
            overflowY: "scroll",
          }}
        >
          <ModalTop>
            <CloseIcon onClick={handleFollowersClose}>
              <CloseOutlinedIcon />
            </CloseIcon>
          </ModalTop>
          <ModalItems>
            {followersData?.map((item) => {
              return (
                <ModalItem key={item?._id}>
                  <ModalUserInfo onClick={handleFollowersClose}>
                    <Link
                      to={`/profile/${item._id}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <ModalProfilePic
                        src={item?.profilePic ? item.profilePic : Ayomide}
                        alt="profilePic"
                      />
                      <ModalName>
                        {item?.firstName} {item?.lastName}
                      </ModalName>
                    </Link>
                  </ModalUserInfo>

                  {userInfo.following.includes(item?._id) ? (
                    <ModalButton onClick={() => handleModalUnfollow(item._id)}>
                      unfollow
                    </ModalButton>
                  ) : item._id === userInfo._id ? (
                    ""
                  ) : (
                    <ModalButton onClick={() => handleModalFollow(item._id)}>
                      follow
                    </ModalButton>
                  )}
                </ModalItem>
              );
            })}
          </ModalItems>
        </Box>
      </Modal>
      <Modal
        open={followingOpen}
        onClose={handleFollowingClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: "25%", maxHeight: "50%" }}
          style={{
            backgroundColor: darkmode ? "#202020" : "white",
            border: darkmode ? "1px solid #181818" : "1px solid #f5f5f0",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            color: darkmode ? "white" : "black",
            padding: "10px 5px",
            overflowY: "scroll",
          }}
        >
          <ModalTop>
            <CloseIcon onClick={handleFollowingClose}>
              <CloseOutlinedIcon />
            </CloseIcon>
          </ModalTop>
          <ModalItems>
            {followingData?.map((item) => {
              return (
                <ModalItem key={item?._id}>
                  <ModalUserInfo onClick={handleFollowingClose}>
                    <Link
                      to={`/profile/${item._id}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <ModalProfilePic
                        src={item?.profilePic ? item.profilePic : Ayomide}
                        alt="profilePic"
                      />
                      <ModalName>
                        {item?.firstName} {item?.lastName}
                      </ModalName>
                    </Link>
                  </ModalUserInfo>

                  {userInfo.following.includes(item?._id) ? (
                    <ModalButton onClick={() => handleModalUnfollow(item._id)}>
                      unfollow
                    </ModalButton>
                  ) : item._id === userInfo._id ? (
                    ""
                  ) : (
                    <ModalButton onClick={() => handleModalFollow(item._id)}>
                      follow
                    </ModalButton>
                  )}
                </ModalItem>
              );
            })}
          </ModalItems>
        </Box>
      </Modal>
    </ProfileLeft>
  );
};

export default ProfileLeftComponent;
