import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import sidebarStatus from './slices/sidebarStatus';
import second from './slices/second';
import first from './slices/first';
import third from './slices/third';


export const store = configureStore({
  reducer: {
    status: sidebarStatus,
    firstStatus: first,
    secondStatus: second,
    thirdStatus: third,
  },
  middleware: [
    ...getDefaultMiddleware({
        serializableCheck: false
    }),
],
});