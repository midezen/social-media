import styled from "styled-components";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Ayomide from "../img/Ayomide 2.png";
import { useContext, useEffect, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DarkmodeContext } from "../contexts/darkmode";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostSuccess,
  likePostSuccess,
  postRejected,
  postStart,
  postSuccess,
  unlikePostSuccess,
} from "../redux/postSlice";
import { axiosInstance } from "../utils/axiosConfig";
import moment from "moment";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import CreatePost from "./CreatePost";
import { getCommentsSuccess } from "../redux/commentSlice";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border-radius: 12px;
  padding: 12px;
  position: relative;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg};
`;

const PostOptions = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: absolute;
  top: 45px;
  right: 30px;
  border-radius: 12px;
`;

const PostOption = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.bgSoft};
  font-size: 13px;
  font-weight: bold;

  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bgSoft};
  }
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

const Time = styled.span`
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
  margin-top: 20px;
  width: fit-content;
`;

const PostDescription = styled.pre`
  font-size: 13.5px;
  width: 100%;
`;

const SeeMore = styled.span`
  font-weight: bold;
  cursor: pointer;
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

const ModalWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const ModalSection1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 20px;
  }
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
  padding: 3px;
`;

const ModalSection2 = styled.div`
  height: 10%;
`;

const ModalImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin: 0;
  margin-bottom: 20px;
`;

const Comments = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const DeleteModalWrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const DeleteModalSpan = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const DeleteModalButtons = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
`;

