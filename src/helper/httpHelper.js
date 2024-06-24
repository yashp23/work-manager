import axios from "axios";
export const httpAxios = axios.create({
    baseUrl: process.env.BASH_URL,
})