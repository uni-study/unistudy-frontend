// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Post } from "@/api/interface/data.interface";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "http://cde3-117-110-97-144.ngrok-free.app",
    headers: {
        "Content-Type": `application/json`,
    },

    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const postRequests = {
    get: (url: string) => instance.get<Post>(url).then(responseBody),
    post: (url: string, body: Post) =>
        instance.post<Post>(url, body).then(responseBody),
    delete: (url: string) => instance.delete<Post>(url).then(responseBody),
};

export const Posts = {
    getPosts: (id: number): Promise<Post[]> => postRequests.get(`/Post/${id}`),
    //POST /post
    addPost: (post: Post): Promise<Post> => postRequests.post(`/Post`, post),
    deletePost: (id: number): Promise<Post> =>
        postRequests.delete(`/Post/${id}`),
};
