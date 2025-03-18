import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";
import { Shield, Award, Users, Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Maria Santos",
      role: "Casino Expert",
      bio: "Maria has over 10 years of experience in the online gambling industry and specializes in reviewing casino games and bonuses.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    {
      name: "Juan Reyes",
      role: "Security Analyst",
      bio: "Juan evaluates the security measures of online casinos to ensure they meet our strict standards for player protection.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
    },
    {
      name: "Sofia Cruz",
      role: "Customer Support Specialist",
      bio: "Sofia tests the customer support quality of each casino we review, ensuring they provide excellent service to Filipino players.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
    },
    {
      name: "Miguel Lim",
      role: "Payment Methods Expert",
      bio: "Miguel analyzes the payment options, processing times, and fees of online casinos to help players find the most convenient options.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gray-900 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] opacity-70" />

          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About PhilCasino
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted guide to finding the best online casinos in the
              Philippines
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 px-4 bg-gray-950">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300">
                At PhilCasino, we're dedicated to providing Filipino players
                with accurate, unbiased information about online casinos. Our
                mission is to help you find safe, secure, and enjoyable gaming
                experiences tailored to your preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Shield className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Safety First</h3>
                  <p className="text-gray-300">
                    We only recommend licensed and regulated casinos that
                    prioritize player security and responsible gaming.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Award className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Honest Reviews</h3>
                  <p className="text-gray-300">
                    Our team thoroughly tests each casino and provides
                    transparent, detailed reviews based on real experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community Focused</h3>
                  <p className="text-gray-300">
                    We value feedback from Filipino players and continuously
                    update our recommendations based on community experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 overflow-hidden"
                >
                  <div className="h-48 bg-gray-700 flex items-center justify-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full border-4 border-amber-500"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-amber-500 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="py-16 px-4 bg-gray-950">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Mail className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Email Us</h3>
                  <p className="text-gray-300">support@philcasino.com</p>
                  <p className="text-gray-400 text-sm mt-2">
                    We respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Phone className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Call Us</h3>
                  <p className="text-gray-300">+63 2 8888 8888</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Mon-Fri, 9am-5pm PHT
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MapPin className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-gray-300">Makati City, Metro Manila</p>
                  <p className="text-gray-400 text-sm mt-2">Philippines</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
