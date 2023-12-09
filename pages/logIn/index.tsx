import { API_URL } from "@/api/commonAPI";
import { MainContent } from "@/components/layout/mainContent";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setUserInfo } from "@/store/modules/user";
import { error } from "console";

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

const InputWrap = styled.div`
    height: 80px;
    display: inline-block;
    width: 100%;
`;
const EmailInput = styled.input`
    width: 610px;
    height: 100%;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
`;
const PasswordInput = styled.input`
    width: 610px;
    height: 100%;
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
    font-size: 15px;
    color: white;
    border: #fff;
`;
const SignUpButton = styled.button`
    color: #9d9d9d;
    width: 270px;
    height: 59.829px;
    text-align: center;
    font-size: 15px;
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
            // POST /login API 호출
            const response = await axios.post(`${API_URL}/login`, {
                email: email,
                pw: password,
            });
            if (response.status === 200) {
                dispatch(setIsLoggedIn(true));
                dispatch(setUserInfo(response.data));
                router.push("/");
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
                        <InputWrap>
                            <EmailInput
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputWrap>
                        <InputWrap>
                            <PasswordInput
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputWrap>
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
