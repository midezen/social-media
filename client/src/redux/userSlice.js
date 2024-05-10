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

    updateUserSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
      state.error = false;
    },

    addFriendSuccess: (state, action) => {
      state.userInfo.sentRequests.push(action.payload);
      state.loading = false;
      state.error = false;
    },

    cancelSentRequestSuccess: (state, action) => {
      const getIndex = state.userInfo.sentRequests.indexOf(action.payload);
      if (getIndex !== -1) {
        state.userInfo.sentRequests.splice(getIndex, 1);
      }
      state.loading = false;
      state.error = false;
    },

    acceptRequestSuccess: (state, action) => {
      const getIndex = state.userInfo.friendRequests.indexOf(action.payload);
      if (getIndex !== -1) {
        state.userInfo.friendRequests.splice(getIndex, 1);
      }
      state.userInfo.friends.push(action.payload);
      state.loading = false;
      state.error = false;
    },

    deleteRequestSuccess: (state, action) => {
      const getIndex = state.userInfo.friendRequests.indexOf(action.payload);
      if (getIndex !== -1) {
        state.userInfo.friendRequests.splice(getIndex, 1);
      }
      state.loading = false;
      state.error = false;
    },

    unfriendSuccess: (state, action) => {
      const getIndex = state.userInfo.friends.indexOf(action.payload);
      if (getIndex !== -1) {
        state.userInfo.friends.splice(getIndex, 1);
      }
      // state.loading = false;
      // state.error = false;
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

export const {
  Rejected,
  Start,
  Success,
  loginSuccess,
  logoutSuccess,
  updateUserSuccess,
  addFriendSuccess,
  cancelSentRequestSuccess,
  acceptRequestSuccess,
  deleteRequestSuccess,
  unfriendSuccess,
} = userSlice.actions;
export default userSlice.reducer;
