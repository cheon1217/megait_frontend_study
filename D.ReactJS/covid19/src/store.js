import Covid19Slice from './slices/Covid19Slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
   reducer: {
       Covid19Slice: Covid19Slice
   },
   // 비동기 미들웨어 추가 (Ajax처리가 필요한 경우만 설정)
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
export default store;
