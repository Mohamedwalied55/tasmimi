"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <main className="min-h-[70vh] bg-cream-100 px-4 py-16">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-8 text-center shadow-card">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive-100 text-2xl text-olive-700">
            ✓
          </div>

          <h1 className="mt-6 text-2xl font-black text-olive-800">
            تم تسجيل الدخول
          </h1>

          <p className="mt-3 text-sm text-warmGray-600">
            صفحة الحساب وقاعدة البيانات سيتم ربطهما في المرحلة التالية.
          </p>

          <Link
            href="/profile"
            className="mt-6 block rounded-xl bg-olive-600 px-5 py-3 font-bold text-white"
          >
            فتح حسابي
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] bg-cream-100 px-4 py-16">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <span className="text-xs font-black tracking-widest text-olive-500">
            حساب العميل
          </span>

          <h1 className="mt-3 text-3xl font-black text-olive-900">
            تسجيل الدخول
          </h1>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoggedIn(true);
          }}
          className="space-y-5 rounded-3xl bg-white p-7 shadow-card"
        >
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
            className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 outline-none focus:border-olive-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-olive-600 px-5 py-4 font-bold text-white shadow-olive hover:bg-olive-700"
          >
            دخول
          </button>

          <p className="text-center text-sm text-warmGray-600">
            ليس لديك حساب؟{" "}
            <Link href="/register" className="font-bold text-olive-700">
              إنشاء حساب
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
