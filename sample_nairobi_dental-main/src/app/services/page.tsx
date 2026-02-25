import { Services } from '@/components/sections/Services';
import { Booking } from '@/components/sections/Booking';
import Image from 'next/image';
import { PlaceHolderImages } from '../lib/placeholder-images';

export default function ServicesPage() {
  const serviceImg = PlaceHolderImages.find(img => img.id === 'service-implants');

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">World-Class Services</h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Combining medical expertise with artistic precision to give you the smile you deserve.
          </p>
        </div>
      </section>

      <Services />

      {/* Featured Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={serviceImg?.imageUrl || "https://picsum.photos/seed/service/800/600"}
                alt="Detailed dental procedure"
                fill
                className="object-cover"
                data-ai-hint="dental patient"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary">Advanced Restorative Dentistry</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our restorative procedures are designed to return your teeth to their natural state, both in function and appearance. We use the highest grade materials sourced from leading international labs to ensure longevity and aesthetics.
              </p>
              <ul className="space-y-4">
                {[
                  "Biocompatible porcelain crowns",
                  "Digital impression technology (No goop!)",
                  "Computer-guided implant surgery",
                  "Microscopic endodontics for precision"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-medium text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Booking />
    </div>
  );
}