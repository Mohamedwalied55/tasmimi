"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("تصميمي");

  const [siteDescription, setSiteDescription] = useState(
    "مذكرتك بشكل أوضح… أجمل… وأسهل في المذاكرة"
  );

  const [whatsapp, setWhatsapp] =
    useState("201000000000");

  const [whatsappMessage, setWhatsappMessage] = useState(
    "مرحباً، أرغب في الاستفسار عن خدمات تصميمي."
  );

  const [instapay, setInstapay] =
    useState("example@instapay");

  const [vodafoneCash, setVodafoneCash] =
    useState("01000000000");

  const [phone, setPhone] =
    useState("01000000000");

  const [email, setEmail] =
    useState("info@tasmeemi.com");

  const [facebook, setFacebook] =
    useState("");

  const [instagram, setInstagram] =
    useState("");

  const [saved, setSaved] = useState(false);

  const saveSettings = () => {
    const settings = {
      siteName,
      siteDescription,
      whatsapp,
      whatsappMessage,
      instapay,
      vodafoneCash,
      phone,
      email,
      facebook,
      instagram,
    };

    localStorage.setItem(
      "tasmeemiSettings",
      JSON.stringify(settings)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const resetSettings = () => {
    setSiteName("تصميمي");

    setSiteDescription(
      "مذكرتك بشكل أوضح… أجمل… وأسهل في المذاكرة"
    );

    setWhatsapp("201000000000");

    setWhatsappMessage(
      "مرحباً، أرغب في الاستفسار عن خدمات تصميمي."
    );

    setInstapay("example@instapay");

    setVodafoneCash("01000000000");

    setPhone("01000000000");

    setEmail("info@tasmeemi.com");

    setFacebook("");

    setInstagram("");

    localStorage.removeItem("tasmeemiSettings");
  };

  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            لوحة الإدارة / الإعدادات
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-olive-900">
                إعدادات الموقع
              </h1>

              <p className="mt-2 text-sm text-warmGray-500">
                تحكم في بيانات الموقع ووسائل التواصل والدفع.
              </p>
            </div>

            <a
              href="/admin"
              className="rounded-xl border border-olive-200 bg-white px-5 py-3 text-center text-sm font-bold text-olive-700 transition hover:bg-olive-50"
            >
              ← لوحة التحكم
            </a>
          </div>
        </div>

        <div className="space-y-6">

          {/* General */}
          <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">

            <div>
              <h2 className="text-xl font-black text-olive-900">
                بيانات الموقع
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                المعلومات الأساسية التي تظهر في الموقع.
              </p>
            </div>

            <div className="mt-7 grid gap-5">

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  اسم الموقع
                </label>

                <input
                  value={siteName}
                  onChange={(e) =>
                    setSiteName(e.target.value)
                  }
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  وصف الموقع
                </label>

                <textarea
                  value={siteDescription}
                  onChange={(e) =>
                    setSiteDescription(e.target.value)
                  }
                  rows={3}
                  className="w-full resize-none rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm leading-7 outline-none focus:border-olive-500"
                />
              </div>

            </div>
          </section>

          {/* WhatsApp */}
          <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">

            <div>
              <h2 className="text-xl font-black text-olive-900">
                واتساب
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                الرقم والرسالة الافتراضية لزر واتساب.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  رقم واتساب
                </label>

                <input
                  value={whatsapp}
                  onChange={(e) =>
                    setWhatsapp(e.target.value)
                  }
                  placeholder="2010xxxxxxxx"
                  dir="ltr"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />

                <p className="mt-2 text-xs text-warmGray-400">
                  اكتب الرقم بكود الدولة بدون + أو مسافات.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  الرسالة الافتراضية
                </label>

                <input
                  value={whatsappMessage}
                  onChange={(e) =>
                    setWhatsappMessage(e.target.value)
                  }
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />
              </div>

            </div>
          </section>

          {/* Payment */}
          <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">

            <div>
              <h2 className="text-xl font-black text-olive-900">
                وسائل الدفع
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                البيانات التي سيستخدمها العميل عند الدفع.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  InstaPay
                </label>

                <input
                  value={instapay}
                  onChange={(e) =>
                    setInstapay(e.target.value)
                  }
                  placeholder="example@instapay"
                  dir="ltr"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  Vodafone Cash
                </label>

                <input
                  value={vodafoneCash}
                  onChange={(e) =>
                    setVodafoneCash(e.target.value)
                  }
                  placeholder="010xxxxxxxx"
                  dir="ltr"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />
              </div>

            </div>

            <div className="mt-5 rounded-2xl bg-olive-50 p-4">
              <p className="text-xs leading-6 text-olive-700">
                سيتم لاحقًا إضافة اختيار وسيلة الدفع داخل نموذج الطلب،
                مع إمكانية تأكيد الدفع من لوحة الإدارة.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">

            <div>
              <h2 className="text-xl font-black text-olive-900">
                بيانات التواصل
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                بيانات التواصل التي تظهر للعملاء.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  رقم الهاتف
                </label>

                <input
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  dir="ltr"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  البريد الإلكتروني
                </label>

                <input
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  type="email"
                  dir="ltr"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />
              </div>

            </div>
          </section>

          {/* Social */}
          <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">

            <div>
              <h2 className="text-xl font-black text-olive-900">
                روابط التواصل الاجتماعي
              </h2>

              <p className="mt-1 text-sm text-warmGray-500">
                أضف الروابط التي تريد ظهورها في الموقع.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  Facebook
                </label>

                <input
                  value={facebook}
                  onChange={(e) =>
                    setFacebook(e.target.value)
                  }
                  placeholder="https://facebook.com/..."
                  dir="ltr"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  Instagram
                </label>

                <input
                  value={instagram}
                  onChange={(e) =>
                    setInstagram(e.target.value)
                  }
                  placeholder="https://instagram.com/..."
                  dir="ltr"
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm outline-none focus:border-olive-500"
                />
              </div>

            </div>
          </section>

          {/* Save */}
          <section className="rounded-3xl bg-olive-800 p-6 shadow-olive sm:p-8">

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

              <div className="text-white">
                <h2 className="text-xl font-black">
                  حفظ إعدادات الموقع
                </h2>

                <p className="mt-2 text-sm leading-6 text-olive-100">
                  احفظ التغييرات التي أجريتها على إعدادات الموقع.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={resetSettings}
                  className="rounded-xl border border-olive-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-olive-700"
                >
                  استعادة الافتراضي
                </button>

                <button
                  type="button"
                  onClick={saveSettings}
                  className="rounded-xl bg-white px-7 py-3 text-sm font-black text-olive-800 transition hover:bg-olive-100"
                >
                  حفظ الإعدادات
                </button>

              </div>
            </div>

            {saved && (
              <div className="mt-5 rounded-xl bg-white/10 p-4 text-center text-sm font-bold text-white">
                ✓ تم حفظ الإعدادات بنجاح
              </div>
            )}

          </section>

        </div>

        <div className="mt-8 rounded-2xl border border-olive-100 bg-olive-50 p-5">
          <p className="text-sm font-bold text-olive-800">
            المرحلة القادمة
          </p>

          <p className="mt-2 text-xs leading-6 text-warmGray-600">
            الإعدادات الحالية محفوظة محليًا للتجربة. بعد ذلك سننقلها
            إلى قاعدة البيانات، ونربطها بالموقع بالكامل بحيث أي تغيير
            من لوحة الإدارة يظهر فعليًا لجميع الزوار.
          </p>
        </div>

      </div>
    </main>
  );
}
