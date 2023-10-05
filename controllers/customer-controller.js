import Customer from "../models/Customer.js";

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

//update cudtomer details
export const updateCustomer = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedCustomer,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Not updated",
    });
  }
};

// delete customer details
export const deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Not deleted",
    });
  }
};
