
import UVSI_logo from "../assets/images/UVSI_logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#09234A] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* NGO Info */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={UVSI_logo}
                alt="Upper Valley SAFE Initiative Logo"
                className="w-14 h-14 object-contain"
              />

              <h2 className="text-lg font-bold text-white">
                Upper Valley SAFE Initiative
              </h2>
            </div>

            <p className="mt-5 text-sm leading-7">
              Safer Kids. United Community.
            </p>

            <p className="mt-3 text-sm leading-7">
              Upper Valley SAFE Initiative helps families, educators, and
              communities navigate the digital world, prevent exploitation,
              and create safer environments for children.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-[#EE4024] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#EE4024] transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#EE4024] transition"
                >
                  Events
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#EE4024] transition"
                >
                  Resources
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#EE4024] transition"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4 text-xl">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#EE4024] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#EE4024] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#EE4024] transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-white font-medium">
                Get Involved
              </h4>

              <p className="mt-2 text-sm leading-6">
                Join us in creating safer digital environments for children,
                families, and communities.
              </p>

              <a
                href="#"
                className="inline-block mt-4 bg-[#EE4024] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#d9361d] transition"
              >
                Support Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Upper Valley SAFE Initiative.
            All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Safer Kids. United Community.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

