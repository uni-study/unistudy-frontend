import { API_URL } from "@/api/commonAPI";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Member, Post, StudyGroup } from "@/api/interface/data.interface";
import { set } from "immer/dist/internal.js";

const Outer = styled.div`
    display: flex;
    justify-content: center;
`;
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

interface MemberInterface {
    userId?: number;
    studygroupId?: number;
    joinedDate: string;
    accepted: boolean;
}

export default function PorDBtn() {
    const today = new Date();
    const dateString =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    const router = useRouter();
    const currentPID = router.query.pid;
    const curUserInfo = useSelector((state: RootState) => state.user.userInfo);

    const [curPost, setCurPost] = useState<Post>();
    let [writerId, setWriterId] = useState<number>(0);
    let [member, setMember] = useState<MemberInterface>({
        userId: curUserInfo?.id,
        studygroupId: curPost?.studygroupId,
        joinedDate: dateString,
        accepted: false,
    });

    useEffect(() => {
        axios
            .get(`${API_URL}/post/${currentPID}`)
            .then((response) => {
                console.log("Get request successful:", response.data);
                setCurPost(response.data);
                setWriterId(response.data.writerId);
            })
            .catch((error) => {
                console.error("Error getting data:", error);
            });
    }, []);

    const handleDelete = () => {
        axios
            .delete(`${API_URL}/post/${currentPID}`)
            .then((response) => {
                console.log("Delete request successful:", response.data);
            })
            .catch((error) => {
                console.error("Error deleting data:", error);
            });
        alert("게시글이 삭제되었습니다.");
        router.push("/");
    };

    const handleParticipate = (uid: number, sid: number) => {
        axios
            .post(`${API_URL}/join/study-group/${sid}/member/${uid}`, member)
            .then((response) => {
                alert(
                    "Participate successfully! Wait for the leader's approval."
                );
            })
            .catch((error) => {
                console.error("Error posting data:", error);
            });
    };

    if (curUserInfo && curPost) {
        if (writerId == curUserInfo?.id) {
            return (
                <>
                    <Outer>
                        <Button onClick={handleDelete}>Delete</Button>
                    </Outer>
                </>
            );
        } else {
            return (
                <>
                    {}
                    <Outer>
                        <Button
                            onClick={() => {
                                handleParticipate(
                                    curUserInfo.id,
                                    curPost.studygroupId
                                );
                            }}
                        >
                            Participate
                        </Button>
                    </Outer>
                </>
            );
        }
    } else {
        return (
            <>
                <Outer>
                    <h1> 잘못된 접근입니다. </h1>
                </Outer>
            </>
        );
    }
}
