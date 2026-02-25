import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { AIAdvisorSection } from '@/components/sections/AIAdvisorSection';
import { Team } from '@/components/sections/Team';
import { ClinicTour } from '@/components/sections/ClinicTour';
import { Testimonials } from '@/components/sections/Testimonials';
import { Booking } from '@/components/sections/Booking';

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <Services />
      <AIAdvisorSection />
      <Team />
      <ClinicTour />
      <Testimonials />
      <Booking />
    </div>
  );
}