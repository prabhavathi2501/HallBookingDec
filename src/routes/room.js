import express from "express"
import  RoomController from "../controller/roomcontroller.js"
const router = express.Router()

router.post('/createroom',RoomController.createRoom)
router.get('/getroom',RoomController.getAllRooms)

export default router