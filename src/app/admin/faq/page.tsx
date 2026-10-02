"use client";

import { useState } from "react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
  active: boolean;
};

const initialFAQs: FAQ[] = [
  {
    id: 1,
    question: "إزاي أطلب خدمة؟",
    answer:
      "ادخل على صفحة اطلب خدمتك، اكتب بياناتك وتفاصيل المطلوب، وارفع الملفات إذا كانت موجودة، وبعدها سيتم التواصل معك لتأكيد الطلب.",
    active: true,
  },
  {
    id: 2,
    question: "إيه الخدمات اللي بتقدموها؟",
    answer:
      "بنقدم كتابة وتنسيق المذكرات، تصميم الأغلفة، تنسيق Word وPDF، إعداد الملخصات والخرائط الذهنية.",
    active: true,
  },
  {
    id: 3,
    question: "هل أقدر أرفع ملف مع الطلب؟",
    answer:
      "نعم، تقدر ترفق الملفات المطلوبة مع تفاصيل الطلب، وسيتم مراجعتها قبل بدء التنفيذ.",
    active: true,
  },
  {
    id: 4,
    question: "إزاي أتابع حالة الطلب؟",
    answer:
      "بعد إنشاء الطلب يمكنك استخدام رقم الطلب في صفحة تتبع الطلب لمعرفة آخر تحديث.",
    active: true,
  },
  {
    id: 5,
    question: "هل يوجد تعديلات على العمل؟",
    answer:
      "يمكن الاتفاق على التعديلات المطلوبة حسب نوع الخدمة قبل التسليم النهائي.",
    active: true,
  },
];

