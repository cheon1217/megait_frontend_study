import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios';

const API_URL = '/department';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("DepartmentSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(API_URL, {
            params: {
                dname: payload.keyword
            }
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const getItem = createAsyncThunk("DepartmentSlice/getItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(`${API_URL}/${payload?.id}`);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const postItem = createAsyncThunk("DepartmentSlice/postItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.post(`${API_URL}/${payload}`);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const putItem = createAsyncThunk("DepartmentSlice/putItem", async (payload, { rejectWithValue }) => {
    let result = null;

    const {id, ...rest} = payload

    try {
        const response = await axios.put(`${API_URL}/${id}`, rest);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

export const deleteItem = createAsyncThunk("DepartmentSlice/deleteItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.delete(`${API_URL}/${payload.id}`);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const DepartmentSlice = createSlice({
    name: 'DepartmentSlice',
    // 이 모듈이 관리하고자하는 상태값들을 명시
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    // 상태값을 갱신하기 위한 함수들을 구현
    // Ajax의 처리 과정에 따라 자동으로 실행된다.
    extraReducers: (builder) => {
        /** 목록 조회에 대한 기능 */
        // 로딩중임을 표시
        builder.addCase(getList.pending, (state, { payload }) => {
            return { ...state, loading: true }
        });

        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴한 경우
        builder.addCase(getList.fulfilled, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: null
            }
        });

        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
        builder.addCase(getList.rejected, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        });

        /** 상세 조회에 대한 기능 */
        builder.addCase(getItem.pending, (state, { payload }) => {
            return { ...state, loading: true }
        });

        builder.addCase(getItem.fulfilled, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: null
            }
        });

        builder.addCase(getItem.rejected, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        });

        /** 저장에 대한 기능 */
        builder.addCase(postItem.pending, (state, { payload }) => {
            return { ...state, loading: true }
        });

        builder.addCase(postItem.fulfilled, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: null
            }
        });

        builder.addCase(postItem.rejected, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        });

        /** 수정에 대한 기능 */
        builder.addCase(putItem.pending, (state, { payload }) => {
            return { ...state, loading: true }
        });

        builder.addCase(putItem.fulfilled, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: null
            }
        });

        builder.addCase(putItem.rejected, (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        });

        /** 삭제에 대한 기능 */
        builder.addCase(deleteItem.pending, (state, { payload }) => {
            return { ...state, loading: true }
        });

        builder.addCase(deleteItem.fulfilled, (state, { payload }) => {
            // 기존의 상태값을 복사한다.
            const data = {...state.data};

            // id값이 일치하는 항목의 배열 인덱스를 찾는다 (v.id는 백엔드가 주는 변수 이름)
            const targetId = data.findIndex((v, i) => v.id == meta.arg.id);

            // 복사한 데이터에서 해당 인덱스 위치를 삭제한다.
            data.splice(targetId, 1);
            
            return {
                data: data, 
                loading: false,
                error: null
            }
        });

        builder.addCase(deleteItem.rejected, (state, { meta, payload }) => {
            return {
                data: payload, 
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        });
    },
});

export default DepartmentSlice.reducer;