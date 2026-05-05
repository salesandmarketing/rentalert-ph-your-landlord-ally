import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Facebook, Instagram, Twitter, Youtube, Music2, Mail } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message too short").max(1000),
});

const socials = [
  { href: "https://facebook.com/RentAlertPH", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com/RentAlertPH", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/RentAlertPH", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com/@RentAlertPH", icon: Youtube, label: "YouTube" },
  { href: "https://tiktok.com/@RentAlertPH", icon: Music2, label: "TikTok" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Please check your inputs", description: r.error.issues[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="bg-hero text-white py-16 sm:py-20">
        <div className="container-tight max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Get in touch</h1>
          <p className="mt-4 text-white/80 text-lg">Questions, feedback, or partnership ideas? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid lg:grid-cols-3 gap-10">
          <Card className="p-8 shadow-card lg:col-span-2">
            <form onSubmit={submit} className="space-y-5">
              <div>
                <Label htmlFor="cname">Name</Label>
                <Input id="cname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
              </div>
              <div>
                <Label htmlFor="cemail">Email</Label>
                <Input id="cemail" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
              </div>
              <div>
                <Label htmlFor="cmsg">Message</Label>
                <Textarea id="cmsg" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} required />
              </div>
              <Button type="submit" variant="accent" size="lg">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-7">
              <Mail className="h-6 w-6 text-accent" />
              <p className="mt-3 font-semibold text-primary">Email us</p>
              <a href="mailto:hello@rentalertph.com" className="text-muted-foreground hover:text-accent">hello@rentalertph.com</a>
            </Card>
            <Card className="p-7">
              <p className="font-semibold text-primary">Follow us</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="h-10 w-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground grid place-items-center transition-colors text-primary">
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}