import { useTranslations } from "next-intl";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";

import ContactCard from "./ContactCard";
import ContactInfo from "./ContactInfo";

import {
  contactMethods,
  contactDetails,
  contactStats,
} from "@/data/contact";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-16">
      <Container>
        <Badge
          badge={t("badge")}
          title={
            <>
              {t("title")}{" "}
              <span className="text-cyan-300">
                {t("titleHighlight")}
              </span>
            </>
          }
          description={t("description")}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ContactCard methods={contactMethods} />
          <ContactInfo
            details={contactDetails}
            stats={contactStats}
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;