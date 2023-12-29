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

export default {addParking, getAllParking, editParking, deleteParking, getParking}