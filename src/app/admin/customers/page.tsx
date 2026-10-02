"use client";

import { useMemo, useState } from "react";

type Customer = {
  id: string;
  name: string;
  phone: string;
  alternatePhone: string;
  email: string;
  governorate: string;
  address: string;
  orders: number;
  joined: string;
};

const initialCustomers: Customer[] = [
  {
    id: "CUS-001",
    name: "محمد أحمد",
    phone: "01000000000",
    alternatePhone: "01100000000",
    email: "mohamed@example.com",
    governorate: "الغربية",
    address: "سمنود - الغربية",
    orders: 4,
    joined: "2026/09/10",
  },
  {
    id: "CUS-002",
    name: "أحمد محمود",
    phone: "01111111111",
    alternatePhone: "",
    email: "ahmed@example.com",
    governorate: "الدقهلية",
    address: "المنصورة - الدقهلية",
    orders: 2,
    joined: "2026/09/18",
  },
  {
    id: "CUS-003",
    name: "سارة محمد",
    phone: "01222222222",
    alternatePhone: "01022222222",
    email: "sara@example.com",
    governorate: "الغربية",
    address: "طنطا - الغربية",
    orders: 6,
    joined: "2026/09/22",
  },
];

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  const filteredCustomers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return customers;

    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(query) ||
        customer.phone.includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.governorate.toLowerCase().includes(query)
    );
  }, [customers, search]);

  const deleteCustomer = (id: string) => {
    const confirmed = window.confirm(
      "هل أنت متأكد من حذف هذا العميل؟"
    );

    if (!confirmed) return;

    setCustomers((current) =>
      current.filter((customer) => customer.id !== id)
    );

    if (selectedCustomer?.id === id) {
      setSelectedCustomer(null);
    }
  };

  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            لوحة الإدارة / العملاء
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-olive-900">
                إدارة العملاء
              </h1>

              <p className="mt-2 text-sm text-warmGray-500">
                عرض بيانات العملاء وحساباتهم وطلباتهم.
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

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-sm text-warmGray-500">
              إجمالي العملاء
            </p>

            <p className="mt-2 text-3xl font-black text-olive-800">
              {customers.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-sm text-warmGray-500">
              إجمالي الطلبات
            </p>

            <p className="mt-2 text-3xl font-black text-olive-800">
              {customers.reduce(
                (total, customer) => total + customer.orders,
                0
              )}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-sm text-warmGray-500">
              عملاء لديهم أكثر من طلب
            </p>

            <p className="mt-2 text-3xl font-black text-olive-800">
              {
                customers.filter(
                  (customer) => customer.orders > 1
                ).length
              }
            </p>
          </div>
        </div>

        {/* Customers */}
        <section className="mt-8 rounded-3xl bg-white p-5 shadow-card sm:p-7">

          <div className="flex flex-col gap-4 md:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث بالاسم أو الهاتف أو البريد أو المحافظة..."
              className="flex-1 rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none transition focus:border-olive-500"
            />

            <button
              type="button"
              onClick={() => setSearch("")}
              className="rounded-xl border border-olive-200 px-5 py-3 text-sm font-bold text-olive-700 transition hover:bg-olive-50"
            >
              مسح البحث
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[1000px] text-right">
              <thead>
                <tr className="border-b border-olive-100 text-xs text-warmGray-500">
                  <th className="px-4 py-4">العميل</th>
                  <th className="px-4 py-4">الهاتف</th>
                  <th className="px-4 py-4">المحافظة</th>
                  <th className="px-4 py-4">الطلبات</th>
                  <th className="px-4 py-4">تاريخ التسجيل</th>
                  <th className="px-4 py-4">الإجراءات</th>
                </tr>
              </thead>

              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-olive-50 last:border-0"
                  >
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-olive-100 font-black text-olive-700">
                          {customer.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-black text-olive-800">
                            {customer.name}
                          </p>

                          <p className="mt-1 text-xs text-warmGray-500">
                            {customer.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-5">
                      <p className="text-sm font-bold text-olive-800">
                        {customer.phone}
                      </p>

                      {customer.alternatePhone && (
                        <p className="mt-1 text-xs text-warmGray-500">
                          بديل: {customer.alternatePhone}
                        </p>
                      )}
                    </td>

                    <td className="px-4 py-5 text-sm text-warmGray-700">
                      {customer.governorate}
                    </td>

                    <td className="px-4 py-5">
                      <span className="rounded-full bg-olive-100 px-3 py-1 text-xs font-black text-olive-700">
                        {customer.orders} طلب
                      </span>
                    </td>

                    <td className="px-4 py-5 text-sm text-warmGray-500">
                      {customer.joined}
                    </td>

                    <td className="px-4 py-5">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCustomer(customer)
                          }
                          className="rounded-xl bg-olive-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-olive-700"
                        >
                          التفاصيل
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            deleteCustomer(customer.id)
                          }
                          className="rounded-xl border border-red-200 px-4 py-2 text-xs font-bold text-red-600 transition hover:bg-red-50"
                        >
                          حذف
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredCustomers.length === 0 && (
              <div className="py-14 text-center">
                <div className="text-4xl">👥</div>

                <h3 className="mt-4 font-black text-olive-800">
                  لا يوجد عملاء
                </h3>

                <p className="mt-2 text-sm text-warmGray-500">
                  لم يتم العثور على نتائج مطابقة للبحث.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Customer Details Modal */}
        {selectedCustomer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
            <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-black tracking-widest text-olive-500">
                    بيانات العميل
                  </span>

                  <h2 className="mt-2 text-2xl font-black text-olive-900">
                    {selectedCustomer.name}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCustomer(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-50 text-xl font-bold text-olive-700 hover:bg-olive-100"
                  aria-label="إغلاق"
                >
                  ×
                </button>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-cream-100 p-4">
                  <p className="text-xs text-warmGray-500">
                    الاسم
                  </p>

                  <p className="mt-2 font-bold text-olive-800">
                    {selectedCustomer.name}
                  </p>
                </div>

                <div className="rounded-2xl bg-cream-100 p-4">
                  <p className="text-xs text-warmGray-500">
                    رقم العميل
                  </p>

                  <p className="mt-2 font-bold text-olive-800">
                    {selectedCustomer.id}
                  </p>
                </div>

                <div className="rounded-2xl bg-cream-100 p-4">
                  <p className="text-xs text-warmGray-500">
                    الهاتف
                  </p>

                  <p className="mt-2 font-bold text-olive-800">
                    {selectedCustomer.phone}
                  </p>
                </div>

                <div className="rounded-2xl bg-cream-100 p-4">
                  <p className="text-xs text-warmGray-500">
                    الهاتف البديل
                  </p>

                  <p className="mt-2 font-bold text-olive-800">
                    {selectedCustomer.alternatePhone || "غير موجود"}
                  </p>
                </div>

                <div className="rounded-2xl bg-cream-100 p-4 sm:col-span-2">
                  <p className="text-xs text-warmGray-500">
                    البريد الإلكتروني
                  </p>

                  <p className="mt-2 font-bold text-olive-800">
                    {selectedCustomer.email}
                  </p>
                </div>

                <div className="rounded-2xl bg-cream-100 p-4">
                  <p className="text-xs text-warmGray-500">
                    المحافظة
                  </p>

                  <p className="mt-2 font-bold text-olive-800">
                    {selectedCustomer.governorate}
                  </p>
                </div>

                <div className="rounded-2xl bg-cream-100 p-4">
                  <p className="text-xs text-warmGray-500">
                    عدد الطلبات
                  </p>

                  <p className="mt-2 font-bold text-olive-800">
                    {selectedCustomer.orders} طلب
                  </p>
                </div>

                <div className="rounded-2xl bg-cream-100 p-4 sm:col-span-2">
                  <p className="text-xs text-warmGray-500">
                    العنوان التفصيلي
                  </p>

                  <p className="mt-2 font-bold text-olive-800">
                    {selectedCustomer.address}
                  </p>
                </div>

              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/2${selectedCustomer.phone.replace(
                    /^0/,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-green-500 px-5 py-3 text-center text-sm font-bold text-white hover:bg-green-600"
                >
                  التواصل عبر واتساب
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCustomer(null)}
                  className="flex-1 rounded-xl border border-olive-200 px-5 py-3 text-sm font-bold text-olive-700 hover:bg-olive-50"
                >
                  إغلاق
                </button>
              </div>

            </div>
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-olive-100 bg-olive-50 p-5">
          <p className="text-sm font-bold text-olive-800">
            ملاحظة
          </p>

          <p className="mt-2 text-xs leading-6 text-warmGray-600">
            البيانات الحالية تجريبية. بعد ربط قاعدة البيانات سيتم
            عرض العملاء الحقيقيين المسجلين من الموقع، مع حفظ بياناتهم
            وطلبات كل عميل بشكل دائم.
          </p>
        </div>

      </div>
    </main>
  );
}
