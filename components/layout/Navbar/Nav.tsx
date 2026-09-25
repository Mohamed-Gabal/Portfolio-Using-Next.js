import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { useTranslations } from "next-intl";

import LanguageSwitcher from "./LanguageSwitcher";

const Nav = () => {
  const t = useTranslations("Footer");

  return (
    <header className="fixed top-0 right-0 left-0 z-[100] h-[10vh] bg-[#0f142ed9] shadow-md backdrop-blur-md">
      <div className="flex h-full w-full items-center justify-between px-6 sm:px-20">
        <Link href="#home" className="flex items-center gap-2">
          <FaCode className="h-6 w-6 text-blue-500" />

          <span className="hidden text-lg font-semibold text-white sm:text-xl md:block">
            {t("brand.name")}
          </span>
        </Link>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Nav;
