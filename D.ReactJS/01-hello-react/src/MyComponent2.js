// react 기본 패키지 참조(팔수)
import React from "react";

import MySubComponent from "./MySubComponent";

const MyComponent2 = () => {
    return (
        <div>
            <h2>Hello React</h2>
            <p>This is React Component</p>

            <MySubComponent />
            <MySubComponent />
            <MySubComponent />
        </div>
    );
};

export default MyComponent2;