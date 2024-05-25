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
    deletePostSuccess: (state, action) => {
      const getIndex = state.postData.findIndex(
        (item) => item._id === action.payload
      );
      if (getIndex !== -1) {
        state.postData.splice(getIndex, 1);
      }
      state.postLoading = false;
      state.postError = false;
    },
    likePostSuccess: (state, action) => {
      const Post = state.postData.find(
        (post) => post._id === action.payload.postId
      );
      if (Post) {
        !Post.likes.includes(action.payload.userId) &&
          Post.likes.push(action.payload.userId);
      }
      state.postLoading = true;
      state.postError = false;
    },
    unlikePostSuccess: (state, action) => {
      const Post = state.postData.find(
        (post) => post._id === action.payload.postId
      );

      if (Post) {
        if (Post.likes.includes(action.payload.userId)) {
          const getIndex = Post.likes.indexOf(action.payload.userId);
          getIndex !== -1 && Post.likes.splice(getIndex, 1);
        }
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
  deletePostSuccess,
  likePostSuccess,
  unlikePostSuccess,
} = postSlice.actions;
export default postSlice.reducer;
