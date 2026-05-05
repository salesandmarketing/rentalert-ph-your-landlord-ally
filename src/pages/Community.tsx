import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Users, Facebook } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  location: z.string().trim().min(1, "Province/City is required").max(100),
  propertyType: z.string().min(1, "Select a property type"),
});

export default function Community() {
  const [form, setForm] = useState({ name: "", email: "", location: "", propertyType: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Please check your inputs", description: r.error.issues[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Welcome to the community! 🎉", description: "Check your inbox for the welcome guide." });
    setForm({ name: "", email: "", location: "", propertyType: "" });
  };

  return (
    <>
      <section className="bg-hero text-white py-16 sm:py-20">
        <div className="container-tight max-w-3xl text-center">
          <Users className="h-12 w-12 mx-auto text-accent" />
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">You're not alone.</h1>
          <p className="mt-4 text-white/80 text-lg">Join thousands of Filipino landlords helping each other navigate non-paying tenants.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid lg:grid-cols-2 gap-10">
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold text-primary">Join the newsletter</h2>
            <p className="mt-2 text-muted-foreground">Get weekly tips, legal updates, and templates straight to your inbox.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
              </div>
              <div>
                <Label htmlFor="location">Province / City</Label>
                <Input id="location" placeholder="e.g. Quezon City" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} maxLength={100} required />
              </div>
              <div>
                <Label htmlFor="ptype">Type of Property</Label>
                <Select value={form.propertyType} onValueChange={(v) => setForm({ ...form, propertyType: v })}>
                  <SelectTrigger id="ptype"><SelectValue placeholder="Select property type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo Unit</SelectItem>
                    <SelectItem value="boarding">Boarding House</SelectItem>
                    <SelectItem value="house">Single House</SelectItem>
                    <SelectItem value="commercial">Commercial Space</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full">Join Free</Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 shadow-soft">
              <Facebook className="h-8 w-8 text-[#1877F2]" />
              <h2 className="mt-3 text-2xl font-bold text-primary">Facebook Group</h2>
              <p className="mt-2 text-muted-foreground">Join our private Facebook group for Filipino landlords. Share stories, ask questions, get advice.</p>
              <div className="mt-6 aspect-video bg-secondary rounded-xl grid place-items-center text-muted-foreground text-sm">
                [Facebook Group Embed]
              </div>
              <Button asChild variant="default" className="mt-5">
                <a href="https://facebook.com/groups/RentAlertPH" target="_blank" rel="noopener noreferrer">Join the Group</a>
              </Button>
            </Card>
            <Card className="p-8 bg-accent-soft border-accent/30">
              <p className="text-primary font-semibold">"Huwag mag-alala, may solusyon tayo!"</p>
              <p className="mt-2 text-muted-foreground text-sm">Whatever you're going through with your tenant, someone in our community has been there — and we're here to help you through it.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}