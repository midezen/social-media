import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import Reply from "./Reply";
import MoreHorizOutlined from "@mui/icons-material/MoreHorizOutlined";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  width: 60%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const TopLeft = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const TopCenter = styled.span`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Desc = styled.p`
  text-align: justify;
  padding: 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bgSoft};
`;

const Username = styled.span`
  font-weight: bold;
  margin-right: 5px;
  font-size: 13px;
`;

const TopRight = styled.div`
  cursor: pointer;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Time = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ReplyButton = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.spT};
  cursor: pointer;
`;

const IconButton = styled.span`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.bgSoft};
  border-radius: 50%;
`;

const BottomSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  cursor: pointer;
`;

const Replies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Comment = () => {
  const [liked, setLiked] = useState(false);
  const [showReply, setShowReply] = useState(false);
  return (
    <Container>
      <Top>
        <TopLeft src={Ayomide} alt="" />
        <TopCenter>
          <Desc>
            <Username>midzen</Username>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Desc>

          <Buttons>
            <Time>10h</Time>
            <ReplyButton>Reply</ReplyButton>
            <IconButton>
              <MoreHorizOutlined />
            </IconButton>
          </Buttons>
        </TopCenter>
        {liked ? (
          <TopRight>
            <FavoriteIcon
              onClick={() => setLiked(!liked)}
              style={{ fontSize: "20px", color: "red" }}
            />
            24
          </TopRight>
        ) : (
          <TopRight>
            <FavoriteBorderOutlinedIcon
              onClick={() => setLiked(!liked)}
              style={{ fontSize: "20px", color: "red" }}
            />
            24
          </TopRight>
        )}
      </Top>
      <Bottom>
        {showReply ? (
          <BottomSpan onClick={() => setShowReply(false)}>
            --- Hide replies
          </BottomSpan>
        ) : (
          <BottomSpan onClick={() => setShowReply(true)}>
            --- Show replies
          </BottomSpan>
        )}

        <Replies style={{ display: showReply ? "flex" : "none" }}>
          <Reply />
          <Reply />
        </Replies>
      </Bottom>
    </Container>
  );
};

export default Comment;
