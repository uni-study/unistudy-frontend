import LineComponent from "@/components/common/LineComponent";
import { MainContent } from "@/components/layout/mainContent";
import styled from "styled-components";

const StepOneBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const TitleStepOne = styled.h1`
    text-align: left;
    font-size: 40px;
    font-weight: 600;
`;

const InfoBoxes = styled.div`
    display: flex;
    width: 1030px;
    align-items: center;
    align-content: center;
    gap: 40px;
    flex-wrap: wrap;
`;
const InfoBox = styled.div`
    width: 495px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;
const InfoTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
`;
const InfoInput = styled.input`
    width: 100%;
    height: 74px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
    color: #9d9d9d;
`;

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

const ButtonBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 70px;
`;

const ButtonOfCancel = styled.button`
    width: 270px;
    height: 45px;
    border-radius: 40px;
    border: #fff;
    background: #f1f1f1;
`;

const ButtonOfPosting = styled.button`
    width: 270px;
    height: 45px;
    border-radius: 40px;
    border: #fff;
    background: #44c1c4;
    color: #fff;
`;

export default function WritePost() {
    return (
        <MainContent>
            <StepOneBox>
                {" "}
                <TitleStepOne>Information about your study group</TitleStepOne>
                <LineComponent />
                <InfoBoxes>
                    <InfoBox>
                        <InfoTitle>Department</InfoTitle>
                        <InfoInput placeholder="Department"></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Number of People</InfoTitle>
                        <InfoInput placeholder="Not Decided ~ 10"></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Study Method</InfoTitle>
                        <InfoInput placeholder="Online / Offline"></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Study Period</InfoTitle>
                        <InfoInput placeholder="Not Decided ~ 6 months"></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Recuitment DeadLine</InfoTitle>
                        <InfoInput placeholder="2023-12-10"></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Current State</InfoTitle>
                        <InfoInput placeholder="Recruiting"></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Contact</InfoTitle>
                        <InfoInput placeholder="E-mail / Link of KaKaoTalk Open Chat"></InfoInput>
                    </InfoBox>
                </InfoBoxes>
            </StepOneBox>
            <StepTwoBox>
                <TitleStepTwo>Introduce about your plan</TitleStepTwo>
                <LineComponent />
                <TitleOfSection>Title</TitleOfSection>
                <TitleOfPlan placeholder="Add a Title"></TitleOfPlan>
                <ContentOfPlan placeholder="Add a Content"></ContentOfPlan>
            </StepTwoBox>
            <ButtonBox>
                <ButtonOfCancel>Cancel</ButtonOfCancel>
                <ButtonOfPosting>Posting</ButtonOfPosting>
            </ButtonBox>
        </MainContent>
    );
}
