import dynamic from "next/dynamic";
import axios from "axios";

import { useRouter } from "next/router";
import { Post, StudyGroup, User } from "@/api/interface/data.interface";
import { useEffect, useState } from "react";
import { API_URL } from "@/api/commonAPI";
import styled from "styled-components";

const MainContent = dynamic(import("@/components/layout/mainContent"));
const Title = dynamic(import("@/components/detailPost/Title"));
const Information = dynamic(import("@/components/detailPost/Information"));
const MainText = dynamic(import("@/components/detailPost/MainText"));
const PorDBtn = dynamic(import("@/components/detailPost/PorDBtn"));
const Comment = dynamic(import("@/components/detailPost/Comment"));
const LineComponent = dynamic(import("@/components/common/LineComponent"));

const Outer = styled.div`
    display: flex;
    flex-direction: colmn;
    justify-content: center;
    align-items: center;
    gap: 70px;
`;

const Line = styled.hr`
    width: 100%;
    color: #c1c1c1;
`;

export default function DetailPost() {
    const router = useRouter();
    const POST_ID = router.query.pid;

    let [currentPost, setCurrentPost] = useState<Post | null>(null);
    let [currentSG, setCurrentSG] = useState<StudyGroup | null>(null);
    let [curWriter, setWriter] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postResponse = await axios.get(
                    `${API_URL}/post/${POST_ID}`
                );
                setCurrentPost(postResponse.data);

                const studyGroupResponse = await axios.get(
                    `${API_URL}/study-groups/${postResponse.data.studygroupId}`
                );
                setCurrentSG(studyGroupResponse.data);

                const userResponse = await axios.get(
                    `${API_URL}/user/${postResponse.data.writerId}`
                );
                setWriter(userResponse.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [POST_ID]);

    let STUDY_GROUP_ID: number = 0;
    if (currentPost) {
        STUDY_GROUP_ID = currentPost.studygroupId;
    }

    if (!currentPost || !currentSG || !curWriter) {
        return (
            <MainContent>
                <Outer>
                    <h1> Please Log In again. </h1>
                </Outer>
            </MainContent>
        );
    }
    return (
        <>
            <MainContent>
                <Outer>
                    <Title
                        title={currentPost.title}
                        writer={curWriter.name}
                        postedAt={currentPost.postedAt}
                    />
                    <LineComponent />
                    <Information studyGroupId={STUDY_GROUP_ID} />
                    <LineComponent />
                    <MainText mainText={currentPost.mainText} />
                    <PorDBtn />
                    <LineComponent />
                    <Comment />
                </Outer>
            </MainContent>
        </>
    );
}
