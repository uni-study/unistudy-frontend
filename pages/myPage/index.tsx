import LineComponent from "@/components/common/LineComponent";
import { MainContent } from "@/components/layout/mainContent";
import { USERS_TYPE } from "@/types/data";
import USER_INFO_DATA from "@/DATA/USER_INFO_DATA.json";
import Image from "next/image";
import styled from "styled-components";

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
const MyStudyInfo = styled.ol`
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

const PostingList = styled.ol`
    font-size: 30px;
    font-weight: 400;
`;

const PostingListItem = styled.li``;

const userInfo: USERS_TYPE = {
    userData: USER_INFO_DATA,
};

export default function MyPage() {
    return (
        <MainContent>
            <ProfileBox>
                <ProfileImg
                    src={"/images/icons/ProfileBasic.png"}
                    alt="profile Image"
                    width={150}
                    height={150}
                />
                <ProfileName>홍길동</ProfileName>
            </ProfileBox>
            <MyStudyInfoBox>
                <MyStudyInfoTitle>My Study Group</MyStudyInfoTitle>
                <MyStudyInfo>
                    <MyStudyInfoItem></MyStudyInfoItem>
                </MyStudyInfo>
            </MyStudyInfoBox>
            <LineComponent />
            <PostingListBox>
                <PostingListTitle>Posting List</PostingListTitle>
                <PostingList>
                    <PostingListItem></PostingListItem>
                </PostingList>
            </PostingListBox>
        </MainContent>
    );
}
