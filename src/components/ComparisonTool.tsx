import React, { useState } from "react";
import { X, Check, ChevronLeft, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import CasinoCard from "./CasinoCard";

interface ComparisonFeature {
  name: string;
  description: string;
}

interface CasinoForComparison {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonusText: string;
  ctaText: string;
  ctaUrl: string;
  features: {
    welcomeBonus: string;
    paymentMethods: string[];
    withdrawalTime: string;
    customerSupport: string;
    mobileCompatibility: boolean;
    liveDealer: boolean;
    vipProgram: boolean;
  };
}

interface ComparisonToolProps {
  isOpen?: boolean;
  onClose?: () => void;
  casinos?: CasinoForComparison[];
  onVisitCasino?: (id: string) => void;
}

const ComparisonTool = ({
  isOpen = true,
  onClose = () => {},
  casinos = [
    {
      id: "casino-1",
      name: "Royal Panda Casino",
      logo: "https://images.unsplash.com/photo-1563941406294-7f61b88b815b?w=200&q=80",
      rating: 4.8,
      bonusText: "100% up to ₱15,000 + 150 Free Spins",
      ctaText: "Play Now",
      ctaUrl: "#",
      features: {
        welcomeBonus: "100% up to ₱15,000 + 150 Free Spins",
        paymentMethods: ["Visa", "Mastercard", "GCash", "PayMaya"],
        withdrawalTime: "24-48 hours",
        customerSupport: "24/7 Live Chat, Email",
        mobileCompatibility: true,
        liveDealer: true,
        vipProgram: true,
      },
    },
    {
      id: "casino-2",
      name: "Lucky Tiger Casino",
      logo: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&q=80",
      rating: 4.5,
      bonusText: "200% up to ₱20,000 + 50 Free Spins",
      ctaText: "Claim Bonus",
      ctaUrl: "#",
      features: {
        welcomeBonus: "200% up to ₱20,000 + 50 Free Spins",
        paymentMethods: ["Visa", "Mastercard", "GCash", "Bitcoin"],
        withdrawalTime: "1-3 days",
        customerSupport: "24/7 Live Chat",
        mobileCompatibility: true,
        liveDealer: true,
        vipProgram: false,
      },
    },
    {
      id: "casino-3",
      name: "Golden Dragon",
      logo: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=200&q=80",
      rating: 4.2,
      bonusText: "150% up to ₱12,000 + 100 Free Spins",
      ctaText: "Join Now",
      ctaUrl: "#",
      features: {
        welcomeBonus: "150% up to ₱12,000 + 100 Free Spins",
        paymentMethods: ["Visa", "Mastercard", "PayMaya"],
        withdrawalTime: "2-5 days",
        customerSupport: "Live Chat (10AM-10PM), Email",
        mobileCompatibility: true,
        liveDealer: false,
        vipProgram: true,
      },
    },
  ],
  onVisitCasino = () => {},
}: ComparisonToolProps) => {
  const [selectedCasinos, setSelectedCasinos] = useState<string[]>(
    casinos.slice(0, 3).map((casino) => casino.id),
  );

  const comparisonFeatures: ComparisonFeature[] = [
    {
      name: "Welcome Bonus",
      description: "Initial bonus offered to new players",
    },
    {
      name: "Payment Methods",
      description: "Available deposit and withdrawal options",
    },
    {
      name: "Withdrawal Time",
      description: "Average time to process withdrawals",
    },
    {
      name: "Customer Support",
      description: "Available support channels and hours",
    },
    {
      name: "Mobile Compatibility",
      description: "Optimized for mobile devices",
    },
    {
      name: "Live Dealer Games",
      description: "Offers live dealer casino games",
    },
    { name: "VIP Program", description: "Special rewards for loyal players" },
  ];

  const removeCasino = (id: string) => {
    setSelectedCasinos(selectedCasinos.filter((casinoId) => casinoId !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto p-4 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-gray-900 rounded-xl border border-gray-800 shadow-2xl">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <ChevronLeft size={20} />
            </Button>
            <h2 className="text-xl font-bold text-white">Casino Comparison</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Comparison Content */}
        <div className="p-6">
          {/* Casino Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {selectedCasinos.map((id) => {
              const casino = casinos.find((c) => c.id === id);
              if (!casino) return null;

              return (
                <div key={casino.id} className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-10 bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white rounded-full"
                    onClick={() => removeCasino(casino.id)}
                  >
                    <X size={16} />
                  </Button>
                  <CasinoCard
                    id={casino.id}
                    name={casino.name}
                    logo={casino.logo}
                    rating={casino.rating}
                    bonusText={casino.bonusText}
                    ctaText={casino.ctaText}
                    ctaUrl={casino.ctaUrl}
                    isSelected={true}
                  />
                </div>
              );
            })}
          </div>

          {/* Detailed Comparison Table */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-center">
                Detailed Feature Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="p-3 text-left text-gray-400 font-medium">
                        Feature
                      </th>
                      {selectedCasinos.map((id) => {
                        const casino = casinos.find((c) => c.id === id);
                        return (
                          <th
                            key={id}
                            className="p-3 text-center text-white font-medium"
                          >
                            {casino?.name}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-700 last:border-0"
                      >
                        <td className="p-3 text-left">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="text-white font-medium underline decoration-dotted underline-offset-2">
                                {feature.name}
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{feature.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </td>
                        {selectedCasinos.map((id) => {
                          const casino = casinos.find((c) => c.id === id);
                          if (!casino)
                            return (
                              <td key={id} className="p-3 text-center">
                                -
                              </td>
                            );

                          let featureValue: React.ReactNode = "-";

                          switch (feature.name) {
                            case "Welcome Bonus":
                              featureValue = casino.features.welcomeBonus;
                              break;
                            case "Payment Methods":
                              featureValue =
                                casino.features.paymentMethods.join(", ");
                              break;
                            case "Withdrawal Time":
                              featureValue = casino.features.withdrawalTime;
                              break;
                            case "Customer Support":
                              featureValue = casino.features.customerSupport;
                              break;
                            case "Mobile Compatibility":
                              featureValue = casino.features
                                .mobileCompatibility ? (
                                <Check
                                  className="mx-auto text-green-500"
                                  size={18}
                                />
                              ) : (
                                <X className="mx-auto text-red-500" size={18} />
                              );
                              break;
                            case "Live Dealer Games":
                              featureValue = casino.features.liveDealer ? (
                                <Check
                                  className="mx-auto text-green-500"
                                  size={18}
                                />
                              ) : (
                                <X className="mx-auto text-red-500" size={18} />
                              );
                              break;
                            case "VIP Program":
                              featureValue = casino.features.vipProgram ? (
                                <Check
                                  className="mx-auto text-green-500"
                                  size={18}
                                />
                              ) : (
                                <X className="mx-auto text-red-500" size={18} />
                              );
                              break;
                          }

                          return (
                            <td
                              key={id}
                              className="p-3 text-center text-gray-300"
                            >
                              {featureValue}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedCasinos.map((id) => {
              const casino = casinos.find((c) => c.id === id);
              if (!casino) return null;

              return (
                <div key={casino.id} className="flex flex-col items-center">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {casino.name}
                  </h3>
                  <p className="text-sm text-primary mb-4">
                    {casino.bonusText}
                  </p>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => {
                      onVisitCasino(casino.id);
                      window.open(casino.ctaUrl, "_blank");
                    }}
                  >
                    {casino.ctaText} <ExternalLink size={16} className="ml-1" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTool;
