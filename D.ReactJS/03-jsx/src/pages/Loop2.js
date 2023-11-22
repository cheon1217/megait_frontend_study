import React from "react";

/**
 * jsx 반복처리 (2) - map() 함수를 사용한 배열 원소 탐색
 */
const Loop2 = () => {
    // 화면에 표시할 데이터
    const myArray = ["hello", "world"];

    // 화면에 표시할 반복 컴포넌트
    const myArrayItem = myArray.map((item, index) => { return <li key={index}>{item}</li>});

    console.log(myArrayItem);

    return (
        <div>
            <h1>Loop2 페이지</h1>
            <ul>{myArrayItem}</ul>
        </div>
    );
};

export default Loop2;