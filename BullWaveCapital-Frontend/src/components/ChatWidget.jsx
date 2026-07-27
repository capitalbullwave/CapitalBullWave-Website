import { useEffect, useRef, useState } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaComments,
  FaUser,
  FaStar,
} from "react-icons/fa";
import { AIsendMessage } from "../api/chatApi.js";
import { getLocalBotReply } from "./chatbotdata.js";

const WELCOME =
  "Welcome to Capital BullWave.\n\nI'm your assistant — ask me clearly about:\n\n• Services & markets\n• Pricing & plans\n• Skilled Trader Funding\n• Contact details\n• Refund / KYC / Grievance policies";

const quickReplies = [
  "Services",
  "Pricing",
  "Trading Plans",
  "Funding Program",
  "Contact",
  "Refund Policy",
];

function nowTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function linkifyText(text) {
  const pattern =
    /(https?:\/\/[^\s]+|\/[a-z0-9\-/?#]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\+?\d[\d\s-]{8,}\d)/g;

  const parts = String(text).split(pattern);

  return parts.map((part, index) => {
    if (!part) return null;

    if (/^https?:\/\//i.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 break-all"
        >
          {part}
        </a>
      );
    }

    if (/^\/[a-z0-9\-/?#]+/i.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          className="underline underline-offset-2 break-all"
        >
          {part}
        </a>
      );
    }

    if (/@/.test(part) && part.includes(".")) {
      return (
        <a
          key={`${part}-${index}`}
          href={`mailto:${part}`}
          className="underline underline-offset-2 break-all"
        >
          {part}
        </a>
      );
    }

    if (/^\+?\d[\d\s-]{8,}\d$/.test(part)) {
      const tel = part.replace(/[^\d+]/g, "");
      return (
        <a
          key={`${part}-${index}`}
          href={`tel:${tel}`}
          className="underline underline-offset-2"
        >
          {part}
        </a>
      );
    }

    return <span key={`${index}-${part.slice(0, 8)}`}>{part}</span>;
  });
}

export default function ChatWidget({ theme }) {
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: WELCOME,
      time: nowTime(),
    },
  ]);

  const messageEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, isOpen]);

  useEffect(() => {
    if (isOpen) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 180);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [isOpen]);

  const pushBot = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: "bot",
        text,
        time: nowTime(),
      },
    ]);
  };

  const sendMessage = async (text = message) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: trimmed,
        time: nowTime(),
      },
    ]);
    setMessage("");
    setTyping(true);

    try {
      const data = await AIsendMessage(trimmed);
      pushBot(data.reply);
    } catch {
      pushBot(getLocalBotReply(trimmed));
    } finally {
      setTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const showQuick = messages.length <= 2 && !typing;

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
        onClick={() => setIsOpen((v) => !v)}
        className={`chat-fab fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[9999]
          flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full
          bg-gradient-to-br from-sky-500 to-cyan-600 text-white
          shadow-[0_16px_40px_rgba(14,165,233,0.4)]
          transition-all duration-300 hover:scale-105 active:scale-95
          ${isOpen ? "rotate-0" : "chat-fab--pulse"}`}
      >
        {isOpen ? (
          <FaTimes className="text-lg sm:text-xl" />
        ) : (
          <FaComments className="text-xl sm:text-2xl" />
        )}
      </button>

      <div
        role="dialog"
        aria-label="Capital BullWave assistant"
        aria-hidden={!isOpen}
        className={`fixed z-[9998] flex flex-col overflow-hidden transition-all duration-300
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 translate-y-6 pointer-events-none"
          }
          inset-x-2 bottom-[4.75rem] h-[min(72vh,640px)]
          sm:inset-x-auto sm:right-6 sm:bottom-24 sm:h-[620px] sm:w-[400px]
          md:w-[420px]
          rounded-2xl sm:rounded-[1.5rem] backdrop-blur-xl
          shadow-[0_25px_60px_rgba(2,6,23,0.28)]
          ${
            isDark
              ? "bg-slate-950/95 ring-1 ring-white/10"
              : "bg-white/95 ring-1 ring-sky-100"
          }`}
      >
        {/* Header */}
        <div
          className={`relative flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4
          ${
            isDark
              ? "bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950 border-b border-white/10"
              : "bg-gradient-to-r from-sky-500 to-cyan-500"
          }`}
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full
              ${isDark ? "bg-sky-500 text-white" : "bg-white/20 text-white ring-1 ring-white/30"}`}
            >
              <FaRobot size={20} />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-[15px] sm:text-base font-bold text-white">
                BullWave Assistant
              </h3>
              <p className="flex items-center gap-1.5 text-xs font-medium text-emerald-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                Online · Instant replies
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
            className="rounded-xl p-2.5 text-white/90 transition hover:bg-white/15"
          >
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div
          className={`flex-1 overflow-y-auto overscroll-contain px-3.5 py-4 sm:px-4 space-y-3.5
          ${isDark ? "bg-slate-950" : "bg-sky-50/70"}`}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[92%] sm:max-w-[88%] items-end gap-2 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    msg.sender === "user"
                      ? "bg-sky-500 text-white"
                      : isDark
                        ? "bg-slate-800 text-sky-300 ring-1 ring-white/10"
                        : "bg-white text-sky-600 ring-1 ring-sky-100"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <FaUser size={12} />
                  ) : (
                    <FaRobot size={13} />
                  )}
                </div>

                <div
                  className={`rounded-2xl px-3.5 py-2.5 shadow-sm ${
                    msg.sender === "user"
                      ? "rounded-br-md bg-gradient-to-br from-sky-500 to-cyan-600 text-white"
                      : isDark
                        ? "rounded-bl-md bg-slate-900 text-slate-100 ring-1 ring-white/10"
                        : "rounded-bl-md bg-white text-slate-800 ring-1 ring-sky-100"
                  }`}
                >
                  <p className="whitespace-pre-line text-[13px] sm:text-sm leading-6">
                    {linkifyText(msg.text)}
                  </p>
                  <p
                    className={`mt-1.5 text-[10px] ${
                      msg.sender === "user"
                        ? "text-sky-100/90"
                        : isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="flex items-end gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    isDark
                      ? "bg-slate-800 text-sky-300"
                      : "bg-white text-sky-600 ring-1 ring-sky-100"
                  }`}
                >
                  <FaRobot size={13} />
                </div>
                <div
                  className={`rounded-2xl rounded-bl-md px-4 py-3 ${
                    isDark
                      ? "bg-slate-900 ring-1 ring-white/10"
                      : "bg-white ring-1 ring-sky-100"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500" />
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {showQuick && (
            <div className="pt-1">
              <p
                className={`mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]
                ${isDark ? "text-slate-500" : "text-slate-500"}`}
              >
                <FaStar className="text-sky-500" />
                Quick questions
              </p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => sendMessage(item)}
                    className={`rounded-full px-3 py-1.5 text-xs sm:text-[13px] font-semibold transition
                    ${
                      isDark
                        ? "bg-slate-900 text-sky-300 ring-1 ring-sky-400/25 hover:bg-sky-500 hover:text-white"
                        : "bg-white text-sky-700 ring-1 ring-sky-200 hover:bg-sky-500 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messageEndRef} />
        </div>

        {/* Input */}
        <div
          className={`border-t p-3 sm:p-4 ${
            isDark
              ? "border-white/10 bg-slate-900/90"
              : "border-sky-100 bg-white"
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-2.5">
            <input
              ref={inputRef}
              type="text"
              value={message}
              placeholder="Ask about plans, funding, contact…"
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={typing}
              className={`min-w-0 flex-1 rounded-xl border px-3.5 py-3 text-sm outline-none transition
                focus:ring-2 focus:ring-sky-400/50 disabled:opacity-60
                ${
                  isDark
                    ? "border-white/10 bg-slate-950 text-white placeholder:text-slate-500"
                    : "border-sky-100 bg-sky-50/80 text-slate-800 placeholder:text-slate-400"
                }`}
            />
            <button
              type="button"
              aria-label="Send message"
              disabled={typing || !message.trim()}
              onClick={() => sendMessage()}
              className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl
                bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-lg shadow-sky-500/25
                transition hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              <FaPaperPlane className="text-sm" />
            </button>
          </div>
          <p
            className={`mt-2 text-center text-[10px] sm:text-[11px] ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Research & education only · Not personalized investment advice
          </p>
        </div>
      </div>
    </>
  );
}
