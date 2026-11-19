// Location data supporting Kooo Insurance's Australian search and advisory presence.

export type LocationDetail = {
  slug: string;
  name: string;
  region: string;
  headline: string;
  intro: string;
  description: string;
  suburbsCovered: string[];
  keyIndustries: string[];
  localFocus: string;
  officeInfo: {
    address: string;
    phone: string;
    phoneHref: string;
    email: string;
  };
  features: string[];
};

export const locations: LocationDetail[] = [
  {
    slug: "bella-vista-hills-district",
    name: "The Hills District & Bella Vista (HQ)",
    region: "Sydney, New South Wales",
    headline: "Local Insurance Brokers in Bella Vista & The Hills District",
    intro: "Headquartered at 7-9 Irvine Place in Bella Vista, Kooo Insurance delivers local advice, personal service, and independent market placement for Hills District businesses and families.",
    description: "The Hills District is one of Sydney’s fastest-growing commercial and residential economic engines. Centred around the Norwest Business Park and Sydney Metro corridor, local business owners, tradies, medical specialists, and expanding enterprises require an insurance broker who understands the local landscape. We provide on-the-ground support with face-to-face service backed by nationwide underwriting access.",
    suburbsCovered: [
      "Bella Vista",
      "Norwest",
      "Baulkham Hills",
      "Castle Hill",
      "Kellyville",
      "Rouse Hill",
      "Beaumont Hills",
      "Glenhaven",
      "Dural",
      "Kenthurst",
      "Stanhope Gardens",
      "The Ponds",
    ],
    keyIndustries: [
      "Corporate offices and medical practices in Norwest Business Park",
      "Residential builders, developers, and subcontracting tradies",
      "Cafés, dining restaurants, and retail shops in Hills commercial centres",
      "Childcare centres, private training schools, and NDIS service providers",
      "Prestige residential homeowners across Castle Hill and Bella Vista Waters",
    ],
    localFocus: "Direct on-site meetings at your premises in Norwest or across The Hills, with same-day Certificate of Currency generation.",
    officeInfo: {
      address: "7-9 Irvine Place, Bella Vista NSW 2153",
      phone: "02 4093 0636",
      phoneHref: "tel:0240930636",
      email: "protect@koooinsurance.com.au",
    },
    features: [
      "Headquartered locally in Bella Vista NSW 2153",
      "In-person risk audits and policy reviews across Norwest and The Hills",
      "Direct broker advocacy with no overseas call centres",
      "Accredited Corporate Authorised Representative (CAR No. 1315320)",
    ],
  },

  {
    slug: "sydney-greater-sydney",
    name: "Greater Sydney & Western Sydney",
    region: "New South Wales",
    headline: "Commercial & Business Insurance Brokers for Greater Sydney",
    intro: "From Parramatta and Western Sydney industrial estates to North Sydney and the CBD, Kooo delivers commercial insurance programs across Greater Sydney.",
    description: "Greater Sydney represents Australia’s economic heartland, spanning major transport hubs, construction corridors, technology parks, and vibrant hospitality precincts. Kooo Insurance partners with Sydney enterprises to structure robust public liability, fleet, property, contract works, and cyber insurance solutions.",
    suburbsCovered: [
      "Parramatta & Western Sydney",
      "Blacktown & Eastern Creek",
      "Penrith & St Marys",
      "Sydney CBD & Inner South",
      "North Sydney & Macquarie Park",
      "Inner West & Strathfield",
      "Sutherland Shire & South Sydney",
      "Northern Beaches & Brookvale",
    ],
    keyIndustries: [
      "Heavy transport, distribution centres, and logistics hubs in Western Sydney",
      "Major civil and commercial construction projects across Greater Sydney",
      "Specialty tech startups, financial institutions, and corporate consultancies",
      "Strata title schemes, residential apartment complexes, and commercial towers",
    ],
    localFocus: "Rapid coverage structuring to satisfy tier-1 contractors, shopping centre leases, and commercial financiers across metropolitan Sydney.",
    officeInfo: {
      address: "7-9 Irvine Place, Bella Vista NSW 2153",
      phone: "02 4093 0636",
      phoneHref: "tel:0240930636",
      email: "protect@koooinsurance.com.au",
    },
    features: [
      "Comprehensive coverage across all Sydney metropolitan commercial zones",
      "Specialised construction and fleet risk placement",
      "Rapid turnaround for shopping centre tenancy approvals",
    ],
  },

  {
    slug: "regional-nsw",
    name: "Regional New South Wales",
    region: "New South Wales",
    headline: "Insurance Solutions for Regional NSW Businesses & Transport",
    intro: "Supporting enterprises, agricultural logistics, trades, and communities across Newcastle, Central Coast, Wollongong, and regional NSW.",
    description: "Regional New South Wales is home to essential agricultural producers, coastal tourism operators, freight arteries, and manufacturing facilities. Our dedicated team supports regional businesses with reliable insurance cover tailored to local bushfire, storm, transport, and liability risks.",
    suburbsCovered: [
      "Newcastle & Lake Macquarie",
      "Central Coast (Gosford, Wyong, Tuggerah)",
      "Wollongong & Illawarra",
      "Hunter Valley & Cessnock",
      "Blue Mountains & Central West",
      "Southern Highlands & Goulburn",
      "Mid North Coast (Port Macquarie, Coffs Harbour)",
      "Riverina & Wagga Wagga",
    ],
    keyIndustries: [
      "Wineries, breweries, and vineyard hospitality in the Hunter Valley",
      "Heavy vehicle transport and agricultural freight along the Hume and Newell",
      "Coastal tourism, holiday parks, and hospitality providers",
      "Regional manufacturing, metal fabrication, and trade contractors",
    ],
    localFocus: "Dedicated broker support with understanding of regional flood zones, bushfire risks, and rural supply chain requirements.",
    officeInfo: {
      address: "7-9 Irvine Place, Bella Vista NSW 2153",
      phone: "02 4093 0636",
      phoneHref: "tel:0240930636",
      email: "protect@koooinsurance.com.au",
    },
    features: [
      "Specialist winery and regional hospitality underwriting",
      "Heavy transport and rural freight placement",
      "Proactive bushfire and storm sum-insured reviews",
    ],
  },

  {
    slug: "melbourne-victoria",
    name: "Melbourne & Victoria",
    region: "Victoria",
    headline: "Business, Fleet & Trades Insurance Across Melbourne & Victoria",
    intro: "Providing comprehensive commercial risk advisory across Melbourne's laneways, industrial corridors, and regional Victorian centres.",
    description: "From Melbourne’s renowned hospitality and retail culture to manufacturing centres in Dandenong, logistics in the Western Suburbs, and agricultural corridors across regional Victoria, Kooo Insurance delivers independent risk management and tailored insurance programs.",
    suburbsCovered: [
      "Melbourne CBD & Inner Suburbs",
      "Dandenong & South East Industrial Corridor",
      "Truganina, Laverton & Western Logistics Hubs",
      "Geelong & The Bellarine",
      "Bendigo, Ballarat & Regional Victoria",
      "Mornington Peninsula",
    ],
    keyIndustries: [
      "Hospitality venues, boutique restaurants, and specialty coffee roasters",
      "Interstate freight carriers, refrigerated food fleets, and distribution",
      "Commercial construction, trade subcontractors, and civil infrastructure",
      "Professional service firms, technology startups, and corporate advisors",
    ],
    localFocus: "Full Victoria-wide capability with Victorian building regulations compliance and specialist hospitality and fleet packages.",
    officeInfo: {
      address: "7-9 Irvine Place, Bella Vista NSW 2153 (Serving Victoria Nationwide)",
      phone: "02 4093 0636",
      phoneHref: "tel:0240930636",
      email: "protect@koooinsurance.com.au",
    },
    features: [
      "Victoria-wide coverage for metro and regional operators",
      "Tailored Melbourne hospitality, café, and retail packages",
      "Fast Victorian building compliance certificate issuance",
    ],
  },

  {
    slug: "brisbane-queensland",
    name: "Brisbane & Queensland",
    region: "Queensland",
    headline: "Commercial & Property Insurance for Brisbane & Queensland",
    intro: "Securing Queensland businesses, strata schemes, transport fleets, and property assets against tropical storms, liability, and operational risk.",
    description: "Queensland’s climate and dynamic economy demand robust risk planning. From Brisbane commercial towers and trade parks to tourism operators on the Gold Coast, logistics along the Bruce Highway, and regional mining contractors, Kooo Insurance structures resilient coverage.",
    suburbsCovered: [
      "Brisbane CBD & Inner Suburbs",
      "Eagle Farm, TradeCoast & Pinkenba",
      "Gold Coast & Surfers Paradise",
      "Sunshine Coast & Maroochydore",
      "Toowoomba & Darling Downs",
      "Townsville, Cairns & North Queensland",
    ],
    keyIndustries: [
      "Strata title complexes and tourism accommodation providers",
      "Commercial construction and trades preparing for infrastructure growth",
      "Long-haul freight haulers and agricultural transport networks",
      "Care providers, NDIS organisations, and community healthcare",
    ],
    localFocus: "Specialist knowledge of Queensland storm, hail, and cyclone endorsement conditions, ensuring clients are never underinsured.",
    officeInfo: {
      address: "7-9 Irvine Place, Bella Vista NSW 2153 (Serving Queensland Nationwide)",
      phone: "02 4093 0636",
      phoneHref: "tel:0240930636",
      email: "protect@koooinsurance.com.au",
    },
    features: [
      "Expertise in Queensland storm, water, and weather policy clauses",
      "Strata schemes management compliance across QLD",
      "Transport and fleet coverage along major QLD highway networks",
    ],
  },

  {
    slug: "australia-wide",
    name: "Australia-Wide National Coverage",
    region: "All States & Territories",
    headline: "Nationwide Insurance Brokerage Across Australia",
    intro: "Licensed to advise and place insurance across all Australian states and territories under AFSL No. 525491.",
    description: "No matter where your assets are deployed or where your jobs take you, Kooo Insurance provides consistent, accredited, and authoritative risk advice. With institutional access to leading underwriters across Australia, we support sole traders, expanding SMEs, and national organisations.",
    suburbsCovered: [
      "New South Wales (Sydney & Regional)",
      "Victoria (Melbourne & Regional)",
      "Queensland (Brisbane, Gold Coast & Regional)",
      "Western Australia (Perth, Fremantle & Pilbara)",
      "South Australia (Adelaide & Regional)",
      "Tasmania (Hobart & Launceston)",
      "Northern Territory (Darwin & Alice Springs)",
      "Australian Capital Territory (Canberra)",
    ],
    keyIndustries: [
      "National transport, logistics, and multi-state vehicle fleets",
      "Construction companies operating across multiple state jurisdictions",
      "Franchise groups, multi-site retailers, and healthcare providers",
      "High-net-worth individuals with interstate residential asset portfolios",
    ],
    localFocus: "Single point of contact for nationwide operations, streamlining multiple state policies into one harmonised renewal schedule.",
    officeInfo: {
      address: "7-9 Irvine Place, Bella Vista NSW 2153",
      phone: "02 4093 0636",
      phoneHref: "tel:0240930636",
      email: "protect@koooinsurance.com.au",
    },
    features: [
      "Corporate Authorised Representative (CAR No. 1315320)",
      "Metrix Connect Pty Ltd AFSL No. 525491",
      "Unified national portfolio management and centralized claims",
    ],
  },
];

export function getLocation(slug: string): LocationDetail | undefined {
  return locations.find((loc) => loc.slug === slug);
}

