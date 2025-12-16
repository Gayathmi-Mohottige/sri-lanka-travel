export default function AboutPage() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero Intro */}
        <div className="text-center mb-24">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-teal-700 bg-teal-100 rounded-full">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Sri Lanka with GYP Travels
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We craft meaningful travel experiences that go beyond sightseeing,
            connecting you with the culture, nature, and people of Sri Lanka.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Who We Are */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h2>
            <div className="w-12 h-1 bg-teal-600 mb-6 rounded-full" />
            <p className="text-gray-700 leading-relaxed">
              GYP Travels is a Sri Lanka–based travel company built on local
              expertise and a passion for hospitality. We specialize in
              tailor-made journeys that reflect the authentic spirit of the
              island rather than generic travel packages.
            </p>
          </div>

          {/* Why Sri Lanka */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Sri Lanka
            </h2>
            <div className="w-12 h-1 bg-teal-600 mb-6 rounded-full" />
            <p className="text-gray-700 leading-relaxed">
              Sri Lanka offers an extraordinary variety of experiences within a
              compact island — ancient heritage, lush mountains, wildlife
              safaris, scenic train journeys, and pristine beaches, all within
              a few hours’ travel.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-white rounded-3xl p-12 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Why Choose GYP Travels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Personalized itineraries designed around your interests",
              "Experienced local guides with deep destination knowledge",
              "Comfort, safety, and reliable transport throughout your journey",
              "Transparent communication and attentive customer care",
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6"
              >
                <span className="w-2 h-2 mt-2 bg-teal-600 rounded-full" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-24 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you’re planning your first visit or returning to explore
            deeper, GYP Travels is here to help you experience Sri Lanka with
            confidence, comfort, and genuine local insight.
          </p>
        </div>

      </div>
    </section>
  );
}
