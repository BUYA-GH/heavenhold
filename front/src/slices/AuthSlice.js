import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from "lib/authAPI";
const token = localStorage.getItem("user");

export const register = createAsyncThunk(
    "auth/register",
    async( {email, gamecode, pw1, pw2 }, thunkAPI) => {
        try {
            const response = await authAPI.postSignup(email, gamecode, pw1, pw2);
            console.log("response from register : ", response);
            return response;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async( {email, password }, thunkAPI) => {
        try {
            const data = await authAPI.postLogin(email, password);
            if(data.key) {
                return {token: data.key}
            }   
        } catch (error) {
            localStorage.removeItem("user");
            return thunkAPI.rejectWithValue(error.response.data);
        }
        
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async(thunkAPI) => {
        try {
            const data = await authAPI.postLogout();
            console.log("at slice ", data);
            return data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const initialState = token
    ? { isLoggedIn : true, token: token, isLoginFail: false }
    : { isLoggedIn : false, token: null, isLoginFail: false };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.isLoginFail = false;
            state.token = action.payload.token;

        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.isLoginFail = true;
            state.token = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.isLoginFail = false;
            state.token = null;
        },
        [logout.rejected]: (state, action) => {
            state.isLoggedIn = true;
            state.isLoginFail = false;
        }
    },
});
const { reducer } = authSlice;
export default reducer;