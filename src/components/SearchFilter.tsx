import React, { useState } from "react";
import { Search, Filter, Star, Gift, ChevronDown } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface SearchFilterProps {
  onSearch?: (term: string) => void;
  onFilterChange?: (filters: FilterOptions) => void;
}

interface FilterOptions {
  features: string[];
  minRating: number;
  bonusTypes: string[];
}

const SearchFilter = ({
  onSearch = () => {},
  onFilterChange = () => {},
}: SearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    features: [],
    minRating: 0,
    bonusTypes: [],
  });

  // Available filter options
  const featureOptions = [
    "Live Dealers",
    "Mobile App",
    "Fast Payouts",
    "VIP Program",
    "24/7 Support",
  ];
  const ratingOptions = [1, 2, 3, 4, 5];
  const bonusOptions = [
    "Welcome Bonus",
    "Free Spins",
    "No Deposit",
    "Reload Bonus",
    "Cashback",
  ];

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const toggleFeature = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter((f) => f !== feature)
      : [...filters.features, feature];

    const newFilters = { ...filters, features: newFeatures };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const setMinRating = (rating: number) => {
    const newFilters = { ...filters, minRating: rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleBonusType = (bonusType: string) => {
    const newBonusTypes = filters.bonusTypes.includes(bonusType)
      ? filters.bonusTypes.filter((b) => b !== bonusType)
      : [...filters.bonusTypes, bonusType];

    const newFilters = { ...filters, bonusTypes: newBonusTypes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search casinos by name or game type..."
            className="pl-10 bg-gray-800 border-gray-700 text-white h-12 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        <div className="flex gap-2">
          {/* Features Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-800 border-gray-700 text-white h-12"
              >
                <Filter className="h-4 w-4 mr-2" />
                Features
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700 text-white">
              {featureOptions.map((feature) => (
                <DropdownMenuCheckboxItem
                  key={feature}
                  checked={filters.features.includes(feature)}
                  onCheckedChange={() => toggleFeature(feature)}
                >
                  {feature}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Rating Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-800 border-gray-700 text-white h-12"
              >
                <Star className="h-4 w-4 mr-2" />
                Rating
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700 text-white">
              {ratingOptions.map((rating) => (
                <DropdownMenuCheckboxItem
                  key={rating}
                  checked={filters.minRating === rating}
                  onCheckedChange={() => setMinRating(rating)}
                >
                  {rating}+ Stars
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Bonus Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-800 border-gray-700 text-white h-12"
              >
                <Gift className="h-4 w-4 mr-2" />
                Bonuses
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700 text-white">
              {bonusOptions.map((bonus) => (
                <DropdownMenuCheckboxItem
                  key={bonus}
                  checked={filters.bonusTypes.includes(bonus)}
                  onCheckedChange={() => toggleBonusType(bonus)}
                >
                  {bonus}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white h-12"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
