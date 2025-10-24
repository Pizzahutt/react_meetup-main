import { createSlice } from "@reduxjs/toolkit";

const meetupsSlice = createSlice({
  name: "meetups",
  initialState: {
    meetups: [],
  },
  reducers: {
    setMeetups(state, action) {
      state.meetups = action.payload;
    },
  },
});

export const { setMeetups } = meetupsSlice.actions;
export default meetupsSlice.reducer;
