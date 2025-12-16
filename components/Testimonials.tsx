const testimonials = [
  {
    name: "Emma Williams",
    country: "United Kingdom",
    feedback:
      "Our trip with GYP Travels was perfectly organized. The guides were friendly, knowledgeable, and made us feel safe throughout the journey.",
  },
  {
    name: "Daniel Müller",
    country: "Germany",
    feedback:
      "Sri Lanka was absolutely beautiful, and GYP Travels planned every detail flawlessly. Highly recommended for a stress-free experience.",
  },
  {
    name: "Sophia Rossi",
    country: "Italy",
    feedback:
      "From cultural sites to relaxing beaches, everything was customized exactly to our preferences. We couldn’t have asked for more.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who explored Sri Lanka with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                bg-white/60
                backdrop-blur-lg
                border border-white/40
                rounded-3xl
                p-8
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]
              "
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                “{testimonial.feedback}”
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-teal-600">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.country}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
