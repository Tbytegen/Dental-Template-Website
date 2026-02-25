import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Sarah Wanjiku",
    role: "Business Consultant",
    text: "The experience was absolutely world-class. Dr. Kwame explained everything clearly and the facility is stunning. Best dental clinic in Nairobi!",
    rating: 5,
    avatar: "SW"
  },
  {
    name: "David Ochieng",
    role: "Tech Entrepreneur",
    text: "I used to fear dental visits, but Nairobi Dental changed that. The painless procedure and the calming environment are just perfect.",
    rating: 5,
    avatar: "DO"
  },
  {
    name: "Zainab Ali",
    role: "Educator",
    text: "The orthodontic treatment I received here was exceptional. My smile has never looked better, and the team is so professional.",
    rating: 5,
    avatar: "ZA"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">Patient Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary">Voices of Confidence</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white border-none shadow-sm relative pt-12">
              <div className="absolute top-[-24px] left-1/2 -translate-x-1/2">
                <Avatar className="w-16 h-16 border-4 border-background shadow-lg">
                  <AvatarFallback className="bg-primary text-secondary font-bold">{t.avatar}</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, star) => (
                    <Star key={star} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg text-primary italic leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}