import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postData: null,
    loading: false,
    error: false,
  },
  reducers: {
    postStart: (state) => {
      state.loading = true;
    },
    postSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },
    postRejected: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { postStart, postSuccess, postRejected } = postSlice.actions;
export default postSlice.reducer;
