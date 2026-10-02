"use client";

import { useState } from "react";

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-cream-100">
      <section className="border-b border-olive-100 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <span className="text-xs font-black tracking-widest text-olive-500">
            طلب خدمة
          </span>

          <h1 className="mt-4 text-4xl font-black text-olive-900 sm:text-5xl">
            ابدأ طلبك مع تصميمي
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-warmGray-600">
            املأ البيانات التالية، واكتب لنا تفاصيل الخدمة التي تحتاجها.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {submitted ? (
          <div className="rounded-3xl border border-olive-200 bg-white p-10 text-center shadow-card">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive-100 text-2xl text-olive-700">
              ✓
            </div>

            <h2 className="mt-6 text-2xl font-black text-olive-800">
              تم إرسال طلبك
            </h2>

            <p className="mt-3 leading-7 text-warmGray-600">
              تم تسجيل البيانات بنجاح. سيتم التواصل معك لاستكمال تفاصيل الطلب.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6 rounded-3xl border border-olive-100 bg-white p-6 shadow-card sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  الاسم
                </label>
                <input
                  required
                  type="text"
                  placeholder="اكتب اسمك"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none transition focus:border-olive-500 focus:ring-2 focus:ring-olive-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  رقم الهاتف
                </label>
                <input
                  required
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none transition focus:border-olive-500 focus:ring-2 focus:ring-olive-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                الخدمة المطلوبة
              </label>

              <select
                required
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-100"
              >
                <option value="">اختر الخدمة</option>
                <option>كتابة المذكرات</option>
                <option>تنسيق المذكرات</option>
                <option>تصميم غلاف</option>
                <option>تنسيق Word و PDF</option>
                <option>تصميم ملخص</option>
                <option>خريطة ذهنية</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                تفاصيل الطلب
              </label>

              <textarea
                required
                rows={6}
                placeholder="اكتب كل التفاصيل المطلوبة هنا..."
                className="w-full resize-none rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                رفع الملفات
              </label>

              <div className="rounded-2xl border-2 border-dashed border-olive-200 bg-cream-100 p-8 text-center">
                <div className="text-3xl text-olive-400">↑</div>

                <p className="mt-3 text-sm font-bold text-olive-700">
                  اختر الملفات التي تريد إرسالها
                </p>

                <p className="mt-1 text-xs text-warmGray-500">
                  PDF / Word / صور
                </p>

                <input
                  type="file"
                  multiple
                  className="mx-auto mt-5 block max-w-full text-sm"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-olive-50 p-4 text-sm leading-7 text-olive-800">
              بعد إرسال الطلب سيتم مراجعة التفاصيل والتواصل معك لتأكيد
              الخدمة والتكلفة وموعد التسليم.
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-olive-600 px-6 py-4 font-bold text-white shadow-olive transition hover:bg-olive-700"
            >
              إرسال الطلب
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
