import styled from "styled-components";
import LineComponent from "@/components/common/LineComponent";
import {
    department,
    studyMethod,
    numOfPeople,
    studyPeriod,
    currentState,
} from "@/types/data";
import { useDispatch, useSelector } from "react-redux";
import { setStepOneData } from "@/store/modules/post_stepOne";
import { useState, useEffect } from "react";
import { RootState } from "@/store";
import axios from "axios";
import { API_URL } from "@/api/commonAPI";
import { useRouter } from "next/router";
import { checkEmail } from "@/types/checkEmail";
import { checkDate } from "@/types/checkDate";

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

const ButtonBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 70px;
`;

const ButtonOfNext = styled.button`
    width: 270px;
    height: 45px;
    border-radius: 40px;
    border: #fff;
    background: #44c1c4;
    color: #fff;
`;

interface StepOneInterface {
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

export default function StepOne() {
    const dispatch = useDispatch();
    const curUserInfo = useSelector((state: RootState) => state.user.userInfo);
    const router = useRouter();

    let [userOneData, setUserOneData] = useState<StepOneInterface>({
        leaderId: curUserInfo?.id, //userId
        name: "",
        description: "test",
        department: 0, //유저인풋
        numOfPeople: 0, //유저인풋
        studyMethod: 0, //유저인풋
        studyPeriod: 0, //유저인풋
        recruitmentDeadline: "", //유저인풋
        currentState: 0, //유저인풋
        contact: "", //유저인풋
    });

    const handleSelectChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        field: keyof StepOneInterface
    ) => {
        const { value } = e.target;
        setUserOneData((prevData) => ({
            ...prevData,
            [field]: Number(value.substring(0, 2)),
        }));
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: keyof StepOneInterface
    ) => {
        const { value } = e.target;

        if (field === "recruitmentDeadline") {
            if (checkDate(value)) {
                setUserOneData((prevData) => ({
                    ...prevData,
                    [field]: value,
                }));
            } else {
                alert("Invalid date format. Please use YYYY-MM-DD format.");
                setUserOneData((prevData) => ({
                    ...prevData,
                    [field]: "",
                }));
            }
        } else {
            //contact
            setUserOneData((prevData) => ({
                ...prevData,
                [field]: value,
            }));
        }
    };

    const handlerOnClick = () => {
        axios
            .post(`${API_URL}/study-group`, userOneData)
            .then((response) => console.log(response.data))
            .catch((error) => {
                console.log("userdata was", userOneData);
                console.error("post is not working", error);
            });

        router.push("/writePost/stepTwo");
    };
    dispatch(setStepOneData(userOneData));

    return (
        <>
            <StepOneBox>
                {" "}
                <TitleStepOne>Information about your study group</TitleStepOne>
                <LineComponent />
                <InfoBoxes>
                    <InfoBox>
                        <InfoTitle>Name</InfoTitle>
                        <InfoInput
                            placeholder="Study Group Name"
                            onChange={(e) => handleInputChange(e, "name")}
                        ></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Department</InfoTitle>
                        <InfoSelect
                            placeholder="Department"
                            onChange={(e) =>
                                handleSelectChange(e, "department")
                            }
                        >
                            {department.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Number of People</InfoTitle>
                        <InfoSelect
                            placeholder="Not Decided ~ 10 people"
                            onChange={(e) =>
                                handleSelectChange(e, "numOfPeople")
                            }
                        >
                            {numOfPeople.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Study Method</InfoTitle>
                        <InfoSelect
                            placeholder="Online / Offline"
                            onChange={(e) =>
                                handleSelectChange(e, "studyMethod")
                            }
                        >
                            {studyMethod.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Study Period</InfoTitle>
                        <InfoSelect
                            placeholder="Not Decided ~ 6 months"
                            onChange={(e) =>
                                handleSelectChange(e, "studyPeriod")
                            }
                        >
                            {studyPeriod.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Recuitment DeadLine</InfoTitle>
                        <InfoInput
                            placeholder="2023-12-10"
                            onChange={(e) =>
                                handleInputChange(e, "recruitmentDeadline")
                            }
                        ></InfoInput>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Current State</InfoTitle>
                        <InfoSelect
                            placeholder="Recruiting"
                            onChange={(e) =>
                                handleSelectChange(e, "currentState")
                            }
                        >
                            {currentState.map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </InfoSelect>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>Contact</InfoTitle>
                        <InfoInput
                            placeholder="E-mail / Link of KaKaoTalk Open Chat"
                            onChange={(e) => handleInputChange(e, "contact")}
                        ></InfoInput>
                    </InfoBox>
                </InfoBoxes>
            </StepOneBox>
            <ButtonBox>
                <ButtonOfNext onClick={handlerOnClick}>Next→</ButtonOfNext>
            </ButtonBox>
        </>
    );
}
