import React from "react";
import { Star, ExternalLink, Gift, Shield, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface CasinoFeature {
  icon: React.ReactNode;
  text: string;
}

interface CasinoCardProps {
  id?: string;
  name?: string;
  logo?: string;
  rating?: number;
  features?: CasinoFeature[];
  bonusText?: string;
  ctaText?: string;
  ctaUrl?: string;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  onCompare?: (id: string) => void;
}

const CasinoCard = ({
  id = "casino-1",
  name = "Royal Panda Casino",
  logo = "https://images.unsplash.com/photo-1563941406294-7f61b88b815b?w=200&q=80",
  rating = 4.8,
  features = [
    { icon: <Gift size={16} />, text: "₱15,000 Welcome Bonus" },
    { icon: <Shield size={16} />, text: "Licensed & Secure" },
    { icon: <Award size={16} />, text: "24/7 Customer Support" },
  ],
  bonusText = "100% up to ₱15,000 + 150 Free Spins",
  ctaText = "Play Now",
  ctaUrl = "#",
  isSelected = false,
  onSelect = () => {},
  onCompare = () => {},
}: CasinoCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="fill-yellow-400 text-yellow-400"
            size={16}
          />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="text-gray-300" size={16} />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="fill-yellow-400 text-yellow-400" size={16} />
            </div>
          </div>,
        );
      } else {
        stars.push(<Star key={i} className="text-gray-300" size={16} />);
      }
    }
    return stars;
  };

  return (
    <Card
      className={`w-full max-w-[350px] h-[400px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-900 border-gray-800 ${isSelected ? "ring-2 ring-primary" : ""}`}
    >
      <CardHeader className="p-4 pb-2 flex flex-col items-center">
        <div className="w-full flex justify-between items-start mb-2">
          <Badge
            variant="outline"
            className="bg-gray-800 text-primary-foreground"
          >
            #{id.split("-")[1]}
          </Badge>
          <div className="flex">
            {renderStars()}
            <span className="ml-1 text-sm text-gray-300">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-2">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-20 h-20 object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <div className="bg-gray-800/50 p-3 rounded-md mb-4">
          <p className="text-sm text-center text-primary font-medium">
            {bonusText}
          </p>
        </div>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <span className="text-primary">{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white"
          onClick={() => window.open(ctaUrl, "_blank")}
        >
          {ctaText} <ExternalLink size={16} className="ml-1" />
        </Button>

        <div className="flex justify-between w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-gray-800 border-gray-700 hover:bg-gray-700"
                  onClick={() => onSelect(id)}
                >
                  View Details
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View detailed information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-gray-800 border-gray-700 hover:bg-gray-700"
                  onClick={() => onCompare(id)}
                >
                  Add to Compare
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to comparison tool</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CasinoCard;
