import { AxiosError } from "axios";

export const errorCatch = (error: any) => {
    console.log("GET posts failed", error);
    const statusCode = error.response.status; // 400
    const statusText = error.response.statusText; // Bad Request
    const message = error.response.data.message[0]; // id should not be empty
    console.log("here");
    console.log(
        `statuscode : ${statusCode}, statusText: ${statusText}, message: ${message}`
    );
};
