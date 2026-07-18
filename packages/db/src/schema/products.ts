import {
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

export const productStatusEnum = pgEnum("product_status", [
  "draft",
  "active",
  "archived",
]);

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 2000 }),
  status: productStatusEnum().notNull().default("draft"),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

// e.g. "Color", "Size" — scoped to one product
export const productOptionsTable = pgTable(
  "product_options",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    productId: integer()
      .notNull()
      .references(() => productsTable.id, { onDelete: "cascade" }),
    name: varchar({ length: 100 }).notNull(),
  },
  (t) => [unique().on(t.productId, t.name)],
);

// e.g. "Red", "Large" — belongs to one option
export const productOptionValuesTable = pgTable(
  "product_option_values",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    optionId: integer()
      .notNull()
      .references(() => productOptionsTable.id, { onDelete: "cascade" }),
    value: varchar({ length: 100 }).notNull(),
  },
  (t) => [unique().on(t.optionId, t.value)],
);

// a single sellable unit, e.g. "Blue / Large"
export const productVariantsTable = pgTable("product_variants", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  productId: integer()
    .notNull()
    .references(() => productsTable.id, { onDelete: "cascade" }),
  sku: varchar({ length: 100 }).notNull().unique(),
  priceCents: integer().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

// join table: which option values make up a given variant
export const variantOptionValuesTable = pgTable(
  "variant_option_values",
  {
    variantId: integer()
      .notNull()
      .references(() => productVariantsTable.id, { onDelete: "cascade" }),
    optionValueId: integer()
      .notNull()
      .references(() => productOptionValuesTable.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.variantId, t.optionValueId] })],
);
