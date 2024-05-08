import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Rejected, Start, updateUserSuccess } from "../redux/userSlice";
import { axiosInstance } from "../utils/axiosConfig";

const TopSpan = styled.span`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalText = styled.span`
  font-size: 13px;
`;

const InputContainer = styled.div`
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  display: flex;
  padding: 7px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: 0;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea`
  display: flex;
  padding: 7px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: 0;
  color: ${({ theme }) => theme.text};
  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
  }
`;

const UpdateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UpdateButton = styled.button`
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.spT};
  color: white;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const EditProfile = ({ setModalOpen }) => {
  const { userInfo, loading } = useSelector((state) => state.user);
  const [updatedUser, setUpdatedUser] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    userName: userInfo.userName,
    email: userInfo.email,
    password: userInfo.password,
    mobileNo: userInfo.mobileNo,
    province: userInfo.province,
    country: userInfo.country,
    about: userInfo.about,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdatedUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUserUpdate = async () => {
    dispatch(Start());
    try {
      const res = await axiosInstance.put(
        `/users/${userInfo._id}`,
        updatedUser,
        { withCredentials: true }
      );
      dispatch(updateUserSuccess(res.data));
      setModalOpen(false);
    } catch (err) {
      if (err.response.status === 500) {
        alert("server/network error");
      } else {
        alert(err.response.data);
      }
      dispatch(Rejected());
    }
  };

  return (
    <>
      <TopSpan>Edit Profile</TopSpan>
      <ModalGrid>
        <ModalItem>
          <ModalText>First Name</ModalText>
          <InputContainer>
            <Input
              type="text"
              placeholder={updatedUser.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </InputContainer>
        </ModalItem>
        <ModalItem>
          <ModalText>Last Name</ModalText>
          <InputContainer>
            <Input
              type="text"
              placeholder={updatedUser.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </InputContainer>
        </ModalItem>

        <ModalItem>
          <ModalText>Username</ModalText>
          <InputContainer>
            <Input
              type="text"
              placeholder={updatedUser.userName}
              name="userName"
              onChange={handleChange}
            />
          </InputContainer>
        </ModalItem>
        <ModalItem>
          <ModalText>Email Address</ModalText>
          <InputContainer>
            <Input
              type="email"
              placeholder={updatedUser.email}
              name="email"
              onChange={handleChange}
            />
          </InputContainer>
        </ModalItem>
        <ModalItem>
          <ModalText>Password</ModalText>
          <InputContainer>
            <Input
              type="password"
              placeholder={updatedUser.password}
              name="password"
              onChange={handleChange}
            />
          </InputContainer>
        </ModalItem>
        <ModalItem>
          <ModalText>Mobile Number</ModalText>
          <InputContainer>
            <Input
              type="text"
              placeholder={updatedUser.mobileNo}
              name="mobileNo"
              onChange={handleChange}
            />
          </InputContainer>
        </ModalItem>

        <ModalItem>
          <ModalText>Province</ModalText>
          <InputContainer>
            <Input
              type="text"
              placeholder={updatedUser.province}
              name="province"
              onChange={handleChange}
            />
          </InputContainer>
        </ModalItem>
        <ModalItem>
          <ModalText>Country</ModalText>
          <InputContainer>
            <Input
              type="text"
              placeholder={updatedUser.country}
              name="country"
              onChange={handleChange}
            />
          </InputContainer>
        </ModalItem>
      </ModalGrid>
      <ModalItem>
        <ModalText>About</ModalText>
        <InputContainer>
          <TextArea
            rows="3"
            maxLength="150"
            cols="120"
            placeholder={updatedUser.about}
            name="about"
            onChange={handleChange}
          />
        </InputContainer>
      </ModalItem>
      <UpdateButtonContainer>
        <UpdateButton disabled={loading} onClick={handleUserUpdate}>
          Update
        </UpdateButton>
      </UpdateButtonContainer>
    </>
  );
};

export default EditProfile;
