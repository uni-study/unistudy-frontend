import { MainContent } from "@/components/layout/mainContent";
import styled from "styled-components";

const SignUpTitle = styled.h1`
    width: 270px;
    height: 59.829px;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
`;
const TotalBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
`;
const AddressBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
const AddressTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
`;
const AddressInput = styled.input`
    width: 610px;
    height: 100px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
`;
const PasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
const PasswordTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
`;
const PasswordInput = styled.input`
    width: 610px;
    height: 100px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
`;
const SignUpButton = styled.button`
    width: 270px;
    height: 59.829px;
    border-radius: 40px;
    background: #44c1c4;
    color: white;
    border: #fff;
`;

export default function SignUp() {
    return (
        <>
            <MainContent>
                <TotalBox>
                    <SignUpTitle>Create Account</SignUpTitle>
                    <InputBox>
                        <AddressBox>
                            <AddressTitle>Email Address</AddressTitle>
                            <AddressInput />
                        </AddressBox>
                        <PasswordBox>
                            <PasswordTitle>Password</PasswordTitle>
                            <PasswordInput />
                        </PasswordBox>
                    </InputBox>
                    <SignUpButton>Sign Up</SignUpButton>
                </TotalBox>
            </MainContent>
        </>
    );
}
