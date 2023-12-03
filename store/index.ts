// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import stepOneReducer from "./modules/post_stepOne";
import stepTwoReducer from "./modules/post_stepTwo";

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
        stepOne: stepOneReducer,
        stepTwo: stepTwoReducer,
    },
    preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;
