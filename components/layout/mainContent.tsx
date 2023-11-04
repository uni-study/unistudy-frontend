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
