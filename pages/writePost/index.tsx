import dynamic from "next/dynamic";

const MainContent = dynamic(import("@/components/layout/mainContent"));
const StepOne = dynamic(import("@/components/writePost/StepOne"));

//The features of StepOne is in components/writePost/StepOne.tsx
export default function WritePost() {
    return (
        <MainContent>
            <StepOne />
        </MainContent>
    );
}
