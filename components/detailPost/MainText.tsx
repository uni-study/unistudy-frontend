import styled from "styled-components";

type PROPS_TYPE = {
    mainText: string;
};

const Outer = styled.div`
    display: flex;
    width: 1030px;
    height: 500px;
    flex-direction: column;
    justify-content: center;
    white-space: pre-line;
`;

const Main = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: 600;
    white-space: pre-line;
`;
export default function MainText(props: PROPS_TYPE) {
    let showText = props.mainText;
    return (
        <>
            <Outer>
                <Main>{showText}</Main>
            </Outer>
        </>
    );
}
