import Image from "next/image";
import styled from "styled-components";

const Outer = styled.div`
    padding: 51px 100px 30.34px 100px;
    background-color: #f1f1f1;
`;

const Inner = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    max-width: 1240px;
`;

const Img = styled(Image)``;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Text = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    color: #565656;
    font-size: 15px;
    font-weight: 600;
`;

export default function Footer() {
    return (
        <>
            <Outer>
                <Inner>
                    <Img
                        src={"/images/logos/Logo.png"}
                        alt="Unistudy Logo"
                        width={200}
                        height={24.658}
                    />
                    <TextBox>
                        <Text>
                            UNIST CSE48001: Special Topic In CSE I (Web
                            Technology)
                        </Text>
                        <Text>@UniStudy. ALL RIGHTS RESERVED</Text>
                    </TextBox>
                </Inner>
            </Outer>
        </>
    );
}
