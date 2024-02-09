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
export default {
    addParking,
    getAllParking,
    editParking,
    deleteParking,
    getParking,
    signUp, signIn, signOut,
    getUser, getUserInfo
}
