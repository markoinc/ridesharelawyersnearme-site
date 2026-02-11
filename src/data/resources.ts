export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

export const resources: Resource[] = [
  {
    slug: "what-to-do-after-rideshare-accident",
    title: "What to Do After a Rideshare Accident",
    description: "Step-by-step guide on what to do immediately after being involved in a rideshare or Lyft accident.",
    category: "Guides",
    readTime: "10 min"
  },
  {
    slug: "rideshare-insurance-coverage",
    title: "Complete Guide to Rideshare Insurance Coverage",
    description: "Understanding Uber's three-tier insurance system and how coverage changes during different ride phases.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "passenger-rights",
    title: "Rideshare Passenger Rights Guide",
    description: "Know your rights as a rideshare passenger before, during, and after a rideshare accident.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "evidence-preservation",
    title: "Preserving Evidence After Rideshare Accidents",
    description: "Critical evidence to collect and preserve to strengthen your rideshare accident claim.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "uber-vs-lyft-insurance",
    title: "Uber vs. Lyft Insurance Comparison",
    description: "Side-by-side comparison of Uber and Lyft insurance coverage and claim processes.",
    category: "Comparisons",
    readTime: "8 min"
  },
  {
    slug: "rideshare-laws-by-state",
    title: "Rideshare Laws by State",
    description: "State-by-state breakdown of rideshare regulations, insurance requirements, and consumer protections.",
    category: "Legal Info",
    readTime: "15 min"
  },
  {
    slug: "statute-of-limitations",
    title: "Rideshare Accident Statute of Limitations",
    description: "Time limits for filing rideshare accident claims in all 50 states plus DC.",
    category: "Legal Info",
    readTime: "10 min"
  },
  {
    slug: "rideshare-accident-checklist",
    title: "Rideshare Accident Checklist",
    description: "Printable checklist of everything to do after a rideshare accident to protect your rights.",
    category: "Checklists",
    readTime: "5 min"
  },
  {
    slug: "dealing-with-rideshare-insurance",
    title: "Dealing With Rideshare Insurance Company",
    description: "Tips for communicating with James River Insurance and other rideshare insurers.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "finding-rideshare-accident-lawyer",
    title: "How to Find a Rideshare Accident Lawyer",
    description: "What to look for when hiring an attorney for your rideshare accident case.",
    category: "Guides",
    readTime: "7 min"
  },
  {
    slug: "uber-settlement-guide",
    title: "Rideshare Accident Settlement Guide",
    description: "Understanding the settlement process, typical values, and how to maximize your compensation.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "medical-treatment-guide",
    title: "Medical Treatment After Rideshare Accidents",
    description: "Guide to seeking and documenting medical treatment to support your accident claim.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "rideshare-safety-tips",
    title: "Rideshare Safety Tips",
    description: "How to stay safe when using rideshare services and what to do if something goes wrong.",
    category: "Safety",
    readTime: "6 min"
  },
  {
    slug: "comparative-negligence-guide",
    title: "Comparative Negligence in Rideshare Claims",
    description: "How fault is divided in rideshare accidents and how it affects your compensation.",
    category: "Legal Info",
    readTime: "8 min"
  },
  {
    slug: "autonomous-rideshare-accidents",
    title: "Autonomous Rideshare Vehicle Accidents",
    description: "Legal issues unique to accidents involving rideshare companies' self-driving vehicles.",
    category: "Legal Info",
    readTime: "10 min"
  }
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug);
}

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter(r => r.category === category);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map(r => r.category))];
}
