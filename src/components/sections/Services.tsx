import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Smile, Shield, Sparkles, HeartPulse, Zap, Users } from 'lucide-react';

const services = [
  {
    title: "Orthodontics",
    description: "Modern braces and clear aligners to give you the perfectly straight smile you've always dreamed of.",
    icon: Sparkles,
    color: "bg-secondary/10 text-secondary"
  },
  {
    title: "Teeth Whitening",
    description: "Professional medical-grade whitening treatments that brighten your smile in just one session.",
    icon: Zap,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth using premium titanium implants.",
    icon: Shield,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "General Checkup",
    description: "Comprehensive oral exams and professional cleaning to maintain your dental health.",
    icon: HeartPulse,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Pediatric Dentistry",
    description: "Specialized, gentle care for our youngest patients in a friendly and fun environment.",
    icon: Users,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your appearance with veneers, bonding, and full smile makeovers.",
    icon: Smile,
    color: "bg-orange-500/10 text-orange-500"
  }
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary">Comprehensive Dental Care</h3>
          <p className="text-lg text-muted-foreground">
            From routine maintenance to complex surgical procedures, our expert team provides a full spectrum of dental solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px] bg-background">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-2 group/btn">
                  Learn More 
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary group-hover/btn:bg-secondary text-white transition-colors">
                    +
                  </span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}