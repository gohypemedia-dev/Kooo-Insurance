// All copy, contact details and asset paths, taken from koooinsurance.com.au.

export const contact = {
  phone: "02 4093 0636",
  phoneHref: "tel:0240930636",
  email: "protect@koooinsurance.com.au",
  address: "7-9 Irvine Place, BELLA VISTA 2153",
  facebook: "https://www.facebook.com/profile.php?id=61576387637561",
  instagram: "https://www.instagram.com/koooinsurance/",
};

export const tagline = "Protect your tomorrow, today.";

export const legal = {
  copyright:
    "© 2026 Kooo Group Pty Ltd T/as Kooo Insurance (ABN 64 686 043 345 | CAR No. 1315320) is a Corporate Authorised Representative of Metrix Connect Pty Ltd (ABN 23 635 286 136 | AFSL No. 525491)",
  documents: [
    { label: "Financial Services Guide", href: "/docs/financial-services-guide.pdf" },
    { label: "Privacy Policy", href: "/docs/privacy-policy.pdf" },
    { label: "Complaints", href: "/docs/complaints.pdf" },
    { label: "Supporting Vulnerable Clients", href: "/docs/supporting-vulnerable-clients.pdf" },
    { label: "Insurance Brokers Code of Practice", href: "/docs/niba-code-of-practice.pdf" },
  ],
};

export type CoverItem = { title: string; description: string };

export type Category = {
  slug: string;
  name: string;
  /** Short label for big titles and the hero's category row, e.g. "Truck & Fleet". */
  shortName: string;
  /** Page title, e.g. "Business Insurance Solutions". */
  title: string;
  summary: string;
  /** Longer copy used on the Our Insurance Solutions page. */
  description: string;
  intro: string;
  image: string;
  items: CoverItem[];
  cta: { title: string; text: string };
};

