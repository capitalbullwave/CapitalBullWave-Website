export const companyData = {

  company: {
    name: "Capital Bull Wave",
    tagline:
      "Professional Market Research, Trading Guidance & Investor Education",

    headquarters: {
      city: "Delhi",
      offices: [
        {
          location: "Netaji Subhash Place",
          building: "Aggarwal Millennium Tower 2",
          offices: [
            "Office No. 1275 (12th Floor)",
          ],
        },
      ],
    },

    description:
      "Capital Bull Wave is a Delhi-based research advisory company providing stock market research, trading guidance, technical analysis, investor education, and risk management for Indian financial markets.",
  },

  services: [
    "Equity Market Research",
    "Trading Guidance",
    "Swing Trading",
    "Intraday Trading",
    "Equity Delivery",
    "Portfolio Guidance",
    "Risk Management",
    "Investor Education",
    "Technical Analysis",
    "Market Research",
    "Commodity Research",
    "Support & Resistance Analysis",
    "Market Outlook",
    "Nifty Analysis",
    "Bank Nifty Analysis",
  ],

  markets: {
    supported: [
      "NSE",
      "BSE",
      "Equity Cash",
      "Futures & Options",
      "MCX Commodities",
    ],

    commodities: [
      "Gold",
      "Silver",
      "Crude Oil",
    ],
  },

  plans: [
    {
      name: "Core Plan",

      price: "₹4,999/month",

      suitableFor: [
        "Equity Investors",
        "Swing Traders",
        "Delivery Investors",
      ],

      features: [
        "12–15 Monthly Research Calls",
        "Swing Trading Ideas",
        "Delivery Stock Recommendations",
        "Long-term Investment Opportunities",
      ],
    },

    {
      name: "Elite Plan",

      price: "₹7,999/month",

      suitableFor: [
        "Derivative Traders",
        "Nifty Traders",
        "Bank Nifty Traders",
      ],

      features: [
        "Everything in Core Plan",
        "Nifty Futures Analysis",
        "Bank Nifty Analysis",
        "Daily Market Outlook",
        "Weekly Market Outlook",
        "Trend Analysis",
        "Reversal Levels",
      ],
    },
  ],

  // Skilled Trader Funding Program — powers the HomeTrading section on the homepage
  homeTrading: {
    title: "Skilled Trader Funding Program",
    tagline: "Got the skill? We'll bring the capital.",

    description:
      "For individuals who know how to trade but don't have sufficient capital to invest. Applicants who pass our evaluation are provided funded capital to trade, with profits shared between the company and the trader.",

    eligibility: [
      "Basic knowledge of trading and technical analysis",
      "No personal capital required",
      "Willingness to complete a skills assessment",
    ],

    process: [
      {
        step: 1,
        title: "You reach out",
        description:
          "The applicant contacts Capital Bull Wave through the Contact page and shares their trading background and strategy.",
      },
      {
        step: 2,
        title: "You take the test",
        description:
          "Capital Bull Wave evaluates the applicant's trading skill through a structured assessment.",
      },
      {
        step: 3,
        title: "You trade our capital",
        description:
          "Applicants who pass the assessment are provided funded capital to trade under a profit-sharing arrangement.",
      },
    ],

    profitSplit: {
      companyShare: "70%",
      traderShare: "30%",
      note:
        "Profit split applies only after an applicant has passed the skills assessment and been approved for funding.",
    },

    disclaimer:
      "Participation in the Skilled Trader Funding Program does not guarantee approval, funding, or profits. All trading involves risk, including the risk of loss.",

    contactPage: "/contact",
  },

  strengths: [
    "Professional Market Research",
    "Risk Management",
    "Investor Education",
    "Independent Analysis",
    "Transparent Recommendations",
    "Technical Research",
  ],

  faq: [
   /* {
      question: "Is Capital Bull Wave SEBI Registered?",
      answer:
        "Yes. Capital Bull Wave is a SEBI Registered Research Analyst (Registration No. INH000013253).",
    },
    */
   
    {
      question: "Which markets do you cover?",
      answer:
        "We provide research for NSE, BSE, Equity, Futures & Options, and MCX Commodity markets.",
    },

    {
      question: "Do you provide investment advice?",
      answer:
        "We provide market research and educational guidance only. We do not provide personalized investment advice.",
    },

    {
      question: "What services do you provide?",
      answer:
        "Market research, trading guidance, technical analysis, risk management, investor education, and commodity research.",
    },

    {
      question: "What is the Skilled Trader Funding Program?",
      answer:
        "It's a program for individuals who know how to trade but don't have capital to invest. Applicants contact us, complete a skills assessment, and if they pass, we provide funded capital to trade — profits are shared 70% to Capital Bull Wave and 30% to the trader.",
    },
  ],

  restrictions: [
    "Do not provide personalized investment advice.",
    "Do not guarantee profits.",
    "Do not predict future market prices.",
    "Do not recommend stocks based on a user's financial condition.",
  ],

  contact: {
    email: "admin@capitalbullwave.com",

    phone: "+91-9616212526",

    whatsapp: "+91-9616212526",

    office:
      "Aggarwal Millennium Tower 2, Netaji Subhash Place, Pitampura, New Delhi - 110034",

    businessHours:
      "Monday to Friday | 9:00 AM – 6:30 PM",

    country: "India",

    support:
      "Users can contact Capital Bull Wave through the Contact page, email, phone, or WhatsApp.",
  },

  website: {
    homepage: "/",
    about: "/about",
    services: "/services",
    plans: "/plans",
    contact: "/contact",
  },

  privacyPolicy: {
    effectiveDate: "Current",

    summary:
      "Capital Bull Wave respects your privacy and is committed to protecting the personal information you voluntarily provide through this website.",

    informationCollected: [
      "Name",
      "Email Address",
      "Phone Number (optional)",
      "Messages submitted through the Contact Form",
    ],

    purposes: [
      "Responding to customer enquiries",
      "Providing information about company services",
      "Customer support",
      "Sending responses to contact requests",
    ],

    storage:
      "Information submitted through the contact form is processed securely and used only for responding to customer enquiries.",

    sharing:
      "Capital Bull Wave does not sell or share personal information with third parties except where required by applicable law.",

    retention:
      "Information is retained only for as long as necessary to respond to customer enquiries or comply with applicable legal obligations.",

    userRights: [
      "Request correction of submitted information",
      "Request deletion where legally permitted",
      "Contact us regarding privacy concerns",
    ],

    security: [
      "Secure communication channels",
      "Administrative safeguards",
      "Industry-standard security practices",
    ],

    thirdPartyServices: [
      "SendGrid (Email Delivery)",
      "OpenAI (AI Chat Assistant)",
    ],

    contact: {
      email: "admin@capitalbullwave.com",
      office:
        "Aggarwal Millennium Tower 2, Netaji Subhash Place, Pitampura, New Delhi - 110034",
    },
  },

    disclaimer: {
        investmentRisk:
            "Capital Bull Wave does not guarantee profits or investment returns. Investments are subject to market risks.",

        marketResearch:
            "Research reports, recommendations and analysis are provided for educational and informational purposes only.",

        investorResponsibility:
            "Investment decisions remain the sole responsibility of the investor.",

        payment:
            "Payments should only be made using official company banking channels.",

        noGuarantee: [
            "No Guaranteed Returns",
            "No Profit Assurance",
            "No Market Prediction Guarantee",
        ],

        aiRestrictions: [
            "The AI assistant cannot recommend stocks.",
            "The AI assistant cannot provide personalized investment advice.",
            "The AI assistant cannot promise profits.",
            "The AI assistant cannot execute trades.",
        ],

        riskWarning:
            "Investments and leveraged financial products involve significant risks including partial or complete loss of capital.",

        legalAdvice:
            "Users should seek independent financial, tax or legal advice before making investment decisions.",

        contactEmail: "admin@capitalbullwave.com",
    },

    assistantRules: [
        "Answer only questions related to Capital Bull Wave.",
        "Use only the information available in companyData.",
        "Never invent facts.",
        "Never provide personalized investment advice.",
        "Never recommend buying or selling stocks.",
        "Never guarantee profits.",
        "Never disclose internal information.",
        "Be polite and professional.",
        "If information is unavailable, ask the user to contact Capital Bull Wave.",
        "If asked about the Skilled Trader Funding Program, only share the eligibility, process, and profit split details in companyData.homeTrading. Do not guarantee approval or profits.",
    ],

};

