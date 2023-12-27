import {
    CategoryScale,
    Chart,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import React, { memo } from "react";

import { Line } from "react-chartjs-2";

Chart.register (
    // 공통 항목들
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement
);

const LineChartView = memo(({x, y, filter}) => {
    // 그래프 기본 옵션
    const defaultOption = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
            }
        },
    };

    // 선 그래프를 위한 데이터 정의
    const covid19 = {
        labels: x,
        datasets: [{
            label: filter,
            data: y,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            border: "rgba(255, 99, 132, 1)",
            borderWidth: 1
        }]
    };

    return (
        <Line options={defaultOption} data={covid19} />
    );
});

export default LineChartView;