const DeleteModalButton = styled.div`
  padding: 10px 20px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  &:first-child {
    background-color: blue;
  }
  &:last-child {
    background-color: red;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const Post = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postOptionOpen, setPostOptionOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };
  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const [descOpen, setDescOpen] = useState(false);

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

  const { darkmode } = useContext(DarkmodeContext);
  const dispatch = useDispatch();
  const [postOwnerData, setPostOwnerData] = useState(null);
  const userInfo = useSelector((state) => state.user.userInfo);
  const comments = useSelector((state) => state.comment.commentData);

  const handleDescToggle = () => {
    setDescOpen(!descOpen);
  };

  const getPostOwner = async () => {
    dispatch(postStart());
    try {
      const res = await axiosInstance.get(`/users/${data.userId}`, {
        withCredentials: true,
      });
      setPostOwnerData(res.data);
      dispatch(postSuccess());
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(postRejected());
    }
  };

  useEffect(() => {
    getPostOwner();
  }, [data]);

  const handleClickAway = () => {
    setPostOptionOpen(false);
  };

  const handlePostDelete = async (id) => {
    dispatch(postStart());
    try {
      await axiosInstance.delete(`/posts/${id}`, { withCredentials: true });
      dispatch(deletePostSuccess(id));
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(postRejected());
    }
  };

  const handleLikePost = async (id) => {
    dispatch(postStart());
    try {
      await axiosInstance.put(`/users/likePost/${id}`, "", {
        withCredentials: true,
      });
      dispatch(likePostSuccess({ postId: id, userId: userInfo._id }));
      setLiked(true);
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(postRejected());
    }
  };

  const handleUnlikePost = async (id) => {
    dispatch(postStart());
    try {
      await axiosInstance.put(`/users/unlikePost/${id}`, "", {
        withCredentials: true,
      });
      dispatch(unlikePostSuccess({ postId: id, userId: userInfo._id }));
      setLiked(false);
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(postRejected());
    }
  };

  useEffect(() => {
    data.likes.includes(userInfo._id) ? setLiked(true) : setLiked(false);
  }, [data]);

  const getComments = async () => {
    dispatch(postStart());
    try {
      const res = await axiosInstance.get(`/comments/${data._id}`, {
        withCredentials: true,
      });
      dispatch(getCommentsSuccess(res.data));
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(postRejected());
    }
  };

  useEffect(() => {
    getComments();
  }, [data]);

  return (
    <Container>
      {/* THE POST CONTAINER IS DIVIDED INTO THREE PARTS: THE TOP, THE MIDDLE AND THE BOTTOM */}
      {/* THIS IS THE TOP SECTION, IT CONTAINS THE PROFILE INFO OF THE POST OWNER */}
      <Top>
        <TopLeft>
          <ProfilePic
            src={postOwnerData?.profilePic ? postOwnerData.profilePic : Ayomide}
            alt="profile picture"
          />
          <ProfileInfo>
            <ProfileName>
              {postOwnerData?.firstName} {postOwnerData?.lastName}
            </ProfileName>
            <Time>{moment(data.createdAt).fromNow()}</Time>
          </ProfileInfo>
        </TopLeft>
        <MoreHorizOutlinedIcon
          style={{ fontSize: "18px", cursor: "pointer" }}
          onClick={() => setPostOptionOpen(!postOptionOpen)}
        />
      </Top>
      {postOptionOpen && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <PostOptions>
            <PostOption onClick={() => setEdit(true)}>Edit Post</PostOption>
            <PostOption onClick={handleDeleteModalOpen}>Delete Post</PostOption>
          </PostOptions>
        </ClickAwayListener>
      )}

      {/* THIS IS THE MIDDLE SECTION, IT CONTAINS THE POST IMAGE
      THE POST DESCRIPTION AND THE HASHTAGS */}
      <Middle>
        {data?.fileUrl && <PostImage src={data.fileUrl} alt="post image" />}
        <PostDesc onClick={handleDescToggle}>
          {data?.postDesc && (
            <Desc>
              {data.postDesc.length <= 187 || descOpen ? (
                <PostDescription>{data.postDesc}</PostDescription>
              ) : (
                <PostDescription>
                  {data.postDesc.slice(0, 187)}...<SeeMore>See more</SeeMore>
                </PostDescription>
              )}
            </Desc>
          )}
        </PostDesc>
      </Middle>

      {/* THIS IS THE BOTTOM SECTION, IT CONTAINS LIKE, COMMENT, AND SAVED */}
      <Bottom>
        <Items>
          <ItemsLeft>
            {liked ? (
              <Item>
                <FavoriteIcon
                  onClick={() => handleUnlikePost(data._id)}
                  style={{ fontSize: "25px", color: "red" }}
                />
                {data?.likes.length}
              </Item>
            ) : (
              <Item>
                <FavoriteBorderOutlinedIcon
                  onClick={() => handleLikePost(data._id)}
                  style={{ fontSize: "25px" }}
                />
                {data?.likes.length}
              </Item>
            )}
            <Item>
              <CommentOutlinedIcon style={{ fontSize: "21px" }} />
              {comments?.length}
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
                style={{ fontSize: "24px" }}
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
          sx={{ ...style, width: "50%", height: "80%" }}
          style={{
            backgroundColor: darkmode ? "#202020" : "white",
            border: darkmode ? "1px solid #181818" : "1px solid #f5f5f0",
            borderRadius: "12px",
            display: "flex",
            color: darkmode ? "white" : "black",
            marginTop: "20px",
          }}
        >
          <ModalWrapper>
            <ModalSection1>
              <Top
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "999",
                  padding: "5px 10px",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              >
                <TopLeft>
                  <ProfilePic
                    src={
                      postOwnerData?.profilePic
                        ? postOwnerData.profilePic
                        : Ayomide
                    }
                    alt="profile picture"
                  />
                  <ProfileInfo>
                    <ProfileName>
                      {postOwnerData?.firstName} {postOwnerData?.lastName}
                    </ProfileName>
                    <Time>{moment(data.createdAt).fromNow()}</Time>
                  </ProfileInfo>
                </TopLeft>
                <IconButton onClick={handleModalClose}>
                  <CloseOutlined />
                </IconButton>
              </Top>
              {data.postDesc && (
                <PostDescription
                  style={{ padding: "10px", marginBottom: "5px" }}
                >
                  {data.postDesc}
                </PostDescription>
              )}
              {data.fileUrl && (
                <ModalImage src={data.fileUrl} alt="Modal Image" />
              )}

              <Items style={{ padding: "0px 10px" }}>
                <ItemsLeft>
                  {liked ? (
                    <Item>
                      <FavoriteIcon
                        onClick={() => handleUnlikePost(data._id)}
                        style={{ fontSize: "25px", color: "red" }}
                      />
                      {data?.likes.length}
                    </Item>
                  ) : (
                    <Item>
                      <FavoriteBorderOutlinedIcon
                        onClick={() => handleLikePost(data._id)}
                        style={{ fontSize: "25px" }}
                      />
                      {data?.likes.length}
                    </Item>
                  )}
                  <Item>
                    <CommentOutlinedIcon style={{ fontSize: "21px" }} />
                    {comments?.length}
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
                      style={{ fontSize: "24px" }}
                    />
                  )}
                </ItemsRight>
              </Items>

              <Comments>
                {comments?.map((comment) => {
                  return <Comment key={comment._id} data={comment} />;
                })}
              </Comments>
            </ModalSection1>
            <ModalSection2>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Add Comment"
                  onClick={handleModalOpen}
                  // style={{ paddingBottom: "0px" }}
                />
              </InputContainer>
            </ModalSection2>
          </ModalWrapper>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
      <Modal
        open={deleteModalOpen}
        onClose={handleDeleteModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: "40%", height: "40%" }}
          style={{
            backgroundColor: darkmode ? "#202020" : "white",
            border: darkmode ? "1px solid #181818" : "1px solid #f5f5f0",
            borderRadius: "12px",
            display: "flex",
            color: darkmode ? "white" : "black",
          }}
        >
          <DeleteModalWrapper>
            <DeleteModalSpan>
              Are you sure you want to delete this post?
            </DeleteModalSpan>
            <DeleteModalButtons>
              <DeleteModalButton onClick={() => handlePostDelete(data._id)}>
                Yes
              </DeleteModalButton>
              <DeleteModalButton onClick={handleDeleteModalClose}>
                No
              </DeleteModalButton>
            </DeleteModalButtons>
          </DeleteModalWrapper>
        </Box>
      </Modal>

      {edit && (
        <CreatePost
          edit={edit}
          postData={data}
          postOwner={postOwnerData}
          setEdit={setEdit}
        />
      )}
    </Container>
  );
};

export default Post;
