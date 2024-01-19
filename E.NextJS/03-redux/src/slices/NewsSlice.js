import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import getDefaultSlice from '@/helper/ReduxHelper';

const API_URL = '/api/news';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("NewsSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(API_URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const NewsSlice = getDefaultSlice("NewsSlice", [getList]);

export default NewsSlice.reducer;
