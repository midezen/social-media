import { createSlice } from "@reduxjs/toolkit";
import Post from "../../../server/models/Post";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postData: null,
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
    getAllPostsSuccess: (state, action) => {
      state.postData = action.payload;
      state.postLoading = false;
      state.postError = false;
    },
    updatePostSuccess: (state, action) => {
      const Post = state.postData.find(
        (post) => post._id === action.payload._id
      );
      if (Post) {
        Post.postDesc = action.payload.postDesc;
        Post.fileUrl = action.payload.fileUrl;
      }
      state.postLoading = false;
      state.postError = false;
    },
    postRejected: (state) => {
      state.postLoading = false;
      state.postError = true;
    },
  },
});

export const {
  postStart,
  postSuccess,
  postRejected,
  getAllPostsSuccess,
  updatePostSuccess,
} = postSlice.actions;
export default postSlice.reducer;
