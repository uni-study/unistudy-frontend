import styled from "styled-components";
import STUDYGROUP_DUMMY_DATA from "@/DATA/STUDYGROUP_DUMMY_DATA.json";
import { STUDYGROUP_TYPE, STUDYGROUPS_TYPE } from "@/types/data";

type PROPS_TYPE = {
    studyGroupId: number;
};

const StudyGroups: STUDYGROUPS_TYPE = {
    studyGroupData: STUDYGROUP_DUMMY_DATA,
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
    const StudyGroup: STUDYGROUP_TYPE | undefined =
        StudyGroups.studyGroupData.find(
            (studyGroup) => studyGroup.id === props.studyGroupId
        );

    if (!StudyGroup) {
        return <h1>Not FOUND</h1>;
    } else {
        return (
            <>
                <Outer>
                    <InfoItem>
                        <InfoName>Department</InfoName>
                        <InfoData>{StudyGroup.department}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName># of People</InfoName>
                        <InfoData>{StudyGroup.numOfPeople}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName>StudyMethod</InfoName>
                        <InfoData>{StudyGroup.studyMethod}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName>StudyPeriod</InfoName>
                        <InfoData>{StudyGroup.studyPeriod}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName>Recruitment Deadline</InfoName>
                        <InfoData>{StudyGroup.recruitmentDeadline}</InfoData>
                    </InfoItem>
                    <InfoItem>
                        <InfoName>Contact</InfoName>
                        <InfoData>{StudyGroup.contact}</InfoData>
                    </InfoItem>
                </Outer>
            </>
        );
    }
}
