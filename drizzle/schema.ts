import { int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 320 }),
  model: varchar("model", { length: 64 }),
  privacy: varchar("privacy", { length: 32 }),
  length: varchar("length", { length: 16 }),
  height: varchar("height", { length: 16 }),
  notes: text("notes"),
  marketing: int("marketing").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;
