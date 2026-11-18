import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import requestImage from "../assets/images/request_image.webp";
import ContactLocation from "../components/contact/ContactLocation";
import ContactFAQ from "../components/contact/ContactFAQ";

const quickLinks = [
  {
    title: "General questions",
    description: "Our mission, our team and how we work.",
    linkText: "Read about us",
    href: "/about",
  },
  {
    title: "Program questions",
    description: "Safety Heroes ages, lessons and upcoming events.",
    linkText: "See program FAQ",
    href: "/programs",
  },
  {
    title: "Partnership questions",
    description: "Schools, churches, agencies and businesses.",
    linkText: "Partner with us",
    href: "/community",
  },
  {
    title: "Volunteers and interns",
    description: "Roles, training and the semester internship.",
    linkText: "Ways to serve",
    href: "#contact-form",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "General question",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Website inquiry: ${formData.topic}`);

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Organization: ${formData.organization}\n` +
        `Topic: ${formData.topic}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:info@uppervalleysafe.org?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Upper Valley SAFE Initiative</title>
        <meta
          name="description"
          content="Contact Upper Valley SAFE Initiative about child safety workshops, community partnerships, volunteering and prevention programs in Rexburg, Idaho."
        />
        <meta
          property="og:title"
          content="Contact Us | Upper Valley SAFE Initiative"
        />
        <meta
          property="og:description"
          content="Questions, partnerships or a workshop for your school or community? Get in touch with Upper Valley SAFE Initiative."
        />
      </Helmet>

      <Navbar />

      <main className="w-full bg-white text-[#17345f]">
        {/* CONTACT INTRODUCTION */}
        <section className="px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10">
          <div className="mx-auto max-w-[1074px]">
            {/* Breadcrumb */}
            <nav className="mb-7 flex items-center gap-1.5 text-xs text-[#41679c]">
              <a href="/" className="underline underline-offset-2">
                Home
              </a>
              <span>/</span>
              <span>Contact</span>
            </nav>

            <div className="mb-6">
              <h1 className="max-w-[650px] text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                Contact Upper Valley SAFE Initiative
              </h1>

              <p className="mt-3 max-w-[850px] text-sm leading-6 text-[#203d63]">
                Questions, partnerships, or a workshop for your school, church
                or group? We'd love to hear from you. Reply within 24hours .
              </p>
            </div>

            {/* Emergency notice */}
            <div className="mb-7 flex flex-col items-start justify-between gap-4 rounded-md border border-[#aeb7c1] p-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="mb-1 text-sm font-bold text-[#111827]">
                  This form is not for emergencies or abuse reports.
                </h2>
                <p className="max-w-[690px] text-[13px] leading-5 text-[#203d63]">
                  If a child is in immediate danger, call 911. To report
                  suspected abuse in Idaho, call 855-552-KIDS (5437). For online
                  exploitation, use the CyberTipline.
                </p>
              </div>

              <a
                href="https://report.cybertip.org/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded bg-[#111827] px-4 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#294b78]"
              >
                Report to CyberTipline
              </a>
            </div>

            {/* Contact form and information */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.8fr_1fr]">
              {/* Contact form */}
              <div
                id="contact-form"
                className="rounded-md border border-[#dce1e7] p-5 sm:p-6"
              >
                <h2 className="mb-5 text-3xl font-bold text-[#111827]">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded border border-[#cbd2d9] px-3 py-2 text-sm outline-none focus:border-[#17345f]"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded border border-[#cbd2d9] px-3 py-2 text-sm outline-none focus:border-[#17345f]"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded border border-[#cbd2d9] px-3 py-2 text-sm outline-none focus:border-[#17345f]"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium">
                        Topic
                      </label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full rounded border border-[#cbd2d9] bg-white px-3 py-2 text-sm outline-none focus:border-[#17345f]"
                      >
                        <option>General question</option>
                        <option>Request a workshop or presentation</option>
                        <option>Safety Heroes for my school or group</option>
                        <option>Partnership</option>
                        <option>Volunteering</option>
                        <option>Internship</option>
                        <option>Media</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium">
                      School, church or organization (optional)
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full rounded border border-[#cbd2d9] px-3 py-2 text-sm outline-none focus:border-[#17345f]"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full resize-y rounded border border-[#cbd2d9] px-3 py-2 text-sm outline-none focus:border-[#17345f]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded bg-[#17345f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#294b78]"
                  >
                    Send message
                  </button>
                </form>
              </div>

              {/* Contact information */}
              <aside className="h-fit rounded-md bg-[#f1f3f5] p-5 text-1xl">
                <div className="mb-4">
                  <h3 className="mb-1 font-bold text-[#111827]">Phone</h3>
                  <a href="tel:703-622-6496">703-622-6496</a>
                </div>

                <div className="mb-4">
                  <h3 className="mb-1 font-bold text-[#111827]">Email</h3>
                  <a href="mailto:uppervalleysafe@gmail.com">
                    uppervalleysafe@gmail.com
                  </a>
                </div>

                <div className="mb-4">
                  <h3 className="mb-1 font-bold text-[#111827]">Location</h3>
                  <p className="leading-5">Rexburg, ID 83440</p>
                </div>

                <div className="mb-4">
                  <h3 className="mb-1 font-bold text-[#111827]">Hours</h3>
                  <p>[Add office or response hours, if applicable]</p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#111827]">Follow us</h3>

                  <div className="flex flex-col items-start gap-1">
                    <a
                      href="https://www.instagram.com/uppervalleysafeinitiative/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>

                    <a
                      href="https://www.facebook.com/people/Upper-Valley-SAFE-Initiative/61574321056649/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>

                    <a
                      href="https://www.linkedin.com/company/upper-valley-safe-initiative/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="bg-[#f1f3f5] px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1074px]">
            <h2 className="mb-6 text-2xl font-bold text-[#111827] sm:text-3xl">
              Find the right answer faster
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-[#dce1e7] bg-white p-4"
                >
                  <h3 className="mb-2 text-x font-bold text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="mb-3 text-sm leading-5 text-[#203d63]">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="text-sm font-semibold text-[#17345f] underline underline-offset-2 hover:text-[#41679c]"
                  >
                    {item.linkText}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRESENTATION REQUEST */}
        <section className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-[1074px] grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
            <div>
              <h2 className="mb-3 text-3xl font-bold leading-tight text-[#111827]">
                Request an internet safety presentation
              </h2>

              <p className="mb-3 text-sm leading-6 text-[#203d63]">
                We bring free prevention education to schools, churches,
                community groups and organizations.
              </p>

              <ul className="mb-4 list-disc space-y-1 pl-5 text-xs leading-5 text-[#203d63]">
                <li>Family workshops for parents and caregivers</li>
                <li>Safety Heroes for kids ages 7–11</li>
                <li>Presentations for community and nonprofit groups</li>
              </ul>

              <p className="mb-4 text-xs leading-5 text-[#203d63]">
                Choose "Request a workshop or presentation" in the form above.
                Add how many people you expect and your preferred dates.
              </p>

              <a
                href="#contact-form"
                className="inline-flex rounded bg-[#17345f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#294b78]"
              >
                Request a presentation
              </a>
            </div>

            {/* Presentation image placeholder */}
            <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-lg border border-[#d1d8e0] bg-[#e3e7eb] sm:h-[260px]">
              <div className="h-[220px] w-full overflow-hidden rounded-lg border border-[#d1d8e0] bg-[#f1f3f5] sm:h-[260px]">
                <img
                  src={requestImage}
                  alt="Upper Valley SAFE Initiative internet safety presentation"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* LOCATION SECTION */}
        <ContactLocation />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <ContactFAQ />
      </main>

      <Footer />
    </>
  );
};

export default Contact;
