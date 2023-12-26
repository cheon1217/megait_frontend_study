import React, { memo, useCallback } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";

const TopContainer = styled.div`
    form {
        background-color: #fff;
        display: flex;
        align-content: center;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding: 10px 0;
        margin: 0;
        margin-bottom: 20px;

        input, button {
            display: block;
            margin-right: 5px;
            font-size: 16px;
            padding: 5px 10px;
        }

        input {
            flex: none;
        }

        button {
            width: 70px;
            flex: none;
        }
    }
`;

const Top = memo(() => {
    /** 페이지 이동을 수행하는 함수 생성 */
    // 페이지 이동, queryString 형식의 변수 전달 기능을 수행할 수 있다.
    const navigate = useNavigate();

    /** QueryString 변수를 추출 */
    const { sd, ed, filter } = useQueryString();
    console.group("Top.js");
    console.log(`sd=${sd}, ed=${ed}, filter=${filter}`);
    console.groupEnd();

    /** 입력폼의 submit 이벤트 */
    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 자기 자신 --> 여기서는 <form>태그 자체
        const current = e.currentTarget;

        // <form> 태그 하위의 <input>태그는 <input>에 부여된 name값을 통해 접근
        const sd = current.startDate.value;
        const ed = current.endDate.value;
        const filter = current.filter.value;
        console.log("시작일: %s, 종료일: %s, filter", sd, ed, filter);

        // 페이지 이동
        navigate(`/?filter=${filter}&sd=${sd}&ed=${ed}`);
    }, []);

    return (
        <TopContainer>
            <h1>Covid19 현황</h1>

            <form onSubmit={onSearchSubmit}>
                <input type="hidden" name="filter" defaultValue={filter} />
                <input type="date" name="startDate" defaultValue={sd} />
                ~
                <input type="date" name="endDate" defaultValue={ed} />
                <button type="submit">검색</button>
            </form>
        </TopContainer>
    );
});

export default Top;