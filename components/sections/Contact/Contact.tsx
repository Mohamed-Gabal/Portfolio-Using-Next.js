"use client";

import { useState } from "react";
import Link from "next/link";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/config/site.config";
import { SECTION_IDS } from "@/lib/constants";

type FormStatus = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        publicKey
      );

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <section id={SECTION_IDS.contact} className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text content */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h2>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              
              <a  href={`tel:${siteConfig.phone}`}
                className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              
               <a href={`mailto:${siteConfig.email}`}
                className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                {siteConfig.location}
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center mt-8 space-x-3">
            <Link
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-all duration-300"
            >
              <FaWhatsapp className="text-white w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300"
            >
              <FaFacebook className="text-white w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all duration-300"
            >
              <FaYoutube className="text-white w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-all duration-300"
            >
              <FaInstagram className="text-white w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-all duration-300"
            >
              <FaGithub className="text-white w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            required
            value={form.name}
            onChange={handleChange}
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="off"
            required
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            autoComplete="off"
            value={form.phone}
            onChange={handleChange}
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            autoComplete="off"
            required
            value={form.message}
            onChange={handleChange}
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem] resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-green-400 text-sm">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400 text-sm">
              Something went wrong. Please try emailing me directly at{" "}
              {siteConfig.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
export default Contact;