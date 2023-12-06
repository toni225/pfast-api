import axios from "axios";

const baseURL = "http://localhost:4000/v1/user"

export const getAllParking = async () => {
    const getAllParkingEndpoint = `${baseURL}/all`
    const apiResponse = axios.get(getAllParkingEndpoint)
    return apiResponse
}

export const getParking = async (id) => {
    const getParkingEndpoint = `${baseURL}/${id}`
    const apiResponse = axios.get(getParkingEndpoint)
    return apiResponse
}

export const editParking = async (id,payload) => {
    const getEditParkingEndpoint = `${baseURL}/${id}`
    const apiResponse = axios.put(getEditParkingEndpoint,payload)
    return apiResponse
}

export const createParking = async (payload) => {
    const getCreateParkingEndpoint = `${baseURL}/create`
    const apiResponse = axios.post(getCreateParkingEndpoint,payload)
    return apiResponse
}

export const removeParking = async (id) => {
    const getRemoveParkingEndpoint = `${baseURL}/${id}`
    const apiResponse = axios.delete(getRemoveParkingEndpoint)
    return apiResponse
}


