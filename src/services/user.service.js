<<<<<<< HEAD
import UserDao from "../models/persistence/user.dao";

const addParking = (details) => {
    return UserDao.addParking(details)
}

const getAllParking = () => {
    return UserDao.getAllParking()
}

const getParking = (id) => {
    return UserDao.getParking(id)
}

const editParking = (id, details) => {
    return UserDao.editParking(id,details)
}

const deleteParking = (id) => {
    return UserDao.deleteParking(id)
}

const signUp = (details) => {
    return UserDao.signUp(details)
}

const signIn = (details) => {
    return UserDao.signIn(details)
}

const signOut = () => {
    return UserDao.signOut()
}

const getUser = (token) => {
    return UserDao.getUser(token)
}

const getUserInfo = (id) => {
    return UserDao.getUserInfo(id)
}

const getSessions = () => {
    return UserDao.getSessions()
}

const updateUser = (id, details) => {
    return UserDao.updateUser(id,details)
}

const addUserInfo = (details) => {
    return UserDao.addUserInfo(details)
}

export default {
    addParking,
    getAllParking,
    editParking,
    deleteParking,
    getParking,
    signUp, signIn, signOut,
    getUser, getUserInfo, getSessions,
    updateUser, addUserInfo
=======
import axios from "axios";

//--------Change the url if what you will use
const baseURL = "http://localhost:4000/v1/user"
// const baseURL = "https://pfast-api.vercel.app/v1/user"

//==============================Parking APIs=========================
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
//=======================user APIs====================================
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

export const getSession = async () => {
    const getSession = `${baseURL}/getsession`
    const apiResponse = axios.get(getSession)
    return apiResponse
}

export const updateUser = async (id,payload) => {
    const getUpdateUserEndpoint = `${baseURL}/updateuser/${id}`
    const apiResponse = axios.put(getUpdateUserEndpoint,payload)
    return apiResponse
}

export const addUser = async (payload) => {
    const getAddUserEndpoint = `${baseURL}/adduserinfo`
    const apiResponse = axios.post(getAddUserEndpoint,payload)
    return apiResponse
>>>>>>> c0d5979b88234f36aac4004f7f25495ad70534c6
}
