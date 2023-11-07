import { STUDYGROUPS_TYPE } from "@/types/data";
import STUDYGROUP_DUMMY_DATA from "@/DATA/STUDYGROUP_DUMMY_DATA.json";
import styled from "styled-components";
import { useRouter } from "next/router";
import LineComponent from "../common/LineComponent";

const Outer = styled.div`
    display: flex;
    width: 1030px;
    align-items: center;
    align-content: center;
    gap: 40px;
    flex-wrap: wrap;
`;

const ContentBox = styled.div`
    display: flex;
    width: 250px;
    height: 370px;
    padding: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 30px;
    border: 3px solid #e6e6e6;
`;

const FirstLine = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`; //date + currentstate

const Date = styled.div`
    width: 87px;
    height: 23px;
    color: #a1a1a1;
    line-height: 23px;
    font-size: 15px;
    font-weight: 600;
`;

const CurrentState = styled.div`
    width: 130px;
    height: 40px;
    border-radius: 40px;
    background-color: #44c1c4;
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    font-weight: 600;
`;

const Title = styled.h1`
    width: 100%;
    height: 100px;
    font-size: 25px;
    font-weight: 600;
`;

const InfoBox = styled.div`
    display: flex;
    width: 100%s;
    align-items: center;
    gap: 20px;
`;

const Info = styled.div`
    width: 70px;
    height: 35px;
    border-radius: 40px;
    border: 1px solid #e6e6e6;
    color: #565656;
    text-align: center;
    line-height: 35px;
    font-size: 12px;
    font-weight: 600;
`;

const Writer = styled.div`
    width: 100%;
    height: 23px;
    font-size: 15px;
    font-weight: 600;
    line-height: 23px;
`;

const StudyGroup: STUDYGROUPS_TYPE = {
    studyGroupData: STUDYGROUP_DUMMY_DATA,
};

export function StudyList() {
    const router = useRouter();
    const moveToDetailPost = (pid: number) => {
        router.push(`/detailPost/${pid}`);
    };
    return (
        <>
            <Outer>
                {StudyGroup.studyGroupData.map((e, i) => {
                    return (
                        <ContentBox
                            key={i}
                            onClick={() => moveToDetailPost(e.id)}
                        >
                            <FirstLine>
                                <Date>{e.recruitmentDeadline}</Date>
                                <CurrentState>{e.currentState}</CurrentState>
                            </FirstLine>
                            <Title>{e.title}</Title>
                            <InfoBox>
                                <Info>{e.department}</Info>
                                <Info>{e.studyMethod}</Info>
                            </InfoBox>

                            <LineComponent />
                            <Writer>{e.leader}</Writer>
                        </ContentBox>
                    );
                })}
            </Outer>
        </>
    );
}
