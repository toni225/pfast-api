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

const uploadImage = (username,image) => {
    return UserDao.uploadImage(username,image)
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
    updateUser, addUserInfo, uploadImage
}
