import styled from "styled-components";
import { department, currentState } from "@/types/data";
import { StudyGroup } from "@/api/interface/data.interface";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@/api/commonAPI";

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
    const [filteredStudyGroups, setFilteredStudyGroups] = useState<
        StudyGroup[]
    >([]);
    const [selectedDepartment, setSelectedDepartment] = useState<number>(0);
    const [selectedState, setSelectedState] = useState<number>(0);

    // selectedDepartment 또는 selectedState가 변경될 때마다 useEffect 호출
    useEffect(() => {
        async function fetchFilteredStudyGroups() {
            try {
                // GET /study-groups 요청 보내기
                const response = await axios.get("/study-groups", {
                    params: {
                        department: selectedDepartment,
                        currentState: selectedState,
                    },
                });
                // 응답으로 받은 데이터를 상태에 저장
                setFilteredStudyGroups(response.data);
            } catch (error) {
                console.error("Error fetching study groups:", error);
            }
        }

        // selectedDepartment 또는 selectedState가 변경될 때마다 필터링된 스터디 그룹 가져오기
        fetchFilteredStudyGroups();
    }, [selectedDepartment, selectedState]);

    // Select 박스에서 선택된 값에 따라 selectedDepartment 또는 selectedState 변경
    const handleDepartmentChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedDepartment(Number(e.target.value.substring(0, 1)));
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(Number(e.target.value.substring(0, 1)));
    };
    return (
        <>
            <Outer>
                <Title>Study Group</Title>
                <SearchBox>
                    <Filtering>
                        <Select
                            value={selectedDepartment}
                            onChange={handleDepartmentChange}
                        >
                            {department.map((e, i) => {
                                return (
                                    <option value={e} key={i}>
                                        {" "}
                                        {e}{" "}
                                    </option>
                                );
                            })}
                        </Select>
                        <Select
                            value={selectedState}
                            onChange={handleStateChange}
                        >
                            {currentState.map((e, i) => {
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
