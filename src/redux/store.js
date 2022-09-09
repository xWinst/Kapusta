import { configureStore } from '@reduxjs/toolkit';
import something from './reducers';

const store = configureStore({
  reducer: something,
});

export default store;
