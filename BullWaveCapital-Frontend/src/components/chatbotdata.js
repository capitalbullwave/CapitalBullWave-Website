/**
 * Frontend local knowledge — used when the API is unreachable.
 */
export const chatbotData = [
  {
    keywords: ["service", "services", "research", "offer"],
    answer:
      "Capital BullWave provides equity research, trading guidance, investor education, risk management, technical analysis, Nifty/Bank Nifty insights, and commodity research across NSE, BSE, F&O, and MCX.",
  },
  {
    keywords: ["pricing", "price", "plan", "plans", "cost", "subscription", "fee"],
    answer:
      "Our plans:\n\n• Core / Starter Plan — ₹4,999 / month\n  12–15 equity recommendations, momentum selection, buy & sell guidance\n\n• Elite Plan / Pro Trader — ₹9,999 / month\n  Nifty & Bank Nifty F&O advisory, daily market direction, risk levels\n\n• Elite Investor Plan — ₹7,999 / month\n  1-on-1 portfolio consultation, premium reports, long-term strategy\n\nContact: admin@capitalbullwave.com | +91 8796565234",
  },
  {
    keywords: ["contact", "email", "phone", "address", "office", "whatsapp", "reach"],
    answer:
      "Contact Capital BullWave:\n\n📧 admin@capitalbullwave.com\n📞 +91 8796565234\n💬 WhatsApp: +91 9616212526\n📍 Aggarwal Millennium Tower 2, Office No. 1275 (12th Floor), Netaji Subhash Place, Pitampura, New Delhi - 110034\n🕒 Mon–Fri | 9:00 AM – 6:30 PM",
  },
  {
    keywords: ["about", "company", "who", "bullwave"],
    answer:
      "Capital BullWave Private Limited is a Delhi-based research advisory firm offering professional market research, trading guidance, and investor education so clients can make informed financial decisions.",
  },
  {
    keywords: ["funding", "funded", "capital", "skilled", "70%", "30%", "profit"],
    answer:
      "Skilled Trader Funding Program:\nGot the skill? We'll bring the capital.\n\n1. Reach out and share your strategy\n2. Take our skills assessment\n3. Trade our capital if you pass\n\nProfit split: Company 70% / Trader 30%\nNo personal capital required. Approval and profits are not guaranteed.",
  },
  {
    keywords: ["refund", "cancel", "cancellation"],
    answer:
      "Refund requests may apply for duplicate payments, technical errors, or if we cannot deliver the service. Fees for services already rendered are generally non-refundable.\n\nEmail: support@capitalbullwave.com\nFull policy: /refund-policy",
  },
  {
    keywords: ["kyc", "aml", "verification"],
    answer:
      "We follow KYC & AML checks including ID verification, due diligence, and monitoring.\n\nCompliance: compliance@capitalbullwave.com\nFull policy: /kyc-aml-policy",
  },
  {
    keywords: ["grievance", "complaint", "support", "help", "issue"],
    answer:
      "Raise a grievance at support@capitalbullwave.com with your name, email, phone, reference (if any), and issue details.\n\nAcknowledgement: within 2 business days\nTypical resolution: 7–15 business days\nFull policy: /grievance-policy",
  },
  {
    keywords: ["hello", "hi", "hey", "namaste"],
    answer:
      "Hello! I'm the Capital BullWave assistant.\nAsk me about Services, Pricing, Funding Program, Contact, or Policies.",
  },
];

export function getLocalBotReply(userMessage) {
  const text = String(userMessage || "").toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const item of chatbotData) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (text.includes(keyword.toLowerCase())) score += keyword.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (best && bestScore > 0) return best.answer;

  return "I couldn't find that exact answer.\n\nTry: Services, Pricing, Funding, Contact, Refund, KYC, or Grievance.\n\nOr email admin@capitalbullwave.com / call +91 8796565234.";
}
