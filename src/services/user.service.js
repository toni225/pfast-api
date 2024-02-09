import axios from "axios";

//--------Change the url if what you will use
const baseURL = "http://localhost:4000/v1/user"
// const baseURL = "https://pfast-api.vercel.app/v1/user"

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

export const signup = async (payload) => {
    const getSignupEndpoint = `${baseURL}/signup`
    const apiResponse = axios.post(getSignupEndpoint,payload)
    return apiResponse
}

export const login = async (payload) => {
    const getSigninEndpoint = `${baseURL}/signin`
    const apiResponse = axios.post(getSigninEndpoint,payload)
    return apiResponse
}

export const signout = async () => {
    const getSignoutEndpoint = `${baseURL}/signout`
    const apiResponse = axios.post(getSignoutEndpoint)
    return apiResponse
}

export const getUser = async (token) => {
    const getUserEndpoint = `${baseURL}/getuser/${token}`
    const apiResponse = axios.get(getUserEndpoint)
    return apiResponse
}

export const getUserInfo = async (id) => {
    const getUserInfoEndpoint = `${baseURL}/getuserinfo/${id}`
    const apiResponse = axios.get(getUserInfoEndpoint)
    return apiResponse
}


