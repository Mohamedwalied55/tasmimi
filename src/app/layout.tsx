import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "تصميمي | مذكرتك بشكل أوضح… أجمل… وأسهل في المذاكرة",
  description:
    "تصميمي منصة متخصصة في كتابة وتنسيق وتصميم المذكرات والملخصات والملفات التعليمية باحترافية.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
