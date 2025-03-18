import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Star, Calendar, User, ThumbsUp, ThumbsDown } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: "review-1",
      casino: "20bet",
      author: "JuanGamer123",
      date: "2023-10-15",
      rating: 4.8,
      title: "Great experience with fast payouts",
      content:
        "I've been playing at 20bet for 3 months now and I'm very impressed with their service. The game selection is excellent and withdrawals are processed within 24 hours. Customer support is also very responsive.",
      likes: 24,
      dislikes: 2,
      casinoLogo:
        "https://images.unsplash.com/photo-1563941406294-7f61b88b815b?w=200&q=80",
    },
    {
      id: "review-2",
      casino: "BK8",
      author: "ManilaPlayer",
      date: "2023-09-28",
      rating: 4.5,
      title: "Generous bonuses but slow verification",
      content:
        "BK8 offers some of the best bonuses I've seen. I received a 200% match on my first deposit which gave me plenty of playing time. The only downside was the verification process which took almost 3 days. Once verified though, withdrawals were quick.",
      likes: 18,
      dislikes: 3,
      casinoLogo:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&q=80",
    },
    {
      id: "review-3",
      casino: "BC.Game",
      author: "CryptoGambler",
      date: "2023-10-05",
      rating: 4.7,
      title: "Best crypto casino for Filipinos",
      content:
        "If you're into crypto gambling, BC.Game is definitely the best option. They accept multiple cryptocurrencies and the platform is very user-friendly. I particularly enjoy their original games which have provably fair mechanics.",
      likes: 32,
      dislikes: 1,
      casinoLogo:
        "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=200&q=80",
    },
    {
      id: "review-4",
      casino: "Shuffle",
      author: "SlotFanatic",
      date: "2023-09-10",
      rating: 4.2,
      title: "Great slots selection but limited payment options",
      content:
        "Shuffle has an amazing collection of slot games from top providers. I've found some games here that aren't available on other Filipino casinos. The only drawback is they have limited payment options for local players. Would be great if they added more e-wallets.",
      likes: 15,
      dislikes: 4,
      casinoLogo:
        "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=200&q=80",
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
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
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="pt-20">
        <HeroSection
          title="Casino Reviews by Real Players"
          subtitle="Read honest reviews from Filipino players about their experiences with online casinos"
          backgroundImage="https://images.unsplash.com/photo-1596483203905-1436cad9f3ef?w=1200&q=80"
        />

        <section className="py-12 px-4 bg-gray-950">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Latest Player Reviews
            </h2>

            <div className="space-y-6">
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-700 transition-colors"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-48 bg-gray-800 p-6 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mb-4">
                        <img
                          src={review.casinoLogo}
                          alt={`${review.casino} logo`}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-center mb-2">
                        {review.casino}
                      </h3>
                      <div className="flex mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-sm text-gray-400">
                        {review.rating.toFixed(1)}/5.0
                      </p>
                    </div>

                    <div className="flex-1 p-6">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-xl text-amber-500">
                          {review.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{review.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0">
                        <p className="text-gray-300 mb-6">{review.content}</p>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-gray-400">
                            <ThumbsUp size={14} className="text-green-500" />
                            <span>{review.likes}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400">
                            <ThumbsDown size={14} className="text-red-500" />
                            <span>{review.dislikes}</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
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

export default Reviews;
