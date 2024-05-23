import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: null,
    postLoading: false,
    postError: false,
  },
  reducers: {
    postStart: (state) => {
      state.postLoading = true;
    },
    postSuccess: (state) => {
      state.postLoading = false;
      state.postError = false;
    },
    postRejected: (state) => {
      state.postLoading = false;
      state.postError = true;
    },
  },
});

export const { postStart, postSuccess, postRejected } = postSlice.actions;
export default postSlice.reducer;
