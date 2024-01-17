import React, { memo, useEffect, useState } from "react";

const index = memo(() => {
    const [currentURL, setCurrentUrl] = useState('');

    // 이 컴포넌트가 브라우저에 의해 최초로 렌더링 될 때 실행되는 hook 정의
    useEffect(() => {
        // 웹브라우저에 의해 실행될 경우에만 window 객체에 접근 가능하다.
        // (백엔드 모드일 경우에는 window 객체가 없음)
        if (window) {
            setCurrentUrl(window.location.href);
        }
    }, []);

    return (
        <div>
            <h1>여기는 index.js 입니다.</h1>
            <p>{currentURL}</p>
        </div>
    );
});

export default index;