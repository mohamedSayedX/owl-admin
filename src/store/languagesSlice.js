import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../API/axiosInstance";

// Create an async thunk for fetching data
export const getLanguages = createAsyncThunk("data/langs", async (endpoint) => {
  return
  const response = await axiosInstance.get(`<your endpoint there>`);
  return response.data;
});

const languagesSlice = createSlice({
  name: "language",
  initialState: {
    languages: [],
    status: "idle", // or 'loading', 'succeeded', 'failed'
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getLanguages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLanguages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.languages = action.payload;
      })
      .addCase(getLanguages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default languagesSlice.reducer;
