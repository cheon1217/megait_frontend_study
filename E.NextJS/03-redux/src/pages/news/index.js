import React, { memo, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getList } from "@/slices/NewsSlice";
import Spinner from "@/components/Spinner";
import Table from "@/components/Table";
import ErrorView from "@/components/ErrorView";
import NewsList from "@/components/NewsList";

const News = memo(() => {
    const { data, loading, error } = useSelector((state) => state.NewsSlice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getList());
    }, []);

    return (
        <div>
            <Spinner loading={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <div>
                    {data && <NewsList news={data} />}
                </div>
            )}
        </div>
    );
});

export default News;