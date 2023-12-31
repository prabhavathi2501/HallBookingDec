import customerModel from "../models/customer.js";

const createCustomer = async (req, res) => {
  console.log(req.body);
  try {
    req.body.customerId = "C"+ Math.floor(Math.random() * 90000) + 10000;
    let customer = await customerModel.create(req.body);
    res.status(201).send({
      message: "customer created Successfully",
      customer,
    });
  } catch (error) {
    res.status(400).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getAllCustomer = async(req,res)=>{
  
  try {
    const cust = await customerModel.find();
    res.status(200).send({
      message:"All Customer Details",
      count: cust.length,
      cust
    })
    
  } catch (error) {
    res.status(400).send({
      message: "Internal Server Error",
      error: error.message,
    });
    
  }
  
}

export default {
     createCustomer,
     getAllCustomer
     }