export const categories: Category[] = [
  {
    slug: "businessinsurance",
    name: "Business Insurance",
    shortName: "Business",
    title: "Business Insurance Solutions",
    summary:
      "Safeguard your company with protection for liability, property, vehicles, and staff across Australia.",
    description:
      "Safeguard your company with protection for liability, property, vehicles, and staff across Australia. Our business insurance solutions are designed to support companies of all sizes, from small businesses to large enterprises. We help you manage everyday risks so you can focus on growth and long-term success.",
    intro:
      "Every business is different, but risks are universal. Our business insurance solutions support companies across Australia with protection for liability, property, people, and operations.",
    image: "/images/photos/pexels-933964.jpg",
    items: [
      { title: "Business Package Insurance", description: "Flexible cover combining property, liability, and business interruption in one policy, keeping SMEs across Australia protected from day-to-day risks." },
      { title: "Public Liability Insurance", description: "Protects your business if a customer, supplier, or member of the public suffers injury or property damage anywhere in Australia." },
      { title: "Product Liability Insurance", description: "Covers claims if products you sell, supply, or manufacture cause harm, helping your business stay compliant across Australia." },
      { title: "Professional Indemnity Insurance", description: "Safeguards professionals against claims of negligence, errors, or omissions in advice or services provided nationwide." },
      { title: "Management Liability Insurance", description: "Protects directors, officers, and managers against legal costs, fines, and penalties, ensuring leadership security across Australia." },
      { title: "Cyber Insurance", description: "Covers financial loss, recovery costs, and liability if your business suffers a cyber attack, fraud, or data breach." },
      { title: "Directors and Officers Insurance (D&O)", description: "Protects directors and senior managers across Australia from personal liability in management-related claims." },
      { title: "Business Interruption Insurance", description: "Provides income replacement if your operations are disrupted by insured events, supporting businesses nationwide." },
      { title: "Commercial Property Insurance", description: "Protects premises, buildings, and physical assets against fire, storm, and accidental damage across Australia." },
      { title: "Equipment and Machinery Breakdown", description: "Covers sudden breakdown or failure of machinery and equipment across Australia." },
      { title: "Commercial Motor and Fleet Insurance", description: "Protection for business vehicles across Australia, including trucks, utes, vans, and fleets, against accidents, theft, and damage." },
      { title: "Tools and Portable Equipment", description: "Protects tradies and mobile professionals against loss, damage, or theft of tools and equipment nationwide." },
      { title: "Marine Cargo and Transit Insurance", description: "Covers goods and cargo being transported by road, rail, sea, or air, protecting against theft, damage, or loss during transit across Australia and internationally." },
      { title: "Wineries and Breweries", description: "Insurance for wineries, breweries, and distilleries across Australia, covering production facilities, stock, liability, and equipment." },
    ],
    cta: {
      title: "Ready to Protect Your Business?",
      text: "Kooo Insurance makes business cover simple and effective. Whether you are a small startup or a growing company, our team is here to help.",
    },
  },
  {
    slug: "tradesconstructioninsurance",
    name: "Trades & Construction Insurance",
    shortName: "Trades & Construction",
    title: "Trades and Construction Insurance Solutions",
    summary:
      "Insurance designed for builders, developers, and tradies including electricians, plumbers, scaffolders, roofers, and contractors across Australia.",
    description:
      "Insurance designed for builders, developers, and tradies including electricians, plumbers, scaffolders, roofers, and contractors across Australia. Our cover protects tools, vehicles, people, and projects, helping you stay compliant and secure on and off the worksite. Whether you are on residential, commercial, or large-scale sites, we make sure you are protected.",
    intro:
      "Every trade and construction business is different, but risks are universal. Our solutions protect tradies, builders, and contractors across Australia with cover for liability, tools, vehicles, people, and projects.",
    image: "/images/photos/pexels-4981810.jpg",
    items: [
      { title: "Contract Works Insurance", description: "Covers building and construction projects against damage, theft, or loss during construction across Australia." },
      { title: "Public Liability Insurance", description: "Protects tradies and contractors if a third party suffers injury or property damage as a result of your work." },
      { title: "Tools and Equipment Insurance", description: "Covers essential tools and portable equipment against theft, loss, or damage anywhere in Australia." },
      { title: "Commercial Motor and Ute Insurance", description: "Protection for utes, vans, and work vehicles used on and off site across Australia." },
      { title: "Plant and Machinery Insurance", description: "Cover for excavators, diggers, cranes, forklifts, and other machinery, whether owned or hired." },
      { title: "Builders Warranty Insurance", description: "Mandatory cover for builders in some states, protecting clients against incomplete or defective work." },
      { title: "Workers Compensation", description: "Ensures your employees are covered for work-related injury, illness, or death across Australia." },
      { title: "Tradies Insurance Packages", description: "Flexible bundled policies combining liability, tools, vehicle, and income protection for sole traders and contractors." },
    ],
    cta: {
      title: "Ready to Protect Your Trade?",
      text: "Kooo Insurance makes trades and construction cover simple and effective. Whether you are a sole trader, contractor, or a builder managing major projects, our team is here to help.",
    },
  },
  {
    slug: "truckfleetinsurance",
    name: "Truck and Fleet Insurance",
    shortName: "Truck & Fleet",
    title: "Truck and Fleet Insurance Solutions",
    summary:
      "Comprehensive cover for trucks, utes, vans, fleets, and trailers, protecting against accidents, damage, theft, and liability across Australia.",
    description:
      "Comprehensive protection for trucks, vans, utes, and full fleets operating across Australia. Our truck and fleet insurance covers accidents, liability, damage, and downtime to help keep your vehicles and drivers on the road. Whether you manage a single prime mover or a national fleet, we’ll provide cover that supports your operations and keeps your business moving.",
    intro:
      "Every transport business is different, but risks are universal. Our truck and fleet insurance solutions support operators across Australia with protection for vehicles, drivers, goods, and operations.",
    image: "/images/photos/pexels-2199293.jpg",
    items: [
      { title: "Commercial Motor Insurance", description: "Covers individual business vehicles such as trucks, vans, and utes against accidents, theft, and damage across Australia." },
      { title: "Fleet Insurance", description: "Flexible cover for multiple vehicles under one policy, making it easier and more cost-effective to protect trucks, vans, and company cars." },
      { title: "Heavy Vehicle and Truck Insurance", description: "Specialist protection for prime movers, rigid trucks, tippers, tankers, and trailers used in transport, logistics, and construction." },
      { title: "Goods in Transit Insurance", description: "Protects goods and cargo being transported by your vehicles, covering theft, damage, or loss while in transit across Australia." },
      { title: "Downtime and Business Interruption Insurance", description: "Provides income support if your vehicles are off the road after an accident, helping your business manage delays and contracts." },
      { title: "Public Liability Insurance", description: "Many transport operators also include public liability insurance, protecting against claims of injury or property damage caused by vehicles or operations." },
    ],
    cta: {
      title: "Ready to Protect Your Fleet?",
      text: "Kooo Insurance makes truck and fleet cover simple and effective. Whether you run a single truck, a small fleet, or a national operation, our team is here to help.",
    },
  },
  {
    slug: "specialtyinsurance",
    name: "Specialty Insurance",
    shortName: "Specialty",
    title: "Specialty Insurance Solutions",
    summary:
      "Niche protection for high-value assets, title risks, guarantees, wineries, fine art, and global exposures.",
    description:
      "Niche protection for high-value assets, title risks, guarantees, wineries, fine art, and global exposures. Our specialty insurance solutions are designed for unique situations that require advanced protection and expertise. Whether you need cover for rare assets or international exposures, we’ll help you safeguard against complex risks with confidence.",
    intro:
      "Every industry has specialised risks, and our specialty insurance solutions help protect businesses across Australia with cover for technology, projects, events, and more.",
    image: "/images/photos/pexels-32570638.png",
    items: [
      { title: "Event Insurance", description: "Provides cover for events such as weddings, concerts, festivals, exhibitions, and conferences. Protects against cancellations, liability claims, or property damage during events across Australia." },
      { title: "Technology and Startup Insurance", description: "Insurance designed for IT companies, SaaS providers, and startups, covering liability, data risks, and operational disruptions." },
      { title: "Renewable Energy Insurance", description: "Specialist cover for solar, wind, and battery projects across Australia, protecting against construction, operational, and environmental risks." },
      { title: "Title Insurance", description: "Protection for property buyers and lenders against unknown risks such as fraud, ownership disputes, or defects in title." },
      { title: "Vacant Land Insurance", description: "Cover for vacant land across Australia, protecting owners against liability risks if a third party suffers injury or damage on the site." },
      { title: "Vacant Building Insurance", description: "Insurance for unoccupied buildings, warehouses, or shops, covering property damage, fire, vandalism, and liability exposures." },
      { title: "Professional Services Insurance", description: "Covers niche professions, consultants, and advisory services with professional indemnity, liability, and business protection." },
      { title: "Film and Media Insurance", description: "Protects film, TV, and media productions against delays, equipment damage, and liability claims during production." },
      { title: "Cyber Insurance", description: "Covers financial loss, recovery costs, and liability if your business suffers a cyber attack, fraud, or data breach." },
      { title: "Wineries and Breweries", description: "Insurance for wineries, breweries, and distilleries across Australia, covering production facilities, stock, liability, and equipment." },
      { title: "High Net Worth Assets", description: "Insurance for luxury homes, prestige vehicles, yachts, and other high-value assets requiring advanced protection." },
      { title: "Fine Art and Collectibles", description: "Specialist cover for art, antiques, jewellery, and high-value collections, protecting against theft, damage, and loss." },
    ],
    cta: {
      title: "Ready to Protect Your Specialty Needs?",
      text: "Kooo Insurance makes specialist cover simple and effective. Whether it is for an event, a marine risk, or a unique industry, our team is here to help.",
    },
  },
  {
    slug: "industryinsurance",
    name: "Industry Insurance",
    shortName: "Industry",
    title: "Industry Insurance Solutions",
    summary:
      "Specialised cover for industries such as NDIS providers, aged care, disability care, hospitality, retail, healthcare, education, and transport.",
    description:
      "Specialised cover for industries such as NDIS providers, aged care, disability care, hospitality, retail, healthcare, education, and transport. Our industry insurance solutions are built to address sector-specific risks and requirements, giving you protection that supports your operations. We provide cover for property, staff, stock, and liability so you can focus on serving your community.",
    intro:
      "Every industry faces unique risks. Our insurance solutions support businesses and organisations across Australia with cover that is built to meet the needs of different sectors.",
    image: "/images/photos/pexels-2290753.jpg",
    items: [
      { title: "Petrol Stations and Service Stations", description: "Cover for fuel stations including property, liability, stock, and equipment across Australia, protecting against fire, leaks, and customer risks." },
      { title: "Restaurants, Cafes and Food Trucks", description: "Insurance for hospitality operators, including property, liability, equipment breakdown, and business interruption." },
      { title: "Retail Shops and Chemists", description: "Protection for retail outlets and pharmacies with cover for stock, fixtures, liability, and theft." },
      { title: "Hardware and Key Cutting Businesses", description: "Cover for hardware stores and service providers, protecting tools, stock, liability, and property." },
      { title: "Stalls, Markets and Kiosks", description: "Insurance for market stalls, food kiosks, and temporary vendors, covering stock, equipment, liability, and public risks." },
      { title: "Schools, Childcare and Education Providers", description: "Insurance for private schools, childcare centres, and training organisations across Australia, covering liability, property, and staff." },
      { title: "NDIS, Aged Care and Disability Care", description: "Specialist cover for healthcare and support providers, protecting staff, clients, and services across Australia." },
      { title: "Post Offices and News Agencies", description: "Insurance for postal and distribution services, including liability, property, and customer risks." },
      { title: "Churches, Mosques, Temples, and Community Groups", description: "Cover for places of worship and community associations, protecting property, liability, volunteers, and events." },
      { title: "Hotels, Motels and Accommodation Providers", description: "Insurance for hotels, motels, guesthouses, and serviced apartments across Australia, covering property, liability, staff, and guest risks." },
      { title: "Caravan Parks and Holiday Parks", description: "Insurance for caravan parks, holiday parks, and campgrounds across Australia, covering cabins, sites, liability, staff, and guest risks." },
      { title: "Car Wash and Car Detailing Businesses", description: "Insurance for hand car washes, automated wash facilities, and mobile detailing businesses across Australia, covering equipment, liability, and customer vehicles in care." },
      { title: "Strata Insurance", description: "Covers shared property, buildings, and common areas in apartments and strata complexes across Australia." },
      { title: "Car Yards and Dealerships", description: "Specialised cover for new and used car dealerships, including stock, property, test drive liability, and customer risks." },
      { title: "Pubs, Clubs and Hospitality Venues", description: "Protection for licensed venues including bars, nightclubs, RSLs, and clubs, with cover for property, liability, patrons, and business interruption." },
    ],
    cta: {
      title: "Ready to Protect Your Industry?",
      text: "Kooo Insurance makes industry cover simple and effective. Whether you run a local shop, a national organisation, or a community service, our team is here to help.",
    },
  },
  {
    slug: "personalinsurance",
    name: "Personal Insurance",
    shortName: "Personal",
    title: "Personal Insurance Solutions",
    summary: "Protect your home, car, valuables, and lifestyle with reliable cover across Australia.",
    description:
      "Protect your home, car, valuables, and lifestyle with reliable cover across Australia. Our personal insurance solutions give you peace of mind by covering the things that matter most, from your property and possessions to your family’s financial security. With flexible options, we help you stay protected today and prepared for tomorrow.",
    intro:
      "Every household is different, but risks are universal. Our personal insurance solutions support individuals and families across Australia with cover for property, vehicles, and valuables.",
    image: "/images/photos/pexels-7579041.jpg",
    items: [
      { title: "Home Insurance", description: "Covers your home and fixtures against fire, storm, flood, and accidental damage, ensuring your property is protected across Australia." },
      { title: "Contents Insurance", description: "Protects household belongings such as furniture, electronics, and personal items against theft, fire, and damage." },
      { title: "Landlord Insurance", description: "Specialised cover for rental properties, protecting against tenant damage, loss of rent, liability, and property risks." },
      { title: "Car Insurance", description: "Protection for your personal vehicle against accidents, theft, and damage, with options for comprehensive or third party cover." },
      { title: "Caravan and Trailer Insurance", description: "Covers caravans, camper trailers, and recreational trailers against theft, damage, or accidents." },
      { title: "Boat Insurance", description: "Insurance for boats, jet skis, and personal watercraft, covering theft, damage, and liability on Australian waters." },
      { title: "Valuables and Portable Items Insurance", description: "Protection for jewellery, watches, electronics, and personal valuables anywhere in Australia or overseas." },
    ],
    cta: {
      title: "Ready to Protect What Matters Most?",
      text: "Kooo Insurance makes personal cover simple and effective. Whether you are insuring your home, car, or valuables, our team is here to help.",
    },
  },
];

