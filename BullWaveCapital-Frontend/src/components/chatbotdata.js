/**
 * Frontend local knowledge — used when the API is unreachable.
 */
export const chatbotData = [
  {
    keywords: ["service", "services", "research", "offer"],
    answer:
      "**Services:** Capital BullWave provides equity research, trading guidance, investor education, risk management, technical analysis, Nifty/Bank Nifty insights, and commodity research across NSE, BSE, F&O, and MCX.",
  },
  {
    keywords: ["pricing", "price", "plan", "plans", "cost", "subscription", "fee"],
    answer:
      "**Our Plans:**\n\n• **Core / Starter Plan** — ₹4,999 / month\n  12–15 equity recommendations, momentum selection, buy & sell guidance\n\n• **Elite Plan / Pro Trader** — ₹9,999 / month\n  Nifty & Bank Nifty F&O advisory, daily market direction, risk levels\n\n• **Elite Investor Plan** — ₹7,999 / month\n  1-on-1 portfolio consultation, premium reports, long-term strategy\n\n**Email:** admin@capitalbullwave.com\n**Phone:** +91 8796565234",
  },
  {
    keywords: ["contact", "email", "phone", "address", "office", "whatsapp", "reach"],
    answer:
      "**Contact Capital BullWave:**\n\n**Email:** admin@capitalbullwave.com\n**Phone:** +91 8796565234\n**WhatsApp:** +91 9616212526\n**Office:** Aggarwal Millennium Tower 2, Office No. 1275 (12th Floor), Netaji Subhash Place, Pitampura, New Delhi - 110034\n**Business Hours:** Monday to Friday | 9:00 AM – 6:30 PM",
  },
  {
    keywords: ["about", "company", "who", "bullwave", "why choose", "advantages"],
    answer:
      "**Why Choose Capital BullWave:**\n\n• **Expertise:** Specialized in equity, derivatives, and commodity market research with technical analysis.\n• **Comprehensive Services:** Swing trading, intraday trading, portfolio guidance, risk management, and investor education.\n• **Plans for Different Traders:** Core and Elite plans tailored for investors and traders.\n• **Skilled Trader Funding Program:** Trade with company capital after skill assessment, with profit sharing.\n• **Transparency & Independence:** Clear market insights without personalized investment advice.\n• **Support & Accessibility:** Delhi-based support via email, phone, WhatsApp, and office visits.\n\n**Email:** admin@capitalbullwave.com\n**Phone/WhatsApp:** +91-9616212526\n**Office:** Aggarwal Millennium Tower 2, Netaji Subhash Place, Pitampura, New Delhi - 110034\n**Business Hours:** Monday to Friday | 9:00 AM – 6:30 PM",
  },
  {
    keywords: ["funding", "funded", "capital", "skilled", "70%", "30%", "profit"],
    answer:
      "**Skilled Trader Funding Program:**\nGot the skill? We'll bring the capital.\n\n1. Reach out and share your strategy\n2. Take our skills assessment\n3. Trade our capital if you pass\n\n**Profit Split:** Company 70% / Trader 30%\nNo personal capital required. Approval and profits are not guaranteed.",
  },
  {
    keywords: ["refund", "cancel", "cancellation"],
    answer:
      "**Refund Policy:** Refund requests may apply for duplicate payments, technical errors, or if we cannot deliver the service. Fees for services already rendered are generally non-refundable.\n\n**Email:** admin@capitalbullwave.com\n**Policy:** /refund-policy",
  },
  {
    keywords: ["kyc", "aml", "verification"],
    answer:
      "**KYC & AML:** We follow identity verification, due diligence, and monitoring procedures.\n\n**Compliance:** admin@capitalbullwave.com\n**Policy:** /kyc-aml-policy",
  },
  {
    keywords: ["grievance", "complaint", "support", "help", "issue"],
    answer:
      "**Grievance Redressal:** Email admin@capitalbullwave.com with your name, email, phone, reference (if any), and issue details.\n\n**Acknowledgement:** within 2 business days\n**Typical Resolution:** 7–15 business days\n**Policy:** /grievance-policy",
  },
  {
    keywords: ["hello", "hi", "hey", "namaste"],
    answer:
      "Hello! I'm the **Capital BullWave** assistant.\nAsk me about **Services**, **Pricing**, **Funding Program**, **Contact**, or **Policies**.",
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

  return "I couldn't find that exact answer.\n\nTry: **Services**, **Pricing**, **Funding**, **Contact**, **Refund**, **KYC**, or **Grievance**.\n\n**Email:** admin@capitalbullwave.com\n**Phone:** +91 8796565234";
}
