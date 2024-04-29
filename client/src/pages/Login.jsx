import styled from "styled-components";
import loginPic from "../img/login_pic.png";
import fire from "../img/fire.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgSoft};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  gap: 50px;
`;
const Left = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const H1 = styled.h1`
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "MORF" 15, "SHLN" 50;
  font-size: 70px;
`;

const LogoSpan = styled.span`
  font-size: 17px;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  padding: 50px;
  border-radius: 10px;
  justify-content: center;
`;

const LoginSpan = styled.span`
  font-weight: bold;
  color: orangered;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.bgSoft};
  outline: 0;
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.text};
`;

const Bottom = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const BottomSpan = styled.span`
  font-size: 12px;
`;

const Button = styled.button`
  background: linear-gradient(to right, red, orange);
  border: none;
  padding: 10px;
  font-size: 12px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <TextInfo>
            <Logo>
              <LogoImage src={fire} alt="fire" />
              <H1>ConnectiVerse</H1>
              <LogoImage src={fire} alt="fire" />
            </Logo>

            <LogoSpan>
              ❤️Bringing the world closer one reaction at a time❤️
            </LogoSpan>
          </TextInfo>
        </Left>
        <Right>
          <LoginSpan>Login</LoginSpan>
          <Form>
            <Input type="text" placeholder="Username" require />
            <Input type="password" placeholder="Password" require />
          </Form>
          <Bottom>
            <Link to="/register" style={{ color: "blue" }}>
              <BottomSpan>
                Don't have an account? <br />
                click here to sign up
              </BottomSpan>
            </Link>
            <Link to="/">
              <Button>Login</Button>
            </Link>
          </Bottom>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Login;
