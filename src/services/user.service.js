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

const uploadParkingImage = (username,image,parkingName) => {
    return UserDao.uploadParkingImage(username,image,parkingName)
}

const getParkingImage = (username,parkingName) => {
    return UserDao.getParkingImage(username,parkingName)
}

const getMyParking = (username) => {
    return UserDao.getMyParking(username)
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

const resetPassword = (email) => {
    return UserDao.resetPassword(email)
}

const updatePassword = (password) => {
    return UserDao.updatePassword(password)
}

const addParkingHistory = (user) => {
    return UserDao.addParkingHistory(user)
}

const getParkingHistory = (user) => {
    return UserDao.getParkingHistory(user)
}

//=====================================Admin APIs================================
const getAllReports = () => {
    return UserDao.getAllReports()
}

const getReports = (ParkingID) => {
    return UserDao.getReports(ParkingID)
}

const banParking = (id) => {
    return UserDao.banParking(id)
}

const addReport = (body) => {
    return UserDao.addReport(body)
}

export default {
    addParking,
    getAllParking,
    editParking,
    deleteParking,
    getParking,
    signUp, signIn, signOut,
    getUser, getUserInfo, getSessions,
    updateUser, addUserInfo, uploadParkingImage,
    getParkingImage, getMyParking, resetPassword,
    updatePassword, getAllReports, getReports, banParking, addReport,
    addParkingHistory, getParkingHistory
}
