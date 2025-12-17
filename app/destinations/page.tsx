import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
             <span
      className="
        inline-flex items-center
        px-4 py-1
        text-sm font-medium
        text-teal-700
        bg-teal-100
        rounded-full
        mb-8
      "
    >
      Destinations
    </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Destinations around Sri Lanka
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover iconic locations, cultural landmarks, wildlife parks,
            and beautiful coastal towns across Sri Lanka.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinations.map((place) => (
            <div
              key={place.slug}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              "
            >
              {/* Image */}
              <div className="h-[340px] md:h-[400px] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {place.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
