import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919616212526";

  const message = encodeURIComponent(
    "Hello Capital BullWave Team, I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="bw-whatsapp-fab fixed z-[9998] group right-4 sm:right-6 bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))]"
    >
      <span className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100 max-sm:hidden">
        Chat on WhatsApp
      </span>

      <div className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 sm:h-14 sm:w-14">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
        <FaWhatsapp className="relative z-10 text-2xl sm:text-3xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
