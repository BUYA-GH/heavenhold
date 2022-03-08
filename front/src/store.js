import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/AuthSlice";
import tabReducer from "./slices/TabSlice";

const reducer = {
    auth: authReducer,
    tab: tabReducer,
}

export const store = configureStore({
    reducer: reducer,
    devTools: true,
});