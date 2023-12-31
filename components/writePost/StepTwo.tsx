import dynamic from "next/dynamic";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/store";
import axios from "axios";
import { API_URL } from "@/api/commonAPI";
import { setStepTwoData } from "@/store/modules/post_stepTwo";

const LineComponent = dynamic(import("@/components/common/LineComponent"));

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
interface StepTwoInterface {
    writerId?: number;
    studygroupId: number;
    title: string;
    mainText: string;
    postedAt: string;
    updatedAt: string;
    expiredAt: string;
}
export default function StepTwo() {
    const dispatch = useDispatch();
    const curUserInfo = useSelector((state: RootState) => state.user.userInfo);
    const curStepOne = useSelector(
        (state: RootState) => state.stepOne.stepOneData
    );
    const USER_ID = curUserInfo?.id;
    const [curStudyGroupId, setCurStudyGroup] = useState<number>(0);

    const date = new Date();

    //To get the studygroup information which is set in last step, and set studygroup id
    if (curUserInfo) {
        axios
            .get(`${API_URL}/study-groups?leaderId=${USER_ID}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "ngrok-skip-browser-warning": "69420",
                },
                withCredentials: true,
            })
            .then((response) => {
                const res = response.data;
                res.forEach((item: any) => {
                    if (
                        item.contact == curStepOne?.contact &&
                        item.currentState == curStepOne?.currentState &&
                        item.department == curStepOne?.department &&
                        item.description == curStepOne?.description &&
                        item.leaderId == curStepOne?.leaderId &&
                        item.name == curStepOne?.name &&
                        item.numOfPeople == curStepOne?.numOfPeople &&
                        item.studyMethod == curStepOne?.studyMethod &&
                        item.studyPeriod == curStepOne?.studyPeriod
                    ) {
                        setCurStudyGroup(item.id);
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    let [userTwoData, setUserTwoData] = useState<StepTwoInterface>({
        writerId: curUserInfo?.id, //userId
        studygroupId: 0,
        title: "", //title
        mainText: "", //content
        postedAt: date.toISOString().substring(0, 19),
        updatedAt: date.toISOString().substring(0, 19),
        expiredAt: date.toISOString().substring(0, 19),
    });

    useEffect(() => {
        setUserTwoData((prevData) => ({
            ...prevData,
            studygroupId: curStudyGroupId,
        }));
    }, [curStudyGroupId]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: keyof StepTwoInterface
    ) => {
        const { value } = e.target;
        setUserTwoData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    const handleTextChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
        field: keyof StepTwoInterface
    ) => {
        const { value } = e.target;
        let contents = value;
        contents = contents.replaceAll("<br>", "\r\n");
        setUserTwoData((prevData) => ({
            ...prevData,
            [field]: contents,
        }));
    };

    //To save the user's input data into Redux
    useEffect(() => {
        dispatch(setStepTwoData(userTwoData));
    }, [userTwoData, dispatch]);
    return (
        <>
            <StepTwoBox>
                <TitleStepTwo>Introduce about your plan</TitleStepTwo>
                <LineComponent />
                <TitleOfSection>Title</TitleOfSection>
                <TitleOfPlan
                    placeholder="Add a Title"
                    onChange={(e) => handleInputChange(e, "title")}
                ></TitleOfPlan>
                <ContentOfPlan
                    placeholder="Add a Content"
                    onChange={(e) => handleTextChange(e, "mainText")}
                ></ContentOfPlan>
            </StepTwoBox>
        </>
    );
}
