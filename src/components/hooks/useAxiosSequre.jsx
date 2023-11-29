import axios from "axios";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_serverURL}`
})
const useAxiosSequre = () => {
    return axiosSecure;
};

export default useAxiosSequre;