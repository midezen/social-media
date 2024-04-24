import styled from "styled-components";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useState } from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 30px;
`;

const Middle = styled.div`
  width: 60%;
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

const SearchContainer = styled.div`
  padding: 16px;
  border-radius: 12px;
  background-color: black;
  opacity: 0.7;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

const SearchInput = styled.input`
  outline: 0;
  background-color: transparent;
  border: none;
  color: white;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.bbg};
  border: none;
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  gap: 10px;
  cursor: pointer;
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
  display: flex;
  gap: 15px;
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

  const handleActive = (props) => {
    setActive(props);
  };
  return (
    <Container>
      {/* HERE WE HAVE THE LEFT SIDE OF THE HOME PAGE */}
      <HomeLeft />

      {/* THE MIDDLE SECTION IS DIVIDED INTO THREE */}
      <Middle>
        {/* THIS IS SECTION ONE, HERE YOU CAN SEARCH AND CREATE POSTS*/}
        {/* <TopContainer>
          <SearchContainer>
            <SearchOutlinedIcon style={{ fontSize: "18px" }} />
            <SearchInput type="text" placeholder="Search" />
          </SearchContainer>
          <Button>
            <AddOutlinedIcon />
            Create new post
          </Button>
        </TopContainer> */}

        {/* THIS IS SECTION 2, IT CONTAINS THE STORIES */}
        <StoriesContainer>
          <TopContainer>
            <HeadSpan>Stories</HeadSpan>
            <Button2>Watch all</Button2>
          </TopContainer>
          <StoriesBottom>
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
                Latest
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
