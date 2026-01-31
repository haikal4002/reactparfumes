import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Why() {
  return (
    <section id="why" className="why container">
      <h3>Kenapa Parfume Braves? 🔧</h3>
      <div className="why-grid">
        <div className="card">
          <FontAwesomeIcon icon="bolt" />
          <h4>Unik & Berkarakter</h4>
          <p>
            Setiap wewangian dirancang untuk menyampaikan kepribadian
            berbeda—tak pasaran.
          </p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon="star" />
          <h4>Bahan Pilihan</h4>
          <p>Komposisi premium yang tahan lama namun elegan.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon="check-circle" />
          <h4>Mudah Pesan</h4>
          <p>Langsung lewat WhatsApp — konsultasi singkat, bayar mudah.</p>
        </div>
      </div>
    </section>
  );
}
