"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "بيانات الدخول غير صحيحة.");
        return;
      }

      router.push("/profile");
      router.refresh();
    } catch {
      setError("تعذر الاتصال بالخادم. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-[80vh] bg-cream-100 px-4 py-16">
      <div className="mx-auto max-w-md">

        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-olive-100 text-3xl">
            🔐
          </div>

          <h1 className="mt-5 text-3xl font-black text-olive-800">
            تسجيل الدخول
          </h1>

          <p className="mt-3 text-sm leading-6 text-warmGray-600">
            ادخل إلى حسابك لمتابعة طلباتك وبياناتك.
          </p>
        </div>

        <div className="rounded-3xl border border-olive-100 bg-white p-6 shadow-card sm:p-8">

          {error && (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-bold text-warmGray-800">
                رقم الهاتف أو البريد الإلكتروني
              </label>

              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                placeholder="01xxxxxxxxx أو example@email.com"
                className="w-full rounded-2xl border border-beige-300 bg-cream-50 px-4 py-3 outline-none transition focus:border-olive-500 focus:ring-4 focus:ring-olive-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-warmGray-800">
                كلمة المرور
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full rounded-2xl border border-beige-300 bg-cream-50 px-4 py-3 outline-none transition focus:border-olive-500 focus:ring-4 focus:ring-olive-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-olive-600 px-5 py-3.5 font-bold text-white shadow-olive transition hover:bg-olive-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </button>

          </form>

          <div className="mt-6 border-t border-beige-200 pt-6 text-center text-sm text-warmGray-600">
            ليس لديك حساب؟

            <Link
              href="/register"
              className="mr-1 font-bold text-olive-700 hover:text-olive-800"
            >
              إنشاء حساب جديد
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
