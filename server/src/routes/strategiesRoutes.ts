import express from "express";
import {
  fetchStrategies,
  sendStrategy,
} from "../controllers/strategiesController.js";

const router = express.Router();

router.get("/", fetchStrategies);
router.post("/", sendStrategy);

export default router;
