import axiosClient from "./axiosClient";
import authUtils from "../utils/AuthUtils";


const adminApi = {
    getAllProduct: () => {
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
    updateProduct: (data,id) => {
        const url = `/flower/${id}`;
        return axiosClient.patch(url, data,{
            headers: {
                'Authorization': `Bearer ${authUtils.getToken()}`,
            },
        });
    },
    deleteProduct: (id) => {
        const url = `/flower`;
        return axiosClient.post(url, id,{
            headers: {
                'Authorization': `Bearer ${authUtils.getToken()}`,
            },
        });
    },
    ceateNewProduct: (data) => {
        const url = "flower";
        return axiosClient.post(url, data ,{
            headers: {
                'Authorization': `Bearer ${authUtils.getToken()}`,
            },
        })
    }
}

export default adminApi;