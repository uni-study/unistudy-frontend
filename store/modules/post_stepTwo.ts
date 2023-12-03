import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface StepTwoData {
    writerId?: number;
    studygroupId: number;
    title: string;
    mainText: string;
    postedAt: string;
    updatedAt: string;
    expiredAt: string;
}
interface stepTwoState {
    stepTwoData: StepTwoData | null;
}

const initialState: stepTwoState = {
    stepTwoData: null,
};

const stepTwoSlice = createSlice({
    name: "stepTwo",
    initialState,
    reducers: {
        setStepTwoData: (state, action: PayloadAction<StepTwoData | null>) => {
            state.stepTwoData = action.payload;
        },
        clearStepTwoData: (state) => {
            state.stepTwoData = null;
        },
    },
});

export const { setStepTwoData, clearStepTwoData } = stepTwoSlice.actions;
export default stepTwoSlice.reducer;
