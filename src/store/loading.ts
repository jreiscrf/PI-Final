import { createSlice } from "@reduxjs/toolkit";

export const Loading = createSlice({
  name: "loading",
  initialState: {
    isLoading: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = Loading.actions;
export default Loading.reducer;
