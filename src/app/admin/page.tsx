"use client";

import Link from "next/link";

const stats = [
  {
    title: "إجمالي الطلبات",
    value: "24",
    icon: "📦",
  },
  {
    title: "طلبات جديدة",
    value: "7",
    icon: "🆕",
  },
  {
    title: "العملاء",
    value: "18",
    icon: "👥",
  },
  {
    title: "الخدمات",
    value: "6",
    icon: "🛠️",
  },
];

const adminLinks = [
  {
    title: "إدارة الطلبات",
    description: "متابعة الطلبات وتغيير حالتها والتواصل مع العملاء.",
    href: "/admin/orders",
    icon: "📦",
  },
  {
    title: "العملاء",
    description: "عرض بيانات العملاء وحساباتهم وطلباتهم.",
    href: "/admin/customers",
    icon: "👥",
  },
  {
    title: "الخدمات",
    description: "إضافة وتعديل وحذف الخدمات والأسعار والتفاصيل.",
    href: "/admin/services",
    icon: "🛠️",
  },
  {
    title: "أعمالنا",
    description: "إدارة معرض الأعمال والصور والعناوين والوصف.",
    href: "/admin/portfolio",
    icon: "🖼️",
  },
  {
    title: "آراء العملاء",
    description: "إضافة وتعديل وإخفاء تقييمات وآراء العملاء.",
    href: "/admin/testimonials",
    icon: "💬",
  },
  {
    title: "الأسئلة الشائعة",
    description: "إدارة الأسئلة والإجابات الظاهرة في الموقع.",
    href: "/admin/faq",
    icon: "❓",
  },
  {
    title: "الألوان والخطوط",
    description: "التحكم في ألوان الموقع والخطوط وألوان النصوص.",
    href: "/admin/theme",
    icon: "🎨",
  },
  {
    title: "الإعدادات",
    description: "واتساب وبيانات التواصل وإعدادات الموقع العامة.",
    href: "/admin/settings",
    icon: "⚙️",
  },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-black tracking-widest text-olive-500">
              لوحة الإدارة
            </span>

            <h1 className="mt-2 text-3xl font-black text-olive-900">
              أهلاً بك في لوحة تحكم تصميمي
            </h1>

            <p className="mt-2 text-sm text-warmGray-500">
              من هنا تقدر تتحكم في الموقع بالكامل.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-olive-200 bg-white px-5 py-3 text-center text-sm font-bold text-olive-700 transition hover:bg-olive-50"
          >
            ← عرض الموقع
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl bg-white p-6 shadow-card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-warmGray-500">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-black text-olive-800">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive-100 text-xl">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-black text-olive-900">
              التحكم في الموقع
            </h2>

            <p className="mt-1 text-sm text-warmGray-500">
              اختر القسم الذي تريد إدارته.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {adminLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-olive-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-olive-200 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive-100 text-xl transition group-hover:bg-olive-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-black text-olive-800">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-warmGray-500">
                  {item.description}
                </p>

                <div className="mt-5 text-xs font-black text-olive-600">
                  فتح القسم ←
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-olive-800 p-7 text-white shadow-olive">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black tracking-widest text-olive-200">
                تصميمي
              </p>

              <h2 className="mt-2 text-2xl font-black">
                كل حاجة في مكان واحد
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-olive-100">
                لاحقًا هنربط لوحة الإدارة بقاعدة البيانات بحيث أي تعديل
                تعمله هنا يظهر مباشرة في الموقع.
              </p>
            </div>

            <Link
              href="/"
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-black text-olive-800 transition hover:bg-olive-100"
            >
              الموقع الرئيسي
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
