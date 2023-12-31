import dynamic from "next/dynamic";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import type { Post, StudyGroup } from "@/api/interface/data.interface";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { API_URL } from "@/api/commonAPI";
import styled from "styled-components";

const LineComponent = dynamic(import("@/components/common/LineComponent"));
const MainContent = dynamic(import("@/components/layout/mainContent"));

const ProfileBox = styled.div`
    display: flex;
    padding-right: 0px;
    align-items: center;
`;
const ProfileImg = styled(Image)``;
const ProfileName = styled.h1`
    width: 451px;
    height: 45px;
    text-align: left;
    padding-left: 50px;
    font-size: 40px;
    font-weight: 600;
`;

const MyStudyInfoBox = styled.div``;
const MyStudyInfoTitle = styled.h1`
    width: 100%;
    height: 45px;
    font-size: 40px;
    font-weight: 600;
`;
const MyStudyInfo = styled.ul`
    font-size: 30px;
    font-weight: 400;
`;
const MyStudyInfoItem = styled.li``;

const PostingListBox = styled.div``;
const PostingListTitle = styled.h1`
    width: 100%;
    height: 45px;
    font-size: 40px;
    font-weight: 600;
`;

const PostingList = styled.ul`
    font-size: 30px;
    font-weight: 400;
`;

const PostingListItem = styled.li``;

export default function MyPage() {
    const userInfo = useSelector((state: RootState) => state.user.userInfo);
    const currentUID = userInfo?.id;
    const [userPosts, setUserPosts] = useState<Post[]>();
    const [userStudyGroups, setUserStudyGroups] = useState<StudyGroup[]>();
    const router = useRouter();

    //get post of current user
    useEffect(() => {
        axios
            .get(`${API_URL}/posts?writerId=${currentUID}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "ngrok-skip-browser-warning": "69420",
                },
                withCredentials: true,
            })
            .then((response) => {
                setUserPosts(response.data);
            })
            .catch((error) => {
                console.error("Cannot find post", error);
            });
    }, []);

    //get studygroup of current user
    useEffect(() => {
        axios
            .get(`${API_URL}/study-groups?leaderId=${currentUID}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "ngrok-skip-browser-warning": "69420",
                },
                withCredentials: true,
            })
            .then((response) => {
                setUserStudyGroups(response.data);
            })
            .catch((error) => {
                console.error("Cannot find studygorups", error);
            });
    }, []);

    //When click the title of studygroup, move to studygroup page
    const handleMoveToSG = (sgid: number) => {
        router.push(`/myPage/${sgid}`);
    };

    //When click the title of post, move to post page
    const handleMoveToPost = (pid: number) => {
        router.push(`/detailPost/${pid}`);
    };

    if (userInfo && userPosts && userStudyGroups) {
        const USER_NAME = userInfo.name;
        return (
            <MainContent>
                <ProfileBox>
                    <ProfileImg
                        src={"/images/icons/ProfileBasic.png"}
                        alt="profile Image"
                        width={150}
                        height={150}
                    />
                    <ProfileName>{USER_NAME}</ProfileName>
                </ProfileBox>
                <MyStudyInfoBox>
                    <MyStudyInfoTitle>My Study Group</MyStudyInfoTitle>
                    <MyStudyInfo>
                        {userStudyGroups.map((studyGroup) => (
                            <MyStudyInfoItem
                                key={studyGroup.id}
                                onClick={() => handleMoveToSG(studyGroup.id)}
                            >
                                {studyGroup.name}
                            </MyStudyInfoItem>
                        ))}
                    </MyStudyInfo>
                </MyStudyInfoBox>
                <LineComponent />
                <PostingListBox>
                    <PostingListTitle>Posting List</PostingListTitle>
                    <PostingList>
                        {userPosts.map((post) => (
                            <PostingListItem
                                key={post.id}
                                onClick={() => handleMoveToPost(post.id)}
                            >
                                {post.title}{" "}
                            </PostingListItem>
                        ))}
                    </PostingList>
                </PostingListBox>
            </MainContent>
        );
    } else {
        return (
            <MainContent>
                <h1> Wrong Access </h1>
                <h2> Please check if you are logged in. </h2>
            </MainContent>
        );
    }
}
