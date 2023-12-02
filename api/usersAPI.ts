// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { User } from "@/api/interface/data.interface";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    //baseURL: "http://localhost:8080/",
    baseURL: "http://10.64.154.163:8080",
    headers: {
        "Content-Type": `application/json`,
        //"ngrok-skip-browser-warning": "69420",
    },

    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const userRequests = {
    get: (url: string) => instance.get<User>(url).then(responseBody),
    post: (url: string, body: User) =>
        instance.post<User>(url, body).then(responseBody),
    delete: (url: string) => instance.delete<User>(url).then(responseBody),
};

export const Users = {
    getUsers: (): Promise<User[]> => userRequests.get("/users"),
    getSingleUser: (id: number): Promise<User> =>
        userRequests.get(`/user/${id}`),
    addUser: (user: User, id: number): Promise<User> =>
        userRequests.post(`/user/${id}`, user),
    deleteUser: (id: string): Promise<User> =>
        userRequests.delete(`/user/${id}`),
};
