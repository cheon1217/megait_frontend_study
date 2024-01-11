import WomanSlice from './slices/WomanSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
   reducer: {
       WomanSlice: WomanSlice
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
export default store;
