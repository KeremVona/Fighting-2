import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { is } from "drizzle-orm";
import strategiesRoutes from "./routes/strategiesRoutes.js";

export const db = drizzle({
  connection: process.env.DATABASE_URL!,
});

const app: Express = express();

const port = 5000;

app.use(express.json());

app.use(cors());

app.get("/api/strategies", strategiesRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
