import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedTours from "@/components/FeaturedTours";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <FeaturedTours />
      <PopularDestinations />
      <Testimonials />
      <CTA />
    </main>
  );
}
