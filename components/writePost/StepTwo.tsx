import styled from "styled-components";
import LineComponent from "@/components/common/LineComponent";

const StepTwoBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 29px;
`;

const TitleStepTwo = styled.h1`
    font-size: 40px;
    font-weight: 600;
`;

const TitleOfSection = styled.h2`
    font-size: 30px;
    font-weight: 600;
`;

const TitleOfPlan = styled.input`
    width: 100%;
    height: 100px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
    ::placeholder {
        color: palevioletred;
    }
`;
const ContentOfPlan = styled.textarea`
    width: 100%;
    height: 680px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
    &::placeholder {
        color: ##9d9d9d;
    }
`;

export default function StepTwo() {
    return (
        <>
            <StepTwoBox>
                <TitleStepTwo>Introduce about your plan</TitleStepTwo>
                <LineComponent />
                <TitleOfSection>Title</TitleOfSection>
                <TitleOfPlan placeholder="Add a Title"></TitleOfPlan>
                <ContentOfPlan placeholder="Add a Content"></ContentOfPlan>
            </StepTwoBox>
        </>
    );
}
