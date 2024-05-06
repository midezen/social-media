import { loginSuccess, registerSuccess } from "../../redux/userSlice";

import { axiosInstance } from "../axiosConfig";

export const registerUser = async (userInfo, dispatch, navigate) => {
  await axiosInstance.post("/auth/register", userInfo);
  dispatch(registerSuccess());
  navigate("/login");
};

export const loginUser = async (userInfo, dispatch, navigate) => {
  const res = await axiosInstance.post("/auth/login", userInfo);
  dispatch(loginSuccess(res.data));
  navigate("/");
};
