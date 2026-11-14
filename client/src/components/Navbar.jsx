import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import UVSI_logo from "../assets/images/UVSI_logo.png";

// ADD LINKS TO SPECIFIC PAGES LATER
const links = [
  { label: "About Us", dropdown: true, href:"#", children: [
    {
      label: "Our Team", href: "#"
    },
    {
      label: "Our Community", href: "#"
    }
  ], 
},
  { label: "About", dropdown: false, href:"/about" },
  { label: "Programs", dropdown: true, href:"#" },
  { label: "Events & Workshops", dropdown: true, href: "/events" },
  { label: "Resources", dropdown: true, href:"#"},
  { label: "Get Involved", dropdown: true, href:"#" },
  { label: "Contact", dropdown: false, href:"#" },
];
 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  const quickExit = () => {
    window.location.replace("https://www.google.com");
  };
 
  return (
    <>
      {/* Emergency banner */}
      <div className="w-full bg-[#111] text-white">
        <div className="flex w-full items-center justify-between gap-4 px-6 py-2.5 text-xs sm:px-10 sm:text-sm lg:px-16">
          <p className="leading-snug">
            Child in danger? Call 911. Report online exploitation:{" "}
            <a
              href="https://report.cybertip.org"
              className="font-bold underline underline-offset-2 hover:text-white/80"
            >
              CyberTipline 1-800-843-5678
            </a>{" "}
            · Idaho Child Protection Hotline{" "}
            <a
              href="tel:8555525437"
              className="font-bold underline underline-offset-2 hover:text-white/80"
            >
              855-552-5437
            </a>
          </p>
 
          <button
            onClick={quickExit}
            className="shrink-0 rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-[#111] transition hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Quick exit
          </button>
        </div>
      </div>
 
      {/* Main menu */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <nav className="flex w-full items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo and Name*/}
          <a href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
            <img
              src={UVSI_logo}
              alt="Upper Valley SAFE Initiative logo"
              className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-25 sm:w-25 lg:h-35 lg:w-35"
            />
 
            <div className="flex min-w-0 flex-col">
              <span className="text-xl font-bold leading-tight text-[#09234A] sm:text-2xl lg:text-3xl xl:text-2xl 2xl:text-4xl">
                Upper Valley SAFE Initiative
              </span>
 
              {/* Hidden at xl where the desktop menu needs the room */}
              <span className="hidden text-sm tracking-wide text-gray-600 sm:block xl:hidden 2xl:block">
                Safety • Awareness • Freedom • Education
              </span>
            </div>
          </a>
 
          {/* Desktop menu */}
          <div className="hidden shrink-0 items-center gap-6 xl:flex 2xl:gap-10">
            <ul className="flex items-center gap-6 text-[15px] font-medium text-gray-800 2xl:gap-10">
              {links.map(({ label, dropdown, href, children }) => {
                const hasMenu = Boolean(children);
                return(
                  <li key={label} className="group/item relative">
                    <a href={href} className="group relative inline-flex items-center gap-1.5 whitespace-nowrap
                    py-2 transition-colors hover:text-[#09234A] focus-visible:outline focus-visible:outline-2 
                    focus-visible:outline-offset-4 focus-visible:outline-[#09234A] after:absolute after:-bottom-0.5
                    after:left-0 after:h-0.5 after:w-0 after:bg-[#EE4024] after:transition-all after:duration-200
                    hover:after:w-full">
                      {label}
                      {(dropdown || hasMenu) && (
                        <span aria-hidden="true" 
                        className="inline-block text-[10px] leading-none text-gray-500 transition-transform duration-200
                        group-hover/item:rotate-180 group-hover/item:text-[#09234A] group-focus-within/item:rotate-180">
                          ▼
                        </span>
                      )}
                    </a>

                    {/* Dropdown menu */}
                    {hasMenu && (
                      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition
                      duration-150 group-hover/item:visible group-hover/item:opacity-100 group-focus-within/item:visible
                      group-focus-within/item:opacity-100">
                        <ul className="w-56 overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                          {children.map((child) => (
                            <li key={child.label}>
                              <a href={child.href} className="block px-5 py-2.5 text-[15px] font-medium text-gray-800
                              transition-colors hover:bg-[#09234A]/5 hover:text-[#09234A] focus-visible:bg-[#09234A]/5
                              focus-visible:outline-none">
                                {child.label}
                              </a>
                            </li>
                          ))}      
                        </ul>

                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
 
            <button className="whitespace-nowrap rounded-lg bg-[#09234A] px-6 py-2.5 text-[15px] font-semibold text-white shadow-sm 
            transition hover:bg-[#0d3169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-[#09234A]">
              Donate
            </button>
          </div>
 
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="shrink-0 rounded-md p-2 text-3xl text-[#09234A] transition hover:bg-gray-100 xl:hidden"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </nav>
 
        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-gray-200 bg-white xl:hidden">
            <ul className="w-full divide-y divide-gray-100 px-6 py-2 font-medium text-gray-800 sm:px-10 lg:px-16">
              {links.map(({ label, href, children}) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3.5 transition-colors hover:text-[#09234A]"
                  >
                    {label}
                  </a>
                  {children && (
                    <ul className="mb-3 ml-2 space-y-1 border-1-2 border-[#EE4024]/40 pl-4">
                      {children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} onClick={() => setIsOpen(false)} className="block py-2 text-[15px]
                          text-gray-600 transition-colors hover:text-[#09234A]">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              ))}
 
              {/* LATER CHANGE TO AN <a></a> */}
              <li className="py-4">
                <button className="w-full rounded-lg bg-[#09234A] py-3 font-semibold text-white transition hover:bg-[#0d3169]">
                  Donate
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
 
export default Navbar;