import Link from "next/link";
import { FaCode } from "react-icons/fa";

import { siteConfig } from "@/config/site.config";
import FooterCTA from "./FooterCTA";
import { socialLinks, quickLinks, footerContactItems } from "@/data/footer";

const Footer = () => {
  return (
    <footer className="bg-[#0f142e] border-t border-white/10">
      <div className="w-full px-6 sm:px-20 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <FaCode className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold text-white">
                {siteConfig.brand} Ali
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              Crafting premium digital experiences with passion and code.
            </p>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
                  >
                    <Icon className="text-lg" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 text-base font-semibold text-white">
              <FaCode className="text-blue-500" />
              Quick Links
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-base font-semibold text-white">Get In Touch</h3>

            <div className="mt-4 flex flex-col gap-3">
              {footerContactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <Icon className="text-blue-500" />
                    {item.value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Import FooterCTA Component */}
        <FooterCTA />

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            © 2026 Mohamed Ali. All rights reserved. Crafted with{" "}
            <span className="text-red-400">❤️</span> and ☕
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
            Built With
            <span className="rounded-md bg-slate-400/10 p-1.5 text-slate-200">Next.js</span>
            <span className="rounded-md bg-blue-400/15 p-1.5 text-blue-200">TypeScript</span>
            <span className="rounded-md bg-green-400/10 p-1.5 text-green-300">GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
