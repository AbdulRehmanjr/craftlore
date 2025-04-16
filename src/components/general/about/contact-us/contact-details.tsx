import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Container } from "~/components/common/container";
import { ContactForm } from "~/components/general/about/contact-us/contact-form";

export const ContactDetail = () => {
  return (
    <section className="col-span-12 bg-[#e5edf7] py-16">
      <Container className="grid gap-12">
        {/* Contact Information */}
        <div className="grid gap-8 rounded-lg bg-white p-8 shadow-lg sm:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-semibold">Our Office</h3>
                <p className="mt-2 text-gray-600">
                  Artisan Lane, 2 Dar Ul Zamrood,<br />
                  Gousia Ext Zakura<br />
                  Srinagar Kashmir India 190006
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <FaClock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-semibold">Office Hours</h3>
                <div className="mt-2 space-y-2 text-gray-600">
                  <p className="flex items-center justify-between">
                    <span>Mon - Fri:</span>
                    <span className="font-medium">9am - 5pm</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10am - 3pm</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-gray-400">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <FaEnvelope className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-semibold">Email Us</h3>
                <Link
                  className="mt-2 block text-gray-600 transition-colors hover:text-primary"
                  href="mailto:info@craftlore.org"
                >
                  info@craftlore.org
                </Link>
                <Link
                  className="mt-1 block text-gray-600 transition-colors hover:text-primary"
                  href="mailto:partners@craftlore.org"
                >
                  partners@craftlore.org
                </Link>
                <Link
                  className="mt-1 block text-gray-600 transition-colors hover:text-primary"
                  href="mailto:media@craftlore.org"
                >
                  media@craftlore.org
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <FaPhone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-semibold">Call Us</h3>
                <Link
                  className="mt-2 block text-gray-600 transition-colors hover:text-primary"
                  href="tel:+911 0113 0114"
                >
                  +911 0113 0114
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Additional Information */}
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h3 className="font-montserrat text-2xl font-semibold text-primary">Additional Information</h3>
          <div className="mt-6 space-y-4 text-gray-600">
            <div>
              <h4 className="font-montserrat font-semibold">Business Inquiries</h4>
              <p className="mt-1">
                For partnership or sponsorship opportunities, please contact us at partners@craftlore.org.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold">Media Inquiries</h4>
              <p className="mt-1">
                Journalists and media representatives can reach out at media@craftlore.org.
              </p>
            </div>
            <p className="mt-4 italic">
              Thank you for your interest in CraftLore! We look forward to connecting with you and exploring ways to collaborate in promoting Kashmiri craftsmanship.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
