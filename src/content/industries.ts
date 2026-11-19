// Comprehensive industry profiles for Australian sectors served by Kooo Insurance.
// Corporate Authorised Representative No. 1315320

export type IndustryDetail = {
  slug: string;
  name: string;
  shortName: string;
  industryGroup: string;
  heroTitle: string;
  summary: string;
  intro: string;
  description: string;
  audiences: string[];
  keyRisks: string[];
  recommendedCovers: {
    title: string;
    description: string;
    href: string;
  }[];
  regulatoryNotes: string;
  whyKooo: string;
  image: string;
  stats?: { value: string; label: string }[];
  relatedIndustries?: string[];
};

export const industries: IndustryDetail[] = [
  // --------------------------------------------------------------------------
  // 1. TRANSPORT & LOGISTICS
  // --------------------------------------------------------------------------
  {
    slug: "transport-logistics",
    name: "Transport & Logistics",
    shortName: "Transport & Freight",
    industryGroup: "Transport & Logistics",
    heroTitle: "Commercial Fleet, Freight & Heavy Haulage Insurance",
    summary: "Complete risk solutions for Australian transport operators: prime movers, rigid trucks, fleet haulage, couriers, and 3PL warehouses.",
    intro: "Australia's freight network operates under intense regulatory oversight and demanding delivery timelines. Kooo structures comprehensive transport packages safeguarding your vehicles, cargo, drivers, and contractual liabilities.",
    description: "From single owner-driver prime movers to national multi-depot fleet operators, freight logistics requires specialized insurance architecture. Operating across Australian highways exposes businesses to rollover risks, cargo damage, dangerous goods liabilities, and Chain of Responsibility (CoR) legal actions under the Heavy Vehicle National Law. Kooo negotiates with Australia's premier transport underwriting agencies to secure broad accidental damage, automatic hook liability, and downtime income support.",
    audiences: [
      "Interstate freight operators and linehaul carriers",
      "Rigid truck and prime mover owner-drivers",
      "Multi-vehicle corporate fleet operators",
      "Metro courier vans and express delivery businesses",
      "Third-party logistics (3PL) and freight forwarding hubs",
    ],
    keyRisks: [
      "Highway vehicle rollovers, jackknifes, and multi-vehicle collision liabilities",
      "In-transit cargo loss, water damage, spoilage, or transit theft across regional routes",
      "Chain of Responsibility (CoR) statutory investigations and Heavy Vehicle National Law penalties",
      "Diesel fuel and chemical spill cleanup expenses enforced by state environmental authorities",
      "Business downtime and finance repayment stress following total vehicle constructive loss",
    ],
    recommendedCovers: [
      {
        title: "Heavy Vehicle & Truck Insurance",
        description: "Comprehensive accidental damage, fire, theft, and third-party liability for prime movers and rigid trucks.",
        href: "/truckfleetinsurance/heavy-vehicle-truck-insurance",
      },
      {
        title: "Commercial Fleet Insurance",
        description: "Consolidated fleet policies with blanket vehicle additions, experience-rated pricing, and single excess structures.",
        href: "/truckfleetinsurance/fleet-insurance",
      },
      {
        title: "Carriers Liability Insurance",
        description: "Contractual freight liability safeguarding carriers against cargo loss under standard consignment notes.",
        href: "/specialtyinsurance/carriers-liability-insurance",
      },
      {
        title: "Goods in Transit Insurance",
        description: "All-risks protection for customer stock and high-value cargo moving across road, rail, air, or coastal waters.",
        href: "/truckfleetinsurance/goods-in-transit-insurance",
      },
      {
        title: "Marine Cargo Insurance",
        description: "International and domestic marine transit coverage from port of origin to Australian consignee warehouse.",
        href: "/specialtyinsurance/marine-cargo-insurance",
      },
    ],
    regulatoryNotes: "Meets mandatory National Heavy Vehicle Regulator (NHVR) standards and contractual transport deed requirements across Tier-1 logistics networks.",
    whyKooo: "Our transport brokers understand downtime costs, hook endorsements, salvage recovery, and have direct access to specialized heavy motor syndicates.",
    image: "/images/photos/pexels-2199293.jpg",
    stats: [
      { value: "30-Day", label: "Automatic Fleet Additions" },
      { value: "$50M", label: "Public & Hook Liability" },
      { value: "24/7", label: "Heavy Towing Dispatch" },
    ],
    relatedIndustries: ["truck-owner-drivers", "fleet-haulage-logistics", "manufacturing-distribution"],
  },

  {
    slug: "truck-owner-drivers",
    name: "Truck Operators & Owner Drivers",
    shortName: "Owner Drivers",
    industryGroup: "Transport & Logistics",
    heroTitle: "Dedicated Insurance for Australian Owner Drivers",
    summary: "Tailored single-truck insurance protecting your rig, financing, cargo, and personal earnings on Australian roads.",
    intro: "As an owner-driver, your truck is your livelihood. A single highway breakdown, rollover, or freight dispute can threaten your family business without tailored broker representation.",
    description: "Operating as an independent contractor or subcontracting for major freight networks demands ironclad protection. We arrange customized packages combining heavy motor cover, transit cargo liability, downtime cash flow, and public liability to ensure you comply with head carrier contracts and maintain bank finance approvals.",
    audiences: [
      "Subcontractor prime mover drivers",
      "Rigid tipper and earthmoving truck operators",
      "Refrigerated meat and produce transport drivers",
      "Metro parcel and pallet couriers",
    ],
    keyRisks: [
      "Total vehicle write-off leaving finance gap debt on your rig",
      "Cargo damage disputes deducted from your freight payments by head carriers",
      "Injury or sickness preventing you from driving and servicing vehicle leases",
      "Accidental damage to customer loading docks or depot gates",
    ],
    recommendedCovers: [
      {
        title: "Heavy Vehicle & Truck Insurance",
        description: "Agreed value cover including windscreen extensions, tow recovery, and finance payout protection.",
        href: "/truckfleetinsurance/heavy-vehicle-truck-insurance",
      },
      {
        title: "Carriers Goods in Transit",
        description: "Covers loaded cargo up to required freight consignment limits.",
        href: "/truckfleetinsurance/goods-in-transit-insurance",
      },
      {
        title: "Personal Accident & Sickness",
        description: "Weekly income replacement if injury or illness prevents you from operating your truck.",
        href: "/personalinsurance/personal-accident-sickness-insurance",
      },
      {
        title: "Public Liability (Depot Access)",
        description: "$10M or $20M third-party property damage cover required by distribution centers.",
        href: "/businessinsurance/public-liability-insurance",
      },
    ],
    regulatoryNotes: "Complies with Australian freight forwarder subcontracting deeds and finance lessor insurance covenants.",
    whyKooo: "We treat owner-drivers like corporate accounts with dedicated claims handlers who fight for rapid repairs and downtime settlements.",
    image: "/images/photos/crane-truck.png",
    stats: [
      { value: "$20M", label: "Depot Liability" },
      { value: "Agreed", label: "Vehicle Valuations" },
      { value: "Rapid", label: "Certificate Issuance" },
    ],
    relatedIndustries: ["transport-logistics", "fleet-haulage-logistics"],
  },

  {
    slug: "fleet-haulage-logistics",
    name: "Fleet Businesses & Haulage Logistics",
    shortName: "Fleet Logistics",
    industryGroup: "Transport & Logistics",
    heroTitle: "Enterprise Fleet & Freight Distribution Insurance",
    summary: "Risk solutions for medium-to-large commercial transport fleets, logistics hubs, and multimodal freight companies.",
    intro: "Multi-vehicle transport operations require enterprise risk management: aggregate deductibles, claims trending, and comprehensive depot protection.",
    description: "Managing a corporate haulage fleet introduces complex operational exposures: multi-trailer b-double risks, cross-dock depot liabilities, hazardous goods transit, and enterprise driver safety governance. Kooo designs bespoke fleet insurance structures that optimize loss ratios, reduce premiums, and streamline claims administration.",
    audiences: [
      "Interstate logistics companies",
      "Container cartage and wharf transport carriers",
      "Bulk tanker and hazardous chemical hauliers",
      "Automotive transport and car carrier fleets",
    ],
    keyRisks: [
      "Catastrophic multi-vehicle pileups or major linehaul depot fires",
      "Corporate Chain of Responsibility breaches and WHS regulatory prosecutions",
      "High insurance premium volatility from adverse claims frequency",
      "Underinsured cargo losses across high-value consumer electronics or pharmaceutical loads",
    ],
    recommendedCovers: [
      {
        title: "Commercial Fleet Insurance",
        description: "Bespoke fleet policies with experience-rated claims incentives and excess management.",
        href: "/truckfleetinsurance/fleet-insurance",
      },
      {
        title: "Carriers Legal Liability",
        description: "Specialized liability for cargo loss, consequential delay, and contractual bailment.",
        href: "/specialtyinsurance/carriers-liability-insurance",
      },
      {
        title: "Management Liability & Statutory Fines",
        description: "Protects directors and logistics executives against NHVR investigations and safety actions.",
        href: "/businessinsurance/management-liability-insurance",
      },
      {
        title: "Commercial Property & Depots",
        description: "Safeguards freight distribution hubs, gantry cranes, and cross-dock facilities.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
    ],
    regulatoryNotes: "Meets Tier-1 national freight charter compliance and international supply chain audit benchmarks.",
    whyKooo: "We act as your outsourced risk management department, reviewing telematics, claims loss ratios, and negotiating direct with Lloyd's and Australian transport syndicates.",
    image: "/images/photos/pexels-2199293.jpg",
    stats: [
      { value: "10-250+", label: "Vehicles Covered" },
      { value: "Dedicated", label: "Claims Manager" },
      { value: "Low", label: "Aggregate Retentions" },
    ],
    relatedIndustries: ["transport-logistics", "manufacturing-distribution"],
  },

  // --------------------------------------------------------------------------
  // 2. TRADES & CONSTRUCTION
  // --------------------------------------------------------------------------
  {
    slug: "trades-construction",
    name: "Trades & Construction",
    shortName: "Trades & Building",
    industryGroup: "Trades & Construction",
    heroTitle: "Insurance for Builders, Contractors & Trade Specialists",
    summary: "Built for Australian tradies and building contractors: contract works, public liability, tool theft, machinery, and WHS compliance.",
    intro: "Whether working on residential renovations, civil infrastructure, or commercial construction, Australian tradies need robust cover that satisfies head contractors, council certifiers, and financiers.",
    description: "From sole-trader carpenters and electricians to licensed residential builders and civil contracting firms, construction work is physically demanding and inherently risky. One dropped lintel, water leak, or stolen toolbox can disrupt months of profit. Kooo builds tailored insurance packages that keep you compliant, protected on site, and ready to win tenders.",
    audiences: [
      "Licensed residential and commercial builders",
      "Electricians, data cablers, and solar installers",
      "Plumbers, gasfitters, and drainage contractors",
      "Carpenters, joiners, and framing specialists",
      "Scaffolders, bricklayers, plasterers, and painters",
      "Excavation and civil earthmoving contractors",
    ],
    keyRisks: [
      "Third-party property damage to adjacent buildings during excavation, welding, or demolition",
      "Theft of power tools, laser levels, and trade gear from utes and site lockups",
      "Catastrophic weather, storm, or water damage to uncompleted building works",
      "On-site falls, scaffolding collapses, and trade subcontractor injuries",
      "Contractual cross-indemnity clauses demanded by developers and principal contractors",
    ],
    recommendedCovers: [
      {
        title: "Trade Public Liability",
        description: "Essential $10M or $20M cover demanded by head contractors, building sites, and council certifiers.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Contract Works Insurance",
        description: "Protection for construction projects, structural builds, and on-site materials against fire, storm, and collapse.",
        href: "/tradesconstructioninsurance/contract-works-insurance",
      },
      {
        title: "Tools & Trade Equipment",
        description: "Australia-wide replacement cover for stolen hand tools, power tools, and diagnostic gear.",
        href: "/tradesconstructioninsurance/tools-and-equipment-insurance",
      },
      {
        title: "Plant & Machinery Insurance",
        description: "Dry and wet hire cover for excavators, bobcats, scissor lifts, and heavy earthmoving gear.",
        href: "/tradesconstructioninsurance/plant-and-machinery-insurance",
      },
      {
        title: "Commercial Motor & Ute Cover",
        description: "Comprehensive protection for trade utes, dual-cabs, tippers, and service trailers.",
        href: "/truckfleetinsurance/commercial-motor-insurance",
      },
    ],
    regulatoryNotes: "Meets SafeWork NSW/VIC/QLD site access conditions, Home Building Act standards, and Master Builders / HIA requirements.",
    whyKooo: "Fast certificates of currency on demand, instant trade tool claims, and competitive terms for high-risk trades like roofing, plumbing, and demolition.",
    image: "/images/photos/pexels-2290753.jpg",
    stats: [
      { value: "Same-Day", label: "Certificates of Currency" },
      { value: "$20M", label: "Standard Liability Limit" },
      { value: "Australia", label: "Wide Tool Cover" },
    ],
    relatedIndustries: ["builders-licensed-contractors", "subcontractors-tradies", "property"],
  },

  {
    slug: "builders-licensed-contractors",
    name: "Licensed Builders & Principal Contractors",
    shortName: "Licensed Builders",
    industryGroup: "Trades & Construction",
    heroTitle: "Contract Works & Liability for Licensed Australian Builders",
    summary: "Comprehensive project cover for custom home builders, commercial fit-out companies, and principal developers.",
    intro: "Principal contractors hold ultimate responsibility on site. Protect your structural works, materials, subbies, and development finance with Kooo.",
    description: "Licensed builders carry enormous legal and financial exposure under Australian building contracts (AS4000, MBA, HIA). From initial ground breaking to handover, you must insure the full contract value against storm, cyclone, fire, water ingress, and third-party site injury. We arrange annual or project-specific Contract Works and Liability packages tailored to your development scale.",
    audiences: [
      "Custom residential home builders",
      "Commercial fit-out and refurbishment contractors",
      "Multi-unit townhouse and duplex developers",
      "Civil construction and infrastructure principal contractors",
    ],
    keyRisks: [
      "Severe storm or flood inundation of partially roofed building frames",
      "Site structural collapse damaging neighboring properties and public footpaths",
      "Theft of installed appliances, ducted air con units, and copper piping before handover",
      "Contractual liquidated damages caused by insured peril delays",
    ],
    recommendedCovers: [
      {
        title: "Contract Works (Annual / Project)",
        description: "All-risks material damage covering the full contract value, materials in transit, and removal of debris.",
        href: "/tradesconstructioninsurance/contract-works-insurance",
      },
      {
        title: "Principal Contractor Public Liability",
        description: "$20M to $50M liability cover with cross-liability clauses and subcontractor endorsements.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Management Liability for Building Entities",
        description: "Protects directors from SafeWork prosecutions, statutory fines, and unliquidated contractual claims.",
        href: "/businessinsurance/management-liability-insurance",
      },
    ],
    regulatoryNotes: "Satisfies state building authority licensing requirements and major Australian bank development funding covenants.",
    whyKooo: "We structure flexible annual turnover policies so you don't need to report every minor project individually, reducing admin overhead.",
    image: "/images/photos/pexels-2290753.jpg",
    stats: [
      { value: "$100M+", label: "Project Capacity" },
      { value: "Annual", label: "Turnover Policies" },
      { value: "Zero", label: "Subcontractor Gaps" },
    ],
    relatedIndustries: ["trades-construction", "subcontractors-tradies", "property"],
  },

  {
    slug: "subcontractors-tradies",
    name: "Subcontractors & Trade Specialists",
    shortName: "Tradies & Subbies",
    industryGroup: "Trades & Construction",
    heroTitle: "Tradie Insurance for Electricians, Plumbers & Chippies",
    summary: "Instant, affordable cover for trade subcontractors: public liability, tool protection, and commercial vehicle insurance.",
    intro: "Get on site without delay. Kooo delivers instant certificates of currency, rock-solid liability, and 24/7 tool protection built for Australian tradies.",
    description: "Whether you run a sole-trader plumbing van, an electrical contracting business, or a carpentry team, head contractors won't let you through the site gates without proof of $10M or $20M Public Liability. We make getting insured effortless so you can focus on working and winning jobs.",
    audiences: [
      "Electricians and communications cablers",
      "Plumbers, drainers, and roof plumbers",
      "Carpenters, joiners, and plasterers",
      "Scaffolders, riggers, and steel fixers",
      "Painters, renderers, and waterproofers",
    ],
    keyRisks: [
      "Burst flexi-hoses or concealed pipe leaks causing hundreds of thousands in water damage",
      "Electrical short circuits sparking structural roof or switchboard fires",
      "Toolbox theft from parked utes overnight or from secured site storage",
      "Injury on site causing loss of personal trade income",
    ],
    recommendedCovers: [
      {
        title: "Subcontractor Public Liability",
        description: "Meets all Tier-1 builder requirements with certificates emailed in minutes.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Portable Tools & Gear",
        description: "Australia-wide coverage for tools locked in vehicles or open site boxes.",
        href: "/tradesconstructioninsurance/tools-and-equipment-insurance",
      },
      {
        title: "Personal Accident & Sickness",
        description: "Income protection ensuring mortgage and bills are paid if you're injured off or on the job.",
        href: "/personalinsurance/personal-accident-sickness-insurance",
      },
    ],
    regulatoryNotes: "Meets all SafeWork NSW/VIC/QLD site induction criteria and state trade licensing boards.",
    whyKooo: "Quick certificates, zero hassle, and broker advocacy when an insurer tries to dispute tool theft from your ute.",
    image: "/images/photos/pexels-1020370.jpg",
    stats: [
      { value: "15-Min", label: "Certificates Delivered" },
      { value: "Pay", label: "Monthly Options" },
      { value: "100%", label: "Tradie Focused" },
    ],
    relatedIndustries: ["trades-construction", "builders-licensed-contractors"],
  },

  // --------------------------------------------------------------------------
  // 3. PROFESSIONAL SERVICES
  // --------------------------------------------------------------------------
  {
    slug: "professional-services",
    name: "Professional Services",
    shortName: "Professional Services",
    industryGroup: "Professional Services",
    heroTitle: "Professional Indemnity, Cyber & Management Liability",
    summary: "Expert protection for consultants, engineers, accountants, IT specialists, and corporate advisors across Australia.",
    intro: "Giving advice, designing systems, or managing client accounts exposes professional firms to catastrophic civil liability claims. Kooo safeguards your reputation and balance sheet.",
    description: "Australian professional services firms operate in an increasingly litigious corporate climate. A single flawed engineering calculation, missed tax filing deadline, or cyber breach exposing client confidential data can trigger multi-million dollar lawsuits. Kooo designs bespoke Professional Indemnity, Cyber, and Directors & Officers programs tailored to your professional institute (CPA, Engineers Australia, ACS, Law Society).",
    audiences: [
      "Management, HR, and marketing consultants",
      "Civil, structural, and mechanical engineering firms",
      "Chartered accountants, tax agents, and bookkeepers",
      "IT contractors, software developers, and managed service providers (MSPs)",
      "Recruitment agencies and corporate advisory businesses",
    ],
    keyRisks: [
      "Allegations of professional negligence, incorrect design, or misleading financial advice",
      "Ransomware attacks encrypting client databases and triggering Privacy Act notification penalties",
      "Breach of contract claims by enterprise corporate clients seeking consequential damages",
      "Employee disputes, unfair dismissal claims, or ASIC statutory regulatory investigations",
    ],
    recommendedCovers: [
      {
        title: "Professional Indemnity Insurance",
        description: "Defends against claims of financial loss, professional errors, and breach of statutory duty.",
        href: "/specialtyinsurance/professional-indemnity-insurance",
      },
      {
        title: "Cyber Insurance & Data Protection",
        description: "Covers extortion demands, forensic IT investigation, business interruption, and legal notification.",
        href: "/businessinsurance/cyber-insurance",
      },
      {
        title: "Management Liability (D&O)",
        description: "Protects directors against statutory fines, regulatory audits, and employment practices claims.",
        href: "/businessinsurance/management-liability-insurance",
      },
      {
        title: "Public Liability & Office Package",
        description: "Covers client slip and falls in your premises, contents, and office equipment.",
        href: "/businessinsurance/public-liability-insurance",
      },
    ],
    regulatoryNotes: "Satisfies mandatory professional standards legislation schemes (PSL) and corporate government tender requirements.",
    whyKooo: "We negotiate retroactive date continuity, civil liability wording, and broad contractual indemnity extensions with specialized Australian PI underwriters.",
    image: "/images/photos/pexels-30821414.jpg",
    stats: [
      { value: "Unlimited", label: "Retroactive Date Options" },
      { value: "$20M", label: "PI Policy Limits" },
      { value: "Comprehensive", label: "Cyber Incident Response" },
    ],
    relatedIndustries: ["property", "health-care"],
  },

  // --------------------------------------------------------------------------
  // 4. FOOD & HOSPITALITY
  // --------------------------------------------------------------------------
  {
    slug: "food-hospitality",
    name: "Food & Hospitality",
    shortName: "Food & Hospitality",
    industryGroup: "Food & Hospitality",
    heroTitle: "Insurance for Cafés, Restaurants, Takeaways & Caterers",
    summary: "Complete hospitality coverage: fire, food spoilage, customer slip & fall, business interruption, and equipment breakdown.",
    intro: "From bustling urban cafés to licensed fine dining, hospitality businesses operate in high-pressure environments. Protect your kitchen, staff, patrons, and revenue with Kooo.",
    description: "The Australian food industry faces volatile risks: deep-fryer grease fires, refrigeration compressor failure ruining high-value stock, customer allergic reactions, and slip-and-fall injuries on tiled floors. A single incident can force a restaurant to shut down for months. Kooo builds comprehensive Business Packages with high-limit Business Interruption to ensure your lease and staff payroll are protected during rebuilds.",
    audiences: [
      "Licensed dining restaurants and bistros",
      "Urban cafés, coffee shops, and espresso bars",
      "Takeaway shops, fast-food outlets, and bakeries",
      "Mobile food trucks and pop-up market stalls",
      "Corporate catering companies and event venues",
    ],
    keyRisks: [
      "Commercial kitchen grease fires causing extensive structural and smoke damage",
      "Refrigeration breakdown causing thousands of dollars in spoiled meat and dairy stock",
      "Patron slip, trip, and burn injuries on wet restaurant floors",
      "Allegations of food poisoning or allergic contamination under the Food Standards Code",
      "Extended closure following fire, storm, or neighboring property access denial",
    ],
    recommendedCovers: [
      {
        title: "Business Insurance Package",
        description: "Bundled fire, storm, glass, machinery breakdown, and money cover tailored for hospitality.",
        href: "/businessinsurance/business-insurance-package",
      },
      {
        title: "Public & Product Liability",
        description: "Essential $20M protection against customer slip/fall claims and food consumption liabilities.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Business Interruption Insurance",
        description: "Maintains your gross profit, owner drawings, and lease payments during forced closures.",
        href: "/specialtyinsurance/business-interruption-insurance",
      },
      {
        title: "Machinery & Cold Room Breakdown",
        description: "Covers emergency repair of coolrooms, espresso machines, and spoiled frozen inventory.",
        href: "/tradesconstructioninsurance/plant-and-machinery-insurance",
      },
    ],
    regulatoryNotes: "Complies with local council outdoor dining permits, liquor licensing boards, and retail tenancy leasing laws.",
    whyKooo: "We know hospitality margins are tight. We structure cost-effective packages with leading Australian insurers who understand commercial cooking risk management.",
    image: "/images/photos/pexels-1451040.jpg",
    stats: [
      { value: "100%", label: "Outdoor Dining Compliant" },
      { value: "$20M", label: "Public & Food Liability" },
      { value: "Full", label: "Gross Profit Interruption" },
    ],
    relatedIndustries: ["grocery-retail", "accommodation"],
  },

  // --------------------------------------------------------------------------
  // 5. GROCERY & RETAIL
  // --------------------------------------------------------------------------
  {
    slug: "grocery-retail",
    name: "Grocery & Retail",
    shortName: "Retail & Grocers",
    industryGroup: "Grocery & Retail",
    heroTitle: "Retail Shop & Supermarket Insurance Packages",
    summary: "Tailored protection for Australian grocers, supermarkets, specialty retail stores, and commercial shopping centre tenancies.",
    intro: "High foot traffic and substantial inventory make retail stores vulnerable to slip-and-fall claims, theft, and property damage. Kooo secures your retail investment.",
    description: "Whether running an independent supermarket, convenience store, fashion boutique, or pharmacy, retail operations require agile insurance. From shopfront glass damage and stock theft to catastrophic coolroom failure and customer injuries in aisles, Kooo delivers commercial packages that satisfy shopping centre lease covenants and protect cash flow.",
    audiences: [
      "Independent supermarkets (IGA, Foodworks) and specialty grocers",
      "Convenience stores, corner shops, and tobacconists",
      "Fashion, apparel, homeware, and gift retail stores",
      "Pharmacies, health food stores, and beauty retail shops",
      "Shopping centre tenants and strip retail commercial stores",
    ],
    keyRisks: [
      "Customer slip-and-fall claims on wet aisles or spilled liquids (Australia's #1 retail liability)",
      "After-hours burglary, ram-raids, and stock theft",
      "Freezer gas leakage or power failure spoiling tens of thousands in refrigerated goods",
      "Plate glass shopfront breakage causing security hazards and business closure",
    ],
    recommendedCovers: [
      {
        title: "Business Insurance Package",
        description: "Consolidated cover for retail stock, shop fittings, electronic POS systems, and glass.",
        href: "/businessinsurance/business-insurance-package",
      },
      {
        title: "Retail Public Liability",
        description: "Mandatory $20M cover required by commercial retail landlords and shopping centre managers.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Business Interruption",
        description: "Replaces lost revenue and ongoing lease rent if an insured fire or storm closes your store.",
        href: "/specialtyinsurance/business-interruption-insurance",
      },
      {
        title: "Cyber Insurance & POS Security",
        description: "Protects against payment gateway breaches, customer data loss, and card skimmer fraud.",
        href: "/businessinsurance/cyber-insurance",
      },
    ],
    regulatoryNotes: "Meets retail lease standards across Westfield, Vicinity, Stockland, and private commercial arcades.",
    whyKooo: "We review your commercial lease indemnity clauses to ensure your policy meets landlord covenants without paying for unneeded cover.",
    image: "/images/photos/pexels-585419.jpg",
    stats: [
      { value: "Retail", label: "Lease Approved" },
      { value: "$20M", label: "Slip & Fall Liability" },
      { value: "Fast", label: "Glass Replacement" },
    ],
    relatedIndustries: ["food-hospitality", "manufacturing-distribution"],
  },

  // --------------------------------------------------------------------------
  // 6. FUEL & AUTOMOTIVE
  // --------------------------------------------------------------------------
  {
    slug: "fuel-automotive",
    name: "Fuel & Automotive",
    shortName: "Automotive & Fuel",
    industryGroup: "Fuel & Automotive",
    heroTitle: "Motor Trades, Workshop & Service Station Insurance",
    summary: "Specialist insurance for petrol stations, mechanic workshops, car dealerships, tyre centres, and automotive detailing bays.",
    intro: "Automotive businesses face unique risks: customer vehicle custody, hoist operations, test-driving liability, and underground fuel storage. Kooo delivers specialized Motor Trades protection.",
    description: "Standard commercial policies fail to cover driving customer vehicles or faulty mechanical workmanship. Kooo partners with dedicated Motor Trades underwriting agencies to arrange policies covering vehicles in your care, custody, and control, hoist collapse, road testing accidents, environmental tank leaks, and forecourt liabilities.",
    audiences: [
      "Petrol and service stations (independent & branded forecourts)",
      "Mechanical repair workshops and auto electricians",
      "Tyre fitting, brake, and suspension repair centres",
      "Used and new car dealerships and commercial vehicle sales",
      "Car washes, automotive detailing bays, and panel beaters",
    ],
    keyRisks: [
      "Accidental crashes while road testing customer vehicles following mechanical repair",
      "Hydraulic vehicle hoist failure causing severe damage to customer cars and worker injury",
      "Underground fuel tank leakage or catastrophic forecourt contamination under EPA laws",
      "Hail and storm damage destroying exposed outdoor vehicle inventory on dealer yards",
      "Faulty workmanship claims resulting in road collisions after brake or suspension service",
    ],
    recommendedCovers: [
      {
        title: "Motor Trades Combined Insurance",
        description: "Covers driving risk, customer vehicles in custody, faulty workmanship, and workshop equipment.",
        href: "/specialtyinsurance/motor-trades-insurance",
      },
      {
        title: "Commercial Property & Fuel Tanks",
        description: "Safeguards workshop buildings, bowsers, canopies, and specialized diagnostic equipment.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
      {
        title: "Public & Environmental Liability",
        description: "High-limit liability protecting against customer forecourt slips and chemical discharge.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Business Interruption",
        description: "Maintains profit and bills if EPA orders or catastrophic fire shuts down your workshop.",
        href: "/specialtyinsurance/business-interruption-insurance",
      },
    ],
    regulatoryNotes: "Meets MTA (Motor Traders Association) guidelines, EPA environmental standards, and dangerous goods storage laws.",
    whyKooo: "We access specialized automotive syndicates that offer broad driving risk limits, high customer vehicle custody values, and tailored hail deductibles.",
    image: "/images/photos/pexels-1128317.jpg",
    stats: [
      { value: "Full", label: "Customer Vehicle Custody" },
      { value: "MTA", label: "Compliant Wordings" },
      { value: "$20M", label: "Driving Risk Included" },
    ],
    relatedIndustries: ["transport-logistics", "trades-construction"],
  },

  // --------------------------------------------------------------------------
  // 7. EDUCATION & CHILDCARE
  // --------------------------------------------------------------------------
  {
    slug: "education-childcare",
    name: "Education & Childcare",
    shortName: "Education & Childcare",
    industryGroup: "Education",
    heroTitle: "Childcare, Early Learning & School Insurance",
    summary: "Dedicated protection for long daycare centres, preschools, OOSH providers, independent schools, and registered training organisations.",
    intro: "Caring for and educating children demands uncompromising risk management. Kooo structures comprehensive policies that satisfy national quality standards and protect your staff.",
    description: "Australian educational institutions operate under stringent regulatory scrutiny from ACECQA, state education departments, and ASQA. Exposures range from playground injuries and allergic anaphylaxis to child protection allegations and corporate management audits. Kooo secures broad Civil Liability, Professional Indemnity, and Property protection so educators can focus on nurturing future generations.",
    audiences: [
      "Long daycare centres and early learning facilities (ELCs)",
      "Preschools, kindergartens, and family daycare networks",
      "Out of School Hours (OOSH) and vacation care providers",
      "Independent private primary and secondary schools",
      "Registered Training Organisations (RTOs) and vocational colleges",
    ],
    keyRisks: [
      "Playground equipment falls, fractures, and severe playground injuries",
      "Allegations of negligence, failure of supervision, or child protection breach",
      "Breach of National Quality Framework (NQF) standards resulting in sanction or closure",
      "Severe storm, fire, or water damage to school classrooms and specialized play areas",
    ],
    recommendedCovers: [
      {
        title: "Childcare Public & Civil Liability",
        description: "Specialized liability including physical injury, participant medical, and defense costs.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Professional Indemnity for Educators",
        description: "Protects against claims of educational negligence, breach of duty of care, or failure to supervise.",
        href: "/specialtyinsurance/professional-indemnity-insurance",
      },
      {
        title: "Management Liability & Entity Protection",
        description: "Safeguards school boards, directors, and managers against statutory audits and employment claims.",
        href: "/businessinsurance/management-liability-insurance",
      },
      {
        title: "Commercial Property & Playgrounds",
        description: "Rebuild cover for school buildings, solar infrastructure, and shade sail assets.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
    ],
    regulatoryNotes: "Meets ACECQA National Quality Framework requirements, state education approvals, and ASQA provider guidelines.",
    whyKooo: "We understand educator ratios, high-limit civil liability requirements, and have access to underwriting agencies specializing in early childhood care.",
    image: "/images/photos/pexels-840996.jpg",
    stats: [
      { value: "ACECQA", label: "Approved Cover" },
      { value: "$20M+", label: "Public Liability" },
      { value: "Full", label: "Civil Liability Defense" },
    ],
    relatedIndustries: ["health-care", "places-of-worship-community"],
  },

  // --------------------------------------------------------------------------
  // 8. HEALTH & CARE
  // --------------------------------------------------------------------------
  {
    slug: "health-care",
    name: "Health, Care & Disability Services",
    shortName: "Health & Care",
    industryGroup: "Health & Care",
    heroTitle: "Insurance for NDIS Providers, Aged Care & Medical Practices",
    summary: "Specialist risk solutions for NDIS providers, support workers, aged care facilities, allied health clinics, and GP practices.",
    intro: "Care organisations face rigorous compliance obligations under the NDIS Commission and Aged Care Commission. Kooo provides tailored cover safeguarding vulnerable participants, staff, and provider operations.",
    description: "Providing disability support, in-home aged care, or clinical healthcare involves deeply personal interactions and strict regulatory scrutiny. A single participant injury allegation or clinical medication incident can jeopardize provider registration. Our bespoke care package integrates professional indemnity, medical malpractice, civil liability, management liability, and fleet coverage so your team can focus on participant wellbeing.",
    audiences: [
      "Registered and unregistered NDIS providers and support coordinators",
      "In-home aged care, respite homes, and residential care facilities",
      "Allied health clinics (physiotherapists, psychologists, occupational therapists)",
      "General medical practices, dental clinics, and day surgery centers",
      "Disability transport providers and community participation groups",
    ],
    keyRisks: [
      "Participant slip, fall, or injury during supervised community participation or in-home care",
      "Allegations of negligence, physical abuse, failure of care, or medication administration error",
      "Audits and compliance investigations by the NDIS Quality and Safeguards Commission",
      "Worker injury and manual handling exposures during participant transfers",
      "Modified wheelchair vehicle accidents and transport liabilities",
    ],
    recommendedCovers: [
      {
        title: "Medical Malpractice & Professional Indemnity",
        description: "Defends allegations of clinical negligence, breach of duty of care, or professional errors.",
        href: "/specialtyinsurance/professional-indemnity-insurance",
      },
      {
        title: "Public Liability (Participant Cover)",
        description: "Up to $20M cover for accidental injury to participants or third parties across community and facility settings.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Management Liability for Care Entities",
        description: "Safeguards board members, directors, and managers against statutory audits, WHS actions, and employment disputes.",
        href: "/businessinsurance/management-liability-insurance",
      },
      {
        title: "Care Fleet & Wheelchair Transport",
        description: "Comprehensive cover for company vans, wheelchair-accessible vehicles (WAV), and transport operations.",
        href: "/truckfleetinsurance/fleet-insurance",
      },
      {
        title: "Cyber Insurance & Health Data Protection",
        description: "Protects sensitive participant records, NDIS portal credentials, and medical care histories from ransomware.",
        href: "/businessinsurance/cyber-insurance",
      },
    ],
    regulatoryNotes: "Meets or exceeds mandatory NDIS Quality and Safeguards Commission registration criteria and Aged Care Quality Standards.",
    whyKooo: "We understand the nuances of the NDIS Practice Standards, participant transport clauses, and insurer underwriting appetites for high-intensity support providers.",
    image: "/images/photos/pexels-2696064.jpg",
    stats: [
      { value: "100%", label: "NDIS Commission Compliance" },
      { value: "$20M+", label: "Public Liability Limits" },
      { value: "24/7", label: "Claims & Incident Lodgement" },
    ],
    relatedIndustries: ["ndis-disability-aged-care", "medical-allied-health", "education-childcare"],
  },

  {
    slug: "ndis-disability-aged-care",
    name: "NDIS, Disability & Aged Care Providers",
    shortName: "NDIS & Disability",
    industryGroup: "Health & Care",
    heroTitle: "Specialized Insurance for NDIS & Aged Care Organisations",
    summary: "Built for registered and unregistered Australian NDIS providers, SIL homes, and aged care service organisations.",
    intro: "Comply with NDIS Commission standards with certainty. Kooo structures tailored packages covering high-intensity supports, participant transport, and worker civil liability.",
    description: "Operating in the NDIS space requires specialized policy wording. Standard business policies frequently exclude participant injuries, medication administration, or physical restraint incidents. Kooo provides tailored NDIS policies with no participant care exclusions, broad abuse defense, and coverage for modified wheelchair transport vehicles.",
    audiences: [
      "Registered NDIS providers (Core, Capacity Building, Capital Supports)",
      "Supported Independent Living (SIL) and SDA home operators",
      "Plan managers and support coordination businesses",
      "Independent disability support workers and in-home carers",
    ],
    keyRisks: [
      "Participant injury during community outings, swimming, or vehicle transit",
      "Allegations of medication administration errors or failure to follow behavioral support plans",
      "NDIS Commission statutory compliance audits and investigations following reportable incidents",
      "Damage to participant assistive technology or specialist disability accommodation property",
    ],
    recommendedCovers: [
      {
        title: "NDIS Civil Liability & Malpractice",
        description: "Uncapped defense costs and participant bodily injury cover designed for NDIS registration.",
        href: "/specialtyinsurance/professional-indemnity-insurance",
      },
      {
        title: "Public Liability ($20M)",
        description: "Comprehensive liability satisfying all NDIS Commission and government tender requirements.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Wheelchair Vehicle & Fleet Cover",
        description: "Covers hoist mechanisms, modified vehicle conversions, and transit passenger liability.",
        href: "/truckfleetinsurance/fleet-insurance",
      },
    ],
    regulatoryNotes: "Guaranteed compliant with NDIS Quality and Safeguards Commission Practice Standards registration benchmarks.",
    whyKooo: "We review your service agreements and participant support tiers to ensure you have zero gaps in participant injury defense.",
    image: "/images/photos/pexels-2696064.jpg",
    stats: [
      { value: "100%", label: "NDIS Audit Approved" },
      { value: "Zero", label: "Care Exclusions" },
      { value: "Fast", label: "Registration Certificates" },
    ],
    relatedIndustries: ["health-care", "medical-allied-health"],
  },

  {
    slug: "medical-allied-health",
    name: "Medical Practices & Allied Health",
    shortName: "Medical & Allied Health",
    industryGroup: "Health & Care",
    heroTitle: "Medical Malpractice & Clinic Insurance Solutions",
    summary: "Complete protection for GP medical centres, dental surgeries, physiotherapists, psychologists, and allied health specialists.",
    intro: "Safeguard your clinical practice, registration, and patient trust. Kooo delivers civil liability and malpractice solutions tailored for AHPRA professionals.",
    description: "Healthcare practitioners carry direct exposure to patient misdiagnosis claims, treatment complications, and medical records privacy breaches. Kooo structures integrated medical clinic packages combining Medical Malpractice, Public Liability, Commercial Property, and Cyber Insurance to protect both individual practitioners and the clinic operating entity.",
    audiences: [
      "General medical practices (GP clinics) and day surgeries",
      "Dental clinics and orthodontic practices",
      "Physiotherapists, chiropractors, and osteopaths",
      "Psychologists, occupational therapists, and speech pathologists",
      "Podiatrists, optometrists, and medical diagnostic imaging centres",
    ],
    keyRisks: [
      "Allegations of misdiagnosis, delayed treatment, or clinical treatment error",
      "Patient slips and falls in clinical waiting rooms or examination suites",
      "Cyber attacks encrypting electronic health records (Best Practice, MedicalDirector)",
      "AHPRA disciplinary investigations and professional conduct proceedings",
    ],
    recommendedCovers: [
      {
        title: "Medical Malpractice / PI",
        description: "Covers civil liability, patient compensation, and legal defense costs for clinical errors.",
        href: "/specialtyinsurance/professional-indemnity-insurance",
      },
      {
        title: "Clinic Office & Property Package",
        description: "Covers specialized medical diagnostic equipment, autoclaves, and vaccine stock refrigeration.",
        href: "/businessinsurance/business-insurance-package",
      },
      {
        title: "Cyber & Health Data Insurance",
        description: "Covers mandatory Privacy Act breach reporting, patient notification, and digital ransom defense.",
        href: "/businessinsurance/cyber-insurance",
      },
    ],
    regulatoryNotes: "Meets AHPRA mandatory registration insurance standards and RACGP accreditation criteria.",
    whyKooo: "We structure entity entity-defense extensions ensuring both the employed doctors and the clinic ownership company are fully defended.",
    image: "/images/photos/pexels-7579041.jpg",
    stats: [
      { value: "AHPRA", label: "Compliant Wordings" },
      { value: "$20M", label: "Malpractice Limits" },
      { value: "Full", label: "Entity Defense" },
    ],
    relatedIndustries: ["health-care", "ndis-disability-aged-care"],
  },

  // --------------------------------------------------------------------------
  // 9. PLACES OF WORSHIP & COMMUNITY
  // --------------------------------------------------------------------------
  {
    slug: "places-of-worship-community",
    name: "Places of Worship & Community",
    shortName: "Worship & Community",
    industryGroup: "Places of Worship & Community",
    heroTitle: "Insurance for Churches, Mosques, Temples & Non-Profits",
    summary: "Dedicated packages protecting faith communities, religious charities, not-for-profit organizations, and volunteer teams.",
    intro: "Religious organizations and community groups bring people together under high ethical duty. Kooo protects your sacred buildings, congregation, and community initiatives.",
    description: "Churches, mosques, temples, and community associations hold substantial heritage assets, host public community events, and rely heavily on volunteer labor. A volunteer injury, community hall fire, or governance dispute can threaten community assets. Kooo designs tailored packages with leading Australian faith-based and community underwriters, ensuring affordable premiums and broad liability.",
    audiences: [
      "Christian churches, parishes, and denominational ministries",
      "Mosques, Islamic centres, and prayer halls",
      "Hindu, Buddhist, and Sikh temples and cultural centers",
      "Registered Australian charities and not-for-profit organisations (ACNC)",
      "Community drop-in centres, food banks, and volunteer associations",
    ],
    keyRisks: [
      "Congregation or visitor slip and fall on stairs, community halls, or grounds",
      "Accidental fire or storm damage to historic or specialized religious sanctuaries",
      "Volunteer injury claims during charity operations or grounds maintenance",
      "Allegations of governance failure or breach of fiduciary duty against board members",
    ],
    recommendedCovers: [
      {
        title: "Faith Community Public Liability",
        description: "Comprehensive $20M liability covering religious ceremonies, festivals, and public gatherings.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Property & Heritage Sanctuaries",
        description: "Protects stained glass, specialized altars, audio-visual gear, and community hall buildings.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
      {
        title: "Directors & Officers / Management Liability",
        description: "Safeguards voluntary committee members, church elders, and trustees from personal liability.",
        href: "/specialtyinsurance/directors-and-officers-insurance",
      },
      {
        title: "Volunteer Personal Accident",
        description: "Provides medical expenses and weekly income benefits for volunteers injured during service.",
        href: "/personalinsurance/personal-accident-sickness-insurance",
      },
    ],
    regulatoryNotes: "Meets ACNC governance guidelines, state child safety compliance codes, and local council hall leasing requirements.",
    whyKooo: "We respect the unique spiritual and financial realities of faith communities, negotiating competitive non-profit rates with specialized underwriters.",
    image: "/images/photos/pexels-6230973.jpg",
    stats: [
      { value: "ACNC", label: "Governance Compliant" },
      { value: "Volunteer", label: "Injury Included" },
      { value: "$20M", label: "Festival & Hall Cover" },
    ],
    relatedIndustries: ["education-childcare", "property"],
  },

  // --------------------------------------------------------------------------
  // 10. ACCOMMODATION
  // --------------------------------------------------------------------------
  {
    slug: "accommodation",
    name: "Accommodation & Hospitality Lodging",
    shortName: "Accommodation",
    industryGroup: "Accommodation",
    heroTitle: "Hotel, Motel & Serviced Apartment Insurance",
    summary: "Tailored commercial packages for hotels, regional motels, serviced apartments, luxury lodges, and bed & breakfasts.",
    intro: "Operating accommodation means hosting guests 24 hours a day. Kooo protects your building assets, guest liabilities, and seasonal cash flow.",
    description: "Accommodation businesses carry around-the-clock public exposure: swimming pools, wet bathroom slips, guest room property theft, commercial laundries, and bar facilities. Severe bushfire, flood, or cyclone can devastate bookings for an entire season. Kooo structures tailored commercial insurance packages with extended Business Interruption indemnity periods to keep your business financially secure.",
    audiences: [
      "Boutique hotels, luxury retreats, and resort operators",
      "Regional motels, motor inns, and highway lodges",
      "Serviced apartment complexes and extended stay providers",
      "Guesthouses, bed & breakfasts (B&Bs), and heritage inns",
    ],
    keyRisks: [
      "Guest slip and fall injuries in tiled bathrooms, foyer steps, or pool surrounds",
      "Commercial laundry or kitchen fires causing structural evacuation and property loss",
      "Guest property damage or theft from hotel safes and parking garages (Innkeepers Liability)",
      "Extended booking cancellations and loss of revenue after bushfire or road closures",
    ],
    recommendedCovers: [
      {
        title: "Commercial Property Insurance",
        description: "Full replacement cover for hotel buildings, guest room furniture, fixtures, and pool assets.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
      {
        title: "Public Liability ($20M)",
        description: "Protects against guest bodily injury claims, pool liabilities, and licensed dining premises.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Business Interruption (18-24 Mo)",
        description: "Maintains net profit and pays ongoing mortgage interest during extended reconstruction.",
        href: "/specialtyinsurance/business-interruption-insurance",
      },
      {
        title: "Management Liability & Cyber",
        description: "Protects online booking engines, guest credit card details, and company directors.",
        href: "/businessinsurance/cyber-insurance",
      },
    ],
    regulatoryNotes: "Meets Australian innkeepers liability statutory requirements, state liquor licensing, and fire safety codes.",
    whyKooo: "We negotiate extended indemnity periods and tailored seasonal fluctuation endorsements so you aren't underinsured during peak tourism holidays.",
    image: "/images/photos/pexels-327540.jpg",
    stats: [
      { value: "24-Mo", label: "Interruption Periods" },
      { value: "Innkeepers", label: "Liability Included" },
      { value: "$20M", label: "Guest Liability" },
    ],
    relatedIndustries: ["caravan-parks-tourism", "food-hospitality", "property"],
  },

  // --------------------------------------------------------------------------
  // 11. CARAVAN PARKS & TOURISM
  // --------------------------------------------------------------------------
  {
    slug: "caravan-parks-tourism",
    name: "Caravan Parks & Tourism",
    shortName: "Caravan & Tourism",
    industryGroup: "Caravan parks and tourism",
    heroTitle: "Holiday Park, Caravan Park & Tourism Operator Insurance",
    summary: "Specialist insurance for Australian holiday parks, camping grounds, eco-resorts, tour operators, and adventure experiences.",
    intro: "Tourism operators showcase the best of Australia. Kooo protects your cabins, water parks, tour vehicles, and tourist activities against environmental and liability risks.",
    description: "Caravan and holiday parks feature high-risk leisure infrastructure: jumping pillows, swimming pools, water slides, unpowered camping zones, and open campfires. Regional locations often face heightened bushfire, flood, and falling branch exposures. Kooo partners with specialized leisure underwriters to ensure comprehensive public liability, cabin infrastructure coverage, and adventure tourism protection.",
    audiences: [
      "Caravan parks, holiday parks, and tourist cabin resorts",
      "Commercial camping grounds, glamping sites, and eco-wilderness lodges",
      "Regional tour operators, bus charters, and 4WD safari companies",
      "Marine adventure charters, kayak rentals, and outdoor experience guides",
    ],
    keyRisks: [
      "Jumping pillow, water slide, and playground fractures or head injuries",
      "Falling eucalyptus tree branches damaging tourist caravans or tents",
      "Bushfire, flood, or severe storm destroying park amenities and cabins",
      "Accidental vehicle collisions with park boom gates or pedestrian guests",
    ],
    recommendedCovers: [
      {
        title: "Leisure & Tourism Public Liability",
        description: "Specialized $20M liability with specific endorsements for water recreation and outdoor sports.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Commercial Property & Cabins",
        description: "Covers cabins, amenitiy blocks, underground services, solar arrays, and park facilities.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
      {
        title: "Business Interruption Insurance",
        description: "Covers lost booking revenue if bushfire alerts or natural disasters prompt park evacuation.",
        href: "/specialtyinsurance/business-interruption-insurance",
      },
      {
        title: "Commercial Motor & Tour Vehicles",
        description: "Covers park utility vehicles, tractors, passenger tour buses, and boat transfers.",
        href: "/truckfleetinsurance/commercial-motor-insurance",
      },
    ],
    regulatoryNotes: "Meets Caravan Industry Association of Australia standards and national park commercial tour licensing permits.",
    whyKooo: "We access specialized leisure underwriting facilities that understand regional tourism operations and seasonal revenue cycles.",
    image: "/images/photos/pexels-32570638.png",
    stats: [
      { value: "Specialist", label: "Leisure Underwriters" },
      { value: "Jumping", label: "Pillow Cover Included" },
      { value: "$20M", label: "Tourism Liability" },
    ],
    relatedIndustries: ["accommodation", "fitness-recreation", "property"],
  },

  // --------------------------------------------------------------------------
  // 12. BEAUTY & PERSONAL SERVICES
  // --------------------------------------------------------------------------
  {
    slug: "beauty-personal-services",
    name: "Beauty & Personal Services",
    shortName: "Beauty & Personal Care",
    industryGroup: "Beauty and personal services",
    heroTitle: "Insurance for Hairdressers, Barbers & Beauty Salons",
    summary: "Dedicated packages protecting salons, barbers, dermal clinics, nail bars, and cosmetic beauty specialists across Australia.",
    intro: "Personal service businesses combine close client care with chemical and heat applications. Kooo delivers essential Treatment Risk and Public Liability protection.",
    description: "Whether running a modern barber shop, luxury hair salon, or cosmetic dermal clinic, personal beauty treatments carry inherent bodily injury exposures: chemical hair burn, scalp reactions, laser skin burns, and slips on wet salon tiles. Standard public liability excludes treatment risks; Kooo provides comprehensive packages that combine Treatment Risk Professional Indemnity with Shop Contents and Liability.",
    audiences: [
      "Hairdressing salons and traditional barber shops",
      "Beauty salons, nail bars, and brow/lash studios",
      "Dermal clinics, skin therapy centres, and laser hair removal clinics",
      "Tanning studios, day spas, and cosmetic wellness salons",
    ],
    keyRisks: [
      "Client chemical burns or allergic scalp reactions from bleach, tints, or perms",
      "Skin burns or hyperpigmentation from laser, IPL, or chemical peel treatments (Treatment Risk)",
      "Client slip and fall on wet salon washbasin tiles or cut hair clippings",
      "Damage to expensive salon fit-outs, styling chairs, and imported aesthetic machines from burst pipes",
    ],
    recommendedCovers: [
      {
        title: "Treatment Risk & Public Liability",
        description: "Crucial combined policy covering client bodily injury during professional beauty treatments.",
        href: "/specialtyinsurance/professional-indemnity-insurance",
      },
      {
        title: "Salon Business Package",
        description: "Covers fit-out, styling stations, specialized laser machinery, and retail cosmetics stock.",
        href: "/businessinsurance/business-insurance-package",
      },
      {
        title: "Product Liability",
        description: "Protects your salon if a client suffers an allergic reaction from retail hair/skincare sold.",
        href: "/specialtyinsurance/product-liability-insurance",
      },
      {
        title: "Business Interruption",
        description: "Maintains salon cash flow and pays ongoing lease rent if fire or flood closes your salon.",
        href: "/specialtyinsurance/business-interruption-insurance",
      },
    ],
    regulatoryNotes: "Complies with Australian Hairdressing Council guidelines and local council public health skin penetration regulations.",
    whyKooo: "We explicitly ensure Treatment Risk is included in your policy wording, protecting you from claims standard direct insurers routinely reject.",
    image: "/images/photos/pexels-8422248.jpg",
    stats: [
      { value: "Treatment", label: "Risk Endorsement" },
      { value: "$20M", label: "Public Liability" },
      { value: "Laser/IPL", label: "Cover Available" },
    ],
    relatedIndustries: ["food-hospitality", "health-care"],
  },

  // --------------------------------------------------------------------------
  // 13. FITNESS & RECREATION
  // --------------------------------------------------------------------------
  {
    slug: "fitness-recreation",
    name: "Fitness & Recreation",
    shortName: "Fitness & Gyms",
    industryGroup: "Fitness and recreation",
    heroTitle: "Gym, Fitness Studio & Personal Trainer Insurance",
    summary: "Tailored protection for 24/7 fitness centres, boutique Pilates/yoga studios, personal trainers, and sporting organisations.",
    intro: "Exercise and athletic training involve physical intensity and member injury risks. Kooo delivers comprehensive Gym Liability and Trainer Professional Indemnity.",
    description: "Fitness facilities face unique operational risks: 24/7 unstaffed gym access, drop-weight fractures, treadmill fall accidents, and allegations of trainer negligence. Operating without specialized fitness policy wording leaves gym owners personally exposed. Kooo partners with Australia's premier sports and leisure insurers to structure broad liability, equipment breakdown, and member injury coverage.",
    audiences: [
      "Commercial gyms and 24/7 unstaffed fitness franchises",
      "Pilates reformer studios, yoga studios, and barre centres",
      "Independent personal trainers (PTs) and outdoor bootcamp coaches",
      "CrossFit boxes, martial arts dojos, and functional fitness centres",
      "Amateur sporting clubs, athletic associations, and tournament venues",
    ],
    keyRisks: [
      "Member injuries: torn ligaments, dropped barbells, or cardiovascular medical emergencies",
      "Unstaffed 24/7 overnight access incidents: duress alarm failure or emergency response delays",
      "Allegations of improper instruction or overtraining against personal training staff",
      "Breakdown of high-tech digital treadmills, cable machines, and commercial sound systems",
    ],
    recommendedCovers: [
      {
        title: "Gym & Sports Public Liability",
        description: "$20M protection covering member injuries, equipment failure, and facility premises.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Instructor Professional Indemnity",
        description: "Protects trainers against claims of improper exercise prescription or client injury.",
        href: "/specialtyinsurance/professional-indemnity-insurance",
      },
      {
        title: "Gym Equipment & Property Cover",
        description: "Comprehensive replacement cover for cardio machines, free weights, and fit-outs.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
      {
        title: "Personal Accident (Player / Member)",
        description: "Capital benefits and non-Medicare medical expense coverage for injured club members.",
        href: "/personalinsurance/personal-accident-sickness-insurance",
      },
    ],
    regulatoryNotes: "Complies with AUSactive (Fitness Australia) code of practice and council park training commercial permits.",
    whyKooo: "We understand unstaffed 24/7 gym security requirements (CCTV, duress buttons) and ensure you secure approved terms without punitive exclusions.",
    image: "/images/photos/pexels-8961401.jpg",
    stats: [
      { value: "24/7", label: "Unstaffed Gym Approved" },
      { value: "AUSactive", label: "Industry Standard" },
      { value: "$20M", label: "Fitness Liability" },
    ],
    relatedIndustries: ["caravan-parks-tourism", "health-care"],
  },

  // --------------------------------------------------------------------------
  // 14. MANUFACTURING & DISTRIBUTION
  // --------------------------------------------------------------------------
  {
    slug: "manufacturing-distribution",
    name: "Manufacturing & Distribution",
    shortName: "Manufacturing & Warehousing",
    industryGroup: "Manufacturing and distribution",
    heroTitle: "Industrial Manufacturing, Importers & Warehouse Insurance",
    summary: "Heavy-duty coverage for Australian manufacturers, wholesale distributors, importers, exporters, and logistics warehouse hubs.",
    intro: "Producing and distributing goods across Australia carries severe product liability, machinery breakdown, and supply chain interruption exposures. Kooo protects your plant.",
    description: "Under the Australian Consumer Law, direct importers and brand owners carry deemed manufacturer liability for product defects. When combined with automated robotic assembly lines, high-density warehouse racking, and overseas marine transit risks, manufacturers require robust risk engineering. Kooo designs integrated industrial programs covering product recall, boiler/machinery breakdown, marine cargo, and enterprise business interruption.",
    audiences: [
      "Food, beverage, and consumer goods manufacturers",
      "Metal fabricators, machinery builders, and plastic molders",
      "Wholesale distributors and B2B trade supply companies",
      "Direct product importers and international export businesses",
      "Warehousing logistics operators and high-bay storage hubs",
    ],
    keyRisks: [
      "Product defect claims causing third-party property damage or consumer personal injury",
      "Mandatory Australian ACCC product recall expenses and brand rehabilitation costs",
      "Catastrophic industrial machinery or automated conveyor motor breakdown halting production",
      "Warehouse high-rack collapse or forklift damage to tens of thousands of pallets",
      "International shipping container loss, water ingress, or port demurrage in transit",
    ],
    recommendedCovers: [
      {
        title: "Product Liability & Recall Insurance",
        description: "Crucial protection against consumer defect claims and the catastrophic expense of product recall.",
        href: "/specialtyinsurance/product-liability-insurance",
      },
      {
        title: "Industrial Special Risks (ISR) / Property",
        description: "High-value asset protection for factory buildings, raw materials, finished stock, and plant.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
      {
        title: "Machinery Breakdown Insurance",
        description: "Covers sudden mechanical or electrical breakdown of CNC machines, boilers, and production lines.",
        href: "/tradesconstructioninsurance/plant-and-machinery-insurance",
      },
      {
        title: "Marine Cargo & International Transit",
        description: "All-risks transit coverage from overseas factories through Australian customs to warehouse.",
        href: "/specialtyinsurance/marine-cargo-insurance",
      },
      {
        title: "Business Interruption (Gross Profit)",
        description: "Maintains company net profit and executive payroll during prolonged factory reconstruction.",
        href: "/specialtyinsurance/business-interruption-insurance",
      },
    ],
    regulatoryNotes: "Complies with Australian Consumer Law (ACL) statutory warranties, SafeWork WHS standards, and ISO 9001 quality audits.",
    whyKooo: "We work with specialized industrial underwriters capable of writing high-capacity Industrial Special Risks (ISR) with tailored product recall sub-limits.",
    image: "/images/photos/pexels-2199293.jpg",
    stats: [
      { value: "ACCC", label: "Recall Protection" },
      { value: "$50M+", label: "Property & ISR Limits" },
      { value: "Global", label: "Import/Export Cargo" },
    ],
    relatedIndustries: ["transport-logistics", "grocery-retail", "trades-construction"],
  },

  // --------------------------------------------------------------------------
  // 15. PROPERTY & REAL ESTATE
  // --------------------------------------------------------------------------
  {
    slug: "property",
    name: "Property & Real Estate",
    shortName: "Property & Strata",
    industryGroup: "Property",
    heroTitle: "Commercial Landlord, Strata & Real Estate Agency Insurance",
    summary: "End-to-end protection for commercial building owners, property investors, strata managers, and real estate agencies across Australia.",
    intro: "Managing and owning commercial property involves significant asset and liability risk. Kooo protects commercial buildings, strata schemes, rental income, and agency trust accounts.",
    description: "From multi-tenant commercial office towers and industrial parks to licensed real estate agencies and residential strata schemes, property exposures are multifaceted. Building owners face structural fire, common area slips, and tenant default; property managers face professional indemnity claims over tenancy disputes and cyber trust account fraud. Kooo structures tailored property packages with leading Australian strata and commercial underwriters.",
    audiences: [
      "Commercial property owners and commercial landlords",
      "Industrial estate, retail strip, and office building investors",
      "Licensed real estate agencies and commercial property managers",
      "Residential and commercial Strata Managers and Body Corporates",
    ],
    keyRisks: [
      "Catastrophic structural fire, storm, or flood destroying commercial buildings",
      "Visitor slip, trip, and fall injuries in common area foyers, stairwells, or car parks",
      "Tenant default and prolonged loss of commercial rent following business failure or disaster",
      "Professional indemnity claims against property managers for improper tenant vetting or lease errors",
      "Cyber fraud intercepting real estate trust account settlement funds",
    ],
    recommendedCovers: [
      {
        title: "Commercial Property Insurance",
        description: "Full building replacement, glass, loss of rent, and machinery breakdown for property owners.",
        href: "/specialtyinsurance/commercial-property-insurance",
      },
      {
        title: "Commercial Strata Insurance",
        description: "Mandatory statutory insurance covering common property, building fabric, and body corporate liability.",
        href: "/specialtyinsurance/commercial-strata-insurance",
      },
      {
        title: "Landlord Insurance (Commercial / Residential)",
        description: "Protects tenant default, fixture damage, and legal expenses for residential and commercial landlords.",
        href: "/personalinsurance/landlord-insurance",
      },
      {
        title: "Real Estate Professional Indemnity & Cyber",
        description: "Crucial protection for real estate agencies managing trust accounts and sales negotiations.",
        href: "/specialtyinsurance/professional-indemnity-insurance",
      },
    ],
    regulatoryNotes: "Meets State Strata Schemes Management Acts, Property and Stock Agents Acts, and commercial lease standards.",
    whyKooo: "We negotiate competitive strata rates and ensure property owners receive genuine replacement cost valuations without co-insurance underinsurance penalties.",
    image: "/images/photos/pexels-933964.jpg",
    stats: [
      { value: "Strata", label: "Act Compliant" },
      { value: "Loss of Rent", label: "Up to 24 Months" },
      { value: "$20M", label: "Common Area Liability" },
    ],
    relatedIndustries: ["accommodation", "professional-services", "trades-construction"],
  },

  // --------------------------------------------------------------------------
  // 16. AGRICULTURE & RURAL
  // --------------------------------------------------------------------------
  {
    slug: "agriculture-rural",
    name: "Agriculture & Rural",
    shortName: "Farm & Agriculture",
    industryGroup: "Agriculture and rural",
    heroTitle: "Farm, Rural Enterprise & Hobby Farm Insurance",
    summary: "Built for Australian farmers and rural businesses: broadacre crops, pastoral livestock, tractors, fencing, and farm homesteads.",
    intro: "Australian agriculture battles extreme weather, volatile commodity markets, and rugged operating conditions. Kooo structures tailored rural packages protecting your property and produce.",
    description: "Farming is both a commercial enterprise and a home. Standard suburban insurance cannot adequately address livestock mortality, fencing loss from grassfires, high-value combine harvester fires, or farm chemical spray drift liabilities. Kooo delivers comprehensive Farm Packages that consolidate your homestead, farm machinery, livestock, fencing, and rural liability under a single, well-managed policy.",
    audiences: [
      "Broadacre grain, cereal, and oilseed farming operations",
      "Pastoral beef cattle, sheep, and dairy station operators",
      "Hobby farms, lifestyle acreages, and rural homesteads",
      "Viticulture vineyards, wineries, and fruit orchards",
      "Rural contractors (contract harvesting, earthmoving, fencing)",
    ],
    keyRisks: [
      "Grassfire or bushfire escaping your property boundary and causing millions in neighboring damage",
      "Livestock straying onto public roads causing motor vehicle accidents",
      "Harvester or tractor engine fire during harvest season causing total machinery destruction",
      "Hail, storm, or flood destroying boundary fencing, silos, and farm outbuildings",
      "Loss of farm chemical or pesticide drift onto organic neighboring crops",
    ],
    recommendedCovers: [
      {
        title: "Farm & Rural Insurance Package",
        description: "Consolidated cover for domestic homestead, farm outbuildings, silos, fencing, and livestock.",
        href: "/specialtyinsurance/farm-and-rural-insurance",
      },
      {
        title: "Plant & Farm Machinery Insurance",
        description: "Comprehensive accidental damage and fire cover for tractors, harvesters, headers, and GPS gear.",
        href: "/tradesconstructioninsurance/plant-and-machinery-insurance",
      },
      {
        title: "Farm Public & Chemical Liability",
        description: "$20M liability including livestock straying, chemical spray drift, and farm gate sales.",
        href: "/businessinsurance/public-liability-insurance",
      },
      {
        title: "Farm Motor & Working Utes",
        description: "Covers farm utes, bulk grain tippers, livestock trailers, and unregistered farm vehicles.",
        href: "/truckfleetinsurance/commercial-motor-insurance",
      },
    ],
    regulatoryNotes: "Meets Rural Fire Service guidelines, EPA chemical application codes, and biosecurity statutory standards.",
    whyKooo: "We understand seasonal cash flows and offer annual post-harvest payment schedules with Australia's premier rural underwriting mutuals.",
    image: "/images/photos/pexels-4981810.jpg",
    stats: [
      { value: "Fencing & Hay", label: "Specialist Sub-Limits" },
      { value: "$20M", label: "Farm Liability" },
      { value: "Flexible", label: "Harvest Pay Terms" },
    ],
    relatedIndustries: ["transport-logistics", "property"],
  },
];

export function getIndustry(slug: string): IndustryDetail | undefined {
  return industries.find((i) => i.slug === slug);
}
