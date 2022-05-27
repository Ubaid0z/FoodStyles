import {configureStore} from '@reduxjs/toolkit';

import {combineReducers} from 'redux';

import LoadingSlice from './slices/LoadingSlice';

const reducer = combineReducers({
  LoadingSlice,
});

const store = configureStore({
  reducer,
});

export default store;
