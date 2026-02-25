
import { Team } from '@/components/sections/Team';
import { ClinicTour } from '@/components/sections/ClinicTour';
import { Booking } from '@/components/sections/Booking';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-clinic');

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
              A Legacy of <span className="text-secondary">Exceptional Care</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Founded in 2008, Nairobi Dental has grown from a boutique practice to a regional leader in specialized dentistry. Our mission is to combine African warmth with global standards of clinical excellence.
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-muted">
            <Image 
              src={aboutImg?.imageUrl || "https://picsum.photos/seed/dental-office-interior/800/600"}
              alt={aboutImg?.description || "Modern Dental Suite Interior"}
              fill
              className="object-cover"
              priority
              data-ai-hint={aboutImg?.imageHint || "dental office"}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 text-center">
            <h4 className="text-5xl font-bold text-secondary">15+</h4>
            <p className="text-lg font-bold text-primary uppercase tracking-widest">Years of Trust</p>
            <p className="text-muted-foreground">Serving the Nairobi community since 2008.</p>
          </div>
          <div className="space-y-4 text-center">
            <h4 className="text-5xl font-bold text-secondary">25+</h4>
            <p className="text-lg font-bold text-primary uppercase tracking-widest">Global Awards</p>
            <p className="text-muted-foreground">Recognized for clinical excellence and patient care.</p>
          </div>
          <div className="space-y-4 text-center">
            <h4 className="text-5xl font-bold text-secondary">100%</h4>
            <p className="text-lg font-bold text-primary uppercase tracking-widest">Patient Focus</p>
            <p className="text-muted-foreground">Dedicated one-on-one attention for every patient.</p>
          </div>
        </div>
      </div>

      <Team />
      <ClinicTour />
      <Booking />
    </div>
  );
}
