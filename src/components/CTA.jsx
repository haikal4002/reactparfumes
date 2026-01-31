import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function buildWaUrl(number, message) {
  const text = encodeURIComponent(
    message || "Halo Parfume Braves, saya tertarik",
  );
  return `https://wa.me/${number}?text=${text}`;
}

export default function CTA({ message, variant = "center" }) {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;
  const href = buildWaUrl(number, message);
  const className = `cta container ${
    variant === "inline" ? "cta-inline" : "cta-center"
  }`;
  return (
    <div className={className}>
      <p className="cta-text">
        Siap meninggalkan kesan? <strong>Konsultasi singkat</strong> untuk
        rekomendasi parfum yang tepat.
      </p>
      <a
        className="btn btn-primary"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat dan pesan via WhatsApp"
      >
        <FontAwesomeIcon icon={["fab", "whatsapp"]} />
        <span className="btn-label">&nbsp;Chat & Pesan</span>
      </a>
    </div>
  );
}
