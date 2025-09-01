import express from "express"
import diseaseRoute from "./routes/diseaseRoute.js"
import connectDatabase from "./config/db.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandling.js";


const PORT = process.env.PORT || 8030

const app = express();
app.use(express.json());

app.use("/api/disease", diseaseRoute);

app.use(errorHandler);
app.use(notFound)
app.listen(PORT, () => {
    connectDatabase()
    console.log(`Port ${PORT} ready for connection`)
});