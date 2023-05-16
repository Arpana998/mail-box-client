import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalShown: false,
    to: "",
    subject: "",
    bodyHTML: "",
    id: "",
    from: "",
  },
  reducers: {
    modalHandler(state) {
      // console.log("insideSlice");
      state.modalShown = !state.modalShown;
    },
    emailDataToShow(state, action) {
      // console.log("insideSlice");
      state.to = action.payload.to;
      state.subject = action.payload.subject;
      state.bodyHTML = action.payload.bodyHTML;
      state.id = action.payload.id;
      state.from = action.payload.from;
    },
    // readStatusHandler(state) {
    //   state.emailReadStatus = true;
    // },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
