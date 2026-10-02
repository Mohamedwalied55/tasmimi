const projects = [
  "مذكرة تعليمية",
  "ملخص دراسي",
  "غلاف مذكرة",
  "تنسيق PDF",
  "خريطة ذهنية",
  "ملف Word",
];

export default function PortfolioPage() {
  return (
    <main className="bg-cream-100">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            أعمالنا
          </span>

          <h1 className="mt-4 text-4xl font-black text-olive-900 sm:text-5xl">
            نماذج من أعمال تصميمي
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-warmGray-600">
            معرض الأعمال الحقيقي سيتم التحكم فيه بالكامل من لوحة الإدارة.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project}
              className="group overflow-hidden rounded-3xl border border-olive-100 bg-white shadow-card"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-olive-50">
                <div className="text-center">
                  <div className="text-4xl font-black text-olive-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-3 font-bold text-olive-700">{project}</p>
                </div>
              </div>

              <div className="p-5">
                <h2 className="font-black text-olive-800">{project}</h2>
                <p className="mt-2 text-xs text-warmGray-500">
                  سيتم استبدال هذا النموذج من لوحة التحكم.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
