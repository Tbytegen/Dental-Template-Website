import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const team = [
  {
    name: "Dr. Kwame Mensah",
    role: "Lead Orthodontist",
    specialty: "Smile Design & Braces",
    image: PlaceHolderImages.find(img => img.id === 'dentist-1')?.imageUrl
  },
  {
    name: "Dr. Evelyne Reed",
    role: "Cosmetic Dentist",
    specialty: "Veneers & Whitening",
    image: PlaceHolderImages.find(img => img.id === 'dentist-2')?.imageUrl
  },
  {
    name: "Dr. Jabari Tunde",
    role: "Oral Surgeon",
    specialty: "Implants & Maxillofacial",
    image: PlaceHolderImages.find(img => img.id === 'dentist-3')?.imageUrl
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">Our Specialists</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary">Meet Our Expert Team</h3>
            <p className="text-lg text-muted-foreground">
              Our team consists of internationally trained specialists dedicated to providing the highest quality dental care in a welcoming environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg group">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={member.image || `https://picsum.photos/seed/team-${index}/600/800`}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint="african dentist"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-bold text-lg">Specialist in:</p>
                    <p className="text-secondary font-medium">{member.specialty}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h4 className="text-2xl font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-secondary font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}