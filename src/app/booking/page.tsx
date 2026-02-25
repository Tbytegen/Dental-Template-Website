import { Booking } from '@/components/sections/Booking';

export default function BookingPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="py-12 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Reserve Your Visit</h1>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Experience premium dental care. Fill out the form below and we'll handle the rest.
          </p>
        </div>
      </div>
      <Booking />
    </div>
  );
}