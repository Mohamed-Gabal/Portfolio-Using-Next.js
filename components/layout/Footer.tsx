import { siteConfig } from "@/config/site.config";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900/20 p-5">
      <p className="text-lg text-white/70 text-center">
        © {year} {siteConfig.brand} — Personal Portfolio Website
      </p>
    </footer>
  );
};
export default Footer;