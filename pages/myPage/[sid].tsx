import dynamic from "next/dynamic";
import { API_URL } from "@/api/commonAPI";
import { Member, StudyGroup } from "@/api/interface/data.interface";
import { RootState } from "@/store";
import { currentState } from "@/types/data";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LineComponent = dynamic(import("@/components/common/LineComponent"));
const MainContent = dynamic(import("@/components/layout/mainContent"));

const Outer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const TitleBox = styled.div`
    width: 1030px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
`;
const Title = styled.h1`
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
    font-weight: 600;
`;
const Writer = styled.div`
    display: flex;
    width: 100%;
    height: 22.436px;
    flex-direction: column;
    justify-content: center;
    color: #4e4e4e;
    font-size: 30px;
    font-weight: 600;
`;

const CurMemberBox = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
`;
const CurMemberTitle = styled.h1`
    display: flex;
    width: 100%;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    color: #4e4e4e;
    font-size: 30px;
    font-weight: 600;
`;

const CurMemberList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
`;
const CurMemberOnelist = styled.li`
    list-style: none;
    width: 100%;
    height: 68px;
    color: #9d9d9d;
    font-size: 20px;
    font-weight: 600;
    border-radius: 40px;
    border: 3px solid #e6e6e6;
    background: #fff;
`;
const CurMemberName = styled.div`
    width: 100%;
    height: 50%;
    padding: 25px 0px 20px 30px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
`;

const ApplicantBox = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
`;
const ApplicantTitle = styled.h1`
    display: flex;
    width: 100%;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    color: #4e4e4e;
    font-size: 30px;
    font-weight: 600;
`;
const ApplicantList = styled.ul`
    width: 100%;
`;
const Onelist = styled.li`
    list-style: none;
    width: 100%;
    height: 68px;
    display: flex;
    padding: 15px 19px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    flex-shrink: 0;
    color: #9d9d9d;
    font-size: 20px;
    font-weight: 600;
    border-radius: 40px;
    border: 3px solid #e6e6e6;
    background: #fff;
`;
const ApplicantName = styled.div`
    width: 70%;
    height: 50%;
    padding: 30px 0px 20px 30px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
`;
const ButtonBox = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
`;
const AcceptBtn = styled.button`
    width: 150px;
    height: 45px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-radius: 40px;
    border: 0px solid #fff;
    color: #fff;
    background: #44c1c4;
`;
const RefuseBtn = styled.button`
    width: 150px;
    height: 45px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-radius: 40px;
    border: 0px solid #fff;
    color: #0;
    background: #f1f1f1;
`;
const CurrentStateBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`;
const CurrentStateTitle = styled.h1`
    width: 55%;
    color: #4e4e4e;
    font-size: 30px;
    font-weight: 600;
`;
const CurrentStateSelect = styled.select`
    width: 45%;
    height: 50px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
    background: #fff;
`;
const CurrentStateOption = styled.option``;
const ModifyBtn = styled.button`
    width: 150px;
    height: 45px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-radius: 40px;
    border: 0px solid #fff;
    color: #fff;
    background: #44c1c4;
