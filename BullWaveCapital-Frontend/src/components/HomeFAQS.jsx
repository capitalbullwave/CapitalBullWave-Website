import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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

const HomeFAQS = () => {
  const [activeItem, setActiveItem] = useState("");

  const toggleItem = (key) => {
    setActiveItem((current) => (current === key ? "" : key));
  };

  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">
          FAQ
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Account, fees, and fund management questions answered clearly.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Browse the most important details about trading setup, charges, deposits, and capital protection practices.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {faqSections.map((section) => (
          <div
            key={section.title}
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-slate-900">{section.title}</h3>

            <div className="mt-6 space-y-4">
              {section.items.map((item, index) => {
                const itemKey = `${section.title}-${index}`;
                const open = activeItem === itemKey;

                return (
                  <button
                    key={itemKey}
                    type="button"
                    onClick={() => toggleItem(itemKey)}
                    className={`group w-full rounded-[24px] border p-5 text-left transition duration-300 ${
                      open ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white hover:border-blue-500 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-4">
                      <span className="text-left text-base font-semibold text-slate-900">
                        {item.question}
                      </span>
                      <FaChevronDown
                        className={`h-5 w-5 text-slate-500 transition duration-300 ${
                          open ? "rotate-180 text-blue-600" : "rotate-0"
                        }`}
                      />
                    </div>
                    <div className={`mt-4 overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"}`}>
                      <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
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
};

export default HomeFAQS