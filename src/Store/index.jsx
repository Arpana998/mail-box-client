import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import emailSlice from "./emailSlice";
import modalSlice from "./modalSlice";
import notifySlice from "./notificationSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    email: emailSlice.reducer,
    modal: modalSlice.reducer,
    notify: notifySlice.reducer,
  },
});

export default store;
