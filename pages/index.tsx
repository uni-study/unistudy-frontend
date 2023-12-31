import dynamic from "next/dynamic";
import axios from "axios";
import { useEffect, useState } from "react";
import { department, currentState } from "@/types/data";
import { Post, StudyGroup } from "@/api/interface/data.interface";
import { API_URL } from "@/api/commonAPI";
import { errorCatch } from "@/api/errorCatch";

import styled from "styled-components";
const MainContent = dynamic(import("@/components/layout/mainContent"));
const StudyList = dynamic(import("@/components/index/StudyList"));

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

    //get entire post
    useEffect(() => {
        axios
            .get(`${API_URL}/posts`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "ngrok-skip-browser-warning": "69420",
                },
                withCredentials: true,
            })
            .then((response) => {
                setPostlist(response.data);
                setFilteredPostList(response.data);
            })

            .catch((error) => errorCatch(error));
    }, []);

    //get entire study group
    useEffect(() => {
        axios
            .get(`${API_URL}/study-groups`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "ngrok-skip-browser-warning": "69420",
                },
                withCredentials: true,
            })
            .then((response) => {
                setStudygroup(response.data);
            })

            .catch((error) => errorCatch(error));
    }, []);

    //Filtering by department
    const handleDepartmentChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedDepartment(Number(e.target.value.substring(0, 2)));
    };

    //Filtering by state
    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(Number(e.target.value.substring(0, 2)));
    };

    //Search
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
    };

    //Search by enter
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            if (postList) {
                const filtered = postList.filter((post) => {
                    return (
                        post.title.includes(searchWord) ||
                        post.mainText.includes(searchWord)
                    );
                });
                setFilteredPostList(filtered);
            } else {
                alert("There is no post.");
            }
        }
    };

    const filteredStudyGroup = studyGroup.filter((group) => {
        if (selectedDepartment === 0 || selectedState === 3) {
            return group;
        } else {
            return (
                group.department === selectedDepartment &&
                group.currentState === selectedState
            );
        }
    });

    if (department && currentState) {
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
                                placeholder="Search"
                                onChange={handleSearch}
                                onKeyDown={handleOnKeyDown}
                            ></SearchBar>
                        </SearchBox>

                        <StudyList
                            postList={filteredPostList}
                            studyGroup={filteredStudyGroup}
                        />
                    </Outer>
                </MainContent>
            </>
        );
    } else {
        return (
            <>
                <MainContent>
                    <Outer>
                        <h1> There is No Post. </h1>
                    </Outer>
                </MainContent>
            </>
        );
    }
}
