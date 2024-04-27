import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Ayomide from "../img/Ayomide 2.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 60%;
  margin: auto;
  margin-top: 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg};
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadingLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FriendsHead = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const FriendsCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: -10px;
  font-weight: bold;
  cursor: pointer;
`;

const HeadingRight = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.spT};
  cursor: pointer;
`;

const SearchContainer = styled.div`
  padding: 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.input};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.text};
`;

const SearchInput = styled.input`
  outline: 0;
  background-color: transparent;
  border: none;
  color: black;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }
`;

const Friends = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const FriendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid ${({ theme }) => theme.bgSoft};
  padding: 8px;
  border-radius: 12px;
`;

const FriendItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const FriendItemRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.hover};
`;

const FriendsComponent = () => {
  return (
    <Container>
      <Heading>
        <HeadingLeft>
          <FriendsHead>Friends</FriendsHead>
          <FriendsCount style={{ marginLeft: "0", fontWeight: "300" }}>
            4,305
          </FriendsCount>
        </HeadingLeft>
        <HeadingRight>
          <SearchContainer>
            <SearchOutlinedIcon style={{ fontSize: "18px" }} />
            <SearchInput type="text" placeholder="Search" />
          </SearchContainer>
        </HeadingRight>
      </Heading>
      <Friends>
        <FriendItem>
          <FriendItemLeft>
            <FriendPicture src={Ayomide} alt="Friend's Picture" />
            <FriendName>Ayomide Oluwadiya</FriendName>
          </FriendItemLeft>
          <FriendItemRight>
            <MoreHorizOutlinedIcon
              style={{ fontSize: "18px", cursor: "pointer" }}
            />
          </FriendItemRight>
        </FriendItem>
        <FriendItem>
          <FriendItemLeft>
            <FriendPicture src={Ayomide} alt="Friend's Picture" />
            <FriendName>Ayomide Oluwadiya</FriendName>
          </FriendItemLeft>
          <FriendItemRight>
            <MoreHorizOutlinedIcon
              style={{ fontSize: "18px", cursor: "pointer" }}
            />
          </FriendItemRight>
        </FriendItem>
        <FriendItem>
          <FriendItemLeft>
            <FriendPicture src={Ayomide} alt="Friend's Picture" />
            <FriendName>Ayomide Oluwadiya</FriendName>
          </FriendItemLeft>
          <FriendItemRight>
            <MoreHorizOutlinedIcon
              style={{ fontSize: "18px", cursor: "pointer" }}
            />
          </FriendItemRight>
        </FriendItem>
        <FriendItem>
          <FriendItemLeft>
            <FriendPicture src={Ayomide} alt="Friend's Picture" />
            <FriendName>Ayomide Oluwadiya</FriendName>
          </FriendItemLeft>
          <FriendItemRight>
            <MoreHorizOutlinedIcon
              style={{ fontSize: "18px", cursor: "pointer" }}
            />
          </FriendItemRight>
        </FriendItem>
      </Friends>
    </Container>
  );
};

export default FriendsComponent;
