import userService from "../services/user.service";
import {StatusCodes} from "http-status-codes";
import STATUS from "../STATUS";

const addParking = async (req,res) => {
  const {body: user} = req

  const response = await userService.addParking(user)

  if(response.status !== StatusCodes.CREATED){
    return res.status(response.status).send({
      status: response.status,
      statusText: response.statusText,
      message: "Error."
    })
  }

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    message: "Parking Successfully created."
  })

}

const editParking = async (req, res) => {
  const {body: user} = req
  const id = parseInt(req.params.id,10)

  const response = await userService.editParking(id,user)

  if(response.status !== StatusCodes.OK){
    return res.status(response.status).send({
      status: response.status,
      statusText: response.statusText,
      message: "Error."
    })
  }

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    message: "Parking Successfully updated."
  })
}

const deleteParking = async (req,res) => {
  // const id = parseInt(req.params.id,10)
  const id = req.params.id

  const response = await userService.deleteParking(id)

  if(response === StatusCodes.NOT_FOUND){
    return res.status(StatusCodes.NOT_FOUND).send({
      status: StatusCodes.NOT_FOUND,
      statusText: "Not Found.",
      message: "Error.",
      response
    })
  }

  return res.status(StatusCodes.OK).send({
    status: StatusCodes.OK,
    statusText: "OK",
    message: "Parking Successfully deleted.",
    response
  })
}

const getAllParking = async (req,res) => {
  const response = await userService.getAllParking()

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    users: response.data
  })
}

const getParking = async (req,res) => {
  const id = parseInt(req.params.id,10)

  const response = await userService.getParking(id)

  if(response === StatusCodes.NOT_FOUND){
    return res.status(StatusCodes.NOT_FOUND).send({
      status: StatusCodes.NOT_FOUND,
      statusText: "Not_Found.",
      message: "User not found."
    })
  }

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    parking: response.data
  })
}

const uploadParkingImage = async (req,res) => {
  const username = req.params.username
  const {image} = req.files
  const {body: parkingName} = req

  const response = await userService.uploadParkingImage(username,image.data,parkingName)

  if(response.error){
    return res.status(StatusCodes.CONFLICT).send({
      response
    })
  }

  return res.status(StatusCodes.OK).send({
    response
  })
}

const getParkingImage = async (req,res) => {
  const username = req.params.username
  const parkingName = req.params.parkingName

  const response = await userService.getParkingImage(username,parkingName)

  if(response.error){
    return res.status(StatusCodes.CONFLICT).send({
      response
    })
  }

  return res.status(StatusCodes.OK).send({
    response
  })
}

const getMyParking = async (req,res) => {
  const {username} = req.params

  const response = await userService.getMyParking(username)

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    users: response.data
  })
}

//==============================User APIs===================

const signUp = async (req,res) => {
  const {body: user} = req

  const response = await userService.signUp(user)

  if(response.error){
    return res.status(response.error.status).send({
      status: response.error.status,
      data: response.error
    })
  }

  return res.status(201).send({
    status: StatusCodes.CREATED,
    data: response.data
  })
}

const signIn = async (req,res) => {
  const {body: user} = req

  const response = await userService.signIn(user)

  if(response.error){
    return res.status(response.error.status).send({
      status: response.error.status,
      data: response.error
    })
  }

  return res.status(201).send({
    data: response.data
  })
}

const signOut = async (req,res) => {

  const response = await userService.signOut()

  if(response.error){
    return res.status(StatusCodes.BAD_REQUEST).send({
      data: response.error
    })
  }

  return res.status(200).send({
    data: "You're leaving..."
  })
}

const getUser = async (req,res) => {
  const token = req.params.token

  const response = await userService.getUser(token)

  if(response.error){
    return res.status(response.error.status).send({
      data: response.error
    })
  }

  return res.status(201).send({
    data: response.data
  })
}

const getUserInfo = async (req, res) => {
  const id = req.params.id

  const response = await userService.getUserInfo(id)

  if(response === StatusCodes.NOT_FOUND){
    return res.status(StatusCodes.NOT_FOUND).send({
      status: StatusCodes.NOT_FOUND,
      statusText: "Not_Found.",
      message: "User not found."
    })
  }

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    data: response.data
  })
}

const getSessions = async (req, res) => {
  const response = await userService.getSessions()

  if(response?.status === StatusCodes.NOT_FOUND){
    return res.status(StatusCodes.NOT_FOUND).send({
      status: StatusCodes.NOT_FOUND,
      statusText: "Not_Found.",
      message: response
    })
  }

  return res.status(response?.status).send({
    status: response.status,
    statusText: response.statusText,
    data: response
  })
}

