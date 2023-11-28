/**
 * @filename: Meta.js
 * @description: <head/>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: Park J.C (leekh4232@gmail.com)
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";
// 미리보기 이미지 샘플
// import sample from "./assets/img/sample.png";

/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */
const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                {/* SEO 태그 */}
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:url" content={props.url} />
                {/* <meta property="og:image" content={props.image} /> */}
            
                {/* 구글 웹폰트 적용 */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

                {/* Helmet 안에서 CSS 적용하기 */}
                <style type="text/css">{`
                    * {
                        font-family: "Noto Sans", sans-serif;
                    }

                    body {
                        margin: 0;
                        padding: 30px;
                    }
                `}</style>
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 */
Meta.defaultProps = {
    title: "React Example",
    description: "React.js 예제 입니다.",
    author: "재천",
    keywords: "React",
    // image: "기본이미지변수적용",
    url: window.location.href
};

export default Meta;