import styled from "styled-components";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useRef, useState } from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 30px;
`;

const Middle = styled.div`
  width: 40%;
  height: 100%;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeadSpan = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Button2 = styled.button`
  border: none;
  background: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.spT};
  cursor: pointer;
`;

const StoriesBottom = styled.div`
  width: 100%;
  position: relative;
`;

const StoriesWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  transition: all 0.5s;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${({ theme }) => theme.textSoft};
  gap: 7px;
  font-weight: 300;
  margin-right: 15px;
`;

const AddStory = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dotted;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const Story = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border-width: 3px;
  border-style: solid;
  border-color: #ff6600 #ff6600 #ff3300 #ff3300;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-style: dotted;
    scale: 1.1;
  }
`;

const ArrowItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.text};
  position: absolute;
  top: 20px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FeedButton = styled.button`
  border: none;
  background: ${(props) =>
    props.active === "all" ? "#3333ff" : "transparent"};
  font-weight: bold;
  color: ${(props) => (props.active === "all" ? "white" : "#0000ff")};
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.4 ease;
`;

const FeedButton2 = styled.button`
  border: none;
  background: ${(props) =>
    props.active === "latest" ? "#3333ff" : "transparent"};
  font-weight: bold;
  color: ${(props) => (props.active === "latest" ? "white" : "#0000ff")};
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.4 ease;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Home = () => {
  const [active, setActive] = useState("all");
  const scrollRef = useRef(null);

  const handleActive = (props) => {
    setActive(props);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 210;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 210;
    }
  };

  return (
    <Container>
      {/* HERE WE HAVE THE LEFT SIDE OF THE HOME PAGE */}
      <HomeLeft />

      {/* THE MIDDLE SECTION IS DIVIDED INTO THREE */}
      <Middle>
        {/* THIS IS SECTION 2, IT CONTAINS THE STORIES */}
        <StoriesContainer>
          <TopContainer>
            <HeadSpan>Stories</HeadSpan>
            <Button2>Watch all</Button2>
          </TopContainer>
          <StoriesBottom>
            <StoriesWrapper ref={scrollRef}>
              <StoryItem>
                <AddStory>
                  <AddOutlinedIcon style={{ fontSize: "14px" }} />
                </AddStory>
                Add Story
              </StoryItem>

              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
              <StoryItem>
                <Story src={Ayomide} />
                Ayomide
              </StoryItem>
            </StoriesWrapper>

            <ArrowItem
              style={{
                left: "0",
              }}
              onClick={scrollLeft}
            >
              <KeyboardArrowLeftIcon />
            </ArrowItem>
            <ArrowItem
              style={{
                right: "0",
              }}
              onClick={scrollRight}
            >
              <KeyboardArrowRightIcon />
            </ArrowItem>
          </StoriesBottom>
        </StoriesContainer>

        <CreatePost />

        {/* THIS IS SECTION 3, IT CONTAINS THE FEED */}
        <FeedContainer>
          <TopContainer>
            <HeadSpan>Feeds</HeadSpan>
            <Buttons>
              <FeedButton active={active} onClick={() => handleActive("all")}>
                All
              </FeedButton>
              <FeedButton2
                active={active}
                onClick={() => handleActive("latest")}
              >
                Following
              </FeedButton2>
            </Buttons>
          </TopContainer>
          <Posts>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Posts>
        </FeedContainer>
      </Middle>

      {/* HERE WE HAVE THE RIGHT SIDE OF THE HOME PAGE */}
      <HomeRight />
    </Container>
  );
};

export default Home;
