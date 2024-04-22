import styled from "styled-components";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 12px;
  padding: 12px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;
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
  height: 70%;
`;

const PostImage = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 12px;
`;

const PostDesc = styled.div`
  font-size: 13.5px;
  text-align: justify;
  height: 30%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Hashtags = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.spT};
`;

const Bottom = styled.div`
  height: 15%;
  width: 100%;
  margin-top: 50px;
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
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
`;

const ItemsRight = styled.div`
  cursor: pointer;
`;

const Post = () => {
  const [postDesc, setPostDesc] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
  );

  return (
    <Container>
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
      <Middle>
        <PostImage
          src="https://images.unsplash.com/photo-1713714614660-18a216d92281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt="post image"
        />
        <PostDesc>
          {postDesc.length > 187
            ? `${postDesc.slice(0, 187)}...read more`
            : postDesc}
          <Hashtags>#lorem #ipsum #text</Hashtags>
        </PostDesc>
      </Middle>
      <Bottom>
        <Items>
          <ItemsLeft>
            <Item>
              <FavoriteIcon style={{ fontSize: "20px", color: "red" }} />
              1.6k
            </Item>
            <Item>
              <CommentOutlinedIcon style={{ fontSize: "20px" }} />
              2.3k
            </Item>
          </ItemsLeft>
          <ItemsRight>
            <BookmarkIcon style={{ fontSize: "20px", color: "#0000ff" }} />
          </ItemsRight>
        </Items>
      </Bottom>
    </Container>
  );
};

export default Post;
