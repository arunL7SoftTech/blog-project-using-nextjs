import axiosInstance from "../Networking/AxiosConfig"

const Apis = {
    blog: () => axiosInstance.get("/user/blog"),
}

export default Apis