"use client";

import { useState } from "react";
import { HiOutlineTranslate } from "react-icons/hi";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState<"en" | "ar">("en");

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full p-1.5">
      <HiOutlineTranslate className="w-4 h-4 text-white/70 ml-1" />

      <button
        onClick={() => setLang("en")}
        className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
          lang === "en"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            : "text-white/60"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLang("ar")}
        className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
          lang === "ar"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            : "text-white/60"
        }`}
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;