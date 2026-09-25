"use client";

import { useTranslations } from "next-intl";


type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const ProjectsPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
   const t = useTranslations("Projects");

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {t("pagination.previous")}
      </button>

      {/* Pages */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-medium transition ${
              currentPage === page
                ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200"
                : "border-white/10 bg-white/5 text-white hover:border-cyan-300/30 hover:bg-cyan-300/10"
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10 disabled:cursor-not-allowed disabled:opacity-40"
      >
         {t("pagination.next")}
      </button>
    </div>
  );
};

export default ProjectsPagination;
