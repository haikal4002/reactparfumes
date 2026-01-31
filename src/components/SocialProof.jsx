import React from "react";

export default function SocialProof() {
  const demo = [
    {
      name: "Ayu",
      text: "Aromanya tahan seharian, teman saya langsung tanya pakai apa!",
    },
    { name: "Budi", text: "Rekomendasi tepat untuk acara formal. Elegan." },
  ];

  return (
    <section id="social" className="container social-proof">
      <h3>Ulasan Pelanggan</h3>
      <div className="testimonials">
        {demo.map((t, i) => (
          <blockquote key={i} className="testimonial">
            <p>“{t.text}”</p>
            <footer>— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
