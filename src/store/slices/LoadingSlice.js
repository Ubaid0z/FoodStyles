import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Login} from './auth';

export const LoadingSlice = createSlice({
  name: 'LoadingSlice',
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: state => {
      state.loading = true;
    },
    hideLoading: state => {
      state.loading = false;
    },
  },
  extraReducers: builder => {},
});

export const {showLoading, hideLoading} = LoadingSlice.actions;

export default LoadingSlice.reducer;
