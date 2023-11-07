import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Outer = styled.div`
    display: flex;
    align-items: flex-start;
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

    const handlerOnClick = () => {
        router.push("/writePost");
    };

    const [isLogIn, setIsLogIn] = useState(false);
    if (isLogIn) {
        return <></>;
    }
    return (
        <>
            <Outer>
                <Img
                    src={"/images/logos/Logo.png"}
                    alt="Unistudy Logo"
                    width={365}
                    height={45}
                />
                <ButtonBox>
                    <Button onClick={handlerOnClick}>+ New Post</Button>
                    <Button>LogIn</Button>
                    <Button>SignUp</Button>
                </ButtonBox>
            </Outer>
        </>
    );
}
