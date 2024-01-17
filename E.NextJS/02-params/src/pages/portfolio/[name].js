/**
 * [Path 파라미터 받기]
 * 
 * URL이 "/portfolio/변수명" 인 경우
 * 1) /portfolio 이라는 이름의 폴더를 생성
 * 2) /portfolio/[변수명].js 로 소스파일을 작성
 * 
 * 주의!!! --> /portfolio이라는 이름의 폴더와
 *            /portfolio.js 라는 파일이 함꼐 존재하면
 *            route는 동작하지 않음. (파일이 우선순위)
 */
import React, { memo } from "react";

import { useRouter } from "next/router";

import dataset from "@/dataset";

const Portfolio= memo(() => {

    // hook을 통해 라우터 사용 시작
    const router = useRouter();

    // name 이라는 이름의 path 파라미터 추출
    const {name} = router.query;

    return (
        <div>
            <h1>Portfolio</h1>

            {/* path 파라미터의 변수명은 파일 이름과 동일하다. --> [변수명].js */}
            {
                (router.query.name === "publish") ? (
                    <div>웹 퍼블리싱 포트폴리오</div>
                ) : (
                    (router.query.name === "frontend") ? (
                        <div>프론트엔드 포트폴리오</div>
                    ) : (
                        <div>백엔드 포트폴리오</div>
                    )
                )
            }

            <hr />

            <ul>
                {dataset[name].map((v, i) => {
                    return (
                        <li key={i}>
                            id: {v.id}, name: {v.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
});

export default Portfolio;