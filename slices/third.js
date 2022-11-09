import { createSlice } from "@reduxjs/toolkit";


export const statusSlice = createSlice({
  name:"thirdStatus",
  initialState: { value: true },
  reducers: {
    updateThird: (state, action) => {
      state.value =action.payload;
    }
  },
});

export const { updateThird } = statusSlice.actions;
export default statusSlice.reducer;
