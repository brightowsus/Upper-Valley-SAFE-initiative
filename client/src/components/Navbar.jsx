import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import UVSI_logo from "../assets/images/UVSI_logo.png";

// These are the nav sections that have a dropdown menu.
const links = [
  {label: "About", dropdown: false},
  {label: "Programs", dropdown: true},
  {label: "Events & Workshops", dropdown: true},
  {label: "Resources", dropdown: true},
  {label: "Get Involved", dropdown: true},
  {label: "Contact", dropdown: false}
]


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const quickExit = () => {
    window.location.replace("http://www.google.com")
  }

  return (
    <>
      {/* Emergency Banner*/}
      <div className="w-full bg-[#111] text-white">
        <div className="mx-auto flex max-w-7x1 items-center justify-between gap-4 px-6 py-2.5 text-xs sm:text-sm lg:px-8">
          <p className="leading-snug">
            Child in danger? Call 911. Report online exploitation: {""}

            <a href="https//report.cybertip.org" className="font-bold underline underline-offset-2 hover:text-white/80">
            CyberTipline 1-800-843-5678
            </a>{" "}
            · Idaho Child Protection Hotline{" "}
            <a href="tel:8555525437" className="font-bold underline underline-offset-2 hover:text-white/80">
              855-552-5437
            </a>
          </p>

          <button onClick={quickExit} className="shrink-0 rounded-md bg-white px-4 py-1.5 text-sm font-semibold
          text-[#111] transition hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-white">
            Quick exit
          </button>
        </div>
      </div>

    {/*Main Menu Time!*/}
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7x1 items-center justify-between gap-6 px-6 py-3 lg:px-8">


        {/* Logo + Name */}
        <a href="/" className="flex shrink-0 items-center gap-3.5">
          <img
            src={UVSI_logo}
            alt="Upper Valley SAFE Initiative Logo"
            className="h-25 w-25 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-[#09234A] lg:text-xl">
              Upper Valley SAFE Initiative
            </span>

            <span className="hidden text-xs tracking-wide text-gray-600 sm:block">
              Safety • Awareness • Freedom • Education
              </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 xl:flex">
          <ul className="flex items-center gap-10 text-[15px] font-medium text-gray-800">
            {links.map(({ label, dropdown}) => (
              <li key={label}>
                <a href="#" className="group relative inline-flex items-center gap-1 py-2 transition-colors hover:text-[#09234A]
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#09234A]
                after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#EE4024] after:transition-all
                after:duration-200 hover:after:w-full">
                  {label}
                  {dropdown && (
                    <span aria-hidden="true" className="h-4 w-4 text-gray-500 transition-0transform duration-200 group-hover:rotate-180
                    group-hover:text-[#09234A]">
                      ▼
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

        {/* Donate Button */}
          <button className="rounded-lg bg-[#09234A] px-6 py-2.5 text-[15px] font-semibold text-white shadow-sm
          transition hover:bg-[#0d3169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#09234A]">
            Donate
          </button>

        </div>

        {/* Mobile menu button*/}
        <button onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-md p-3 text-[25px] text-[#09234A] transition hover:bg-gray-100 xl:hidden">

            {isOpen ? <HiX /> : <HiMenu />}

        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white xl:hidden">
          <ul className="mx-auto max-w-7x1 divide-y divide-gray-100 px-6 py-2 font-medium text-gray-800 lg:px-8">
            {links.map(({ label}) =>(
              <li key={label}>
                <a href="#" className="flex items-center justify-between py-3.5 transition-colors hover:text-[#09234A]">
                  {label}
                </a>
              </li>
            ))}

            <li>
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