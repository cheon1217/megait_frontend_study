import React, { memo } from "react";

import Meta from "@/components/Meta";

const hello = memo((props) => {

    console.log(props);

    return (
        <div>
            <Meta title="여기는 hello.js 입니다." />

            <h1>hello</h1>

            <h2>여기는 hello.js 입니다.</h2>

            <p>
                이 페이지는 <b>{props.from}</b>에서 실행되었습니다.
            </p>

            <ul>
                <li>num1={props.num1}</li>
                <li>num2={props.num2}</li>
            </ul>
        </div>
    );
});

// 모든 pages폴더 내의 함수들은 getInitialProps 라는 하위 함수를 갖는다.
// 이 함수를 통해 각 페이지가 웹 프로그램으로 동작할 수 있는 기능을 넘겨받는다.
hello.getInitialProps = async (props) => {

    // URL에 포함되는 QueryString 변수는 이 위치에서 판별한다.
    console.group("getInitialProps");
    console.log(props);
    console.groupEnd();

    let from = "front";

    // 백엔드에서 동작할 경우 props 안에 req 객체가 포함된다.
    // 이 객체는 일반 Node.js의 HTTPServer 객체와 같은 역할을 수행한다.
    if (props.req) {
        from = "backend";
    }

    // 이 리턴값이 JSX 컴포넌트의 props로 전달된다.
    return {
        ...props.query,
        from: from
    }
}

export default hello;