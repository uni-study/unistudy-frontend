// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { StudyGroup } from "@/api/interface/data.interface";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "http://cde3-117-110-97-144.ngrok-free.app",
    headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
    },

    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const StudyGroupRequests = {
    get: (url: string) => instance.get<StudyGroup>(url).then(responseBody),
    post: (url: string, body: StudyGroup) =>
        instance.post<StudyGroup>(url, body).then(responseBody),
    delete: (url: string) =>
        instance.delete<StudyGroup>(url).then(responseBody),
};

export const StudyGroups = {
    getStudyGroups: (id: number): Promise<StudyGroup[]> =>
        StudyGroupRequests.get(`/StudyGroup/${id}`),
    //StudyGroup /StudyGroup
    addStudyGroup: (StudyGroup: StudyGroup): Promise<StudyGroup> =>
        StudyGroupRequests.post(`/StudyGroup`, StudyGroup),
    deleteStudyGroup: (id: number): Promise<StudyGroup> =>
        StudyGroupRequests.delete(`/StudyGroup/${id}`),
};
