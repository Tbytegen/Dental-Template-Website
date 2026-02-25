import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000 ease-out">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-semibold text-sm tracking-tight">
              <Sparkles size={16} className="animate-pulse" />
              <span>Nairobi's Most Trusted Dental Clinic</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold text-primary leading-[1.05] font-headline tracking-tighter">
                Premium Care for Your <span className="text-secondary italic relative">
                  Perfect Smile
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10.5C33.5 3.5 133.5 -4.5 199 10.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-body">
                Experience world-class dental services in the heart of Nairobi. We combine clinical excellence with a luxury experience to give you the confidence you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 rounded-full h-16 shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95">
                <Link href="/booking" className="flex items-center gap-2">
                  Book Your Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-10 rounded-full h-16 transition-all font-bold">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10 border-t border-border/60">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary font-headline tracking-tight">15+</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="space-y-1 border-l border-border/60 pl-8">
                <p className="text-3xl font-bold text-primary font-headline tracking-tight">10k+</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Happy Patients</p>
              </div>
              <div className="hidden sm:block space-y-1 border-l border-border/60 pl-8">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-secondary text-secondary" />)}
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Top Rated Clinic</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visuals */}
          <div className="relative group animate-in fade-in slide-in-from-right duration-1000 delay-200">
            {/* Main Image Frame */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={heroImage?.imageUrl || "https://picsum.photos/seed/dental-hero/800/1000"}
                alt="Exquisite smile at Nairobi Dental"
                fill
                className="object-cover"
                priority
                data-ai-hint="smiling african family"
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating Testimonial Card */}
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-12 h-12 rounded-full border-2 border-white/40 overflow-hidden relative shadow-lg">
                        <Image src={`https://picsum.photos/seed/patient-${n}/100/100`} alt="Patient" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-primary border-2 border-white/40 shadow-lg">
                      +1k
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium leading-tight mb-2">"The best dental experience I've had in Nairobi. Painless and professional!"</p>
                <p className="text-sm font-bold text-secondary tracking-widest uppercase">Verified Patient</p>
              </div>
            </div>
            
            {/* Background decorative shapes */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            
            {/* Floating Element - "Luxury" */}
            <div className="absolute -top-6 -left-6 z-20 bg-background border border-border px-6 py-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Experience</p>
                  <p className="font-bold text-primary">Luxury Suites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}