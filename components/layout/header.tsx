import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Outer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 415px;
    margin: 60px 99px 0px 99px;
`;
const Img = styled(Image)``;

const ButtonBox = styled.div`
    display: flex;
`;

const Button = styled.button`
    display: flex;
    width: 150px;
    height: 45px;
    justify-content: center;
    align-items: center;
    border: #ffffff;
    background-color: #ffffff;
`;

export default function Header() {
    const router = useRouter();

    const toWritePostPage = () => {
        router.push("/writePost");
    };

    const toMainPage = () => {
        router.push("/");
    };

    const toMyPage = () => {
        router.push("/myPage");
    };

    const toLogInPage = () => {
        router.push("/logIn");
    };

    const toSingUpPage = () => {
        router.push("/signUp");
    };

    const [isLogIn, setIsLogIn] = useState(true);
    if (isLogIn) {
        return (
            <>
                <Outer>
                    <Img
                        src={"/images/logos/Logo.png"}
                        alt="Unistudy Logo"
                        width={365}
                        height={45}
                        onClick={toMainPage}
                    />
                    <ButtonBox>
                        <Button onClick={toWritePostPage}>+ New Post</Button>
                        <Img
                            src={"/images/icons/ProfileBasic.png"}
                            alt="Profile"
                            width={45}
                            height={45}
                            onClick={toMyPage}
                        />
                    </ButtonBox>
                </Outer>
            </>
        );
    }
    return (
        <>
            <Outer>
                <Img
                    src={"/images/logos/Logo.png"}
                    alt="Unistudy Logo"
                    width={365}
                    height={45}
                    onClick={toMainPage}
                />
                <ButtonBox>
                    <Button onClick={toWritePostPage}>+ New Post</Button>
                    <Button onClick={toLogInPage}>LogIn</Button>
                    <Button onClick={toSingUpPage}>SignUp</Button>
                </ButtonBox>
            </Outer>
        </>
    );
}
