import { RootState } from "@/store";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/modules/user";

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
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Remove token from localStorage
        localStorage.removeItem("token");

        //Logout action dispatch from Redux store
        dispatch(logoutUser());

        //Move to Login page after logout
        router.push("/logIn");
    };

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

    const toSignUpPage = () => {
        router.push("/signUp");
    };

    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    if (isLoggedIn) {
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
                        <Button onClick={handleLogout}>Log Out</Button>
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
                    <Button onClick={toLogInPage}>LogIn</Button>
                    <Button onClick={toSignUpPage}>SignUp</Button>
                </ButtonBox>
            </Outer>
        </>
    );
}
