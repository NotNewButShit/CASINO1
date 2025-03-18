import React from "react";
import { Heart, ExternalLink } from "lucide-react";
import { Separator } from "./ui/separator";

interface FooterProps {
  copyrightYear?: number;
  companyName?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
}

const Footer = ({
  copyrightYear = new Date().getFullYear(),
  companyName = "PhilCasino",
  links = [
    { title: "About Us", url: "#" },
    { title: "Terms & Conditions", url: "#" },
    { title: "Privacy Policy", url: "#" },
    { title: "Responsible Gaming", url: "#" },
    { title: "Contact Us", url: "#" },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-amber-500">
                PhilCasino
              </div>
              <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-md">
                TOP 10
              </span>
            </div>
            <p className="text-sm">
              Your trusted guide to the best online casinos in the Philippines.
              We provide unbiased reviews and comparisons to help you find the
              perfect gaming experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {links.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {links.slice(3).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {copyrightYear} {companyName}. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for
            Filipino gamers
          </p>
        </div>

        <div className="mt-4 text-xs text-center text-gray-500">
          <p>Gambling involves risk. Please gamble responsibly. 18+ only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
