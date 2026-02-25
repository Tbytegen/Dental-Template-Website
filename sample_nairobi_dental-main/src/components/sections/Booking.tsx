"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Sparkles } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export function Booking() {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Request Received",
        description: "We'll contact you shortly to confirm your slot!",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white" id="booking">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-primary p-12 text-primary-foreground space-y-6">
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">Schedule Now</h2>
            <h3 className="text-4xl font-bold font-headline">Book Your Appointment</h3>
            <p className="text-primary-foreground/70">
              Select your preferred date and service. Our team will reach out within 1 hour to finalize your visit.
            </p>
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Sparkles size={18} />
                </div>
                <span>Luxury Private Suites</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Sparkles size={18} />
                </div>
                <span>Same-day Emergencies</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 bg-background p-12">
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Full Name</label>
                <Input placeholder="Enter your name" className="bg-white" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Phone Number</label>
                <Input placeholder="E.g. +254 700..." className="bg-white" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Service Interest</label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ortho">Orthodontics</SelectItem>
                    <SelectItem value="white">Whitening</SelectItem>
                    <SelectItem value="check">Checkup</SelectItem>
                    <SelectItem value="impl">Implants</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Preferred Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-primary">Special Notes (Optional)</label>
                <Textarea placeholder="Any specific concerns?" className="bg-white min-h-[100px]" />
              </div>
              <div className="md:col-span-2 pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-lg rounded-full"
                >
                  {isSubmitting ? "Requesting..." : "Request Appointment"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}