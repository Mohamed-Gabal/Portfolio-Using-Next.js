import Badge from "@/components/ui/Badge";
import ContactCard from "./ContactCard";
import ContactInfo from "./ContactInfo";
import { contactMethods, contactDetails, contactStats } from "@/data/contact";
import Container from "@/components/layout/container";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <Container>
        <Badge
          title={
            <>
              Build Something <span className="text-cyan-300">Great</span>
            </>
          }
          description="Have a project in mind, need a freelance developer, or just want to chat? Reach out to me via any of the channels below."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ContactCard methods={contactMethods} />
          <ContactInfo details={contactDetails} stats={contactStats} />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
