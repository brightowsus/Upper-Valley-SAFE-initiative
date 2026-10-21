import UVSI_logo from "../assets/images/UVSI_logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
 
const explore = [
  { label: "About us", href: "/about" },
  { label: "Safety Heroes", href: "#" },
  { label: "Workshops and events", href: "/events" },
  { label: "Volunteer and intern", href: "#" },
  { label: "Donate", href: "#" },
];
 
const parentGuides = [
  { label: "Internet safety for kids", href: "#" },
  { label: "Parental controls", href: "#" },
  { label: "What is sextortion?", href: "#" },
  { label: "Signs of grooming", href: "#" },
  { label: "AI safety for kids", href: "#" },
];
 
const socials = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
];
 
const linkClass =
  "inline-block text-gray-300 transition hover:translate-x-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
 
function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <span className="mt-2 block h-0.5 w-8 bg-[#EE4024]" aria-hidden="true" />
      <ul className="mt-5 space-y-3 text-[15px]">
        {items.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={linkClass}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
function Footer() {
  return (
    <footer className="mt-auto w-full border-t-4 border-[#EE4024] bg-[#09234A] text-gray-300">
      <div className="w-full px-6 pb-8 pt-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand + contact */}
          <div>
            <a href="/" className="flex items-center gap-3">
              <img
                src={UVSI_logo}
                alt="Upper Valley SAFE Initiative logo"
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="text-lg font-bold leading-tight text-white">
                Upper Valley SAFE Initiative
              </span>
            </a>
 
            <p className="mt-3 text-xs tracking-wide text-gray-400">
              Safety • Awareness • Freedom • Education
            </p>
 
            <p className="mt-5 font-semibold text-white">
              Safer Kids. United Community.
            </p>
 
            <p className="mt-3 max-w-sm text-[15px] leading-7">
              A volunteer-Supported nonprofit preventing exploitation before it
              happens through free, evidence-informed education.
            </p>
 
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="shrink-0 text-[#EE4024]" aria-hidden="true" />
                <span>Rexburg, ID 83440</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-[#EE4024]" aria-hidden="true" />
                <a href="tel:7036226496" className="transition hover:text-white">
                  703-622-6496
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-[#EE4024]" aria-hidden="true" />
                <a
                  href="mailto:uppervalleysafe@gmail.com"
                  className="break-all transition hover:text-white"
                >
                  uppervalleysafe@gmail.com
                </a>
              </li>
            </ul>
          </div>
 
          <FooterColumn title="Explore" items={explore} />
          <FooterColumn title="Parent guides" items={parentGuides} />
 
          {/* Where we serve + social */}
          <div>
            <h3 className="text-base font-semibold text-white">Where we serve</h3>
            <span className="mt-2 block h-0.5 w-8 bg-[#EE4024]" aria-hidden="true" />
 
            <p className="mt-5 text-[15px] leading-7">
              Rexburg and the Upper Valley, including Sugar City, Rigby,
              St. Anthony and Idaho Falls.
            </p>
 
            <p className="mt-6 text-sm font-semibold text-white">Follow us</p>
            <div className="mt-3 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#EE4024] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
 
        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-gray-400 md:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Upper Valley SAFE Initiative · Nonprofit ·
            EIN 42-1825220
          </p>
 
          <p className="flex items-center gap-3">
            <a href="#" className="transition hover:text-white">
              Privacy policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="transition hover:text-white">
              Terms and conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;