import express from 'express'
import  roomRoutes from "./room.js";
 import bookingRoutes from "./booking.js";
import customerRoutes from "./customer.js";
const router = express.Router()

router.use("/room", roomRoutes);
router.use("/customers", customerRoutes);
 router.use("/booking", bookingRoutes);


// router.get('/',(req,res)=>{
//     res.status(d200).send(`
//     <h2>Hall booking </h2>`)
// })

export default router