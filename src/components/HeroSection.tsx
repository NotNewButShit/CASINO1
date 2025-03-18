import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Top 10 Online Casinos in the Philippines",
  subtitle = "Find the best online casinos with exclusive bonuses and secure gaming experiences",
  backgroundImage = "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=1200&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.4)",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 max-w-7xl mx-auto text-center">
        {/* Animated glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] opacity-70" />

        {/* Hero content */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
          {subtitle}
        </p>

        {/* Search filter component */}
        <div className="w-full max-w-3xl bg-black/60 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-xl">
          {/* Search filter placeholder - actual component will be implemented separately */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search casinos..."
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Rating</option>
                <option value="5">5 Stars</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
              </select>
              <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">Features</option>
                <option value="bonus">Welcome Bonus</option>
                <option value="mobile">Mobile Friendly</option>
                <option value="crypto">Crypto Payments</option>
              </select>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium"
          >
            View Top Casinos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Compare Casinos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
