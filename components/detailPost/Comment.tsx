import styled from "styled-components";

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
const CommentBox = styled.input`
    width: 100%;
    height: 100px;
    border-radius: 40px;
    border: 3px solid #e6e6e6;
    background: #fff;
`;

export default function Comment() {
    return (
        <>
            <Outer>
                <CommentTitle>
                    <CommentText>Comment</CommentText>
                    <CommentNumber>0</CommentNumber>
                </CommentTitle>
                <CommentBox />
            </Outer>
        </>
    );
}
