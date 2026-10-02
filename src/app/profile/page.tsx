import Link from "next/link";

const orders = [
  {
    id: "TS-1001",
    service: "تنسيق مذكرة",
    status: "جاري العمل",
    date: "2026/10/01",
  },
  {
    id: "TS-1002",
    service: "تصميم غلاف",
    status: "مكتمل",
    date: "2026/09/25",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-[70vh] bg-cream-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            حساب العميل
          </span>

          <h1 className="mt-3 text-3xl font-black text-olive-900">
            أهلاً بك في حسابك
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">

          <aside className="rounded-3xl bg-white p-7 shadow-card">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-olive-100 text-2xl font-black text-olive-700">
              م
            </div>

            <div className="mt-5 text-center">
              <h2 className="font-black text-olive-800">
                اسم العميل
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                customer@example.com
              </p>
            </div>

            <div className="mt-7 space-y-3 border-t border-olive-100 pt-6 text-sm">
              <div className="flex justify-between">
                <span className="text-warmGray-500">الهاتف</span>
                <span className="font-bold text-olive-800">
                  01xxxxxxxxx
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-warmGray-500">المحافظة</span>
                <span className="font-bold text-olive-800">
                  الغربية
                </span>
              </div>
            </div>

            <Link
              href="/order"
              className="mt-7 block rounded-xl bg-olive-600 px-5 py-3 text-center text-sm font-bold text-white hover:bg-olive-700"
            >
              طلب خدمة جديدة
            </Link>
          </aside>

          <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-black text-olive-800">
                  طلباتي
                </h2>

                <p className="mt-1 text-sm text-warmGray-500">
                  جميع الطلبات المرتبطة بحسابك.
                </p>
              </div>

              <Link
                href="/track-order"
                className="text-sm font-bold text-olive-700"
              >
                تتبع طلب
              </Link>
            </div>

            <div className="mt-7 space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-2xl border border-olive-100 bg-cream-100 p-5"
                >
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                    <div>
                      <span className="text-xs text-warmGray-500">
                        رقم الطلب
                      </span>

                      <h3 className="mt-1 font-black text-olive-800">
                        {order.id}
                      </h3>
                    </div>

                    <div>
                      <span className="text-xs text-warmGray-500">
                        الخدمة
                      </span>

                      <p className="mt-1 text-sm font-bold text-olive-800">
                        {order.service}
                      </p>
                    </div>

                    <div>
                      <span className="inline-block rounded-full bg-olive-100 px-3 py-1 text-xs font-bold text-olive-700">
                        {order.status}
                      </span>

                      <p className="mt-2 text-xs text-warmGray-500">
                        {order.date}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
