import  express  from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";

import medicineRoute from './routes/medicines.js'



dotenv.config();
const app=express();
const port = process.env.PORT||8000;


//database connection
const connect =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log("Database is Connected");
    } catch (error) {
        console.log("Database is NOT Connected")
    }
}


//middleware
app.use(express.json())
app.use(cors())

app.use("/api/v1/medicine",medicineRoute);




app.listen(port, () => {
    connect();
    console.log("server listening on port", port);
  });
  