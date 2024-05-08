import styled from "styled-components";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useContext, useEffect, useState } from "react";

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
  height: 100vh;
  background-color: ${({ theme }) => theme.bgSoft};
  padding: 30px 50px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 20px;
  }
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
`;

const Card = styled.div`
  height: 270px;
  width: 210px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-bottom: 17px;
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
`;

const CardTop = styled.div`
  height: 60%;
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
  gap: 7px;
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

const SuggestedFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SuggestedFriends = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 25px;
`;

const FindFriends = () => {
  const [tab, setTab] = useState("suggested");
  const [suggestedActive, setSuggestedActive] = useState(true);
  const [requestActive, setRequestActive] = useState(false);

  useEffect(() => {
    if (tab === "suggested") {
      setSuggestedActive(true);
      setRequestActive(false);
    } else {
      setSuggestedActive(false);
      setRequestActive(true);
    }
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
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>{" "}
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>{" "}
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>{" "}
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>{" "}
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>{" "}
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>{" "}
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>{" "}
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>{" "}
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Confirm</ConfirmButton>
                  <DeleteButton>Delete</DeleteButton>
                </CardBottom>
              </Card>
            </FriendRequests>
          </FriendRequestsContainer>
        )}
        {tab === "suggested" && (
          <SuggestedFriendsContainer>
            <H3>Suggested for You</H3>
            <SuggestedFriends>
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Add Friend</ConfirmButton>
                </CardBottom>
              </Card>
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Add Friend</ConfirmButton>
                </CardBottom>
              </Card>
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Add Friend</ConfirmButton>
                </CardBottom>
              </Card>
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Add Friend</ConfirmButton>
                </CardBottom>
              </Card>
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Add Friend</ConfirmButton>
                </CardBottom>
              </Card>
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Add Friend</ConfirmButton>
                </CardBottom>
              </Card>
              <Card>
                <CardTop>
                  <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
                </CardTop>
                <CardBottom>
                  <Name>Ayomide Oluwadiya</Name>
                  <ConfirmButton>Add Friend</ConfirmButton>
                </CardBottom>
              </Card>
            </SuggestedFriends>
          </SuggestedFriendsContainer>
        )}
      </Right>
    </Container>
  );
};

export default FindFriends;
