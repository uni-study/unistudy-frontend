import dynamic from "next/dynamic";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Post, StudyGroup, User } from "@/api/interface/data.interface";
import { department, studyMethod, currentState } from "@/types/data";
import axios from "axios";
import { API_URL } from "@/api/commonAPI";
import { useEffect, useState } from "react";

const LineComponent = dynamic(import("@/components/common/LineComponent"));

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

const DateDIV = styled.div`
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

export default function StudyList({
    postList,
    studyGroup,
}: {
    postList: Post[];
    studyGroup: StudyGroup[];
}) {
    const router = useRouter();
    const moveToDetailPost = (pid: number) => {
        router.push(`/detailPost/${pid}`);
    };
    const [user, setUser] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/users`, {
                headers: {
                    "Content-Type": `application/json`,
                    "ngrok-skip-browser-warning": "69420",
                },
            })
            .then((response) => {
                setUser(response.data);
            });
    }, []);

    const getWriterName = (wid: number) => {
        if (user) {
            const writer = user.find((item, idx) => {
                return item.id == wid;
            });
            return writer?.name;
        } else {
            return "";
        }
    };

    //게시글 띄울 때 필요한 정보
    //postlist : title
    //studyGroup : department, studyMethod, recuritmentDeadline, currentstate, name
    //두개 연결: studygroupd의 id와 post의 studyGroupId가 같은 것
    if (postList && studyGroup) {
        return (
            <>
                <Outer>
                    {postList.map((e, i) => {
                        const currentStudyGroupId = e.studygroupId;
                        const currentStudyGroupInfo: StudyGroup | undefined =
                            studyGroup.find(
                                (item, idx) => item.id == currentStudyGroupId
                            );

                        if (!currentStudyGroupInfo) {
                            return <></>;
                        } else {
                            const deadline = new Date(
                                currentStudyGroupInfo.recruitmentDeadline
                            )
                                .toISOString()
                                .substring(0, 10);

                            return (
                                <ContentBox
                                    key={i}
                                    onClick={() => {
                                        moveToDetailPost(e.id);
                                    }}
                                >
                                    <FirstLine>
                                        <DateDIV>{deadline}</DateDIV>
                                        <CurrentState>
                                            {currentState[
                                                currentStudyGroupInfo
                                                    .currentState
                                            ].substring(3)}
                                        </CurrentState>
                                    </FirstLine>
                                    <Title>{e.title}</Title>
                                    <InfoBox>
                                        <Info>
                                            {department[
                                                currentStudyGroupInfo.department
                                            ].substring(3)}
                                        </Info>
                                        <Info>
                                            {studyMethod[
                                                currentStudyGroupInfo
                                                    .studyMethod
                                            ].substring(3)}
                                        </Info>
                                    </InfoBox>

                                    <LineComponent />
                                    <Writer>{getWriterName(e.writerId)}</Writer>
                                </ContentBox>
                            );
                        }
                    })}
                </Outer>
            </>
        );
    } else {
        return (
            <>
                <Outer>
                    <h1> 아직 작성된 게시글이 없습니다.</h1>
                </Outer>
            </>
        );
    }
}
