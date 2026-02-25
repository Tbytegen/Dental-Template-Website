import Link from 'next/link';
import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-secondary" />
            <span className="font-headline text-2xl font-bold">Nairobi Dental</span>
          </Link>
          <p className="text-primary-foreground/70 leading-relaxed">
            Elevating dental care in Nairobi with premium services, state-of-the-art technology, and a compassionate touch.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-xl font-bold mb-6 text-secondary">Quick Links</h4>
          <ul className="space-y-4 text-primary-foreground/80">
            <li><Link href="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors">About the Clinic</Link></li>
            <li><Link href="/about#team" className="hover:text-secondary transition-colors">Meet the Team</Link></li>
            <li><Link href="/booking" className="hover:text-secondary transition-colors">Book Online</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-xl font-bold mb-6 text-secondary">Contact Us</h4>
          <ul className="space-y-4 text-primary-foreground/80">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-secondary" />
              <span>Westlands, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-secondary" />
              <span>hello@nairobidental.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-xl font-bold mb-6 text-secondary">Opening Hours</h4>
          <ul className="space-y-2 text-primary-foreground/80">
            <li className="flex justify-between">
              <span>Mon - Fri:</span>
              <span>8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span>
              <span>9:00 AM - 4:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span>Emergency Only</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-primary-foreground/10 mt-16 pt-8 text-center text-sm text-primary-foreground/50">
        <p>&copy; {new Date().getFullYear()} Nairobi Dental Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}