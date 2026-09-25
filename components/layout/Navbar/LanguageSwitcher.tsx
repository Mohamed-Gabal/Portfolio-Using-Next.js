"use client";

import { HiOutlineTranslate } from "react-icons/hi";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale: "en" | "ar") => {
    if (nextLocale === locale) return;

    const pathnameWithoutLocale = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");

    router.push(`/${nextLocale}${pathnameWithoutLocale || "/"}`);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 p-1.5">
      <HiOutlineTranslate className="ml-1 h-4 w-4 text-white/70" />

      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
          locale === "en"
            ? "bg-gradient-to-r from-blue-600 to-cyan-300 text-white"
            : "text-white/60"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("ar")}
        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
          locale === "ar"
            ? "bg-gradient-to-r from-blue-600 to-cyan-300 text-white"
            : "text-white/60"
        }`}
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;
