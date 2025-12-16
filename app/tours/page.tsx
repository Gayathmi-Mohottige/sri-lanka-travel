import { tours } from "@/data/tours";
import Link from "next/link";

export default function ToursPage() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Tours
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            All tours are flexible and can be customized to suit your travel style.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {tour.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {tour.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-6">
                  <span><strong>Duration:</strong> {tour.duration}</span>
                  <span><strong>Price:</strong> {tour.priceRange}</span>
                </div>

                <Link
                  href="/contact"
                  className="text-teal-600 font-medium hover:underline"
                >
                  Enquire about this tour →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
