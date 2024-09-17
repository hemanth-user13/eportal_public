import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./Components/Home/Categories/Posts/PostSlice";
import PostLikeSlice from "./Components/Home/Categories/Posts/PostLikeSlice";

export const store = configureStore({
  reducer: {
    posts:PostSlice,
    Likes:PostLikeSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
