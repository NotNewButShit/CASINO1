import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SearchFilter from "./SearchFilter";
import CasinoGrid from "./CasinoGrid";
import Footer from "./Footer";

const Casinos = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="pt-20">
        <HeroSection
          title="Browse All Online Casinos"
          subtitle="Discover the best online casinos with exclusive bonuses and secure gaming experiences"
          backgroundImage="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1200&q=80"
        />

        <section className="py-8 px-4 bg-gray-950">
          <div className="container mx-auto">
            <SearchFilter />
          </div>
        </section>

        <section className="py-8 px-4 bg-gray-950">
          <CasinoGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Casinos;
