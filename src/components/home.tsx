import React, { useState } from "react";
import Header from "./Header";
import SearchFilter from "./SearchFilter";
import CasinoGrid from "./CasinoGrid";
import ComparisonTool from "./ComparisonTool";
import Footer from "./Footer";

// Create a local HeroSection component since there seems to be an issue with importing it
const HeroSection = ({
  title = "Top 10 Online Casinos in the Philippines for 2023",
  subtitle = "Find the best online casinos with exclusive bonuses and secure gaming experiences",
  backgroundImage = "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=1200&q=80",
}) => {
  return (
    <section className="relative h-[500px] w-full bg-gray-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

interface HomeProps {
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

const Home = ({ isDarkMode = true, onToggleTheme = () => {} }: HomeProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    features: [],
    minRating: 0,
    bonusTypes: [],
  });
  const [showComparisonTool, setShowComparisonTool] = useState(false);
  const [selectedCasinos, setSelectedCasinos] = useState<string[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleCasinoSelect = (id: string) => {
    // Handle casino selection logic
    console.log("Selected casino:", id);
  };

  const handleCasinoCompare = (id: string) => {
    if (selectedCasinos.includes(id)) {
      setSelectedCasinos(selectedCasinos.filter((casinoId) => casinoId !== id));
    } else {
      setSelectedCasinos([...selectedCasinos, id]);
    }

    // If we have at least 2 casinos selected, show the comparison tool
    if (
      selectedCasinos.length >= 1 ||
      (selectedCasinos.length === 1 && !selectedCasinos.includes(id))
    ) {
      setShowComparisonTool(true);
    }
  };

  const handleCompareSelected = () => {
    if (selectedCasinos.length > 0) {
      setShowComparisonTool(true);
    }
  };

  const handleCloseComparison = () => {
    setShowComparisonTool(false);
  };

  const handleVisitCasino = (id: string) => {
    console.log("Visiting casino:", id);
    // Analytics tracking or other logic can be added here
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <Header isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />

      {/* Main Content */}
      <main className="pt-20">
        {" "}
        {/* Add padding top to account for fixed header */}
        {/* Hero Section */}
        <HeroSection />
        {/* Search Filter Section */}
        <section className="py-8 px-4 bg-gray-950">
          <div className="container mx-auto">
            <SearchFilter
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
            />
          </div>
        </section>
        {/* Casino Grid Section */}
        <section className="py-8 px-4 bg-gray-950">
          <CasinoGrid
            searchTerm={searchTerm}
            filters={{
              rating: filters.minRating,
              features: filters.features,
              bonus:
                filters.bonusTypes.length > 0
                  ? filters.bonusTypes[0]
                  : undefined,
            }}
            onCasinoSelect={handleCasinoSelect}
            onCasinoCompare={handleCasinoCompare}
            selectedCasinos={selectedCasinos}
          />
        </section>
        {/* Comparison Tool */}
        {showComparisonTool && (
          <ComparisonTool
            isOpen={showComparisonTool}
            onClose={handleCloseComparison}
            selectedCasinos={selectedCasinos}
            onVisitCasino={handleVisitCasino}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
