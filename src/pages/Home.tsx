import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, FileText, Users, AlertTriangle, Clock, Scale, Quote, ArrowRight } from "lucide-react";

const pains = [
  { icon: AlertTriangle, title: "Tenant hasn't paid in months", text: "You're losing income while bills stack up — and your tenant keeps making excuses." },
  { icon: Clock, title: "Afraid of confrontation", text: "Hindi mo alam kung paano lalapitan — without escalating into a heated argument or worse." },
  { icon: Scale, title: "Don't know your legal rights", text: "RA 9653, Rule 70, Barangay process… it all feels like a maze without clear answers." },
];

const features = [
  { icon: FileText, title: "Free Legal Templates", text: "Demand letters, notices to vacate, and Barangay complaint forms — drafted for Philippine law." },
  { icon: ShieldCheck, title: "Step-by-Step Eviction Guide", text: "Follow the exact legal process from Demand Letter to Writ of Execution. No guesswork." },
  { icon: Users, title: "Landlord Community", text: "Connect with other Filipino landlords who've been there. Share advice, win together." },
];

const testimonials = [
  { name: "Marites D.", role: "Boarding house owner, Quezon City", text: "Akala ko wala na akong magagawa sa tenant ko na 6 months delinquent. Sa demand letter template ng RentAlert, nagbayad sila within 2 weeks!" },
  { name: "Roberto S.", role: "Condo owner, Makati", text: "The step-by-step guide saved me thousands in legal fees. Filed at the Barangay myself and won." },
  { name: "Liza M.", role: "Apartment owner, Cebu", text: "Finally a resource for Filipino landlords. Nakakapagod mag-Google ng US laws. Specific tayo dito sa Pinas." },
];

const faqs = [
  { q: "Is this service free?", a: "Yes. Our guides, templates, and community access are 100% free for Filipino landlords." },
  { q: "Can I evict a tenant immediately if they don't pay?", a: "No. Under Philippine law (Rule 70 & RA 9653), you must follow due process: written demand, Barangay conciliation, and a court case if unresolved." },
  { q: "Do you provide legal representation?", a: "We provide informational resources only. For your specific case, we recommend consulting a licensed Philippine attorney." },
  { q: "What is RA 9653?", a: "The Rent Control Act of 2009 — it regulates rent increases and outlines grounds for eviction in the Philippines." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(36 91% 55% / 0.4), transparent 40%), radial-gradient(circle at 80% 60%, hsl(36 91% 55% / 0.25), transparent 40%)" }} />
        <div className="container-tight relative py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              For Filipino Landlords
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Tired of <span className="text-accent">Chasing Rent?</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              RentAlert PH helps Filipino landlords take back control — legally, swiftly, and confidently.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/resources">Get Free Legal Guide <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/community">Join the Community</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
              <div><span className="text-2xl font-bold text-white block">5,000+</span>Landlords helped</div>
              <div className="h-10 w-px bg-white/20" />
              <div><span className="text-2xl font-bold text-white block">100%</span>PH-specific law</div>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-up">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-full bg-accent grid place-items-center text-accent-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Legal Action Roadmap</p>
                  <p className="text-xs text-white/60">Philippine-specific</p>
                </div>
              </div>
              <ol className="space-y-4">
                {["Send Demand Letter", "Barangay Conciliation", "File at MTC (Rule 70)", "Writ of Execution"].map((s, i) => (
                  <li key={s} className="flex gap-4 items-start">
                    <div className="h-7 w-7 rounded-full bg-accent text-accent-foreground text-sm font-bold grid place-items-center shrink-0">{i + 1}</div>
                    <span className="text-white/90 pt-0.5">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 sm:py-24">
        <div className="container-tight">
          <SectionHeading eyebrow="Sound familiar?" title="The struggle is real" subtitle="You're not alone. These are the most common challenges Filipino landlords face every day." />
          <div className="grid md:grid-cols-3 gap-6">
            {pains.map((p) => (
              <Card key={p.title} className="p-7 shadow-soft hover:shadow-card transition-shadow border-border">
                <div className="h-12 w-12 rounded-xl bg-accent-soft text-accent grid place-items-center mb-5">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 sm:py-24 bg-secondary/50">
        <div className="container-tight">
          <SectionHeading eyebrow="How we help" title="Tools, guides, and community — built for the Philippines" />
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-background rounded-2xl p-7 shadow-card">
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-5">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="container-tight">
          <SectionHeading eyebrow="Landlord stories" title="Real Filipino landlords. Real results." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-7 border-border relative">
                <Quote className="h-8 w-8 text-accent/40 absolute top-5 right-5" />
                <p className="text-foreground/90">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-secondary/50">
        <div className="container-tight max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <Accordion type="single" collapsible className="bg-background rounded-2xl shadow-soft px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-tight">
          <div className="bg-hero rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to take back control?</h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">Download our free Demand Letter Template and start the legal process today.</p>
            <Button asChild variant="hero" size="xl" className="mt-7">
              <Link to="/resources">Get Free Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}