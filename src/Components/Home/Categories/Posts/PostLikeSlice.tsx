import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PostLikeProps } from "./type";
import { fetchUserpostData } from "./PostSlice";

const USERLIKES="http://localhost:8001/UserLikes";

export const FetchUserLikes=createAsyncThunk(
    "User/LikesData",
    async()=>{
      const response=await axios.get<PostLikeProps[]>(USERLIKES)
      console.log("the likes data is",response.data)
      return response.data;
    }
  )


interface PostLike{
    data:PostLikeProps[];
    loading:boolean;
    error:string | null;
  }

const initialState:PostLike={
    data:[],
    loading:false,
    error:null
}

const PostLikeSlice=createSlice({
    name:"LikeData",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(FetchUserLikes.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(FetchUserLikes.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        .addCase(fetchUserpostData.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message || "failed to fetch the data"
        })
    }
})

export default PostLikeSlice.reducer;