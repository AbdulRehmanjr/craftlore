import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-20 w-20">
                <Image
                  src="/logo/logo.png"
                  alt="Craftlore Logo"
                  fill
                  sizes="(max-width: 80px) 100vw, 80px"
                  className="object-contain"
                />
              </div>
              <h2 className="text-4xl font-bold">Craftlore</h2>
            </div>
            <p className="max-w-[275px] text-sm text-gray-300">
              is a non-commercial platform and the world&apos;s largest open
              craft repository focused on Kashmiri craftsmanship. We empower you
              with knowledge and tools to make informed, independent choices,
              free from external pressure or bias.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<FaFacebook size={20} />} />
              <SocialLink href="#" icon={<FaTwitter size={20} />} />
              <SocialLink href="#" icon={<FaPinterest size={20} />} />
              <SocialLink href="#" icon={<FaLinkedin size={20} />} />
            </div>
          </div>

          {/* Craft Registry Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Craft Registry</h3>
            <ul className="space-y-2">
              <FooterLink
                href="/craft-registry/profiling"
                text="Kashmir Craft Profile"
              />
              <FooterLink
                href="/craft-registry/GI"
                text="Geographical Indication"
              />
              <FooterLink
                href="/craft-registry/blockchain"
                text="Blockchain Traceability"
              />
              <FooterLink
                href="/craft-registry/carbon-footprint"
                text="Carbon Footprint"
              />
              <FooterLink
                href="/craft-registry/cost-estimation"
                text="Price Estimation"
              />
              <FooterLink href="/listing" text="Trade Registry" />
            </ul>
          </div>

          {/* Craft Resources Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Craft Resources</h3>
            <ul className="space-y-2">
              <FooterLink
                href="/craft-vulnerability/property"
                text="Intellectual Property"
              />
              <FooterLink
                href="/craft-vulnerability/counterfeit"
                text="Counterfeits"
              />
              <FooterLink
                href="/economics/production"
                text="Production Insights"
              />
              <FooterLink href="/economics/export" text="Export Data" />
              <FooterLink href="/employment/trend" text="Employment Trends" />
              <FooterLink href="/gender/insight" text="Gender Dynamics" />
            </ul>
          </div>

          {/* About & Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About & Connect</h3>
            <ul className="space-y-2">
              <FooterLink href="/about/mission" text="Our Mission" />
              <FooterLink href="/about/project" text="Projects" />
              <FooterLink href="/about/team" text="Our Team" />
              <FooterLink href="/about/career" text="Careers" />
              <FooterLink href="/about/contact-us" text="Contact Us" />
              <FooterLink href="/sponsorship" text="Become a Sponsor" />
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Stay Updated</h3>
              <p className="text-sm text-gray-300">
                Subscribe to our newsletter for the latest updates on
                Kashmir&apos;s craft heritage.
              </p>
            </div>
            <form className="flex md:flex-row flex-col gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-md bg-white/10 px-4 py-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="rounded-md bg-secondary px-6 py-2 font-semibold text-white transition-colors hover:bg-secondary/80"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-primary-dark border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between space-y-2 text-sm text-gray-300 md:flex-row md:space-y-0">
            <p>© {new Date().getFullYear()} Craftlore. All rights reserved.</p>
            <p className="text-xs">Powered and Maintained by Prime Logic Solutions USA</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-300 transition-colors hover:text-secondary"
  >
    {icon}
  </Link>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link
      href={"#"}
      className="text-sm text-gray-300 transition-colors hover:text-secondary"
    >
      {text}
    </Link>
  </li>
);
