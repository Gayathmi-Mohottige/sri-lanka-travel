import {
  MapPin,
  Compass,
  ShieldCheck,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Local Expertise",
    description:
      "Travel with experienced local guides who know Sri Lanka inside out.",
    icon: MapPin,
  },
  {
    title: "Custom Itineraries",
    description:
      "Every trip is tailored to your interests, pace, and travel style.",
    icon: Compass,
  },
  {
    title: "Trusted & Reliable",
    description:
      "Licensed tour operator with a strong focus on safety and comfort.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    description:
      "We are always available to support you throughout your journey.",
    icon: Headset,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer authentic Sri Lankan travel experiences with comfort,
            safety, and personal care at every step.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
                <div
                    key={feature.title}
                        className="
                            group
                            bg-white/50 md:bg-white/40
                            backdrop-blur-lg md:backdrop-blur-xl
                            border border-white/30
                            rounded-2xl
                            p-8
                            text-center
                            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                        "
                >
                    <div className="flex justify-center mb-5">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full
                                        bg-teal-50 text-teal-600">
                            <Icon size={26} />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                    {feature.description}
                    </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
