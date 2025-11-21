import {
  integer,
  pgTable,
  varchar,
  primaryKey,
  serial,
} from "drizzle-orm/pg-core";

export const strategies = pgTable("strategies", {
  userId: serial().primaryKey(),
  strategyName: varchar({ length: 255 }),
  beats: varchar({ length: 255 }),
  isBeatenBy: varchar({ length: 255 }),
});
