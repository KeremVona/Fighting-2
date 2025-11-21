import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { strategies } from "./db/schema.js";
import { is } from "drizzle-orm";

const db = drizzle({
  connection: process.env.DATABASE_URL!,
});

interface StrategyRequestBody {
  title: string;
  beats: string;
  isBeatenBy: string;
}

const fetchStrategies = async () => {
  try {
    const strategiesData = await db.select().from(strategies);

    console.log("res: ", strategiesData);
  } catch (error) {
    console.error("Failed to fetch strategies:", error);
  }
};

const sendStrategy = async (
  req: Request<{}, {}, StrategyRequestBody>,
  res: Response
) => {
  try {
    const { title, beats, isBeatenBy } = req.body;
    await db
      .insert(strategies)
      .values({ strategyName: title, beats: beats, isBeatenBy: isBeatenBy });
  } catch (error) {
    console.error("Failed to send strategy:", error);
  }
};