export function getCategory(slug: string) {
  const category = categories.find((c) => c.slug === slug);
  if (!category) throw new Error(`Unknown category: ${slug}`);
  return category;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Our Insurance Solutions",
    href: "/insurancesolutions",
    children: categories.map((c) => ({ label: c.title, href: `/${c.slug}` })),
  },
  { label: "Contact", href: "/contact" },
];

export const home = {
  hero: {
    /** The tagline, split into the four words that start in the screen corners. */
    words: ["Protect", "your", "tomorrow,", "today."],
    image: "/images/photos/pexels-7579041.jpg",
    title: "Here to help you protect your business, home, and everything in between",
    statementImage: "/images/photos/pexels-2199293.jpg",
  },
  /** Captions for the scroll-driven hero film, one per chapter. */
  story: [
    {
      title: "It starts like any other evening.",
      text: "The shop is shut. The truck is parked. Everything you have built is right where you left it.",
    },
    {
      title: "Then it happens.",
      text: "A storm. A spark. An accident. No warning, and no way to take it back.",
    },
    {
      title: "When the smoke clears, the hard part begins.",
      text: "Stock gone. Doors shut. Forms, phone calls, and no idea where to start.",
    },
    {
      title: "This is where Kooo steps in.",
      // Kooo's own line, from the About page ("Why choose Kooo").
      text: "We do not expect you to speak the language of insurance. That is our job.",
    },
    {
      title: "Back in business.",
      // Kooo's own line, from the About page ("Moving forward together").
      text: "Insurance is more than a policy. It is peace of mind.",
    },
  ],
  solutionsIntro:
    "At Kooo Insurance, we provide a wide range of insurance solutions to protect what matters most, from business operations to personal assets.",
  // Headings from the home page, paired with Kooo's own lines from the About page.
  whyChooseUs: [
    { title: "Friendly Support", text: "Personal service backed by strong insurer relationships." },
    { title: "Clear and Simple", text: "We do not expect you to speak the language of insurance. That is our job." },
    { title: "Expert guidance", text: "Nationwide coverage with local understanding, and solutions designed to keep you growing, building, and moving forward." },
    { title: "Trusted Insurers", text: "A broad panel of insurers delivering protection for businesses and families nationwide." },
  ],
  insurersTitle: "Some of the Insurers We Work With",
  insurersText:
    "Kooo Insurance partners with a broad panel of insurers. Below are a selection of providers we work with to deliver protection for businesses and families nationwide.",
  testimonialsIntro:
    "At Kooo Insurance, our clients value our clear communication and ongoing support. Here’s what they say about working with us:",
  testimonials: [
    { quote: "Insurance made simple – exactly what I needed for my business.", author: "Small Business Owner" },
    { quote: "Clear advice and quick support gave me confidence in my cover.", author: "Professional Client" },
    { quote: "Professional, straightforward, and reliable from start to finish.", author: "Commercial Client" },
  ],
  trusted: {
    title: "Trusted by Businesses and Families Across Australia",
    text: "Kooo keeps your assets covered and your mind at ease. Insurance made easy for Australians.",
  },
};

