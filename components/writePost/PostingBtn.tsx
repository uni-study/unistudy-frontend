import styled from "styled-components";
import { useState } from "react";
import { Posts } from "@/api/postsAPI";
import type { Post } from "@/api/interface/data.interface";

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
    const [post, setPost] = useState<Post[]>([]);
    Posts.addPost(post)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    const handlerPosting = () => {};
    return (
        <>
            <ButtonBox>
                <ButtonOfCancel>Cancel</ButtonOfCancel>
                <ButtonOfPosting onClick={() => handlerPosting}>
                    Posting
                </ButtonOfPosting>
            </ButtonBox>
        </>
    );
}
