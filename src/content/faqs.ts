// Comprehensive Frequently Asked Questions for Kooo Insurance.

export type FaqItem = {
  question: string;
  answer: string;
  category: "General & Licensing" | "Coverage & Policies" | "Claims & Emergencies" | "Certificates & Payments";
};

export const faqs: FaqItem[] = [
  // --- General & Licensing ---
  {
    category: "General & Licensing",
    question: "What is an insurance broker and how is it different from dealing directly with an insurer?",
    answer:
      "When you deal directly with an insurance company, their staff represent the insurer's interests and can only sell their own products. As an independent Australian insurance broker, Kooo Insurance acts strictly on YOUR behalf. We search across multiple tier-1 insurers and specialist underwriting agencies to secure the best coverage and pricing, and we advocate solely for you should you ever need to lodge a claim.",
  },
  {
    category: "General & Licensing",
    question: "What are Kooo Insurance's licensing and regulatory credentials?",
    answer:
      "Kooo Group Pty Ltd t/as Kooo Insurance (ABN 64 686 043 345 | CAR No. 1315320) is a Corporate Authorised Representative of Metrix Connect Pty Ltd (ABN 23 635 286 136 | AFSL No. 525491). We are legally authorised to provide financial product advice and deal in general insurance products across all Australian states and territories.",
  },
  {
    category: "General & Licensing",
    question: "Where is Kooo Insurance based and what areas do you cover?",
    answer:
      "Our national headquarters is located at 7-9 Irvine Place, Bella Vista NSW 2153, in Sydney's Hills District. However, we advise and represent clients Australia-wide, including Greater Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, and regional and rural communities across all states and territories.",
  },

  // --- Coverage & Policies ---
  {
    category: "Coverage & Policies",
    question: "How do I know what types of insurance my business legally requires in Australia?",
    answer:
      "Required covers depend on your business structure, industry, and contractual agreements. For example, Workers Compensation is legally mandatory in all states if you employ staff. Public Liability ($10M or $20M) is universally required for commercial leases, council permits, and construction site inductions. Certain regulated sectors (such as NDIS providers, financial planners, and medical practitioners) also require mandatory Professional Indemnity. We conduct a comprehensive risk audit to identify your exact legal and contractual exposures.",
  },
  {
    category: "Coverage & Policies",
    question: "How can I avoid underinsurance after recent building cost and inflation increases?",
    answer:
      "Underinsurance occurs when your insured value is lower than current replacement or rebuild costs, resulting in severe proportional claim penalties (co-insurance / average clauses). Kooo utilizes certified Cordell building cost estimating tools and industry benchmark calculators to help you determine accurate replacement sums for your buildings, plant, machinery, and stock.",
  },
  {
    category: "Coverage & Policies",
    question: "Can I bundle multiple business covers under one policy?",
    answer:
      "Yes. A Business Package policy allows you to combine building, contents, machinery breakdown, business interruption, glass, money, and public liability under a single policy schedule with one annual renewal date and consolidated premium.",
  },

  // --- Certificates & Payments ---
  {
    category: "Certificates & Payments",
    question: "How fast can I get a Certificate of Currency for a client or landlord?",
    answer:
      "Once your policy terms are confirmed and bound, Kooo can issue your Certificate of Currency immediately via email, ensuring you can sign leases, enter job sites, or finalize commercial loans without administrative delay.",
  },
  {
    category: "Certificates & Payments",
    question: "Can I pay my annual insurance premium in monthly installments?",
    answer:
      "Yes. We partner with accredited Australian premium funding providers, allowing you to spread your annual insurance premium over 10 or 12 manageable monthly installments, preserving valuable working capital for your operations.",
  },

  // --- Claims & Emergencies ---
  {
    category: "Claims & Emergencies",
    question: "What should I do first if an incident or property damage occurs?",
    answer:
      "First, ensure everyone's physical safety and take emergency measures to prevent further loss (such as shutting off ruptured water mains). Take clear photographs and video of the damage before cleaning up. For theft or malicious damage, notify the police immediately and obtain an event number. Then contact Kooo Insurance on 02 4093 0636—do not admit liability or negotiate with third parties.",
  },
  {
    category: "Claims & Emergencies",
    question: "Does Kooo charge extra fees for managing claims?",
    answer:
      "No. End-to-end claims management and advocacy are an integral part of our brokerage service. When a loss occurs, your assigned Kooo broker lodges the claim, coordinates assessors, challenges adverse underwriter findings, and pushes for the maximum fair entitlement on your behalf.",
  },
];

