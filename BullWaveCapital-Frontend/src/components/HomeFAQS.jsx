import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqSections = [
  {
    title: "Research & Advisory",
    items: [
      {
        question: "What services does Capital BullWave provide?",
        answer:
          "We provide stock market research, investment guidance, and financial advisory services focused on Indian equities, swing trading ideas, and long-term portfolio planning.",
      },
      {
        question: "Who are your advisory plans designed for?",
        answer:
          "Our plans serve equity swing traders, active F&O participants focused on Nifty and Bank Nifty, and long-term investors seeking portfolio reviews and research reports.",
      },
      {
        question: "Do you manage client trading accounts?",
        answer:
          "No. Capital BullWave provides research and advisory support. Clients retain full control of their brokerage accounts and execute trades independently.",
      },
    ],
  },
  {
    title: "Plans & Engagement",
    items: [
      {
        question: "How do subscription plans work?",
        answer:
          "Clients choose a monthly advisory plan based on their goals. Each plan includes structured recommendations, market updates, and guidance aligned with that tier.",
      },
      {
        question: "What is the difference between Core and Elite plans?",
        answer:
          "The Core plan focuses on equity swing and positional ideas. Elite plans add advanced F&O guidance, daily market direction updates, or premium portfolio consultation depending on the tier.",
      },
      {
        question: "How do I get started?",
        answer:
          "Contact our Delhi office through the website contact form, email, or phone. Our team will help you select the plan that best matches your experience and risk profile.",
      },
    ],
  },
  {
    title: "Risk & Office",
    items: [
      {
        question: "Does market research guarantee returns?",
        answer:
          "No. All investments carry market risk. Our research and advisory frameworks are designed to support informed decisions, not to promise or guarantee profits.",
      },
      {
        question: "Where is Capital BullWave located?",
        answer:
          "Our head office is at Aggarwal Millennium Tower 2, Office No. 1275 (12th Floor), Netaji Subhash Place, Pitampura, New Delhi - 110034.",
      },
      {
        question: "How can I reach support?",
        answer:
          "You can reach us at admin@capitalbullwave.com or +91 8796565234 during business hours for plan queries, research clarifications, and general support.",
      },
    ],
  },
];

export default function HomeFAQS({ theme }) {
  const dark = theme === "dark";
  const [activeItem, setActiveItem] = useState("");

  const toggleItem = (key) => {
    setActiveItem((prev) => (prev === key ? "" : key));
  };

  return (
    <section
      id="faq"
      className={`w-full scroll-mt-24 py-12 sm:py-16 lg:py-20 ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <span
          className={`inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em]
          ${
            dark
              ? "bg-sky-500/15 text-sky-300"
              : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
          }`}
        >
          FAQ
        </span>

        <h2
          className={`mt-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          Research, plans, and advisory questions answered clearly.
        </h2>

        <p
          className={`mx-auto mt-4 max-w-3xl text-base leading-7 sm:text-lg ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Browse the most important details about our Delhi-based research
          advisory, subscription plans, and how we support informed investing.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {faqSections.map((section) => (
          <div
            key={section.title}
            className={`rounded-2xl p-5 sm:p-7
            ${
              dark
                ? "bg-slate-900 ring-1 ring-slate-800"
                : "bg-white ring-1 ring-sky-100 shadow-sm shadow-sky-100/80"
            }`}
          >
            <h3
              className={`mb-4 text-lg font-bold sm:text-xl ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              {section.title}
            </h3>

            <div
              className={`divide-y ${
                dark ? "divide-slate-800" : "divide-sky-100"
              }`}
            >
              {section.items.map((item, index) => {
                const key = `${section.title}-${index}`;
                const open = activeItem === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleItem(key)}
                    className="group w-full py-4 text-left transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4
                        className={`text-base font-semibold sm:text-lg ${
                          dark ? "text-slate-100" : "text-slate-900"
                        }`}
                      >
                        {item.question}
                      </h4>

                      <FaChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                          open ? "rotate-180 text-sky-500" : ""
                        } ${dark ? "text-slate-400" : "text-slate-500"}`}
                      />
                    </div>

                    <div
                      className={`grid transition-all duration-350 ease-out ${
                        open
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {open && (
                          <p
                            className={`faq-answer-enter pt-1 text-sm leading-7 sm:text-base ${
                              dark ? "text-slate-400" : "text-slate-600"
                            }`}
                          >
                            {item.answer}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
