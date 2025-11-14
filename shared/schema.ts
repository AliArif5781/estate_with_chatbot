import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const properties = pgTable("properties", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  price: text("price").notNull(),
  location: text("location").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  area: text("area").notNull(),
  description: text("description").notNull(),
  amenities: text("amenities").array().notNull(),
  image: text("image").notNull(),
  type: text("type").notNull(),
  yearBuilt: integer("year_built").notNull(),
});

export const insertPropertySchema = createInsertSchema(properties).omit({
  id: true,
});

export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;