const updateUser = async (req, res) => {
  const {body: user} = req
  const id = req.params.id

  const response = await userService.updateUser(id,user)

  if(response.status !== StatusCodes.OK){
    return res.status(response.status).send({
      status: response.status,
      statusText: response.statusText,
      message: "Error."
    })
  }

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    message: "User Successfully Updated."
  })
}

const addUserInfo = async (req,res) => {
  const {body: user} = req

  const response = await userService.addUserInfo(user)

  if(response.status !== StatusCodes.CREATED && response.status !== StatusCodes.OK){
    return res.status(response.status).send({
      status: response.status,
      statusText: response.statusText,
      message: response
    })
  }

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    message: "User Successfully Created."
  })

}

const resetPassword = async (req,res) => {
  const {body: email} = req

  const response = await userService.resetPassword(email)

  return res.json(response)
}

const updatePassword = async (req,res) => {
  const {body: password} = req
  const response = await userService.updatePassword(password)

  return res.json(response)
}

const addParkingHistory = async (req,res) => {
  const {body: user} = req

  const response = await userService.addParkingHistory(user)

  return res.status(200).send({
    response
  })
}

const getParkingHistory = async (req,res) => {
  const user = req.params.user

  const response = await userService.getParkingHistory(user)

  return res.status(200).send({
    response
  })
}

const getParkingHistoryOwner = async (req,res) => {
  const user = req.params.user

  const response = await userService.getParkingHistoryOwner(user)

  return res.status(200).send({
    response
  })
}

//============================Admin APIs===============================
const getAllReports = async (req,res) => {
  const {reportType} = req.params

  const response = await userService.getAllReports(reportType)

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    users: response.data
  })
}

const getReportsPO = async (req,res) => {
  const ParkingID = parseInt(req.params.id,10)

  const response = await userService.getReportsPO(ParkingID)

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    users: response.data
  })
}

const getReportsVO = async (req,res) => {
  const {username} = req.params

  const response = await userService.getReportsVO(username)

  return res.status(response.status).send({
    status: response.status,
    statusText: response.statusText,
    users: response.data
  })
}

const banParking = async (req,res) => {
  const id = parseInt(req.params.id,10)

  const response = await userService.banParking(id)

  return res.status(response.status).send({
    response
  })
}

const addReport = async (req,res) => {
  const {body} = req

  const response = await userService.addReport(body)

  return res.status(response.status).send({
    response
  })
}

const allNotifications = async (req,res) => {
  const {username} = req.params

  const response = await userService.allNotifications(username)

  if(response.data.length === 0){
    return res.status(200).send({
      message: 'No notifications found.',
      response
    })
  }

  return res.status(response.status).send({
    response
  })
}

const deleteNotifications = async (req,res) => {
  const {username} = req.params

  const response = await userService.deleteNotifications(username)

  if (response.data.length === 0) {
    return res.status(404).send({
      message: 'No user found!',
      response
    })
  }

  return res.status(response.status).send({
    message: 'Notifications deleted.',
    response
  })
}

const addNotification = async (req,res) => {
  const notifBody = req.body

  const response = await userService.addNotification(notifBody)

  if (response.status != StatusCodes.CREATED) {
    return res.status(response.status).send({
      response
    })
  }

  return res.status(response.status).send({
    message: 'Notification added.',
    response
  })
}

const updateNotification = async (req,res) => {
  const notifBody = req.body

  const response = await userService.updateNotification(notifBody)

  if (response.status == StatusCodes.CREATED) {
    return res.status(StatusCodes.OK).send({
      message: 'Notification updated.',
      response
    })
  }

  return res.status(response.status).send({
    message: response.error?.message,
    response
  })

}

//==========================Logs APIs===========================//

const addLogs = async (req,res) => {
  const logBody = req.body

  const response = await userService.addLogs(logBody)

  if (response.status != StatusCodes.CREATED) {
    return res.status(response.status).send({
      response
    })
  }

  return res.status(response.status).send({
    message: 'Log added.',
    response
  })
}

const getLogs = async (req,res) => {
  const {username} = req.params

  const response = await userService.getLogs(username)

  if (response.status != StatusCodes.OK) {
    return res.status(response.status).send({
      response
    })
  }

  return res.status(response.status).send({
    message: `${username} logs.`,
    response
  })
}

export default {
  addParking,
  getAllParking,
  editParking,
  deleteParking,
  getParking,
  signUp,
  signIn,
  signOut,
  getUser,
  getUserInfo,
  getSessions,
  updateUser, addUserInfo, uploadParkingImage,
  getParkingImage, getMyParking, resetPassword,
  updatePassword, getAllReports, getReportsPO, banParking, addReport,
  addParkingHistory, getParkingHistory, allNotifications, deleteNotifications,
  addNotification, updateNotification, addLogs, getLogs, getParkingHistoryOwner,
  getReportsVO
}
