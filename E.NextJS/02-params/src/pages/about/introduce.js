/**
 * Next.js의 Auto Route를 확인하는 용도의 샘플 파일
 *  --> 폴더구조가 URL이 된다.
 * 각 컴포넌트의 구성방법은 React.js와 완벽하게 일치한다.
 * --> styledComponent, event 처리, hook 사용 등
 */

import React, { memo, useCallback, useState } from "react";

const introduce = memo(() => {

    const [msg, setMsg] = useState('');

    const onMsgChange = useCallback((e) => {
        setMsg(e.currentTarget.value);
    }, []);

    return (
        <div>
            <h1>introduce</h1>
            <div>
                <input type="text" value={msg} onChange={onMsgChange} />
            </div>
            <div>
                <p>{msg}</p>
                <p>{msg}</p>
                <p>{msg}</p>
                <p>{msg}</p>
                <p>{msg}</p>
            </div>
        </div>
    );
});

export default introduce;