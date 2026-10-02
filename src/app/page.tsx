import Link from "next/link";

const services = [
  {
    number: "01",
    title: "كتابة المذكرات",
    description:
      "تحويل المحتوى والمصادر إلى مذكرة مرتبة وواضحة تساعد على سهولة المراجعة.",
    icon: "✦",
  },
  {
    number: "02",
    title: "تنسيق المذكرات",
    description:
      "تنسيق احترافي للصفحات والعناوين والجداول والخطوط مع الاهتمام بأدق التفاصيل.",
    icon: "◈",
  },
  {
    number: "03",
    title: "تصميم الأغلفة",
    description:
      "تصميم غلاف مميز ومتناسق مع محتوى المذكرة وشخصية المادة التعليمية.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Word و PDF",
    description:
      "تجهيز الملفات بصيغ مناسبة للطباعة أو الاستخدام الإلكتروني بجودة وتنظيم.",
    icon: "▣",
  },
];

const steps = [
  {
    number: "01",
    title: "أرسل ملفاتك",
    description: "شارك معنا المحتوى أو الملفات التي تريد العمل عليها.",
  },
  {
    number: "02",
    title: "حدد المطلوب",
    description: "اختر الخدمة وأخبرنا بالتفاصيل التي تريدها.",
  },
  {
    number: "03",
    title: "نبدأ التنفيذ",
    description: "نعمل على طلبك بعناية وفق التفاصيل المتفق عليها.",
  },
  {
    number: "04",
    title: "استلم ملفك",
    description: "تحصل على النسخة النهائية بالشكل المطلوب.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative bg-cream-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-olive-100/60 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-beige-200/50 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">

          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-olive-200 bg-white px-4 py-2 text-xs font-bold text-olive-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-olive-500" />
              كتابة • تنسيق • تصميم
            </div>

            <h1 className="text-4xl font-black leading-[1.25] tracking-tight text-olive-900 sm:text-5xl lg:text-6xl">
              مذكرتك بشكل أوضح…
              <span className="mt-2 block text-olive-600">
                أجمل… وأسهل في المذاكرة
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-warmGray-600 sm:text-lg">
              في تصميمي نهتم بتحويل المحتوى الدراسي إلى مذكرات منظمة،
              واضحة ومريحة للعين، مع تصميم احترافي يناسب احتياجاتك.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/order"
                className="rounded-2xl bg-olive-600 px-7 py-4 text-center text-sm font-bold text-white shadow-olive transition hover:-translate-y-1 hover:bg-olive-700"
              >
                ابدأ طلبك الآن
              </Link>

              <Link
                href="/portfolio"
                className="rounded-2xl border border-olive-200 bg-white px-7 py-4 text-center text-sm font-bold text-olive-700 transition hover:border-olive-300 hover:bg-olive-50"
              >
                شاهد أعمالنا
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-warmGray-500">
              <span>✓ تصميم مرتب</span>
              <span>✓ اهتمام بالتفاصيل</span>
              <span>✓ ملفات جاهزة للاستخدام</span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-olive-100 bg-white p-5 shadow-soft">

              <div className="absolute right-5 top-5 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-olive-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-olive-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-beige-300" />
              </div>

              <div className="flex h-full flex-col justify-between rounded-3xl bg-cream-100 p-7">
                <div>
                  <div className="text-xs font-bold tracking-widest text-olive-500">
                    TASMEEMI
                  </div>

                  <div className="mt-7 h-3 w-2/3 rounded-full bg-olive-200" />
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-beige-300" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white p-5 shadow-card">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-olive-100 font-bold text-olive-700">
                      ✦
                    </div>
                    <div className="h-2.5 w-4/5 rounded-full bg-olive-200" />
                    <div className="mt-2 h-2 w-3/5 rounded-full bg-beige-300" />
                  </div>

                  <div className="translate-y-5 rounded-2xl bg-olive-700 p-5 shadow-card">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 font-bold text-white">
                      ◈
                    </div>
                    <div className="h-2.5 w-4/5 rounded-full bg-white/40" />
                    <div className="mt-2 h-2 w-3/5 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="rounded-2xl border border-olive-100 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 w-24 rounded-full bg-olive-200" />
                      <div className="mt-2 h-2 w-16 rounded-full bg-beige-300" />
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                      ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-olive-100 bg-white px-5 py-4 shadow-card sm:block">
              <div className="text-xs text-warmGray-500">نركز على</div>
              <div className="mt-1 font-black text-olive-700">
                التفاصيل الصغيرة
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-widest text-olive-500">
              خدماتنا
            </span>

            <h2 className="mt-3 text-3xl font-black text-olive-900 sm:text-4xl">
              كل ما تحتاجه لتظهر مذكرتك بشكل أفضل
            </h2>

            <p className="mt-4 leading-7 text-warmGray-600">
              خدمات مصممة للطلاب والمدرسين وكل من يريد محتوى تعليمي منظم
              وسهل الاستخدام.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-olive-100 bg-cream-100 p-7 transition duration-300 hover:-translate-y-2 hover:border-olive-200 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive-100 text-xl font-black text-olive-700 transition group-hover:bg-olive-600 group-hover:text-white">
                    {service.icon}
                  </div>

                  <span className="text-xs font-black text-olive-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-black text-olive-800">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-warmGray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-cream-100 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div>
            <span className="text-xs font-black tracking-widest text-olive-500">
              لماذا تصميمي؟
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-olive-900 sm:text-4xl">
              الشكل الجميل مهم…
              <span className="block text-olive-600">
                لكن التنظيم أهم.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-warmGray-600">
              هدفنا مش مجرد تغيير شكل الملف. إحنا بنهتم إن المذكرة تكون
              سهلة القراءة، واضحة في تقسيمها ومريحة أثناء المذاكرة.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-xl border border-olive-200 bg-white px-5 py-3 text-sm font-bold text-olive-700 hover:bg-olive-50"
            >
              تعرف علينا أكثر
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "وضوح وتنظيم", "ترتيب المحتوى بطريقة تساعدك على الوصول للمعلومة بسهولة."],
              ["02", "تصميم مريح", "اختيار العناصر والمساحات بطريقة مناسبة للقراءة."],
              ["03", "اهتمام بالتفاصيل", "نهتم بالتنسيق والعناوين والجداول وكل جزء في الملف."],
              ["04", "مرونة في الطلب", "ننفذ التفاصيل المطلوبة بما يناسب طبيعة مشروعك."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-3xl bg-white p-6 shadow-card"
              >
                <span className="text-xs font-black text-olive-400">
                  {number}
                </span>

                <h3 className="mt-5 font-black text-olive-800">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-warmGray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="text-xs font-black tracking-widest text-olive-500">
              طريقة العمل
            </span>

            <h2 className="mt-3 text-3xl font-black text-olive-900 sm:text-4xl">
              من طلبك إلى الملف النهائي
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="rounded-3xl border border-olive-100 bg-cream-100 p-7">
                  <span className="text-sm font-black text-olive-400">
                    {step.number}
                  </span>

                  <h3 className="mt-5 font-black text-olive-800">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-warmGray-600">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute -left-3 top-1/2 hidden h-px w-6 bg-olive-200 md:block" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-olive-800 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">

          <span className="text-xs font-bold tracking-widest text-olive-200">
            جاهز تبدأ؟
          </span>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            خلّي مذكرتك تعبر عن محتواها
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-olive-100">
            ابعت لنا تفاصيل طلبك، وإحنا نهتم بالكتابة والتنسيق والتصميم.
          </p>

          <Link
            href="/order"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 text-sm font-black text-olive-800 transition hover:-translate-y-1 hover:bg-cream-100"
          >
            اطلب خدمتك الآن
          </Link>

        </div>
      </section>

    </div>
  );
}
