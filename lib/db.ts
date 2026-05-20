/* eslint-disable @typescript-eslint/no-explicit-any */
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "@/drizzle/schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let db: any = null;

export async function getDb() {
  if (db) return db as ReturnType<typeof drizzle<typeof schema>>;
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  try {
    // Dynamic import to avoid SSR issues
    const mysql = await import("mysql2/promise");
    const pool = mysql.default.createPool(url);
    db = drizzle(pool, { schema, mode: "default" });
    return db as ReturnType<typeof drizzle<typeof schema>>;
  } catch (err) {
    console.warn("[DB] Connection failed:", err);
    return null;
  }
}
