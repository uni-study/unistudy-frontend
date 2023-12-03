import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "@/api/commonAPI";

const Outer = styled.div`
    display: flex;
    width: 1030px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 30px 0px;
    flex-wrap: wrap;
`;
const CommentTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: #4e4e4e;
    font-size: 15px;
    font-weight: 600;
    gap: 30px;
`;
const CommentText = styled.h1``;
const CommentNumber = styled.h1``;
const CommentList = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
`;
const CommentItem = styled.li`
    width: 100%;
    display: flex;
    padding: 10px 0px;
    flex-direction: column;
    align-items: flex-start;
`;

const CommentItemBox = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;
const CommentItemUser = styled.div`
    display: flex;
    width: 50%;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    font-size: 23px;
    font-weight: 600;
`;

const CommentItemText = styled.div`
    display: flex;
    width: 100%;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    font-size: 20px;
    font-weight: 400;
`;
const CommentItemDate = styled.div`
    display: flex;
    width: 50%;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #9d9d9d;
    text-align: right;
    font-size: 15px;
    font-weight: 600;
`;
const CommentBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;
const CommentInput = styled.input`
    width: 90%;
    height: 100px;
    border-radius: 40px;
    border: 3px solid #e6e6e6;
    background: #fff;
`;
const CommentButton = styled.button`
    width: 10%;
    height: 45px;
    border-radius: 40px;
    border: 0px solid #fff;
    background: #44c1c4;
`;

interface CommentInterface {
    postId: number;
    writerId?: number;
    mainText: string;
    postedAt: string;
}

export default function Comment() {
    const router = useRouter();
    const curUserInfo = useSelector((state: RootState) => state.user.userInfo);
    let [newComment, setNewComment] = useState<CommentInterface>({
        postId: Number(router.query.pid),
        writerId: curUserInfo?.id,
        mainText: "",
        postedAt: "2023-09-09",
    });

    let [comment, setComment] = useState<CommentInterface[]>([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/comments`)
            .then((res) => {
                console.log("Get comment response", res);
                setComment(res.data);
            })
            .catch((err) => {
                "Error";
            });
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment({
            ...newComment,
            mainText: e.target.value,
        });
    };

    const handleClick = () => {
        axios
            .post(`${API_URL}/comment`, newComment)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Outer>
                <CommentTitle>
                    <CommentText>Comment</CommentText>
                    <CommentNumber>0</CommentNumber>
                </CommentTitle>
                <CommentList>
                    {comment.map((item: any) => {
                        const postTime = new Date(item.postedAt)
                            .toISOString()
                            .substring(0, 10);
                        return (
                            <CommentItem key={item.id}>
                                <CommentItemBox>
                                    <CommentItemUser>
                                        {curUserInfo?.name}
                                    </CommentItemUser>
                                    <CommentItemDate>
                                        {postTime}
                                    </CommentItemDate>
                                </CommentItemBox>
                                <CommentItemText>
                                    {item.mainText}
                                </CommentItemText>
                            </CommentItem>
                        );
                    })}
                </CommentList>
                <CommentBox>
                    <CommentInput
                        placeholder="Add a Comment"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <CommentButton onClick={handleClick}>Apply</CommentButton>
                </CommentBox>
            </Outer>
        </>
    );
}
