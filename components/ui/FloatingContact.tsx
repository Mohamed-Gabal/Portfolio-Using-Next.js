"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiMessageSquare,
  FiPhone,
  FiPlus,
} from "react-icons/fi";

const items = [
  {
    key: "whatsapp",
    href: "https://wa.me/0201001034941",
    Icon: FiMessageSquare,
    card: "bg-green-400/20 border-green-300/30",
    box: "bg-green-400/30 text-green-300",
  },
  {
    key: "call",
    href: "tel:+201001034941",
    Icon: FiPhone,
    card: "bg-blue-400/20 border-blue-300/30",
    box: "bg-blue-400/30 text-blue-300",
  },
  {
    key: "email",
    href: "mailto:abogabal672@gmail.com",
    Icon: FiMail,
    card: "bg-rose-400/20 border-rose-300/30",
    box: "bg-rose-400/30 text-rose-300",
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/mohamed-ali-b9a61140b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    Icon: FiLinkedin,
    card: "bg-indigo-400/20 border-indigo-300/30",
    box: "bg-indigo-400/30 text-indigo-300",
  },
  {
    key: "github",
    href: "https://github.com/Mohamed-Gabal",
    Icon: FiGithub,
    card: "bg-slate-400/20 border-slate-300/30",
    box: "bg-slate-400/30 text-slate-300",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.85 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 26,
      delay: (items.length - 1 - i) * 0.06,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 16,
    scale: 0.9,
    transition: { duration: 0.15, delay: i * 0.03 },
  }),
};

export default function FloatingContact() {
  const t = useTranslations("FloatingContact");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Close on outside click or escape key
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed z-50 flex flex-col items-end end-4 sm:end-5 bottom-[calc(1rem_+_env(safe-area-inset-bottom))] sm:bottom-[calc(1.25rem_+_env(safe-area-inset-bottom))]"
    >
      {/* Cards */}
      <ul id="floating-contact-menu" className="flex flex-col items-end">
        <AnimatePresence>
          {open &&
            items.map(({ key, href, Icon, card, box }, i) => (
              <motion.li
                key={key}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="mb-2 sm:mb-3 w-52 sm:w-64 max-w-[calc(100vw-2rem)] origin-bottom"
              >
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border px-3 py-2 sm:px-4 sm:py-3 text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${card}`}
                >
                  <span
                    className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl ${box}`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-sm sm:text-base font-semibold leading-tight truncate">
                      {t(`${key}.title`)}
                    </span>
                    <span className="text-xs sm:text-sm text-white/70 truncate">
                      {t(`${key}.desc`)}
                    </span>
                  </span>
                </a>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        {!open &&
          !reduceMotion &&
          [0, 1, 2].map((i) => (
            <span
              key={i}
              aria-hidden
              className="animate-ripple pointer-events-none absolute inset-0 rounded-full bg-indigo-400/40"
              style={{ animationDelay: `${i * 0.8}s` }}
            />
          ))}

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("toggle")}
          aria-expanded={open}
          aria-controls="floating-contact-menu"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center overflow-hidden rounded-full text-white shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500"
          />
          <motion.span
            aria-hidden
            initial={false}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500"
          />

          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 45, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative flex items-center justify-center"
              >
                <FiPlus className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative flex items-center justify-center"
              >
                <FiMessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}