import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-cream-100">
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <span className="text-xs font-black tracking-widest text-olive-500">
            من نحن
          </span>

          <h1 className="mt-4 text-4xl font-black text-olive-900 sm:text-5xl">
            تصميمي
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-warmGray-600">
            منصة تهتم بكتابة وتنسيق وتصميم المذكرات والملخصات والملفات
            التعليمية بطريقة منظمة ومريحة للقراءة.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          ["رؤيتنا", "تقديم محتوى تعليمي منظم يجمع بين الوضوح والشكل الاحترافي."],
          ["أسلوبنا", "نهتم بالتفاصيل الصغيرة التي تجعل استخدام الملف أسهل."],
          ["هدفنا", "أن تحصل على ملف جاهز للاستخدام بالشكل الذي يناسب احتياجاتك."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl bg-white p-8 shadow-card"
          >
            <h2 className="text-xl font-black text-olive-800">{title}</h2>
            <p className="mt-4 text-sm leading-8 text-warmGray-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="bg-olive-800 py-16 text-center">
        <h2 className="text-3xl font-black text-white">
          عندك ملف محتاج شغل؟
        </h2>

        <Link
          href="/order"
          className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-bold text-olive-800"
        >
          ابدأ طلبك
        </Link>
      </section>
    </main>
  );
}