export default function AdminFAQPage() {
  const [faqs, setFaqs] = useState(initialFAQs);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  const resetForm = () => {
    setForm({
      question: "",
      answer: "",
    });

    setEditingId(null);
  };

  const saveFAQ = () => {
    if (!form.question.trim() || !form.answer.trim()) {
      alert("من فضلك اكتب السؤال والإجابة.");
      return;
    }

    if (editingId !== null) {
      setFaqs((current) =>
        current.map((faq) =>
          faq.id === editingId
            ? {
                ...faq,
                question: form.question,
                answer: form.answer,
              }
            : faq
        )
      );
    } else {
      const newFAQ: FAQ = {
        id: Date.now(),
        question: form.question,
        answer: form.answer,
        active: true,
      };

      setFaqs((current) => [...current, newFAQ]);
    }

    resetForm();
  };

  const editFAQ = (faq: FAQ) => {
    setEditingId(faq.id);

    setForm({
      question: faq.question,
      answer: faq.answer,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteFAQ = (id: number) => {
    const confirmed = window.confirm(
      "هل أنت متأكد من حذف هذا السؤال؟"
    );

    if (!confirmed) return;

    setFaqs((current) =>
      current.filter((faq) => faq.id !== id)
    );
  };

  const toggleFAQ = (id: number) => {
    setFaqs((current) =>
      current.map((faq) =>
        faq.id === id
          ? {
              ...faq,
              active: !faq.active,
            }
          : faq
      )
    );
  };

  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            لوحة الإدارة / الأسئلة الشائعة
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-olive-900">
                الأسئلة الشائعة
              </h1>

              <p className="mt-2 text-sm text-warmGray-500">
                أضف وعدّل الأسئلة والإجابات التي تظهر للزوار.
              </p>
            </div>

            <a
              href="/admin"
              className="rounded-xl border border-olive-200 bg-white px-5 py-3 text-center text-sm font-bold text-olive-700 transition hover:bg-olive-50"
            >
              ← لوحة التحكم
            </a>
          </div>
        </div>

        {/* Add / Edit */}
        <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">

          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-olive-900">
                {editingId !== null
                  ? "تعديل السؤال"
                  : "إضافة سؤال جديد"}
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                اكتب السؤال والإجابة التي تريد ظهورها للعملاء.
              </p>
            </div>

            {editingId !== null && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-olive-200 px-4 py-2 text-xs font-bold text-olive-700 hover:bg-olive-50"
              >
                إلغاء التعديل
              </button>
            )}
          </div>

          <div className="mt-7 space-y-5">

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                السؤال
              </label>

              <input
                value={form.question}
                onChange={(e) =>
                  setForm({
                    ...form,
                    question: e.target.value,
                  })
                }
                placeholder="مثال: إزاي أطلب خدمة؟"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                الإجابة
              </label>

              <textarea
                value={form.answer}
                onChange={(e) =>
                  setForm({
                    ...form,
                    answer: e.target.value,
                  })
                }
                rows={5}
                placeholder="اكتب الإجابة بالتفصيل..."
                className="w-full resize-none rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm leading-7 outline-none focus:border-olive-500"
              />
            </div>

          </div>

          <button
            type="button"
            onClick={saveFAQ}
            className="mt-6 rounded-xl bg-olive-600 px-7 py-3 text-sm font-black text-white shadow-olive transition hover:bg-olive-700"
          >
            {editingId !== null
              ? "حفظ التعديلات"
              : "إضافة السؤال"}
          </button>
        </section>

        {/* FAQ List */}
        <section className="mt-8">

          <div className="mb-5">
            <h2 className="text-xl font-black text-olive-900">
              الأسئلة الحالية
            </h2>

            <p className="mt-1 text-sm text-warmGray-500">
              {faqs.length} أسئلة
            </p>
          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <article
                key={faq.id}
                className={`rounded-3xl bg-white p-6 shadow-card transition ${
                  !faq.active ? "opacity-60" : ""
                }`}
              >

                <div className="flex flex-col gap-5 md:flex-row md:items-start">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-olive-100 font-black text-olive-700">
                    {index + 1}
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <h3 className="font-black text-olive-800">
                        {faq.question}
                      </h3>

                      <span
                        className={`w-fit rounded-full px-3 py-1 text-xs font-black ${
                          faq.active
                            ? "bg-olive-100 text-olive-700"
                            : "bg-warmGray-100 text-warmGray-500"
                        }`}
                      >
                        {faq.active ? "ظاهر" : "مخفي"}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-warmGray-600">
                      {faq.answer}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      <button
                        type="button"
                        onClick={() => editFAQ(faq)}
                        className="rounded-xl border border-olive-200 px-4 py-2.5 text-xs font-bold text-olive-700 transition hover:bg-olive-50"
                      >
                        تعديل
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          toggleFAQ(faq.id)
                        }
                        className="rounded-xl border border-olive-200 px-4 py-2.5 text-xs font-bold text-olive-700 transition hover:bg-olive-50"
                      >
                        {faq.active ? "إخفاء" : "إظهار"}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deleteFAQ(faq.id)
                        }
                        className="rounded-xl border border-red-200 px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-50"
                      >
                        حذف
                      </button>

                    </div>

                  </div>

                </div>
              </article>
            ))}

          </div>

          {faqs.length === 0 && (
            <div className="rounded-3xl bg-white py-16 text-center shadow-card">
              <div className="text-5xl">❓</div>

              <h3 className="mt-4 font-black text-olive-800">
                لا توجد أسئلة
              </h3>

              <p className="mt-2 text-sm text-warmGray-500">
                أضف أول سؤال من النموذج بالأعلى.
              </p>
            </div>
          )}

        </section>

        <div className="mt-8 rounded-2xl border border-olive-100 bg-olive-50 p-5">
          <p className="text-sm font-bold text-olive-800">
            ملاحظة
          </p>

          <p className="mt-2 text-xs leading-6 text-warmGray-600">
            البيانات الحالية تجريبية داخل الصفحة. بعد ربط قاعدة البيانات
            سيتم حفظ الأسئلة بشكل دائم وربطها تلقائيًا بصفحة الأسئلة
            الشائعة في الموقع.
          </p>
        </div>

      </div>
    </main>
  );
}
