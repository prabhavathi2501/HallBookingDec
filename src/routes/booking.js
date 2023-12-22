import express from 'express'
import  BookingController from '../controller/bookingController.js'
const router = express.Router()

router.post('/',BookingController.createBooking)
router.get('/all',BookingController.getAllBooking)
router.get('/roomsWithBookingData',BookingController.roomsBookingData)
router.get('/customerWithBookingData',BookingController.customerBookingData)
router.get('/customerWithBookingInfo/:customerId',BookingController.customerbookingInfo)


export default router