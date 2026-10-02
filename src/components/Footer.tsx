import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-olive-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-black">تصميمي</h2>
            <p className="mt-4 text-sm leading-7 text-olive-100">
              مذكرتك بشكل أوضح… أجمل… وأسهل في المذاكرة.
              نقدم خدمات كتابة وتنسيق وتصميم المذكرات والملخصات التعليمية.
            </p>
          </div>

          <div>
            <h3 className="font-bold">روابط سريعة</h3>

            <div className="mt-4 space-y-3 text-sm text-olive-100">
              <Link href="/" className="block hover:text-white">
                الرئيسية
              </Link>
              <Link href="/services" className="block hover:text-white">
                خدماتنا
              </Link>
              <Link href="/portfolio" className="block hover:text-white">
                أعمالنا
              </Link>
              <Link href="/about" className="block hover:text-white">
                من نحن
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">خدماتنا</h3>

            <div className="mt-4 space-y-3 text-sm text-olive-100">
              <p>كتابة المذكرات</p>
              <p>تنسيق المذكرات</p>
              <p>تصميم الأغلفة</p>
              <p>تنسيق Word و PDF</p>
              <p>الخرائط الذهنية والملخصات</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">ابدأ طلبك</h3>

            <p className="mt-4 text-sm leading-6 text-olive-100">
              أرسل تفاصيل طلبك وسنتواصل معك لتحديد الخدمة والتفاصيل.
            </p>

            <Link
              href="/order"
              className="mt-5 inline-block rounded-xl bg-white px-5 py-3 text-sm font-bold text-olive-800 transition hover:bg-olive-100"
            >
              اطلب مذكرة الآن
            </Link>
          </div>

        </div>

        <div className="mt-12 border-t border-olive-700 pt-6 text-center text-xs text-olive-200">
          © {new Date().getFullYear()} تصميمي — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
