import { MainContent } from "@/components/layout/mainContent";
import { Search } from "@/components/index/Search";
import { StudyList } from "@/components/index/StudyList";

import styled from "styled-components";
import { PageNation } from "@/components/index/PageNation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post, StudyGroup } from "@/api/interface/data.interface";
import { API_URL } from "@/api/commonAPI";

const Outer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 60px 0 60px 0;
    gap: 60px;
`;

export default function Home() {
    let [postList, setPostlist] = useState<Post[]>([]);
    let [studyGroup, setStudygroup] = useState<StudyGroup[]>([]);
    useEffect(() => {
        axios
            .get(`${API_URL}/posts`)
            .then((response) => {
                setPostlist(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`${API_URL}/study-groups`)
            .then((response) => {
                setStudygroup(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log("postlist is ", postList);
    console.log("studygroup is ", studyGroup);
    return (
        <>
            <MainContent>
                <Outer>
                    <Search />
                    {}
                    <StudyList postList={postList} studyGroup={studyGroup} />
                    <PageNation />
                </Outer>
            </MainContent>
        </>
    );
}
