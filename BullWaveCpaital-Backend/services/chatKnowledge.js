/**
 * Local knowledge matcher — used when OpenAI is unavailable
 * or as a fast path for common FAQs.
 */
import { companyData, bullWaveRidesData } from "../data/companyData.js";

const c = companyData.contact;

function formatPlans() {
  return companyData.plans
    .map(
      (plan) =>
        `• ${plan.name} — ${plan.price}\n  ${plan.description}\n  ${plan.features
          .map((f) => `  - ${f}`)
          .join("\n")}`
    )
    .join("\n\n");
}

function formatContact() {
  return [
    `📧 Email: ${c.email}`,
    `📞 Phone: ${c.phone}`,
    `💬 WhatsApp: ${c.whatsapp}`,
    `📍 Office: ${c.office}`,
    `🕒 Hours: ${c.businessHours}`,
    c.supportEmail ? `🛟 Support: ${c.supportEmail}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

const knowledgeBase = [
  {
    keywords: [
      "service",
      "services",
      "what do you offer",
      "offerings",
      "research",
    ],
    answer: () =>
      `Capital BullWave provides:\n\n${companyData.services
        .map((s) => `• ${s}`)
        .join("\n")}\n\nMarkets covered: ${companyData.markets.supported.join(
        ", "
      )}.`,
  },
  {
    keywords: [
      "pricing",
      "price",
      "plan",
      "plans",
      "subscription",
      "cost",
      "fee",
      "charges",
    ],
    answer: () =>
      `Here are our current subscription plans:\n\n${formatPlans()}\n\nFor enrolment, contact us:\n${formatContact()}`,
  },
  {
    keywords: [
      "contact",
      "email",
      "phone",
      "whatsapp",
      "address",
      "office",
      "location",
      "reach",
    ],
    answer: () =>
      `You can reach Capital BullWave here:\n\n${formatContact()}`,
  },
  {
    keywords: ["about", "company", "who are you", "bullwave", "capital"],
    answer: () =>
      `${companyData.company.name}\n${companyData.company.tagline}\n\n${companyData.company.description}\n\nStrengths:\n${companyData.strengths
        .map((s) => `• ${s}`)
        .join("\n")}`,
  },
  {
    keywords: [
      "funding",
      "funded",
      "capital program",
      "skilled trader",
      "profit share",
      "70%",
      "30%",
    ],
    answer: () => {
      const h = companyData.homeTrading;
      return `${h.title}\n${h.tagline}\n\n${h.description}\n\nProcess:\n${h.process
        .map((p) => `${p.step}. ${p.title} — ${p.description}`)
        .join("\n")}\n\nProfit split: Company ${h.profitSplit.companyShare} / Trader ${h.profitSplit.traderShare}\n\n${h.disclaimer}`;
    },
  },
  {
    keywords: ["refund", "cancellation", "cancel", "money back"],
    answer: () =>
      `Refund & Cancellation Policy highlights:\n\n• Cancellations may be requested before a service starts.\n• Refunds may apply for duplicate payments, technical errors, or when we cannot deliver the service.\n• Fees for services already rendered are generally non-refundable.\n\nEmail refund requests to: ${c.supportEmail || c.email}\n\nFull policy: /refund-policy`,
  },
  {
    keywords: ["kyc", "aml", "verification", "identity"],
    answer: () =>
      `We maintain a KYC & AML framework for identity verification, due diligence, sanctions screening, and transaction monitoring.\n\nIndividuals may need photo ID, PAN, address proof, and contact details.\n\nCompliance email: ${c.complianceEmail || c.email}\n\nFull policy: /kyc-aml-policy`,
  },
  {
    keywords: [
      "grievance",
      "complaint",
      "support",
      "help",
      "issue",
      "problem",
    ],
    answer: () =>
      `To raise a grievance, email: ${c.supportEmail || c.email}\n\nInclude your name, email, phone, reference number (if any), and a clear description of the issue.\n\nWe aim to acknowledge within 2 business days and resolve most matters in 7–15 business days.\n\nFull policy: /grievance-policy`,
  },
  {
    keywords: ["privacy", "data", "personal information"],
    answer: () =>
      `${companyData.privacyPolicy.summary}\n\nWe may collect: ${companyData.privacyPolicy.informationCollected.join(
        ", "
      )}.\n\nPrivacy queries: ${c.email}\nFull policy: /privacy-policy`,
  },
  {
    keywords: ["terms", "conditions", "tnc"],
    answer: () =>
      `Our Terms & Conditions cover eligibility (18+), account security, subscription fees, risk disclosures, and governing law (India — Delhi jurisdiction).\n\nFull terms: /terms\nEmail: ${c.email}`,
  },
  {
    keywords: ["market", "markets", "nifty", "commodity", "mcx", "nse", "bse"],
    answer: () =>
      `We cover: ${companyData.markets.supported.join(
        ", "
      )}.\n\nCommodities research may include: ${companyData.markets.commodities.join(
        ", "
      )}.`,
  },
  {
    keywords: [
      "ride",
      "rides",
      "taxi",
      "cab",
      "driver",
      "bullwave rides",
      "booking",
      "trip",
    ],
    answer: () =>
      `${bullWaveRidesData.company.name} — ${bullWaveRidesData.company.tagline}\n\n${bullWaveRidesData.company.description}\n\nWebsite: ${bullWaveRidesData.company.website}\n\nServices:\n${bullWaveRidesData.services
        .slice(0, 8)
        .map((s) => `• ${s}`)
        .join("\n")}`,
  },
  {
    keywords: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
    answer: () =>
      `Hello! Welcome to Capital BullWave.\n\nI can help with:\n• Services & markets\n• Pricing & plans\n• Skilled Trader Funding Program\n• Contact details\n• Policies (Refund, KYC/AML, Grievance)\n\nWhat would you like to know?`,
  },
];

export function getLocalReply(message = "") {
  const text = String(message).toLowerCase().trim();
  if (!text) {
    return "Please type a question about Capital BullWave services, plans, or contact details.";
  }

  let best = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (text.includes(keyword.toLowerCase())) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (best && bestScore > 0) {
    return best.answer();
  }

  return (
    `I couldn't find a direct match for that.\n\nTry asking about Services, Pricing, Funding Program, Contact, Refund, KYC, or Grievance.\n\nOr reach us directly:\n${formatContact()}`
  );
}
