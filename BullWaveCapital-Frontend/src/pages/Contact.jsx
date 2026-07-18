import { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

import { sendContact } from "../api/contactApi.js";
import toast from "react-hot-toast";
import RideLogo from "../assets/bullwaverides-logo.jpeg"; // update path if required
import AppStoreBadge from "../assets/appstore-icon.png";
import PlayStoreBadge from "../assets/playstore-icon.png";

const contactDetails = [
  {
    title: "Corporate Address",
    value:
      "Aggarwal Millennium Tower 2, Office No. Office No. 1275 (12th Floor), Netaji Subhash Place, Pitampura, New Delhi - 110034",
    icon: FaBuilding,
  },

  {
    title: "Mobile Number",
    value: "+91 8796565234",
    href: "tel:+918796565234",
    icon: FaPhone,
  },
  {
    title: "Official Email",
    value: "admin@capitalbullwave.com",
    href: "mailto:admin@capitalbullwave.com",
    icon: FaEnvelope,
  },
];

export default function Contact({ theme }) {
  const isDark = theme === "dark";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

     const loadingToast = toast.loading("Sending your enquiry...");

    try {
      const result = await sendContact(form);

      toast.dismiss(loadingToast);

      if (result.success) {

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        toast.success(result.message);

      } else {
        toast.error("Unable to send your message. Please try again.");
      }

    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending your message.");
    }
  };

  const pageBg = isDark
    ? "bg-[#020817] text-slate-100"
    : "bg-slate-50 text-slate-900";

  const wrapper = isDark
    ? "rounded-2xl sm:rounded-[34px] border border-slate-700 bg-slate-900 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.55)]"
    : "rounded-2xl sm:rounded-[34px] border border-slate-200 bg-white overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,.08)]";

  const card = isDark
    ? "rounded-2xl sm:rounded-3xl border border-blue-400 bg-slate-800 p-4 sm:p-6 transition-all duration-300 hover:border-sky-500 hover:bg-slate-800/90 hover:-translate-y-1"
    : "rounded-2xl sm:rounded-3xl border border-blue-400 bg-white p-4 sm:p-6 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 shadow-xl";

  const input = isDark
    ? "w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500"
    : "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600";

  const heading = isDark
    ? "text-slate-100"
    : "text-blue-700";

  const text = isDark
    ? "text-slate-400"
    : "text-slate-600";

  const label = isDark
    ? "text-sky-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.32em]"
    : "text-blue-700 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.32em]";

  const iconBox = isDark
    ? "flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-sky-500/15 text-sky-400"
    : "flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-100 text-blue-700";

  return (
    <section
      className={`relative overflow-hidden border-b transition-all duration-300 ${
        isDark
          ? "bg-slate-950 border-slate-800"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50 border-slate-200"
      }`}
    >
      {/* ---------------- HERO ---------------- */}

      <section
        className={`relative overflow-hidden border-b ${
          isDark
            ? "border-slate-800 bg-[#020817]"
            : "border-slate-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
        }`}
      >
        <div className={`absolute inset-0 ${isDark ? "opacity-30" : "opacity-70"}`}>
          <div
            className={`absolute -top-20 -left-20 h-56 w-56 sm:h-80 sm:w-80 rounded-full blur-[90px] sm:blur-[140px] ${
              isDark ? "bg-sky-500/15" : "bg-blue-300/40"
            }`}
          />

          <div
            className={`absolute -bottom-20 -right-20 h-56 w-56 sm:h-80 sm:w-80 rounded-full blur-[90px] sm:blur-[140px] ${
              isDark ? "bg-cyan-500/15" : "bg-cyan-300/40"
            }`}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">

          <div className="text-center">

            <span
              className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.4em] ${
                isDark
                  ? "bg-sky-500/15 text-sky-300"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              Contact Capital BullWave
            </span>

           <h1
              className={`mt-4 sm:mt-6 font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Let's Start A Conversation
            </h1>

            <p
              className={`mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Whether you need market research, trading guidance, investment
              support, or have any business inquiry, our experts are ready to
              assist you with reliable and professional financial solutions.
            </p>

            <div
              className={`mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <span>Home</span>

              <FaArrowRight className="text-[10px] sm:text-xs opacity-60" />

              <span
                className={
                  isDark
                    ? "font-semibold text-sky-300"
                    : "font-semibold text-blue-700"
                }
              >
                Contact
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ------------ MAIN SECTION STARTS ------------ */}

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 sm:py-16">

        <div className={wrapper}>

          <div className="grid lg:grid-cols-2">
            {/* ================= LEFT PANEL ================= */}

            <div
              className={`p-4 sm:p-8 lg:p-10 ${
                isDark
                  ? "border-b border-slate-800 lg:border-b-0 lg:border-r"
                  : "border-b border-slate-200 lg:border-b-0 lg:border-r"
              }`}
            >
              {/* Badge */}

              <span
                className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.35em] ${
                  isDark
                    ? "bg-sky-500/15 text-sky-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                Contact Information
              </span>

              {/* Heading */}

              <h2 className={`${heading} mt-4 sm:mt-6 text-xl sm:text-2xl lg:text-3xl font-bold`}>
                Reach Our Delhi Office
              </h2>

              <p className={`${text} mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8`}>
                Our team is available to assist you with investment guidance,
                stock market research, trading support, account-related
                queries and partnership opportunities.
              </p>

              {/* Contact Cards */}

              <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">

                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={card}
                    >
                      <div className="flex items-start gap-3 sm:gap-5">

                        <div className={iconBox}>
                          <Icon className="text-base sm:text-xl" />
                        </div>

                        <div className="min-w-0 flex-1">

                          <p className={label}>
                            {item.title}
                          </p>

                          {item.href ? (
                            <a
                              href={item.href}
                              className={`${text} mt-2 sm:mt-3 block break-words text-sm sm:text-base transition ${
                                  isDark
                                    ? "hover:text-sky-300"
                                    : "hover:text-blue-600"
                                }`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className={`${text} mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7`}>
                              {item.value}
                            </p>
                          )}

                        </div>

                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Office Hours */}

              <div className={`${card} mt-6 sm:mt-8`}>

                <div className="flex items-start gap-3 sm:gap-5">

                  <div className={iconBox}>
                    <FaClock className="text-base sm:text-xl" />
                  </div>

                  <div>

                    <p className={label}>
                      Office Hours
                    </p>

                    <h3 className={`${heading} mt-2 text-base sm:text-xl font-semibold`}>
                      Monday – Saturday
                    </h3>

                    <p className={`${text} mt-2 sm:mt-3 text-sm sm:text-base`}>
                      9:30 AM – 6:30 PM
                    </p>

                    <p className={`${text} mt-1 text-sm sm:text-base`}>
                      Sunday : Closed
                    </p>

                  </div>

                </div>

              </div>

              {/* Location */}

              <div className={`${card} mt-6 sm:mt-8`}>

                <div className="flex items-start gap-3 sm:gap-5">

                  <div className={iconBox}>
                    <FaMapMarkerAlt className="text-base sm:text-xl" />
                  </div>

                  <div>

                    <p className={label}>
                      Office Location
                    </p>

                    <h3 className={`${heading} mt-2 text-base sm:text-xl font-semibold`}>
                      Netaji Subhash Place
                    </h3>

                    <p className={`${text} mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7`}>
                      Aggarwal Millennium Tower 2,
                      Office No. 1275 (12th Floor), Pitampura,
                      <br />
                      New Delhi - 110034
                    </p>

                  </div>

                </div>

              </div>


            </div>

            {/* ================= RIGHT PANEL STARTS IN PART 3 ================= */}

            <div className="p-4 sm:p-8 lg:p-10">
              {/* ================= RIGHT PANEL ================= */}

            <span
              className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.35em] ${
                isDark
                  ? "bg-sky-500/15 text-sky-300"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              Send Message
            </span>

            <h2 className={`${heading} mt-4 sm:mt-6 text-xl sm:text-2xl lg:text-3xl font-bold`}>
              We'd Love to Hear From You
            </h2>

            <p className={`${text} mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-6 sm:leading-8`}>
              Fill in the details below and our team will get back to you at the
              earliest. We value every enquiry and strive to provide prompt,
              professional assistance.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 sm:mt-10 space-y-5 sm:space-y-7"
            >
              {/* Name & Email */}

              <div className="grid gap-5 sm:gap-6 md:grid-cols-2">

                <div>

                  <label className={`${label} mb-2 sm:mb-3 block`}>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={input}
                    required
                  />

                </div>

                <div>

                  <label className={`${label} mb-2 sm:mb-3 block`}>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={input}
                    required
                  />

                </div>

              </div>

              {/* Phone & Subject */}

              <div className="grid gap-5 sm:gap-6 md:grid-cols-2">

                <div>

                  <label className={`${label} mb-2 sm:mb-3 block`}>
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className={input}
                    required
                  />

                </div>

                <div>

                  <label className={`${label} mb-2 sm:mb-3 block`}>
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={input}
                    required
                  />

                </div>

              </div>

              {/* Message */}

              <div>

                <label className={`${label} mb-2 sm:mb-3 block`}>
                  Your Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`${input} resize-none`}
                  required
                />

              </div>

              {/* Privacy */}

              <div
                className={`rounded-xl sm:rounded-2xl border p-4 sm:p-5 ${
                  isDark
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <p className={`${text} text-xs sm:text-sm leading-5 sm:leading-7`}>
                  By submitting this form, you agree that Capital BullWave  may
                  contact you via phone or email regarding your enquiry. Your
                  information is kept confidential and is never shared with third
                  parties.
                </p>
              </div>

              {/* Button */}

              <button
                type="submit"
                className={`group cursor-pointer inline-flex w-full items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold transition-all duration-300 md:w-auto ${
                  isDark
                    ? "bg-sky-500 text-white hover:bg-sky-600 hover:shadow-[0_15px_35px_rgba(14,165,233,.35)]"
                    : "bg-blue-700 text-white hover:bg-blue-800 hover:shadow-[0_15px_35px_rgba(37,99,235,.35)]"
                }`}
              >
                <FaPaperPlane className="text-sm sm:text-base transition-transform cursor-pointer duration-300 group-hover:translate-x-1" />

                Send Message
              </button>

              {/* ================= BULLWAVE RIDES APP ================= */}

              <div
                className={`mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border p-4 sm:p-6 ${
                  isDark
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Left Side */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={RideLogo}
                      alt="BullWave Rides"
                      className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-xl sm:rounded-2xl object-cover shadow-lg"
                    />

                    <div>
                      <p className={label}>Our Ride Booking Platform</p>

                      <h3 className={`${heading} mt-1 text-base sm:text-xl font-bold`}>
                        BullWave Rides
                      </h3>

                      <p className={`${text} mt-1.5 sm:mt-2 max-w-lg text-xs sm:text-sm leading-5 sm:leading-6`}>
                        Experience fast, safe and affordable rides with the BullWave
                        Rides mobile app. Download it today from your favorite app store.
                      </p>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={AppStoreBadge}
                        alt="Download on the App Store"
                        className="h-9 sm:h-12 w-auto"
                      />
                    </a>

                    <a
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={PlayStoreBadge}
                        alt="Get it on Google Play"
                        className="h-9 sm:h-12 w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>


            </form>

            </div>


          </div>
        </div>

        {/* ================= GOOGLE MAP ================= */}

        <div
          className={`border-t ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div className="px-4 py-10 sm:px-8 sm:py-14 lg:px-10">

            <div className="text-center">

              <span
                className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.35em] ${
                  isDark
                    ? "bg-sky-500/15 text-sky-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                Visit Our Office
              </span>

              <h2 className={`${heading} mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-bold`}>
                Find Us On Google Maps
              </h2>

              <p className={`${text} mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base leading-6 sm:leading-8`}>
                Visit our corporate office in Netaji Subhash Place, Delhi.
                Our experienced team is always available to assist with
                investment solutions, market research and trading guidance.
              </p>

            </div>

            <div className={`mt-6 sm:mt-10 overflow-hidden rounded-2xl sm:rounded-3xl border shadow-xl ${
              isDark
                ? "border-slate-700"
                : "border-slate-200"
            }`}>

              <iframe
                title="Bull Wave Capital Location"
                src="https://www.google.com/maps?q=Aggarwal+Millennium+Tower+2+Netaji+Subhash+Place+Delhi&output=embed"
                loading="lazy"
                allowFullScreen
                className="h-[260px] sm:h-[340px] lg:h-[420px] w-full border-0"
              />

            </div>

          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}

        <div
          className={`border-t ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10">

            <div className="text-center">

              <span
                className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.35em] ${
                  isDark
                    ? "bg-sky-500/15 text-sky-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                Why Choose Us
              </span>

              <h2 className={`${heading} mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-bold`}>
                Trusted By Investors Across India
              </h2>

            </div>

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

              {[
                {
                  title: "Experienced Research",
                  desc: "Professional market research with data-driven insights."
                },
                {
                  title: "Quick Support",
                  desc: "Fast responses from our dedicated support team."
                },
                {
                  title: "Trusted Guidance",
                  desc: "Transparent advisory services focused on client success."
                },
                {
                  title: "Secure Communication",
                  desc: "Your information is handled with complete confidentiality."
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className={card}
                >

                  <h3 className={`${heading} text-base sm:text-xl font-semibold `}>
                    {item.title}
                  </h3>

                  <p className={`${text} mt-2 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7`}>
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>
        </div>

  {/* ================= CALL TO ACTION ================= */}

        <div className="px-3 pb-10 sm:px-8 sm:pb-16 lg:px-10">

          <div
            className={`overflow-hidden rounded-2xl sm:rounded-[32px] px-5 py-8 sm:px-8 sm:py-12 text-center ${
              isDark
                ? "bg-gradient-to-r from-sky-700 to-blue-800"
                : "bg-gradient-to-r from-blue-700 to-sky-500"
            }`}
          >

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Ready To Talk With Our Experts?
            </h2>

            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-8 text-blue-100">
              Whether you are a beginner or an experienced investor,
              our professionals are here to provide reliable market
              insights and personalized investment guidance.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-5">

              <a
                href="tel:+918796565234"
                className="rounded-full bg-white px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-blue-700 transition hover:scale-105"
              >
                Call Now
              </a>

              <a
                href="mailto:admin@capitalbullwave.com"
                className="rounded-full border border-white px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:scale-105"
              >
                Email Us
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};
