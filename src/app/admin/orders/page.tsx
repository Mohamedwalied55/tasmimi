"use client";

import { useState } from "react";

type OrderStatus =
  | "طلب جديد"
  | "تم استلام الملفات"
  | "جاري التنفيذ"
  | "قيد المراجعة"
  | "جاهز للتسليم"
  | "مكتمل"
  | "ملغي";

type Order = {
  id: string;
  customer: string;
  phone: string;
  service: string;
  date: string;
  status: OrderStatus;
};

const initialOrders: Order[] = [
  {
    id: "TS-1001",
    customer: "محمد أحمد",
    phone: "01000000000",
    service: "تنسيق مذكرة",
    date: "2026/10/01",
    status: "جاري التنفيذ",
  },
  {
    id: "TS-1002",
    customer: "أحمد محمود",
    phone: "01111111111",
    service: "تصميم غلاف",
    date: "2026/09/30",
    status: "طلب جديد",
  },
  {
    id: "TS-1003",
    customer: "سارة محمد",
    phone: "01222222222",
    service: "ملخص دراسي",
    date: "2026/09/29",
    status: "قيد المراجعة",
  },
];

const statuses: OrderStatus[] = [
  "طلب جديد",
  "تم استلام الملفات",
  "جاري التنفيذ",
  "قيد المراجعة",
  "جاهز للتسليم",
  "مكتمل",
  "ملغي",
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("الكل");

  const updateStatus = (id: string, status: OrderStatus) => {
    setOrders((current) =>
      current.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.phone.includes(search);

    const matchesFilter =
      filter === "الكل" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            لوحة الإدارة / الطلبات
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-olive-900">
                إدارة الطلبات
              </h1>

              <p className="mt-2 text-sm text-warmGray-500">
                تابع الطلبات وحدّث حالتها وتواصل مع العميل.
              </p>
            </div>

            <a
              href="/admin"
              className="rounded-xl border border-olive-200 bg-white px-5 py-3 text-center text-sm font-bold text-olive-700 hover:bg-olive-50"
            >
              ← لوحة التحكم
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-sm text-warmGray-500">
              كل الطلبات
            </p>
            <p className="mt-2 text-2xl font-black text-olive-800">
              {orders.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-sm text-warmGray-500">
              طلبات جديدة
            </p>
            <p className="mt-2 text-2xl font-black text-olive-800">
              {orders.filter((o) => o.status === "طلب جديد").length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-sm text-warmGray-500">
              جاري التنفيذ
            </p>
            <p className="mt-2 text-2xl font-black text-olive-800">
              {
                orders.filter(
                  (o) => o.status === "جاري التنفيذ"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-sm text-warmGray-500">
              مكتملة
            </p>
            <p className="mt-2 text-2xl font-black text-olive-800">
              {orders.filter((o) => o.status === "مكتمل").length}
            </p>
          </div>
        </div>

        <section className="mt-8 rounded-3xl bg-white p-5 shadow-card sm:p-7">

          <div className="flex flex-col gap-4 lg:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث برقم الطلب أو اسم العميل أو الهاتف..."
              className="flex-1 rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm font-semibold text-olive-800 outline-none"
            >
              <option value="الكل">كل الحالات</option>

              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] text-right">
              <thead>
                <tr className="border-b border-olive-100 text-xs text-warmGray-500">
                  <th className="px-4 py-4">رقم الطلب</th>
                  <th className="px-4 py-4">العميل</th>
                  <th className="px-4 py-4">الخدمة</th>
                  <th className="px-4 py-4">التاريخ</th>
                  <th className="px-4 py-4">الحالة</th>
                  <th className="px-4 py-4">واتساب</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-olive-50 last:border-0"
                  >
                    <td className="px-4 py-5">
                      <span className="font-black text-olive-800">
                        {order.id}
                      </span>
                    </td>

                    <td className="px-4 py-5">
                      <p className="font-bold text-olive-800">
                        {order.customer}
                      </p>

                      <p className="mt-1 text-xs text-warmGray-500">
                        {order.phone}
                      </p>
                    </td>

                    <td className="px-4 py-5 text-sm text-warmGray-700">
                      {order.service}
                    </td>

                    <td className="px-4 py-5 text-sm text-warmGray-500">
                      {order.date}
                    </td>

                    <td className="px-4 py-5">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(
                            order.id,
                            e.target.value as OrderStatus
                          )
                        }
                        className="rounded-xl border border-olive-200 bg-cream-100 px-3 py-2 text-xs font-bold text-olive-700 outline-none"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="px-4 py-5">
                      <a
                        href={`https://wa.me/2${order.phone.replace(
                          /^0/,
                          ""
                        )}?text=${encodeURIComponent(
                          `مرحباً ${order.customer}،\n\nتحديث طلبك ${order.id}: ${order.status}\n\nتصميمي`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-xl bg-green-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-600"
                      >
                        واتساب
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredOrders.length === 0 && (
              <div className="py-14 text-center">
                <div className="text-4xl">📦</div>

                <h3 className="mt-4 font-black text-olive-800">
                  لا توجد طلبات
                </h3>

                <p className="mt-2 text-sm text-warmGray-500">
                  جرّب تغيير البحث أو الفلتر.
                </p>
              </div>
            )}
          </div>
        </section>

        <div className="mt-6 rounded-2xl border border-olive-100 bg-olive-50 p-5">
          <p className="text-sm font-bold text-olive-800">
            ملاحظة
          </p>

          <p className="mt-2 text-xs leading-6 text-warmGray-600">
            البيانات الحالية تجريبية. بعد ربط قاعدة البيانات، أي تغيير
            في حالة الطلب سيتم حفظه فعليًا، ويمكننا إضافة إرسال إشعار
            واتساب تلقائي عند تغيير الحالة.
          </p>
        </div>

      </div>
    </main>
  );
}
