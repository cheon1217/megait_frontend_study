import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import ErrorView from "../components/ErrorView";
import Spinner from "../components/Spinner";
import TableEx from "../components/TableEx";
import { getItem, putItem } from "../slices/StudentSlice";

const StudentEdit = memo(() => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.StudentSlice);

    useEffect(() => {
        dispatch(getItem({id: id}));
    }, []);

    const navigate = useNavigate();

    const onDepartmentSubmit = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;

        dispatch(putItem({
            id: current.id.value,
            name: current.name.value,
            grade: current.grade.value
        })).then((result) => {
            console.log(result);
            navigate(`/student_view/${result.payload.id}`);
        })
    }, []);

    return (
        <div>
            <Spinner loading={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onDepartmentSubmit}>
                    <input type="hidden" name="id" defaultValue={data?.id} />
                    <TableEx>
                        <colgroup>
                            <col width="120">
                            </col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>학생이름</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="name" defaultValue={data?.name} />
                                </td>
                            </tr>
                            <tr>
                                <th>학년</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="grade" defaultValue={data?.grade} />
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

export default StudentEdit;