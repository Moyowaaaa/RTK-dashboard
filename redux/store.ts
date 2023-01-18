import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice';
import baseApi from "./features/baseApiSlice";

export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    auth:authReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
