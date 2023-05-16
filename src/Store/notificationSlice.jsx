import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notification",
  initialState: { displayNotification: false, message: "", status: "" },
  reducers: {
    display(state, action) {
      state.displayNotification = true;
      state.message = action.payload.message;
      state.status = action.payload.status;
    },
    hideDisplay(state) {
      state.displayNotification = false;
      state.message = "";
      state.status = "";
    },
  },
});

export const notifyActions = notifySlice.actions;

export default notifySlice;