export const insurers = [
  { name: "NTI", logo: "/images/insurers/clean/nti.png" },
  { name: "Chubb", logo: "/images/insurers/clean/chubb.png" },
  { name: "Agile Underwriting", logo: "/images/insurers/clean/agile-underwriting.png" },
  { name: "Keystone", logo: "/images/insurers/clean/keystone.png" },
  { name: "Nautilus Marine", logo: "/images/insurers/clean/nautilus-marine.png" },
  { name: "Woodina Underwriting Agency", logo: "/images/insurers/clean/woodina.png" },
  { name: "DUAL", logo: "/images/insurers/clean/dual.png" },
  { name: "Vero", logo: "/images/insurers/clean/vero.png" },
  { name: "CGU", logo: "/images/insurers/clean/cgu.png" },
  { name: "QBE", logo: "/images/insurers/clean/qbe.png" },
  { name: "Hollard", logo: "/images/insurers/clean/hollard.png" },
  { name: "SURA", logo: "/images/insurers/clean/sura.png" },
  { name: "GT Insurance", logo: "/images/insurers/clean/gt-insurance.png" },
  { name: "Enthusiast", logo: "/images/insurers/clean/enthusiast.png" },
  { name: "CHU", logo: "/images/insurers/clean/chu.png" },
];

