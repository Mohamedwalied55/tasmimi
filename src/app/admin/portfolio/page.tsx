"use client";

import { useState } from "react";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  active: boolean;
};

const initialPortfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "مذكرة تعليمية",
    category: "مذكرات",
    description: "تصميم وتنسيق مذكرة تعليمية بشكل مرتب وسهل القراءة.",
    image: "",
    active: true,
  },
  {
    id: 2,
    title: "ملخص دراسي",
    category: "ملخصات",
    description: "ملخص دراسي منظم يساعد على سرعة المراجعة.",
    image: "",
    active: true,
  },
  {
    id: 3,
    title: "غلاف مذكرة",
    category: "أغلفة",
    description: "غلاف تعليمي بتصميم بسيط واحترافي.",
    image: "",
    active: true,
  },
  {
    id: 4,
    title: "تنسيق PDF",
    category: "PDF",
    description: "إعادة ترتيب وتنسيق ملف PDF بصورة احترافية.",
    image: "",
    active: true,
  },
];

export default function AdminPortfolioPage() {
  const [items, setItems] = useState(initialPortfolio);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });

  const resetForm = () => {
    setForm({
      title: "",
      category: "",
      description: "",
      image: "",
    });

    setEditingId(null);
  };

  const saveItem = () => {
    if (!form.title.trim() || !form.description.trim()) {
      alert("من فضلك اكتب اسم العمل والوصف.");
      return;
    }

    if (editingId !== null) {
      setItems((current) =>
        current.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title: form.title,
                category: form.category,
                description: form.description,
                image: form.image,
              }
            : item
        )
      );
    } else {
      const newItem: PortfolioItem = {
        id: Date.now(),
        title: form.title,
        category: form.category,
        description: form.description,
        image: form.image,
        active: true,
      };

      setItems((current) => [...current, newItem]);
    }

    resetForm();
  };

  const editItem = (item: PortfolioItem) => {
    setEditingId(item.id);

    setForm({
      title: item.title,
      category: item.category,
      description: item.description,
      image: item.image,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteItem = (id: number) => {
    const confirmed = window.confirm(
      "هل أنت متأكد من حذف هذا العمل؟"
    );

    if (!confirmed) return;

    setItems((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const toggleItem = (id: number) => {
    setItems((current) =>
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
            لوحة الإدارة / أعمالنا
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-olive-900">
                إدارة الأعمال
              </h1>

              <p className="mt-2 text-sm text-warmGray-500">
                أضف أعمالك وصور مشاريعك وتحكم في ظهورها على الموقع.
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
                  ? "تعديل العمل"
                  : "إضافة عمل جديد"}
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                أضف بيانات العمل والصورة التي تريد عرضها.
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
                اسم العمل
              </label>

              <input
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                placeholder="مثال: مذكرة أحياء"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                التصنيف
              </label>

              <input
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
                placeholder="مثال: مذكرات"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-olive-800">
                رابط الصورة
              </label>

              <input
                value={form.image}
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.value,
                  })
                }
                placeholder="https://example.com/image.jpg"
                dir="ltr"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />

              <p className="mt-2 text-xs text-warmGray-400">
                حاليًا نستخدم رابط الصورة. سنضيف رفع الصور مباشرة من
                لوحة الإدارة بعد تجهيز التخزين.
              </p>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-olive-800">
                وصف العمل
              </label>

              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                rows={4}
                placeholder="اكتب وصفًا مختصرًا للعمل..."
                className="w-full resize-none rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

          </div>

          <button
            type="button"
            onClick={saveItem}
            className="mt-6 rounded-xl bg-olive-600 px-7 py-3 text-sm font-black text-white shadow-olive transition hover:bg-olive-700"
          >
            {editingId !== null
              ? "حفظ التعديلات"
              : "إضافة العمل"}
          </button>
        </section>

        {/* Portfolio */}
        <section className="mt-8">

          <div className="mb-5">
            <h2 className="text-xl font-black text-olive-900">
              الأعمال الحالية
            </h2>

            <p className="mt-1 text-sm text-warmGray-500">
              {items.length} أعمال
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {items.map((item) => (
              <article
                key={item.id}
                className={`overflow-hidden rounded-3xl bg-white shadow-card transition ${
                  !item.active ? "opacity-60" : ""
                }`}
              >

                {/* Image */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-olive-50">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-5xl">🖼️</div>

                      <p className="mt-3 text-xs font-bold text-olive-500">
                        لا توجد صورة
                      </p>
                    </div>
                  )}

                  <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-black ${
                      item.active
                        ? "bg-white text-olive-700"
                        : "bg-warmGray-100 text-warmGray-500"
                    }`}
                  >
                    {item.active ? "ظاهر" : "مخفي"}
                  </span>
                </div>

                <div className="p-6">

                  <span className="text-xs font-bold text-olive-500">
                    {item.category || "بدون تصنيف"}
                  </span>

                  <h3 className="mt-2 text-lg font-black text-olive-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 min-h-[60px] text-sm leading-6 text-warmGray-500">
                    {item.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2">

                    <button
                      type="button"
                      onClick={() => editItem(item)}
                      className="rounded-xl border border-olive-200 px-4 py-3 text-xs font-bold text-olive-700 transition hover:bg-olive-50"
                    >
                      تعديل
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="rounded-xl border border-olive-200 px-4 py-3 text-xs font-bold text-olive-700 transition hover:bg-olive-50"
                    >
                      {item.active ? "إخفاء" : "إظهار"}
                    </button>

                  </div>

                  <button
                    type="button"
                    onClick={() => deleteItem(item.id)}
                    className="mt-2 w-full rounded-xl border border-red-200 px-4 py-3 text-xs font-bold text-red-600 transition hover:bg-red-50"
                  >
                    حذف العمل
                  </button>

                </div>
              </article>
            ))}

          </div>
        </section>

        <div className="mt-8 rounded-2xl border border-olive-100 bg-olive-50 p-5">
          <p className="text-sm font-bold text-olive-800">
            ملاحظة
          </p>

          <p className="mt-2 text-xs leading-6 text-warmGray-600">
            حاليًا البيانات تجريبية داخل الصفحة. في مرحلة قاعدة البيانات
            سنضيف رفع الصور مباشرة، وحفظ الأعمال بشكل دائم، وربطها
            تلقائيًا بصفحة أعمالنا في الموقع.
          </p>
        </div>

      </div>
    </main>
  );
}
