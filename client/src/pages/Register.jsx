import styled from "styled-components";
import fire from "../img/fire.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../utils/apiCalls/Auth";
import { Link, useNavigate } from "react-router-dom";
import { Start, Rejected } from "../redux/userSlice";

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
  width: 80%;
  display: flex;
  gap: 50px;
  align-items: center;
`;
const Left = styled.div`
  align-items: center;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
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
  padding: 40px;
  border-radius: 10px;
  justify-content: center;
`;

const RegisterSpan = styled.span`
  font-weight: bold;
  color: orangered;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  align-items: center;
`;

const FormTop = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const Input = styled.input`
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

  &:disabled {
    cursor: not-allowed;
    background: lightgray;
    color: black;
    opacity: 0.9;
  }
`;

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(Start());
    try {
      await registerUser(userInfo, dispatch, navigate);
    } catch (err) {
      dispatch(Rejected());
      alert(err);
    }
  };
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
          <RegisterSpan>Register</RegisterSpan>
          <Form>
            <FormTop>
              <Input
                type="text"
                placeholder="First Name"
                require
                name="firstName"
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Last Name"
                require
                name="lastName"
                onChange={handleChange}
              />
            </FormTop>

            <Input
              type="email"
              placeholder="Email"
              require
              name="email"
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Username"
              require
              name="userName"
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Password"
              require
              name="password"
              onChange={handleChange}
            />
          </Form>
          <Bottom>
            <Link to="/login" style={{ color: "blue" }}>
              <BottomSpan>Have an account? Click to sign in</BottomSpan>
            </Link>

            <Button disabled={loading} onClick={handleRegister}>
              {loading ? "Loading..." : "Register"}
            </Button>
          </Bottom>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Register;
