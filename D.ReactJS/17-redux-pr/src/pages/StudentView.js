import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { memo, useCallback, useEffect } from "react";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getItem } from "../slices/StudentSlice";

const StudentView = memo(() => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.StudentSlice);

    useEffect(() => {
        dispatch(getItem({id: id}));
    }, []);

    const navigate = useNavigate();

    const onDepartmentItemDelete = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id, name } = current.dataset;

        if (window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            })).then(({ meta, payload }) => {
                navigate("/");
            });
        }
    }, []);

    return (
        <div>
            <Spinner loading={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                data && (
                    <div>
                        <Table>
                            <colgroup>
                                <col width="120">
                                </col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>학생번호</th>
                                    <td>{data.id}</td>
                                </tr>
                                <tr>
                                    <th>학생이름</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>학년</th>
                                    <td>{data.grade}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div style={{ textAlign: "center" }}>
                            <NavLink to="/">목록</NavLink>
                            &nbsp;&nbsp;
                            <NavLink to="/student_add">등록</NavLink>
                            &nbsp;&nbsp;
                            <NavLink to={`/student_edit/${data.id}`}>수정</NavLink>
                            &nbsp;&nbsp;
                            <NavLink to="#!" data-id={data.id} data-name={data.name} onClick={onDepartmentItemDelete}>삭제</NavLink>
                        </div>
                    </div>
                )
            )}
        </div>
    );
});

export default StudentView;