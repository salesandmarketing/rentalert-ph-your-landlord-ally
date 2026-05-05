import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  content: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "how-to-write-demand-letter-philippines",
    title: "How to Write a Demand Letter in the Philippines",
    tag: "Templates",
    excerpt: "A clear demand letter is your first legal step — here's the exact structure to use.",
    author: "RentAlert PH Team",
    date: "March 12, 2026",
    readTime: "6 min read",
    content: [
      {
        paragraphs: [
          "If your tenant has stopped paying rent, the very first formal step you should take as a Filipino landlord is to send a written Demand Letter. Huwag mag-alala — this is not yet a court case. It's a polite but firm legal notice that protects you later if you need to file an unlawful detainer case under Rule 70 of the Rules of Court.",
          "Without a proper demand letter, the court can dismiss your eviction case outright. That's why getting this document right matters.",
        ],
      },
      {
        heading: "Why a demand letter is required",
        paragraphs: [
          "Under Section 2, Rule 70 of the Rules of Court, a landlord must first make a demand to (a) pay the unpaid rent or comply with the lease conditions, AND (b) vacate the premises. Both demands must be made before you can file an ejectment case.",
          "The demand can be served personally, by registered mail with return card, or by posting it on the premises if the tenant refuses to receive it.",
        ],
      },
      {
        heading: "Required elements of a Philippine demand letter",
        paragraphs: [
          "1. Date and your complete address as landlord/lessor.",
          "2. Full name and address of the tenant/lessee.",
          "3. Description of the leased property (unit number, address).",
          "4. Statement of the unpaid amount, the months covered, and the contractual due date.",
          "5. A clear demand to PAY the arrears within a specific period (commonly 15 days).",
          "6. A clear demand to VACATE the premises if payment is not made.",
          "7. Warning that legal action (ejectment, damages, attorney's fees) will follow.",
          "8. Your signature, printed name, and contact details.",
        ],
      },
      {
        heading: "Sample opening paragraph",
        paragraphs: [
          "\"This is to formally demand payment of your unpaid rentals for the unit located at [address] in the total amount of PHP [amount], covering the months of [months]. You are hereby given fifteen (15) days from receipt of this letter to settle the said amount in full and to vacate the premises, failing which the undersigned shall be constrained to file the appropriate legal action without further notice.\"",
        ],
      },
      {
        heading: "After sending the letter",
        paragraphs: [
          "Keep the registry receipt and return card — these are your proof of service in court. If the tenant still refuses to pay or vacate after the demand period, your next step is Barangay Conciliation under the Katarungang Pambarangay Law before filing in the Municipal Trial Court.",
        ],
      },
    ],
  },
  {
    slug: "ra-9653-rent-control-act-rights",
    title: "What Does RA 9653 Say About Your Rights?",
    tag: "Law",
    excerpt: "Understand rent caps, allowable increases, and grounds for eviction under the Rent Control Act.",
    author: "RentAlert PH Team",
    date: "March 18, 2026",
    readTime: "8 min read",
    content: [
      {
        paragraphs: [
          "Republic Act No. 9653, also known as the Rent Control Act of 2009, governs residential units in the Philippines with monthly rent within covered thresholds. It has been extended multiple times and continues to set the rules on how much you can charge, how often you can raise rent, and when you can legally evict.",
        ],
      },
      {
        heading: "Which units are covered",
        paragraphs: [
          "RA 9653 originally covered residential units with monthly rent of up to PHP 10,000 in Metro Manila and other highly urbanized cities, and PHP 5,000 in all other areas. Subsequent extensions by the Housing and Urban Development Coordinating Council (HUDCC) and now the Department of Human Settlements and Urban Development (DHSUD) have updated and maintained these coverage rules.",
          "Boarding houses, dormitories, bedspaces and rooms for rent are also covered when they fall within the rent ceilings.",
        ],
      },
      {
        heading: "Limits on rent increases",
        paragraphs: [
          "For covered units, the law caps annual rent increases (commonly at no more than a single-digit percentage per year for occupied units). You may not increase the rent more than once every 12 months for the same tenant. New tenants can be charged a new rate, but still within the ceiling rules.",
        ],
      },
      {
        heading: "Legal grounds for eviction under RA 9653",
        paragraphs: [
          "Section 9 lists the lawful grounds, including: (a) assignment or subleasing without the landlord's written consent; (b) the landlord's legitimate need of the unit for personal use (with proper notice and conditions); (c) need for necessary repairs ordered by authorities; (d) expiration of the lease contract; and (e) arrears in payment of rent for a total of three (3) months.",
          "This last ground is the most common — three months of unpaid rent gives you a clear legal basis to demand the unit back.",
        ],
      },
      {
        heading: "Deposits and advance rent",
        paragraphs: [
          "The law limits advance rent to one (1) month and security deposit to two (2) months. The deposit must be kept in a bank and is refundable, less unpaid utilities or damages, within one month after the tenant vacates.",
        ],
      },
    ],
  },
  {
    slug: "barangay-eviction-filing-guide",
    title: "Step-by-Step Guide to Filing an Eviction Case at the Barangay",
    tag: "Process",
    excerpt: "Katarungang Pambarangay is required before court — here's how to navigate it.",
    author: "RentAlert PH Team",
    date: "March 25, 2026",
    readTime: "7 min read",
    content: [
      {
        paragraphs: [
          "Before you can file an ejectment case in court, the Katarungang Pambarangay Law (Chapter 7, Local Government Code) requires you to first attempt amicable settlement at the barangay level — provided both parties live in the same city or municipality. Skipping this step is one of the most common reasons eviction cases get dismissed.",
        ],
      },
      {
        heading: "Step 1 — File a complaint with the Punong Barangay",
        paragraphs: [
          "Go to the barangay hall where the property is located (or where the respondent resides). File a written or oral complaint with the Punong Barangay (Barangay Captain). Bring a copy of your demand letter, the lease contract, and proof of unpaid rent.",
        ],
      },
      {
        heading: "Step 2 — Mediation by the Punong Barangay",
        paragraphs: [
          "Within 15 days, the Punong Barangay will personally mediate between you and the tenant. If you reach an agreement, it is reduced into writing as an Amicable Settlement and is binding like a court judgment after 10 days.",
        ],
      },
      {
        heading: "Step 3 — Pangkat ng Tagapagkasundo",
        paragraphs: [
          "If mediation fails, the dispute is referred to the Pangkat ng Tagapagkasundo (a 3-member conciliation panel chosen by both parties). They have 15 days, extendable by another 15, to help you reach a settlement.",
        ],
      },
      {
        heading: "Step 4 — Certificate to File Action",
        paragraphs: [
          "If no settlement is reached, the Lupon Secretary will issue a Certification to File Action (CFA). This document is your green light to file an unlawful detainer or ejectment case in the Municipal Trial Court under Rule 70.",
          "Without the CFA, the court will dismiss your case for non-compliance with barangay conciliation requirements.",
        ],
      },
      {
        heading: "Practical tips",
        paragraphs: [
          "Always bring two valid IDs and at least three copies of every document. Be respectful but firm during mediation — the goal is a written settlement that you can enforce. If the tenant fails to appear despite proper notice, this is also recorded and supports your case.",
        ],
      },
    ],
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/resources" replace />;

  return (
    <>
      <section className="bg-hero text-white py-16 sm:py-20">
        <div className="container-tight max-w-3xl">
          <Link to="/resources" className="inline-flex items-center text-white/80 hover:text-accent text-sm mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Resources
          </Link>
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">{post.tag}</span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">{post.title}</h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container-tight max-w-3xl">
          <p className="text-lg text-muted-foreground italic mb-8">{post.excerpt}</p>
          {post.content.map((block, i) => (
            <div key={i} className="mb-8">
              {block.heading && <h2 className="text-2xl font-bold text-primary mb-3">{block.heading}</h2>}
              {block.paragraphs.map((p, j) => (
                <p key={j} className="text-foreground/85 leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}

          <div className="mt-12 p-6 rounded-xl bg-accent-soft border border-accent/20">
            <p className="text-sm text-foreground/80">
              <strong>Disclaimer:</strong> RentAlert PH provides informational content only. This is not legal advice. Consult a licensed Philippine attorney for your specific situation.
            </p>
          </div>

          <div className="mt-10 flex justify-between items-center">
            <Link to="/resources">
              <Button variant="outline"><ArrowLeft className="h-4 w-4" /> All articles</Button>
            </Link>
            <Link to="/contact">
              <Button variant="accent">Need help? Contact us</Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}