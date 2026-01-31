import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import ProductList from "./components/ProductList";
import CTA from "./components/CTA";
import SocialProof from "./components/SocialProof";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Why />
        <ProductList />
        <CTA />
        <SocialProof />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Parfume Braves
      </footer>
    </div>
  );
}
