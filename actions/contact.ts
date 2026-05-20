"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(9),
  email: z.string().email().optional().or(z.literal("")),
  model: z.string().optional(),
  privacy: z.string().optional(),
  length: z.string().optional(),
  height: z.string().optional(),
  notes: z.string().optional(),
  marketing: z.boolean().optional(),
});

export async function submitContact(data: z.infer<typeof contactSchema>) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) throw new Error("Invalid form data");

  const input = parsed.data;

  // Save to DB if configured
  try {
    const dbUrl = process.env.DATABASE_URL;
    if (dbUrl) {
      const { getDb } = await import("@/lib/db");
      const { contactSubmissions } = await import("@/drizzle/schema");
      const db = await getDb();
      if (db) {
        await db.insert(contactSubmissions).values({
          name: input.name,
          phone: input.phone,
          email: input.email || null,
          model: input.model || null,
          privacy: input.privacy || null,
          length: input.length || null,
          height: input.height || null,
          notes: input.notes || null,
          marketing: input.marketing ? 1 : 0,
        });
      }
    }
  } catch (err) {
    console.warn("[Contact] DB insert failed:", err);
  }

  // Build notification lines in Hebrew
  const lines = [
    `שם: ${input.name}`,
    `טלפון: ${input.phone}`,
    input.email ? `מייל: ${input.email}` : null,
    input.model ? `דגם: ${input.model}` : null,
    input.privacy ? `פרטיות: ${input.privacy}` : null,
    input.length ? `אורך: ${input.length} מ׳` : null,
    input.height ? `גובה: ${input.height} ס״מ` : null,
    input.notes ? `הערות: ${input.notes}` : null,
    input.marketing ? `אישר דיוור שיווקי: כן` : null,
  ]
    .filter(Boolean)
    .join("\n");

  console.log(`[Contact] New submission:\n${lines}`);

  return { success: true };
}
