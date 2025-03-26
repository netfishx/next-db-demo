import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  age: integer().notNull(),
  email: text().notNull().unique(),
});
