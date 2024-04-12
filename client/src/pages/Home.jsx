import styled from "styled-components";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 30px;
`;

const Middle = styled.div`
  width: 50%;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <HomeLeft />
      <Middle></Middle>
      <HomeRight />
    </Container>
  );
};

export default Home;
