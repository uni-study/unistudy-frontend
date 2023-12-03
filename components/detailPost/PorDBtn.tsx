import { API_URL } from "@/api/commonAPI";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

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

export default function PorDBtn() {
    const router = useRouter();
    const currentPID = router.query.pid;
    const curUserInfo = useSelector((state: RootState) => state.user.userInfo);
    let [writerId, setWriterId] = useState<number>(0);

    useEffect(() => {
        axios
            .get(`${API_URL}/post/${currentPID}`)
            .then((response) => {
                console.log("Get request successful:", response.data);
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

    if (writerId == curUserInfo?.id) {
        return (
            <>
                <Outer>
                    <Button onClick={handleDelete}>Delete</Button>
                </Outer>
            </>
        );
    } else {
        //return (
        //    <>{}
        //        <Outer>
        //            <Button>Participate</Button>
        //        </Outer>
        //    </>
        //);
    }
}
