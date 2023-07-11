// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';

const store = configureStore({
  reducer: {
    counterReducer: counterSlice
  },
});

export default store;
