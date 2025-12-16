const destinations = [
  {
    name: "Sigiriya",
    image: "/images/destinations/sigiriya.jpg",
  },
  {
    name: "Kandy",
    image: "/images/destinations/kandy.jpg",
  },
  {
    name: "Mirissa",
    image: "/images/destinations/mirissa.jpg",
  },
  {
    name: "Galle Fort",
    image: "/images/destinations/galle.jpg",
  },
  {
    name: "Ella",
    image: "/images/destinations/ella.jpg",
  },
  {
    name: "Yala National Park",
    image: "/images/destinations/yala.jpg",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most loved destinations across Sri Lanka.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="relative h-[320px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover
                           transition-transform duration-700
                           group-hover:scale-110"
              />

              {/* Soft dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Text */}
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-semibold text-white drop-shadow">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
