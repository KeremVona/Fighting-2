import express, { type Express, type Request, type Response } from "express";
import { db } from "../index.js";
import { games } from "../db/schema.js";

interface GameRequestBody {
  title: string;
  beats: string;
  isBeatenBy: string;
}

export const fetchGames = async (
  req: Request<{}, {}, GameRequestBody>,
  res: Response
) => {
  try {
    const gamesData = await db.select().from(games);

    console.log("gamesData ", gamesData);

    return res.status(200).json(gamesData);
  } catch (error) {
    console.error("Failed to fetch games", error);
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: "Could not fetch games", error: error.message });
    }
  }
};
