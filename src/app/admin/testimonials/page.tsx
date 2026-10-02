"use client";

import { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  active: boolean;
};

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "محمد أحمد",
    role: "طالب",
    text: "التنسيق ممتاز والمذكرة بقت أوضح وأسهل في المذاكرة.",
    rating: 5,
    active: true,
  },
  {
    id: 2,
    name: "سارة محمد",
    role: "طالبة",
    text: "التصميم جميل جدًا والملف اتجهز بشكل احترافي.",
    rating: 5,
    active: true,
  },
  {
    id: 3,
    name: "أحمد محمود",
    role: "طالب",
    text: "الخدمة سريعة والتعامل كان ممتاز.",
    rating: 4,
    active: true,
  },
];

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] =
    useState(initialTestimonials);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5,
  });

  const resetForm = () => {
    setForm({
      name: "",
      role: "",
      text: "",
      rating: 5,
    });

    setEditingId(null);
  };

  const saveTestimonial = () => {
    if (!form.name.trim() || !form.text.trim()) {
      alert("من فضلك اكتب اسم العميل ونص التقييم.");
      return;
    }

    if (editingId !== null) {
      setTestimonials((current) =>
        current.map((item) =>
          item.id === editingId
            ? {
                ...item,
                name: form.name,
                role: form.role,
                text: form.text,
                rating: form.rating,
              }
            : item
        )
      );
    } else {
      const newTestimonial: Testimonial = {
        id: Date.now(),
        name: form.name,
        role: form.role,
        text: form.text,
        rating: form.rating,
        active: true,
      };

      setTestimonials((current) => [
        ...current,
        newTestimonial,
      ]);
    }

    resetForm();
  };

  const editTestimonial = (item: Testimonial) => {
    setEditingId(item.id);

    setForm({
      name: item.name,
      role: item.role,
      text: item.text,
      rating: item.rating,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteTestimonial = (id: number) => {
    const confirmed = window.confirm(
      "هل أنت متأكد من حذف هذا التقييم؟"
    );

    if (!confirmed) return;

    setTestimonials((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const toggleTestimonial = (id: number) => {
    setTestimonials((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              active: !item.active,
            }
          : item
      )
    );
  };

  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            لوحة الإدارة / آراء العملاء
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-olive-900">
                آراء العملاء
              </h1>

              <p className="mt-2 text-sm text-warmGray-500">
                أضف وعدّل وتحكم في التقييمات الظاهرة على الموقع.
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
                  ? "تعديل التقييم"
                  : "إضافة تقييم جديد"}
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                اكتب رأي العميل والتقييم الذي سيظهر للزوار.
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

          <div className="mt-7 grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                اسم العميل
              </label>

              <input
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                placeholder="مثال: محمد أحمد"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                الصفة
              </label>

              <input
                value={form.role}
                onChange={(e) =>
                  setForm({
                    ...form,
                    role: e.target.value,
                  })
                }
                placeholder="مثال: طالب"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-olive-800">
                التقييم
              </label>

              <textarea
                value={form.text}
                onChange={(e) =>
                  setForm({
                    ...form,
                    text: e.target.value,
                  })
                }
                rows={4}
                placeholder="اكتب رأي العميل..."
                className="w-full resize-none rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                عدد النجوم
              </label>

              <select
                value={form.rating}
                onChange={(e) =>
                  setForm({
                    ...form,
                    rating: Number(e.target.value),
                  })
                }
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm font-bold text-olive-800 outline-none"
              >
                <option value={5}>5 نجوم</option>
                <option value={4}>4 نجوم</option>
                <option value={3}>3 نجوم</option>
                <option value={2}>نجمتان</option>
                <option value={1}>نجمة واحدة</option>
              </select>
            </div>

          </div>

          <button
            type="button"
            onClick={saveTestimonial}
            className="mt-6 rounded-xl bg-olive-600 px-7 py-3 text-sm font-black text-white shadow-olive transition hover:bg-olive-700"
          >
            {editingId !== null
              ? "حفظ التعديلات"
              : "إضافة التقييم"}
          </button>
        </section>

        {/* Testimonials */}
        <section className="mt-8">

          <div className="mb-5">
            <h2 className="text-xl font-black text-olive-900">
              التقييمات الحالية
            </h2>

            <p className="mt-1 text-sm text-warmGray-500">
              {testimonials.length} تقييم
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {testimonials.map((item) => (
              <article
                key={item.id}
                className={`rounded-3xl bg-white p-6 shadow-card transition ${
                  !item.active ? "opacity-60" : ""
                }`}
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-100 font-black text-olive-700">
                    {item.name.charAt(0)}
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      item.active
                        ? "bg-olive-100 text-olive-700"
                        : "bg-warmGray-100 text-warmGray-500"
                    }`}
                  >
                    {item.active ? "ظاهر" : "مخفي"}
                  </span>

                </div>

                <div className="mt-5 flex gap-1 text-lg">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < item.rating
                          ? "text-yellow-500"
                          : "text-warmGray-200"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="mt-4 min-h-[84px] text-sm leading-7 text-warmGray-600">
                  “{item.text}”
                </p>

                <div className="mt-5 border-t border-olive-50 pt-4">
                  <p className="font-black text-olive-800">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-warmGray-500">
                    {item.role || "عميل"}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">

                  <button
                    type="button"
                    onClick={() => editTestimonial(item)}
                    className="rounded-xl border border-olive-200 px-4 py-3 text-xs font-bold text-olive-700 transition hover:bg-olive-50"
                  >
                    تعديل
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      toggleTestimonial(item.id)
                    }
                    className="rounded-xl border border-olive-200 px-4 py-3 text-xs font-bold text-olive-700 transition hover:bg-olive-50"
                  >
                    {item.active ? "إخفاء" : "إظهار"}
                  </button>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    deleteTestimonial(item.id)
                  }
                  className="mt-2 w-full rounded-xl border border-red-200 px-4 py-3 text-xs font-bold text-red-600 transition hover:bg-red-50"
                >
                  حذف التقييم
                </button>

              </article>
            ))}

          </div>
        </section>

        <div className="mt-8 rounded-2xl border border-olive-100 bg-olive-50 p-5">
          <p className="text-sm font-bold text-olive-800">
            ملاحظة
          </p>

          <p className="mt-2 text-xs leading-6 text-warmGray-600">
            التقييمات الحالية تجريبية. بعد ربط قاعدة البيانات سيتم
            حفظ التقييمات بشكل دائم وربطها بصفحة الموقع الرئيسية.
          </p>
        </div>

      </div>
    </main>
  );
}
