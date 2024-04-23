import styled from "styled-components";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const Container = styled.div`
  width: 100%;
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

const Post = () => {
  const [postDesc, setPostDesc] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
  );

  const [descOpen, setDescOpen] = useState(false);

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

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
        <MoreHorizOutlinedIcon style={{ fontSize: "18px" }} />
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
      </Bottom>
    </Container>
  );
};

export default Post;
