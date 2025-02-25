import express from "express";
import { createServer } from "http";
import cors from "cors";
import dataSource from "./databaseConfig"; // Ensure this path is correct

const app = express();
const httpServer = createServer(app);
const port = 3000;

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001"],
    allowedHeaders: ["Content-Type", "accesstoken", "refreshtoken"],
    exposedHeaders: ["newaccesstoken"],
  })
);

dataSource
  .initialize()
  .then(async () => {
    console.log("Database connected");
  })
  .catch((error) => console.log("Database connection error:", error));

httpServer.listen(port, () => {
  console.log("Server running on port", port);
});