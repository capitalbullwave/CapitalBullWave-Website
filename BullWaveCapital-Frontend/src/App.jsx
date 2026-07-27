import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Market from "./pages/Market";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import SiteMap from "./pages/SiteMap";
import Disclaimer from "./pages/Disclaimer";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "./components/WhatsAppButton";

const LIGHT_BG =
  "radial-gradient(ellipse 100% 70% at 100% -20%, rgba(56,189,248,0.55), transparent 58%), radial-gradient(ellipse 80% 55% at 0% 0%, rgba(125,211,252,0.5), transparent 52%), linear-gradient(180deg, #ffffff 0%, #e0f2fe 38%, #bae6fd 100%)";

const DARK_BG =
  "radial-gradient(ellipse 90% 60% at 90% -10%, rgba(14,165,233,0.28), transparent 55%), radial-gradient(ellipse 70% 50% at 5% 15%, rgba(56,189,248,0.16), transparent 50%), linear-gradient(180deg, #020617 0%, #0b1224 40%, #082f49 100%)";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("bullwave-theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("bullwave-theme", theme);
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
    root.style.colorScheme = theme === "dark" ? "dark" : "light";
    root.style.background = theme === "dark" ? DARK_BG : LIGHT_BG;
    root.style.backgroundAttachment = "fixed";
    document.body.style.background = "transparent";
    document.body.style.color = theme === "dark" ? "#f8fafc" : "#000000";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <>
      <Toaster
        position="top-right"
        gutter={10}
        toastOptions={{
          duration: 4000,
          style: {
            background: isDark ? "#0f172a" : "#ffffff",
            color: isDark ? "#fff" : "#000",
            borderRadius: "14px",
            padding: "16px",
            fontSize: "15px",
            border: isDark ? "1px solid #0ea5e9" : "1px solid #7dd3fc",
            boxShadow: "0 12px 30px rgba(14,165,233,0.18)",
          },
          success: {
            iconTheme: { primary: "#22c55e", secondary: "#fff" },
          },
          error: {
            iconTheme: { primary: "#ef4444", secondary: "#fff" },
          },
        }}
      />

      <div
        className={`app-theme-shell ${isDark ? "theme-dark" : "theme-light"}`}
        style={{
          minHeight: "100vh",
          background: isDark ? DARK_BG : LIGHT_BG,
          color: isDark ? "#f8fafc" : "#000000",
        }}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <ScrollToTop />

        <main className="site-main mx-auto min-h-screen w-full max-w-[1680px] px-2 sm:px-3 md:px-4 lg:px-5 pt-[4.75rem] pb-5 sm:pt-[5.75rem] sm:pb-8">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/services" element={<Services theme={theme} />} />
            <Route path="/markets" element={<Market theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy theme={theme} />}
            />
            <Route path="/terms" element={<TermsCondition theme={theme} />} />
            <Route path="/site-map" element={<SiteMap theme={theme} />} />
            <Route path="/disclaimer" element={<Disclaimer theme={theme} />} />
          </Routes>
        </main>

        <WhatsAppButton />
        <ChatWidget theme={theme} />
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default App;
