import styled from "styled-components";
import testImage from "../img/testImage.avif";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Rejected,
  Start,
  Success,
  acceptRequestSuccess,
  addFriendSuccess,
  cancelSentRequestSuccess,
  deleteRequestSuccess,
} from "../redux/userSlice";
import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosConfig";
import { ActiveContext } from "../contexts/active";

const Container = styled.div`
  height: 270px;
  width: 210px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: ${({ suggested }) => (suggested ? "12px" : "7px")};
  padding-bottom: 17px;
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
`;

const CardTop = styled.div`
  height: ${({ suggested }) => (suggested ? "70%" : "60%")};
  width: 100%;
`;

const CardPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  cursor: pointer;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  width: 100%;
  gap: ${({ suggested }) => (suggested ? "12px" : "7px")};
`;

const Name = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.spT};
  width: 80%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const AddFriendButton = styled.button`
  background-color: ${({ theme }) => theme.spT};
  width: 80%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: lightgray;
  width: 80%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const Card = ({ suggested, data, getFriendRequests }) => {
  const cardName = data.firstName + " " + data.lastName;
  const slicedName = cardName.slice(0, 19) + "...";
  const checkName = () => {
    if (cardName.length > 19) {
      return slicedName;
    } else {
      return cardName;
    }
  };

  const dispatch = useDispatch();
  const [addFriendButton, setAddFriendButton] = useState("Add Friend");
  const userInfo = useSelector((state) => state.user.userInfo);

  const { setNavActive } = useContext(ActiveContext);

  useEffect(() => {
    if (suggested) {
      userInfo.sentRequests.includes(data._id) &&
        setAddFriendButton("Cancel Request");
    }
  }, [data, userInfo]);

  const handleAddFriend = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/addfriend/${data._id}`, "", {
        withCredentials: true,
      });

      dispatch(addFriendSuccess(data._id));
      setAddFriendButton("Cancel Request");
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  const cancelSentRequest = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/cancelsentrequest/${data._id}`, "", {
        withCredentials: true,
      });
      dispatch(cancelSentRequestSuccess(data._id));
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

  const handleSuggestedClick = () => {
    addFriendButton === "Add Friend" ? handleAddFriend() : cancelSentRequest();
  };

  const handleAcceptRequest = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/acceptrequest/${data._id}`, "", {
        withCredentials: true,
      });
      dispatch(acceptRequestSuccess(data._id));
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

  const handleDeleteRequest = async () => {
    dispatch(Start());
    try {
      await axiosInstance.put(`/users/deleterequest/${data._id}`, "", {
        withCredentials: true,
      });
      dispatch(deleteRequestSuccess(data._id));
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
    <Container suggested={suggested}>
      <CardTop suggested={suggested}>
        <Link to={`/profile/${data._id}`} style={{ color: "inherit" }}>
          <CardPic
            src={data.profilePic ? data.profilePic : testImage}
            onClick={() => setNavActive(null)}
          />
        </Link>
      </CardTop>
      <CardBottom suggested={suggested}>
        <Name>{checkName()}</Name>
        {suggested && (
          <AddFriendButton
            style={{
              backgroundColor:
                addFriendButton === "Cancel Request" && "lightgray",
              color: addFriendButton === "Cancel Request" && "black",
            }}
            onClick={handleSuggestedClick}
          >
            {addFriendButton}
          </AddFriendButton>
        )}
        {!suggested && (
          <ConfirmButton onClick={handleAcceptRequest}>Confirm</ConfirmButton>
        )}
        {!suggested && (
          <DeleteButton onClick={handleDeleteRequest}>Delete</DeleteButton>
        )}
      </CardBottom>
    </Container>
  );
};

export default Card;