`;

export default function Applicant() {
    const userInfo = useSelector((state: RootState) => state.user.userInfo);
    const router = useRouter();
    const SG_ID = router.query.sid;
    const [studyGroup, setStudyGroup] = useState<StudyGroup>();
    const [newState, setNewState] = useState("");
    const [member, setMember] = useState<Member[]>([]);
    const [participantName, setParticipantName] = useState<string>("");

    useEffect(() => {
        axios
            .get(`${API_URL}/study-groups/${SG_ID}`)
            .then((response) => {
                setStudyGroup(response.data);
            })
            .catch((error) => {
                console.error("Error getting studygroup data:", error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`${API_URL}/studygroup-member-list/${SG_ID}`)
            .then((response) => {
                setMember(response.data);
            })
            .catch((error) => {
                console.error("Error getting member data:", error);
            });
    }, []);

    const handleAccept = (participant: Member) => {
        axios
            .put(`${API_URL}/studygroup-member/${participant.id}`, {
                ...participant,
                accepted: true,
            })
            .then((response) => {
                alert("Accepted successfully!");
                router.push("/myPage");
            })
            .catch((error) => {
                console.error("Error accepting participant:", error);
            });
    };

    let TSdeadline = "";
    if (studyGroup) {
        TSdeadline = new Date(studyGroup.recruitmentDeadline)
            .toISOString()
            .substring(0, 10);
    } else {
        TSdeadline = "1900-01-01";
    }

    const handleModify = () => {
        // 서버로 변경된 currentState 값을 보내는 PUT 요청을 보내는 코드
        axios
            .put(`${API_URL}/study-groups/${SG_ID}`, {
                ...studyGroup,
                currentState: Number(newState.substring(0, 1)),
                recruitmentDeadline: TSdeadline, // 수정된 currentState 값 전송
            })
            .then((response) => {
                alert("Recruiting Statement is changed successfully!");
                router.push("/myPage");
                // 필요에 따라 어떤 작업을 수행하세요 (예: 성공 메시지 출력 등)
            })
            .catch((error) => {
                console.error("Error updating study group:");
            });
    };

    const findMemberName = async (uid: number) => {
        try {
            const response = await axios.get(`${API_URL}/user/${uid}`);
            setParticipantName(response.data.name);
        } catch (error) {
            console.error("Error getting user name:", error);
        }
    };

    if (!studyGroup || !member) {
        return (
            <>
                <MainContent>
                    <h1> User cannot find </h1>
                </MainContent>
            </>
        );
    } else {
        return (
            <>
                <MainContent>
                    <TitleBox>
                        <Title>{studyGroup?.name}</Title>
                        <Writer>{userInfo?.name}</Writer>
                    </TitleBox>

                    {member.map((item, i) => {
                        if (item.accepted) {
                            const MEMBER_ID = item.userId;
                            findMemberName(MEMBER_ID);
                            return (
                                <>
                                    <LineComponent />
                                    <CurMemberBox>
                                        <CurMemberTitle>
                                            Current Member
                                        </CurMemberTitle>

                                        <CurMemberList>
                                            <CurMemberOnelist key={i}>
                                                <CurMemberName>
                                                    {participantName}
                                                </CurMemberName>
                                            </CurMemberOnelist>
                                        </CurMemberList>
                                    </CurMemberBox>
                                </>
                            );
                        } else {
                            const MEMBER_ID = item.userId;
                            findMemberName(MEMBER_ID);
                            return (
                                <>
                                    <LineComponent />
                                    <ApplicantBox>
                                        <ApplicantTitle>
                                            Applicant List
                                        </ApplicantTitle>
                                        <ApplicantList>
                                            <Onelist key={i}>
                                                <ApplicantName>
                                                    {participantName}
                                                </ApplicantName>
                                                <ButtonBox>
                                                    <AcceptBtn
                                                        onClick={() => {
                                                            handleAccept(item);
                                                        }}
                                                    >
                                                        Accept
                                                    </AcceptBtn>
                                                    <RefuseBtn>
                                                        Refuse
                                                    </RefuseBtn>
                                                </ButtonBox>
                                            </Onelist>
                                        </ApplicantList>
                                    </ApplicantBox>
                                    ;
                                </>
                            );
                        }
                    })}

                    <LineComponent />
                    <Outer>
                        <CurrentStateBox>
                            <CurrentStateTitle>
                                Recruiting or Done
                            </CurrentStateTitle>
                            <CurrentStateSelect
                                placeholder="Recruiting"
                                value={newState} // currentState 값과 useState에 의해 연결
                                onChange={(e) => setNewState(e.target.value)}
                            >
                                {currentState.map((item, i) => {
                                    return (
                                        <CurrentStateOption
                                            key={i}
                                            value={item}
                                        >
                                            {item}
                                        </CurrentStateOption>
                                    );
                                })}
                            </CurrentStateSelect>
                        </CurrentStateBox>
                        <ModifyBtn onClick={handleModify}>Modify</ModifyBtn>
                    </Outer>
                </MainContent>
            </>
        );
    }
}
