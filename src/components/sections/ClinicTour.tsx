
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { cn } from '@/lib/utils';

const tourImageIds = [
  'clinic-tour-1',
  'clinic-tour-2',
  'clinic-tour-3',
  'clinic-tour-4',
  'clinic-tour-5',
  'clinic-tour-6'
];

export function ClinicTour() {
  const tourImages = tourImageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section id="tour" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">Experience our Space</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary">Virtual Clinic Tour</h3>
          <p className="text-lg text-muted-foreground">
            Step inside Nairobi Dental. Our facilities are designed for maximum comfort and clinical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tourImages.map((img, i) => (
            <div 
              key={i} 
              className={cn(
                "relative overflow-hidden rounded-2xl group border border-border/50",
                i === 0 || i === 4 ? "md:col-span-2 h-[350px]" : "h-[350px]"
              )}
            >
              <Image
                src={img?.imageUrl || `https://picsum.photos/seed/gallery-${i}/800/600`}
                alt={img?.description || 'Clinic interior'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={img?.imageHint || 'dental clinic'}
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-white font-headline text-2xl font-bold">{img?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
