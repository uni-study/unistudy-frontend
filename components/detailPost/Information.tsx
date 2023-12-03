import styled from "styled-components";
import STUDYGROUP_DUMMY_DATA from "@/DATA/STUDYGROUP_DUMMY_DATA.json";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@/api/commonAPI";
import { current } from "@reduxjs/toolkit";
import { StudyGroup } from "@/api/interface/data.interface";

type PROPS_TYPE = {
    studyGroupId: number;
};

const Outer = styled.div`
    display: flex;
    width: 1030px;
    align-items: center;
    align-content: center;
    gap: 50px 20px;
    flex-wrap: wrap;
`;

const InfoItem = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
`;

const InfoName = styled.div`
    width: 40%;
    color: #9d9d9d;
    font-size: 30px;
    font-weight: 400;
`;

const InfoData = styled.div`
    width: 60%;
    font-size: 30px;
    font-weight: 400;
`;

export default function Information(props: PROPS_TYPE) {
    const STUDY_GROUP_ID = props.studyGroupId;
    let [currentSG, setCurrentSG] = useState<StudyGroup[]>([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/study-groups/${STUDY_GROUP_ID}`)
            .then((response) => {
                setCurrentSG(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, [STUDY_GROUP_ID]);

    if (!currentSG) {
        return <h1>Not FOUND</h1>;
    } else {
        return (
            <>
                <Outer>
                    <InfoItem>
                        <InfoName>Department</InfoName>
                        <InfoData>{currentSG.department}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName># of People</InfoName>
                        <InfoData>{currentSG.numOfPeople}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName>StudyMethod</InfoName>
                        <InfoData>{currentSG.studyMethod}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName>StudyPeriod</InfoName>
                        <InfoData>{currentSG.studyPeriod}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName>Recruitment Deadline</InfoName>
                        <InfoData>{currentSG.recruitmentDeadline}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName>Contact</InfoName>
                        <InfoData>{currentSG.contact}</InfoData>
                    </InfoItem>
                </Outer>
            </>
        );
    }
}
