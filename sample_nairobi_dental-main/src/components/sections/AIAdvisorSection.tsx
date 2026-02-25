"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Send, Loader2, Info } from 'lucide-react';
import { dentalHealthAdvisor } from '@/ai/flows/dental-health-advisor-flow';
import { useToast } from '@/hooks/use-toast';

export function AIAdvisorSection() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ advice: string; consultationAdvised: boolean } | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await dentalHealthAdvisor({ query });
      setResult(response);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary font-medium text-sm">
              <Sparkles size={16} />
              <span>Smart Dental Health Advisor</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Have a Dental Concern? <br />
              <span className="text-secondary">Ask Our AI Expert.</span>
            </h2>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Our AI-powered advisor provides instant, general dental health guidance. Whether it's about hygiene tips or identifying if you need a checkup, we're here to help.
            </p>
            
            <ul className="space-y-4">
              {['Instant general dental advice', 'Symptom awareness guidance', 'Available 24/7 for quick queries'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Sparkles size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-background/95 backdrop-blur shadow-2xl border-none">
            <CardContent className="p-8 space-y-6">
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Your Question</label>
                    <Textarea 
                      placeholder="E.g., I have a sharp pain when drinking cold water, what could it be?" 
                      className="min-h-[150px] text-lg border-primary/10 focus:ring-secondary"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-lg rounded-full"
                    disabled={isLoading || !query.trim()}
                  >
                    {isLoading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                    Get AI Advice
                  </Button>
                  <p className="text-xs text-muted-foreground text-center italic">
                    Note: This tool provides general info only and is not a replacement for professional diagnosis.
                  </p>
                </form>
              ) : (
                <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <h4 className="font-bold text-primary flex items-center gap-2 mb-4">
                      <Sparkles className="text-secondary" /> AI Response:
                    </h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {result.advice}
                    </p>
                  </div>

                  {result.consultationAdvised && (
                    <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl flex items-start gap-3">
                      <Info className="text-secondary shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-bold text-primary">Professional Consultation Advised</p>
                        <p className="text-sm text-primary/70">Based on your description, we recommend speaking with a dentist soon.</p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setResult(null)}
                      className="flex-1 rounded-full h-12"
                    >
                      Ask Another
                    </Button>
                    <Button 
                      asChild
                      className="flex-1 rounded-full h-12 bg-secondary text-primary hover:bg-secondary/90"
                    >
                      <a href="/booking">Book Consultation</a>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}