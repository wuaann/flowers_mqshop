// api/flowerApi.js
import axiosClient from "./axiosClient";

import authUtils from "../utils/AuthUtils";


const flowerApi = {
    getAll: () => {
        const url = '/flower';
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${authUtils.getToken()}`,
            },
        },);
    },
    getByID: (id) => {
        const url = `/flower/${id}`;
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${authUtils.getToken()}`,
            },
        });
    },
}

export default flowerApi;