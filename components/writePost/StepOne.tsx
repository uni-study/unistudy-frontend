import styled from "styled-components";
import LineComponent from "@/components/common/LineComponent";
import {
    department,
    studyMethod,
    numOfPeople,
    studyPeriod,
    currentState,
} from "@/types/data";

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

const InfoSelect = styled.select`
    width: 100%;
    height: 74px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
    color: #9d9d9d;
`;

const InfoInput = styled.input`
    width: 100%;
    height: 74px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
    color: #9d9d9d;
`;

export default function StepOne() {
    return (
        <>
            <StepOneBox>
                {" "}
                <TitleStepOne>Information about your study group</TitleStepOne>
                <LineComponent />
                <InfoBoxes>
                    <InfoBox>
                        <InfoTitle>Department</InfoTitle>
                        <InfoSelect placeholder="Department">
                            {department.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Number of People</InfoTitle>
                        <InfoSelect placeholder="Not Decided ~ 10">
                            {numOfPeople.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Study Method</InfoTitle>
                        <InfoSelect placeholder="Online / Offline">
                            {studyMethod.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Study Period</InfoTitle>
                        <InfoSelect placeholder="Not Decided ~ 6 months">
                            {studyPeriod.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Recuitment DeadLine</InfoTitle>
                        <InfoInput placeholder="2023-12-10"></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Current State</InfoTitle>
                        <InfoSelect placeholder="Recruiting">
                            {currentState.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Contact</InfoTitle>
                        <InfoInput placeholder="E-mail / Link of KaKaoTalk Open Chat"></InfoInput>
                    </InfoBox>
                </InfoBoxes>
            </StepOneBox>
        </>
    );
}
