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
  