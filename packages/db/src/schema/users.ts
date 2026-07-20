

import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { timestampAt } from "../utils.js";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstname: text("first_name").notNull(),
  lastname: text("last_name").notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({length: 32}).notNull(),
  createdAt: timestampAt("created_at"),
  updatedAt: timestampAt("updated_at"),
});
