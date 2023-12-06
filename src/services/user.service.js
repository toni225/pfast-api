import axios from "axios";

const baseURL = "http://localhost:4000/v1/user"

export const getAllParking = async () => {
    const getAllParkingEndpoint = `${baseURL}/all`
    const apiResponse = axios.get(getAllParkingEndpoint)
    return apiResponse
}

export const createParking = async (payload) => {
    const getCreateParkingEndpoint = `${baseURL}/create`
    const apiResponse = axios.post(getCreateParkingEndpoint,payload)
    return apiResponse
}


