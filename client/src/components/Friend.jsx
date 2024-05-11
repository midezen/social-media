import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FriendPicture = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

const FriendName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const Friend = ({ data }) => {
  return (
    <Container>
      <FriendPicture
        src={data.profilePic ? data.profilePic : Ayomide}
        alt="Friend's Picture"
      />
      <FriendName>
        {data.firstName} {data.lastName}
      </FriendName>
    </Container>
  );
};

export default Friend;
