import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const games = pgTable("games", {
  gameId: serial().primaryKey(),
  strategyName: varchar({ length: 255 }),
  madeAt: timestamp().defaultNow().notNull(),
  lastPlayed: timestamp(),
});

export const strategies = pgTable("strategies", {
  strategyId: serial().primaryKey(),
  strategyName: varchar({ length: 255 }).notNull(),
  gameId: integer()
    .notNull()
    .references(() => games.gameId),
});

export const gameRelations = relations(games, ({ many }) => ({
  games: many(games),
}));

export const strategiesRelations = relations(strategies, ({ one }) => ({
  author: one(games, {
    fields: [strategies.gameId],
    references: [games.gameId],
  }),
}));
