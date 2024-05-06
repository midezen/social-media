import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    loading: false,
    error: false,
  },
  reducers: {
    Start: (state) => {
      state.loading = true;
    },
    registerSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.userInfo = action.payload;
    },
    Rejected: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { Rejected, Start, registerSuccess, loginSuccess } =
  userSlice.actions;
export default userSlice.reducer;
