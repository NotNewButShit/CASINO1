import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Gift, Clock, ExternalLink } from "lucide-react";

const Bonuses = () => {
  const bonusOffers = [
    {
      id: "bonus-1",
      casino: "20bet",
      title: "Welcome Package",
      description: "100% up to ₱20,000 + 200 Free Spins",
      expiryDate: "2023-12-31",
      code: "WELCOME100",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1563941406294-7f61b88b815b?w=200&q=80",
    },
    {
      id: "bonus-2",
      casino: "BK8",
      title: "First Deposit Bonus",
      description: "200% up to ₱25,000 on First Deposit",
      expiryDate: "2023-12-31",
      code: "BK8BONUS",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&q=80",
    },
    {
      id: "bonus-3",
      casino: "BC.Game",
      title: "Welcome Package",
      description: "150% up to ₱15,000 + 100 Free Spins",
      expiryDate: "2023-12-31",
      code: "BCGAME150",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=200&q=80",
    },
    {
      id: "bonus-4",
      casino: "Shuffle",
      title: "First Deposit Bonus",
      description: "300% up to ₱18,000 First Deposit",
      expiryDate: "2023-12-31",
      code: "SHUFFLE300",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=200&q=80",
    },
    {
      id: "bonus-5",
      casino: "Melbet",
      title: "Welcome Bonus",
      description: "100% up to ₱22,000 + 150 Free Spins",
      expiryDate: "2023-12-31",
      code: "MELBET100",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1596731405980-1b3817dd4d76?w=200&q=80",
    },
    {
      id: "bonus-6",
      casino: "22bet",
      title: "Welcome Package",
      description: "150% up to ₱22,000 on First Three Deposits",
      expiryDate: "2023-12-31",
      code: "22BET150",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1596483203905-1436cad9f3ef?w=200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="pt-20">
        <HeroSection
          title="Exclusive Casino Bonuses"
          subtitle="Claim the best welcome bonuses, free spins, and promotions from top online casinos"
          backgroundImage="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=1200&q=80"
        />

        <section className="py-12 px-4 bg-gray-950">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Latest Bonus Offers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bonusOffers.map((bonus) => (
                <Card
                  key={bonus.id}
                  className="bg-gray-900 border-gray-800 overflow-hidden hover:border-amber-500 transition-colors"
                >
                  <div className="h-40 bg-gray-800 relative">
                    <img
                      src={bonus.image}
                      alt={bonus.casino}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 px-4 py-2 rounded-md">
                        <h3 className="text-xl font-bold text-amber-500">
                          {bonus.casino}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gift className="text-amber-500" />
                      {bonus.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-lg font-semibold text-amber-500">
                      {bonus.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock size={16} />
                      <span>
                        Valid until:{" "}
                        {new Date(bonus.expiryDate).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="bg-gray-800 p-3 rounded-md">
                      <p className="text-sm text-gray-400">Bonus Code:</p>
                      <p className="font-mono font-bold text-white">
                        {bonus.code}
                      </p>
                    </div>

                    <Button
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                      onClick={() => window.open(bonus.link, "_blank")}
                    >
                      Claim Bonus <ExternalLink size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bonuses;
