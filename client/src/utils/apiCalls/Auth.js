import { loginSuccess, Success, logoutSuccess } from "../../redux/userSlice";

import { axiosInstance } from "../axiosConfig";

export const registerUser = async (userInfo, dispatch, navigate) => {
  await axiosInstance.post("/auth/register", userInfo);
  dispatch(Success());
  navigate("/");
};

export const loginUser = async (userInfo, dispatch, navigate) => {
  const res = await axiosInstance.post("/auth/login", userInfo, {
    withCredentials: true,
  });
  dispatch(loginSuccess(res.data));
  navigate("/");
};

export const logoutUser = async (dispatch) => {
  await axiosInstance.post("/auth/logout", "", { withCredentials: true });
  dispatch(logoutSuccess());
};
