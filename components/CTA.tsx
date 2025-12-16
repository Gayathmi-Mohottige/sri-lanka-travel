import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div
          className="
            relative
            rounded-3xl
            bg-white/70
            backdrop-blur-xl
            border border-white/40
            shadow-[0_30px_80px_rgba(0,0,0,0.15)]
            p-16
            text-center
          "
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Ready to Plan Your Sri Lanka Trip?
          </h2>

          {/* Supporting text */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us your travel ideas, preferences, and dates.  
            We’ll design a personalized Sri Lankan experience just for you.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="
              inline-block
              bg-teal-600
              text-white
              text-lg
              font-medium
              px-10
              py-4
              rounded-full
              shadow-lg
              transition-all duration-300
              hover:bg-teal-700
              hover:shadow-xl
              hover:-translate-y-0.5
            "
          >
            Plan Your Trip
          </Link>
        </div>

      </div>
    </section>
  );
}
