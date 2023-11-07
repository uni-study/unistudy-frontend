import { useRouter } from "next/router";
import POST_DUMMY_DATA from "@/DATA/POST_DUMMY_DATA.json";
import styled from "styled-components";
import { MainContent } from "@/components/layout/mainContent";
import Title from "@/components/detailPost/Title";
import Information from "@/components/detailPost/Information";
import MainText from "@/components/detailPost/MainText";
import ParticipateBtn from "@/components/detailPost/ParticipateBtn";
import Comment from "@/components/detailPost/Comment";
import { POSTS_TYPE, POST_TYPE } from "@/types/data";
import LineComponent from "@/components/common/LineComponent";

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

const Posts: POSTS_TYPE = {
    postData: POST_DUMMY_DATA,
};
export default function Post() {
    const router = useRouter();
    const pid = router.query.postId;

    const CurrentPost: POST_TYPE | undefined = Posts.postData.find(
        (post) => post.id === Number(pid)
    );

    if (!CurrentPost) {
        return <h1> Loading ... </h1>;
    }
    return (
        <>
            <MainContent>
                <Title
                    title={CurrentPost.title}
                    writer={CurrentPost.writer}
                    postedAt={CurrentPost.postedAt}
                />
                <LineComponent />
                <Information studyGroupId={CurrentPost.studyGroupId} />
                <LineComponent />
                <MainText mainText={CurrentPost.mainText} />
                <ParticipateBtn />
                <LineComponent />
                <Comment />
            </MainContent>
        </>
    );
}
