import axios from "axios";

const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_serverURL}`
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;