import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import { useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Container = styled.div`
  width: 100%;
  border: 0.5px solid lightgray;
  background-color: ${({ theme }) => theme.bg};
  position: relative;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 7px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 0.5px solid lightgray;
  padding-bottom: 10px;
  border-radius: 10px;
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

const SuggestedSlider = () => {
  const scrollRef = useRef(null);
  const [friendNameStore, setFriendNameStore] = useState("Ayomide Oluwadiya");

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
  return (
    <Container>
      <Wrapper ref={scrollRef}>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
        <Item>
          <FriendPicture src={Ayomide} alt="Friend's Picture" />
          <FriendName>{friendNameStore.slice(0, 18)}</FriendName>
          <Button>Add Friend</Button>
        </Item>
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
  );
};

export default SuggestedSlider;