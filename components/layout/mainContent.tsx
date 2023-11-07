import styled from "styled-components";
import { ReactNode } from "react";

const Outer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    width: 100%;
    max-width: 1030px;
    display: flex;
    padding-top: 60px;
    padding-bottom: 60px;
    flex-direction: column;
    //align-items: center;
    gap: 70px;
`;
export function MainContent({ children }: { children: ReactNode }) {
    return (
        <>
            <Outer>
                <Inner>{children}</Inner>
            </Outer>
        </>
    );
}
