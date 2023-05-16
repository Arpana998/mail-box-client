import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sent: {},
  inbox: {},
  recyclebin: {},
};
const emailSlice = createSlice({
  name: "mails",
  initialState: initialState,
  reducers: {
    sentEmailHandler(state, action) {
      state.sent[action.payload.id] = action.payload.inputDetails;
      // console.log({ ...state.sent });
    },
    addToRecycleBin(state, action) {
      state.recyclebin[action.payload] =
        state.sent[action.payload] || state.inbox[action.payload];
      // console.log("item added to recycle bin");
      // console.log({ ...state });
    },
    replaceHandler(state, action) {
      if (action.payload) {
        state.sent = action.payload.sent || {};
        state.inbox = action.payload.inbox || {};
        state.recyclebin = action.payload.recyclebin || {};
      }
    },
    deleteMail(state, action) {
      if (state.sent[action.payload]) {
        delete state.sent[action.payload];
      } else if (state.inbox[action.payload]) {
        delete state.inbox[action.payload];
      }
      // } else {
      //   delete state.recyclebin[action.payload];
      // }
    },
    readEmailHandler(state, action) {
      state.inbox[action.payload].isRead = true;
    },
  },
});
export const emailActions = emailSlice.actions;
export default emailSlice;
