import React from "react";
import CTA from "./CTA";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="eyebrow">Parfume Braves</h2>
          <h1>
            Wewangian Berkarakter —{" "}
            <span className="accent">Berbeda, Berani, Berkelas</span>
          </h1>
          <p className="lead">
            Temukan parfum yang bukan hanya harum tapi punya karakter.
            Dipersonalisasi untuk meninggalkan jejak yang tak terlupakan.
          </p>
          <CTA
            message="Halo Parfume Braves! Saya tertarik dengan koleksi Anda. Bisa bantu rekomendasi?"
            variant="inline"
          />
        </div>
        <div className="hero-image" aria-hidden="true">
          {/* Decorative block to demonstrate layout; replace with illustration if needed */}
        </div>
      </div>
    </section>
  );
}
