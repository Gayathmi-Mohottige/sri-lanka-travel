import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/hero2.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Sri Lanka with Local Experts
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Tailor-made journeys, unforgettable experiences, and authentic
            Sri Lankan adventures
          </p>
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Explore Tours */}
            <Link
              href="/tours"
              className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Tours
            </Link>

            {/* Plan Your Trip */}
            <Link
              href="/contact"
              className="border border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-md"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
