import express from "express";
import userController from "./controllers/user.controller"
const router = express.Router();
const FileUpload = require('express-fileupload')

router.use(FileUpload())


//================================Admin APIs====================================//
router.get(
    '/reports',
    userController.getReports
)
//================================parking APIs========================//
router.get(
    '/all',
    userController.getAllParking
)

router.get(
    '/:id',
    userController.getParking
)

router.post(
    '/create',
    userController.addParking
)

router.delete(
    '/:id',
    userController.deleteParking
)

router.put(
    '/:id',
    userController.editParking
)

router.post(
    '/img/:username',
    userController.uploadParkingImage
)

router.get(
    '/img/:username/:parkingName',
    userController.getParkingImage
)

router.get(
    '/myparking/:username',
    userController.getMyParking
)
//============================user APIs=================================//
router.post(
    '/signup',
    userController.signUp
)

router.post(
    '/signin',
    userController.signIn
)

router.post(
    '/signout',
    userController.signOut
)

router.get(
    `/getuser/:token`,
    userController.getUser
)

router.get(
    `/getuserinfo/:id`,
    userController.getUserInfo
)

router.get(
    `/getsession`,
    userController.getSessions
)

router.put(
    '/updateuser/:id',
    userController.updateUser
)

router.post(
    '/adduserinfo',
    userController.addUserInfo
)

router.post(
    '/resetpassword',
    userController.resetPassword
)

router.post(
    '/updatepassword',
    userController.updatePassword
)



export default router
