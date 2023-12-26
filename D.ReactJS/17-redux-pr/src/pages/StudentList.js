import React, { memo, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";
import styled from "styled-components";
import { useQueryString } from "../hooks/useQueryString";
import { deleteItem, getList } from "../slices/StudentSlice";

const ControlContainer = styled.form`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;

    .controll {
        margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        padding: 7px 10px 5px 10px;
        border: 1px solid #ccc;
    }

    .clickable {
        background-color: #fff;
        color: #000;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }

        &:active {
            transform: scale(0.9, 0.9);
        }
    }
`;

const StudentList = memo(() => {
    const { keyword } = useQueryString();

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.StudentSlice);

    React.useEffect(() => {
        dispatch(getList({
            keyword: keyword
        }));
    }, [keyword]);

    const navigate = useNavigate();

    const onSearchSubmit = useCallback(e => {
        e.preventDefault();

        const current = e.currentTarget;
        const keyword = current.keyword;

        let redirectUrl = keyword.value ? `/?keyword=${keyword.value}` : "/";
        navigate(redirectUrl);
    }, [navigate]);

    const onDepartmentItemDelete = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id, name } = current.dataset;

        if (window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            }));
        }
    }, []);

    const onDepartmentEditClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;
        
        navigate(`/student_edit/${id}`);
    });

    return (
        <div>
            <Spinner loading={loading} />

            <ControlContainer>
                <input type="text" name="keyword" className="controll" />
                <button type="submit" className="controll clickable">검색</button>
                <NavLink to="student_add" className="controll clickable">신상정보 추가하기</NavLink>
            </ControlContainer>

            {error ? (
                <ErrorView error={error} />
            ) : (
                data && (
                    <Table>
                        <thead>
                            <tr>
                                <th>학생번호</th>
                                <th>학생이름</th>
                                <th>학년</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length > 0 ? (
                                    data.map((v, i) => {
                                        return (
                                            <tr key={v.id}>
                                                <td>{v.id}</td>
                                                <td>
                                                    <NavLink to={`/student_view/${v.id}`}>{v.name}</NavLink>
                                                </td>
                                                <td>{v.grade}</td>
                                                <td>
                                                    <button type="button" data-id={v.id} onClick={onDepartmentEditClick}>
                                                        수정하기
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="button" data-id={v.id} data-name={v.name} onClick={onDepartmentItemDelete}>
                                                        삭제하기
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="5" align="center">
                                            검색결과가 없습니다.
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                )
            )}
        </div>
    );
});

export default StudentList;