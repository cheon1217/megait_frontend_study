import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = '';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getMovieRank = createAsyncThunk("MovieRankSlice/getMovieRank", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        // API-URL과 API-KEY를 설정파일로부터 가져온다.
        const response = await axios.get(process.env.REACT_APP_KOBIS_API_URL, {
            params: {
                key: process.env.REACT_APP_KOBIS_API_KEY,
                // 컨트롤러에서 전달하는 파라미터는 payload로 전달된다.
                // --> 단일 값인 경우 payload 자체가 그 값, JSON인 경우 payload가 JSON이 된다.
                targetDt: payload.targetDt
            }
        });

        result = response.data;

        // 영화진흥위원회 API는 에러가 발생하더라도 HTTP 상태코드는 200으로 응답이 오기 때문에 catch문이 동작하지 않는다
        if (result.faultInfo !== undefined) {
            const err = new Error();
            err.response = {status: 500, statusText: result.faultInfo.message};
            throw err;
        }
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const MovieRankSlice = createSlice({
    name: 'MovieRankSlice',
    // 이 모듈이 관리하고자하는 상태값들을 명시
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    // 상태값을 갱신하기 위한 함수들을 구현
    // Ajax의 처리 과정에 따라 자동으로 실행된다.
    extraReducers: (builder) => {
        // 로딩중임을 표시
        builder.addCase(getMovieRank.pending, (state, { payload }) => {
            return { ...state, loading: true }
        });

        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴한 경우
        builder.addCase(getMovieRank.fulfilled, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: null
            }
        });

        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
        builder.addCase(getMovieRank.rejected, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: {
                    code: payload.status ? payload.status : 500,
                    message: payload.statusText ? payload.statusText : 'Server Error'
                }
            }
        });
    },
});

export default MovieRankSlice.reducer;