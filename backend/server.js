import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

// App config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

//Middlewares

app.use(express.json());
app.use(cors()); // allow the frontend to connect with the backend

// api endpoint

app.use("/api/admin", adminRouter);
// localhost:4000/api/admin/add-doctor

app.get("/", (req, res) => {
  res.send("Api Working great");
});

app.listen(port, () => {
  console.log("Server started", port);
});