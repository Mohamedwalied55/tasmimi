"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [created, setCreated] = useState(false);

  if (created) {
    return (
      <main className="min-h-[70vh] bg-cream-100 px-4 py-16">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-8 text-center shadow-card">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive-100 text-2xl text-olive-700">
            ✓
          </div>

          <h1 className="mt-6 text-2xl font-black text-olive-800">
            تم إنشاء الحساب
          </h1>

          <p className="mt-3 text-sm leading-7 text-warmGray-600">
            سيتم ربط الحساب بقاعدة البيانات في المرحلة التالية.
          </p>

          <Link
            href="/login"
            className="mt-6 block rounded-xl bg-olive-600 px-5 py-3 font-bold text-white"
          >
            تسجيل الدخول
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] bg-cream-100 px-4 py-16">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <span className="text-xs font-black tracking-widest text-olive-500">
            حساب جديد
          </span>

          <h1 className="mt-3 text-3xl font-black text-olive-900">
            إنشاء حساب عميل
          </h1>

          <p className="mt-3 text-sm text-warmGray-600">
            أنشئ حسابك لمتابعة طلباتك بسهولة.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCreated(true);
          }}
          className="space-y-5 rounded-3xl bg-white p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              required
              placeholder="الاسم الأول"
              className="rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
            />

            <input
              required
              placeholder="اسم العائلة"
              className="rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
            />
          </div>

          <input
            required
            type="tel"
            placeholder="رقم الهاتف"
            className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
          />

          <input
            type="tel"
            placeholder="رقم هاتف بديل — اختياري"
            className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
          />

          <select
            required
            className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
          >
            <option value="">اختر المحافظة</option>
            <option>الغربية</option>
            <option>الدقهلية</option>
            <option>القاهرة</option>
            <option>الجيزة</option>
            <option>الإسكندرية</option>
            <option>الشرقية</option>
            <option>المنوفية</option>
            <option>القليوبية</option>
            <option>أخرى</option>
          </select>

          <textarea
            required
            rows={3}
            placeholder="العنوان بالتفصيل"
            className="w-full resize-none rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
          />

          <input
            required
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
          />

          <input
            required
            type="password"
            placeholder="كلمة المرور"
            minLength={6}
            className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-olive-600 px-5 py-4 font-bold text-white shadow-olive transition hover:bg-olive-700"
          >
            إنشاء الحساب
          </button>

          <p className="text-center text-sm text-warmGray-600">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="font-bold text-olive-700">
              تسجيل الدخول
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
