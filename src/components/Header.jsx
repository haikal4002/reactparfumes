import React from "react";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1 className="logo">Parfume Braves</h1>
          <nav>
            <a href="#why">Why</a>
            <a href="#products">Products</a>
            <a href="#social">Reviews</a>
          </nav>
        </div>
      </header>

      {/* Product mark/logo under header */}
      <div className="header-logo">
        <svg
          width="160"
          height="84"
          viewBox="0 0 160 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Logo Parfume Braves"
        >
          <rect
            x="48"
            y="18"
            width="64"
            height="44"
            rx="8"
            fill="var(--brown-500)"
          />
          <rect
            x="60"
            y="6"
            width="40"
            height="18"
            rx="4"
            fill="var(--brown-700)"
          />
          <circle cx="80" cy="40" r="10" fill="var(--bg)" />
          <text
            x="80"
            y="44"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="10"
            fill="var(--brown-800)"
          >
            Braves
          </text>
        </svg>
      </div>
    </>
  );
}
