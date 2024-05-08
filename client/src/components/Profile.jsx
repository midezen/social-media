import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin-right: 30px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const TopTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 7px;
  cursor: pointer;
`;

const Span1 = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Span2 = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const TopBottom = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const TopBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-left: 7px;
`;

const Span3 = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Span4 = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <Link
      to={`/profile/${userInfo._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Container>
        <Top>
          <TopTop>
            <Image
              src={userInfo.profilePic ? userInfo.profilePic : Ayomide}
              alt="profilePic"
            />
            <Span1>
              {userInfo.firstName} {userInfo.lastName}
            </Span1>
            <Span2>
              {userInfo.Province}, {userInfo.Country}
            </Span2>
          </TopTop>
          <TopBottom>
            <TopBottomItem>
              <Span3>{userInfo.posts.length}</Span3>
              <Span4>Posts</Span4>
            </TopBottomItem>
            <TopBottomItem>
              <Span3>{userInfo.followers.length} </Span3>
              <Span4>Followers</Span4>
            </TopBottomItem>
            <TopBottomItem>
              <Span3>{userInfo.following.length} </Span3>
              <Span4>Following</Span4>
            </TopBottomItem>
          </TopBottom>
        </Top>
      </Container>
    </Link>
  );
};

export default Profile;
