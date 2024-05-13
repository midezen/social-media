import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Rejected, Start, Success } from "../redux/userSlice";
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
`;

const FriendsComponent = ({ tab, setTab }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

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
      <Friends>
        {data.map((item) => {
          return (
            <Link
              to={`/profile/${item._id}`}
              style={{ color: "inherit", textDecoration: "none" }}
              onClick={() => setTab("posts")}
            >
              <FriendItem key={item._id}>
                <FriendItemLeft>
                  <FriendPicture
                    src={item.profilePic ? item.profilePic : Ayomide}
                    alt="Friend's Picture"
                  />
                  <FriendName>
                    {item.firstName} {item.lastName}
                  </FriendName>
                </FriendItemLeft>
                <FriendItemRight>
                  <MoreHorizOutlinedIcon
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  />
                </FriendItemRight>
              </FriendItem>
            </Link>
          );
        })}
      </Friends>
    </Container>
  );
};

export default FriendsComponent;
