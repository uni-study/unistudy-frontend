import { MainContent } from "@/components/layout/mainContent";
import { Search } from "@/components/index/Search";
import { StudyList } from "@/components/index/StudyList";
import { department, currentState } from "@/types/data";

import styled from "styled-components";
import { PageNation } from "@/components/index/PageNation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post, StudyGroup } from "@/api/interface/data.interface";
import { API_URL } from "@/api/commonAPI";
import { useRouter } from "next/router";

const Outer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 60px 0 60px 0;
    gap: 60px;
`;
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

export default function Home() {
    let [postList, setPostlist] = useState<Post[]>([]);
    let [studyGroup, setStudygroup] = useState<StudyGroup[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<number>(0);
    const [selectedState, setSelectedState] = useState<number>(0);
    const [searchWord, setSearchWord] = useState<string>("");
    const [filteredPostList, setFilteredPostList] = useState<Post[]>(postList);
    const router = useRouter();

    useEffect(() => {
        axios
            .get(`${API_URL}/posts`)
            .then((response) => {
                setPostlist(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`${API_URL}/study-groups`)
            .then((response) => {
                setStudygroup(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleDepartmentChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedDepartment(Number(e.target.value.substring(0, 1)));
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(Number(e.target.value.substring(0, 1)));
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
    };

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            const filtered = postList.filter((post) => {
                console.log("is it included?", post.title.includes(searchWord));
                return (
                    post.title.includes(searchWord) ||
                    post.mainText.includes(searchWord)
                );
            });
            setFilteredPostList(filtered);
        }
    };

    console.log("filteredPostlist", filteredPostList);

    console.log("selectedDepartment", selectedDepartment);
    console.log("selectedState", selectedState);

    const filteredStudyGroup = studyGroup.filter((group) => {
        console.log("group department", group.department);
        console.log("group currentState", group.currentState);
        if (selectedDepartment === 0 || selectedState === 3) {
            return group;
        } else {
            return (
                group.department === selectedDepartment ||
                group.currentState === selectedState
            );
        }
    });

    console.log("filteredStudyGroup", filteredStudyGroup);

    return (
        <>
            <MainContent>
                <Outer>
                    <Title>Study Group</Title>
                    <SearchBox>
                        <Filtering>
                            <Select onChange={handleDepartmentChange}>
                                {department.map((e, i) => {
                                    return (
                                        <option value={e} key={i}>
                                            {" "}
                                            {e.substring(3)}{" "}
                                        </option>
                                    );
                                })}
                            </Select>
                            <Select onChange={handleStateChange}>
                                {currentState.map((e, i) => {
                                    return (
                                        <option value={e} key={i}>
                                            {" "}
                                            {e.substring(3)}{" "}
                                        </option>
                                    );
                                })}
                            </Select>
                        </Filtering>
                        <SearchBar
                            onChange={handleSearch}
                            onKeyDown={handleOnKeyDown}
                        ></SearchBar>
                    </SearchBox>

                    <StudyList
                        postList={filteredPostList}
                        studyGroup={filteredStudyGroup}
                    />
                    <PageNation />
                </Outer>
            </MainContent>
        </>
    );
}
