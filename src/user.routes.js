import express from "express";
import userController from "./controllers/user.controller"
const router = express.Router();



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
export default router
