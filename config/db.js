import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is not defined in environment variables!");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Database is connected");
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1); // stop server if DB fails
  }
};

export default connectDatabase;
