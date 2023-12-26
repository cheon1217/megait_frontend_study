import React, { memo, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import ErrorView from "../components/ErrorView";
import Spinner from "../components/Spinner";
import TableEx from "../components/TableEx";
import { useNavigate } from "react-router-dom";
import { postItem } from "../slices/StudentSlice";

const StudentAdd = memo(() => {
    const hello = useRef();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.StudentSlice);

    const onDepartmentSubmit = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;

        dispatch(postItem({
            name: current.name.value,
            grade: current.grade.value
        })).then((result) => {
            console.log(result);

            navigate(`/student_view/${result.payload.id}`);
        })
    }, []);

    useRef(() => {
        hello.current.focus();
    }, []);

    return (
        <div>
            <Spinner loading={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onDepartmentSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120">
                            </col>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>학생이름</th>
                            <td className="inputWrapper">
                                <input className="field" type="text" name="name" ref={hello} />
                            </td>
                        </tr>
                        <tr>
                            <th>학년</th>
                            <td className="inputWrapper">
                                <input className="field" type="text" name="grade" />
                            </td>
                        </tr>
                        </tbody>
                    </TableEx>

                    <div style={{ textAlign: "center" }}>
                        <button type="submit">저장하기</button>
                    </div>
                </form>
            )}
        </div>
    );
});

export default StudentAdd;