import styled from "styled-components";

type PROPS_TYPE = {
    title: string;
    writer: string;
    postedAt: string;
};

const Outer = styled.div`
    display: flex;
    width: 1030px;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
`;

const TitleOfPost = styled.h1`
    margin: 0;
    width: 100%;
    height: 100px;
    font-size: 40px;
    font-weight: 600;
`;
const Writer = styled.div`
    color: #4e4e4e;
    font-size: 30px;
    font-weight: 600;
`;
const PostedAt = styled.div`
    color: #4e4e4e;
    font-size: 20px;
    font-weight: 600;
`;
export default function Title(props: PROPS_TYPE) {
    const title = props.title;
    const writer = props.writer;
    const postedAt = new Date(props.postedAt).toISOString().substring(0, 10);

    return (
        <>
            <Outer>
                <TitleOfPost>{title}</TitleOfPost>
                <Writer>{writer}</Writer>
                <PostedAt>{postedAt}</PostedAt>
            </Outer>
        </>
    );
}
