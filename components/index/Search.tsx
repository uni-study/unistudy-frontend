import styled from "styled-components";
import { department, studyMethod } from "@/types/data";

const Outer = styled.div``;
const Title = styled.h1`
    color: #545454;
    font-size: 40px;
    font-weight: 400;
`;

const SearchBox = styled.div`
    display: flex;
    gap: 260px;
`;

const Filtering = styled.div`
    display: flex;
    gap: 20px;
`;
const Select = styled.select`
    width: 225px;
    height: 45px;
    border-radius: 20px;
    border: 3px solid #e6e6e6;
    background: #fff;
`;

const SearchBar = styled.input`
    width: 300px;
    height: 45px;
    border-radius: 30px;
    border: #fff;
    background: #efeff1;
`;

export function Search() {
    return (
        <>
            <Outer>
                <Title>Study Group</Title>
                <SearchBox>
                    <Filtering>
                        <Select>
                            {department.map((e, i) => {
                                return (
                                    <option value={e} key={i}>
                                        {" "}
                                        {e}{" "}
                                    </option>
                                );
                            })}
                        </Select>
                        <Select>
                            {studyMethod.map((e, i) => {
                                return (
                                    <option value={e} key={i}>
                                        {" "}
                                        {e}{" "}
                                    </option>
                                );
                            })}
                        </Select>
                    </Filtering>
                    <SearchBar></SearchBar>
                </SearchBox>
            </Outer>
        </>
    );
}
