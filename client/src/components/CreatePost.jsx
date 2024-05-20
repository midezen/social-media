import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import ImageIcon from "../img/image.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext, useState } from "react";
import { DarkmodeContext } from "../contexts/darkmode";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 20vh;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  font-size: 14px;
`;

const Top = styled.div`
    display: flex;
    align-items; center;
    gap: 10px;
    width: 90%;
    margin:auto;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const InputContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.input};
  color: black;
  flex: 1;
  border-radius: 30px;
  align-items: center;
  padding: 10px;
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

const Divider = styled.hr`
  width: 90%;
  margin: auto;
  margin-top: 10px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto;
`;

const BottomItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 10px;

  &:hover {
    scale: 1.1;
    background-color: ${({ theme }) => theme.bgSoft};
    border-radius: 12px;
  }
`;

const PhotoIcon = styled.img`
  height: 25px;
  width: 25px;
  object-fit: cover;
`;

const FeelingIcon = styled.img`
  height: 25px;
  width: 25px;
  object-fit: cover;
`;

const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  padding-bottom: 0px;
`;

const ModalTopLeft = styled.div``;

const ModalTopCenter = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const ModalTopRight = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgSoft};
  cursor: pointer;
`;

const ModalDivider = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.bgSoft};
  margin-top: -8px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 20px;
  margin-top: -10px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.span`
  font-weight: bolder;
  font-size: 14px;
`;

const ContentCenter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: 0;
  padding: 20px 0px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
    font-weight: bolder;
  }
`;

const AddDisplay = styled.div`
  height: 180px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.bgSoft};
  border-radius: 10px;
`;

const AddDisplayWrapper = styled.div`
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.bgSoft};
  cursor: pointer;
  position: relative;
`;

const Cancel = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 2px;
  width: fit-content;
  height: fit-content;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg};
`;

const AddDisplaySpan = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const AddDisplaySpan2 = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddToPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.bgSoft};
  padding: 5px;
  border-radius: 10px;
`;

const AddToPostSpan = styled.span`
  font-size: 14px;
`;

const ImgIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
`;

const PostButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: white;
  background-color: ${({ theme }) => theme.spT};
  border: none;
  border-radius: 7px;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const CreatePost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showAddDisplay, setShowAddDisplay] = useState(false);
  const { darkmode } = useContext(DarkmodeContext);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleBottomItemClick = () => {
    setModalOpen(true);
    setShowAddDisplay(true);
  };
  return (
    <Container>
      <Top>
        <ProfileImage src={Ayomide} alt="profile image" />
        <InputContainer onClick={handleModalOpen}>
          <Input type="text" placeholder="Share your thoughts" />
        </InputContainer>
      </Top>
      <Divider />
      <Bottom>
        <BottomItem onClick={handleBottomItemClick}>
          <PhotoIcon src={ImageIcon} alt="Image icon" />
          Photo/video
        </BottomItem>
      </Bottom>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: "38%" }}
          style={{
            backgroundColor: darkmode ? "#202020" : "white",
            border: darkmode ? "1px solid #181818" : "1px solid #f5f5f0",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: darkmode ? "white" : "black",
          }}
        >
          <ModalTop>
            <ModalTopLeft></ModalTopLeft>
            <ModalTopCenter>Create post</ModalTopCenter>
            <ModalTopRight onClick={handleModalClose}>
              <CloseOutlinedIcon />
            </ModalTopRight>
          </ModalTop>
          <ModalDivider />
          <ModalContent>
            <UserInfo>
              <ProfilePic src={Ayomide} alt="profilePic" />
              <Name>Ayomide Oluwadiya</Name>
            </UserInfo>

            <ContentCenter>
              <TextArea placeholder="Share your thoughts Ayomide" />
              {showAddDisplay && (
                <AddDisplay>
                  <AddDisplayWrapper>
                    <Cancel onClick={() => setShowAddDisplay(false)}>
                      <CloseOutlinedIcon style={{ fontSize: "20px" }} />
                    </Cancel>
                    <Icon>
                      <AddToPhotosIcon />
                    </Icon>
                    <AddDisplaySpan>Add Photos/Videos</AddDisplaySpan>
                    <AddDisplaySpan2>or drag and drop</AddDisplaySpan2>
                  </AddDisplayWrapper>
                </AddDisplay>
              )}
            </ContentCenter>
            <ContentBottom>
              <AddToPost>
                <AddToPostSpan>Add to your post</AddToPostSpan>
                <ImgIcon
                  src={ImageIcon}
                  alt="image icon"
                  onClick={() => setShowAddDisplay(true)}
                />
              </AddToPost>
              <PostButton>Post</PostButton>
            </ContentBottom>
          </ModalContent>
        </Box>
      </Modal>
    </Container>
  );
};

export default CreatePost;
