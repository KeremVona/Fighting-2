import express, { type Express, type Request, type Response } from "express";
import { db } from "../index.js";
import { strategies } from "../db/schema.js";

interface StrategyRequestBody {
  title: string;
  beats: string;
  isBeatenBy: string;
}

export const fetchStrategies = async (
  req: Request<{}, {}, StrategyRequestBody>,
  res: Response
) => {
  try {
    const strategiesData = await db.select().from(strategies);

    console.log("res: ", strategiesData);

    return res.status(200).json(strategiesData);
  } catch (error) {
    console.error("Failed to fetch strategies:", error);
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Could not fetch strategies", error: error.message });
    }
  }
};

export const sendStrategy = async (
  req: Request<{}, {}, StrategyRequestBody>,
  res: Response
) => {
  try {
    const { title, beats, isBeatenBy } = req.body;
    await db
      .insert(strategies)
      .values({ strategyName: title, beats: beats, isBeatenBy: isBeatenBy });

    return res.json({
      message: "Strategy made successfully",
      strategy: { title, beats, isBeatenBy },
    });
  } catch (error) {
    console.error("Failed to send strategy:", error);
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Failed to make strategy due to a server error.",
        error: error.message,
      });
    }
  }
};
