import { useTranslations } from "next-intl";

const FooterCTA = () => {
  const t = useTranslations("Footer");

  return (
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

        <div>
          <p className="text-sm font-semibold text-emerald-400">
            {t("cta.status")}
          </p>

          <p className="text-xs text-gray-400">
            {t("cta.description")}
          </p>
        </div>
      </div>

      <a
        href="#contact"
        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        {t("cta.button")}
      </a>
    </div>
  );
};

export default FooterCTA;