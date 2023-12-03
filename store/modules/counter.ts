import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    isLoggedIn: boolean;
    userInfo: {
        id: number;
        password: string;
        name: string;
        email: string;
    } | null;
}

const initialState: UserState = {
    isLoggedIn: false,
    userInfo: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setUserInfo: (state, action: PayloadAction<UserState["userInfo"]>) => {
            state.userInfo = action.payload;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.userInfo = null;
        },
    },
});

export const { setIsLoggedIn, setUserInfo, logoutUser } = userSlice.actions; //액션 생성함수

export default userSlice.reducer; //리듀서
