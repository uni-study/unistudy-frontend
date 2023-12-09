import { API_URL } from "@/api/commonAPI";
import { MainContent } from "@/components/layout/mainContent";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
const NameTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
`;
const NameInput = styled.input`
    width: 610px;
    height: 100px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
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

interface signUpAPIBody {
    pw: string;
    name: string;
    email: string;
}

export default function SignUp() {
    const [userData, setUserData] = useState<signUpAPIBody>({
        pw: "",
        name: "",
        email: "",
    });
    const router = useRouter();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: keyof signUpAPIBody
    ) => {
        const { value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSignUp = async () => {
        try {
            const response = await axios.post(`${API_URL}/signup`, userData, {
                withCredentials: true,
            });

            alert("Successfully signed up!");
            router.push("/logIn");
        } catch (error: any) {
            console.log("Signup failed", error);
            console.log("Signup failed response", error.response);
        }
    };
    return (
        <>
            <MainContent>
                <TotalBox>
                    <SignUpTitle>Create Account</SignUpTitle>
                    <InputBox>
                        <NameBox>
                            <NameTitle>Name</NameTitle>
                            <NameInput
                                onChange={(e) => handleInputChange(e, "name")}
                                value={userData.name}
                            />
                        </NameBox>
                        <AddressBox>
                            <AddressTitle>Email Address</AddressTitle>
                            <AddressInput
                                onChange={(e) => handleInputChange(e, "email")}
                                value={userData.email}
                            />
                        </AddressBox>
                        <PasswordBox>
                            <PasswordTitle>Password</PasswordTitle>
                            <PasswordInput
                                type="password"
                                onChange={(e) => handleInputChange(e, "pw")}
                                value={userData.pw}
                            />
                        </PasswordBox>
                    </InputBox>
                    <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
                </TotalBox>
            </MainContent>
        </>
    );
}
