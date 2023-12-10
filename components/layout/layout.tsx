import dynamic from "next/dynamic";
import { ReactNode } from "react";
import styled from "styled-components";

const Header = dynamic(import("@/components/layout/header"));
const Footer = dynamic(import("@/components/layout/footer"));

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
