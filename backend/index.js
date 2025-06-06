import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import companyRoute from "./routes/company.routes.js"
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js"
import jobRoute from "./routes/jobs.routes.js"
dotenv.config({});

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



const PORT = process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at the port ${PORT}`);
});
