/**
 * LegalEase - Centralized Services Data Repository
 * File: js/service-data.js
 * 
 * Contains complete content for all six core legal documentation services:
 * 1. Rental & Lease Agreements (rental-agreements)
 * 2. Affidavits & Declarations (affidavits)
 * 3. Business Registration Assistance (business-registration)
 * 4. Legal Notice Drafting (legal-notices)
 * 5. Sale Deeds & Property Documents (sale-deeds)
 * 6. Indemnity Bonds & Undertakings (indemnity-bonds)
 */

window.LEGALEASE_SERVICES = {
  'rental-agreements': {
    id: 'rental-agreements',
    title: 'Rental & Lease Agreements',
    category: 'Property Documents',
    categorySlug: 'property',
    badge: 'Popular Service',
    turnaround: '24–48 Hours',
    shortDesc: 'Professional drafting assistance for rental agreements, lease terms and property documentation.',
    detailedDesc: 'Our rental and lease agreement documentation service delivers legally structured, unambiguous tenancy contracts tailored to residential, commercial, and co-working occupancies. We ensure critical clauses—including security deposit lock-ins, maintenance liabilities, termination notices, dispute resolution, and statutory compliance—are meticulously drafted to safeguard the interests of both landlords and tenants.',
    heroImage: 'assets/images/service-detail-rental-clear.jpg',
    overviewImage: 'assets/images/about-legal-document.jpg',
    overviewPoints: [
      'Statutory compliance tailored to regional Tenancy & Rent Control Acts',
      'Balanced covenants covering maintenance, default remedies, and security deposits',
      'Customized annexures for inventory, parking slots, and fixture checklists',
      'Assistance with digital drafting, e-stamping guidance, and registration procedural clarity'
    ],
    statutoryNotice: 'Drafted in alignment with Model Tenancy Frameworks and State Rent Control Enactments.',
    features: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        title: 'Residential & Commercial Scope',
        desc: 'Customized contract architectures whether you are letting a residential apartment, retail outlet, or corporate office.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        title: 'Deposit & Escrow Protection',
        desc: 'Rigorous clause definitions for security deposit handling, deduction conditions, and timely refund commitments.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>',
        title: 'Lock-in & Notice Periods',
        desc: 'Unambiguous tenure definitions detailing premature vacancy rules, cure periods, and penalty caps.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: 'Utility & Maintenance Allocation',
        desc: 'Clear bifurcation of recurring municipal taxes, common facility charges, and utility payment responsibilities.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        title: 'Stamp Duty & Execution Guidance',
        desc: 'Step-by-step guidance on required stamp duty denominations, e-registration steps, and witness protocols.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        title: 'Dispute Arbitration Clause',
        desc: 'Pre-emptive legal clauses establishing mediation and expedited arbitration before litigation.'
      }
    ],
    processSteps: [
      {
        num: '01',
        title: 'Submit Your Requirement',
        desc: 'Share property specifications, rent amount, tenure, security deposit, and special covenant requirements through our intake form.'
      },
      {
        num: '02',
        title: 'Initial Consultation',
        desc: 'Our documentation advisor reviews local statutory nuances, confirms party details, and clarifies custom requirements.'
      },
      {
        num: '03',
        title: 'Document Preparation',
        desc: 'A comprehensive, legally balanced agreement draft is prepared with thorough clause structuring and cross-verification.'
      },
      {
        num: '04',
        title: 'Review & Delivery',
        desc: 'Receive the final draft with our signature-readiness checklist, e-stamping guidance, and execution instructions.'
      }
    ],
    pricingPlans: [
      {
        name: 'Basic Assistance',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Ideal for standard 11-month residential rental agreements with standard tenancy terms.',
        features: [
          'Standard 11-Month Residential Draft',
          'Clause review for deposits & notice',
          'Standard inventory annexure template',
          'Digital draft delivery within 24h',
          '1 Round of minor refinements'
        ],
        ctaText: 'Request Assistance'
      },
      {
        name: 'Professional Support',
        badge: 'RECOMMENDED PLAN',
        isRecommended: true,
        priceLabel: 'Request a Quote',
        desc: 'Comprehensive drafting for residential villas, long-term multi-year leases, or customized terms.',
        features: [
          'Multi-Year Residential / Commercial Draft',
          'Bespoke covenants & maintenance allocation',
          'Power of Attorney & Sublease clauses',
          'Stamp duty & registration procedure guide',
          'Priority 24h turnaround & 2 revision rounds',
          'Dedicated consultation support'
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Business Documentation',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Tailored for corporate offices, retail spaces, warehouses, and institutional property leases.',
        features: [
          'Complex Commercial Space Lease Deed',
          'Fit-out periods, CAM charges & escalation terms',
          'Corporate entity signing verification',
          'Indemnity & force majeure structuring',
          'Comprehensive legal review & consultation',
          'Unlimited pre-execution refinements'
        ],
        ctaText: 'Request Corporate Quote'
      }
    ],
    faqs: [
      {
        q: 'What is the difference between a Lease Deed and an 11-Month Rental Agreement?',
        a: 'An 11-month rental agreement is typically framed as a Leave and License agreement to avoid mandatory registration in many states, providing flexibility. A long-term Lease Deed (over 12 months) creates an interest in the property and requires mandatory stamp duty payment and registration with the sub-registrar.'
      },
      {
        q: 'Can the agreement specify who bears maintenance and society charges?',
        a: 'Yes, our drafting explicitly delineates who pays routine society maintenance fees, municipal water/property taxes, electricity, and major structural repairs to prevent future disputes.'
      },
      {
        q: 'What details are needed to start drafting a rental agreement?',
        a: 'We require names, government ID details, and permanent addresses of the landlord and tenant, exact property address, monthly rent amount, security deposit figure, lease start date, lock-in duration, and notice period duration.'
      },
      {
        q: 'Do you provide guidance on stamp duty and e-registration?',
        a: 'Yes, alongside your custom-drafted agreement, we provide procedural guidance outlining the applicable stamp duty calculation and registration steps required in your jurisdiction.'
      },
      {
        q: 'Can custom clauses like pet permissions or co-working usage be added?',
        a: 'Absolutely. During our initial requirement review, you can specify any bespoke clauses including pet policies, commercial usage permissions, subletting restrictions, or painting restoration terms.'
      }
    ],
    cta: {
      eyebrow: 'PROPERTY DOCUMENTATION',
      headline: 'Ensure Your Lease is Legally Sound Before Signing.',
      desc: 'Protect your rental property investments and tenancy rights with precision-drafted lease agreements tailored to your specific terms.',
      primaryText: 'Book a Consultation',
      secondaryText: 'Explore All Services'
    }
  },

  'affidavits': {
    id: 'affidavits',
    title: 'Affidavits & Declarations',
    category: 'Personal Documents',
    categorySlug: 'personal',
    badge: 'Essential Service',
    turnaround: 'Same-Day / 24 Hours',
    shortDesc: 'Assistance with preparing affidavits, declarations and supporting legal documents.',
    detailedDesc: 'Affidavits and sworn declarations are formal legal instruments executed under oath for statutory bodies, municipal boards, passport agencies, universities, and commercial entities. LegalEase assists individuals and families with drafting precise, legally admissible declarations that conform strictly to court and statutory verification guidelines, eliminating procedural rejections.',
    heroImage: 'assets/images/use-case-family.jpg',
    overviewImage: 'assets/images/about-hero-female-attorney.jpg',
    overviewPoints: [
      'Comprehensive formats compliant with Indian Oaths Act and statutory authorities',
      'Precise affirmations covering identity discrepancies, address verification, and lost documents',
      'Structured annexures and identity cross-verification protocols',
      'Clear guidance on non-judicial stamp paper denominations and notary public attestation'
    ],
    statutoryNotice: 'Drafted in strict conformity with statutory swearing standards and verification guidelines.',
    features: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: 'Name Discrepancy & Change',
        desc: 'Legally vetted declarations for minor name spelling differences, official name change notifications, and maiden-to-married name updates.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        title: 'Address & Domicile Affidavits',
        desc: 'Formal residential verifications acceptable for utility connections, regional government IDs, and civil department verifications.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        title: 'Lost Document Declarations',
        desc: 'Sworn statements detailing lost educational mark sheets, stock certificates, vehicle RC books, or title deeds for duplicate reissue.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: 'Succession & Family Declarations',
        desc: 'No-Objection Certificates (NOC), legal heir affirmations, and family consent declarations for banking transfers and estate transitions.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>',
        title: 'Financial & Gap Year Affidavits',
        desc: 'Declarations for university study breaks, employment gaps, income status, and loan application verifications.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        title: 'Notary & Stamping Instructions',
        desc: 'Complete advisory on required non-judicial stamp paper value and notary attestation protocols.'
      }
    ],
    processSteps: [
      {
        num: '01',
        title: 'Submit Your Requirement',
        desc: 'Specify the purpose of the declaration, relevant authority requirements, and provide factual details under oath.'
      },
      {
        num: '02',
        title: 'Initial Consultation',
        desc: 'Our specialist reviews the statutory context, verifying dates, names, and formal verification clauses required.'
      },
      {
        num: '03',
        title: 'Document Preparation',
        desc: 'We draft the complete affidavit using standard legal formatting, affirmative clauses, and solemn verification text.'
      },
      {
        num: '04',
        title: 'Review & Delivery',
        desc: 'Receive your finalized document draft along with precise instructions on stamp paper printing and notary public swearing.'
      }
    ],
    pricingPlans: [
      {
        name: 'Basic Assistance',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Single standard declaration for personal name change, gap year, or address affirmation.',
        features: [
          'Standard Personal Declaration Draft',
          'Statutory oath & verification format',
          'Notary readiness checklist',
          'Digital delivery within 12-24h',
          '1 Round of document refinements'
        ],
        ctaText: 'Request Assistance'
      },
      {
        name: 'Professional Support',
        badge: 'RECOMMENDED PLAN',
        isRecommended: true,
        priceLabel: 'Request a Quote',
        desc: 'Multiple or specialized declarations such as legal heir NOCs, passport discrepancy, or lost property deeds.',
        features: [
          'Complex Legal Affidavit Drafting',
          'Dual party / Multiple deponent structure',
          'Cross-referencing supporting annexures',
          'Stamp duty & attestation advisory',
          'Express same-day drafting priority',
          'Dedicated procedural consultation'
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Business Documentation',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Corporate director declarations, statutory compliance undertakings, and tender affidavits.',
        features: [
          'Corporate Board & Director Declarations',
          'Statutory regulatory compliance formats',
          'Vendor/Tender bidding affidavits',
          'Indemnity clause integration',
          'Priority turnaround & consultation',
          'Multiple department copy formatting'
        ],
        ctaText: 'Request Corporate Quote'
      }
    ],
    faqs: [
      {
        q: 'What makes an affidavit legally valid and admissible?',
        a: 'An affidavit must contain truthful statements made under oath, clear deponent identification, a structured affirmative body, and a formal verification clause. It must be printed on non-judicial stamp paper of appropriate value and sworn before an authorized Notary Public or Oath Commissioner.'
      },
      {
        q: 'Can you assist with minor spelling differences in official government records?',
        a: 'Yes, "One and the Same Person" affidavits are one of our core specialties. We draft detailed sworn statements linking variant spellings across passports, school certificates, PAN cards, and Aadhaar records.'
      },
      {
        q: 'How fast can I receive an affidavit draft?',
        a: 'Standard personal affidavits are drafted within 12 to 24 hours. Express priority support provides draft readiness within hours after requirement intake.'
      },
      {
        q: 'Do I need to visit an office to prepare an affidavit?',
        a: 'No. All draft preparation, clause review, and consultation is handled digitally. Once the draft is approved, you simply print it on stamp paper and visit any local notary public for execution.'
      },
      {
        q: 'What is the required stamp paper value for an affidavit?',
        a: 'Stamp duty requirements vary by state and document purpose (commonly ₹10, ₹20, ₹50, or ₹100). We provide exact jurisdiction-specific stamp duty guidance with every draft.'
      }
    ],
    cta: {
      eyebrow: 'STATUTORY ASSISTANCE',
      headline: 'Need a Formal Sworn Declaration Drafted with Precision?',
      desc: 'Avoid procedural delays and statutory rejections with legally formatted affidavits prepared by our documentation specialists.',
      primaryText: 'Book a Consultation',
      secondaryText: 'Explore All Services'
    }
  },

  'business-registration': {
    id: 'business-registration',
    title: 'Business Registration Assistance',
    category: 'Business Documents',
    categorySlug: 'business',
    badge: 'High Demand',
    turnaround: '48–72 Hours',
    shortDesc: 'Documentation support for business formation, registration and related formalities.',
    detailedDesc: 'Launching or structuring a business requires comprehensive legal paperwork from founding deeds to regulatory filings. LegalEase assists entrepreneurs, partnerships, and emerging enterprises with structured drafting of founding agreements, partnership deeds, MOAs, AOAs, and formal declarations, ensuring corporate governance is solid from day one.',
    heroImage: 'assets/images/use-case-startup.jpg',
    overviewImage: 'assets/images/use-case-business.jpg',
    overviewPoints: [
      'Comprehensive founding documents for Sole Proprietorships, Partnerships, and LLPs',
      'Robust partnership deeds with capital contribution, profit sharing, and retirement terms',
      'Standardized founder vesting agreements, equity allocation, and NDA protection',
      'Step-by-step procedural checklists for statutory registration bodies'
    ],
    statutoryNotice: 'Prepared in alignment with Partnership Acts, Companies Act guidelines, and commercial standards.',
    features: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
        title: 'Partnership Deeds & LLPs',
        desc: 'Comprehensive drafting covering partner duties, profit ratios, drawing limits, dispute mechanics, and dissolution rules.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        title: 'Founder & Co-Founder Agreements',
        desc: 'Critical founding contracts establishing equity vesting schedules, intellectual property assignment, and non-compete clauses.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        title: 'Non-Disclosure Agreements (NDA)',
        desc: 'Bilateral and unilateral NDAs safeguarding proprietary ideas, business plans, financials, and client databases.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: 'Commercial Lease & Office Mandates',
        desc: 'Documentation for registered business office locations, no-objection certificates from landlords, and utility mandates.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>',
        title: 'Board Resolutions & Authorizations',
        desc: 'Formal corporate resolution templates for bank account opening, GST registration, and officer appointments.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: 'Statutory Filing Checklists',
        desc: 'Organized requirement manifests ensuring all director KYC, proof of identity, and domicile documents match filing expectations.'
      }
    ],
    processSteps: [
      {
        num: '01',
        title: 'Submit Your Requirement',
        desc: 'Provide your business structure, proposed company name, partner ratios, capital contributions, and operational objectives.'
      },
      {
        num: '02',
        title: 'Initial Consultation',
        desc: 'Our commercial documentation specialist reviews your structure, advises on clause requirements, and outlines registration steps.'
      },
      {
        num: '03',
        title: 'Document Preparation',
        desc: 'We draft the complete documentation package, ensuring governance terms, share allocation, and statutory clauses are rigorous.'
      },
      {
        num: '04',
        title: 'Review & Delivery',
        desc: 'Receive the complete documentation suite with step-by-step registration roadmaps and notary/stamping instructions.'
      }
    ],
    pricingPlans: [
      {
        name: 'Basic Assistance',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Foundational paperwork for sole proprietorships or standard 2-partner deeds.',
        features: [
          'Standard Partnership Deed drafting',
          'Landlord NOC & business address format',
          'Bank resolution template',
          'Digital draft delivery within 48h',
          '1 Round of clause refinements'
        ],
        ctaText: 'Request Assistance'
      },
      {
        name: 'Professional Support',
        badge: 'RECOMMENDED PLAN',
        isRecommended: true,
        priceLabel: 'Request a Quote',
        desc: 'Comprehensive package for emerging startups, multi-partner LLPs, or co-founders.',
        features: [
          'Custom Multi-Partner Deed / LLP Agreement',
          'Founder Vesting & Equity allocation terms',
          'Mutual Non-Disclosure Agreement (NDA)',
          'Board resolution & authorization suite',
          'Registration procedure roadmap',
          'Priority turnaround & 2 revision rounds'
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Business Documentation',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Full corporate documentation suite for expanding businesses, private entities, and joint ventures.',
        features: [
          'Full Commercial Entity Contract Suite',
          'Vendor Master Services Agreement (MSA)',
          'Independent Contractor & Employment Agreements',
          'IP Assignment & Non-Compete contracts',
          'Dedicated senior corporate advisor support',
          'Comprehensive pre-filing consultation'
        ],
        ctaText: 'Request Corporate Quote'
      }
    ],
    faqs: [
      {
        q: 'Why is a well-drafted Partnership Deed essential before commencing business?',
        a: 'A registered Partnership Deed establishes the legal existence of the partnership and formally governs profit sharing, capital contribution, partner duties, decision-making thresholds, and exit mechanisms. Without a written agreement, statutory default rules apply, which often lead to deadlock in disputes.'
      },
      {
        q: 'What is included in a Founder Agreement?',
        a: 'A Founder Agreement details equity ownership, milestone-based vesting schedules (e.g. 4-year vesting with a 1-year cliff), role designations, IP assignment to the entity, and buy-back options if a founder departs early.'
      },
      {
        q: 'Can you draft documents required for GST and bank account opening?',
        a: 'Yes. We prepare standard board resolutions, partner authorization letters, rent agreements, and landlord NOCs formatted to the precise requirements of commercial banks and tax authorities.'
      },
      {
        q: 'What is the turnaround time for a complete business agreement suite?',
        a: 'Standard partnership deeds are completed in 48 hours. Comprehensive corporate founder suites are typically finalized within 48 to 72 hours, including dedicated review consultation.'
      },
      {
        q: 'Does LegalEase represent businesses in court for disputes?',
        a: 'No. LegalEase provides non-litigation documentation, agreement drafting, and procedural consultation support. We focus on preventive drafting so your documents protect your enterprise before disputes arise.'
      }
    ],
    cta: {
      eyebrow: 'COMMERCIAL ADVISORY',
      headline: 'Build Your Enterprise on Strong Legal Foundations.',
      desc: 'Ensure your business partnerships and corporate assets are safeguarded with meticulously drafted founding documents and commercial contracts.',
      primaryText: 'Book a Consultation',
      secondaryText: 'Explore All Services'
    }
  },

  'legal-notices': {
    id: 'legal-notices',
    title: 'Legal Notice Drafting',
    category: 'Legal Drafting',
    categorySlug: 'drafting',
    badge: 'Procedural Precision',
    turnaround: '24–48 Hours',
    shortDesc: 'Assistance with preparing structured legal notices and formal communications.',
    detailedDesc: 'A legal notice serves as the formal statutory precursor to dispute resolution and litigation. It articulates facts, defines legal rights, identifies breaches, and provides the recipient with a defined cure period to remedy the grievance. LegalEase prepares structured, unambiguous legal notice drafts and formal responses that state your claims with complete legal rigor and procedural precision.',
    heroImage: 'assets/images/how-it-works-process.jpg',
    overviewImage: 'assets/images/about-hero-contract-signing.jpg',
    overviewPoints: [
      'Chronological, factual articulation of claims with supporting evidence references',
      'Clear identification of contractual breaches, statutory violations, and liability terms',
      'Unambiguous remediation demands with definitive response timelines (e.g., 15 or 30 days)',
      'Drafts suitable for recovery of dues, breach of lease, consumer disputes, and vendor defaults'
    ],
    statutoryNotice: 'Prepared as formal pre-litigation notifications in conformity with civil procedure codes.',
    features: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
        title: 'Payment Recovery Notices',
        desc: 'Formal demand notices for unpaid invoices, salary dues, security deposit refunds, and defaulted commercial debt.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        title: 'Tenancy & Eviction Notices',
        desc: 'Statutory lease termination notices citing non-payment of rent, unauthorized subletting, or end-of-tenancy vacation demands.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        title: 'Breach of Contract Demands',
        desc: 'Formal notices notifying counterparties of specific covenant violations, failure of milestone delivery, or confidentiality breaches.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        title: 'Consumer Complaint Notices',
        desc: 'Pre-litigation grievance notices addressed to builders, service providers, e-commerce platforms, or insurance companies for deficiency of service.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: 'Structured Reply to Notices',
        desc: 'Rebuttal drafting addressing received legal notices, denying false allegations, and articulating counter-positions.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>',
        title: 'Dispatch & Delivery Advisory',
        desc: 'Guidance on Registered Post A.D. requirements, speed post tracking records, and legal proof of service maintenance.'
      }
    ],
    processSteps: [
      {
        num: '01',
        title: 'Submit Your Requirement',
        desc: 'Provide background details, timeline of events, transaction receipts, agreements, and specific remediation sought.'
      },
      {
        num: '02',
        title: 'Initial Consultation',
        desc: 'Our legal drafting specialist assesses contractual obligations, verifies evidence, and establishes cause of action.'
      },
      {
        num: '03',
        title: 'Document Preparation',
        desc: 'We draft the complete legal notice with chronological facts, applicable legal references, and clear cure demands.'
      },
      {
        num: '04',
        title: 'Review & Delivery',
        desc: 'Review the finalized draft, receive our dispatch checklist (Speed Post / Registered A.D.), and proceed with service.'
      }
    ],
    pricingPlans: [
      {
        name: 'Basic Assistance',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Standard notice drafting for consumer grievances, security deposit refund, or simple monetary demands.',
        features: [
          'Standard Legal Notice Draft',
          'Chronological factual timeline',
          '15-Day cure period clause',
          'Dispatch instructions checklist',
          'Digital draft delivery within 24h',
          '1 Round of factual revisions'
        ],
        ctaText: 'Request Assistance'
      },
      {
        name: 'Professional Support',
        badge: 'RECOMMENDED PLAN',
        isRecommended: true,
        priceLabel: 'Request a Quote',
        desc: 'Complex breach of contract, property eviction, or commercial invoice default notices.',
        features: [
          'Detailed Commercial / Tenancy Notice',
          'Citing contractual covenants & breach terms',
          'Multi-party notice addressing',
          'Evidence documentation annexure structuring',
          'Priority 24h drafting turnaround',
          '2 Revision rounds with dedicated review'
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Business Documentation',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Corporate dispute notices, formal reply to legal demands, or high-value commercial recovery.',
        features: [
          'Comprehensive Corporate Legal Notice / Reply',
          'In-depth contractual risk analysis',
          'Counter-claim & set-off structuring',
          'Executive consultation session',
          'Same-day priority processing',
          'Comprehensive pre-litigation documentation package'
        ],
        ctaText: 'Request Corporate Quote'
      }
    ],
    faqs: [
      {
        q: 'What is the purpose of serving a formal Legal Notice?',
        a: 'A legal notice gives the opposing party formal written notification of your grievance and affords them an opportunity to resolve the matter amicably within a specified timeframe (typically 15 to 30 days) before formal litigation or arbitration is initiated.'
      },
      {
        q: 'How should a legal notice be sent to the recipient?',
        a: 'It is best practice to send a legal notice via Registered Post with Acknowledgement Due (RPAD) or Speed Post, while also emailing a digital copy. Retaining the post office receipt and delivery tracking report serves as proof of service in subsequent proceedings.'
      },
      {
        q: 'What should I do if I have received a legal notice?',
        a: 'Do not ignore a legal notice. We assist recipients with evaluating the claims made, identifying factual discrepancies, and drafting a structured, legally sound formal reply within the stipulated deadline.'
      },
      {
        q: 'Can a legal notice be sent for unpaid freelance or consulting invoices?',
        a: 'Yes. Outstanding professional fee recovery is one of the most common reasons for sending a legal notice. We structure the notice around the underlying service contract, purchase orders, email approvals, and submitted invoices.'
      },
      {
        q: 'Does LegalEase file court cases if the notice is not answered?',
        a: 'No. LegalEase provides non-litigation drafting and documentation assistance. If an opposing party fails to comply with the notice, you may take the drafted notice and proof of delivery to a practicing advocate to initiate court proceedings.'
      }
    ],
    cta: {
      eyebrow: 'LEGAL DRAFTING',
      headline: 'State Your Position with Professional Legal Rigor.',
      desc: 'Communicate your formal grievances clearly and command the respect your documentation deserves with professionally drafted legal notices.',
      primaryText: 'Book a Consultation',
      secondaryText: 'Explore All Services'
    }
  },

  'sale-deeds': {
    id: 'sale-deeds',
    title: 'Sale Deeds & Property Documents',
    category: 'Property Documents',
    categorySlug: 'property',
    badge: 'High Value',
    turnaround: '48–72 Hours',
    shortDesc: 'Documentation assistance for property transactions, sale deeds and related agreements.',
    detailedDesc: 'Property transactions represent significant financial commitments where ambiguous wording or defective title recitals can cause prolonged legal disputes. LegalEase assists buyers, sellers, and family offices with meticulous drafting of Sale Deeds, Agreements to Sell, Conveyance Deeds, and Gift Deeds, ensuring comprehensive title recital tracking and clean transfer of ownership.',
    heroImage: 'assets/images/hero-2-desk.jpg',
    overviewImage: 'assets/images/about-hero-lawyers-collab.jpg',
    overviewPoints: [
      'Comprehensive title recital tracing and previous link deed documentation',
      'Clear, unencumbered ownership transfer covenants and indemnity clauses',
      'Accurate schedule of property detailing survey numbers, boundaries, and measurements',
      'Guidance on sub-registrar execution, witness protocols, and stamp duty requirements'
    ],
    statutoryNotice: 'Drafted in conformity with the Transfer of Property Act and Registration Acts.',
    features: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        title: 'Agreement to Sell (ATS)',
        desc: 'Preliminary contract establishing earnest money token, payment schedules, title verification conditions, and closing timelines.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        title: 'Absolute Sale Deeds',
        desc: 'Formal conveyance deeds effecting complete transfer of title, ownership rights, and physical/symbolic possession.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        title: 'Title Recital Tracing',
        desc: 'Detailed chronological documentation of property ownership lineage through prior sale deeds, inheritance, or allotments.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        title: 'Encumbrance Indemnity',
        desc: 'Rigorous vendor indemnity clauses guaranteeing that the property is free from mortgages, charges, litigation, and tax liens.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: 'Gift & Relinquishment Deeds',
        desc: 'Family property transfer deeds including absolute gift deeds, co-owner release deeds, and ancestral partition documents.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>',
        title: 'Registration Checklist',
        desc: 'Detailed documentation checklist covering Khata transfer, property tax receipts, encumbrance certificates, and registrar fees.'
      }
    ],
    processSteps: [
      {
        num: '01',
        title: 'Submit Your Requirement',
        desc: 'Provide details on property type (plot, flat, commercial), prior link deeds, agreed consideration, and party details.'
      },
      {
        num: '02',
        title: 'Initial Consultation',
        desc: 'Our real estate documentation specialist inspects title history, confirms boundary schedules, and identifies required clauses.'
      },
      {
        num: '03',
        title: 'Document Preparation',
        desc: 'We draft the complete Sale Deed or Agreement to Sell, ensuring all legal protections, payment milestones, and covenants are solid.'
      },
      {
        num: '04',
        title: 'Review & Delivery',
        desc: 'Review the draft with all parties. Receive final print-ready documentation along with the sub-registrar execution checklist.'
      }
    ],
    pricingPlans: [
      {
        name: 'Basic Assistance',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Agreement to Sell (ATS) drafting for straightforward residential apartment or plot sale.',
        features: [
          'Standard Agreement to Sell (ATS) Draft',
          'Payment milestone structuring',
          'Token forfeiture & default clauses',
          'Digital draft delivery within 48h',
          '1 Round of minor refinements'
        ],
        ctaText: 'Request Assistance'
      },
      {
        name: 'Professional Support',
        badge: 'RECOMMENDED PLAN',
        isRecommended: true,
        priceLabel: 'Request a Quote',
        desc: 'Complete Absolute Sale Deed or Gift Deed drafting with comprehensive title recital tracing.',
        features: [
          'Full Absolute Sale Deed / Gift Deed Draft',
          'Extensive 30-year link deed title tracing',
          'Comprehensive vendor indemnity clauses',
          'Detailed Schedule of Property with boundaries',
          'Sub-registrar filing checklist & stamp guide',
          'Dedicated consultation & 2 revision rounds'
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Business Documentation',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'High-value commercial property conveyance, multi-unit developer contracts, or agricultural conversions.',
        features: [
          'Complex Commercial Property Deed',
          'Multi-party, corporate entity vendor structures',
          'Detailed zoning, easement, & NOC recitals',
          'Escrow & possession handover covenants',
          'Senior property documentation counsel',
          'Unlimited pre-registration refinements'
        ],
        ctaText: 'Request Corporate Quote'
      }
    ],
    faqs: [
      {
        q: 'What is the distinction between an Agreement to Sell and a Sale Deed?',
        a: 'An Agreement to Sell is an executory contract committing the buyer and seller to complete the transaction upon fulfillment of agreed conditions (such as bank loan approval or clear title). A Sale Deed is the actual conveyance instrument that transfers absolute ownership rights and must be registered.'
      },
      {
        q: 'Why are title recitals critical in a Sale Deed?',
        a: 'Title recitals establish the chain of ownership. They trace how the seller acquired the property from prior owners, establishing legal right, title, and authority to sell. Any gap in title recitals can cause difficulty when securing bank mortgages or reselling.'
      },
      {
        q: 'What is the Schedule of Property?',
        a: 'The Schedule of Property is the exact legal description of the real estate, including survey/khasra numbers, municipal door numbers, plot dimensions, total square footage, and boundary demarcations on all four compass sides.'
      },
      {
        q: 'Can a Gift Deed be cancelled after registration?',
        a: 'Generally, an absolute Gift Deed executed voluntarily and accepted by the donee cannot be unilaterally revoked, unless specific statutory conditions or conditional clauses were validly incorporated. We draft gift deeds to ensure family intentions are unassailable.'
      },
      {
        q: 'What documents are required to prepare a Sale Deed draft?',
        a: 'We require copies of the seller\'s title deed, latest encumbrance certificate (EC), property tax paid receipts, approved building plan or conversion order, Khata certificate, and government identity cards of all buyers and sellers.'
      }
    ],
    cta: {
      eyebrow: 'PROPERTY TRANSACTIONS',
      headline: 'Secure Your Property Ownership with Clean Legal Conveyance.',
      desc: 'Ensure your real estate deeds are drafted with complete procedural diligence, unambiguous title recitals, and robust indemnity protection.',
      primaryText: 'Book a Consultation',
      secondaryText: 'Explore All Services'
    }
  },

  'indemnity-bonds': {
    id: 'indemnity-bonds',
    title: 'Indemnity Bonds & Undertakings',
    category: 'Legal Drafting',
    categorySlug: 'drafting',
    badge: 'Risk Mitigation',
    turnaround: '24–48 Hours',
    shortDesc: 'Preparation assistance for indemnity bonds, undertakings and related declarations.',
    detailedDesc: 'An indemnity bond is an enforceable legal commitment wherein one party promises to protect, hold harmless, and compensate another against foreseeable financial loss, statutory liabilities, or procedural damages. LegalEase assists individuals, contractors, and corporate institutions with drafting custom indemnity deeds, surety undertakings, and bank clearance bonds conforming to standard statutory criteria.',
    heroImage: 'assets/images/why-choose-consultation.jpg',
    overviewImage: 'assets/images/about-hero-client-meeting.jpg',
    overviewPoints: [
      'Comprehensive hold-harmless covenants defining liability triggers and compensation limits',
      'Surety and guarantor integration for financial and institutional requirements',
      'Format templates aligned with banking, municipal, and commercial compliance standards',
      'Clear advisory on stamp duty denominations and formal witness execution'
    ],
    statutoryNotice: 'Drafted in conformity with Section 124 of the Indian Contract Act and corporate standards.',
    features: [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        title: 'Banking & Financial Indemnities',
        desc: 'Bonds for transmission of deceased customer funds without probate, lost demand drafts, and duplicate fixed deposit receipts.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        title: 'Property Transfer Undertakings',
        desc: 'Indemnity bonds submitted to municipal corporations, electricity boards, and housing societies for name transfer on utility records.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
        title: 'Commercial Contractor Indemnities',
        desc: 'Contractual liability shields indemnifying project principals against subcontractor negligence, workplace accidents, or tax defaults.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        title: 'Duplicate Certificate Bonds',
        desc: 'Undertakings required by universities, corporate registrars, and RTOs before issuing duplicate marksheets, shares, or vehicle titles.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        title: 'Surety & Guarantor Integration',
        desc: 'Structured co-signatory provisions integrating independent guarantors to satisfy institutional security standards.'
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>',
        title: 'Stamp Duty & Execution Guidance',
        desc: 'Guidance on state non-judicial stamp paper valuation, notary public attestation, and signature verification procedures.'
      }
    ],
    processSteps: [
      {
        num: '01',
        title: 'Submit Your Requirement',
        desc: 'Share the requesting authority\'s notice, financial amount involved, reason for indemnity, and guarantor details.'
      },
      {
        num: '02',
        title: 'Initial Consultation',
        desc: 'Our specialist reviews the specific institutional format requirements and defines clear indemnification obligations.'
      },
      {
        num: '03',
        title: 'Document Preparation',
        desc: 'We draft the complete Indemnity Bond with enforceable hold-harmless covenants, recitals, and guarantor execution sections.'
      },
      {
        num: '04',
        title: 'Review & Delivery',
        desc: 'Receive the final draft with clear stamp paper purchasing guidelines, notary instructions, and submission protocols.'
      }
    ],
    pricingPlans: [
      {
        name: 'Basic Assistance',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Standard indemnity bond for municipal electricity meter transfer, duplicate marksheet, or society transfer.',
        features: [
          'Standard Individual Indemnity Bond',
          'Single deponent / obligor structure',
          'Notary readiness checklist',
          'Digital draft delivery within 24h',
          '1 Round of minor refinements'
        ],
        ctaText: 'Request Assistance'
      },
      {
        name: 'Professional Support',
        badge: 'RECOMMENDED PLAN',
        isRecommended: true,
        priceLabel: 'Request a Quote',
        desc: 'Bank account transmission without probate, lost share certificate, or multi-guarantor indemnity bonds.',
        features: [
          'Complex Banking / Financial Indemnity Bond',
          'Surety & Co-guarantor clause structuring',
          'Annexure integration for financial details',
          'Stamp duty valuation & attestation roadmap',
          'Priority 24h drafting turnaround',
          'Dedicated consultation & 2 revision rounds'
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Business Documentation',
        badge: '',
        isRecommended: false,
        priceLabel: 'Contact for Pricing',
        desc: 'Commercial vendor indemnities, tender undertakings, and corporate cross-indemnification deeds.',
        features: [
          'Full Commercial Entity Indemnity Deed',
          'Comprehensive risk allocation & liability caps',
          'Mutual indemnification covenants',
          'Corporate authorization & seal formatting',
          'Senior commercial documentation counsel',
          'Comprehensive pre-execution consultation'
        ],
        ctaText: 'Request Corporate Quote'
      }
    ],
    faqs: [
      {
        q: 'What is an Indemnity Bond and when is it required?',
        a: 'An indemnity bond is a formal legal agreement where one party (the indemnifier) promises to compensate another party (the indemnified) for any financial loss or damage incurred. It is commonly required by banks when releasing deceased funds without probate, or by municipal authorities during property tax and utility name transfers.'
      },
      {
        q: 'Why do banks ask for a surety or guarantor in an indemnity bond?',
        a: 'A surety guarantees that if the primary claimant turns out to have falsely claimed funds or if another legitimate heir emerges with a dispute, the surety will be jointly and severally liable to reimburse the bank for any resulting financial loss.'
      },
      {
        q: 'What stamp paper value is required for an indemnity bond?',
        a: 'Stamp duty for indemnity bonds varies by state stamp enactments and may either be a fixed amount (e.g. ₹100, ₹200, ₹500) or an ad-valorem percentage of the indemnified value. We calculate and specify the exact stamp paper value required in your jurisdiction.'
      },
      {
        q: 'Does an indemnity bond require notarization or registration?',
        a: 'Most institutional and banking indemnity bonds require notarization by a Notary Public. Certain property-related indemnity deeds may additionally require sub-registrar registration depending on regional state rules.'
      },
      {
        q: 'How quickly can LegalEase draft an institutional indemnity bond?',
        a: 'Standard bank and municipal indemnity bonds are drafted within 24 hours. Complex corporate multi-surety bonds are finalized within 24 to 48 hours.'
      }
    ],
    cta: {
      eyebrow: 'RISK MITIGATION',
      headline: 'Protect Your Transactions with Enforceable Legal Indemnities.',
      desc: 'Ensure your undertakings and indemnity bonds are drafted with rigorous statutory covenants and institutional compliance.',
      primaryText: 'Book a Consultation',
      secondaryText: 'Explore All Services'
    }
  }
};
