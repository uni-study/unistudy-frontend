import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StepOneData {
    leaderId?: number;
    name: string;
    description: string;
    department: number;
    numOfPeople: number;
    studyMethod: number;
    studyPeriod: number;
    recruitmentDeadline: string;
    currentState: number;
    contact: string;
}

interface stepOneState {
    stepOneData: StepOneData | null;
}

const initialState: stepOneState = {
    stepOneData: null,
};

const stepOneSlice = createSlice({
    name: "stepOne",
    initialState,
    reducers: {
        setStepOneData: (state, action: PayloadAction<StepOneData | null>) => {
            state.stepOneData = action.payload;
        },
        clearStepOneData: (state) => {
            state.stepOneData = null;
        },
    },
});

export const { setStepOneData, clearStepOneData } = stepOneSlice.actions;
export default stepOneSlice.reducer;
