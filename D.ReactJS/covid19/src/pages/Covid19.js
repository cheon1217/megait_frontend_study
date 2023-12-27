import React, { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import ErrorView from "../components/ErrorView";
import LineChartView from "../components/LineChartView";
import MenuLink from "../components/MenuLink";
import Spinner from "../components/Spinner";
import dayjs from "dayjs";
import { getList } from "../slices/Covid19Slice";
import styled from "styled-components";
import { useQueryString } from "../hooks/useQueryString";

const Covid19Container = styled.div`
    display: flex;
    flex-direction: column;

    nav {
        flex: none;
    }

    .chart {
        height: 450px;
    }
`;

const Covid19 = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.Covid19Slice);
    
    /** QueryString 변수를 추출 */
    let { sd, ed, filter } = useQueryString();
    if (!filter) {
        filter = "confirmed";
    }
    console.group("Covid19.js");
    console.log(`sd=${sd}, ed=${ed}, plus1=${dayjs(ed).add(1, "d").format("YYYY-MM-DD")}, filter=${filter}`);
    console.groupEnd();
    
    React.useEffect(() => {
        dispatch(getList({
            sd: sd,
            // JSON 서버의 특성 때문에 종료값은 실제 검색범위보다 1 큰값을 설정해야 함
            ed: dayjs(ed).add(1, "d").format("YYYY-MM-DD")
        }));
    }, [sd, ed]);

    const {x, y} = useMemo(() => {
        let date = null;
        let value = null;
        
        // 모니터링 하는 변수가 존재할 때만 작동해야 한다.
        if (data && filter) {
            date = data.map((v, i) => dayjs(v.date).format("YYYY-MM-DD"));
            console.log(date);

            value = data.map((v, i) => v[filter]);
            console.log(value);

        }

        return {x: date, y: value};
    }, [data, filter]);

    return (
        <Covid19Container>
            <Spinner loading={loading} />

            <nav>
                <MenuLink to={`/?filter=confirmed&sd=${sd}&ed=${ed}`}>일일확진자</MenuLink>
                <MenuLink to={`/?filter=confirmed_acc&sd=${sd}&ed=${ed}`}>누적확진자</MenuLink>
                <MenuLink to={`/?filter=active&sd=${sd}&ed=${ed}`}>격리중</MenuLink>
                <MenuLink to={`/?filter=released&sd=${sd}&ed=${ed}`}>격리해제</MenuLink>
                <MenuLink to={`/?filter=released_acc&sd=${sd}&ed=${ed}`}>누적격리해제</MenuLink>
                <MenuLink to={`/?filter=death&sd=${sd}&ed=${ed}`}>사망</MenuLink>
                <MenuLink to={`/?filter=death_acc&sd=${sd}&ed=${ed}`}>누적사망</MenuLink>
            </nav>

            {error ? (
                <ErrorView error={error} />
            ) : (
                <div className="chart">
                    <LineChartView x={x} y={y} filter={filter} />
                </div>
            )}
        </Covid19Container>
    );
});

export default Covid19;