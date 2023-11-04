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
`;

const Main = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: 600;
`;
export default function MainText(props: PROPS_TYPE) {
    return (
        <>
            <Outer>
                <Main>{props.mainText}</Main>
            </Outer>
        </>
    );
}
