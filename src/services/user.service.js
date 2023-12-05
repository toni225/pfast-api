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

const updateParking = (id,details) => {
    return UserDao.updateParking(id,details)
}

const deleteParking = (id) => {
    return UserDao.deleteParking(id)
}

export default {addParking, getAllParking, updateParking, deleteParking, getParking}