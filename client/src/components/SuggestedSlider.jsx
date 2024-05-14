import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import {
  Rejected,
  Start,
  Success,
  addFriendSuccess,
  cancelSentRequestSuccess,
} from "../redux/userSlice";
import { axiosInstance } from "../utils/axiosConfig";

const Container = styled.div`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.bgSoft};
  background-color: ${({ theme }) => theme.bg};
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-top: -10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Span = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  width: fit-content;
  margin-left: 10px;
  margin-top: 10px;
`;

const Items = styled.div`
  display: flex;
  gap: 7px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;
  border-radius: 10px;
  border: 0.5px solid ${({ theme }) => theme.bgSoft};
`;

const FriendPicture = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const FriendName = styled.span`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.spT};
  border: none;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  gap: 10px;
  cursor: pointer;
  opacity: 0.7;
  margin: 0px 10px;
`;

const ArrowItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.text};
  position: absolute;
  top: 50%;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 12px;
`;

const SuggestedSlider = ({ expand }) => {
  const scrollRef = useRef(null);
  const [friendNameStore, setFriendNameStore] = useState("Ayomide Oluwadiya");
  const dispatch = useDispatch();
  const [suggestedData, setSuggestedData] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [addFriendButton, setAddFriendButton] = useState(true);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 250;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 250;
    }
  };

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
      if (err.response.data === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const handleName = (firstName, lastName) => {
    const name = `${firstName} ${lastName}`;
    const slicedName = `${name.slice(0, 15)}...`;

    if (name.length > 18) {
      return slicedName;
    } else {
      return name;
    }
  };

  useEffect(() => {
    getSuggestedFriends();
  }, []);

  const handleAddFriend = async (id) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/addfriend/${id}`, "", {
        withCredentials: true,
      });

      dispatch(addFriendSuccess(id));
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

  const handleCancelRequest = async (id) => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/cancelsentrequest/${id}`, "", {
        withCredentials: true,
      });
      dispatch(cancelSentRequestSuccess(id));
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

  return (
    <>
      <Container style={{ display: expand ? "flex" : "none" }}>
        <Span>Suggested for you</Span>
        <Wrapper ref={scrollRef}>
          <Items>
            {suggestedData.map((item) => {
              return (
                <Item key={item._id}>
                  <FriendPicture
                    src={item.profilePic ? item.profilePic : Ayomide}
                    alt="Friend's Picture"
                  />
                  <FriendName>
                    {handleName(item.firstName, item.lastName)}
                  </FriendName>
                  {userInfo.sentRequests.includes(item._id) ? (
                    <Button
                      style={{ color: "black", backgroundColor: "lightgray" }}
                      onClick={() => handleCancelRequest(item._id)}
                    >
                      Cancel Request
                    </Button>
                  ) : (
                    <Button onClick={() => handleAddFriend(item._id)}>
                      Add Friend
                    </Button>
                  )}
                </Item>
              );
            })}
          </Items>
        </Wrapper>
        <ArrowItem
          style={{
            left: "0",
            // display: scrollRef.current.scrollLeft < 0 ? "none" : "flex",
          }}
          onClick={scrollLeft}
        >
          <KeyboardArrowLeftIcon />
        </ArrowItem>
        <ArrowItem
          style={{
            right: "0",
            // display: scrollRef.current.scrollLeft > 0 ? "none" : "flex",
          }}
          onClick={scrollRight}
        >
          <KeyboardArrowRightIcon />
        </ArrowItem>
      </Container>
    </>
  );
};

export default SuggestedSlider;
