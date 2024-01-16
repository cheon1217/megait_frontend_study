import React, { memo } from "react";

const world = memo(({num1, num2, from}) => {
    return (
        <div>
            <h1>world</h1>

            <h2>여기는 world.js 입니다.</h2>

            <p>
                이 페이지는 <b>{from}</b>에서 실행되었습니다.
            </p>

            <ul>
                <li>num1={num1}</li>
                <li>num2={num2}</li>
            </ul>
        </div>
    );
});

world.getInitialProps = async (props) => {

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

export default world;