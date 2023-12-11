import React, { memo, useState, useEffect, useCallback } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

import { useLocation, useNavigate } from "react-router-dom";

const Department = memo(() => {
    // 현재 Ajax가 데이터를 로딩중인지를 의미하는 상태값
    const [loading, setLoading] = useState(false);
    // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
    const [department, setDepartment] = useState([]);

    // QuerySting으로 전달되는 검색 키워드를 받는다.
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const { keyword } = Object.fromEntries(query);

    // 페이지 강제 이동을 위한 객체 생성
    const navigate = useNavigate();

    /** 페이지가 처음 열렸을 때 실행할 hook */
    useEffect(() => {

        (async () => {
            // Ajax 로딩 시작을 알림 --> 함수형 업데이트
            setLoading(loading => true);

            // ajax의 결과를 저장할 변수 준비
            let json = null;

            try {
                const response = await axios.get("/department", {
                    // 검색어가 있다면 dname값으로 설정, 그렇지 않으면 정의 안함
                    params: keyword ? { dname: keyword } : null
                });
                json = response.data;
            } catch (e) {
                console.error(e);
                alert(`데이터 요청에 실패했습니다.\n${e.message}`);
                return;
            } finally {
                // Ajax 로딩 종료를 알림 --> 함수형 업데이트
                setLoading(loading => false);
            }

            // Ajax의 요청 결과를 상태값에 반영한다. --> 함수형 업데이트
            setDepartment(department => json);
        })();
        // 검색어가 변경되었을 경우에도 Ajax 요청을 보내도록 추가한다.
    }, [keyword]);

    /** 검색폼에서의 전송 이벤트 */
    // 성능 최적화를 위해 useCallback() 적용함
    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();
        console.log("submit~!!");
        // 검색어를 QueryString으로 지정하여 페이지를 이동한다.
        navigate(`/department?keyword=${e.currentTarget.keyword.value}`)
    }, []);

    /** 데이터 추가 submit 이벤트 */
    const onDataAddSubmit = useCallback((e) => {
        // 페이지 강제 이동을 차단
        e.preventDefault();

        // 이벤트가 발생한 폼 자신
        const form = e.currentTarget;

        // 폼안의 input 태그에 name 속성으로 접근하여 입력값 취득
        const dname = form.dname.value;
        const loc = form.loc.value;

        (async () => {
            // Ajax 로딩 시작을 알림 --> 함수형 업데이트
            setLoading(loading => true);

            // ajax의 결과를 저장할 변수 준비
            let json = null;

            try {
                const response = await axios.get("/department", {
                    // 입력값을 post 파라미터로 전달
                    dname: dname,
                    loc: loc
                });
                json = response.data;
            } catch (e) {
                console.error(e);
                alert(`데이터 요청에 실패했습니다.\n${e.message}`);
                return;
            } finally {
                // Ajax 로딩 종료를 알림 --> 함수형 업데이트
                setLoading(loading => false);
            }

            // Ajax의 요청 결과를 상태값에 반영한다. --> 함수형 업데이트
            setDepartment(department => department.concat(json));

            // 폼의 입력값을 리셋한다.
            form.reset();
        })();
    }, []);

    return (
        <div>
            <Spinner loading={loading} />

            {/* 입력폼 */}
            <form onSubmit={onDataAddSubmit}>
                <div>
                    <label htmlFor="dname">학과 : </label>
                    <input type="text" name="dname" id="dname" />
                </div>
                <div>
                    <label htmlFor="loc">위치 : </label>
                    <input type="text" name="loc" id="loc" />
                </div>
                <button type="submit">저장하기</button>
            </form>

            {/* 검색폼 */}
            <form onSubmit={onSearchSubmit}>
                <input type="text" name="keyword" />
                <button type="submit">검색</button>
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>학과번호</th>
                        <th>학과명</th>
                        <th>학과위치</th>
                    </tr>
                </thead>
                <tbody>
                    {!department.length ? (
                        <tr>
                            <td colSpan="3" align="center">
                                검색결과가 없습니다.
                            </td>
                        </tr>
                    ) : (
                        department.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    {/* 데이터를 텍스트로 출력 */}
                                    <td>{item.id}</td>
                                    <td>{item.dname}</td>
                                    <td>{item.loc}</td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
});

export default Department;