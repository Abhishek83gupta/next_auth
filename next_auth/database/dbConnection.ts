import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB conected Succesfully");
    });

    connection.on("error", () => {
      console.log("MongoDB connection error");
      process.exit(1);
    });
  } catch (error) {
    console.log("Something error while connecting to DB", error);
  }
};

export default connect