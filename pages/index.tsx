import { MainContent } from "@/components/layout/mainContent";
import { Search } from "@/components/index/Search";
import { StudyList } from "@/components/index/StudyList";

import styled from "styled-components";
import { PageNation } from "@/components/index/PageNation";

const Outer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 60px 0 60px 0;
    gap: 60px;
`;

export default function Home() {
    return (
        <>
            <MainContent>
                <Outer>
                    <Search />
                    <StudyList />
                    <PageNation />
                </Outer>
            </MainContent>
        </>
    );
}
