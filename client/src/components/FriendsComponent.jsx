import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Rejected,
  Start,
  Success,
  followSuccess,
  unfollowSuccess,
  unfriendSuccess,
} from "../redux/userSlice";
import { axiosInstance } from "../utils/axiosConfig";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 60%;
  margin: auto;
  margin-top: 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg};
  margin-bottom: 10px;
  height: 40vh;
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

const FriendsCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: -10px;
  font-weight: bold;
  cursor: pointer;
`;

const HeadingRight = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.spT};
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

const Friends = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const FriendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid ${({ theme }) => theme.bgSoft};
  padding: 8px;
  border-radius: 12px;
  position: relative;
`;

const FriendItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FriendPicture = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

const FriendName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const FriendItemRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.hover};
  cursor: pointer;
`;

const FriendsAppear = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowDiv = styled.div`
  height: fit-content;
  width: 200px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  position: absolute;
  right: 30px;
  top: 90px;
  z-index: 99;
  display: flex;
  flex-direction: column;
`;

const ArrowDivSpan = styled.span`
  display: flex;
  width: 90%;
  justify-content: center;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
  }
`;

const FriendsComponent = ({ tab, setTab }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeItemId, setActiveItemId] = useState(null);
  const userInfo = useSelector((state) => state.user.userInfo);

  const userID = location.pathname.split("/")[2];

  const getUserFriends = async () => {
    dispatch(Start());
    try {
      const res = await axiosInstance.get(`/users/getuserfriends/${userID}`, {
        withCredentials: true,
      });
      setData(res.data);
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

  useEffect(() => {
    tab === "friends" && getUserFriends();
  }, [tab]);

  const handleFriendItemRightClick = (id) => {
    activeItemId !== null ? setActiveItemId(null) : setActiveItemId(id);
  };

  const handleUnfriend = async (id) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/unfriend/${id}`, "", {
        withCredentials: true,
      });
      dispatch(unfriendSuccess(id));
      getUserFriends();
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

  const handleUnfollow = async (id) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/unfollowUser/${id}`, "", {
        withCredentials: true,
      });
      dispatch(unfollowSuccess(id));
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleFollow = async (id) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/followUser/${id}`, "", {
        withCredentials: true,
      });
      dispatch(followSuccess(id));
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  return (
    <Container>
      <Heading>
        <HeadingLeft>
          <FriendsHead>Friends</FriendsHead>
          <FriendsCount style={{ marginLeft: "0", fontWeight: "300" }}>
            {data.length}
          </FriendsCount>
        </HeadingLeft>
        <HeadingRight>
          <SearchContainer>
            <SearchOutlinedIcon style={{ fontSize: "18px" }} />
            <SearchInput type="text" placeholder="Search" />
          </SearchContainer>
        </HeadingRight>
      </Heading>
      {data.length > 0 && (
        <Friends>
          {data.map((item) => {
            return (
              <FriendItem key={item._id}>
                <Link
                  to={`/profile/${item._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={() => setTab("posts")}
                >
                  <FriendItemLeft>
                    <FriendPicture
                      src={item.profilePic ? item.profilePic : Ayomide}
                      alt="Friend's Picture"
                    />
                    <FriendName>
                      {item.firstName} {item.lastName}
                    </FriendName>
                  </FriendItemLeft>
                </Link>

                {item._id !== userInfo._id && (
                  <FriendItemRight
                    onClick={() => handleFriendItemRightClick(item._id)}
                  >
                    <MoreHorizOutlinedIcon style={{ fontSize: "18px" }} />
                  </FriendItemRight>
                )}
                {item._id === activeItemId && (
                  <ArrowDiv key={item._id}>
                    {userInfo.following.includes(item._id) ? (
                      <ArrowDivSpan onClick={() => handleUnfollow(item._id)}>
                        Unfollow
                      </ArrowDivSpan>
                    ) : (
                      <ArrowDivSpan onClick={() => handleFollow(item._id)}>
                        Follow
                      </ArrowDivSpan>
                    )}
                    <ArrowDivSpan onClick={() => handleUnfriend(item._id)}>
                      Unfriend
                    </ArrowDivSpan>
                  </ArrowDiv>
                )}
              </FriendItem>
            );
          })}
        </Friends>
      )}
      {!data.length > 0 && (
        <FriendsAppear>Your Friends will Appear Here</FriendsAppear>
      )}
    </Container>
  );
};

export default FriendsComponent;
