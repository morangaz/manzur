import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getDb } = await import("@/lib/db");
    const { contactSubmissions } = await import("@/drizzle/schema");
    const { desc } = await import("drizzle-orm");

    const db = await getDb();
    if (!db) {
      return NextResponse.json([]);
    }

    const results = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(500);

    return NextResponse.json(results);
  } catch (err) {
    console.warn("[Admin] DB list failed:", err);
    return NextResponse.json([]);
  }
}
