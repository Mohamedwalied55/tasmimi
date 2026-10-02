"use client";

import { useState } from "react";

const fonts = [
  "Arial",
  "Cairo",
  "Tajawal",
  "Tahoma",
  "Verdana",
];

export default function AdminThemePage() {
  const [primary, setPrimary] = useState("#5F6F45");
  const [primaryDark, setPrimaryDark] = useState("#3F4B2F");
  const [background, setBackground] = useState("#FDFBF7");
  const [text, setText] = useState("#252922");
  const [accent, setAccent] = useState("#F5F0EB");

  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState("16");

  const [saved, setSaved] = useState(false);

  const saveTheme = () => {
    const theme = {
      primary,
      primaryDark,
      background,
      text,
      accent,
      font,
      fontSize,
    };

    localStorage.setItem(
      "tasmeemiTheme",
      JSON.stringify(theme)
    );

    document.documentElement.style.setProperty(
      "--primary",
      primary
    );

    document.documentElement.style.setProperty(
      "--primary-dark",
      primaryDark
    );

    document.documentElement.style.setProperty(
      "--background",
      background
    );

    document.documentElement.style.setProperty(
      "--text",
      text
    );

    document.documentElement.style.setProperty(
      "--accent",
      accent
    );

    document.documentElement.style.setProperty(
      "--site-font",
      font
    );

    document.documentElement.style.setProperty(
      "--site-font-size",
      `${fontSize}px`
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const resetTheme = () => {
    setPrimary("#5F6F45");
    setPrimaryDark("#3F4B2F");
    setBackground("#FDFBF7");
    setText("#252922");
    setAccent("#F5F0EB");
    setFont("Arial");
    setFontSize("16");

    document.documentElement.style.setProperty(
      "--primary",
      "#5F6F45"
    );

    document.documentElement.style.setProperty(
      "--primary-dark",
      "#3F4B2F"
    );

    document.documentElement.style.setProperty(
      "--background",
      "#FDFBF7"
    );

    document.documentElement.style.setProperty(
      "--text",
      "#252922"
    );

    document.documentElement.style.setProperty(
      "--accent",
      "#F5F0EB"
    );

    document.documentElement.style.setProperty(
      "--site-font",
      "Arial"
    );

    document.documentElement.style.setProperty(
      "--site-font-size",
      "16px"
    );

    localStorage.removeItem("tasmeemiTheme");
  };

  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-black tracking-widest text-olive-500">
            لوحة الإدارة / المظهر
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-olive-900">
                الألوان والخطوط
              </h1>

              <p className="mt-2 text-sm text-warmGray-500">
                تحكم في الشكل العام للموقع من مكان واحد.
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

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">

          {/* Controls */}
          <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">

            <h2 className="text-xl font-black text-olive-900">
              إعدادات المظهر
            </h2>

            <p className="mt-2 text-sm text-warmGray-500">
              اختار الألوان والخط المناسبين للهوية البصرية.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">

              {/* Primary */}
              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  اللون الأساسي
                </label>

                <div className="flex gap-3">
                  <input
                    type="color"
                    value={primary}
                    onChange={(e) =>
                      setPrimary(e.target.value)
                    }
                    className="h-12 w-14 cursor-pointer rounded-xl border border-olive-200 bg-white p-1"
                  />

                  <input
                    value={primary}
                    onChange={(e) =>
                      setPrimary(e.target.value)
                    }
                    dir="ltr"
                    className="flex-1 rounded-xl border border-olive-200 bg-cream-100 px-4 text-sm outline-none focus:border-olive-500"
                  />
                </div>
              </div>

              {/* Primary Dark */}
              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  اللون الأساسي الداكن
                </label>

                <div className="flex gap-3">
                  <input
                    type="color"
                    value={primaryDark}
                    onChange={(e) =>
                      setPrimaryDark(e.target.value)
                    }
                    className="h-12 w-14 cursor-pointer rounded-xl border border-olive-200 bg-white p-1"
                  />

                  <input
                    value={primaryDark}
                    onChange={(e) =>
                      setPrimaryDark(e.target.value)
                    }
                    dir="ltr"
                    className="flex-1 rounded-xl border border-olive-200 bg-cream-100 px-4 text-sm outline-none focus:border-olive-500"
                  />
                </div>
              </div>

              {/* Background */}
              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  لون الخلفية
                </label>

                <div className="flex gap-3">
                  <input
                    type="color"
                    value={background}
                    onChange={(e) =>
                      setBackground(e.target.value)
                    }
                    className="h-12 w-14 cursor-pointer rounded-xl border border-olive-200 bg-white p-1"
                  />

                  <input
                    value={background}
                    onChange={(e) =>
                      setBackground(e.target.value)
                    }
                    dir="ltr"
                    className="flex-1 rounded-xl border border-olive-200 bg-cream-100 px-4 text-sm outline-none focus:border-olive-500"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  لون النص
                </label>

                <div className="flex gap-3">
                  <input
                    type="color"
                    value={text}
                    onChange={(e) =>
                      setText(e.target.value)
                    }
                    className="h-12 w-14 cursor-pointer rounded-xl border border-olive-200 bg-white p-1"
                  />

                  <input
                    value={text}
                    onChange={(e) =>
                      setText(e.target.value)
                    }
                    dir="ltr"
                    className="flex-1 rounded-xl border border-olive-200 bg-cream-100 px-4 text-sm outline-none focus:border-olive-500"
                  />
                </div>
              </div>

              {/* Accent */}
              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  اللون المساعد
                </label>

                <div className="flex gap-3">
                  <input
                    type="color"
                    value={accent}
                    onChange={(e) =>
                      setAccent(e.target.value)
                    }
                    className="h-12 w-14 cursor-pointer rounded-xl border border-olive-200 bg-white p-1"
                  />

                  <input
                    value={accent}
                    onChange={(e) =>
                      setAccent(e.target.value)
                    }
                    dir="ltr"
                    className="flex-1 rounded-xl border border-olive-200 bg-cream-100 px-4 text-sm outline-none focus:border-olive-500"
                  />
                </div>
              </div>

              {/* Font */}
              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  نوع الخط
                </label>

                <select
                  value={font}
                  onChange={(e) =>
                    setFont(e.target.value)
                  }
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm font-bold text-olive-800 outline-none focus:border-olive-500"
                >
                  {fonts.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Font Size */}
              <div>
                <label className="mb-2 block text-sm font-bold text-olive-800">
                  حجم الخط الأساسي
                </label>

                <select
                  value={fontSize}
                  onChange={(e) =>
                    setFontSize(e.target.value)
                  }
                  className="w-full rounded-xl border border-olive-200 bg-cream-100 px-4 py-3 text-sm font-bold text-olive-800 outline-none focus:border-olive-500"
                >
                  <option value="14">14px</option>
                  <option value="15">15px</option>
                  <option value="16">16px</option>
                  <option value="17">17px</option>
                  <option value="18">18px</option>
                  <option value="20">20px</option>
                </select>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={saveTheme}
                className="flex-1 rounded-xl bg-olive-600 px-6 py-3 font-black text-white shadow-olive transition hover:bg-olive-700"
              >
                حفظ المظهر
              </button>

              <button
                type="button"
                onClick={resetTheme}
                className="rounded-xl border border-olive-200 px-6 py-3 font-bold text-olive-700 transition hover:bg-olive-50"
              >
                استعادة الافتراضي
              </button>

            </div>

            {saved && (
              <div className="mt-5 rounded-xl bg-olive-50 p-4 text-center text-sm font-bold text-olive-700">
                ✓ تم حفظ إعدادات المظهر
              </div>
            )}

          </section>

          {/* Preview */}
          <section className="rounded-3xl bg-white p-6 shadow-card sm:p-8">

            <h2 className="text-xl font-black text-olive-900">
              معاينة مباشرة
            </h2>

            <p className="mt-2 text-sm text-warmGray-500">
              شوف شكل العناصر قبل الحفظ.
            </p>

            <div
              className="mt-7 overflow-hidden rounded-3xl border"
              style={{
                backgroundColor: background,
                color: text,
                fontFamily: font,
                fontSize: `${fontSize}px`,
              }}
            >

              <div
                className="p-6 text-white"
                style={{
                  backgroundColor: primary,
                }}
              >
                <p className="text-xs font-bold opacity-80">
                  تصميمي
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  مذكرتك بشكل أجمل
                </h3>
              </div>

              <div className="p-6">

                <div
                  className="rounded-2xl p-5"
                  style={{
                    backgroundColor: accent,
                  }}
                >
                  <h4
                    className="font-black"
                    style={{
                      color: primaryDark,
                    }}
                  >
                    عنوان تجريبي
                  </h4>

                  <p className="mt-2 leading-7">
                    دي معاينة لشكل النص والألوان التي اخترتها.
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-5 rounded-xl px-5 py-3 font-black text-white"
                  style={{
                    backgroundColor: primary,
                  }}
                >
                  زر تجريبي
                </button>

                <div
                  className="mt-4 rounded-xl p-4 text-sm"
                  style={{
                    backgroundColor: primaryDark,
                    color: "#FFFFFF",
                  }}
                >
                  اللون الداكن
                </div>

              </div>
            </div>

          </section>

        </div>

        <div className="mt-8 rounded-2xl border border-olive-100 bg-olive-50 p-5">
          <p className="text-sm font-bold text-olive-800">
            ملاحظة مهمة
          </p>

          <p className="mt-2 text-xs leading-6 text-warmGray-600">
            دي حاليًا معاينة وإعدادات محلية للمتصفح. في مرحلة قاعدة
            البيانات هنخلي الإعدادات محفوظة على السيرفر وتظهر لكل
            زائر للموقع، بدل ما تكون محفوظة على جهاز المدير فقط.
          </p>
        </div>

      </div>
    </main>
  );
}
