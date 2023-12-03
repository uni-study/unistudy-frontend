import { useRouter } from "next/router";
import styled from "styled-components";
import { MainContent } from "@/components/layout/mainContent";
import Title from "@/components/detailPost/Title";
import Information from "@/components/detailPost/Information";
import MainText from "@/components/detailPost/MainText";
import ParticipateBtn from "@/components/detailPost/ParticipateBtn";
import Comment from "@/components/detailPost/Comment";
import LineComponent from "@/components/common/LineComponent";
import { Post, StudyGroup } from "@/api/interface/data.interface";
import { useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { API_URL } from "@/api/commonAPI";
import { current } from "@reduxjs/toolkit";
import { POST_TYPE } from "@/api/interface/data.interface";

const Outer = styled.div`
    display: inline-flex;
    padding-top: 60px;
    padding-bottom: 60px;
    flex-direction: column;
    align-items: center;
    gap: 70px;
`;

const Line = styled.hr`
    width: 100%;
    color: #c1c1c1;
`;

//detailPost에 담기는 내용
// studygroup 내용
//post의 타이틀, 메인텍스트, postedAt

export default function DetailPost() {
    const router = useRouter();
    const POST_ID = router.query.pid;

    let [currentPost, setCurrentPost] = useState<Post[]>([]);
    let [currentSG, setCurrentSG] = useState<StudyGroup[]>([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/post/${POST_ID}`)
            .then((response) => {
                setCurrentPost(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, [POST_ID]);

    console.log("after currentPost ", currentPost);

    const STUDY_GROUP_ID: number = currentPost.studygroupId;

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

    console.log("currentSG is ", currentSG);

    if (!currentPost || !currentSG) {
        return <h1> Loading ... </h1>;
    }
    return (
        <>
            <MainContent>
                <Title
                    title={currentPost.title}
                    writer={currentSG.name}
                    postedAt={currentPost.postedAt}
                />
                <LineComponent />
                <Information studyGroupId={STUDY_GROUP_ID} />
                <LineComponent />
                <MainText mainText={currentPost.mainText} />
                <ParticipateBtn />
                <LineComponent />
                <Comment />
            </MainContent>
        </>
    );
}
