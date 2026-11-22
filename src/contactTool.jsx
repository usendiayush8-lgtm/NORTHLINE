
import { useState } from "react";
import "./contactTool.css";

export default function ContactTools() {
  const [isOpen, setIsOpen] = useState(true);

  const whatsappNumber = "7588494856";

  const socialLinks = [
    {
      name: "YouTube",
      icon: "bi-youtube",
      url: "https://www.youtube.com/",
      color: "#ffb6b6",
    },
    {
      name: "Instagram",
      icon: "bi-instagram",
      url: "https://www.instagram.com/",
      color: "#fff0ad",
    },
    {
      name: "Facebook",
      icon: "bi-facebook",
      url: "https://www.facebook.com/",
      color: "#b9c5ff",
    },
    {
      name: "Behance",
      icon: "bi-behance",
      url: "https://www.behance.net/",
      color: "#f5a9eb",
    },
  ];

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Northline! I am interested in your services."
  )}`;

  return (
    <div className="northline-contact">

      {/* SOCIAL ICONS AND CLOSE BUTTON */}
      {isOpen && (
        <div className="northline-social-list show">

          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="northline-social-icon"
              aria-label={social.name}
              style={{ backgroundColor: social.color }}
            >
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}

          <button
            className="northline-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close social menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>

        </div>
      )}

      {/* SHARE BUTTON - VISIBLE AFTER CLOSING */}
      {!isOpen && (
        <button
          className="northline-open"
          onClick={() => setIsOpen(true)}
          aria-label="Open social menu"
        >
          <i className="bi bi-share-fill"></i>
        </button>
      )}

      {/* WHATSAPP BUTTON - ALWAYS VISIBLE */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="northline-whatsapp"
      >
        <span>Call Us Now</span>
        <i className="bi bi-whatsapp"></i>
      </a>

    </div>
  );
}
