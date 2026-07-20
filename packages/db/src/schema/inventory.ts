
// stock, kept separate from the variant so it can later grow into

import { pgTable, integer, timestamp } from "drizzle-orm/pg-core";
import { productVariantsTable } from "./products.js";
import { timestampAt } from "../utils.js";

// per-location rows without reshaping the catalog tables
export const inventoryTable = pgTable("inventory", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  variantId: integer()
    .notNull()
    .references(() => productVariantsTable.id, { onDelete: "cascade" })
    .unique(),
  quantity: integer().notNull().default(0),
  updatedAt: timestampAt("updated_at")


});