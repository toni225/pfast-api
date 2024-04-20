import express from "express";
import userController from "./controllers/user.controller"
const router = express.Router();
const FileUpload = require('express-fileupload')

router.use(FileUpload())

//========================Logs API==================================//

router.post(
    '/logs',
    userController.addLogs
)

router.get(
    '/logs/:username',
    userController.getLogs
)

//========================Notification API============================//
router.get(
    '/notification/:username',
    userController.allNotifications
)

router.post(
    '/notification',
    userController.addNotification
)

router.put(
    '/notification',
    userController.updateNotification
)

router.delete(
    '/notification/:username',
    userController.deleteNotifications
)

//================================Admin APIs====================================//
router.get(
    '/allreports',
    userController.getAllReports
)

router.get(
    '/reports/:id',
    userController.getReports
)

router.delete(
    '/reports/:id',
    userController.banParking
)

router.post(
    '/report',
    userController.addReport
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

router.post(
    '/addparkinghistory',
    userController.addParkingHistory
)

router.get(
    '/getparkinghistory/:user',
    userController.getParkingHistory
)

export default router
