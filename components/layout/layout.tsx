import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";
import styled from "styled-components";

const Outer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    width: 100%;
    max-width: 1440px;
`;

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Outer>
                <Inner>
                    <Header />
                    {children}
                    <Footer />
                </Inner>
            </Outer>
        </>
    );
}
