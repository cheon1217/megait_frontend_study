import React from "react";

import MyPropTypesSub from "../components/MyPropTypesSub";

import Meta from "../Meta";

const MyPropTypes = () => {
    return (
        <div>
            {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다. */}
            <Meta title="MyPropTypes.js" description="여기는 MyPropTypes.js 파일 입니다." />

            <h2>MyPropTypes</h2>

            {/* 문자열이 아닌 형식은 {}로 감싼다. */}
            <MyPropTypesSub name="민호" age={19} hobby="사진찍기" /> 
            <MyPropTypesSub name="수영" age="스물한살" hobby="영화보기" /> 
            <MyPropTypesSub name="철민" age={21} /> 
        </div>
    );
};

export default MyPropTypes;