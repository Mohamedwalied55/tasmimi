"use client";

import { useState } from "react";

type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
  active: boolean;
};

const initialServices: Service[] = [
  {
    id: 1,
    title: "كتابة المذكرات",
    description: "كتابة وترتيب المحتوى التعليمي بشكل واضح ومنظم.",
    price: "يبدأ من 50 جنيه",
    icon: "📝",
    active: true,
  },
  {
    id: 2,
    title: "تنسيق المذكرات",
    description: "تنسيق احترافي للملفات والمذكرات مع تنظيم العناوين والفقرات.",
    price: "يبدأ من 40 جنيه",
    icon: "📚",
    active: true,
  },
  {
    id: 3,
    title: "تصميم الأغلفة",
    description: "تصميم غلاف مميز يناسب محتوى المذكرة.",
    price: "يبدأ من 30 جنيه",
    icon: "🎨",
    active: true,
  },
  {
    id: 4,
    title: "Word و PDF",
    description: "تنسيق وتجهيز الملفات بصيغ Word و PDF.",
    price: "حسب الطلب",
    icon: "📄",
    active: true,
  },
  {
    id: 5,
    title: "الملخصات",
    description: "تحويل المحتوى الطويل إلى ملخص مرتب وسهل المراجعة.",
    price: "حسب المحتوى",
    icon: "📋",
    active: true,
  },
  {
    id: 6,
    title: "الخرائط الذهنية",
    description: "تحويل الأفكار والمعلومات إلى خرائط ذهنية منظمة.",
    price: "يبدأ من 50 جنيه",
    icon: "🧠",
    active: true,
  },
];

export default function AdminServicesPage() {
  const [services, setServices] = useState(initialServices);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    icon: "📝",
  });

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      price: "",
      icon: "📝",
    });

    setEditingId(null);
  };

  const saveService = () => {
    if (!form.title.trim() || !form.description.trim()) {
      alert("من فضلك اكتب اسم الخدمة والوصف.");
      return;
    }

    if (editingId !== null) {
      setServices((current) =>
        current.map((service) =>
          service.id === editingId
            ? {
                ...service,
                title: form.title,
                description: form.description,
                price: form.price,
                icon: form.icon,
              }
            : service
        )
      );
    } else {
      const newService: Service = {
        id: Date.now(),
        title: form.title,
        description: form.description,
        price: form.price,
        icon: form.icon,
        active: true,
      };

      setServices((current) => [...current, newService]);
    }

    resetForm();
  };

  const editService = (service: Service) => {
    setEditingId(service.id);

    setForm({
      title: service.title,
      description: service.description,
      price: service.price,
      icon: service.icon,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteService = (id: number) => {
    const confirmed = window.confirm(
      "هل أنت متأكد من حذف هذه الخدمة؟"
    );

    if (!confirmed) return;

    setServices((current) =>
      current.filter((service) => service.id !== id)
    );
  };

  const toggleService = (id: number) => {
    setServices((current) =>
      current.map((service) =>
        service.id === id
          ? {
              ...service,
              active: !service.active,
            }
          : service
      )
    );
  };

  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            لوحة الإدارة / الخدمات
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-olive-900">
                إدارة الخدمات
              </h1>

              <p className="mt-2 text-sm text-warmGray-500">
                أضف وعدّل واحذف الخدمات التي تظهر للعملاء.
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
                  ? "تعديل الخدمة"
                  : "إضافة خدمة جديدة"}
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                البيانات التي تدخلها هنا ستظهر لاحقًا في الموقع.
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
                اسم الخدمة
              </label>

              <input
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                placeholder="مثال: تصميم المذكرات"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                الأيقونة
              </label>

              <input
                value={form.icon}
                onChange={(e) =>
                  setForm({
                    ...form,
                    icon: e.target.value,
                  })
                }
                placeholder="📝"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-olive-800">
                وصف الخدمة
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
                placeholder="اكتب وصفًا مختصرًا وواضحًا للخدمة..."
                className="w-full resize-none rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-olive-800">
                السعر
              </label>

              <input
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                placeholder="مثال: يبدأ من 50 جنيه"
                className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
              />
            </div>

          </div>

          <button
            type="button"
            onClick={saveService}
            className="mt-6 rounded-xl bg-olive-600 px-7 py-3 text-sm font-black text-white shadow-olive transition hover:bg-olive-700"
          >
            {editingId !== null
              ? "حفظ التعديلات"
              : "إضافة الخدمة"}
          </button>
        </section>

        {/* Services */}
        <section className="mt-8">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-olive-900">
                الخدمات الحالية
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                {services.length} خدمات
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`rounded-3xl bg-white p-6 shadow-card transition ${
                  !service.active ? "opacity-60" : ""
                }`}
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-olive-100 text-2xl">
                    {service.icon}
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      service.active
                        ? "bg-olive-100 text-olive-700"
                        : "bg-warmGray-100 text-warmGray-500"
                    }`}
                  >
                    {service.active ? "نشطة" : "مخفية"}
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-black text-olive-800">
                  {service.title}
                </h3>

                <p className="mt-2 min-h-[72px] text-sm leading-6 text-warmGray-500">
                  {service.description}
                </p>

                <div className="mt-4 rounded-xl bg-cream-100 px-4 py-3">
                  <span className="text-xs text-warmGray-500">
                    السعر
                  </span>

                  <p className="mt-1 text-sm font-black text-olive-700">
                    {service.price || "غير محدد"}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">

                  <button
                    type="button"
                    onClick={() => editService(service)}
                    className="rounded-xl border border-olive-200 px-4 py-3 text-xs font-bold text-olive-700 transition hover:bg-olive-50"
                  >
                    تعديل
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className="rounded-xl border border-olive-200 px-4 py-3 text-xs font-bold text-olive-700 transition hover:bg-olive-50"
                  >
                    {service.active ? "إخفاء" : "إظهار"}
                  </button>

                </div>

                <button
                  type="button"
                  onClick={() => deleteService(service.id)}
                  className="mt-2 w-full rounded-xl border border-red-200 px-4 py-3 text-xs font-bold text-red-600 transition hover:bg-red-50"
                >
                  حذف الخدمة
                </button>

              </div>
            ))}
          </div>

        </section>

        <div className="mt-8 rounded-2xl border border-olive-100 bg-olive-50 p-5">
          <p className="text-sm font-bold text-olive-800">
            ملاحظة مهمة
          </p>

          <p className="mt-2 text-xs leading-6 text-warmGray-600">
            التحكم الحالي يعمل داخل الصفحة فقط كتجربة. في مرحلة قاعدة
            البيانات سنجعل الإضافة والتعديل والحذف محفوظين بشكل دائم،
            والخدمات التي تخفيها من هنا ستختفي تلقائيًا من الموقع.
          </p>
        </div>

      </div>
    </main>
  );
}
