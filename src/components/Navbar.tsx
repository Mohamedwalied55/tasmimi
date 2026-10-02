"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/portfolio", label: "أعمالنا" },
  { href: "/about", label: "من نحن" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/track-order", label: "تتبع الطلب" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-olive-100 bg-cream-100/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">

          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-black text-olive-700">
              تصميمي
            </span>
            <span className="text-[10px] text-warmGray-500">
              كتابة • تنسيق • تصميم
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  active(item.href)
                    ? "bg-olive-100 text-olive-700"
                    : "text-warmGray-700 hover:bg-olive-50 hover:text-olive-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-warmGray-700 hover:bg-olive-50"
            >
              حسابي
            </Link>

            <Link
              href="/order"
              className="rounded-xl bg-olive-600 px-5 py-3 text-sm font-bold text-white shadow-olive hover:bg-olive-700 transition"
            >
              اطلب خدمتك
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-olive-700 md:hidden"
            aria-label="القائمة"
          >
            {open ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {open && (
          <nav className="border-t border-olive-100 py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-warmGray-700 hover:bg-olive-50"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/order"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-xl bg-olive-600 px-4 py-3 text-center font-bold text-white"
            >
              اطلب خدمتك الآن
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
