// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/counter";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("token");
        if (serializedState === null) {
            return undefined;
        }
        const userInfo = JSON.parse(serializedState);
        return {
            user: {
                isLoggedIn: true, // 토큰이 있으면 로그인 상태로 설정
                userInfo,
            },
        };
    } catch (err) {
        return undefined;
    }
};

const initialState = loadState();

export const store = configureStore({
    reducer: {
        user: userReducer,
        // 다른 리듀서들도 필요하면 여기에 추가
    },
    preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;
