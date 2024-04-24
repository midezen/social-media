import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  width: 100%;
`;

const Top = styled.div``;

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
`;

const Profile = () => {
  return (
    <Container>
      <Top>
        <Wrapper></Wrapper>
      </Top>
    </Container>
  );
};

export default Profile;
