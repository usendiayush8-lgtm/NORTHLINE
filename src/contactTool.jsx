
import { useState } from "react";
import "./ContactTool.css";


export default function ContactTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Replace these with your actual details
  const whatsappNumber = "919876543210";
  const instagramURL = "https://www.instagram.com/YOUR_USERNAME/";
  const facebookURL = "https://www.facebook.com/YOUR_PAGE/";

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! 👋 Welcome to Northline. How can I help you?"
    }
  ]);

  function sendMessage(text = message) {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
      {
        sender: "bot",
        text: getReply(text)
      }
    ]);

    setMessage("");
  }

  function getReply(text) {
    const value = text.toLowerCase();

    if (value.includes("price") || value.includes("cost")) {
      return "Website pricing depends on your requirements. Contact us on WhatsApp for a custom quote.";
    }

    if (value.includes("time") || value.includes("long")) {
      return "A basic website may take around 1–2 weeks. Larger projects can take longer.";
    }

    if (value.includes("service")) {
      return "We offer Website Design, Web Development, E-commerce and Website Redesign.";
    }

    return "Thanks for contacting Northline! Tell us about your project, and our team will help you.";
  }

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Northline! I am interested in creating a website."
  )}`;

  return (
    <>
      {/* Social media buttons */}
      <div className="social-buttons">

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="social-btn whatsapp"
          aria-label="WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>

        <a
          href={instagramURL}
          target="_blank"
          rel="noreferrer"
          className="social-btn instagram"
          aria-label="Instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>

        <a
          href={facebookURL}
          target="_blank"
          rel="noreferrer"
          className="social-btn facebook"
          aria-label="Facebook"
        >
          <i className="bi bi-facebook"></i>
        </a>

      </div>

      {/* AI Chatbot */}
      {isOpen && (
        <div className="chatbot">

          <div className="chat-header">
            <div>
              <h3>Northline Assistant</h3>
              <span>● Online</span>
            </div>

            <button onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="quick-questions">
            <button onClick={() => sendMessage("What services do you offer?")}>
              Services
            </button>

            <button onClick={() => sendMessage("What is your website pricing?")}>
              Pricing
            </button>

            <button onClick={() => sendMessage("How long does it take?")}>
              Timeline
            </button>
          </div>

          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something..."
            />

            <button type="submit">
              <i className="bi bi-send-fill"></i>
            </button>
          </form>

        </div>
      )}

      {/* Floating chatbot button */}
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI chatbot"
      >
        <i className={isOpen ? "bi bi-x-lg" : "bi bi-chat-dots-fill"}></i>
      </button>
    </>
  );
}
