import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { Download, FileText, BookOpen, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "./BlogPost";

const guides = [
  { icon: Scale, title: "Philippine Rent Control Act (RA 9653) — Overview", desc: "A plain-language summary of what RA 9653 means for landlords and tenants." },
  { icon: FileText, title: "Demand Letter Template", desc: "Ready-to-use, lawyer-reviewed template tailored for the Philippines." },
  { icon: BookOpen, title: "Eviction Process Guide", desc: "Step-by-step from notice to writ of execution under Rule 70." },
];

export default function Resources() {
  return (
    <>
      <section className="bg-hero text-white py-16 sm:py-20">
        <div className="container-tight">
          <p className="text-accent uppercase text-xs tracking-widest font-semibold">Resources</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">Free guides, templates & tutorials</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Everything Filipino landlords need to handle non-paying tenants — legally and effectively.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight">
          <SectionHeading eyebrow="Downloads" title="Downloadable legal guides" />
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((g) => (
              <Card key={g.title} className="p-7 shadow-soft hover:shadow-card transition-shadow flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-accent-soft text-accent grid place-items-center mb-4"><g.icon className="h-6 w-6" /></div>
                <h3 className="text-lg font-semibold text-primary">{g.title}</h3>
                <p className="mt-2 text-muted-foreground flex-1">{g.desc}</p>
                <Button variant="accent" className="mt-5 self-start"><Download className="h-4 w-4" /> Download PDF</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container-tight">
          <SectionHeading eyebrow="Watch & learn" title="Video tutorials" subtitle="Quick walkthroughs for common landlord situations." />
          <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-card bg-background">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-FX3_w6CIp0"
              title="RentAlert PH tutorial"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight">
          <SectionHeading eyebrow="Articles" title="From the blog" />
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Link to={`/blog/${p.slug}`} key={p.slug} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg">
                <Card className="overflow-hidden shadow-soft hover:shadow-card transition-shadow group h-full">
                  <div className="h-40 bg-hero relative">
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-primary text-lg group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{p.excerpt}</p>
                    <div className="mt-4 inline-flex items-center text-accent font-medium text-sm">Read more <ArrowRight className="h-4 w-4 ml-1" /></div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
