"use client";

import Hero from "../components/Hero";
import LiveFeed from "../components/LiveFeed";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import { MyProvider } from "./context";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  ];
  return (
    <MyProvider>
      <div className=" bg-gradient-to-r from-blue-100 to-pink-100">
        <header className="bg-spot-left bg-spot-right">
          <div className="container mx-auto px-6 py-10">
            <Hero />
          </div>
        </header>

        <section className="container mx-auto px-6 py-12">
          <div className="mt-8">
            <h3 className="text-center text-xl font-semibold mb-6">
              Таны авах үр дүн
            </h3>
            {/* small gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md h-30 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center"
                >
                  <img src={img} alt={""} className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <LiveFeed />

          <HowItWorks />

          <Testimonials />
        </section>
      </div>
    </MyProvider>
  );
}