export const bullWaveRidesData = {
  company: {
    name: "BullWave Rides",
    tagline: "Safe, Fast & Reliable Ride Booking Platform",

    description:
      "BullWave Rides is an intelligent ride-booking platform developed to provide safe, affordable and reliable transportation. Users can instantly book rides, schedule trips, track drivers in real time and enjoy secure digital payments.",

    website: "https://bullwaverides.com",

    country: "India",

    platform: [
      "Android App",
      "iOS App",
      "Driver App",
      "Customer App",
      "Admin Dashboard",
    ],
  },

  services: [
    "Instant Ride Booking",
    "Scheduled Ride Booking",
    "Local Rides",
    "Outstation Trips",
    "Airport Pickup",
    "Airport Drop",
    "Corporate Travel",
    "Driver Registration",
    "Live Ride Tracking",
    "Digital Payments",
    "Customer Support",
  ],

  features: {
    rider: [
      "Book rides instantly",
      "Live GPS Tracking",
      "Fare Estimation",
      "OTP Verification",
      "Ride History",
      "Trip Sharing",
      "Emergency SOS",
      "Wallet Payments",
      "Promo Codes",
      "Ratings & Reviews",
    ],

    driver: [
      "Accept Ride Requests",
      "Online / Offline Mode",
      "Navigation",
      "Daily Earnings",
      "Trip History",
      "Wallet",
      "Withdrawal",
      "Document Verification",
    ],

    admin: [
      "Manage Drivers",
      "Manage Customers",
      "Manage Rides",
      "Analytics",
      "Reports",
      "Payment Management",
      "Notifications",
    ],
  },

  rideTypes: [
    "Bike",
    "Mini",
    "Sedan",
    "SUV",
  ],

  payments: [
    "Cash",
    "UPI",
    "Credit Card",
    "Debit Card",
    "Wallet",
  ],

  safety: [
    "Verified Drivers",
    "OTP Ride Verification",
    "Live Tracking",
    "Emergency SOS",
    "Trip Sharing",
  ],

  driverRegistration: {
    requiredDocuments: [
      "Driving Licence",
      "RC",
      "Insurance",
      "PUC",
      "Aadhaar",
      "PAN",
      "Bank Account",
    ],

    process: [
      "Download Driver App",
      "Register",
      "Upload Documents",
      "Verification",
      "Approval",
      "Start Driving",
    ],
  },

  faq: [
    {
      question: "What is BullWave Rides?",
      answer:
        "BullWave Rides is a ride-booking platform that connects riders with nearby verified drivers.",
    },
    {
      question: "How can I book a ride?",
      answer:
        "Open the app, enter your pickup and destination, choose a vehicle and confirm your booking.",
    },
    {
      question: "Can I become a driver?",
      answer:
        "Yes. Download the Driver App, upload the required documents and complete verification.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Support is available through the BullWave Rides application and official support channels.",
    },
  ],
};