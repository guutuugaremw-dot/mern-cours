import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);// process 1 code exit with failure
  }
};
   //mongodb+srv://guutuugaremw_db_user:<db_password>@cluster0.vloc2sz.mongodb.net/
   //6GC4VEULeHiRVrER
   //guutuugaremw_db_user