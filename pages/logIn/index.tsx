import { MainContent } from "@/components/layout/mainContent";
import styled from "styled-components";

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
    return (
        <>
            <MainContent>
                <TotalBox>
                    <LogInTitle>Log In</LogInTitle>
                    <LogInBox>
                        <EmailInput type="email" placeholder="Email" />
                        <PasswordInput type="password" placeholder="Password" />
                    </LogInBox>
                    <ButtonBox>
                        <LogInButton>Log In</LogInButton>
                        <SignUpButton>Sign Up</SignUpButton>
                    </ButtonBox>
                </TotalBox>
            </MainContent>
        </>
    );
}
