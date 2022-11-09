import { createSlice } from "@reduxjs/toolkit";


export const statusSlice = createSlice({
  name:"firstStatus",
  initialState: { value: true },
  reducers: {
    updateFirst: (state, action) => {
      state.value =action.payload;
    }
  },
});

export const { updateFirst } = statusSlice.actions;
export default statusSlice.reducer;
