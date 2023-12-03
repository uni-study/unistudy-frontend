import { API_URL } from "@/api/commonAPI";
import { MainContent } from "@/components/layout/mainContent";
import axios from "axios";
import { use, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setUserInfo } from "@/store/modules/counter";

const TotalBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`;
const LogInTitle = styled.h1`
    width: 148px;
    height: 59.829px;
    text-align: center;
    font-size: 50px;
    font-weight: 600;
`;
const LogInBox = styled.div`
    display: flex;
    width: 610px;
    height: 211px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 11px;
`;
const EmailInput = styled.input`
    width: 610px;
    height: 100px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
`;
const PasswordInput = styled.input`
    width: 610px;
    height: 100px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
`;
const ButtonBox = styled.div`
    display: flex;
    width: 270px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const LogInButton = styled.button`
    width: 270px;
    height: 59.829px;
    border-radius: 40px;
    background: #44c1c4;
    color: white;
    border: #fff;
`;
const SignUpButton = styled.button`
    color: #9d9d9d;
    width: 270px;
    height: 68px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border: #fff;
    background: #fff;
`;

export default function LogIn() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = async () => {
        try {
            const response = await axios.get(`${API_URL}/users`);

            const users = response.data;
            console.log("user info is ", users);

            // 이메일로 사용자 정보 찾기
            const foundUser = users.find((user: any) => user.email === email);

            if (foundUser && foundUser.pw === password) {
                console.log("로그인 성공");
                dispatch(setIsLoggedIn(true));
                dispatch(setUserInfo(foundUser));
                router.push("/"); // 로그인 성공 시 이동할 페이지로 경로 지정 ('/dashboard'는 예시 경로)
            } else {
                console.log("이메일 또는 비밀번호가 일치하지 않습니다.");
            }
        } catch (error) {
            console.error("로그인 에러:", error);
        }
    };
    return (
        <>
            <MainContent>
                <TotalBox>
                    <LogInTitle>Log In</LogInTitle>
                    <LogInBox>
                        <EmailInput
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </LogInBox>
                    <ButtonBox>
                        <LogInButton onClick={handleLogIn}>Log In</LogInButton>
                        <SignUpButton onClick={() => router.push("/signUp")}>
                            Sign Up
                        </SignUpButton>
                    </ButtonBox>
                </TotalBox>
            </MainContent>
        </>
    );
}
