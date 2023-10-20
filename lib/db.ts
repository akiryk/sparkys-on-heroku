import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI as string;

let connection: typeof mongoose;

const startDb = async () => {
  if (!connection) {
    connection = await mongoose.connect(MONGO_URI);
    return connection;
  }
};

export default startDb;
