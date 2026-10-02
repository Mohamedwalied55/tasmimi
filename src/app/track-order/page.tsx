"use client";

import { useState } from "react";

const steps = [
  "طلب جديد",
  "تم استلام الملفات",
  "جاري التنفيذ",
  "قيد المراجعة",
  "جاهز للتسليم",
];

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <main className="min-h-[70vh] bg-cream-100 px-4 py-16">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <span className="text-xs font-black tracking-widest text-olive-500">
            تتبع الطلب
          </span>

          <h1 className="mt-3 text-4xl font-black text-olive-900">
            أين وصل طلبك؟
          </h1>

          <p className="mt-4 text-sm leading-7 text-warmGray-600">
            أدخل رقم الطلب لمعرفة آخر تحديث.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (orderId.trim()) {
              setSearched(true);
            }
          }}
          className="mt-10 flex flex-col gap-3 rounded-3xl bg-white p-5 shadow-card sm:flex-row"
        >
          <input
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="مثال: TS-1001"
            className="flex-1 rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-olive-600 px-8 py-3 font-bold text-white hover:bg-olive-700"
          >
            بحث
          </button>
        </form>

        {searched && (
          <section className="mt-6 rounded-3xl bg-white p-6 shadow-card sm:p-8">

            <div className="flex flex-col justify-between gap-4 border-b border-olive-100 pb-6 sm:flex-row">
              <div>
                <span className="text-xs text-warmGray-500">
                  رقم الطلب
                </span>

                <h2 className="mt-1 text-xl font-black text-olive-800">
                  {orderId}
                </h2>
              </div>

              <span className="h-fit rounded-full bg-olive-100 px-4 py-2 text-xs font-bold text-olive-700">
                جاري التنفيذ
              </span>
            </div>

            <div className="mt-8">
              <h3 className="font-black text-olive-800">
                مراحل الطلب
              </h3>

              <div className="mt-6 space-y-4">
                {steps.map((step, index) => {
                  const done = index <= 2;

                  return (
                    <div
                      key={step}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                          done
                            ? "bg-olive-600 text-white"
                            : "bg-olive-100 text-olive-500"
                        }`}
                      >
                        {done ? "✓" : index + 1}
                      </div>

                      <div
                        className={`text-sm font-bold ${
                          done
                            ? "text-olive-800"
                            : "text-warmGray-400"
                        }`}
                      >
                        {step}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-olive-50 p-5">
              <p className="text-xs font-bold text-olive-700">
                آخر تحديث
              </p>

              <p className="mt-2 text-sm leading-7 text-warmGray-700">
                جاري العمل على طلبك وسيتم تحديث الحالة من لوحة الإدارة.
              </p>
            </div>

          </section>
        )}

      </div>
    </main>
  );
}