export const about = {
  title: "About Kooo Insurance",
  whoWeAre:
    "Kooo Insurance is an Australian insurance brokerage committed to protecting what matters most. We combine fresh thinking, digital innovation, and real world experience to deliver insurance that adapts as your life and business evolve. Our approach is simple, clear, and straightforward so you always know where you stand.",
  mission:
    "We believe insurance should help you move forward with confidence, not hold you back with complexity. At Kooo, protection is designed to feel like progress, not paperwork. Our role is to simplify insurance, provide clarity, and deliver solutions that are always one step ahead.",
  workWithIntro:
    "From small businesses to large organisations, from homeowners to professionals, Kooo supports people across Australia. We work with:",
  workWith: [
    "Business owners, startups, and established companies",
    "Trades and contractors including builders, electricians, and developers",
    "Industry providers such as NDIS, aged care, healthcare, retail, and hospitality",
    "Families and individuals protecting their homes, cars, and lifestyle",
    "Community groups, schools, and organisations that need security and peace of mind",
  ],
  /** One photo per `workWith` group, in the same order. */
  workWithImages: [
    "/images/photos/pexels-933964.jpg",
    "/images/photos/pexels-4981810.jpg",
    "/images/photos/pexels-2696064.jpg",
    "/images/photos/pexels-30821414.jpg",
    "/images/photos/pexels-8422248.jpg",
  ],
  whyIntro:
    "At Kooo, we do not expect you to speak the language of insurance. That is our job. What we offer is:",
  why: [
    "Personal service backed by strong insurer relationships",
    "Nationwide coverage with local understanding",
    "Solutions designed to keep you growing, building, and moving forward",
    "Confidence that your assets, livelihood, and future are protected",
  ],
  forward: {
    title: "Moving Forward Together",
    text: "Insurance is more than a policy. It is peace of mind. Whether you are protecting your business, your home, or your future, Kooo Insurance is here to help you do it with confidence.",
  },
  images: [
    "/images/photos/pexels-840996.jpg",
    "/images/photos/pexels-1128317.jpg",
    "/images/photos/crane-truck.png",
    "/images/photos/pexels-585419.jpg",
  ],
};

