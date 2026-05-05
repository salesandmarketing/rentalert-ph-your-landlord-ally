import { Button } from "@/components/ui/button";
import { Download, FileText, MessageSquare, Gavel, FileCheck } from "lucide-react";

const steps = [
  { icon: FileText, title: "Send a Demand Letter", desc: "Formally notify the tenant in writing of unpaid rent and demand payment within a reasonable period (usually 15 days). Document everything — keep proof of receipt." },
  { icon: MessageSquare, title: "Barangay Conciliation", desc: "Under the Katarungang Pambarangay Law, disputes between residents of the same city/municipality must first be brought before the Lupong Tagapamayapa for mediation." },
  { icon: Gavel, title: "File an Ejectment Case at the MTC", desc: "If conciliation fails (Certificate to File Action issued), file an unlawful detainer case under Rule 70 at the Municipal Trial Court with jurisdiction over the property." },
  { icon: FileCheck, title: "Writ of Execution", desc: "Once judgment is rendered in your favor and becomes final, request a Writ of Execution to legally enforce the eviction with the help of a court sheriff." },
];

const laws = [
  { code: "RA 9653", name: "Rent Control Act of 2009", note: "Caps rent increases and outlines grounds for ejectment." },
  { code: "Rule 70", name: "Rules of Court — Forcible Entry & Unlawful Detainer", note: "Governs the legal process for ejectment cases." },
  { code: "PD 1508 / RA 7160", name: "Katarungang Pambarangay Law", note: "Requires Barangay-level conciliation before filing in court." },
];

export default function LegalGuide() {
  return (
    <>
      <section className="bg-hero text-white py-16 sm:py-20">
        <div className="container-tight max-w-3xl">
          <p className="text-accent uppercase text-xs tracking-widest font-semibold">Legal Guide</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">The Philippine eviction process, simplified</h1>
          <p className="mt-4 text-white/80">Follow these four legally-required steps under Philippine law to recover your property and unpaid rent.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight max-w-3xl">
          <ol className="relative border-l-2 border-accent/30 pl-8 space-y-10">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="absolute -left-[2.65rem] top-0 h-12 w-12 rounded-full bg-accent text-accent-foreground grid place-items-center font-bold shadow-gold">
                  {i + 1}
                </div>
                <div className="bg-background rounded-2xl shadow-card p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <s.icon className="h-5 w-5 text-accent" />
                    <h2 className="text-xl font-semibold text-primary">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 bg-secondary/60 rounded-2xl p-7 sm:p-9 border border-border">
            <h2 className="text-2xl font-bold text-primary">Key Philippine laws to know</h2>
            <div className="mt-5 space-y-4">
              {laws.map((l) => (
                <div key={l.code} className="flex gap-4">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1.5 rounded h-fit whitespace-nowrap">{l.code}</span>
                  <div>
                    <p className="font-semibold text-primary">{l.name}</p>
                    <p className="text-sm text-muted-foreground">{l.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 bg-hero text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold">Need a Demand Letter Template?</h3>
            <p className="mt-2 text-white/80">Download our lawyer-reviewed template tailored for Philippine law.</p>
            <Button variant="hero" size="xl" className="mt-6"><Download className="h-4 w-4" /> Download Template</Button>
          </div>

          <p className="mt-10 text-sm text-muted-foreground italic text-center">
            Disclaimer: This guide is for informational purposes only and does not constitute legal advice. Always consult a licensed Philippine attorney for your specific situation.
          </p>
        </div>
      </section>
    </>
  );
}