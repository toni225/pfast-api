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
  const id = parseInt(req.params.id,10)

  const response = await userService.deleteParking(id)

  if(response === StatusCodes.NOT_FOUND){
    return res.status(StatusCodes.NOT_FOUND).send({
      status: StatusCodes.NOT_FOUND,
      statusText: "Not Found.",
      message: "Error."
    })
  }

  return res.status(StatusCodes.OK).send({
    status: StatusCodes.OK,
    statusText: "OK",
    message: "Parking Successfully deleted."
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

const signUp = async (req,res) => {
  const {body: user} = req

  const response = await userService.signUp(user)

  if(response.error){
    return res.status(StatusCodes.BAD_REQUEST).send({
      data: response.error
    })
  }

  return res.status(201).send({
    data: response.data
  })
}

const signIn = async (req,res) => {
  const {body: user} = req

  const response = await userService.signIn(user)

  if(response.error){
    return res.status(StatusCodes.BAD_REQUEST).send({
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

  return res.status(201).send({
    data: "You're leaving..."
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
  signOut
}
