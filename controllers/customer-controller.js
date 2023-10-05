import Customer from '../models/Customer.js'


//create a new customer
export const createCustomer = async (req, res) => {
    const newCustomer = new Customer(req.body);
    try {
      const savedCustomer = await newCustomer.save();
  
      res.status(200).json({
        success: true,
        message: "successfully created",
        data: savedCustomer,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "failed to create Customer",
      });
    }
  };