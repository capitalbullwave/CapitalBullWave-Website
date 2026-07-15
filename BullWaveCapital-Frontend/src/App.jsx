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


function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("bullwave-theme") || "light";
  });


  useEffect(() => {
    localStorage.setItem("bullwave-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Toaster
        position="top-right"
        gutter={10}
        toastOptions={{
          duration: 4000,

          style: {
            background: "#0f172a",
            color: "#fff",
            borderRadius: "14px",
            padding: "16px",
            fontSize: "15px",
            border: "1px solid #2563eb",
          },

          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <div
        className={`min-h-screen ${
          theme === "dark" ? "theme-dark" : "theme-light"
        }`}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <ScrollToTop />

        {/* Main Content */}
        <main className="mx-auto min-h-screen max-w-7xl px-5 pt-24 pb-12 sm:px-6 lg:px-10">
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
            <Route
              path="/terms"
              element={<TermsCondition theme={theme} />}
            />
            <Route path="/site-map" element={<SiteMap theme={theme} />} />
            <Route
              path="/disclaimer"
              element={<Disclaimer theme={theme} />}
            />
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