import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { API_URL } from "@/api/commonAPI";
import { useRouter } from "next/router";

const ButtonBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 70px;
`;

const ButtonOfCancel = styled.button`
    width: 270px;
    height: 45px;
    border-radius: 40px;
    border: #fff;
    background: #f1f1f1;
`;

const ButtonOfPosting = styled.button`
    width: 270px;
    height: 45px;
    border-radius: 40px;
    border: #fff;
    background: #44c1c4;
    color: #fff;
`;

export default function PostingBtn() {
    const stepTwoData = useSelector(
        (state: RootState) => state.stepTwo.stepTwoData
    );
    const router = useRouter();

    const handlerPosting = () => {
        if (stepTwoData) {
            const postData = {
                ...stepTwoData,
            };

            axios
                .post(`${API_URL}/post`, postData)
                .then((response) => {
                    alert("New post is created!");
                    router.push("/");
                })
                .catch((error) => {
                    console.error("Error posting data:", error);
                    alert("Please try again!");
                });
        } else {
            alert("Please fill out all the blanks!");
        }
    };
    return (
        <>
            <ButtonBox>
                <ButtonOfCancel>Cancel</ButtonOfCancel>
                <ButtonOfPosting onClick={handlerPosting}>
                    Posting
                </ButtonOfPosting>
            </ButtonBox>
        </>
    );
}
