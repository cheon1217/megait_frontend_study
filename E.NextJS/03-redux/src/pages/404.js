import React, {memo, useEffect, useState} from "react";
import Meta from "@/components/Meta";
import styled from "styled-components";

// next에서 가져오는 이미지는 JSON형식
// --> {src: 파일경로}
import _404 from '@/images/_404.png';

const PageNotFoundContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: 999999999;
    background-image: url(${_404.src});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
`;

const PageNotFound = memo(() => {
    // Frontend모드인지 Backend모드인지 감지하기 위한 상태값
    const [isFrontend, setIsFrontEnd] = useState(false);

    // 페이지가 렌더링이 되었다면 Frontend모드임
    useEffect(() => {
        setIsFrontEnd(true);
    }, []);

    // 프론트엔드 모드가 아닐경우 화면 표시 안함
    if (!isFrontend) {
        return <></>;
    }

    return (
        <PageNotFoundContainer>
            <Meta title="페이지를 찾을 수 없습니다." />
        </PageNotFoundContainer>
    );
});

export default PageNotFound;