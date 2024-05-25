import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentData: null,
    commentLoading: false,
    commentError: false,
  },
  reducers: {
    commentStart: (state) => {
      state.commentLoading = true;
    },
    commentRejected: (state) => {
      state.commentLoading = false;
      state.commentError = true;
    },
    commentSuccess: (state) => {
      state.commentLoading = false;
      state.commentError = false;
    },
    getCommentsSuccess: (state, action) => {
      state.commentData = action.payload;
      state.commentLoading = false;
      state.commentError = false;
    },
  },
});

export const {
  commentStart,
  commentRejected,
  getCommentsSuccess,
  commentSuccess,
} = commentSlice.actions;

export default commentSlice.reducer;
