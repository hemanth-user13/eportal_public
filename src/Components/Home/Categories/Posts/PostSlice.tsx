import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {  PostProps } from "./type";

const USERPOSTURL = "https://e-portal-json-server.onrender.com/userpost";
// const USERLIKES="http://localhost:8001/UserLikes";

export const fetchUserpostData = createAsyncThunk(
  "Users/UserPosts",
  async () => {
    const response = await axios.get<PostProps[]>(USERPOSTURL);
    return response.data;
  }
);

// export const FtechUserLikes=createAsyncThunk(
//   "User/LikesData",
//   async()=>{
//     const response=await axios.get<PostLikeProps[]>(USERLIKES)
//     console.log("the likes data is",response.data)
//     return response.data;
//   }
// )

interface PostState {
  data: PostProps[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  data: [],
  loading: false,
  error: null,
};

const PostSlice = createSlice({
  name: "userpost",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserpostData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserpostData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserpostData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "failed to fetch the data";
      });
  },
});




export default PostSlice.reducer;
