import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";

const faqSections = [
  {
    title: "Account & Trading Setup",
    items: [
      {
        question: "What trading platform is supported?",
        answer:
          "The service integrates directly with MetaTrader 5 (MT5) for trade execution and position management.",
      },
      {
        question: "What are the primary account tiers available?",
        answer:
          "Supported account tiers are Classic (from $100 minimum deposit), VIP (from $3,000), and ECN (from $5,000).",
      },
      {
        question: "Does it provide Copy Trading features?",
        answer:
          "Yes. The platform supports automated social and copy-trading strategies for mirroring experienced traders.",
      },
    ],
  },
  {
    title: "Fees & Charges",
    items: [
      {
        question: "What are the typical trading spreads?",
        answer:
          "Spreads vary by account type, starting from 1.6 pips on Classic accounts and reducing to 0.1 pips on ECN accounts.",
      },
      {
        question: "Are there any inactivity penalties?",
        answer:
          "Yes. A non-refundable $10 monthly inactivity fee applies if an account remains fully dormant for 30 consecutive days.",
      },
      {
        question: "Are there fees on withdrawals?",
        answer:
          "A fixed 10 EUR fee applies to bank wire withdrawals of 100 EUR or less.",
      },
    ],
  },
  {
    title: "Deposits & Fund Management",
    items: [
      {
        question: "What payment methods are supported?",
        answer:
          "Deposits can be made through credit/debit cards, international bank wires, SEPA transfers, and selected e-wallets.",
      },
      {
        question: "How long do deposit settlements take?",
        answer:
          "Card and e-wallet deposits settle in about 10 minutes, while international bank wires take 2 to 5 business days.",
      },
      {
        question: "Are client funds kept safe?",
        answer:
          "Client funds are held in segregated bank accounts to keep investment capital separate from corporate funds.",
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
      className={`mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:px-8 lg:px-10 ${
        dark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <span
          className={`inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] ${
            dark
              ? "bg-blue-900/40 text-blue-300"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          FAQ
        </span>

        <h2
          className={`mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          Account, fees, and fund management questions answered clearly.
        </h2>

        <p
          className={`mx-auto mt-5 max-w-3xl text-base leading-8 sm:text-lg ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Browse the most important details about trading setup, charges,
          deposits, and capital protection practices.
        </p>
      </div>

      <div className="space-y-8">
      {faqSections.map((section) => (
        <div
          key={section.title}
          className={`overflow-hidden rounded-3xl border p-5 sm:p-8 transition-all duration-300 ${
            dark
              ? "border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
              : "border-sky-200 bg-gradient-to-br from-sky-50 via-sky-100 to-blue-50 shadow-[0_20px_45px_rgba(59,130,246,0.12)]"
          }`}
        >
            <h3
              className={`mb-6 text-xl font-bold sm:text-2xl ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              {section.title}
            </h3>

            <div className="space-y-4">
              {section.items.map((item, index) => {
                const key = `${section.title}-${index}`;
                const open = activeItem === key;

                return (
                  <button
                      key={key}
                      onClick={() => toggleItem(key)}
                      className={`group w-full rounded-2xl border p-5 transition-all duration-300 ${
                        open
                          ? dark
                            ? "border-blue-500 bg-gradient-to-r from-blue-950/60 to-slate-900"
                            : "border-blue-500 bg-white shadow-md"
                          : dark
                          ? "border-slate-700 bg-slate-800 hover:border-blue-500 hover:bg-slate-750"
                          : "border-sky-200 bg-white hover:border-blue-400 hover:bg-sky-50"
                      }`}
                    >
                    <div className="flex items-center justify-between gap-4">
                      <h4
                        className={`text-left text-base font-semibold sm:text-lg ${
                          dark ? "text-slate-100" : "text-slate-900"
                        }`}
                      >
                        {item.question}
                      </h4>

                      <FaChevronDown
                        className={`h-5 w-5 transition-all duration-300 ${
                          open ? "rotate-180 text-blue-500" : ""
                        } ${dark ? "text-slate-400" : "text-slate-500"}`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open ? "mt-4 max-h-40" : "max-h-0"
                      }`}
                    >
                     <p
                        className={`pt-4 text-sm leading-7 sm:text-base ${
                          dark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {item.answer}
                      </p>
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

