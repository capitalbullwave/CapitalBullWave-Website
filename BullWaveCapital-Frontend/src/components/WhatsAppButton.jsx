import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919616212526"; // Replace with your WhatsApp number

  const message = encodeURIComponent(
    "Hello Capital BullWave Team, I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-28 right-6 z-[9998] group"
    >
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>

        <FaWhatsapp className="relative z-10 text-4xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;