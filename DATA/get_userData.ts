import type { User } from "@/api/interface/data.interface";
import axios from "axios";

const url = "cde3-117-110-97-144.ngrok-free.app/users";

export const getUser = async <T = User>(): Promise<T> => {
    const { data } = await axios.get<T>(url);
    return data;
};
