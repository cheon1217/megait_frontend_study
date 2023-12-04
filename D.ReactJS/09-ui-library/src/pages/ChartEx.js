/**
 * Chartjs 2
 * - Chartjs2는 기본 Javascript에서 그래프를 표시해주는 기능을 하는 라이브러리
 * - ReactChartjs2라는 Wrapper 라이브러리를 통해 React에서 사용 가능하다.
 * 
 * https://react-chartjs-2.js.org/
 * 
 * yarn add chart.js react-chartjs-2
 * 
 * ------------------------------------
 * 
 * Lodash
 * - 배열, JSON 등의 연속성 자료형에 대한 탐색 및 깊은 복사 등의 기능을 제공함
 * 
 * https://lodash.com/
 * 
 * yarn add lodash
 * 
 * 참고 페이지: https://velog.io/@kysung95/짤막글-lodash-알고-쓰자
 */
import React, { memo } from "react";
import styled from "styled-components";
import { cloneDeep } from "lodash";

import {
    // 공통 항목들
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 세로, 가로 막대 그래프 전용
    BarElement,
    // 선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement,
    // 레이더 차트 전용 (선그래프 요소를 포함해야 함)
    RadialLinearScale,
    Filler,
    // 파이그래프 전용
    ArcElement
} from "chart.js";

import { Bar, Line, Radar, Pie, Scatter } from "react-chartjs-2";

Chart.register (
    // 공통 항목들
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 세로, 가로 막대 그래프 전용
    BarElement,
    // 선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement,
    // 레이더 차트 전용 (선그래프 요소를 포함해야 함)
    RadialLinearScale,
    Filler,
    // 파이그래프 전용
    ArcElement
);

const PlotContainer = styled.div`
    width: 33.3%;
    padding: 20px;
    box-sizing: border-box;
    height: 400px;
`;

const ChartEx = memo(() => {
    // 그래프 기본 옵션
    // const defaultOption = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     plugins: {
    //         legend: {
    //             position: "bottom",
    //         }
    //     },
    // };

    // // 가로 막대 그래프를 위한 옵션 --> 인덱스 축이 y축임을 추가로 저장함
    // const hgraphOption = cloneDeep(defaultOption);
    // hgraphOption.indexAxis = "y";

    // // 레이더 그래프를 위한 옵션 (다른 그래프와 옵션 공유 불가)
    // const radarOption = cloneDeep(defaultOption);

    // // 파이 그래프를 위한 옵션 (다른 그래프와 옵션 공유 불가)
    // const pieOption = cloneDeep(defaultOption);

    // // 가로, 세로 막대 그래프를 위한 데이터 정의
    // const grade = {

    // }

    return (
        <div>
            <h2>Chart</h2>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {/* 세로 막대 그래프 */}
                {/* <PlotContainer>
                    <h3>세로 막대 그래프</h3>
                    <Bar options={defaultOption} data={grade} />
                </PlotContainer> */}
            </div>
        </div>
    );
});

export default ChartEx;