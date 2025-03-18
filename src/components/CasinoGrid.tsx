import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Filter,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import CasinoCard from "./CasinoCard";

interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
  bonusText: string;
  ctaText: string;
  ctaUrl: string;
}

interface CasinoGridProps {
  casinos?: Casino[];
  searchTerm?: string;
  filters?: {
    rating?: number;
    bonus?: string;
    features?: string[];
  };
  onCasinoSelect?: (id: string) => void;
  onCasinoCompare?: (id: string) => void;
}

const CasinoGrid = ({
  casinos = [
    {
      id: "casino-1",
      name: "20bet",
      logo: "https://images.unsplash.com/photo-1563941406294-7f61b88b815b?w=200&q=80",
      rating: 4.9,
      features: [
        { icon: <></>, text: "₱20,000 Welcome Bonus" },
        { icon: <></>, text: "Licensed & Secure" },
        { icon: <></>, text: "24/7 Customer Support" },
      ],
      bonusText: "100% up to ₱20,000 + 200 Free Spins",
      ctaText: "Play Now",
      ctaUrl: "#",
    },
    {
      id: "casino-2",
      name: "BK8",
      logo: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&q=80",
      rating: 4.8,
      features: [
        { icon: <></>, text: "₱25,000 Welcome Package" },
        { icon: <></>, text: "Fast Payouts" },
        { icon: <></>, text: "Mobile Friendly" },
      ],
      bonusText: "200% up to ₱25,000 on First Deposit",
      ctaText: "Claim Bonus",
      ctaUrl: "#",
    },
    {
      id: "casino-3",
      name: "BC.Game",
      logo: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=200&q=80",
      rating: 4.7,
      features: [
        { icon: <></>, text: "₱15,000 Welcome Bonus" },
        { icon: <></>, text: "VIP Program" },
        { icon: <></>, text: "Crypto Friendly" },
      ],
      bonusText: "150% up to ₱15,000 + 100 Free Spins",
      ctaText: "Join Now",
      ctaUrl: "#",
    },
    {
      id: "casino-4",
      name: "Shuffle",
      logo: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=200&q=80",
      rating: 4.6,
      features: [
        { icon: <></>, text: "₱18,000 Welcome Package" },
        { icon: <></>, text: "Live Dealer Games" },
        { icon: <></>, text: "Weekend Promotions" },
      ],
      bonusText: "300% up to ₱18,000 First Deposit",
      ctaText: "Get Started",
      ctaUrl: "#",
    },
    {
      id: "casino-5",
      name: "Melbet",
      logo: "https://images.unsplash.com/photo-1596731405980-1b3817dd4d76?w=200&q=80",
      rating: 4.5,
      features: [
        { icon: <></>, text: "₱22,000 Welcome Bonus" },
        { icon: <></>, text: "Daily Tournaments" },
        { icon: <></>, text: "Loyalty Rewards" },
      ],
      bonusText: "100% up to ₱22,000 + 150 Free Spins",
      ctaText: "Play Now",
      ctaUrl: "#",
    },
    {
      id: "casino-6",
      name: "22bet",
      logo: "https://images.unsplash.com/photo-1596483203905-1436cad9f3ef?w=200&q=80",
      rating: 4.4,
      features: [
        { icon: <></>, text: "₱22,000 Welcome Package" },
        { icon: <></>, text: "Weekly Cashback" },
        { icon: <></>, text: "24/7 Live Chat" },
      ],
      bonusText: "150% up to ₱22,000 on First Three Deposits",
      ctaText: "Join Now",
      ctaUrl: "#",
    },
    {
      id: "casino-7",
      name: "Roobet",
      logo: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=200&q=80",
      rating: 4.3,
      features: [
        { icon: <></>, text: "₱16,000 Welcome Bonus" },
        { icon: <></>, text: "Crypto Payments" },
        { icon: <></>, text: "Exclusive Games" },
      ],
      bonusText: "125% up to ₱16,000 + 50 Free Spins",
      ctaText: "Play Now",
      ctaUrl: "#",
    },
    {
      id: "casino-8",
      name: "1xBet",
      logo: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=200&q=80",
      rating: 4.2,
      features: [
        { icon: <></>, text: "₱19,500 Welcome Package" },
        { icon: <></>, text: "Sports Betting" },
        { icon: <></>, text: "Mobile App" },
      ],
      bonusText: "200% up to ₱19,500 on First Deposit",
      ctaText: "Claim Bonus",
      ctaUrl: "#",
    },
    {
      id: "casino-9",
      name: "Vulkan Vegas",
      logo: "https://images.unsplash.com/photo-1596731405980-1b3817dd4d76?w=200&q=80",
      rating: 4.1,
      features: [
        { icon: <></>, text: "₱17,000 Welcome Bonus" },
        { icon: <></>, text: "Slot Tournaments" },
        { icon: <></>, text: "VIP Program" },
      ],
      bonusText: "100% up to ₱17,000 + 120 Free Spins",
      ctaText: "Join Now",
      ctaUrl: "#",
    },
    {
      id: "casino-10",
      name: "Stake",
      logo: "https://images.unsplash.com/photo-1596483203905-1436cad9f3ef?w=200&q=80",
      rating: 4.0,
      features: [
        { icon: <></>, text: "₱15,000 Welcome Package" },
        { icon: <></>, text: "Crypto Focused" },
        { icon: <></>, text: "Original Games" },
      ],
      bonusText: "150% up to ₱15,000 on First Deposit",
      ctaText: "Get Started",
      ctaUrl: "#",
    },
  ],
  searchTerm = "",
  filters = {},
  onCasinoSelect = () => {},
  onCasinoCompare = () => {},
}: CasinoGridProps) => {
  const [sortOption, setSortOption] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCasinos, setSelectedCasinos] = useState<string[]>([]);

  // Filter casinos based on search term and filters
  const filteredCasinos = casinos
    .filter((casino) => {
      // Search term filter
      if (
        searchTerm &&
        !casino.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      // Rating filter
      if (filters.rating && casino.rating < filters.rating) {
        return false;
      }

      // More filters can be added here

      return true;
    })
    .sort((a, b) => {
      // Sort based on selected option
      if (sortOption === "rating") {
        return b.rating - a.rating;
      } else if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const handleCasinoSelect = (id: string) => {
    onCasinoSelect(id);
  };

  const handleCasinoCompare = (id: string) => {
    if (selectedCasinos.includes(id)) {
      setSelectedCasinos(selectedCasinos.filter((casinoId) => casinoId !== id));
    } else {
      setSelectedCasinos([...selectedCasinos, id]);
    }
    onCasinoCompare(id);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 bg-gray-950">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
          Top {filteredCasinos.length} Online Casinos
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            Filters
            {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>

          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-gray-400" />
            <Select
              defaultValue="rating"
              onValueChange={(value) => setSortOption(value)}
            >
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {showFilters && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 p-4 rounded-md mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Rating</h3>
              <Select defaultValue="0">
                <SelectTrigger className="w-full bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Minimum Rating" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="0">Any Rating</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="4.5">4.5+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">
                Bonus Type
              </h3>
              <Select defaultValue="any">
                <SelectTrigger className="w-full bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Bonus Type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="any">Any Bonus</SelectItem>
                  <SelectItem value="deposit">Deposit Bonus</SelectItem>
                  <SelectItem value="free-spins">Free Spins</SelectItem>
                  <SelectItem value="cashback">Cashback</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">
                Features
              </h3>
              <Select defaultValue="any">
                <SelectTrigger className="w-full bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Casino Features" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="any">Any Features</SelectItem>
                  <SelectItem value="mobile">Mobile Friendly</SelectItem>
                  <SelectItem value="live-dealer">Live Dealer Games</SelectItem>
                  <SelectItem value="crypto">Crypto Payments</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90"
            >
              Apply Filters
            </Button>
          </div>
        </motion.div>
      )}

      {selectedCasinos.length > 0 && (
        <div className="bg-gray-800/50 p-3 rounded-md mb-6 flex justify-between items-center">
          <p className="text-sm text-gray-300">
            <span className="font-medium text-primary">
              {selectedCasinos.length}
            </span>{" "}
            casinos selected for comparison
          </p>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90"
            onClick={() => console.log("Compare casinos", selectedCasinos)}
          >
            Compare Selected
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCasinos.map((casino) => (
          <motion.div
            key={casino.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <CasinoCard
              id={casino.id}
              name={casino.name}
              logo={casino.logo}
              rating={casino.rating}
              features={casino.features}
              bonusText={casino.bonusText}
              ctaText={casino.ctaText}
              ctaUrl={casino.ctaUrl}
              isSelected={selectedCasinos.includes(casino.id)}
              onSelect={handleCasinoSelect}
              onCompare={handleCasinoCompare}
            />
          </motion.div>
        ))}
      </div>

      {filteredCasinos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No casinos match your search criteria.
          </p>
          <Button
            variant="link"
            className="text-primary mt-2"
            onClick={() => {
              // Reset filters
            }}
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default CasinoGrid;
