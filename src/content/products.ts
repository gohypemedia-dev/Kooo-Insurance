// Detailed product catalogue for Kooo Insurance.
// Each product links to its parent category and provides in-depth Australian commercial advice.

export type ProductDetail = {
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  whatIsCovered: string[];
  whatIsNotCovered: string[];
  whoNeedsIt: string[];
  keyBenefits: string[];
  faqs: { question: string; answer: string }[];
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const products: Record<string, ProductDetail> = {
  // =========================================================================
  // TIER 1 — FOUNDATIONAL ANCHOR PRODUCTS
  // =========================================================================

  // --- 1. Public Liability Insurance ---
  "public-liability-insurance": {
    slug: "public-liability-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Public Liability Insurance",
    shortTitle: "Public Liability",
    summary: "Essential protection against third-party bodily injury, property damage, and associated legal costs across Australia with instant Certificate of Currency.",
    description: "Public Liability Insurance protects Australian businesses, sole traders, and contractors if a third party—such as a customer, supplier, visitor, or member of the public—is injured or suffers property damage as a result of your business operations. Whether you operate from commercial premises, visit client sites, or work in public spaces, public liability cover safeguards your enterprise against devastating financial claims and legal defence expenses.",
    whatIsCovered: [
      "Third-party bodily injury compensation, medical expenses, and care costs occurring on your premises or off-site operations",
      "Accidental loss or damage to third-party property, buildings, fixtures, or vehicles caused by you or your employees",
      "Legal defence expenses, solicitor fees, senior counsel retainers, and court costs (often payable in addition to primary limit)",
      "Coronial inquest representation and official statutory investigation legal expenses following a workplace incident",
      "Tenant's liability for accidental damage caused to leased commercial premises under standard tenancy agreements",
      "Flexible indemnity limits of $5M, $10M, or $20M to satisfy commercial contracts, builder inductions, and council permits",
      "Goods in Care, Custody & Control sub-limits (typically $50,000 to $250,000) for third-party items in your physical possession",
    ],
    whatIsNotCovered: [
      "Injuries to your own employees, apprentices, or deemed workers (covered under statutory Workers Compensation)",
      "Direct costs of rectifying your own faulty workmanship or defective products (resultant damage is covered)",
      "Negligent professional advice, designs, calculations, or consultancy (covered under Professional Indemnity Insurance)",
      "Deliberate, intentional, illegal, or grossly reckless acts",
      "Claims arising directly or indirectly from asbestos materials, disturbance, or removal",
      "Contractual liabilities assumed that exceed normal common law obligations without underwriter approval",
    ],
    whoNeedsIt: [
      "Trades and construction contractors (electricians, plumbers, builders, carpenters, earthmovers) requiring site induction proof",
      "Retail shopfronts, cafes, restaurants, medical practices, and gyms holding commercial property leases",
      "Commercial cleaning, facility maintenance, and mobile service contractors visiting client premises",
      "Corporate consultants, sole traders, and independent contractors entering client offices or public venues",
      "Any business tendering for government, municipal council, or tier-1 head contractor commercial tenders",
    ],
    keyBenefits: [
      "Same-day Certificate of Currency issuance to satisfy landlords, principals, and head contractors immediately",
      "Access to Australia's tier-1 underwriting agencies for flexible risk appetites and competitive terms",
      "Customised policy limits aligned directly with your state, municipal council, and contractual mandates",
      "Dedicated Kooo broker claims advocacy—we negotiate directly with loss adjusters and underwriters",
    ],
    faqs: [
      {
        question: "How much Public Liability Insurance does an Australian business need?",
        answer: "While $5 million is the entry-level limit, most Australian commercial landlords, local municipal councils, and tier-1 construction contractors mandate a minimum of $10 million or $20 million. If you work on commercial construction sites, government facilities, or in busy shopping centres, $20 million is almost universally required. Kooo reviews your contracts to ensure you meet requirements without overpaying.",
      },
      {
        question: "How quickly can Kooo issue my Certificate of Currency?",
        answer: "Once terms are accepted and payment is arranged, Kooo generates your official Certificate of Currency immediately. You receive the PDF in your inbox within minutes so you can commence site work, collect commercial keys, or finalize tenders without delay.",
      },
      {
        question: "Does Public Liability cover damage to my own tools or equipment?",
        answer: "No. Public Liability covers damage or injury caused to third parties. To protect your own tools, power equipment, and machinery against theft or damage, you need dedicated Tools & Portable Equipment Insurance or a Business Package Policy.",
      },
      {
        question: "Am I covered for the actions of my subcontractors?",
        answer: "Standard Public Liability policies cover your vicarious liability (claims brought against you because of work carried out on your behalf). However, head contractors require bona-fide subcontractors to maintain their own independent Public Liability policies. Kooo can advise on subcontractor management clauses to keep you protected.",
      },
    ],
  },

  // --- 2. Business Package Insurance ---
  "business-package-insurance": {
    slug: "business-package-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Business Package Insurance",
    shortTitle: "Business Package",
    summary: "Customised bundled cover combining building, contents, stock, business interruption, and liability into one consolidated policy schedule.",
    description: "Business Package Insurance brings together the vital covers an Australian business needs into one comprehensive, cost-effective policy schedule. Instead of managing separate policies with mismatched renewal dates and conflicting conditions, our business package solutions let you combine building, contents, stock, glass, money, theft, business interruption, and liability protection tailored directly to your operating model.",
    whatIsCovered: [
      "Commercial building and structural improvements against fire, storm, lightning, impact, and accidental damage",
      "Business contents, office furniture, computers, manufacturing equipment, raw materials, and retail stock",
      "Business Interruption covering lost operating profit, ongoing employee payroll, rent, and overheads following an insured event",
      "Additional Increased Cost of Working (AICOW) to relocate to temporary commercial premises after a disaster",
      "Burglary, theft, and armed holdup covering stock and equipment following violent or forced entry",
      "Money in transit, on premises during business hours, or locked inside approved commercial safes overnight",
      "Glass breakage including shopfront windows, internal showcases, mirrors, and compliant illuminated signage",
      "Machinery breakdown and electronic failure covering refrigeration compressors, air conditioning plant, and computing equipment",
      "Tax audit expenses covering accountant and legal fees during an official Australian Taxation Office (ATO) audit",
    ],
    whatIsNotCovered: [
      "Wear, tear, gradual deterioration, rust, corrosion, weathering, dry rot, and lack of reasonable maintenance",
      "Flood inundation from rising rivers, creeks, or canals (unless specifically selected and underwritten as an agreed extension)",
      "Cyber extortion and ransomware data theft (covered under standalone Cyber Insurance)",
      "Unexplained inventory shortages and stock shrinkage discovered during routine stocktakes",
      "Pre-existing structural defects or unapproved alterations non-compliant with the Building Code of Australia (BCA)",
    ],
    whoNeedsIt: [
      "Retail shops, boutique stores, pharmacies, and supermarkets protecting valuable inventory and shopfronts",
      "Hospitality venues including cafes, restaurants, bakeries, and bars protecting kitchen fit-outs, coolrooms, and trade income",
      "Commercial offices, law practices, accounting firms, medical clinics, and dental surgeries protecting fitouts and diagnostics",
      "Light industrial workshops, fabricators, and warehouses holding high-value plant, machinery, and distribution stock",
      "Commercial property owners and tenants leasing premises under full repairing and insuring lease agreements",
    ],
    keyBenefits: [
      "One common annual renewal date and consolidated policy schedule across all operational risks",
      "Flexible deductibles allowing you to optimize premium outlay against operational cash flow",
      "Accurate replacement valuation support utilizing Cordell building cost estimating tools to avoid Average penalties",
      "End-to-end claim lodgement and dedicated settlement advocacy by Kooo brokers",
    ],
    faqs: [
      {
        question: "What is the difference between Gross Profit and Gross Revenue for Business Interruption?",
        answer: "This is one of the most critical advisory calculations in Australian insurance. Insuring for Gross Profit covers your turnover minus un-incurred variable costs (like raw materials not purchased during shutdown), whereas Gross Revenue covers your full operational income. Insuring the wrong sum or selecting an inadequate indemnity period (e.g., 12 months instead of 24 months for council rebuild approvals) can lead to severe underinsurance. Kooo calculates your exact gross profit baseline.",
      },
      {
        question: "How do I accurately value my commercial building to avoid Average or Co-Insurance penalties?",
        answer: "Under Australian insurance contracts, an Average clause means that if your building is insured for less than 80% or 85% of its true rebuild value, any claim settlement is proportionally reduced. Kooo utilizes Cordell building cost estimation data to benchmark accurate demolition, debris removal, architectural, and rebuild costs.",
      },
      {
        question: "Can I choose which covers to include in my Business Package?",
        answer: "Yes. Business Packages are completely modular. You choose only the covers your business actually requires. If you lease commercial premises, you can exclude the building section and focus on contents, stock, glass, public liability, and business interruption.",
      },
    ],
  },

  // --- 3. Heavy Vehicle and Truck Insurance ---
  "heavy-vehicle-and-truck-insurance": {
    slug: "heavy-vehicle-and-truck-insurance",
    categorySlug: "truckfleetinsurance",
    categoryName: "Truck & Fleet Insurance",
    title: "Heavy Vehicle & Truck Insurance",
    shortTitle: "Heavy Vehicle & Truck",
    summary: "Dedicated cover for prime movers, rigid trucks, tippers, tankers, and trailers operating across Australia with downtime and salvage recovery.",
    description: "Heavy transport operations require specialised risk underwriting. From single owner-operators to interstate linehaul fleets, our Heavy Vehicle & Truck Insurance protects your rigs against road accidents, roll-overs, fire, theft, towing recovery, and third-party property damage across metro, regional, and remote Australia. We work with Australia's premier transport underwriters—including NTI, QBE, GT Insurance, and Agile—to structure robust protection.",
    whatIsCovered: [
      "Comprehensive accidental damage, collision, overturn, jackknife, fire, storm, and flood cover across Australia",
      "Third-party property damage liability up to $30 Million, including options for dangerous goods (DG) carriage",
      "24/7 emergency heavy vehicle towing, uncapped salvage recovery, and specialized crane retrieval from accident scenes",
      "Clean-up and road spillage recovery costs following spilled diesel, fluids, or non-hazardous cargo to satisfy EPA rules",
      "Trailer in Control (TIC) cover protecting non-owned trailers in your care, custody, and control (typically $100k–$300k)",
      "Loss of use downtime allowance options (up to $2,500–$5,000/week) while vehicle is undergoing authorised accident repairs",
      "Finance payout protection and lease gap shortfall cover between market value payout and commercial equipment loans",
      "Windscreen and cabin glass replacement with nil excess options to minimise off-road time",
    ],
    whatIsNotCovered: [
      "Unlicensed drivers or drivers operating without valid heavy vehicle licence endorsements (HR, HC, MC)",
      "Operating under the influence of alcohol or drugs exceeding statutory Australian legal limits",
      "Vehicles operating outside agreed manufacturer Gross Combination Mass (GCM) or Gross Vehicle Mass (GVM) ratings",
      "Intentional breaches of National Heavy Vehicle Regulator (NHVR) fatigue management or Chain of Responsibility laws",
      "Normal mechanical engine breakdown, turbocharger failure, or tyre punctures without an associated impact collision",
      "Unapproved vehicle modifications or chassis extensions not certified by an accredited transport engineer",
    ],
    whoNeedsIt: [
      "Owner-drivers and transport subcontractors operating single prime movers, rigid trucks, or tippers",
      "Interstate linehaul carriers operating B-Doubles, road trains, and refrigerated freight combinations",
      "Civil earthmoving, quarry, and cartage contractors hauling sand, soil, demolition waste, and heavy equipment",
      "Livestock, agricultural, and bulk grain transport operators operating across regional and rural routes",
      "Specialised freight operators including fuel tankers, container sideloaders, and oversize heavy haulage escorts",
    ],
    keyBenefits: [
      "Accredited heavy transport repairer networks across all Australian interstate transport corridors",
      "Dedicated salvage and towing emergency response teams on call 24 hours a day, 7 days a week",
      "Benchmarked pricing across Australia's leading heavy transport specialists (NTI, QBE, GT Insurance)",
      "Agreed Value options with finance gap payout protection to safeguard commercial equipment loans",
    ],
    faqs: [
      {
        question: "What is Downtime Cover and do I need it for my truck?",
        answer: "If your prime mover is off the road for four to eight weeks following a major rollover or highway accident, your truck loan repayments and business overheads do not stop. Downtime Cover provides an agreed weekly payout (e.g. $2,500 to $5,000/week) to keep your business solvent while the repairer completes works. For single owner-operators and small fleets, it is essential cash flow protection.",
      },
      {
        question: "What is Trailer in Control (TIC) Insurance?",
        answer: "When you hook up a trailer owned by a freight forwarder, customer, or hiring company, your standard truck policy covers only your prime mover. If that third-party trailer rolls over or suffers damage while in your control, you are contractually liable for the repair bill. Trailer in Control cover protects you against this liability up to an agreed limit (typically $100k to $300k).",
      },
      {
        question: "How does Agreed Value differ from Market Value for heavy vehicles?",
        answer: "Agreed Value locks in a pre-determined sum insured on your truck for the 12-month policy term, providing absolute certainty on loan payout amounts. Market Value assesses the vehicle's replacement value at the exact time of the accident. For newer trucks or rigs under active finance, Kooo typically recommends Agreed Value with finance gap protection.",
      },
      {
        question: "Can Kooo cover dangerous goods (DG) carriage?",
        answer: "Yes. We work with specialist underwriters to endorse dangerous goods transport liability, environmental spill clean-up, and compliant transit extensions for fuel, chemicals, and gas hauliers.",
      },
    ],
  },

  // --- 4. Commercial Fleet Insurance ---
  "fleet-insurance": {
    slug: "fleet-insurance",
    categorySlug: "truckfleetinsurance",
    categoryName: "Truck & Fleet Insurance",
    title: "Commercial Fleet Insurance",
    shortTitle: "Fleet Insurance",
    summary: "Cost-effective, flexible consolidated cover for multi-vehicle commercial operations, vans, utes, and company fleets under one master policy.",
    description: "Managing insurance on 5 to 500+ commercial vehicles individually is time-consuming, expensive, and leaves your business exposed to administrative gaps. Commercial Fleet Insurance bundles all your company utes, service vans, sales executive cars, and delivery trucks under one unified master policy with automated vehicle additions, open driver endorsements, aggregate excess options, and competitive fleet rating.",
    whatIsCovered: [
      "Comprehensive multi-vehicle accidental collision, rollover, malicious damage, fire, storm, and theft",
      "Third-party property damage liability up to $20 Million or $30 Million across all fleet vehicles",
      "Open driver policy terms allowing any licensed employee permitted by the company to drive without individual driver listing",
      "Automatic mid-term vehicle additions and deletions with adjustments settled at policy anniversary or quarterly reviews",
      "Signwriting, commercial vehicle wraps, tool racking, trade canopies, bullbars, and permanent modifications cover",
      "Accident replacement vehicle hire following both not-at-fault and at-fault collisions to keep your mobile team working",
      "Sub-limited protection for personal effects and portable work tools inside the vehicle cabin during transit",
      "Periodic fleet claims experience reporting to identify safety patterns and negotiate lower renewal terms",
    ],
    whatIsNotCovered: [
      "Unlicensed, disqualified, or suspended drivers operating company vehicles",
      "Vehicles operated in an unroadworthy condition (such as defective brakes or non-compliant tyres)",
      "Unrestricted private use expressly excluded under restricted commercial fleet guidelines",
      "Motorsport events, speed trials, or unapproved recreational off-roading",
      "Wear, tear, mechanical breakdown, rust, and gradual engine depreciative loss",
    ],
    whoNeedsIt: [
      "Trade and construction companies running 5 to 50+ service utes, dual-cabs, and technician vans",
      "Couriers, parcel delivery networks, and local freight and food distribution businesses",
      "Corporate fleets providing executive passenger sedans, SUVs, or hybrids for sales teams and management",
      "Field maintenance and technical service providers (pest control, telecommunications, refrigeration, security)",
      "Civil contracting and infrastructure maintenance fleets operating mixed light and medium commercial vehicles",
    ],
    keyBenefits: [
      "One consolidated master policy schedule and single annual renewal date",
      "Preferential fleet rating discounts compared to insuring vehicles individually",
      "Complete operational flexibility through open driver terms without updating driver lists daily",
      "Dedicated claims manager handling all driver lodgements, repairer authorizations, and third-party recovery",
    ],
    faqs: [
      {
        question: "How many vehicles do I need to qualify for a Commercial Fleet policy?",
        answer: "In Australia, most commercial insurers require a minimum of 5 vehicles to qualify for a commercial fleet rating (though some underwriting agencies offer mini-fleet terms starting at 3 vehicles). Once qualified, your vehicles are rated as an entire fleet rather than on individual driver age and driving history.",
      },
      {
        question: "How does an Open Driver policy work?",
        answer: "On individual car policies, young or unlisted drivers face heavy excess penalties or exclusions. With an Open Driver Fleet Policy, any employee who holds a valid Australian licence appropriate for the vehicle class is covered to drive, giving fleet managers complete operational flexibility without updating paperwork daily.",
      },
      {
        question: "Can we mix different vehicle types under one fleet policy?",
        answer: "Yes. A fleet policy can combine dual-cab utes, service vans, executive sedans, trailers, and light trucks up to 4.5T GVM. For heavy prime movers and heavy trailers, these can either be integrated or structured alongside a dedicated heavy transport policy.",
      },
      {
        question: "How are mid-term vehicle purchases handled?",
        answer: "Fleet policies include an automatic addition clause (typically granting 30 days of immediate automatic comprehensive cover for newly acquired vehicles). You simply notify Kooo, and we update the master fleet schedule.",
      },
    ],
  },

  // --- 4b. Commercial Motor Insurance (Standalone / SME) ---
  "commercial-motor-insurance": {
    slug: "commercial-motor-insurance",
    categorySlug: "truckfleetinsurance",
    categoryName: "Truck & Fleet Insurance",
    title: "Commercial Motor Insurance",
    shortTitle: "Commercial Motor",
    summary: "Comprehensive protection for individual business vehicles, trade utes, delivery vans, and light commercial trucks across Australia.",
    description: "Your work vehicle is your mobile workshop and daily livelihood. Commercial Motor Insurance covers individual business vehicles—including utes, vans, four-wheel drives, light rigid trucks, and company cars—against road accidents, theft, storm damage, and third-party liability across all Australian roads.",
    whatIsCovered: [
      "Comprehensive accidental damage, collision, rollover, storm, fire, and theft cover",
      "Third-party property damage liability up to $20 Million or $30 Million",
      "Signwriting and vehicle graphics replacement following an accident",
      "Permanent vehicle accessories including canopies, toolboxes, bullbars, and roof racks",
      "Emergency towing and vehicle storage following a collision anywhere in Australia",
      "Replacement vehicle hire options to keep your business operating after an accident",
      "Agreed Value and Market Value policy options aligned with your finance requirements",
    ],
    whatIsNotCovered: [
      "Unlicensed or suspended drivers or drivers exceeding legal blood alcohol limits",
      "Using the vehicle for unapproved purposes (such as fare-paying passenger rideshare unless declared)",
      "Normal mechanical failure, engine wear, and tyre damage without a collision",
      "Damage caused while vehicle is being operated in an unroadworthy condition",
    ],
    whoNeedsIt: [
      "Tradies, builders, electricians, and plumbers operating business utes and vans",
      "Delivery drivers, couriers, and distribution contractors operating light rigid trucks or vans",
      "Sales representatives and mobile service technicians driving company cars",
      "Sole traders using their vehicle for both commercial operations and private use",
    ],
    keyBenefits: [
      "Choice of repairer and genuine manufacturer parts guarantees",
      "Nil excess windscreen replacement options",
      "Flexible payment options with no hidden broker administration surcharges",
      "Fast claim processing and direct assistance with third-party liability recovery",
    ],
    faqs: [
      {
        question: "Why do I need Commercial Motor instead of standard Personal Car Insurance?",
        answer: "Standard personal car insurance policies routinely exclude accidents occurring while carrying commercial tools, goods for delivery, or using the vehicle for business trades. Commercial Motor insurance specifically covers business usage, signage, racking, and higher liability limits required on client sites.",
      },
      {
        question: "Are my tools covered inside the ute if it is stolen?",
        answer: "Commercial motor policies cover the vehicle and its permanently attached fixtures (like bolted canopies). Loose power tools inside the cabin require Tools & Equipment Insurance or a transit extension. Kooo can bundle these seamlessly.",
      },
      {
        question: "Can I choose my own repairer?",
        answer: "Yes, many of our leading insurer partners offer Choice of Repairer endorsements, allowing you to use your preferred local body shop or manufacturer-certified repair facility.",
      },
    ],
  },

  // --- 5. Professional Indemnity Insurance ---
  "professional-indemnity-insurance": {
    slug: "professional-indemnity-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Professional Indemnity Insurance",
    shortTitle: "Professional Indemnity",
    summary: "Essential civil liability protection for Australian consultants, engineers, accountants, and advisors against claims of negligence, breach of duty, or advice error.",
    description: "For professionals who provide advice, design, technical consultancy, or specialized services, your intellectual output is your primary asset—and your greatest legal exposure. Even the most diligent practitioners can face allegations of error, omission, oversight, or breach of duty resulting in financial loss for a client. Professional Indemnity Insurance protects your business, your balance sheet, and your professional reputation by covering legal defence costs and court-awarded compensation.",
    whatIsCovered: [
      "Civil liability and professional negligence arising from errors, omissions, or breach of professional duty",
      "Legal defence expenses, specialist solicitors, and senior counsel representation (payable in addition to the policy limit)",
      "Misleading and deceptive conduct allegations under the Australian Consumer Law (Competition and Consumer Act 2010)",
      "Loss of client documents and electronic data including reasonable restoration expenses",
      "Unintentional breach of intellectual property, copyright, trademark, or confidentiality agreements",
      "Official inquiries and disciplinary hearings attendance costs before registration boards and tribunals",
      "Retroactive date cover protecting past work completed since your continuous practice inception date",
      "Defamation, unintentional libel, and slander defence costs occurring during professional service",
    ],
    whatIsNotCovered: [
      "Prior known claims or circumstances of which you were aware prior to policy inception",
      "Dishonest, fraudulent, criminal, or malicious acts by directors or staff",
      "Bodily injury or property damage (covered under Public Liability, unless directly caused by architectural/engineering design advice)",
      "Express contractual warranties or performance guarantees exceeding common law duty of care",
      "Cyber extortion and ransomware recovery (covered under standalone Cyber Insurance)",
      "Insolvency, bankruptcy, or commercial trading failure of your business",
    ],
    whoNeedsIt: [
      "Corporate, management, marketing, and HR consultants advising Australian enterprises",
      "Design and engineering professionals (architects, civil/structural engineers, draftspeople, town planners)",
      "Financial and property specialists (accountants, tax agents, bookkeepers, mortgage brokers, real estate agents)",
      "Technology and IT contractors (software engineers, systems architects, cybersecurity consultants)",
      "Allied health practitioners and therapists (psychologists, occupational therapists, social workers, NDIS providers)",
    ],
    keyBenefits: [
      "Costs in Addition wordings where legal defence costs do not erode your primary indemnity limit",
      "Full compliance with Australian Professional Standards Legislation and state licensing bodies",
      "Continuous retroactive date protection to safeguard all historical client advice",
      "Access to specialized tier-1 professional risk underwriters with bespoke industry policy wordings",
    ],
    faqs: [
      {
        question: "What does Claims-Made mean in Professional Indemnity?",
        answer: "Unlike Public Liability (which covers incidents occurring during the policy year), Professional Indemnity is written on a Claims-Made basis. This means the policy in force at the time the claim is made against you responds, regardless of when the advice was originally given (provided the work occurred after your agreed Retroactive Date). Maintaining continuous, unbroken cover is essential.",
      },
      {
        question: "What is a Retroactive Date and why is it critical?",
        answer: "Your Retroactive Date defines the furthest date in the past for which your insurer will cover past work. If your business was established on 1 July 2020 and your policy has an Unlimited or 1 July 2020 Retroactive Date, any claim arising from work done in 2021 is covered today. If you allow your policy to lapse, you lose your retroactive protection and expose your past work to uninsured liabilities.",
      },
      {
        question: "What is Run-Off Cover and when do I need it?",
        answer: "When you retire, close your consultancy, or sell your business, clients can still lodge legal claims against you for work completed years earlier (within Australian statutory limitation periods of 6 to 7 years). Run-Off Cover keeps your Professional Indemnity active for past advice while you are no longer actively trading, protecting your retirement savings and personal assets.",
      },
      {
        question: "How much Professional Indemnity cover is required by Australian legislation?",
        answer: "Mandatory limits depend on your profession and state licensing board. For example, CPA/CA ANZ accountants must maintain a minimum of $2 million up to $10 million under Professional Standards Legislation. Architects and engineers face similar state registration mandates. Kooo ensures your policy limits and endorsements meet all statutory and contractual requirements.",
      },
    ],
  },

  // =========================================================================
  // TIER 2 — HIGH-VALUE CONTRACTUAL & GROWTH LINES
  // =========================================================================

  // --- 6. Contract Works Insurance ---
  "contract-works-insurance": {
    slug: "contract-works-insurance",
    categorySlug: "tradesconstructioninsurance",
    categoryName: "Trades & Construction Insurance",
    title: "Contract Works Insurance",
    shortTitle: "Contract Works",
    summary: "Comprehensive protection for building projects, structural works, and materials against storm, fire, theft, and damage during construction across Australia.",
    description: "Building and construction projects operate in an environment of constant exposure. Between breaking ground and final handover, incomplete structures and uninstalled building materials face severe risks from sudden storms, flash floods, site fires, structural collapse, and after-hours material theft. Contract Works Insurance protects the full contract value of your project throughout the construction lifecycle, satisfying lender finance requirements, meeting AS 2124 / AS 4000 head contract conditions, and protecting your working capital.",
    whatIsCovered: [
      "Permanent and temporary works including incomplete building structure, framing, foundations, scaffolding, and access roads against fire, storm, and collapse",
      "On-site building materials, timber, fixtures, cabinetry, and electrical cabling stored on site awaiting installation",
      "Materials in transit to the site and bespoke pre-fabricated structural members held in off-site storage",
      "Removal of debris, demolition costs, and site clearing required before rebuilding can commence",
      "Professional fees for architects, structural engineers, quantity surveyors, and project managers following a loss",
      "Contract value escalation clause (typically 10% to 20%) absorbing post-loss material inflation and rebuilding delays",
      "Existing structures extension covering accidental damage to an existing building during major alterations or renovations",
      "Principal named as insured allowing property owners, developers, and financier banks to be included as joint insureds",
    ],
    whatIsNotCovered: [
      "Direct cost of rectifying defective workmanship, inadequate design, or flawed specifications (consequential damage is covered under LEG2/LEG3 clauses)",
      "Pre-existing structural defects, termite damage, or foundation subsidence present before site possession",
      "Suspension or cessation of construction work exceeding 30 to 60 consecutive days without prior underwriter agreement",
      "Normal wear, atmospheric weathering, rust, or progressive site soil erosion during normal construction periods",
      "Inventory shortages and small tools discovered missing during routine stocktakes without evidence of break-in",
    ],
    whoNeedsIt: [
      "Licensed residential and commercial builders managing new builds, duplexes, multi-unit developments, and fit-outs",
      "Civil and infrastructure contractors managing earthworks, road construction, drainage, and public utility projects",
      "Specialist trade subcontractors managing substantial material procurement (structural steel, roofing, formwork)",
      "Owner-builders undertaking substantial renovations, second-storey additions, or new home construction requiring bank finance",
    ],
    keyBenefits: [
      "Available as an Annual Turnover Policy for active builders or Single Project Policies for discrete jobs",
      "Accepted by all major Australian commercial banks and non-bank lenders for construction loan drawdowns",
      "Broad-form defect wording options (LEG2 and LEG3) to protect against complex consequential damage disputes",
      "Seamless integration with Project Public Liability to provide end-to-end site risk coverage",
    ],
    faqs: [
      {
        question: "What is the difference between an Annual Turnover Policy and a Single Project Policy?",
        answer: "An Annual Turnover Policy covers all building projects commenced by an active builder during a 12-month period based on estimated annual turnover, eliminating the need to arrange individual policies for each site. A Single Project Policy covers one specific job from site possession to handover, ideal for owner-builders, developers, or bespoke high-value commercial builds.",
      },
      {
        question: "Why do Australian banks mandate a Contract Works Certificate of Currency before releasing funds?",
        answer: "Australian banks and commercial mortgage lenders hold a financial interest in the property. They will not release construction loan funds or approve progress payment drawdowns without verifying that a compliant Contract Works policy is in force naming them as an interested party, ensuring their loan collateral is fully protected against total loss.",
      },
      {
        question: "How do defect exclusion clauses (e.g. LEG2 vs LEG3) work in plain English?",
        answer: "London Engineering Group (LEG) clauses govern how defect claims are handled. LEG2 (Consequential Damage) excludes the cost of replacing the defective component itself, but covers resultant damage to the rest of the building. LEG3 (Broad Form) covers resultant damage and provides an allowance for the defect if it caused property damage. Kooo guides builders to secure the broadest possible defect wording.",
      },
    ],
  },

  // --- 7. Plant and Machinery Insurance ---
  "plant-and-machinery-insurance": {
    slug: "plant-and-machinery-insurance",
    categorySlug: "tradesconstructioninsurance",
    categoryName: "Trades & Construction Insurance",
    title: "Plant & Machinery Insurance",
    shortTitle: "Plant & Machinery",
    summary: "Specialist cover for heavy machinery, earthmoving equipment, excavators, cranes, and plant on worksites, during transit, and on dry/wet hire across Australia.",
    description: "Heavy mobile plant and machinery represent significant capital investments for civil contractors, earthmovers, crane operators, and plant hire businesses. Whether operating on uneven construction sites, navigating quarry floors, or being transported on low loaders along regional highways, heavy plant faces unique operational hazards. Plant and Machinery Insurance provides specialized asset protection designed specifically for non-standard mobile machinery.",
    whatIsCovered: [
      "Comprehensive accidental damage, impact, rollover on uneven ground, collision with obstacles, and malicious damage",
      "Theft from active job sites, remote infrastructure projects, storage yards, depots, and work trailers across Australia",
      "Natural perils protection including bushfire, severe storm, hail, lightning strike, and rising floodwaters",
      "Transit damage while equipment is being transported on low loaders, trailers, or floats, including loading and unloading incidents",
      "Hired-In Plant liability protecting you against damage and continuing daily hire charges under commercial hire agreements",
      "Dry hire and wet hire extensions whether machines are operated by your certified drivers or leased out without an operator",
      "Heavy recovery and salvage expenses to extract bogged, overturned, or submerged machinery from remote or difficult terrain",
      "Specified high-value attachments including hydraulic rock breakers, tilt rotators, augers, and 3D GPS guidance systems",
    ],
    whatIsNotCovered: [
      "Machinery operated by personnel without appropriate High Risk Work Licences (HRWL) or verification of competency (VOC)",
      "Crane lifts, hoisting operations, or excavation maneuvers conducted in deliberate excess of manufacturer Safe Working Load (SWL)",
      "Ingestion of foreign metal objects or uncrushable materials entering crushers, mulchers, or chippers (unless endorsed)",
      "Normal track wear, hydraulic hose ageing, ground-engaging teeth wear, rust, and routine maintenance neglect",
      "Deep underground mining and subterranean operations (unless underwritten under specialist mining wordings)",
    ],
    whoNeedsIt: [
      "Civil earthmoving and excavation contractors operating excavators, skid steers, bulldozers, and wheel loaders",
      "Crane and rigging companies operating mobile cranes, tower cranes, franna cranes, and crawler cranes",
      "Demolition and site remediation contractors operating high-reach shears, pulverisers, and screening plants",
      "Plant hire and equipment rental businesses managing dry hire and wet hire fleets across civil and mining sectors",
      "Concreting, road profiling, and asphalt paving crews operating profiling machines and concrete pump trucks",
    ],
    keyBenefits: [
      "Tailored Agreed Value or Market Value policy options aligned with commercial finance and asset depreciation schedules",
      "Broad dry hire and wet hire endorsements ensuring your equipment remains protected regardless of operator arrangement",
      "24/7 access to heavy machinery salvage specialists and accredited transport equipment repairers",
      "Competitive multi-unit fleet rating discounts for contractors operating multiple earthmoving units",
    ],
    faqs: [
      {
        question: "What is the difference between Wet Hire and Dry Hire in machinery insurance?",
        answer: "Wet Hire means you supply both the machine and your own certified operator. Dry Hire means you lease out the machine to a customer who operates it using their own staff. Dry Hire introduces greater underwriting risk and requires a specific policy endorsement to ensure you remain covered if the customer damages or rolls the machine.",
      },
      {
        question: "What does Hired-In Plant cover and why is it essential?",
        answer: "When you hire an excavator or roller from companies like Coates Hire or Kennards, their standard hire contract makes you contractually responsible for any damage and continuing hire fees while the machine is being repaired. Hired-In Plant Insurance covers this liability, preventing massive out-of-pocket costs if a hired machine is damaged on your site.",
      },
      {
        question: "Are my machinery attachments (e.g. rock breakers, augers) covered automatically?",
        answer: "Standard machinery policies cover factory-fitted attachments. Removable, high-value attachments (such as hydraulic rock breakers, tilt rotators, and 3D GPS laser equipment) should be itemized on your policy schedule to ensure they are insured for their full replacement value.",
      },
    ],
  },

  // --- 8. Commercial Property Insurance ---
  "commercial-property-insurance": {
    slug: "commercial-property-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Commercial Property Insurance",
    shortTitle: "Commercial Property",
    summary: "Comprehensive protection for Australian commercial buildings, industrial warehouses, and retail premises against fire, storm, water, and property loss.",
    description: "Commercial real estate represents one of the most substantial capital assets in Australia. Whether you own an industrial warehouse in Western Sydney, a suburban retail strip, a multi-tenanted commercial office building, or a light industrial workshop, physical property is constantly vulnerable to natural perils, fire, impact, and tenancy disputes. Commercial Property Insurance safeguards your freehold asset against catastrophic damage, covers council code upgrades, and guarantees rental income continuity.",
    whatIsCovered: [
      "Commercial building and structural improvements rebuild protection against fire, storm, tempest, lightning, explosion, and water damage",
      "Hardstands, heavy-vehicle concrete paving, security fencing, automated gates, perimeter lighting, and car parks",
      "Specialized demolition costs, structural shoring, removal of debris, and safe disposal of hazardous materials (such as asbestos)",
      "Professional rebuilding and town planning fees for architects, structural engineers, and heritage consultants",
      "Cost of compliance with statutory building authorities—covering required upgrades to meet revised Building Code of Australia standards",
      "Loss of rental income protection guaranteeing rental cash flow if commercial tenants must vacate following an insured event",
      "Landlord's fixtures and plant including central air conditioning chillers, elevators, switchboards, and fire sprinkler systems",
    ],
    whatIsNotCovered: [
      "Wear, tear, rust, roof sheet corrosion, mortar decay, and damage resulting from deferred building maintenance",
      "Flood inundation from rising rivers, creeks, or canals (unless specifically underwritten as an agreed extension)",
      "Properties left unoccupied exceeding 60 to 90 consecutive days without written notification to underwriters",
      "Subterranean soil movement, clay shrinkage, or ground settlement not caused by an earthquake or sudden water burst",
      "Fitouts, machinery, and commercial stock owned by commercial tenants (tenants must insure their own contents)",
    ],
    whoNeedsIt: [
      "Commercial freehold property owners holding industrial units, warehouses, showrooms, and retail strip investments",
      "Self-Managed Super Funds (SMSF) holding commercial real estate assets within superannuation portfolios",
      "Owner-occupiers who own their commercial building and operate their business enterprise from the premises",
      "Commercial property managers managing asset portfolios on behalf of institutional and private landlords",
    ],
    keyBenefits: [
      "Accurate replacement cost benchmarking using Cordell construction indexing to eliminate Co-Insurance / Average penalties",
      "Dedicated loss of rent cover ensuring your mortgage repayments and commercial cash flow remain protected",
      "Compliance with council planning regulations ensuring older buildings can be rebuilt to modern statutory standards",
      "Dedicated claims advocacy managing independent loss adjusters, structural engineers, and builders",
    ],
    faqs: [
      {
        question: "What is an Average or Co-Insurance clause and how does it affect commercial property claims?",
        answer: "Under Section 54 of the Australian Insurance Contracts Act and standard commercial property wordings, if your building is insured for less than 80% or 85% of its true full replacement value at the time of a loss, you are deemed a co-insurer. Any partial claim payout is proportionally reduced. For example, if you are 30% underinsured, your payout is cut by 30%. Kooo helps clients set accurate replacement values using Cordell cost indexing to avoid this penalty.",
      },
      {
        question: "Does Commercial Property Insurance cover modern building code upgrades?",
        answer: "Yes, under a comprehensive Kooo policy wording. If an older warehouse burns down, council will not allow it to be rebuilt to outdated standards. You must install modern disabled access ramps, fire suppression systems, and energy-efficient lighting. Our policies include specific extensions for Cost of Compliance with Statutory Building Authorities.",
      },
      {
        question: "Who is responsible for air conditioning units and shopfront glass—the landlord or tenant?",
        answer: "This depends on the commercial lease agreement. Generally, central air conditioning plant and the structural building are the landlord's responsibility, while internal fitout, partitioning, and internal glass may fall to the tenant. Kooo reviews your commercial lease agreements to ensure there are no insurance gaps between landlord and tenant policies.",
      },
    ],
  },

  // --- 9. Cyber Insurance ---
  "cyber-insurance": {
    slug: "cyber-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Cyber Liability Insurance",
    shortTitle: "Cyber Insurance",
    summary: "24/7 Australian cyber incident response, ransomware recovery, business interruption, and Privacy Act liability cover for businesses of all sizes.",
    description: "Digital connectivity is fundamental to Australian commerce, but it exposes organizations to sophisticated cyber threats. Ransomware attacks, business email compromise (BEC), wire fraud, cloud account takeovers, and unauthorized data breaches now occur against Australian SMEs every single day. Cyber Insurance provides an immediate emergency response unit—connecting your business within minutes to forensic investigators, IT crisis specialists, ransomware negotiators, and Privacy Act legal counsel.",
    whatIsCovered: [
      "24/7 Australian incident response dispatching accredited IT forensics teams, specialist legal counsel, and crisis PR advisors",
      "Business interruption covering lost net operating profit and continuing overheads (payroll, SaaS fees) during system downtime",
      "Ransomware and extortion response including specialized extortion negotiators and forensic incident remediation costs",
      "Privacy Act liability and statutory investigation legal costs before the Office of the Australian Information Commissioner (OAIC)",
      "Customer breach notification expenses, specialized call center setup, and credit monitoring services following data exfiltration",
      "Funds transfer fraud and invoice redirection (BEC) compensating for stolen funds resulting from compromised email accounts",
      "Data restoration and system rebuilding expenses incurred to clean infected networks and reconstruct databases from backups",
    ],
    whatIsNotCovered: [
      "Breaches arising from software vulnerabilities where vendor critical security patches were ignored for prolonged periods",
      "Cost of purchasing entirely new server hardware or workstations that were not physically damaged by the cyber attack",
      "Speculative trading losses from long-term reputational harm or diminished market valuation occurring years later",
      "Deliberate criminal conduct, intentional data leaks, or rogue acts committed by company directors",
      "Nationwide telecommunications internet backbone failure or power grid blackouts outside the control of the business",
    ],
    whoNeedsIt: [
      "Healthcare, NDIS, and allied health providers holding sensitive patient medical records and Medicare data",
      "Professional services firms (accountants, law firms, financial planners) managing high-value transactions and confidential files",
      "E-commerce businesses and online retailers storing customer credit card details, addresses, and cloud CRM databases",
      "Wholesalers, distributors, and construction firms frequently targeted by invoice manipulation and fraudulent bank redirection scams",
    ],
    keyBenefits: [
      "Immediate 24/7 emergency hotline connecting you to certified Australian cybersecurity forensic response units",
      "Compliance with mandatory Notifiable Data Breaches (NDB) reporting under the Australian Privacy Act",
      "Covers both your own direct recovery and restoration costs as well as third-party legal liability claims",
      "Assistance with reviewing your cybersecurity posture against the ACSC Essential Eight mitigation strategies",
    ],
    faqs: [
      {
        question: "We use Microsoft 365 and cloud backup—aren't we already protected?",
        answer: "No. Cloud service providers operate under a Shared Responsibility Model. They maintain server hardware uptime and data center security, but they do not take responsibility for how your accounts are accessed. If a criminal compromises an employee password, redirects customer invoices, or encrypts your cloud OneDrive, Microsoft will not compensate your lost profits or pay your legal notification costs.",
      },
      {
        question: "What are the mandatory reporting requirements under the Australian Privacy Act?",
        answer: "Under the Australian Notifiable Data Breaches (NDB) scheme, any organization with an annual turnover exceeding $3M (or any healthcare/NDIS provider of any size) that suffers an eligible data breach likely to result in serious harm must legally notify both the affected individuals and the OAIC. Failure to comply can result in severe statutory penalties. Cyber Insurance covers the legal advice, forensic assessments, and notification costs required to comply.",
      },
      {
        question: "What basic cybersecurity controls do insurers require before offering cyber cover?",
        answer: "Australian underwriters now look for essential cyber hygiene, commonly aligned with the Australian Cyber Security Centre's (ACSC) Essential Eight. Key requirements include Multi-Factor Authentication (MFA) on all remote access and email logins, regular immutable or offline backups, active endpoint antivirus detection (EDR), and routine staff security awareness training. Kooo helps clients review these controls to secure the best policy terms.",
      },
    ],
  },

  // --- 10. Management Liability Insurance ---
  "management-liability-insurance": {
    slug: "management-liability-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Management Liability Insurance",
    shortTitle: "Management Liability",
    summary: "Safeguard company directors, officers, and your corporate entity against WHS investigations, unfair dismissal, statutory fines, and corporate crime across Australia.",
    description: "Operating a proprietary limited (Pty Ltd) company in Australia delivers commercial growth, but it places significant personal legal exposure directly on company directors and senior managers. Under Australian common law, the Corporations Act 2001, Work Health and Safety (WHS) legislation, and the Fair Work Act, company directors can be held personally liable for the decisions, oversights, and governance of their business. Management Liability Insurance wraps six critical protections into one policy, defending leadership personal assets and the company.",
    whatIsCovered: [
      "Directors & Officers (D&O) Liability defending individual directors against personal lawsuits alleging breach of duty or neglect",
      "Employment Practices Liability (EPL) covering the company and management against unfair dismissal, harassment, and discrimination claims",
      "Statutory Liability covering legal defence representation and insurable official fines arising from SafeWork, EPA, ASIC, and ACCC inquiries",
      "Corporate Entity Cover defending the company itself (the Pty Ltd entity) if named in commercial or regulatory civil actions",
      "Crime and Employee Dishonesty covering direct financial loss resulting from theft of money, stock, or securities by staff",
      "Tax Audit Expenses covering professional accounting and legal fees incurred during an official ATO corporate tax audit",
      "Work Health & Safety legal defence costs providing immediate senior counsel representation following a workplace incident",
    ],
    whatIsNotCovered: [
      "Criminal fines and penalties that cannot be insured by law (however, all legal defence costs in defending such actions are covered)",
      "Deliberate fraud, intentional dishonesty, or self-dealing transactions committed with criminal intent",
      "Purely commercial contract disputes regarding unpaid supplier invoices or contested quality of delivered commercial goods",
      "Prior known circumstances, outstanding employee grievances, or investigations known before policy commencement",
      "Professional negligence or errors in advice provided to clients for a fee (covered under Professional Indemnity Insurance)",
    ],
    whoNeedsIt: [
      "Directors of private proprietary limited companies (Pty Ltd) protecting personal wealth and family assets",
      "Companies employing staff exposed to Australian Fair Work Commission claims and workplace dispute processes",
      "High-risk operational industries (construction, manufacturing, transport, civil contracting) where WHS oversight is rigorous",
      "Companies with non-executive directors or outside investors requiring governance protection",
    ],
    keyBenefits: [
      "Safeguards the personal family home, investments, and savings of company directors against personal liability",
      "Covers specialist legal defence expenses from day one of an official investigation or SafeWork notice",
      "Essential protection against rising Fair Work employment claims, wage underpayment disputes, and unfair dismissals",
      "Access to experienced workplace relations legal panels providing pre-claim advisory guidance",
    ],
    faqs: [
      {
        question: "What is the difference between Management Liability and Professional Indemnity?",
        answer: "Professional Indemnity protects against financial loss suffered by a client due to an error in the professional advice or specialized service you provided to them (e.g. engineering design or accounting advice). Management Liability protects against claims arising from how you manage and govern the business itself—including employment disputes, safety investigations, board governance, and tax audits.",
      },
      {
        question: "Are WHS and SafeWork fines insurable in Australia?",
        answer: "In several Australian jurisdictions (including NSW, Victoria, Queensland, and Western Australia), legislation prohibits insurers from paying statutory WHS penal fines. However, Management Liability provides vital protection by covering the substantial legal defence expenses (often $100,000 to $500,000+) needed to hire senior counsel, prepare expert evidence, and represent directors in court. Where statutory fines remain insurable by law, the policy pays the penalty.",
      },
      {
        question: "Why do small family-owned businesses need Management Liability?",
        answer: "Many small business owners assume they do not need D&O cover because they do not have outside shareholders. However, the majority of claims against SME Management Liability policies come from employment disputes (such as unfair dismissal and harassment through Fair Work) and statutory regulators (such as SafeWork inspections or environmental notices). These claims target the company regardless of shareholder structure.",
      },
    ],
  },

  // --- 11. Tools and Equipment Insurance ---
  "tools-and-equipment-insurance": {
    slug: "tools-and-equipment-insurance",
    categorySlug: "tradesconstructioninsurance",
    categoryName: "Trades & Construction Insurance",
    title: "Tools & Equipment Insurance",
    shortTitle: "Tools & Equipment",
    summary: "Australia-wide 24/7 theft, damage, and transit protection for tradies' power tools, diagnostic equipment, and mobile plant.",
    description: "For Australian tradespeople, mobile technicians, and field contractors, your tools represent your working capital and daily livelihood. If your power tools, testing meters, or specialist machinery are stolen from your ute overnight or damaged in a highway collision, your ability to work stops immediately. Tools and Portable Equipment Insurance provides 24/7, Australia-wide protection against forced entry theft, vehicle collision damage, and fire.",
    whatIsCovered: [
      "Theft following violent, forcible entry into locked commercial vehicles, toolboxes, or secure ute canopies",
      "Theft from locked job sites, secure on-site shipping containers, or locked residential workshops overnight",
      "Accidental damage caused when the carrying vehicle or trailer is involved in a collision, rollover, or fire on Australian roads",
      "Australia-wide 24/7 protection whether your gear is on a job site, in transit across town, or parked overnight",
      "Blanket toolkit cover for collections of miscellaneous trade hand and power tools up to an agreed total sum",
      "Specified high-value equipment cover for diagnostic scan tools, fusion welders, pipe cameras, and laser levels",
      "Protection for temporary tools or specialist testing machinery hired from trade hire companies",
    ],
    whatIsNotCovered: [
      "Theft from open ute trays, unlocked toolboxes, or unattended worksites without evidence of violent and forcible entry",
      "Internal electrical breakdown, battery depletion, or gradual wear from heavy everyday trade usage",
      "Unexplained inventory loss or tools missing without evidence of a break-in or forced entry event",
      "Cosmetic scratches, dents, or paint chipping that does not impair the operational function of the tool",
      "Water damage resulting from tools left exposed to rain without reasonable protective measures",
    ],
    whoNeedsIt: [
      "Building and construction tradies (electricians, plumbers, carpenters, roofers, bricklayers, plasterers)",
      "HVAC and electrical technicians (air conditioning installers, refrigeration mechanics, solar installers)",
      "Mobile mechanics and automotive technicians (field service fitters, heavy diesel mechanics, auto electricians)",
      "Landscapers and arborists (chainsaws, brushcutters, post-hole diggers, commercial lawn care machinery)",
    ],
    keyBenefits: [
      "Fast claim processing to replace stolen tools and minimise lost working days on site",
      "Cover for tools in transit and stored overnight in secure home garages or workshops",
      "Discounted bundled trade rates when combined with Trade Public Liability and Commercial Ute insurance",
      "New-for-old replacement options on power tools under specified age limits",
    ],
    faqs: [
      {
        question: "Do my tools have to be locked inside a toolbox or ute canopy to be covered for theft?",
        answer: "Yes. Australian insurance wordings universally require evidence of violent and forcible entry to settle a vehicle theft claim. This means jemmied canopy handles, broken padlocks, or smashed vehicle windows. Tools left unsecured in an open ute tub without a locked lid or canopy are not covered.",
      },
      {
        question: "How should I record my tools to guarantee a smooth claim settlement?",
        answer: "We strongly recommend maintaining a simple digital inventory. Take photos of your tools, note make and serial numbers, and keep digital copies of purchase receipts (such as Bunnings, Total Tools, or Sydney Tools tax invoices). In the event of a total ute break-in, this evidence allows Kooo to process your claim and secure replacement payments immediately.",
      },
      {
        question: "Is Tools & Equipment Insurance cheaper when bundled with Public Liability?",
        answer: "Yes. Kooo can package your Tools & Equipment cover directly alongside your Trade Public Liability and Commercial Ute insurance, creating a single annual renewal and securing discounted bundled trade rates.",
      },
    ],
  },

  // --- 12. Goods in Transit Insurance ---
  "goods-in-transit-insurance": {
    slug: "goods-in-transit-insurance",
    categorySlug: "truckfleetinsurance",
    categoryName: "Truck & Fleet Insurance",
    title: "Goods in Transit Insurance",
    shortTitle: "Goods in Transit",
    summary: "Comprehensive protection for commercial freight, cargo, and raw materials against collision, overturning, theft, and loss during transit across Australia.",
    description: "Transporting valuable cargo across the vast distances of the Australian continent involves significant physical and financial exposures. Whether you are hauling general dry freight, high-value electronics, retail stock, building materials, or temperature-sensitive produce, road collisions, roll-overs, severe weather, and transit theft can destroy valuable consignments in an instant. Goods in Transit Insurance provides dedicated first-party protection for cargo owners, manufacturers, distributors, and transport operators.",
    whatIsCovered: [
      "Accidental damage, collision, jackknifing, overturning, or derailment of the conveying vehicle across Australia",
      "Fire, explosion, lightning strike, and floodwater inundation destroying cargo during transport",
      "Theft of entire consignments, armed hijacking, or theft following violent and forced entry into locked vehicle trailers or tautliners",
      "Physical damage sustained while cargo is being loaded onto or unloaded from the transporting vehicle by forklift or crane",
      "Refrigeration machinery breakdown covering spoilage and deterioration of temperature-controlled freight (meat, seafood, produce)",
      "Debris removal and road clean-up costs following spilled cargo to satisfy EPA and state transport authority directives",
      "Intermodal domestic transit whether goods are conveyed by road transport, freight rail, coastal shipping, or domestic air",
    ],
    whatIsNotCovered: [
      "Inherent vice, natural perishability, or improper packaging and insufficient cushioning of goods",
      "Normal ullage, minor evaporation, or routine weight loss in bulk liquid or grain shipments",
      "Delay and consequential commercial loss resulting from late delivery or missed delivery windows",
      "Damage occurring while the vehicle is operated by an unlicensed driver or driver under the influence of drugs or alcohol",
      "Theft of high-value freight left unattended overnight in unapproved, unsecured public areas without adequate locking mechanisms",
    ],
    whoNeedsIt: [
      "Manufacturers and wholesalers moving finished products, industrial machinery, and bulk supplies to distribution hubs",
      "Importers and exporters protecting goods arriving at Australian container ports during road or rail transit to inland warehouses",
      "Transport operators and hauliers seeking first-party cargo cover to provide complete peace of mind to commercial freight clients",
      "Retailers and food distributors managing regional store replenishment fleets delivering groceries and fresh produce",
    ],
    keyBenefits: [
      "First-party cargo protection ensuring you are paid full invoice value without disputing freight forwarder liability exclusions",
      "Automatic Australia-wide cover on all state highways, regional arterial roads, and intermodal freight corridors",
      "Flexible policy options including annual turnover policies for high-volume shippers or single-transit policies for discrete loads",
      "Specialized temperature-controlled endorsements for refrigerated logistics and cold-chain operators",
    ],
    faqs: [
      {
        question: "Does the freight carrier's insurance automatically cover my goods if they are damaged?",
        answer: "No. This is one of the most common commercial misconceptions in Australia. Most Australian transport companies operate under standard terms and conditions that explicitly exclude liability for damage to customer freight, or limit liability to nominal statutory amounts. To ensure your stock is fully protected for its true invoice value, you must maintain your own dedicated Goods in Transit policy.",
      },
      {
        question: "How is the value of damaged goods calculated in a transit claim?",
        answer: "Under standard Australian transit wordings, cargo is insured for Invoice Value (the cost of the goods plus freight and packing costs) or Cost Price plus an agreed percentage (typically 10% to 20%) to absorb anticipated profit and administrative overheads.",
      },
      {
        question: "What is the difference between Goods in Transit Insurance and Carriers Liability Insurance?",
        answer: "Goods in Transit Insurance is a first-party policy that protects the actual value of the cargo directly for the cargo owner or haulier. Carriers Liability Insurance is a liability policy that protects the transport company if a customer sues them for breach of contract, negligence, or loss under common carrier law. Kooo advises transport businesses on the appropriate combination of both covers.",
      },
    ],
  },

  // =========================================================================
  // TIER 3 — SPECIALIZED COMMERCIAL & SECTOR LINES
  // =========================================================================

  // --- 13. Carriers Liability Insurance ---
  "carriers-liability-insurance": {
    slug: "carriers-liability-insurance",
    categorySlug: "truckfleetinsurance",
    categoryName: "Truck & Fleet Insurance",
    title: "Carriers Liability Insurance",
    shortTitle: "Carriers Liability",
    summary: "Specialist liability protection for road transport operators, linehaul freight carriers, and freight forwarders against customer cargo damage and contractual disputes.",
    description: "For commercial transport companies, linehaul operators, and freight forwarders, carrying customer cargo across Australia involves severe legal exposure. While hauliers incorporate liability limits into their standard consignment notes, disputes over damaged freight, road roll-overs, load contamination, and misdelivery frequently escalate into costly legal claims under Australian common carrier law. Carriers Liability Insurance protects transport businesses if a cargo owner or commercial customer sues for loss, damage, or destruction of goods in your custody.",
    whatIsCovered: [
      "Carrier legal liability payouts if found legally liable under common law or consignment contract terms for cargo loss or damage",
      "Specialist transport litigation solicitors and senior counsel representation costs to defend contested cargo claims",
      "Cover structured to defend and support your standard commercial Terms of Carriage and consignment note conditions",
      "Protection for claims arising from cargo damage occurring while freight was in the hands of authorized sub-contracted hauliers",
      "Consequential loss and delay extensions covering financial losses claimed by customers resulting from delayed consignments",
      "Misdelivery and non-delivery protection covering accidental delivery to the wrong recipient or unrecovered missing freight",
      "Cargo salvage and disposal costs incurred to safely remove, dispose of, or clean up destroyed customer cargo from roadways",
    ],
    whatIsNotCovered: [
      "Freight damaged solely because the sender packed it improperly or goods deteriorated naturally through inherent vice",
      "Deliberate theft, conversion, or criminal acts committed by company leadership or directors",
      "Operating without standard, compliant written Terms and Conditions of Carriage / consignment notes",
      "Unapproved high-risk freight (such as bullion, cash, live animals, or explosives) unless declared and underwritten",
      "Gross statutory non-compliance or intentional breaches of the National Heavy Vehicle Regulator (NHVR) laws",
    ],
    whoNeedsIt: [
      "Interstate linehaul and regional freight carriers hauling general, palletised, or refrigerated freight across state borders",
      "Freight forwarders and logistics intermediaries contracting freight movements and managing subcontractor transport networks",
      "Container transport and port logistics operators moving sea containers between wharf terminals, railheads, and distribution centers",
      "Specialised transport fleets including heavy machinery movers, bulk grain carriers, and automotive vehicle transporters",
    ],
    keyBenefits: [
      "Protects the transport business's balance sheet against contested multi-million dollar freight destruction lawsuits",
      "Specialist transport litigation legal panels experienced in defending Australian consignment note conditions",
      "Seamless integration with Heavy Vehicle Fleet and Marine Cargo policies",
      "Covers subcontractor freight movements where the head carrier remains contractually liable to the principal client",
    ],
    faqs: [
      {
        question: "What is the difference between Goods in Transit and Carriers Liability?",
        answer: "Goods in Transit Insurance is a first-party policy protecting the cargo owner for the actual replacement value of their goods. Carriers Liability Insurance protects the transport carrier against legal claims and lawsuits brought by customers alleging the carrier was negligent or contractually responsible for the loss.",
      },
      {
        question: "How do standard Consignment Note Conditions affect Carriers Liability?",
        answer: "Australian transport operators use standard consignment notes stating that carriage is undertaken at Owner's Risk. However, the Australian Consumer Law (ACL) and common law negligence principles mean carriers can still be held liable for gross negligence or breach of duty. Carriers Liability provides legal defence to uphold your conditions and covers settlements if you are found liable.",
      },
      {
        question: "Does this policy cover my subcontractors?",
        answer: "Yes, under a properly structured Kooo policy. If you sub-contract a leg of a freight journey to an external owner-driver and the cargo is damaged, the cargo owner will still sue you as the head carrier. Carriers Liability protects your head contract position while underwriters seek recovery from the subcontractor.",
      },
    ],
  },

  // --- 14. Directors and Officers Insurance ---
  "directors-and-officers-insurance": {
    slug: "directors-and-officers-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Directors & Officers (D&O) Insurance",
    shortTitle: "D&O Insurance",
    summary: "Shield company directors, board members, and senior executives against personal liability, shareholder actions, and regulatory investigations across Australia.",
    description: "Serving as a director, board member, or senior executive of an Australian corporate entity brings substantial governance responsibility—and direct exposure of personal wealth. Under the Corporations Act 2001 and Australian common law, company directors owe strict fiduciary duties to shareholders, creditors, and regulatory authorities. Standalone Directors and Officers (D&O) Insurance provides dedicated, high-limit personal protection, covering senior counsel representation, forensic defence, and legal settlements.",
    whatIsCovered: [
      "Side A (Individual Director Protection) covering individual directors personally when the company cannot indemnify them",
      "Side B (Company Reimbursement) reimbursing the company when it indemnifies its directors and officers for covered defence costs",
      "Side C (Securities Entity Cover) protecting the corporate entity itself against claims arising from shareholder or securities actions",
      "ASIC, APRA, ACCC, and ATO statutory regulatory inquiry representation costs for subpoenaed directors",
      "Shareholder derivative lawsuits defending board decisions against challenges brought by minority or institutional shareholders",
      "Insolvency and creditor actions defending allegations of insolvent trading or breach of care brought by liquidators",
      "Executive employment practices defence protecting named individual directors against workplace allegations",
      "Emergency bail bond and extradition defence expenses for cross-border and multinational Australian directors",
    ],
    whatIsNotCovered: [
      "Intentional dishonesty, insider trading, or personal illegal profit confirmed by final court judgment",
      "Inquiries, complaints, or claim circumstances known prior to policy commencement",
      "Bodily injury and physical property damage (covered under Public Liability or Environmental Impairment)",
      "Disputes regarding the payment or return of executive salaries, bonuses, or golden parachute severance packages",
      "Professional negligence or errors in technical advice provided to paying clients (covered under Professional Indemnity)",
    ],
    whoNeedsIt: [
      "Boards of unlisted public companies, mid-market enterprises, and growing commercial proprietary firms",
      "Venture capital and private equity-backed companies with outside institutional investors and independent board members",
      "Not-for-profit organizations, charities, industry associations, and educational institutions protecting volunteer directors",
      "Family offices, private investment trusts, and property syndicates safeguarding trustee directors",
    ],
    keyBenefits: [
      "Dedicated Side A limits that cannot be eroded by routine company operational claims or employment disputes",
      "Protects private homes, personal investments, and family wealth from liquidator clawback actions",
      "Attracts experienced non-executive directors and independent advisory board members to your company",
      "Worldwide territorial coverage accommodating Australian companies operating international subsidiaries",
    ],
    faqs: [
      {
        question: "What is the difference between Side A, Side B, and Side C in D&O?",
        answer: "Side A covers the individual director personally when the company cannot indemnify them (such as in liquidation or where prohibited by law). Side B reimburses the company after it pays to indemnify its directors. Side C protects the corporate entity itself against shareholder actions.",
      },
      {
        question: "How does standalone D&O differ from SME Management Liability?",
        answer: "Management Liability is a modular package built for small-to-medium private Pty Ltd companies, bundling D&O, employment practices, statutory fines, and tax audit into one aggregate policy. Standalone D&O is a specialized, high-limit governance policy designed for larger unlisted companies, public entities, or boards requiring dedicated Side A limits that cannot be eroded by routine employment or company claims.",
      },
      {
        question: "Are directors protected if the company enters liquidation?",
        answer: "Yes. During corporate insolvency, liquidators frequently pursue directors personally for alleged insolvent trading or breach of care. Because the insolvent company cannot indemnify directors, Side A D&O cover activates immediately to fund senior counsel defence and protect directors' personal family assets.",
      },
    ],
  },

  // --- 15. Commercial Strata Insurance ---
  "commercial-strata-insurance": {
    slug: "commercial-strata-insurance",
    categorySlug: "industryinsurance",
    categoryName: "Industry Insurance",
    title: "Commercial Strata Insurance",
    shortTitle: "Commercial Strata",
    summary: "Comprehensive insurance for commercial strata schemes, industrial unit estates, and mixed-use complexes across Australia covering common property, liability, and office bearers.",
    description: "Managing commercial strata schemes—such as industrial business parks, retail shopping arcades, medical specialist suites, or mixed-use developments—requires balancing the collective interests of multiple property owners, tenants, and body corporate committees. Under state strata legislation, Owners Corporations and Body Corporates are legally mandated to maintain comprehensive building and public liability insurance.",
    whatIsCovered: [
      "Commercial building and common property full replacement cover for primary buildings, common walls, roofs, foundations, and lobbies",
      "Shared infrastructure including heavy-vehicle concrete driveways, security boom gates, boundary walls, and shared car parks",
      "Public liability for common areas ($20 Million up to $50 Million) covering third-party bodily injury on common property",
      "Office Bearers' Legal Liability defending voluntary strata committee members against allegations of administrative negligence",
      "Loss of rent and temporary commercial relocation costs for owner-occupiers if units become uninhabitable after an event",
      "Central plant and machinery breakdown covering common lifts, water pressure booster pumps, and automated gate systems",
      "Fidelity guarantee cover protecting against fraudulent embezzlement or theft of body corporate sinking funds",
      "Government audit costs and legal defence expenses incurred in responding to council fire safety orders or compliance audits",
    ],
    whatIsNotCovered: [
      "Trade inventory, computers, and custom fitouts owned by individual lot owners or commercial tenants (insurable separately)",
      "Wear, tear, concrete cancer, mortar crumbling, or structural concrete spalling resulting from deferred maintenance",
      "Unauthorized structural additions or alterations made to private lots without body corporate approval",
      "Flood inundation from rising watercourses or rivers (unless specifically underwritten as an agreed extension)",
    ],
    whoNeedsIt: [
      "Owners Corporations and Body Corporates managing industrial unit complexes, commercial offices, and retail arcades",
      "Licensed strata management professionals seeking compliant, audited insurance portfolios for their managed schemes",
      "Commercial unit investors and owner-occupiers protecting their equity in shared industrial, commercial, and mixed-use complexes",
    ],
    keyBenefits: [
      "Full compliance with state Strata Schemes Management Acts across all Australian jurisdictions",
      "Comprehensive Office Bearers protection shielding voluntary committee members from personal liability",
      "Automatic indexation and replacement cost evaluation support to prevent underinsurance penalties",
      "Dedicated strata claims management coordinating emergency repairers, make-safe teams, and assessors",
    ],
    faqs: [
      {
        question: "Is Commercial Strata Insurance mandatory by Australian law?",
        answer: "Yes. Every Australian state and territory legally mandates that the Owners Corporation or Body Corporate must insure the building for its full replacement value and hold a minimum of $20 million in public liability cover for common property under relevant state Strata Schemes Management Acts.",
      },
      {
        question: "What is Office Bearers' Liability and why do strata committee members need it?",
        answer: "Owners who volunteer on strata executive committees make decisions regarding building maintenance, contractor appointments, and by-law enforcement. If an owner or tenant sues the committee alleging financial mismanagement or negligence, Office Bearers' Liability pays legal defence costs and protects the committee members from personal liability.",
      },
      {
        question: "How does Strata Insurance interact with individual lot owner policies?",
        answer: "Commercial Strata Insurance covers the building structure and all common property. Individual lot owners or commercial tenants must hold their own policies for internal lot fitouts, commercial contents, stock, and business interruption. Kooo assists strata committees to ensure clear demarcation boundaries.",
      },
    ],
  },

  // --- 16. Unoccupied Property Insurance ---
  "unoccupied-property-insurance": {
    slug: "unoccupied-property-insurance",
    categorySlug: "specialtyinsurance",
    categoryName: "Specialty Insurance",
    title: "Unoccupied Property Insurance",
    shortTitle: "Unoccupied Property",
    summary: "Specialist insurance for vacant commercial buildings, empty warehouses, and unoccupied land awaiting development or tenancy across Australia.",
    description: "Vacant commercial buildings, empty industrial warehouses, deceased estate properties, and unoccupied land face elevated risk profiles. Without regular human occupancy, minor water leaks become catastrophic structural collapses, empty buildings attract vandalism and arson, and vacant land exposes owners to trespasser injury liabilities. Unoccupied Property Insurance provides dedicated wholesale underwriting that protects your property and public liability throughout periods of vacancy.",
    whatIsCovered: [
      "Catastrophic perils cover protecting vacant commercial structures against fire, bushfire, lightning, explosion, and storm",
      "Public liability for vacant property and land (up to $20 Million) covering third-party bodily injury, including trespasser claims",
      "Malicious damage and vandalism protection covering graffiti, deliberate glass breakage, and structural vandalism",
      "Escape of water cover for burst internal water mains, fire sprinkler lines, or pipe failures while between tenancies",
      "Unoccupied land and development sites protection covering vacant commercial parcels, boundary fences, and retaining walls",
      "Flexible short-term policy periods (3, 6, or 12 months) tailored to development approval timelines, marketing, or auctions",
    ],
    whatIsNotCovered: [
      "Theft of fixtures, cabling, or copper piping where premises were left unlocked or unsecured without forced entry",
      "Failure to comply with agreed underwriter security warranties (shutting off mains water, securing doors, fortnightly checks)",
      "Wear, dry rot, termites, rising damp, or structural dilapidation due to prolonged lack of property maintenance",
      "Losses directly associated with unlawful squatters or illegal occupancy where the owner took no eviction steps",
    ],
    whoNeedsIt: [
      "Commercial property investors and landlords holding vacant warehouses, retail shops, or offices during leasing transitions",
      "Property developers and land speculators holding land or buildings awaiting council Development Application (DA) approvals",
      "Executors of deceased estates managing vacant commercial freeholds or residential property throughout probate",
      "Financial institutions, insolvency practitioners, and receivers managing repossessed commercial assets",
    ],
    keyBenefits: [
      "Overrides standard 60-day unoccupancy exclusion clauses that automatically void regular commercial property policies",
      "Flexible short-term policy duration options aligning directly with sale campaigns or construction commencement",
      "Essential public liability protection protecting owners against trespasser lawsuits on vacant land or derelict buildings",
      "Access to wholesale underwriting markets specializing in hard-to-place and distressed commercial real estate assets",
    ],
    faqs: [
      {
        question: "Why do standard insurance policies void cover after 60 days of vacancy?",
        answer: "Standard insurers rate policies on the assumption of active daily occupancy. When a building is empty, fires burn longer before detection, water leaks cause total rot, and properties attract trespassers. Under Section 54 of the Insurance Contracts Act, insurers can deny claims if unnotified vacancy increases risk. Kooo places your property with specialized underwriters who explicitly endorse unoccupied risk.",
      },
      {
        question: "What basic security precautions do underwriters require for vacant buildings?",
        answer: "Underwriters typically require reasonable risk mitigation: locking all external doors and security gates, boarding or securing ground-floor accessible windows, shutting off mains water at the meter (unless fire sprinklers operate), removing accumulated debris, and conducting documented fortnightly site inspections.",
      },
      {
        question: "Can I insure vacant land where there is no physical building?",
        answer: "Yes. Vacant land generates significant Public Liability exposure. If a trespasser, child, or council worker is injured on your vacant block (e.g. falling into an excavation or tripping on uneven ground), you can be held legally liable. Kooo arranges dedicated Vacant Land Public Liability.",
      },
    ],
  },

  // --- 17. Farm and Rural Insurance ---
  "farm-and-rural-insurance": {
    slug: "farm-and-rural-insurance",
    categorySlug: "industryinsurance",
    categoryName: "Industry Insurance",
    title: "Farm & Rural Insurance",
    shortTitle: "Farm & Rural",
    summary: "Tailored agricultural insurance for Australian farms, hobby farms, livestock producers, machinery, and rural fencing against bushfire, storm, and liability.",
    description: "Australian farming operations are built on resilience, but they face extraordinary natural perils and volatile operating environments. From broadacre cropping and livestock production to boutique hobby farms, orchards, and vineyards, agricultural enterprises combine home, commercial business, industrial machinery, and land stewardship in one continuous operation. Farm and Rural Insurance bundles your homestead, outbuildings, livestock, machinery, rural fencing, and chemical liabilities into one integrated rural package.",
    whatIsCovered: [
      "Farm homestead, outbuildings, worker cottages, and domestic contents against bushfire, storm, and accidental damage",
      "Farm sheds, machinery workshops, shearing sheds, grain silos, hay barns, and cold storage facilities",
      "Rural boundary and internal fencing replacement covering post-and-wire, electric, or netting fencing destroyed by bushfire or flood",
      "Farm machinery and working implements (tractors, headers, balers, seeders, sprayers) against collision, overturn, fire, and storm",
      "Livestock protection covering sheep, cattle, or horses against bushfire, lightning, electrocution, flood, or dog attacks",
      "Harvested grain, baled hay, and silage stored in sheds or silos against fire, storm, and spontaneous combustion",
      "Farm Public and Products Liability ($10 Million or $20 Million) including livestock straying onto roads and spray drift liability",
      "Farm business interruption replacing lost agricultural margins and continuing farm overheads following an insured disaster",
    ],
    whatIsNotCovered: [
      "Loss of crops, pasture, or livestock condition resulting from natural seasonal drought (requires specialized parametric covers)",
      "Routine animal disease, government biosecurity cull orders, or natural livestock mortality",
      "Spray drift claims resulting from deliberate off-label chemical application or spraying in prohibited high winds",
      "Normal agricultural wear and tear, fatigue of tillage points, or tyre punctures without impact collision",
    ],
    whoNeedsIt: [
      "Broadacre grain and cropping producers operating high-value tractors, headers, and bulk storage infrastructure",
      "Livestock grazing operations (beef cattle stations, prime lamb producers, wool growers, dairy farms)",
      "Hobby farmers and rural lifestyle owners (5 to 100 acres) with residential dwellings, domestic stock, and light machinery",
      "Horticulture, fruit orchards, commercial vineyards, and viticulture production facilities",
    ],
    keyBenefits: [
      "Dedicated rural fencing limits to rebuild kilometres of containment fencing immediately after a bushfire",
      "Essential chemical spray drift liability protecting against catastrophic crop damage claims from neighboring farms",
      "Bundles residential homestead and commercial farming operations under a single rural policy schedule",
      "Access to specialist Australian agricultural underwriters with local regional claims adjusting experience",
    ],
    faqs: [
      {
        question: "How does rural fencing cover work after a major bushfire?",
        answer: "Rural fencing is one of the largest post-bushfire expenses in Australia, with replacement costs exceeding $8,000 to $15,000+ per kilometre. Kooo structures dedicated fencing limits (e.g. $50,000 to $250,000+) under your rural policy schedule, ensuring you can rebuild boundary and containment fences immediately without eroding other property sums.",
      },
      {
        question: "What is Agricultural Spray Drift Liability and why is it vital?",
        answer: "When spraying herbicides or pesticides, chemical mist can drift onto neighboring paddocks, destroying high-value organic crops, sensitive vineyards, or water supplies. Neighboring farmers can sue for millions in crop destruction. Kooo ensures your rural liability includes a verified Chemical Spray Drift Extension meeting Australian regulatory standards.",
      },
      {
        question: "What is the difference between a Hobby Farm policy and a Commercial Farm policy?",
        answer: "Hobby Farm Insurance is tailored for lifestyle properties where agricultural activity is non-commercial or generates modest supplementary income. Commercial Farm Insurance is designed for full-scale commercial producers, incorporating complex business interruption, milk spoilage, grain storage, and extensive fleet and machinery schedules.",
      },
    ],
  },

  // --- 18. Motor Trades Insurance ---
  "motor-trades-insurance": {
    slug: "motor-trades-insurance",
    categorySlug: "industryinsurance",
    categoryName: "Industry Insurance",
    title: "Motor Trades Insurance",
    shortTitle: "Motor Trades",
    summary: "Specialist cover for mechanical workshops, panel beaters, tyre shops, and car yards covering customer vehicles in care, hoist liability, and test drives.",
    description: "Automotive service and repair businesses operate under unique legal and physical exposures. Every day, mechanical workshops, crash repairers, auto electricians, and tyre fitters take custody of high-value customer vehicles, operate heavy hydraulic hoists, handle flammable solvents, and conduct test drives on public roads. Motor Trades Insurance provides specialised cover protecting customer vehicles in your care, custody, and control, safeguarding workshop equipment, and defending your trade reputation.",
    whatIsCovered: [
      "Vehicles in Care, Custody & Control (CCC) protecting customer vehicles against fire, theft, hail, and accidental damage while in your yard or workshop",
      "Customer test drive collision cover covering third-party and own-damage while staff road-test customer vehicles on public roads",
      "Workshop property, hydraulic 2-post and 4-post hoists, wheel aligners, spray booths, and diagnostic scan tools",
      "Faulty workmanship and defective parts resultant damage protecting against catastrophic failures following a repair",
      "Public and Products Liability ($10 Million or $20 Million) covering bodily injury to customers on premises and liability from vehicles serviced",
      "Dealership and car yard stock protection covering new and used vehicles held for resale against hail, storm, fire, and yard theft",
      "Apprentice driving provisions accommodating young, licensed apprentice technicians operating customer vehicles",
    ],
    whatIsNotCovered: [
      "Employees driving customer vehicles without a valid Australian driver licence or exceeding legal blood alcohol limits",
      "Theft of customer vehicles left parked on public streets overnight or in unmonitored, unfenced outdoor yards",
      "Pre-existing engine failure, worn clutches, or mechanical breakdowns unrelated to the work performed",
      "Operating customer vehicles in competitive motorsport, track days, or illegal speed trials",
    ],
    whoNeedsIt: [
      "Mechanical repair workshops, brake and clutch specialists, and mobile auto repairers",
      "Panel beaters, crash repairers, and automotive spray painters operating spray booths and chassis alignment benches",
      "Tyre fitters, wheel alignment centres, and mobile tyre replacement vans",
      "Auto electricians, automotive air conditioning technicians, and car audio/security installers",
      "New and used car dealerships, commercial vehicle traders, and auction yards holding vehicle inventory",
    ],
    keyBenefits: [
      "Essential Care, Custody and Control (CCC) endorsement overriding standard property exclusions for customer vehicles",
      "Comprehensive test drive protection ensuring technicians can road-test customer cars without personal liability",
      "Apprentice driver allowances avoiding crippling young-driver excess penalties during workshop duties",
      "Tailored machinery breakdown cover for vehicle hoists, compressors, and paint baking ovens",
    ],
    faqs: [
      {
        question: "What does Care, Custody and Control mean in the motor trade?",
        answer: "Under standard Australian liability law, you are not covered for damage to property you do not own that is in your physical care. Care, Custody and Control (CCC) is the core motor trade endorsement that overrides this exclusion—ensuring that if a customer's vehicle is stolen from your workshop, damaged on a hoist, or caught in a workshop fire, the insurer pays the customer for the vehicle.",
      },
      {
        question: "Are apprentice mechanics covered to test drive customer cars?",
        answer: "Yes, provided the policy is structured with appropriate motor trade terms. Standard policies often impose heavy excess penalties on drivers under 25. Kooo ensures your Motor Trades policy includes practical apprentice driver provisions so your licensed apprentices can test drive vehicles without exposing the business to crippling excesses.",
      },
      {
        question: "What happens if a wheel comes loose after a tyre change?",
        answer: "If an employee fails to torque wheel nuts correctly and a wheel detaches on the highway, causing a serious crash, this falls under Faulty Workmanship / Completed Operations Liability. Kooo's motor trade wordings protect your business against the catastrophic third-party property damage and personal injury claims that follow.",
      },
    ],
  },

  // --- 19. Personal Accident and Sickness Insurance ---
  "personal-accident-and-sickness-insurance": {
    slug: "personal-accident-and-sickness-insurance",
    categorySlug: "tradesconstructioninsurance",
    categoryName: "Trades & Construction Insurance",
    title: "Personal Accident & Sickness Insurance",
    shortTitle: "Accident & Sickness",
    summary: "24/7 income replacement for self-employed tradies, sole traders, and contractors injured or sick and unable to work across Australia.",
    description: "For self-employed tradies, sole traders, and independent contractors, you are the engine of your business. If an accidental fall off a ladder, a power tool injury, or a severe illness stops you from working, your business revenue stops instantly while bills and mortgages continue. Unlike PAYG employees, sole traders are ineligible for state statutory Workers Compensation. Personal Accident and Sickness Insurance provides guaranteed weekly income payments (up to 85% of your pre-tax income) if you cannot work due to injury or illness, 24 hours a day, anywhere in the world.",
    whatIsCovered: [
      "Weekly income benefit (up to 85% of average pre-tax earnings, capped at $2,000–$5,000/week) while medically certified as unfit for work",
      "24/7 worldwide protection covering injuries on worksites, playing weekend sport, around the home, or travelling overseas",
      "Capital lump sum benefits (from $50,000 up to $500,000+) in the event of accidental death or permanent disablement",
      "Flexible waiting periods (7, 14, 21, or 28 days) allowing you to balance premium affordability against cash reserves",
      "Flexible benefit periods (1, 2, or 5 years) providing continuous weekly support during prolonged medical recovery",
      "Rehabilitation and return-to-work support contributing to professional physiotherapy and occupational therapy",
      "Fast quote-and-bind process without complex medical underwriting or invasive health tests for standard trade limits",
    ],
    whatIsNotCovered: [
      "Known pre-existing medical conditions, chronic joint issues, or recurring illnesses suffered prior to policy inception",
      "Injuries sustained while competing in professional motorsport, hang-gliding, or professional extreme sports",
      "Incidents occurring while operating machinery or driving under the influence of illegal drugs or intoxicating liquor",
      "Disablement resulting from elective cosmetic surgery or intentional self-inflicted injury",
      "Normal, uncomplicated pregnancy and childbirth absences",
    ],
    whoNeedsIt: [
      "Self-employed tradies and subcontractors (electricians, plumbers, builders, carpenters) excluded from statutory Workers Comp",
      "Sole traders and independent contractors (freelancers, couriers, professional consultants, transport owner-drivers)",
      "Small business working directors of Pty Ltd companies who draw dividends or salary and require personal income protection",
      "Contractors requiring personal accident certificates to satisfy principal commercial head contractor site inductions",
    ],
    keyBenefits: [
      "100% tax-deductible insurance premiums for income-earning sole traders and working business owners",
      "24/7 coverage on and off the worksite, including recreational sport and domestic home activities",
      "Eliminates reliance on personal savings or credit cards during medical recovery periods",
      "Fast claim payments with direct assistance from Kooo claims advisors",
    ],
    faqs: [
      {
        question: "Why can't sole traders get Workers Compensation in Australia?",
        answer: "Under Australian state legislation (such as SafeWork NSW, WorkSafe Victoria, and WorkCover Queensland), statutory Workers Compensation only protects workers (PAYG employees). Sole traders and individual partners are legally classified as employers, not employees, and cannot cover themselves under state workers comp schemes. Personal Accident & Sickness is the sanctioned commercial alternative.",
      },
      {
        question: "Are Personal Accident Insurance premiums tax deductible?",
        answer: "Yes. In Australia, premiums paid for income protection and personal accident insurance that protects your assessable business income are generally 100% tax deductible as a legitimate business expense.",
      },
      {
        question: "How does a Waiting Period work?",
        answer: "The waiting period is the initial timeframe (e.g. 14 days) following an injury during which no benefits are paid. Benefits begin accruing on the 15th day. Choosing a longer waiting period (e.g. 28 days instead of 7 days) substantially reduces your annual insurance premium if you have adequate cash savings to self-fund the first few weeks.",
      },
    ],
  },

  // --- 20. Product Liability Insurance ---
  "product-liability-insurance": {
    slug: "product-liability-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Product Liability Insurance",
    shortTitle: "Product Liability",
    summary: "Essential liability protection for Australian manufacturers, importers, and distributors against third-party injury or property damage caused by products.",
    description: "Any business that manufactures, imports, wholesales, or sells physical products in Australia faces severe legal accountability under the Australian Consumer Law (ACL) and common law tort principles. If a product you sell has a design defect, fails to operate safely, contains contaminated ingredients, or lacks adequate safety warnings, a single incident can lead to catastrophic personal injury or property destruction. Under Section 7 of the ACL, Australian importers are legally deemed the manufacturer and bear full local liability.",
    whatIsCovered: [
      "Third-party bodily injury compensation, medical expenses, and ongoing care costs caused by a product you supplied or manufactured",
      "Third-party property damage repair or replacement costs if your product catches fire, bursts, leaks, or collapses",
      "Specialist product liability defence solicitors, senior counsel retainers, and technical expert witness court costs",
      "Deemed manufacturer liability protecting Australian importers held legally responsible for foreign-manufactured products",
      "Defective instructions, inadequate assembly manuals, and warning label failure claims",
      "Indemnity limits of $10 Million or $20 Million complying with major national retail distributor vendor agreements",
    ],
    whatIsNotCovered: [
      "The emergency logistics costs of retrieving, shipping, and recalling defective stock (covered under standalone Product Recall Insurance)",
      "The direct intrinsic cost of refunding, repairing, or replacing the faulty batch of goods itself (resultant damage is covered)",
      "Distributing goods known to breach mandatory Australian Standards (AS/NZS) or ACMA safety compliance marks",
      "Specialized excluded categories (such as e-cigarettes, vaping, or tobacco products) unless underwritten under bespoke terms",
      "Components intentionally manufactured or supplied for aviation propulsion or navigation systems",
    ],
    whoNeedsIt: [
      "Importers of consumer and industrial goods sourcing electronics, tools, furniture, clothing, or materials from overseas",
      "Australian food and beverage producers (manufacturers, craft breweries, bakeries, packaged food processors)",
      "Componentry and machinery fabricators producing hydraulic hoses, valves, structural steel, or electrical switchgear",
      "E-commerce merchants, Amazon sellers, and Shopify brands distributing private-label consumer goods nationwide",
    ],
    keyBenefits: [
      "Essential shield for Australian importers who bear 100% legal responsibility as deemed manufacturers under Australian Consumer Law",
      "Complies with mandatory vendor agreements for major retailers including Woolworths, Coles, Bunnings, and Amazon",
      "Access to specialist product liability underwriting agencies with deep expertise in manufacturing risk appetites",
      "Seamless bundling with Commercial General Public Liability under one master liability policy schedule",
    ],
    faqs: [
      {
        question: "Why are Australian importers legally treated as manufacturers?",
        answer: "Under Australian Consumer Law (ACL), Australian consumers cannot be expected to chase foreign manufacturers in overseas courts. Therefore, the law deems the local Australian importer to be the legal manufacturer. If a product imported from China, Europe, or the USA causes a fire or injury in Australia, you bear 100% of the legal liability. Product Liability is an existential necessity for importers.",
      },
      {
        question: "What is the difference between Product Liability and Product Recall Insurance?",
        answer: "Product Liability pays compensation if a defective product injures a person or damages property. Product Recall Insurance pays the emergency logistical costs of retrieving defective products from the market before they cause injury (including public media notices, warehouse transport, and destruction costs). Kooo can bundle both covers.",
      },
      {
        question: "How do major Australian retailers (e.g. Bunnings, Coles) enforce Product Liability?",
        answer: "Major Australian retailers mandate that all vendors and suppliers must provide a Certificate of Currency showing a minimum of $20 Million Product Liability naming the retailer as an interested party before placing products on store shelves. Kooo issues compliant vendor certificates immediately.",
      },
    ],
  },

  // --- 21. Business Interruption Insurance ---
  "business-interruption-insurance": {
    slug: "business-interruption-insurance",
    categorySlug: "businessinsurance",
    categoryName: "Business Insurance",
    title: "Business Interruption Insurance",
    shortTitle: "Business Interruption",
    summary: "Protect your company's net profit, ongoing staff payroll, and fixed operating costs when insured disasters force your operations to halt across Australia.",
    description: "When a catastrophic fire, major storm, or explosion damages a commercial facility, physical property insurance covers the cost of repairing the building and replacing machinery. However, property insurance does not pay your ongoing employee wages, commercial rent, bank interest, or lost net profit during the six to eighteen months it takes to rebuild. Business Interruption Insurance guarantees the financial survival of your enterprise by replacing lost operating profit and continuing overheads.",
    whatIsCovered: [
      "Compensation for lost Gross Profit or Operating Revenue throughout the entire agreed indemnity period",
      "Continuing fixed operating expenses including employee payroll, rent, equipment lease finance, and debt interest",
      "Additional Increased Cost of Working (AICOW) funding emergency relocation to temporary commercial premises or contract fabrication",
      "Professional accounting and claims preparation fees incurred to calculate complex gross profit losses for underwriters",
      "Contingent Business Interruption covering losses when a major fire at your primary supplier's facility halts your production",
      "Prevention of access by civil authorities or police following an emergency or disaster in your immediate vicinity",
      "Extended public utilities interruption resulting from damaged regional electrical substations or water mains",
    ],
    whatIsNotCovered: [
      "Losses unrelated to insured physical damage (economic downturn, loss of market share, normal trading dips)",
      "Financial losses continuing after your selected indemnity period (e.g. 12 months) has expired, even if rebuilding is incomplete",
      "Pandemic and infectious disease closures excluded under standard Australian Biosecurity Act market exclusions",
      "Deliberate, unreasonable delays by management in expediting property repairs and reopening the business",
    ],
    whoNeedsIt: [
      "Manufacturing plants and industrial fabricators where lead times on replacement machinery exceed 12 to 18 months",
      "Wholesale distributors and cold-storage facilities where facility loss halts high-volume delivery contracts",
      "High-turnover retail strips, hospitality venues, and supermarkets reliant on uninterrupted daily customer cash flow",
      "Specialist medical clinics and professional practices requiring continuity of diagnostic machinery and client consultations",
    ],
    keyBenefits: [
      "Guarantees business solvency and preserves staff payroll throughout prolonged rebuilding and DA approval periods",
      "Dual-basis wages options allowing you to retain skilled staff and technicians so you reopen with a trained team",
      "Proactive gross profit sum-insured calculations conducted by Kooo brokers to avoid crippling underinsurance penalties",
      "End-to-end claims preparation support connecting you with certified forensic insurance accountants",
    ],
    faqs: [
      {
        question: "What is an Indemnity Period and why is 12 months often inadequate in Australia?",
        answer: "The Indemnity Period is the maximum timeframe for which the insurer will pay lost profits following a disaster. In Australia, obtaining council demolition permits, architectural redesigns, planning approvals (DA), and sourcing imported machinery frequently takes 18 to 24 months. Selecting a 12-month indemnity period means payments stop at month 12, leaving the business to self-fund the remainder of the rebuild. Kooo guides clients to select realistic 18 or 24-month periods.",
      },
      {
        question: "What is the difference between Gross Profit and Gross Revenue policies?",
        answer: "Insuring on a Gross Profit basis (Turnover minus uninsured working expenses like raw materials) is standard for manufacturing and retail because variable costs naturally cease when production stops. Insuring on a Gross Revenue basis covers total revenue and is preferred by service firms and professional consultancies where almost all costs (salaries, software, rent) are fixed.",
      },
      {
        question: "Does Business Interruption cover wages for all staff?",
        answer: "Yes, under a properly structured policy. You can elect Dual Basis Wages or full payroll coverage, allowing you to retain skilled staff and key technicians during the rebuild so you have a trained workforce ready the day your doors reopen.",
      },
    ],
  },

  // --- 22. Marine Cargo Insurance ---
  "marine-cargo-insurance": {
    slug: "marine-cargo-insurance",
    categorySlug: "specialtyinsurance",
    categoryName: "Specialty Insurance",
    title: "Marine Cargo Insurance",
    shortTitle: "Marine Cargo",
    summary: "Comprehensive protection for international sea freight, air cargo, and Australian coastal shipping under Institute Cargo Clauses against total loss and general average.",
    description: "International trade is the foundation of Australian industry, with over 98% of the nation's imported and exported trade moving across sea lanes and air corridors. Transporting goods across oceans exposes consignments to extreme sea conditions, container stack collapses, vessel groundings, and shipboard fires. Marine Cargo Insurance provides worldwide, warehouse-to-warehouse protection under international Institute Cargo Clauses, protecting your balance sheet against total cargo loss and devastating General Average maritime claims.",
    whatIsCovered: [
      "Institute Cargo Clauses (A) all-risks cover protecting against physical loss or damage from external causes during sea, air, or land transit",
      "General Average and salvage charges covering mandatory maritime financial contributions assessed following a ship emergency",
      "Total loss cover if cargo is destroyed when a container ship grounds, capsizes, or collides at sea",
      "Jettison and washing overboard protection if shipping containers are lost in heavy seas",
      "Warehouse-to-warehouse continuous transit cover from the foreign manufacturer's warehouse to your Australian destination",
      "Air freight turbulence, cargo handling accidents, and airport warehouse theft cover",
      "Customs duty and advance freight charges options ensuring you recover duty paid on destroyed cargo",
    ],
    whatIsNotCovered: [
      "Inadequate protective packaging or improper container stuffing by the shipper",
      "Inherent vice and natural perishability of goods without an external refrigeration breakdown event",
      "Insolvency or financial default of charter vessel operators where the cargo owner had prior knowledge",
      "Weapons of mass destruction, nuclear perils, and declared war risks on land (waterborne war risks can be endorsed)",
    ],
    whoNeedsIt: [
      "Australian importers sourcing wholesale stock, machinery, electronics, and consumer goods from overseas manufacturers",
      "Australian exporters shipping agricultural commodities, wine, manufactured goods, and raw materials globally",
      "Machinery and vehicle distributors moving multi-million dollar equipment via Roll-On/Roll-Off (RoRo) vessels",
      "High-value air cargo shippers moving pharmaceuticals, medical equipment, luxury goods, and precision instruments",
    ],
    keyBenefits: [
      "First-party protection paying full invoice value without relying on foreign carrier liability or overseas legal proceedings",
      "Covers catastrophic General Average claims that legally block cargo release until cash contributions are deposited",
      "Annual Open Marine policies automatically covering all import/export shipments under pre-agreed wholesale rates",
      "Experienced Australian marine claims adjusters coordinating local container surveys and wharf inspections",
    ],
    faqs: [
      {
        question: "What is General Average and why can it bankrupt an uninsured Australian importer?",
        answer: "General Average is an ancient international maritime law principle. If a ship faces catastrophic disaster (e.g. engine room fire or grounding) and the captain sacrifices cargo or hires salvage tugs to save the vessel, all cargo owners must contribute financially to cover the loss based on the value of their cargo on board. If an uninsured importer has $200,000 of cargo on that vessel, they can be hit with a $50,000 to $100,000 cash demand before the port will release their goods. Marine Cargo Insurance pays your General Average contribution in full.",
      },
      {
        question: "How do Incoterms (e.g. FOB, CIF, EXW) determine who must buy insurance?",
        answer: "Incoterms define the exact point where risk of loss transfers from seller to buyer: FOB (Free on Board): The Australian buyer takes on risk once goods cross the ship's rail at the foreign port. You must arrange your own Marine Cargo Insurance. CIF (Cost, Insurance & Freight): The foreign seller buys minimal insurance, but it is often bare-bones cover written in a foreign language under foreign law. EXW (Ex Works): The Australian buyer is responsible from the foreign factory door. Kooo structures annual open marine cargo policies providing seamless protection under Australian jurisdiction.",
      },
      {
        question: "What is an Annual Open Marine Cargo Policy?",
        answer: "Rather than buying expensive, one-off insurance for every shipping container, an Annual Open Policy automatically covers every shipment your business imports or exports throughout the year at pre-agreed wholesale rates, settled on an annual turnover or declaration basis.",
      },
    ],
  },

  // --- 23. Event Insurance ---
  "event-insurance": {
    slug: "event-insurance",
    categorySlug: "specialtyinsurance",
    categoryName: "Specialty Insurance",
    title: "Event Insurance",
    shortTitle: "Event Insurance",
    summary: "Comprehensive insurance for Australian events, corporate conferences, weddings, festivals, and exhibitions covering public liability, weather cancellation, and equipment.",
    description: "Organising an event in Australia—whether a corporate conference at a major convention centre, a community festival, a wedding, a charity gala, or an outdoor market—requires coordinating venues, contractors, attendees, and performers. Australian municipal councils, state parks authorities, and commercial venue operators legally mandate that event organizers carry a minimum of $20 Million Public Liability Insurance before issuing venue hire permits. Event Insurance provides comprehensive event liability and optional cancellation protection.",
    whatIsCovered: [
      "Event Public Liability ($10 Million or $20 Million) covering third-party bodily injury or property damage during the event, bump-in, and bump-out",
      "Venue property damage protection for leased historic civic halls, council community centres, hotels, or exhibition spaces",
      "Adverse weather cancellation reimbursing irrecoverable expenses if an outdoor event is abandoned due to declared severe storms or flood",
      "Non-appearance of key speakers or headline artists compensating for lost costs if a keynote speaker or artist cannot attend due to illness",
      "Event equipment and audio-visual gear protection covering hired staging, marquees, audio systems, and lighting rigs",
      "Volunteer and participant liability extensions protecting unpaid volunteer workers and registered attendees during event operations",
    ],
    whatIsNotCovered: [
      "Financial loss resulting from poor ticket sales, lack of public interest, or marketing failure",
      "Routine seasonal weather (light drizzle, minor wind) that does not pose an objective safety hazard",
      "Cancellation resulting from the financial insolvency or bankruptcy of event organizers",
      "High-risk pyrotechnics, fireworks, or competitive motorsport activities (unless specifically underwritten)",
    ],
    whoNeedsIt: [
      "Corporate event planners organizing annual conferences, brand activations, trade expos, and awards galas",
      "Community associations and charities running fundraisers, street fairs, weekend markets, and cultural festivals",
      "Couples and private hosts organizing weddings, engagement celebrations, and milestone private functions at hire venues",
      "Sports clubs and tournament organizers hosting community fun runs, cycling events, and regional tournaments",
    ],
    keyBenefits: [
      "Instant issuance of council-compliant Certificates of Currency showing $20M Public Liability naming the municipal council as interested party",
      "Covers both the preparatory setup (bump-in) days and teardown (bump-out) days surrounding the event",
      "Protects non-refundable vendor deposits, venue hire fees, and catering commitments against unforeseen cancellation",
      "Flexible single-event policies or multi-event annual policies for active event management companies",
    ],
    faqs: [
      {
        question: "Why do Australian local councils mandate $20 Million Public Liability for event permits?",
        answer: "Australian municipal councils face strict liability if an attendee is injured on council property (such as a park, oval, or community hall). To protect ratepayer funds, councils mandate that the event organizer must provide a Certificate of Currency showing a minimum of $20M Public Liability naming the council as an interested party before granting access. Kooo issues compliant council certificates immediately.",
      },
      {
        question: "How far in advance must I purchase Adverse Weather Cancellation Insurance?",
        answer: "Weather cancellation insurance must typically be bound at least 14 to 30 days prior to the event date to prevent organizers from buying cover only after adverse meteorological forecasts appear.",
      },
      {
        question: "Does Event Insurance cover the set-up (bump-in) and pack-down (bump-out) days?",
        answer: "Yes. Kooo structures event policies to include the preparatory setup days before the event and the pack-down days afterwards, ensuring you remain protected while contractors erect staging, marquees, and electrical equipment.",
      },
    ],
  },

  // =========================================================================
  // TIER 4 — PRESERVED & EXPANDED PERSONAL INSURANCE LINES
  // =========================================================================

  // --- 24. Home Insurance ---
  "home-insurance": {
    slug: "home-insurance",
    categorySlug: "personalinsurance",
    categoryName: "Personal Insurance",
    title: "Home & Residential Property Insurance",
    shortTitle: "Home Insurance",
    summary: "Protecting your primary residence, prestige home, or architectural property against fire, storm, flood, and damage.",
    description: "Your home is your sanctuary and often your most valuable financial asset. Kooo provides comprehensive residential home insurance covering physical buildings, permanent fixtures, garages, swimming pools, and architectural features against unforeseen natural perils and accidental damage across Australia.",
    whatIsCovered: [
      "Building structure and fixtures against fire, bushfire, storm, tempest, and impact",
      "Option to include flood, storm surge, and accidental damage",
      "Temporary accommodation costs if your residence becomes unlivable after an insured event",
      "Legal liability as a homeowner covering third-party injury on your property up to $20M",
      "Professional rebuilding fees including architects, surveyors, and council demolition approvals",
    ],
    whatIsNotCovered: [
      "Damage caused by termites, pests, or gradual dampness",
      "Pre-existing structural cracking and lack of routine building maintenance",
      "Unoccupied residences exceeding 60 consecutive days without insurer notice",
    ],
    whoNeedsIt: [
      "Homeowners protecting their principal place of residence",
      "Owners of prestige, architectural, or luxury residential properties",
      "Borrowers satisfying Australian home loan mortgage requirements",
    ],
    keyBenefits: [
      "Guaranteed replacement cost options to eliminate underinsurance concerns",
      "Choice of excesses to fit your family's budget",
      "Proactive weather risk mapping and bushfire boundary advisory",
    ],
    faqs: [
      {
        question: "Does home insurance cover flood automatically?",
        answer: "Not always. Flood coverage varies by location and insurer risk appetite. Kooo assesses your property's flood risk and ensures appropriate flood cover is included if required.",
      },
    ],
  },

  // --- 25. Contents Insurance ---
  "contents-insurance": {
    slug: "contents-insurance",
    categorySlug: "personalinsurance",
    categoryName: "Personal Insurance",
    title: "Contents Insurance",
    shortTitle: "Contents Insurance",
    summary: "New-for-old replacement protection for household furniture, high-end electronics, appliances, and personal possessions against fire, storm, theft, and water escape.",
    description: "From household furniture and appliances to home entertainment systems, clothing, and personal tech, your household contents represent years of investment. Contents Insurance provides comprehensive new-for-old replacement protection if your belongings are stolen during a home break-in, damaged by storm or flash flood, or destroyed by domestic fire.",
    whatIsCovered: [
      "New-for-old replacement of furniture, carpets, rugs, curtains, clothing, and household appliances",
      "Theft and burglary protection following forced entry into your home, garage, or garden shed",
      "Accidental loss or damage to home entertainment systems, smart TVs, and desktop computers",
      "Spoilage of refrigerated food and medication following an extended power blackout",
      "Temporary storage costs for undamaged contents while your home is undergoing post-disaster repairs",
      "Legal liability as an occupier covering third-party injury inside your home up to $20 Million",
    ],
    whatIsNotCovered: [
      "Normal wear, tear, progressive depreciation, and mechanical or electrical breakdown",
      "Damage caused by domestic pets chewing, scratching, or tearing furniture",
      "Tools, equipment, or inventory used exclusively for commercial business trades (insurable under commercial tools)",
      "Unexplained disappearance of personal items without evidence of theft or forced entry",
    ],
    whoNeedsIt: [
      "Homeowners seeking comprehensive contents protection alongside building insurance",
      "Renters and apartment tenants protecting their personal possessions and furniture in leased premises",
      "Families holding collections of quality electronics, appliances, and home furnishings",
    ],
    keyBenefits: [
      "New-for-old replacement ensuring stolen or destroyed items are replaced with brand new modern equivalents",
      "Flexible cover limits and excess options tailored to your family's lifestyle",
      "Combined Home and Contents policy discounts when bundled under one master schedule",
      "Fast claim processing and replacement assistance through leading Australian retail networks",
    ],
    faqs: [
      {
        question: "What is New-for-Old replacement in contents insurance?",
        answer: "New-for-Old means that if your 5-year-old television or couch is destroyed by an insured event, the insurer replaces it with a brand-new equivalent model without deducting for age or depreciation.",
      },
      {
        question: "Are high-value items like jewellery and art covered automatically?",
        answer: "Standard contents policies impose sub-limits (typically $1,000 to $2,500 per item) on jewellery, watches, and fine art. High-value pieces should be specified individually under Valuables & Portable Items cover to ensure they are insured for their full appraised value.",
      },
      {
        question: "Does contents insurance cover me if I rent?",
        answer: "Yes. Renters Contents insurance protects your personal furniture, electronics, and clothing inside a rental property without insuring the building structure (which remains the landlord's responsibility).",
      },
    ],
  },

  // --- 26. Landlord Insurance ---
  "landlord-insurance": {
    slug: "landlord-insurance",
    categorySlug: "personalinsurance",
    categoryName: "Personal Insurance",
    title: "Landlord Property & Rental Protection",
    shortTitle: "Landlord Insurance",
    summary: "Dedicated cover for residential investment properties, protecting rental income, tenant damage, and landlord liability.",
    description: "Investing in Australian residential property offers great long-term returns, but tenant default, accidental damage, and lease disputes can quickly derail your income. Landlord Insurance protects rental homes, townhouses, and units against tenant default, malicious damage, fixture theft, and public liability.",
    whatIsCovered: [
      "Loss of rental income resulting from tenant default, tenant death, or legally enforced eviction",
      "Malicious damage, vandalism, and deliberate destruction caused by tenants",
      "Accidental damage to landlord fixtures, carpets, blinds, ovens, and air conditioning units",
      "Legal liability for injury on the premises up to $20M",
      "Legal representation costs in residential tenancy tribunal proceedings",
    ],
    whatIsNotCovered: [
      "Routine tenant wear, tear, and standard end-of-lease carpet wear",
      "Loss of rent during vacancy periods between scheduled tenancies",
      "Properties leased without formal written tenancy agreements",
    ],
    whoNeedsIt: [
      "Residential property investors owning apartments, houses, or duplexes",
      "Self-managed super fund (SMSF) residential property portfolios",
      "Landlords managing properties through local real estate property managers",
    ],
    keyBenefits: [
      "Safeguards your rental cash flow to meet mortgage repayments",
      "Accepted by property management agencies and mortgage lenders nationwide",
      "Tax-deductible insurance premiums for income-producing investment properties",
    ],
    faqs: [
      {
        question: "Is landlord insurance tax deductible in Australia?",
        answer: "Yes. Insurance premiums for income-producing residential investment properties are generally tax deductible as an allowable rental property expense.",
      },
      {
        question: "Does Landlord Insurance cover tenant rent default automatically?",
        answer: "Yes, under our comprehensive landlord policies. If a tenant stops paying rent and must be evicted through a state tenancy tribunal, the policy compensates you for lost rental income up to agreed weekly and total limits.",
      },
    ],
  },

  // --- 27. Comprehensive Car Insurance ---
  "car-insurance": {
    slug: "car-insurance",
    categorySlug: "personalinsurance",
    categoryName: "Personal Insurance",
    title: "Comprehensive Car Insurance",
    shortTitle: "Car Insurance",
    summary: "Tailored protection for executive vehicles, family cars, and prestige automotive assets covering accidental damage, theft, storm, and choice of repairer.",
    description: "Whether navigating daily school drop-offs or commuting on interstate highways, your personal car is vital to your lifestyle. Comprehensive Car Insurance provides top-tier protection covering accidental collision damage, vehicle theft, malicious damage, and severe storm/hail impact, backed by choice of repairer and emergency roadside benefits across Australia.",
    whatIsCovered: [
      "Accidental collision damage, rollover, fire, storm, tempest, and malicious damage to your vehicle",
      "Theft of your vehicle, including emergency replacement of stolen transponder keys and coded locks",
      "Third-party property damage liability up to $20 Million covering damage caused to other vehicles and property",
      "Choice of repairer allowing you to nominate your preferred local body shop or manufacturer-certified repair facility",
      "Genuine manufacturer parts guarantee on vehicles within specified manufacturer warranty periods",
      "Accident hire car provision following not-at-fault and at-fault collisions to keep you mobile",
      "Agreed Value policy options locking in your car's payout value without depreciative disputes",
    ],
    whatIsNotCovered: [
      "Unlicensed drivers or drivers operating with suspended, disqualified, or cancelled licences",
      "Driving under the influence of illegal drugs or exceeding statutory blood alcohol concentration (BAC) limits",
      "Operating the vehicle in an unroadworthy condition (such as defective brakes or bald tyres)",
      "Using the vehicle for commercial rideshare (such as Uber) unless specifically declared and endorsed",
    ],
    whoNeedsIt: [
      "Owners of prestige, executive, luxury, and performance automotive vehicles",
      "Families seeking dependable comprehensive cover with guaranteed hire car and roadside support",
      "Vehicle owners with active car finance or novated lease commitments requiring agreed value certainty",
    ],
    keyBenefits: [
      "Choice of repairer and genuine parts guarantees to preserve your vehicle's resale value",
      "Agreed Value options locking in your insured sum for the full 12-month policy term",
      "Nil-excess windscreen and window glass replacement options",
      "Dedicated claims support handling all third-party liability recovery on your behalf",
    ],
    faqs: [
      {
        question: "What is the difference between Agreed Value and Market Value?",
        answer: "Agreed Value locks in a fixed dollar amount for your car for the entire policy year, giving complete payout certainty if your car is written off. Market Value assesses what your car was worth immediately prior to the accident based on current market listings and vehicle condition.",
      },
      {
        question: "Can I choose my own repairer?",
        answer: "Yes. Our leading prestige personal car policies include Choice of Repairer, giving you the freedom to take your car to your preferred local body shop or an official manufacturer-certified prestige repair facility.",
      },
      {
        question: "Do I get a hire car if my vehicle is damaged?",
        answer: "Yes, under our comprehensive policies with hire car extensions. If your car is stolen or damaged in an accident, a rental vehicle is provided to keep your daily family routine uninterrupted while repairs are completed.",
      },
    ],
  },

  // --- 28. Caravan and Trailer Insurance ---
  "caravan-and-trailer-insurance": {
    slug: "caravan-and-trailer-insurance",
    categorySlug: "personalinsurance",
    categoryName: "Personal Insurance",
    title: "Caravan & Trailer Insurance",
    shortTitle: "Caravan & Trailer",
    summary: "Australia-wide touring protection for touring caravans, camper trailers, horse floats, and boat trailers against road collisions, storm, roll-over, and theft.",
    description: "Exploring the Australian landscape with a touring caravan, camper trailer, or recreational float is a national pastime, but towing heavy rigs across regional highways, corrugations, and remote tracks brings distinct hazards. Caravan and Trailer Insurance provides comprehensive Australia-wide touring protection against road accidents, roll-overs, severe hail storms, annex damage, and theft.",
    whatIsCovered: [
      "Accidental collision damage, jackknifing, roll-over, and impact while being towed on Australian roads",
      "Severe storm, tempest, flash flood, and catastrophic hail damage to caravan body and roof panels",
      "Theft of the caravan or trailer from campsites, storage yards, caravan parks, or your home driveway",
      "Permanent fixtures, solar panels, air conditioners, built-in cabinetry, and internal appliances",
      "Caravan annexes, roll-out awnings, and camping gear damaged by severe storm or collision",
      "Emergency towing, vehicle retrieval, and emergency accommodation allowances if stranded away from home",
    ],
    whatIsNotCovered: [
      "Structural water leaks through degraded or unmaintained rubber window seals and seams",
      "Normal wear, tear, stone chips, chassis rust, and tyre blowouts without impact",
      "Using the caravan as a permanent, continuous fixed residential dwelling without underwriter notice",
      "Towing with an unroadworthy vehicle or exceeding vehicle manufacturer maximum tow capacity ratings",
    ],
    whoNeedsIt: [
      "Touring caravan and off-road hybrid camper owners traveling across Australia",
      "Camper trailer, pop-top, and fifth-wheeler recreational travelers",
      "Equine horse float owners and recreational boat trailer owners",
    ],
    keyBenefits: [
      "Australia-wide 24/7 touring cover including remote highway retrieval and emergency accommodation",
      "Dedicated cover for annexes, awnings, and portable outdoor camping equipment",
      "Choice of lay-up cover discounts during winter months when your caravan is parked securely",
      "Specialist repairer networks experienced in fiberglass, composite, and aluminium caravan repairs",
    ],
    faqs: [
      {
        question: "What is Lay-Up cover in caravan insurance?",
        answer: "Lay-Up cover allows you to reduce your insurance premium during months when your caravan is parked securely at home and not being towed. Full comprehensive cover remains active for fire and theft, and touring cover reactivates when you hit the road.",
      },
      {
        question: "Are annexes and roll-out awnings covered for storm damage?",
        answer: "Yes, under comprehensive caravan policies. Annexes, roll-out awnings, and camping equipment attached to your caravan are covered against severe storms, strong winds, and tree branch impact.",
      },
      {
        question: "Do I need to comply with towing weight limits?",
        answer: "Yes. In Australia, your vehicle and caravan must comply with legal towing weight ratings (such as Aggregate Trailer Mass - ATM, and Tow Ball Weight). Exceeding manufacturer towing limits can compromise vehicle safety and void insurance coverage.",
      },
    ],
  },

  // --- 29. Boat and Watercraft Insurance ---
  "boat-insurance": {
    slug: "boat-insurance",
    categorySlug: "personalinsurance",
    categoryName: "Personal Insurance",
    title: "Boat & Marine Watercraft Insurance",
    shortTitle: "Boat Insurance",
    summary: "Comprehensive marine insurance for speedboats, runabouts, yachts, cruisers, and personal watercraft (PWC) on Australian inland and coastal waters.",
    description: "Boating on Australia's pristine waterways, coastal bays, and offshore fishing grounds delivers exceptional recreation, but marine environments present unique risks. From submerged reef strikes and hull grounding to marina fires, capsizing, and road transit accidents, Boat and Watercraft Insurance safeguards your marine vessel, outboard motors, trailer, and third-party liabilities.",
    whatIsCovered: [
      "Accidental collision, stranding, grounding on reefs or sandbars, sinking, and capsizing on water",
      "Road transit collision and rollover damage while your boat is being towed on a trailer on Australian roads",
      "Severe storm, cyclone, hail, and lightning strike damage while moored, berthed, or on trailer",
      "Theft of the boat hull, outboard motors, trailers, and permanently mounted marine navigation electronics",
      "Marine third-party property damage and bodily injury liability (up to $10 Million) complying with marina berth rules",
      "Waterskiers and towing liability covering injury to persons being towed on skis, tubes, or wakeboards",
      "Emergency marine salvage and removal of wreck expenses mandated by Australian maritime safety authorities",
    ],
    whatIsNotCovered: [
      "Operating outside declared coastal cruising limits (typically beyond 12 to 20 nautical miles offshore without endorsement)",
      "Operating a vessel in an unseaworthy condition with known hull rot or structural bilge defects",
      "Operating without an appropriate state marine boat driver licence or under the influence of alcohol",
      "Powerboat racing, speed trials, or commercial charter use without dedicated commercial underwriting",
    ],
    whoNeedsIt: [
      "Owners of runabouts, bowriders, wakeboard boats, and cabin cruisers for family recreation",
      "Offshore game fishing boats, catamarans, and center-console craft operating in coastal waters",
      "Sailing yachts and multihulls berthed in commercial marinas or swinging moorings",
      "Personal watercraft (PWC / Jet Ski) owners seeking responsive theft and towing liability cover",
    ],
    keyBenefits: [
      "Automatic $10 Million marine third-party liability satisfying all Australian commercial marina berthing rules",
      "Combined hull, motor, trailer, and navigation electronics protection under one schedule",
      "Agreed Value options available for new and near-new vessels",
      "Specialist marine claims surveyors coordinating salvage, towage, and certified fiberglass repairers",
    ],
    faqs: [
      {
        question: "Why do Australian marinas require $10 Million marine liability insurance?",
        answer: "If your boat catches fire at a marina berth or slips its mooring and crashes into an adjacent luxury yacht, damages can easily exceed millions. Commercial marinas legally require all berthed vessels to present a Certificate of Currency showing at least $10M marine liability.",
      },
      {
        question: "Are watersports (e.g. water skiing, tubing) covered automatically?",
        answer: "Yes, our comprehensive boat policies include waterskiing and towing liability, covering accidental injury to skiers or swimmers while operating recreational water sports.",
      },
      {
        question: "What are coastal navigational limits?",
        answer: "Standard recreational boat policies cover inland rivers, lakes, enclosed bays, and coastal waters up to a specified distance offshore (typically 12 to 20 nautical miles). If you plan offshore game fishing or interstate passage, Kooo can endorse extended coastal cruising limits.",
      },
    ],
  },

  // --- 30. Valuables and Portable Items Insurance ---
  "valuables-and-portable-items-insurance": {
    slug: "valuables-and-portable-items-insurance",
    categorySlug: "personalinsurance",
    categoryName: "Personal Insurance",
    title: "Valuables & Portable Items Insurance",
    shortTitle: "Valuables & Portable Items",
    summary: "Worldwide accidental loss, theft, and damage protection for fine jewellery, engagement rings, luxury watches, laptops, and family heirlooms away from home.",
    description: "Your most treasured possessions—engagement rings, luxury Swiss watches, diamond necklaces, high-end laptops, and heirloom jewellery—accompany you wherever you go. Standard home contents policies severely limit or exclude items once you walk out your front door. Valuables and Portable Items Insurance provides 24/7 worldwide protection against accidental loss, mysterious disappearance, theft, and damage anywhere across Australia and internationally.",
    whatIsCovered: [
      "Worldwide 24/7 protection against accidental loss, dropping, theft, and damage away from home",
      "Fine jewellery, diamond engagement rings, wedding bands, necklaces, and heirloom pieces",
      "Luxury Swiss watches (such as Rolex, Patek Philippe, Omega, Cartier, and Breitling) insured for agreed valuation",
      "Accidental loss of stones from ring settings or clasps failing while wearing items out in public",
      "Laptops, mobile phones, tablet computers, and cameras stolen or damaged while traveling",
      "Bespoke designer sunglasses, high-end optical wear, and portable musical instruments",
    ],
    whatIsNotCovered: [
      "Normal wear, gradual tarnishing, metal scratching, or loose prongs that were not periodically inspected",
      "Mechanical or electronic breakdown of watch movements without an external impact event",
      "Unexplained disappearance where the owner cannot demonstrate probable cause or circumstance of loss",
      "Items left completely unattended in open public places without reasonable personal care",
    ],
    whoNeedsIt: [
      "Individuals and couples wearing valuable engagement rings, wedding jewellery, and fine gems",
      "Watch collectors and enthusiasts owning luxury, mechanical, or investment-grade timepieces",
      "Frequent domestic and international business travelers carrying premium laptops and camera equipment",
      "Families holding treasured family heirlooms and heritage collections",
    ],
    keyBenefits: [
      "True worldwide cover ensuring your jewellery and watches are fully protected while traveling overseas",
      "Agreed Value options based on certified Australian jewellery appraisals to guarantee replacement value",
      "Protects against accidental loss (such as a diamond ring slipping off into the ocean or lost in a hotel)",
      "Choice of replacement through your preferred master jeweller or cash settlement options",
    ],
    faqs: [
      {
        question: "How often should I get my luxury jewellery and watches revalued?",
        answer: "Due to ongoing fluctuations in global gold prices, diamond market values, and Swiss exchange rates, we recommend having fine jewellery and luxury watches appraised by a certified valuer (e.g. National Council of Jewellery Valuers - NCJV) every 2 to 3 years to ensure your insured sums keep pace with true replacement costs.",
      },
      {
        question: "What is the difference between Unspecified and Specified portable items?",
        answer: "Unspecified cover provides a general blanket limit (e.g. $2,000 to $5,000) for general everyday items with a maximum cap per item. Specified cover individually lists high-value pieces (e.g. a $25,000 diamond ring or $18,000 Rolex watch) with agreed values and no restrictive sub-limits.",
      },
      {
        question: "Does this policy cover accidental loss, such as losing a ring while swimming?",
        answer: "Yes. Unlike standard contents policies that require forced entry theft, Valuables & Portable Items cover specifically includes Accidental Loss—meaning if a ring slips off your finger or is lost while traveling, your claim is covered.",
      },
    ],
  },
};

export function getProduct(slug: string): ProductDetail | undefined {
  return products[slug];
}

export function getProductsByCategory(categorySlug: string): ProductDetail[] {
  return Object.values(products).filter((p) => p.categorySlug === categorySlug);
}
