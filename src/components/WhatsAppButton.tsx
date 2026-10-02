"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const whatsappNumber = "201000000000";

  const message =
    "مرحباً، أرغب في الاستفسار عن خدمات تصميمي.";

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="
        fixed bottom-6 left-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500
        text-white shadow-xl
        transition-all duration-300
        hover:scale-110 hover:bg-green-600
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.51 2 2 6.48 2 12c0 1.76.46 3.42 1.34 4.9L2 22l5.24-1.37A10.02 10.02 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm5.8 14.35c-.24.68-1.4 1.3-1.94 1.37-.5.07-1.12.1-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.1-4.95-4.3-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1-2.41.25-.29.55-.36.73-.36h.53c.17 0 .4-.06.62.47.23.54.78 1.91.85 2.05.07.14.12.31.02.5-.1.2-.15.32-.3.49-.14.17-.3.38-.43.51-.15.14-.3.3-.13.58.17.29.75 1.23 1.62 1.99 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.2.73-.85.92-1.14.19-.29.39-.24.66-.14.27.1 1.72.81 2.02.96.3.14.5.22.57.34.07.12.07.7-.17 1.38Z" />
      </svg>
    </Link>
  );
}
