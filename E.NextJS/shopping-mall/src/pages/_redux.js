/** Redux 메인 구성 파일 */
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

// 직접 정의한 Slice 파일 import


const rootReducer = (state, action) => {
    // 백엔드 모드에서의 데이터를 프론트엔드 모드에 통합함
    if (action.type == HYDRATE) {
        return {...action.payload};
    }

    const reducer = combineReducers({
        // import한 Slice들을 콤마로 구분하여 나열 (JSON아님)
        
    });

    return reducer(state, action);
};

// Next.js에서 추가된 내용 --> 기존의 store객체를 리턴하는 함수
const makeStore = () => {
    return configureStore({
        // 개발자가 직접 작성한 Slice 오브젝트
        reducer: rootReducer,
        // 비동기 작업을 위한 미들웨어 추가(Ajax용)
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false }),
    });
};

// store를 리턴하는 함수를 createWrapper()함수에 전달후 리턴되는 객체를 export
const wrapper = createWrapper(makeStore, {
    // 실행 과정을 콘솔에 출력할지 여부
    debug: true
});

export default wrapper;