import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import ImageIcon from "../img/image.png";
import SmileIcon from "../img/smile.png";

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
    background-color: lightgray;
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

const CreatePost = () => {
  return (
    <Container>
      <Top>
        <ProfileImage src={Ayomide} alt="profile image" />
        <InputContainer>
          <Input type="text" placeholder="Share your thoughts" />
        </InputContainer>
      </Top>
      <Divider />
      <Bottom>
        <BottomItem>
          <PhotoIcon src={ImageIcon} alt="Image icon" />
          Photo/video
        </BottomItem>
        <BottomItem>
          <FeelingIcon src={SmileIcon} alt="Image icon" />
          Feeling/activity
        </BottomItem>
      </Bottom>
    </Container>
  );
};

export default CreatePost;
