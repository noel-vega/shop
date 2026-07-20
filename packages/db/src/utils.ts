import { timestamp } from "drizzle-orm/pg-core";

export const timestampAt = (colName: "created_at" | "updated_at") => timestamp(colName).notNull().defaultNow()