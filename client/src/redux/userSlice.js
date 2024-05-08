import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loading: false,
    error: false,
  },
  reducers: {
    Start: (state) => {
      state.loading = true;
    },
    Success: (state) => {
      state.loading = false;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.userInfo = action.payload;
    },
    logoutSuccess: (state) => {
      state.userInfo = null;
      state.loading = false;
      state.error = false;
    },
    Rejected: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { Rejected, Start, Success, loginSuccess, logoutSuccess } =
  userSlice.actions;
export default userSlice.reducer;
