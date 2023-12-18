import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import DepartmentSlice from "./slices/DepartmentSlice";
import NewsSlice from "./slices/NewsSlice";

const store = configureStore({
    // 개발자가 직접 작성한 Slice 오브젝트들이 명시되어야한다.
    reducer: {
        CounterSlice: CounterSlice,
        DepartmentSlice: DepartmentSlice,
        NewsSlice: NewsSlice
    },
    // 비동기 미들웨어 추가 (Ajax처리가 필요한 경우만 설정)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export default store;