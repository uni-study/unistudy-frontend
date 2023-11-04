import styled from "styled-components";

const Outer = styled.div``;
const Button = styled.button`
    width: 270px;
    height: 45px;
    border-radius: 40px;
    border: none;
    background: #44c1c4;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`;
export default function ParticipateBtn() {
    return (
        <>
            <Outer>
                <Button>Participate</Button>
            </Outer>
        </>
    );
}
