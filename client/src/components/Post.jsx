import styled, { ThemeContext } from "styled-components";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useContext, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DarkmodeContext } from "../contexts/darkmode";
import Comment from "./Comment";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border-radius: 12px;
  padding: 12px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfilePic = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ProfileName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ProfileUsername = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  margin-top: 15px;
`;

const PostDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Desc = styled.div`
  font-size: 13.5px;
  text-align: justify;
  cursor: pointer;
`;

const SeeMore = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const Hashtags = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.spT};
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 300;
`;

const ItemsRight = styled.div`
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.input};
  color: black;
  border-radius: 10px;
  align-items: center;
  padding: 12px;
  margin-top: 10px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }
`;

const ViewComment = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 20px;
  cursor: pointer;
  font-weight: bold;
`;

const ModalLeft = styled.div`
  flex: 1;
  border-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ModalRight = styled.div`
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const Comments = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgray;
  margin-top: 10px;
  overflow-y: scroll;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const Post = () => {
  const [postDesc, setPostDesc] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
  );
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [descOpen, setDescOpen] = useState(false);

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

  const { darkmode } = useContext(DarkmodeContext);

  const handleDescToggle = () => {
    setDescOpen(!descOpen);
  };

  return (
    <Container>
      {/* THE POST CONTAINER IS DIVIDED INTO THREE PARTS: THE TOP, THE MIDDLE AND THE BOTTOM */}
      {/* THIS IS THE TOP SECTION, IT CONTAINS THE PROFILE INFO OF THE POST OWNER */}
      <Top>
        <TopLeft>
          <ProfilePic src={Ayomide} alt="profile picture" />
          <ProfileInfo>
            <ProfileName>Ayomide Oluwadiya</ProfileName>
            <ProfileUsername>@midzen</ProfileUsername>
          </ProfileInfo>
        </TopLeft>
        <MoreHorizOutlinedIcon
          style={{ fontSize: "18px", cursor: "pointer" }}
        />
      </Top>

      {/* THIS IS THE MIDDLE SECTION, IT CONTAINS THE POST IMAGE
      THE POST DESCRIPTION AND THE HASHTAGS */}
      <Middle>
        <PostImage
          src="https://images.unsplash.com/photo-1713714614660-18a216d92281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt="post image"
        />
        <PostDesc onClick={handleDescToggle}>
          <Desc>
            {descOpen ? (
              postDesc
            ) : (
              <>
                {`${postDesc.slice(0, 187)}`}
                <SeeMore onClick={handleDescToggle}>...See more</SeeMore>
              </>
            )}
          </Desc>

          <Hashtags>#lorem #ipsum #text</Hashtags>
        </PostDesc>
      </Middle>

      {/* THIS IS THE BOTTOM SECTION, IT CONTAINS LIKE, COMMENT, AND SAVED */}
      <Bottom>
        <Items>
          <ItemsLeft>
            {liked ? (
              <Item>
                <FavoriteIcon
                  onClick={() => setLiked(!liked)}
                  style={{ fontSize: "25px", color: "red" }}
                />
                1.6k
              </Item>
            ) : (
              <Item>
                <FavoriteBorderOutlinedIcon
                  onClick={() => setLiked(!liked)}
                  style={{ fontSize: "25px" }}
                />
                1.6k
              </Item>
            )}
            <Item>
              <CommentOutlinedIcon style={{ fontSize: "21px" }} />
              2.3k
            </Item>
          </ItemsLeft>
          <ItemsRight>
            {saved ? (
              <BookmarkIcon
                onClick={() => setSaved(!saved)}
                style={{ fontSize: "24px", color: "#0000ff" }}
              />
            ) : (
              <BookmarkBorderOutlinedIcon
                onClick={() => setSaved(!saved)}
                style={{ fontSize: "24px", color: "#0000ff" }}
              />
            )}
          </ItemsRight>
        </Items>
        <ViewComment onClick={handleModalOpen}>
          View all 300 comments
        </ViewComment>
        <InputContainer>
          <Input
            type="text"
            placeholder="Add Comment"
            onClick={handleModalOpen}
          />
        </InputContainer>
      </Bottom>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: "60%", height: "80%" }}
          style={{
            backgroundColor: darkmode ? "#202020" : "white",
            border: darkmode ? "1px solid #181818" : "1px solid #f5f5f0",
            borderRadius: "12px",
            display: "flex",
            color: darkmode ? "white" : "black",
          }}
        >
          <ModalLeft>
            <ModalImage
              src="https://images.unsplash.com/photo-1713714614660-18a216d92281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Modal Image"
            />
          </ModalLeft>
          <ModalRight>
            <Top>
              <TopLeft>
                <ProfilePic src={Ayomide} alt="profile picture" />
                <ProfileInfo>
                  <ProfileName>Ayomide Oluwadiya</ProfileName>
                  <ProfileUsername>@midzen</ProfileUsername>
                </ProfileInfo>
              </TopLeft>
              <MoreHorizOutlinedIcon
                style={{ fontSize: "18px", cursor: "pointer" }}
              />
            </Top>
            <Comments>
              <Comment />
            </Comments>
            <InputContainer>
              <Input
                type="text"
                placeholder="Add Comment"
                onClick={handleModalOpen}
              />
            </InputContainer>
          </ModalRight>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </Container>
  );
};

export default Post;
