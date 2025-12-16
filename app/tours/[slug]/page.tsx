import { tours } from "@/data/tours";
import Link from "next/link";

export default function TourDetailsPage({ params }: { params: { slug: string } }) {
  const tour = tours.find(t => t.slug === params.slug);

  if (!tour) {
    return <div className="py-40 text-center">Tour not found</div>;
  }

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Image */}
        <div className="rounded-3xl overflow-hidden mb-10">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {tour.title}
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8">
          {tour.description}
        </p>

        <div className="flex flex-col gap-4 text-gray-700 mb-10">
          <p><strong>Duration:</strong> {tour.duration}</p>
          <p><strong>Estimated Price:</strong> {tour.priceRange}</p>
          <p>
            Prices vary depending on hotel category, season, and group size.
            Final pricing will be shared after discussing your requirements.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            inline-block
            bg-teal-600
            text-white
            px-8
            py-4
            rounded-full
            font-medium
            hover:bg-teal-700
            transition
          "
        >
          Enquire About This Tour
        </Link>

      </div>
    </section>
  );
}
