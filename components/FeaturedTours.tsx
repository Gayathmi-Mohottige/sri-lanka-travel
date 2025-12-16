"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

const tours = [
  {
    title: "Cultural Heritage Tour",
    description: "Ancient cities, temples, and Sri Lanka's rich history.",
    image: "/images/tours/culture.jpg",
  },
  {
    title: "Wildlife & Safari",
    description: "Elephants, leopards, and breathtaking national parks.",
    image: "/images/tours/wildlife.jpg",
  },
  {
    title: "Beach & Relaxation",
    description: "Golden beaches and crystal-clear waters.",
    image: "/images/tours/beach.jpg",
  },
  {
    title: "Hill Country & Tea Plantations",
    description: "Misty mountains, scenic train rides, and tea estates.",
    image: "/images/tours/hill-country.jpg",
  },
  {
    title: "Adventure & Hiking",
    description: "Waterfalls, hikes, and nature adventures.",
    image: "/images/tours/adventure.jpg",
  },
];

export default function FeaturedTours() {
  return (
    <section className="py-36 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Tours
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular Sri Lankan travel experiences.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            centeredSlides
            loop
            spaceBetween={40}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="featuredToursSwiper"
          >
            {tours.map((tour) => (
              <SwiperSlide key={tour.title}>
                <Link href="/tours" className="block">
                <div className="tour-card relative h-[520px] rounded-3xl overflow-hidden bg-white">
                  {/* Image */}
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Darker gradient overlay for better white text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Content with white text */}
                  <div className="absolute bottom-0 p-8 text-white w-full">
                    <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
                      {tour.title}
                    </h3>
                    <p className="text-gray-100 text-base leading-relaxed drop-shadow-md">
                      {tour.description}
                    </p>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
           className="
            custom-prev
            absolute left-0 top-1/2
            -translate-y-1/2 -translate-x-1/2
            z-30
            w-12 h-12
            rounded-full
            bg-teal-50
            text-teal-600
            flex items-center justify-center
            shadow-lg
            transition-all duration-300
            hover:bg-teal-100
            hover:scale-110
        "
        >
        <ChevronLeft className="w-6 h-6" />
        </button>

        <button
        className="
            custom-next
            absolute right-0 top-1/2
            -translate-y-1/2 translate-x-1/2
            z-30
            w-12 h-12
            rounded-full
            bg-teal-50
            text-teal-600
            flex items-center justify-center
            shadow-lg
            transition-all duration-300
            hover:bg-teal-100
            hover:scale-110
        "
        >
        <ChevronRight className="w-6 h-6" />
        </button>

        </div>
      </div>
    </section>
  );
}