export const solutionsPage = {
  title: "Our Insurance Solutions",
  intro: "Our solutions support businesses, families, and organisations nationwide.",
  explore: "Explore our categories below to learn more:",
  cta: {
    title: "Ready to Protect What Matters?",
    text: "Not sure which category suits your situation? Our team is here to guide you.",
  },
};

export const contactPage = {
  title: "Protecting your tomorrow starts today. We’re here to simplify insurance.",
  subtitle: "Get in touch and let’s sort it out together.",
  formTitle: "Begin Your Kooo Experience",
  insuranceTypes: [
    "Business Insurance",
    "Trades & Construction",
    "Truck & Fleet",
    "Specialty Insurance",
    "Industry Insurance",
    "Personal Insurance",
    "Other",
  ],
  success: [
    "Thanks for reaching out to Kooo Insurance.",
    "We’ve received your enquiry and our team will review it shortly. One of our specialists will be in touch soon to help you take the next step forward.",
    "If your matter is urgent, please don’t hesitate to call us on 02 4093 0636.",
  ],
  error: [
    "K-ooops! Looks like there was a hiccup.",
    "Please try again, and if the issue continues, contact us directly on 02 4093 0636 so we can help you right away.",
  ],
  serviceAreasIntro:
    "Kooo Insurance is based in Bella Vista, in the heart of The Hills District, Sydney. We support clients locally, across New South Wales, and throughout Australia with business, trades, fleet, industry, specialty, and personal insurance solutions.",
  serviceAreas: [
    {
      title: "The Hills District & Greater Sydney",
      content:
        "We proudly work with clients in The Hills District suburbs including Bella Vista, Baulkham Hills, Castle Hill, Kellyville, Norwest, and surrounding areas. Our reach also extends across Greater Sydney from Parramatta, Blacktown, Penrith, and the Inner West to the Northern Beaches, Eastern Suburbs, Sutherland Shire, and Western Sydney.",
    },
    {
      title: "Regional New South Wales",
      content:
        "Beyond Sydney, our team supports businesses and families in regional New South Wales including the Central Coast, Newcastle, Wollongong, Blue Mountains, Hunter Valley, Illawarra, and beyond.",
    },
    {
      title: "Australia-wide",
      content:
        "Kooo Insurance also provides insurance solutions in every major city across Australia, including Melbourne, Brisbane, Adelaide, Perth, Hobart, Darwin, and Canberra as well as regional and rural communities nationwide.",
    },
  ],
  closing: "Wherever you are in Australia, we help you protect what matters most.",
  image: "/images/photos/contact-bg.jpg",
};
