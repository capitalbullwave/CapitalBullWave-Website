import { useEffect, useRef, useState } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaComments,
  FaUserCircle,
} from "react-icons/fa";

import { AIsendMessage } from "../api/chatApi.js";

const ChatWidget = ({ theme }) => {
  const isDark = theme === "dark";

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        "👋 Welcome to Capital BullWave !\n\nI'm your virtual assistant.\n\nYou can ask me about:\n\n• Services\n• Pricing\n• Trading Plans\n• Contact Information\n• Company Details",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const messageEndRef = useRef(null);

  const quickReplies = [
    "Services",
    "Pricing",
    "Trading Plans",
    "About Company",
    "Contact",
  ];

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

 /* const getBotReply = (userMessage) => {
    const text = userMessage.toLowerCase();

    const match = chatbotData.find((item) =>
      item.keywords.some((keyword) =>
        text.includes(keyword.toLowerCase())
      )
    );

    return (
      match?.answer ||
      "Sorry, I couldn't find information about that.\n\nPlease contact our support team for further assistance."
    );
  };
  */

  const sendMessage = async (text = message) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setTyping(true);

    try {
      const data = await AIsendMessage(text);

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Sorry, I'm unable to answer right now. Please try again later.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
            fixed bottom-6 right-6 z-[9999]
            flex h-16 w-16 items-center justify-center
            rounded-full
            bg-gradient-to-br from-blue-600 to-indigo-700
            text-white  cursor-pointer
            shadow-[0_20px_45px_rgba(37,99,235,.35)]
            transition-all duration-300
            hover:scale-110
            hover:rotate-6
            active:scale-95
            animate-pulse
        `}
        >
        {isOpen ? (
            <FaTimes className="text-xl" />
                    ) : (
                        <FaComments className="text-2xl" />
                    )}
        </button>

      {/* Chat Window */}

        <div
            className={`fixed bottom-24 right-6 z-[9998]
            flex flex-col overflow-hidden
            rounded-3xl backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,.25)] transition-all duration-300
            ${
            isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8 pointer-events-none"
            }
            w-[390px] max-w-[calc(100vw-24px)]
            h-[650px] max-h-[82vh]
            max-sm:w-[calc(100vw-16px)] max-sm:h-[80vh]
            max-sm:right-2
            max-sm:bottom-20
            ${
            isDark
            ? "bg-slate-900/95 border border-slate-700"
            : "bg-white/95 border border-slate-200"
            }`}
        >
        {/* Header */}

        <div
          className={`flex items-center justify-between
          px-5 py-4 border-b

          ${
            isDark
              ? "border-slate-700 bg-slate-800"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
              <FaRobot size={20} />
            </div>

            <div>
              <h3
                className={`font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Bull Wave Assistant
              </h3>

              <p className="text-sm text-green-500">
                ● Online
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className={`rounded-lg p-2  cursor-pointer

            ${
              isDark
                ? "hover:bg-slate-700 text-white"
                : "hover:bg-slate-100 text-slate-700"
            }`}
          >
            <FaTimes />
          </button>
        </div>

        {/* Messages Container */}

        <div
          className={`flex-1 overflow-y-auto px-4 py-5 space-y-4

          ${
            isDark
              ? "bg-slate-900"
              : "bg-slate-50"
          }`}
        >
                      {/* Messages */}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[85%] items-end gap-2 ${
                  msg.sender === "user"
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                {/* Avatar */}

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : isDark
                      ? "bg-slate-700 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <FaUserCircle size={18} />
                  ) : (
                    <FaRobot size={16} />
                  )}
                </div>

                {/* Bubble */}

                <div
                  className={`rounded-2xl px-4 py-3 shadow-md transition-all duration-300 ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-md"
                      : isDark
                      ? "bg-slate-800 text-slate-100 rounded-bl-md"
                      : "bg-white text-slate-700 rounded-bl-md border border-slate-200"
                  }`}
                >
                  <p className="whitespace-pre-line text-sm leading-6">
                    {msg.text}
                  </p>

                  <p
                    className={`mt-2 text-[11px] ${
                      msg.sender === "user"
                        ? "text-blue-100"
                        : isDark
                        ? "text-slate-400"
                        : "text-slate-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}

          {typing && (
            <div className="flex justify-start">
              <div className="flex items-end gap-2">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    isDark
                      ? "bg-slate-700 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  <FaRobot size={16} />
                </div>

                <div
                  className={`rounded-2xl rounded-bl-md px-4 py-3 shadow ${
                    isDark
                      ? "bg-slate-800"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></span>
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
                      style={{ animationDelay: ".2s" }}
                    ></span>
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
                      style={{ animationDelay: ".4s" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Replies */}

          {messages.length === 1 && !typing && (
            <div className="flex flex-wrap gap-2 pt-2">
              {quickReplies.map((item) => (
                <button
                  key={item}
                  onClick={() => sendMessage(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "border border-slate-700 bg-slate-800 text-slate-200 hover:bg-blue-600"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Auto Scroll */}

          <div ref={messageEndRef} />
        </div>

        {/* Input Area */}

        <div
          className={`border-t p-4 ${
            isDark
              ? "border-slate-700 bg-slate-800"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              placeholder="Ask anything..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                isDark
                  ? "border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
                  : "border-slate-300 bg-white text-slate-700 placeholder:text-slate-400"
              }`}
            />

            <button
              onClick={() => sendMessage()}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95"
            >
              <FaPaperPlane />
            
            </button>
          </div>
        </div>

      </div>

    </>
  );
};

export default ChatWidget;