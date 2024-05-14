import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { Link } from "react-router-dom";
import {
  Rejected,
  Start,
  Success,
  acceptRequestSuccess,
  addFriendSuccess,
  deleteRequestSuccess,
} from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../utils/axiosConfig";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 30%;
  position: sticky;
  top: 90px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: Calc(100vh - 120px);
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

const RightHeadSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const RightHeadSpanb = styled.span`
  padding: 1px 4px;
  color: white;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.spT};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

const RightItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px;
  color: ${({ theme }) => theme.text};
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

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 5px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-weight: bolder;
  cursor: pointer;
  &:first-child {
    color: ${({ theme }) => theme.spT};
  }
  &:last-child {
    color: red;
  }
`;

const Button2 = styled.button`
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

const Span1 = styled.span`
  font-size: 14px;
`;

const Span1b = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Span2 = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Divider = styled.hr`
  width: 90%;
  margin: 25px 0px;
`;

const ActiveNowContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 14px;
  padding: 15px 30px;
  border-radius: 25px;
`;

const ProfileImages = styled.div`
  display: flex;
`;

const ActiveProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.text};
  margin-left: -10px;
`;

const Followers = styled.div`
  display: flex;
  gap: 5px;
  font-size: 16px;
  align-items: center;
  font-weight: bold;
  margin-left: -10px;
`;

const FollowersSpan = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  font-weight: 300;
`;

const Pre = styled.pre`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const P = styled.p``;

const HomeRight = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const [suggestedData, setSuggestedData] = useState([]);
  const [resquestData, setResquestData] = useState([]);

  const getSuggestedFriends = async () => {
    dispatch(Start());
    try {
      const res = await axiosInstance.get("/users", {
        withCredentials: true,
      });
      const filteredResponse = res.data.filter(
        (item) =>
          item._id !== userInfo._id &&
          !userInfo.friendRequests.includes(item._id) &&
          !userInfo.friends.includes(item._id) &&
          !userInfo.sentRequests.includes(item._id)
      );
      const responseData = filteredResponse.slice(0, 3);
      setSuggestedData(responseData);
      dispatch(Success());
    } catch (err) {
      if (err.response.data === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const getFriendRequests = async () => {
    dispatch(Start());
    try {
      const res = await axiosInstance.get(
        `/users/getuserfriendrequests/${userInfo._id}`,
        { withCredentials: true }
      );
      const responseData = res.data;
      setResquestData(responseData);
      dispatch(Success());
    } catch (err) {
      if (err.response.data === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
    }
  };

  useEffect(() => {
    getFriendRequests();
    getSuggestedFriends();
  }, []);

  const handleAddFriend = async (data) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/addfriend/${data}`, "", {
        withCredentials: true,
      });

      dispatch(addFriendSuccess(data));
      getSuggestedFriends();
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleAcceptRequest = async (data) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/acceptrequest/${data}`, "", {
        withCredentials: true,
      });
      dispatch(acceptRequestSuccess(data));
      getFriendRequests();
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleDeleteRequest = async (data) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/deleterequest/${data}`, "", {
        withCredentials: true,
      });
      dispatch(deleteRequestSuccess(data));
      getFriendRequests();
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
      {/* THE RIGHT SIDE OF THE HOME PAGE CONSIST OF THREE SECTIONS: THE TOP, THE
      MIDDLE AND THE BOTTOM SECTION */}

      {/* THIS IS THE TOP SECTION, IT CONTAINS USER'S FRIEND REQUESTS */}
      {resquestData.length > 0 && (
        <RightHeadSpan>
          Requests
          <RightHeadSpanb>{resquestData.length}</RightHeadSpanb>
        </RightHeadSpan>
      )}
      {resquestData.length > 0 &&
        resquestData.slice(0, 2).map((item) => {
          return (
            <RightItem key={item._id}>
              <Info>
                <Link
                  to={`/profile/${item._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ProfileImage
                    src={item.profilePic ? item.profilePic : Ayomide}
                    alt="profilepic"
                  />
                </Link>
                <Spans>
                  <Link
                    to={`/profile/${item._id}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Span1>
                      {item.firstName} {item.lastName}{" "}
                      <Span1b>wants to be your friend</Span1b>
                    </Span1>
                  </Link>
                  <Buttons>
                    <Button onClick={() => handleAcceptRequest(item._id)}>
                      Accept
                    </Button>
                    <Button onClick={() => handleDeleteRequest(item._id)}>
                      Decline
                    </Button>
                  </Buttons>
                </Spans>
              </Info>
            </RightItem>
          );
        })}

      <Link
        to="/findFriends?tab=requests"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        {resquestData.length > 0 && <Button2>View All</Button2>}
      </Link>

      {resquestData.length > 0 && <Divider />}

      {/* THIS IS THE MIDDLE SECTION, AND IT IS DIVIDED INTO TWO SECTIONS */}
      {/* --------------------------------------------------------------- */}
      {/* THIS IS THE FIRST SECTION OF THE MIDDLE SECTION,
       IT CONTAINS SUGGESTIONS ON USERS TO FRIEND */}
      <RightHeadSpan>Suggestions for you</RightHeadSpan>
      {suggestedData.map((item) => {
        return (
          <RightItem key={item._id}>
            <Link
              to={`/profile/${item._id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Info>
                <ProfileImage
                  src={item.profilePic ? item.profilePic : Ayomide}
                  alt="profilepic"
                />
                <Spans>
                  <Span1>
                    {item.firstName} {item.lastName}
                  </Span1>
                  <Span2>
                    {item.province} {item.country}
                  </Span2>
                </Spans>
              </Info>
            </Link>
            <GroupAddOutlinedIcon
              style={{ color: "#0000ff" }}
              onClick={() => handleAddFriend(item._id)}
            />
          </RightItem>
        );
      })}

      <Link
        to="/findFriends?tab=suggested"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Button2>View All</Button2>
      </Link>

      <Divider />

      {/* THIS IS THE SECOND SECTION IN THE MIDDLE SECTION, IT CONTAINS PRESENTLY ACTIVE FRIENDS */}
      <ActiveNowContainer>
        <ProfileImages>
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
        </ProfileImages>
        <Followers>
          200.3k <FollowersSpan>Followers</FollowersSpan>
        </Followers>
        <span style={{ marginLeft: "-10px" }}>Active now on your profile</span>
      </ActiveNowContainer>
      <Divider />

      {/* THIS IS THE BOTTOM OF THE RIGHT SIDE OF THE HOME PAGE */}
      <Pre>
        <P>
          About {"    "} Accessibility {"    "} Help Center
        </P>{" "}
        <P>Privacy and Terms {"    "} Advertising</P>
        <P>Business Services</P>
      </Pre>
    </Container>
  );
};

export default HomeRight;
