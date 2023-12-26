import { configureStore } from '@reduxjs/toolkit';
import StudentSlice from './slices/StudentSlice';

const store = configureStore({
   reducer: {
       StudentSlice: StudentSlice
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export default store;
