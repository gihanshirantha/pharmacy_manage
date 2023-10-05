import Medicine from '../models/Medicines.js'

//Create new medicine product
export const createMedicine = async (req, res) => {
    const newMedicine = new Medicine(req.body);
    try {
      const savedMedicine = await newMedicine.save();
  
      res.status(200).json({
        success: true,
        message: "successfully created",
        data: savedMedicine,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "failed to crate Medicine product",
      });
    }
  };

  //update medicine product
  export const updateMedicine = async (req, res) => {
    const id = req.params.id;
  
    try {
      const updatedMedicine = await Medicine.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
  
      res.status(200).json({
        success: true,
        message: "successfully updated",
        data: updatedMedicine,
      });
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Not updated",
      });
    }
  };