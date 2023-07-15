import { configureStore } from "@reduxjs/toolkit"
import blogReducer from "../features/blogSlice"
import authReducer from "../features/authSlice"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from "redux-persist/es/storage"

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)
const store=configureStore({
  reducer:{
    blog:blogReducer,
    auth:persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== "production",
})
export const persistor = persistStore(store)
export default store