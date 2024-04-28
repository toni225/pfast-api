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

const getParkingHistoryOwner = (user) => {
    return UserDao.getParkingHistoryOwner(user)
}

//=====================================Admin APIs================================
const getAllReports = (reportType) => {
    return UserDao.getAllReports(reportType)
}

const getReportsPO = (ParkingID) => {
    return UserDao.getReportsPO(ParkingID)
}

const getReportsVO = (username) => {
    return UserDao.getReportsVO(username)
}

const banParking = (id) => {
    return UserDao.banParking(id)
}

const addReport = (body) => {
    return UserDao.addReport(body)
}

const allNotifications = (username) => {
    return UserDao.allNotifications(username)
}

const deleteNotifications = (username) => {
    return UserDao.deleteNotifications(username)
}

const addNotification = (notifBody) => {
    return UserDao.addNotification(notifBody)
}

const updateNotification = (notifBody) => {
    return UserDao.updateNotification(notifBody)
}

//=========================Logs APIs==================================//
const addLogs = (logBody) => {
    return UserDao.addLogs(logBody)
}

const getLogs = (username) => {
    return UserDao.getLogs(username)
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
    updatePassword, getAllReports, getReportsPO, banParking, addReport,
    addParkingHistory, getParkingHistory, allNotifications,
    deleteNotifications, addNotification, updateNotification,
    addLogs, getLogs, getParkingHistoryOwner, getReportsVO
}
