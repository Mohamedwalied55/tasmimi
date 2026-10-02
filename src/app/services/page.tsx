import Link from "next/link";

const services = [
  {
    title: "كتابة المذكرات",
    description:
      "تحويل المحتوى والمصادر إلى مذكرة مرتبة ومنظمة، مع تقسيم واضح للعناوين والنقاط.",
    features: ["تنظيم المحتوى", "تقسيم العناوين", "تنسيق الفقرات"],
  },
  {
    title: "تنسيق المذكرات",
    description:
      "تنسيق كامل للملف من حيث الخطوط والمسافات والعناوين والجداول وترتيب الصفحات.",
    features: ["تنسيق احترافي", "جداول وعناصر", "ترقيم الصفحات"],
  },
  {
    title: "تصميم الأغلفة",
    description:
      "تصميم غلاف مناسب للمادة والمحتوى، ويمكن تخصيصه حسب التفاصيل المطلوبة.",
    features: ["تصميم مخصص", "عنوان وبيانات", "إخراج عالي الجودة"],
  },
  {
    title: "Word و PDF",
    description:
      "تجهيز ملفات Word وPDF بشكل منظم ومناسب للقراءة أو الطباعة.",
    features: ["Word", "PDF", "جاهز للطباعة"],
  },
  {
    title: "الملخصات",
    description:
      "تنظيم وتقديم المحتوى المختصر بطريقة سهلة وسريعة للمراجعة.",
    features: ["نقاط مهمة", "تقسيم واضح", "تنسيق مريح"],
  },
  {
    title: "الخرائط الذهنية",
    description:
      "تحويل المعلومات والعلاقات بين الأفكار إلى خرائط ذهنية منظمة.",
    features: ["ترتيب الأفكار", "ربط المعلومات", "تصميم واضح"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-cream-100">
      <section className="border-b border-olive-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            خدمات تصميمي
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-olive-900 sm:text-5xl">
            خدمات تساعدك تخلي محتواك
            <span className="block text-olive-600">
              أوضح وأسهل في الاستخدام
            </span>
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-warmGray-600">
            اختر الخدمة المناسبة، وأرسل لنا تفاصيل طلبك، وسنتواصل معك
            لاستكمال التفاصيل.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-3xl border border-olive-100 bg-white p-7 shadow-card transition hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive-100 font-black text-olive-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="mt-7 text-xl font-black text-olive-800">
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-warmGray-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-warmGray-700">
                {service.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Link
                href="/order"
                className="mt-7 block rounded-xl bg-olive-600 px-5 py-3 text-center text-sm font-bold text-white hover:bg-olive-700"
              >
                اطلب الخدمة
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
