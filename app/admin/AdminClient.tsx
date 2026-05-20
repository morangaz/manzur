"use client";

import { useEffect, useState } from "react";

type Submission = {
  id: number;
  name: string;
  phone: string;
  email?: string | null;
  model?: string | null;
  privacy?: string | null;
  length?: string | null;
  height?: string | null;
  notes?: string | null;
  marketing?: number | null;
  createdAt: string;
};

export default function AdminClient() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/admin/submissions");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSubmissions(data);
    } catch (err) {
      setError("שגיאה בטעינת הנתונים");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-8 text-right" dir="rtl" style={{ background: "var(--cream)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-sm mb-4 inline-block" style={{ color: "var(--earth)" }}>
            ← חזרה לאתר
          </a>
          <h1 className="text-3xl font-black" style={{ color: "var(--deep-charcoal)" }}>
            פאנל ניהול · פניות
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
            מתעדכן אוטומטית כל 30 שניות
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl text-right" style={{ background: "white" }}>
            <div className="text-3xl font-black" style={{ color: "var(--earth)" }}>
              {submissions.length}
            </div>
            <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              סה״כ פניות
            </div>
          </div>
          <div className="p-4 rounded-2xl text-right" style={{ background: "white" }}>
            <div className="text-3xl font-black" style={{ color: "var(--earth)" }}>
              {submissions.filter((s) => s.marketing).length}
            </div>
            <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              אישרו דיוור
            </div>
          </div>
          <div className="p-4 rounded-2xl text-right" style={{ background: "white" }}>
            <div className="text-3xl font-black" style={{ color: "var(--earth)" }}>
              {submissions.filter((s) => s.model).length}
            </div>
            <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              בחרו דגם
            </div>
          </div>
        </div>

        {loading && (
          <p className="text-center py-8" style={{ color: "var(--muted-foreground)" }}>
            טוען...
          </p>
        )}
        {error && (
          <p className="text-center py-8 text-red-500">{error}</p>
        )}

        <div className="space-y-4">
          {submissions.map((s) => (
            <div
              key={s.id}
              className="p-6 rounded-2xl text-right"
              style={{ background: "white", border: "1px solid var(--border)" }}
            >
              <div className="flex items-start justify-between gap-4 flex-row-reverse">
                <div className="flex-1">
                  <div className="font-black text-lg" style={{ color: "var(--deep-charcoal)" }}>
                    {s.name}
                  </div>
                  <div className="text-sm mt-1 space-y-1">
                    {s.model && (
                      <div>
                        <span className="font-semibold">דגם: </span>{s.model}
                      </div>
                    )}
                    {s.privacy && (
                      <div>
                        <span className="font-semibold">פרטיות: </span>{s.privacy}
                      </div>
                    )}
                    {(s.length || s.height) && (
                      <div>
                        {s.length && <span>אורך: {s.length} מ׳ </span>}
                        {s.height && <span>גובה: {s.height} ס״מ</span>}
                      </div>
                    )}
                    {s.notes && (
                      <div>
                        <span className="font-semibold">הערות: </span>{s.notes}
                      </div>
                    )}
                    {s.email && (
                      <div>
                        <span className="font-semibold">מייל: </span>
                        <a href={`mailto:${s.email}`} style={{ color: "var(--earth)" }}>
                          {s.email}
                        </a>
                      </div>
                    )}
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {new Date(s.createdAt).toLocaleString("he-IL")}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a
                    href={`https://wa.me/972${s.phone.replace(/-/g, "").replace(/^0/, "")}?text=שלום ${s.name}, מנצור אלומיניום`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs px-3 py-2"
                  >
                    וואטסאפ
                  </a>
                  <a
                    href={`tel:${s.phone}`}
                    className="btn-primary text-xs px-3 py-2"
                  >
                    {s.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!loading && submissions.length === 0 && !error && (
          <p className="text-center py-12" style={{ color: "var(--muted-foreground)" }}>
            אין פניות עדיין
          </p>
        )}
      </div>
    </div>
  );
}
