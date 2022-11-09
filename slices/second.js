import { createSlice } from "@reduxjs/toolkit";


export const statusSlice = createSlice({
  name:"secondStatus",
  initialState: { value: true },
  reducers: {
    updateSecond: (state, action) => {
      state.value =action.payload;
    }
  },
});

export const { updateSecond } = statusSlice.actions;
export default statusSlice.reducer;
