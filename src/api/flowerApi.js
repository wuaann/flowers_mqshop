// api/flowerApi.js
import axiosClient from "./axiosClient";
const flowerApi = {
    getAll : (params) => {
        const url = '/flower';
        return axiosClient.get(url, { params });
    },
}

export default flowerApi;