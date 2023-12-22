import express from'express'
import  CustomerController from '../controller/customerController.js'
const router = express.Router()

router.post('/',CustomerController.createCustomer)
router.get('/allcustomer',CustomerController.getAllCustomer)

export default router