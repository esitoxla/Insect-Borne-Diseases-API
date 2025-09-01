import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

function connectDatabase () {
    mongoose.connect(uri).then(() => console.log("MongoDb connected!")).catch((err) => console.log(err));
}

export default connectDatabase;