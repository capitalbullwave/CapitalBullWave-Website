import { useCallback, useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { sendContact } from "../api/contactApi.js";
import toast from "react-hot-toast";
import ClubLogo from "../assets/bullwaveClub.jpeg";
import { Helmet } from "react-helmet-async";
import RevealOnScroll from "../components/RevealOnScroll";
import RidesChoiceModal from "../components/RidesChoiceModal";
import { validateAuthenticatedEmail } from "../utils/emailValidation.js";

const RideLogo = "/images/bwride.png";

const contactDetails = [
  {
    title: "India Office",
    subtitle: "Registered Office · New Delhi",
    value:
      "Aggarwal Millennium Tower 2, Office No. 1275 (12th Floor), Netaji Subhash Place, Pitampura, New Delhi - 110034",
    icon: FaBuilding,
  },
  {
    title: "Dubai Office",
    subtitle: "United Arab Emirates",
    value:
      "World Trade Centre (Sheikh Rashid Tower), Sheikh Zayed Road, P.O. Box: 9700, Dubai, United Arab Emirates",
    icon: FaMapMarkerAlt,
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
  const [ridesOpen, setRidesOpen] = useState(false);
  const closeRides = useCallback(() => setRidesOpen(false), []);

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

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim().replace(/[\s\-().]/g, ""),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    const emailCheck = validateAuthenticatedEmail(payload.email);
    if (!emailCheck.success) {
      toast.error(
        emailCheck.message || "Please provide an authenticated email address."
      );
      return;
    }

    if (payload.message.length < 10) {
      toast.error("Message should contain at least 10 characters.");
      return;
    }

    const loadingToast = toast.loading("Sending your enquiry...");

    try {
      const result = await sendContact(payload);

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
        toast.error(
          result.message || "Unable to send your message. Please try again."
        );
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      if (import.meta.env.DEV) {
        console.error(error);
      }

      const serverMessage = error?.response?.data?.message;
      if (serverMessage) {
        toast.error(serverMessage);
        return;
      }

      if (error?.code === "ECONNABORTED") {
        toast.error(
          "The server is taking too long to respond. Please try again in a moment."
        );
        return;
      }

      if (!error?.response) {
        toast.error(
          "Cannot reach the server. Please check your connection and try again."
        );
        return;
      }

      toast.error("An error occurred while sending your message.");
    }
  };

  const handleEmailBlur = () => {
    const value = form.email.trim();
    if (!value) return;
    const emailCheck = validateAuthenticatedEmail(value);
    if (!emailCheck.success) {
      toast.error(
        emailCheck.message || "Please provide an authenticated email address."
      );
    }
  };

  const wrapper = isDark
    ? "rounded-2xl sm:rounded-[34px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.55)]"
    : "rounded-2xl sm:rounded-[34px] border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-sky-100 overflow-hidden shadow-[0_24px_60px_rgba(14,165,233,.12)]";

  const card = isDark
    ? "premium-card rounded-2xl sm:rounded-3xl border border-sky-500/30 bg-slate-800/80 p-4 sm:p-6 transition-all duration-300 hover:border-sky-400 hover:-translate-y-1"
    : "premium-card rounded-2xl sm:rounded-3xl border border-sky-100 bg-white p-4 sm:p-6 transition-all duration-300 hover:border-sky-300 hover:-translate-y-1 shadow-lg shadow-sky-100/70";

  const input = isDark
    ? "w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 sm:px-5 sm:py-3 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500"
    : "w-full rounded-xl border border-sky-200 bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-base text-black placeholder:text-slate-400 outline-none transition focus:border-sky-500";

  const heading = isDark ? "text-sky-300" : "text-sky-700";

  const text = isDark ? "text-slate-400" : "text-neutral-800";

  const label = isDark
    ? "text-sky-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.32em]"
    : "text-sky-700 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.32em]";

  const iconBox = isDark
    ? "flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-sky-500/15 text-sky-400"
    : "flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-sky-100 text-sky-700";

  return (
    <div className="page-shell page-enter relative overflow-hidden py-4 sm:py-6 lg:py-8">

      <Helmet>
        <title>Contact Us | Capital BullWave - Delhi & Dubai Offices</title>
        <meta
          name="description"
          content="Contact Capital BullWave at our New Delhi and Dubai offices. Call +91 8796565234 or email admin@capitalbullwave.com for investment guidance and market research support."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/contact" />
        <meta property="og:title" content="Contact Capital BullWave | Delhi & Dubai" />
        <meta
          property="og:description"
          content="Reach our Delhi and Dubai offices for market research, trading guidance and investment support."
        />
        <meta property="og:url" content="https://www.capitalbullwave.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        className={`relative overflow-hidden rounded-2xl sm:rounded-[1.75rem] ${wrapper}`}
      >
        <div className={`absolute inset-0 ${isDark ? "opacity-30" : "opacity-70"}`}>
          <div
            className={`absolute -top-20 -left-20 h-56 w-56 sm:h-80 sm:w-80 rounded-full blur-[90px] sm:blur-[140px] animate-soft-pulse ${
              isDark ? "bg-sky-500/15" : "bg-sky-300/50"
            }`}
          />

          <div
            className={`absolute -bottom-20 -right-20 h-56 w-56 sm:h-80 sm:w-80 rounded-full blur-[90px] sm:blur-[140px] ${
              isDark ? "bg-cyan-500/15" : "bg-cyan-300/45"
            }`}
          />
        </div>

        <div className="relative mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <RevealOnScroll className="text-center">
            <span
              className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] ${
                isDark
                  ? "bg-sky-500/15 text-sky-300"
                  : "bg-white text-sky-700 ring-1 ring-sky-100"
              }`}
            >
              Contact Capital BullWave
            </span>

            <h1
              className={`mt-4 sm:mt-6 font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Let's Start A Conversation
            </h1>

            <p
              className={`mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-8 ${
                isDark ? "text-slate-300" : "text-neutral-800"
              }`}
            >
              Whether you need market research, trading guidance, investment
              support, or have any business inquiry, our experts are ready to
              assist you with reliable and professional financial solutions.
            </p>

            <div
              className={`mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm ${
                isDark ? "text-slate-400" : "text-neutral-700"
              }`}
            >
              <span>Home</span>

              <FaArrowRight className="text-[10px] sm:text-xs opacity-60" />

              <span
                className={
                  isDark
                    ? "font-semibold text-sky-300"
                    : "font-semibold text-sky-700"
                }
              >
                Contact
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ------------ MAIN SECTION STARTS ------------ */}

      <div className="mx-auto py-8 sm:py-12 lg:py-14">

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
                className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] ${
                  isDark
                    ? "bg-sky-500/15 text-sky-300"
                    : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                }`}
              >
                Contact Information
              </span>

              {/* Heading */}

              <h2 className={`${heading} mt-4 sm:mt-6 text-xl sm:text-2xl lg:text-3xl font-bold`}>
                Reach Our Offices
              </h2>

              <p className={`${text} mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8`}>
                Capital BullWave operates from New Delhi and Dubai. Our team is
                available to assist with investment guidance, market research,
                trading support, and partnership enquiries.
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

                          {item.subtitle ? (
                            <p
                              className={`mt-1 text-xs sm:text-sm font-medium ${
                                isDark ? "text-sky-400/90" : "text-sky-600"
                              }`}
                            >
                              {item.subtitle}
                            </p>
                          ) : null}

                          {item.href ? (
                            <a
                              href={item.href}
                              className={`${text} mt-2 sm:mt-3 block break-words text-sm sm:text-base transition ${
                                  isDark
                                    ? "hover:text-sky-300"
                                    : "hover:text-sky-700"
                                }`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className={`${text} mt-2 sm:mt-3 break-words text-sm sm:text-base leading-6 sm:leading-7`}>
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

                  <div className="min-w-0">

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

              {/* Locations card removed — offices shown in contact cards + maps */}



            </div>

            {/* ================= RIGHT PANEL STARTS IN PART 3 ================= */}

            <div className="p-4 sm:p-8 lg:p-10">
              {/* ================= RIGHT PANEL ================= */}

            <span
              className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] ${
                isDark
                  ? "bg-sky-500/15 text-sky-300"
                  : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
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

              <div className="grid gap-5 sm:gap-6 xl:grid-cols-2">

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
                    onBlur={handleEmailBlur}
                    placeholder="Enter your authenticated email"
                    autoComplete="email"
                    inputMode="email"
                    className={input}
                    required
                  />

                </div>

              </div>

              {/* Phone & Subject */}

              <div className="grid gap-5 sm:gap-6 xl:grid-cols-2">

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
                    : "bw-gradient-btn text-white hover:shadow-[0_15px_35px_rgba(14,165,233,.35)]"
                }`}
              >
                <FaPaperPlane className="text-sm sm:text-base transition-transform cursor-pointer duration-300 group-hover:translate-x-1" />

                Send Message
              </button>

            </form>

              {/* ================= BULLWAVE RIDES ================= */}

              <div
                className={`mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border p-4 sm:p-6 ${
                  isDark
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <button
                    type="button"
                    onClick={() => setRidesOpen(true)}
                    className="flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-xl text-left transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:gap-4"
                    aria-haspopup="dialog"
                    aria-expanded={ridesOpen}
                    aria-label="Open BullWave Rides options — website or app"
                  >
                    <img
                      src={RideLogo}
                      alt=""
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-xl sm:rounded-2xl bg-black object-contain p-0.5 shadow-lg ring-1 ring-black/10"
                    />

                    <div className="min-w-0">
                      <p className={label}>Our Ride Booking App</p>

                      <h3 className={`${heading} mt-1 text-base sm:text-xl font-bold`}>
                        BullWave Rides
                      </h3>

                      <p className={`${text} mt-1.5 sm:mt-2 max-w-lg break-words text-xs sm:text-sm leading-5 sm:leading-6`}>
                        Experience fast, safe and affordable rides with BullWave
                        Rides. Tap to open the website or get the Android app.
                      </p>
                    </div>
                  </button>

                  <a
                    href="https://www.bullwaveclub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4 rounded-xl transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    aria-label="Visit BullWave Club"
                  >
                    <img
                      src={ClubLogo}
                      alt=""
                      className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-xl sm:rounded-2xl object-cover shadow-lg"
                    />
                    <div className="min-w-0">
                      <p className={label}>Community &amp; Club</p>
                      <h3 className={`${heading} mt-1 text-base sm:text-xl font-bold`}>
                        BullWave Club
                      </h3>
                      <p className={`${text} mt-1.5 sm:mt-2 max-w-lg break-words text-xs sm:text-sm leading-5 sm:leading-6`}>
                        Explore BullWave Club for community experiences and updates.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

            </div>


          </div>
        </div>

        {/* ================= GOOGLE MAP ================= */}

        <div
          className={`border-t ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div className="px-4 py-8 sm:px-8 sm:py-12 lg:px-10">

            <div className="text-center">

              <span
                className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] ${
                  isDark
                    ? "bg-sky-500/15 text-sky-300"
                    : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                }`}
              >
                Visit Our Offices
              </span>

              <h2 className={`${heading} mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-bold`}>
                Find Us On Google Maps
              </h2>

              <p className={`${text} mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base leading-6 sm:leading-8`}>
                Visit Capital BullWave in New Delhi or Dubai. Our team is
                available to assist with investment solutions, market research,
                and trading guidance.
              </p>

            </div>

            <div className="mt-6 sm:mt-10 grid gap-5 sm:gap-6 lg:grid-cols-2">
              <div
                className={`overflow-hidden rounded-2xl sm:rounded-3xl border shadow-xl ${
                  isDark ? "border-slate-700" : "border-slate-200"
                }`}
              >
                <div
                  className={`px-4 py-3 sm:px-5 sm:py-3.5 border-b ${
                    isDark
                      ? "border-slate-700 bg-slate-900/80"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <p className={label}>India</p>
                  <h3 className={`${heading} mt-1 text-base sm:text-lg font-semibold`}>
                    New Delhi Office
                  </h3>
                </div>
                <iframe
                  title="Capital BullWave New Delhi Office"
                  src="https://www.google.com/maps?q=Aggarwal+Millennium+Tower+2+Netaji+Subhash+Place+Delhi&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[240px] sm:h-[300px] lg:h-[360px] w-full border-0"
                />
              </div>

              <div
                className={`overflow-hidden rounded-2xl sm:rounded-3xl border shadow-xl ${
                  isDark ? "border-slate-700" : "border-slate-200"
                }`}
              >
                <div
                  className={`px-4 py-3 sm:px-5 sm:py-3.5 border-b ${
                    isDark
                      ? "border-slate-700 bg-slate-900/80"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <p className={label}>United Arab Emirates</p>
                  <h3 className={`${heading} mt-1 text-base sm:text-lg font-semibold`}>
                    Dubai Office
                  </h3>
                </div>
                <iframe
                  title="Capital BullWave Dubai Office"
                  src="https://www.google.com/maps?q=World+Trade+Centre+Sheikh+Rashid+Tower+Sheikh+Zayed+Road+Dubai&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[240px] sm:h-[300px] lg:h-[360px] w-full border-0"
                />
              </div>
            </div>

          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}

        <div
          className={`border-t ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div className="px-4 py-8 sm:px-8 sm:py-12 lg:px-10">

            <div className="text-center">

              <span
                className={`inline-flex rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] ${
                  isDark
                    ? "bg-sky-500/15 text-sky-300"
                    : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                }`}
              >
                Why Choose Us
              </span>

              <h2 className={`${heading} mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-bold`}>
                Trusted Research Support Across India
              </h2>

            </div>

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

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

        <div className="px-4 pb-8 sm:px-8 sm:pb-12 lg:px-10">

          <div
            className={`overflow-hidden rounded-2xl sm:rounded-[32px] px-5 py-8 sm:px-8 sm:py-12 text-center ${
              isDark
                ? "bg-gradient-to-r from-sky-700 to-cyan-800"
                : "bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500"
            }`}
          >

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Ready To Talk With Our Experts?
            </h2>

            <p className="mx-auto mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-8 text-sky-50">
              Whether you are a beginner or an experienced investor,
              our professionals are here to provide reliable market
              insights and personalized investment guidance.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-5">

              <a
                href="tel:+918796565234"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-sky-700 transition hover:scale-105"
              >
                Call Now
              </a>

              <a
                href="mailto:admin@capitalbullwave.com"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:scale-105"
              >
                Email Us
              </a>

            </div>

          </div>

        </div>

      </div>

      <RidesChoiceModal
        open={ridesOpen}
        onClose={closeRides}
        theme={isDark ? "dark" : "light"}
      />
    </div>

  );
};
