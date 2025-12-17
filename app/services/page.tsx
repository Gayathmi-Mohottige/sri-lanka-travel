import {
  MapPin,
  Plane,
  Hotel,
  Users,
  Car,
  Headset,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Customized Tour Planning",
      text: "Personalized itineraries based on your travel preferences, interests, duration, and budget.",
      icon: MapPin,
    },
    {
      title: "Airport Transfers",
      text: "Comfortable and reliable airport pickup and drop-off services with experienced drivers.",
      icon: Plane,
    },
    {
      title: "Accommodation Arrangements",
      text: "Hotel and resort bookings from budget stays to luxury experiences.",
      icon: Hotel,
    },
    {
      title: "Guided Tours & Excursions",
      text: "Experienced local guides for cultural tours, wildlife safaris, city walks, and nature excursions.",
      icon: Users,
    },
    {
      title: "Transport Services",
      text: "Safe and comfortable private transport across Sri Lanka including cars, vans, and coaches.",
      icon: Car,
    },
    {
      title: "24/7 Customer Support",
      text: "Dedicated assistance before, during, and after your journey for complete peace of mind.",
      icon: Headset,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="
              inline-block mb-4 px-4 py-1
              text-sm font-medium
              text-teal-700
              bg-teal-100
              rounded-full
            "
          >
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Travel Services Designed Around You
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From planning to execution, we take care of every detail so you can
            enjoy a smooth, stress-free journey through Sri Lanka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  bg-white/70
                  backdrop-blur-lg
                  rounded-3xl
                  p-10
                  border border-white/40
                  shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_30px_70px_rgba(13,148,136,0.25)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12 mb-6
                    flex items-center justify-center
                    rounded-xl
                    bg-teal-100
                    text-teal-700
                  "
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>

                {/* Teal Accent Line */}
                <div className="w-12 h-1 bg-teal-600 rounded-full mb-5" />

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start planning your journey?
          </p>

          <a
            href="/contact"
            className="
              inline-flex items-center justify-center
              bg-teal-600
              text-white
              px-12
              py-4
              rounded-full
              font-medium
              shadow-lg
              transition-all duration-300
              hover:bg-teal-700
              hover:shadow-[0_20px_40px_rgba(13,148,136,0.4)]
              hover:-translate-y-0.5
            "
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
