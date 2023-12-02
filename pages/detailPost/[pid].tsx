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

export default function Posting() {
    const router = useRouter();
    console.log("routing");

    console.log(router.query);
    const pid = router.query.pid;

    let [currentPost, setCurrentPost] = useState<Post[]>([]);
    useEffect(() => {
        axios
            .get(`http://10.64.154.163:8080/posts/${pid}`)
            .then((response) => {
                setCurrentPost(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, []);

    let currentStudygroupID = currentPost;

    //const pid = router.query.all;

    if (!true) {
        return <h1> Loading ... </h1>;
    }
    return (
        <>
            <MainContent>
                <Title
                    //title={currentPost.title}
                    title={"hi"}
                    //writer={currentPost.writer}
                    writer={"writer"}
                    //postedAt={currentPost.postedAt}
                    postedAt={"postedAt"}
                />
                <LineComponent />
                <Information //studyGroupId={currentPost.studygroupId}
                    studyGroupId={2}
                />

                <LineComponent />
                <MainText mainText={"currentPost.mainText"} />
                <ParticipateBtn />
                <LineComponent />
                <Comment />
            </MainContent>
        </>
    );
}
