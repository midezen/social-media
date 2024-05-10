import styled from "styled-components";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { Rejected, Start, Success } from "../redux/userSlice";
import { axiosInstance } from "../utils/axiosConfig";

const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
`;
const Left = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${({ theme }) => theme.bg};
  position: sticky;
  top: 61px;
  height: Calc(100vh - 61px);
`;

const H2 = styled.h2`
  padding: 15px;
  padding-bottom: 5px;
`;

const LeftBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftBottomItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 15px;
  margin-left: 15px;
  align-items: center;
  border-radius: 10px;
  width: 70%;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) =>
    props.suggestedActive === true || props.requestActive === true
      ? props.theme.bgSoft
      : ""};
  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
  }
`;

const Right = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.bgSoft};
  padding: 30px 50px;
`;

const FriendRequestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const H3 = styled.h3``;

const FriendRequests = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 25px;
  height: 100%;
`;

const SuggestedFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SuggestedFriends = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 25px;
  height: 100%;
`;

const FindFriends = () => {
  const [tab, setTab] = useState("suggested");
  const [suggestedActive, setSuggestedActive] = useState(true);
  const [requestActive, setRequestActive] = useState(false);
  const [resquestData, setResquestData] = useState([]);
  const [suggestedData, setSuggestedData] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tab === "suggested") {
      setSuggestedActive(true);
      setRequestActive(false);
    } else {
      setSuggestedActive(false);
      setRequestActive(true);
    }
  }, [tab]);

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
          !userInfo.friends.includes(item._id)
      );
      setSuggestedData(filteredResponse);
      dispatch(Success());
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      console.log(err);
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

      setResquestData(res.data);
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

  useEffect(() => {
    tab === "suggested" ? getSuggestedFriends() : getFriendRequests();
  }, [tab]);

  return (
    <Container>
      <Left>
        <H2>Find Friends</H2>
        <LeftBottom>
          <LeftBottomItem
            onClick={() => setTab("suggested")}
            suggestedActive={suggestedActive}
          >
            <PersonOutlineOutlinedIcon style={{ fontSize: "25px" }} />
            Suggested Friends
          </LeftBottomItem>
          <LeftBottomItem
            onClick={() => setTab("requests")}
            requestActive={requestActive}
          >
            <PeopleAltOutlinedIcon style={{ fontSize: "25px" }} /> Friend
            Requests
          </LeftBottomItem>
        </LeftBottom>
      </Left>
      <Right>
        {tab === "requests" && (
          <FriendRequestsContainer>
            <H3>Friend Requests</H3>
            <FriendRequests>
              {resquestData.length === 0 ? (
                <></>
              ) : (
                resquestData.map((data) => {
                  return <Card key={data._id} data={data} />;
                })
              )}
            </FriendRequests>
          </FriendRequestsContainer>
        )}
        {tab === "suggested" && (
          <SuggestedFriendsContainer>
            <H3>Suggested for You</H3>
            <SuggestedFriends>
              {suggestedData.map((data) => {
                return <Card key={data._id} suggested data={data} />;
              })}
            </SuggestedFriends>
          </SuggestedFriendsContainer>
        )}
      </Right>
    </Container>
  );
};

export default FindFriends;
