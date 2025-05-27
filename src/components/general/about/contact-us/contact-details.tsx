import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Container } from "~/components/common/container";
import { ContactForm } from "~/components/general/about/contact-us/contact-form";

export const ContactDetail = () => {
  return (
    <section className="col-span-12 bg-[#e5edf7] py-8 sm:py-12 md:py-16">
      <Container className="grid gap-6 sm:gap-8 md:gap-12">
        {/* Contact Information */}
        <div className="w-full rounded-lg bg-white p-4 sm:p-6 md:p-8 shadow-lg">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <FaMapMarkerAlt className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat text-lg sm:text-xl font-semibold">Our Office</h3>
                  <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                    Artisan Lane, 2 Dar Ul Zamrood,<br />
                    Gousia Ext Zakura<br />
                    Srinagar Kashmir India 190006
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <FaClock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat text-lg sm:text-xl font-semibold">Office Hours</h3>
                  <div className="mt-1 sm:mt-2 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
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

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat text-lg sm:text-xl font-semibold">Email Us</h3>
                  <Link
                    className="mt-1 sm:mt-2 block text-sm sm:text-base text-gray-600 transition-colors hover:text-primary"
                    href="mailto:info@craftlore.org"
                  >
                    info@craftlore.org
                  </Link>
                  <Link
                    className="mt-1 block text-sm sm:text-base text-gray-600 transition-colors hover:text-primary"
                    href="mailto:partners@craftlore.org"
                  >
                    partners@craftlore.org
                  </Link>
                  <Link
                    className="mt-1 block text-sm sm:text-base text-gray-600 transition-colors hover:text-primary"
                    href="mailto:media@craftlore.org"
                  >
                    media@craftlore.org
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <FaPhone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat text-lg sm:text-xl font-semibold">Call Us</h3>
                  <Link
                    className="mt-1 sm:mt-2 block text-sm sm:text-base text-gray-600 transition-colors hover:text-primary"
                    href="tel:+911 0113 0114"
                  >
                    +911 0113 0114
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full rounded-lg bg-white p-4 sm:p-6 md:p-8 shadow-lg">
          <ContactForm />
        </div>

        {/* Additional Information */}
        <div className="w-full rounded-lg bg-white p-4 sm:p-6 md:p-8 shadow-lg">
          <h3 className="font-montserrat text-xl sm:text-2xl font-semibold text-primary">Additional Information</h3>
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600">
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
            <p className="mt-3 sm:mt-4 italic">
              Thank you for your interest in CraftLore! We look forward to connecting with you and exploring ways to collaborate in promoting Kashmiri craftsmanship.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};