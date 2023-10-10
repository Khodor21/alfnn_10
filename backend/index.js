import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import MessageRouter from "./router/message.js";

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use("/api", MessageRouter);

mongoose.connect(
  "mongodb+srv://khodorhasan17:khodorhasan22@chatapp.lk2gioe.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
