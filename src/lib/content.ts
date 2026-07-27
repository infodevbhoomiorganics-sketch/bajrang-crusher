import {
  Truck,
  ShieldCheck,
  Clock,
  BadgeIndianRupee,
  MapPin,
  Award,
  Wrench,
  Users,
  Sparkles,
  Boxes,
  Gauge,
  HardHat,
  Mountain,
  Layers,
  Route,
  Building2,
  TreePine,
  Hammer,
  Factory,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ============ IMAGES ============
export const IMG = {
  heroCrusher: "/hero-crusher.png",
  modernPlant: "/modern-plant.png",
  plantWide: "/plant-wide.png",
  hopper: "/hopper.png",
  quarry: "/quarry.png",
} as const;

// ============ BUSINESS ============
export const PHONE = "+919736000077";
export const DISPLAY_PHONE = "+91 97360 00077";
export const ADDRESS = "22MQ+GM3, Kandaghat, Himachal Pradesh 173222";
export const COMPANY = "Bajrang Stone Crusher & Bajrang Constructions";
export const SHORT_COMPANY = "Bajrang Stone Crusher";

export const serviceAreas = [
  "Kandaghat", "Solan", "Shimla", "Dharampur", "Parwanoo",
  "Baddi", "Nalagarh", "Sirmaur", "Kalka", "Chail", "Kufri",
];

// ============ PRODUCTS ============
export type Product = {
  id: string;
  name: string;
  short: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  applications: string[];
  sizes?: string;
  image: string;
  category: "sand" | "aggregates" | "pebbles";
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    id: "construction-sand",
    name: "Construction Sand",
    short: "Premium river sand for building & plastering",
    description:
      "Clean, finely graded construction sand ideal for masonry, plastering and concrete work. Washed and screened for consistent quality.",
    longDescription:
      "Our construction sand is extracted and processed at our Kandaghat crusher site to deliver a clean, uniformly graded sand suited to the demands of modern construction. Each batch is screened to remove oversized particles and organic impurities, producing a reliable sand that bonds well with cement for plastering, masonry and general concrete work. Builders across Solan and the wider Himachal Pradesh region rely on this sand for residential homes, commercial structures and infrastructure projects where consistent grading matters.",
    features: ["River-graded", "Low silt content", "Plaster & concrete ready", "Screened for impurities"],
    benefits: [
      "Stronger cement bonding for durable structures",
      "Smooth, crack-resistant plaster finishes",
      "Consistent grading reduces wastage on site",
      "Suitable for manual and machine mixing",
    ],
    applications: ["Masonry work", "Plastering", "Concrete mixing", "Tile fixing base", "Bricklaying"],
    sizes: "Fine to medium grade",
    image: IMG.heroCrusher,
    category: "sand",
    faqs: [
      { q: "Is your construction sand suitable for plastering?", a: "Yes. Our sand is screened to a fine, uniform grade that produces smooth, crack-resistant plaster finishes." },
      { q: "Do you supply construction sand in bulk?", a: "Yes, we supply bulk quantities to projects across Kandaghat, Solan and nearby Himachal regions. Share your required quantity on WhatsApp for a quotation." },
      { q: "How is the sand delivered?", a: "We deliver by truck directly to your construction site. Delivery availability depends on your location and order size." },
    ],
  },
  {
    id: "washed-sand",
    name: "Washed Sand",
    short: "Silt-free washed sand for high-strength mixes",
    description:
      "Thoroughly washed to remove silt and impurities, producing a bright, clean sand suited for high-strength concrete and finishing work.",
    longDescription:
      "Washed sand undergoes an additional washing process at our plant to remove silt, clay and fine dust, resulting in a bright, clean sand that meets higher strength and finish requirements. It is the preferred choice for structural concrete, exposed finishes and applications where silt content must be kept to a minimum. Our washed sand is regularly used by contractors and builders across Himachal Pradesh for RCC work, flooring and premium finishing layers.",
    features: ["Silt-free", "Bright finish", "High-strength mixes", "Low clay content"],
    benefits: [
      "Higher concrete compressive strength",
      "Brighter, cleaner surface finish",
      "Reduced shrinkage and cracking",
      "Ideal for RCC and exposed concrete",
    ],
    applications: ["RCC concrete", "Flooring", "Exposed aggregate finishes", "Premium plastering", "Precast products"],
    sizes: "Fine, washed grade",
    image: IMG.modernPlant,
    category: "sand",
    faqs: [
      { q: "What is the difference between washed sand and construction sand?", a: "Washed sand goes through an extra washing stage to remove silt and dust, making it cleaner and better suited to high-strength concrete and premium finishes." },
      { q: "Can I use washed sand for RCC work?", a: "Yes, washed sand is ideal for reinforced cement concrete because of its low silt content and consistent grading." },
      { q: "Do you deliver washed sand to Solan and Shimla?", a: "Yes, we deliver across Kandaghat, Solan, Shimla and surrounding areas. Message us on WhatsApp with your location to confirm availability." },
    ],
  },
  {
    id: "raw-sand",
    name: "Raw Sand",
    short: "Natural raw sand straight from the source",
    description:
      "Unprocessed raw sand extracted directly from our crusher site, an economical choice for bulk fills, leveling and base layers.",
    longDescription:
      "Raw sand is extracted directly from our Kandaghat crusher site without additional processing, offering an economical option for bulk fills, leveling layers and non-structural applications. It retains its natural grading and is commonly used under foundations, for backfilling and for creating level bases before laying structural layers. Contractors handling large earthworks and infrastructure projects across Himachal Pradesh use raw sand as a cost-effective fill material.",
    features: ["Economical bulk fill", "Natural grading", "Base layer ready", "Direct from crusher"],
    benefits: [
      "Lower cost for large-volume fills",
      "Natural compaction characteristics",
      "Ideal for leveling and backfill",
      "Available in bulk quantities",
    ],
    applications: ["Bulk filling", "Leveling", "Backfilling", "Base layers", "Earthworks"],
    sizes: "Unprocessed natural grade",
    image: IMG.plantWide,
    category: "sand",
    faqs: [
      { q: "What is raw sand used for?", a: "Raw sand is used for bulk filling, leveling, backfilling and base layers where structural strength is not required." },
      { q: "Is raw sand cheaper than washed sand?", a: "Yes, because it skips the washing and screening stages, raw sand is a more economical option for non-structural use." },
    ],
  },
  {
    id: "pebble-stones",
    name: "Pebble Stones",
    short: "Smooth decorative pebbles for landscaping",
    description:
      "Naturally rounded pebble stones perfect for landscaping, drainage, garden paths and decorative facades. Available in multiple sizes.",
    longDescription:
      "Our pebble stones are naturally rounded stones collected and sorted at our Kandaghat site. Their smooth surfaces and natural colours make them a popular choice for landscaping, garden paths, decorative facades, drainage layers and water features. We supply pebbles in multiple sizes to suit both functional drainage applications and decorative surface treatments across residential, commercial and landscape projects in Himachal Pradesh.",
    features: ["Decorative", "Drainage friendly", "Multiple sizes", "Naturally rounded"],
    benefits: [
      "Natural aesthetic for landscaping",
      "Excellent drainage properties",
      "Durable and weather-resistant",
      "Low maintenance surface cover",
    ],
    applications: ["Landscaping", "Garden paths", "Drainage layers", "Decorative facades", "Water features"],
    sizes: "10mm – 60mm",
    image: IMG.hopper,
    category: "pebbles",
    faqs: [
      { q: "What sizes of pebble stones do you supply?", a: "We supply pebbles from 10mm up to 60mm. Let us know your preferred size on WhatsApp and we will confirm availability." },
      { q: "Can pebble stones be used for drainage?", a: "Yes, their rounded shape and void space make them effective for drainage layers and filter beds." },
      { q: "Do you deliver pebbles for landscaping projects in Shimla?", a: "Yes, we supply pebbles to landscaping projects across Kandaghat, Solan, Shimla and nearby regions." },
    ],
  },
  {
    id: "crushed-aggregates",
    name: "Crushed Stone Aggregates",
    short: "Strong crushed aggregates for concrete & roads",
    description:
      "Mechanically crushed stone aggregates with sharp, angular edges for superior bonding in structural concrete and road construction.",
    longDescription:
      "Crushed stone aggregates are produced by mechanically breaking down hard stone at our Kandaghat plant. The resulting angular particles interlock and bond strongly with cement, making them essential for structural concrete and road construction. We produce aggregates in multiple graded sizes — 10mm, 20mm and 40mm — to serve residential, commercial, infrastructure and government projects throughout Himachal Pradesh. Every batch is screened for grading consistency.",
    features: ["Angular bonding", "Structural grade", "Road construction ready", "Multiple graded sizes"],
    benefits: [
      "Superior interlocking for stronger concrete",
      "Consistent grading for reliable mix design",
      "Suitable for structural and road applications",
      "Available in 10mm, 20mm and 40mm grades",
    ],
    applications: ["Structural concrete", "Road construction", "Foundation bases", "Drainage layers", "Pavement sub-base"],
    sizes: "10mm, 20mm, 40mm",
    image: IMG.quarry,
    category: "aggregates",
    faqs: [
      { q: "What sizes of crushed aggregates do you produce?", a: "We produce 10mm, 20mm and 40mm graded aggregates for concrete, road and drainage applications." },
      { q: "Which aggregate size is best for RCC?", a: "20mm aggregate is the most popular choice for general RCC work, while 10mm is used for finer structural elements and finishing layers." },
      { q: "Do you supply aggregates for road projects in Himachal?", a: "Yes, we supply aggregates and road base material for road and infrastructure projects across Solan, Kandaghat and surrounding regions." },
    ],
  },
  {
    id: "10mm-aggregate",
    name: "10mm Aggregate",
    short: "Fine 10mm aggregate for RCC & finishing",
    description:
      "Precisely graded 10mm aggregate ideal for reinforced cement concrete, flooring and finishing layers where finer stone is required.",
    longDescription:
      "Our 10mm aggregate is a precisely graded crushed stone used where finer structural concrete and finishing work is needed. It is commonly used in reinforced cement concrete for thinner sections, flooring screeds, precast products and finishing layers. The smaller particle size produces a smoother surface finish while maintaining structural strength, making it a preferred material for residential and commercial builders across Himachal Pradesh.",
    features: ["10mm graded", "RCC suitable", "Flooring ready", "Smooth finish"],
    benefits: [
      "Smooth surface finish for flooring",
      "Better for thinner concrete sections",
      "Reliable bonding in RCC mixes",
      "Consistent grading batch to batch",
    ],
    applications: ["RCC thinner sections", "Flooring screeds", "Precast products", "Finishing layers", "Tile bedding"],
    sizes: "10mm nominal",
    image: IMG.heroCrusher,
    category: "aggregates",
    faqs: [
      { q: "Where is 10mm aggregate typically used?", a: "It is used in thinner RCC sections, flooring screeds, precast products and finishing layers where a smooth finish is required." },
      { q: "Can I order 10mm aggregate in bulk?", a: "Yes, we supply bulk 10mm aggregate to projects across Kandaghat, Solan and nearby regions. Message us on WhatsApp for a quote." },
    ],
  },
  {
    id: "20mm-aggregate",
    name: "20mm Aggregate",
    short: "Versatile 20mm aggregate for structural concrete",
    description:
      "Our most popular aggregate size — 20mm graded stone for general structural concrete, columns, beams and foundation work.",
    longDescription:
      "20mm aggregate is our most widely used graded crushed stone, suited to general structural concrete including columns, beams, slabs and foundations. Its balanced particle size provides excellent interlocking and workability, making it the default choice for most RCC work across residential, commercial and infrastructure projects in Himachal Pradesh. We maintain strict grading consistency so contractors can design concrete mixes with confidence.",
    features: ["20mm graded", "Structural concrete", "Foundation ready", "Most popular grade"],
    benefits: [
      "Excellent workability for structural concrete",
      "Strong interlocking for columns and beams",
      "Reliable foundation performance",
      "Consistent supply in bulk volumes",
    ],
    applications: ["Columns", "Beams", "Slabs", "Foundations", "General RCC work"],
    sizes: "20mm nominal",
    image: IMG.modernPlant,
    category: "aggregates",
    faqs: [
      { q: "Why is 20mm aggregate so popular?", a: "Its balanced size offers excellent workability and strength for general structural concrete, making it the default choice for most RCC work." },
      { q: "Do you deliver 20mm aggregate to Baddi and Nalagarh?", a: "Yes, we deliver to Baddi, Nalagarh and other industrial areas across Himachal Pradesh. Share your location on WhatsApp to confirm." },
    ],
  },
  {
    id: "40mm-aggregate",
    name: "40mm Aggregate",
    short: "Large 40mm aggregate for mass concrete & bases",
    description:
      "Coarse 40mm aggregate engineered for mass concrete works, foundation bases, drainage layers and heavy-duty road sub-base.",
    longDescription:
      "40mm aggregate is our coarsest graded crushed stone, engineered for mass concrete pours, foundation bases, drainage layers and heavy-duty road sub-base construction. The larger particle size reduces cement paste demand in mass concrete and provides excellent void space for drainage. It is widely used in infrastructure and road projects across Himachal Pradesh where large-volume, high-strength bases are required.",
    features: ["40mm graded", "Mass concrete", "Drainage layer", "Road sub-base"],
    benefits: [
      "Reduces cement demand in mass concrete",
      "Excellent void space for drainage",
      "High load-bearing capacity",
      "Ideal for large infrastructure bases",
    ],
    applications: ["Mass concrete", "Foundation bases", "Drainage layers", "Road sub-base", "Heavy-duty fills"],
    sizes: "40mm nominal",
    image: IMG.plantWide,
    category: "aggregates",
    faqs: [
      { q: "What is 40mm aggregate used for?", a: "It is used for mass concrete, foundation bases, drainage layers and road sub-base where larger particles and void space are beneficial." },
      { q: "Can 40mm aggregate be used in RCC?", a: "40mm is generally used for mass concrete and bases rather than standard RCC, where 20mm or 10mm is preferred. We can advise on your specific requirement on WhatsApp." },
    ],
  },
  {
    id: "road-base",
    name: "Road Base Material",
    short: "Compacted road base for highways & pavements",
    description:
      "A balanced mix of aggregates and fines engineered to compact into a stable road base for highways, pavements and access roads.",
    longDescription:
      "Our road base material is a engineered blend of crushed aggregates and fines designed to compact into a dense, stable base for highways, pavements and access roads. The graded mix interlocks under compaction to provide the load-bearing layer between the sub-grade and surface course. We supply road base material to road contractors and infrastructure projects across Solan, Kandaghat and the wider Himachal Pradesh region, in both bulk and project-scale volumes.",
    features: ["Compactable mix", "Highway grade", "Pavement ready", "Engineered blend"],
    benefits: [
      "Dense, stable base after compaction",
      "Engineered grading for road standards",
      "High load-bearing capacity",
      "Available in project-scale volumes",
    ],
    applications: ["Highway bases", "Pavement bases", "Access roads", "Road sub-base", "Infrastructure bases"],
    sizes: "Graded mix",
    image: IMG.hopper,
    category: "aggregates",
    faqs: [
      { q: "What is road base material?", a: "It is a balanced mix of crushed aggregates and fines that compacts into a stable, load-bearing base for roads and pavements." },
      { q: "Do you supply road base for government road projects?", a: "Yes, we supply road base material to road contractors and infrastructure projects across Himachal Pradesh. Contact us on WhatsApp with your project requirements." },
    ],
  },
];

// ============ HERO SLIDES ============
export type HeroSlide = { title: string; subtitle: string; image: string };

export const heroSlides: HeroSlide[] = [
  {
    title: "Stone Crusher Plant in Kandaghat",
    subtitle: "State-of-the-art crushing facility producing premium construction materials in Himachal Pradesh.",
    image: IMG.heroCrusher,
  },
  {
    title: "Live Crusher Operations",
    subtitle: "Wheel loaders and conveyor systems working round the clock on site.",
    image: IMG.modernPlant,
  },
  {
    title: "Heavy-Duty Crushing Machinery",
    subtitle: "Jaw crushers, hoppers and belt conveyors grading stone to specification.",
    image: IMG.hopper,
  },
  {
    title: "Full Plant View",
    subtitle: "Wide-area crusher plant capable of high-volume aggregate production.",
    image: IMG.plantWide,
  },
  {
    title: "Bulk Industrial Supply",
    subtitle: "Reliable bulk supply for contractors, builders and infrastructure projects across Himachal.",
    image: IMG.quarry,
  },
];

// ============ WHY CHOOSE US ============
export type WhyCard = { icon: LucideIcon; title: string; text: string };

export const whyCards: WhyCard[] = [
  { icon: ShieldCheck, title: "High-Quality Materials", text: "Every load is screened and graded for consistent, dependable quality." },
  { icon: Truck, title: "Fast Delivery", text: "Reliable fleet and logistics to deliver across Kandaghat and Solan on time." },
  { icon: Award, title: "Trusted Supplier", text: "Preferred by contractors, builders and engineering projects across the region." },
  { icon: Boxes, title: "Bulk Orders", text: "Capacity to fulfil large-volume orders for infrastructure and road projects." },
  { icon: BadgeIndianRupee, title: "Competitive Pricing", text: "Fair, transparent rates with no hidden charges — direct from our crusher." },
  { icon: MapPin, title: "Local Expertise", text: "Deep knowledge of Himachal terrain, materials and project requirements." },
  { icon: Gauge, title: "Quality Assurance", text: "Consistent grading and quality checks at every stage of production." },
  { icon: Sparkles, title: "Premium Finish", text: "Clean, washed materials that deliver a superior finish on site." },
];

// ============ FEATURES ============
export type FeatureCard = { icon: LucideIcon; title: string; text: string };

export const featureCards: FeatureCard[] = [
  { icon: Truck, title: "Fast Supply", text: "Large stock and a dedicated fleet keep your project moving." },
  { icon: ShieldCheck, title: "Reliable Quality", text: "Consistent grading you can build specifications around." },
  { icon: Wrench, title: "Modern Equipment", text: "Well-maintained crushing and screening machinery." },
  { icon: Boxes, title: "Bulk Capacity", text: "Built to handle high-volume infrastructure demand." },
  { icon: Clock, title: "On-Time Delivery", text: "Scheduled deliveries that respect your project timeline." },
  { icon: MapPin, title: "Local Support", text: "Based in Kandaghat, serving Solan and surrounding Himachal." },
  { icon: Users, title: "Experienced Team", text: "A crew that understands construction material requirements." },
  { icon: HardHat, title: "Project Ready", text: "Materials trusted on residential, commercial and government sites." },
];

// ============ PROCESS ============
export type ProcessStep = { title: string; text: string; icon: LucideIcon; image: string };

export const processSteps: ProcessStep[] = [
  { title: "Mining", text: "Carefully extracted raw stone from our approved quarry site near Kandaghat.", icon: HardHat, image: IMG.quarry },
  { title: "Crushing", text: "Primary and secondary crushing to the required stone sizes.", icon: Wrench, image: IMG.heroCrusher },
  { title: "Screening", text: "Precise screening and grading into separate material categories.", icon: Gauge, image: IMG.modernPlant },
  { title: "Quality Check", text: "Each batch is inspected for grading, silt content and strength.", icon: ShieldCheck, image: IMG.hopper },
  { title: "Loading", text: "Efficiently loaded onto transport for safe dispatch.", icon: Boxes, image: IMG.plantWide },
  { title: "Delivery", text: "On-time delivery to your construction site across Himachal Pradesh.", icon: Truck, image: IMG.quarry },
];

// ============ INDUSTRIES ============
export type Industry = { name: string; icon: LucideIcon; description: string };

export const industries: Industry[] = [
  { name: "Construction", icon: HardHat, description: "Residential and commercial building projects requiring reliable sand and aggregate supply." },
  { name: "Road Projects", icon: Truck, description: "Highway and pavement construction using our graded aggregates and road base material." },
  { name: "Residential", icon: MapPin, description: "Home builders needing quality sand for plastering, concrete and finishing work." },
  { name: "Commercial", icon: Building2, description: "Commercial developments requiring consistent, high-volume material supply." },
  { name: "Government Projects", icon: Award, description: "Infrastructure and public works projects across Himachal Pradesh." },
  { name: "Infrastructure", icon: Wrench, description: "Large-scale infrastructure works needing bulk aggregate and base material." },
  { name: "Landscape", icon: TreePine, description: "Landscaping and decorative applications using our natural pebble stones." },
  { name: "Contractors", icon: Users, description: "Civil and building contractors who depend on timely, graded material supply." },
];

// ============ TESTIMONIALS ============
export type Testimonial = { name: string; role: string; text: string; rating: number };

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Verma",
    role: "Civil Contractor, Solan",
    text: "Bajrang Stone Crusher has been our go-to supplier for two years. The aggregate grading is consistent and deliveries are always on time. Highly recommended for any serious project.",
    rating: 5,
  },
  {
    name: "Anita Sharma",
    role: "Builder, Kandaghat",
    text: "The washed sand quality is excellent — our plaster finishes have visibly improved. Their team understands what builders actually need on site.",
    rating: 5,
  },
  {
    name: "Mohan Singh",
    role: "Road Project Engineer",
    text: "We sourced road base material for a highway stretch from Bajrang. Bulk capacity and timely supply kept the project on schedule. A dependable partner.",
    rating: 5,
  },
  {
    name: "Deepak Thakur",
    role: "Infrastructure Contractor",
    text: "Fair pricing, clean material and responsive support over WhatsApp. Placing bulk orders has been effortless. Will continue working with them.",
    rating: 5,
  },
];

// ============ FAQ ============
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What materials do you supply?",
    a: "We supply construction sand, washed sand, raw sand, pebble stones, crushed stone aggregates (10mm, 20mm, 40mm) and road base material for residential, commercial, infrastructure and road construction projects.",
  },
  {
    q: "Which areas do you deliver to?",
    a: "We are based in Kandaghat, Solan, Himachal Pradesh and deliver across Kandaghat, Solan, Shimla, Dharampur, Parwanoo, Baddi, Nalagarh, Sirmaur, Kalka, Chail, Kufri and nearby regions. Share your delivery location on WhatsApp and we will confirm availability.",
  },
  {
    q: "Do you handle bulk orders for large projects?",
    a: "Yes. We have the capacity to fulfil high-volume orders for infrastructure, road and commercial construction projects. Message us on WhatsApp with your required quantity for a quotation.",
  },
  {
    q: "How do I get a price quote?",
    a: "Every quotation is handled over WhatsApp. Tap any 'Get Quote' or 'Order Material' button, fill in your name, material, quantity and delivery location, and we will send you a quotation directly.",
  },
  {
    q: "What are your working hours?",
    a: "We are open Monday to Saturday, 8:00 AM to 7:00 PM. You can send a WhatsApp inquiry anytime and we will respond during working hours.",
  },
  {
    q: "Can I visit your crusher site?",
    a: "Yes, you are welcome to visit our site at Kandaghat. We recommend messaging us on WhatsApp first so we can arrange a convenient time for your visit.",
  },
  {
    q: "Are you a local Himachal Pradesh supplier?",
    a: "Yes, we are based in Kandaghat, Solan, Himachal Pradesh and serve the surrounding region. Being local means faster delivery and a better understanding of regional project requirements.",
  },
  {
    q: "Do you supply material for government road projects?",
    a: "Yes, we supply aggregates and road base material to contractors working on road and infrastructure projects across Himachal Pradesh. Contact us with your project requirements.",
  },
];

// ============ STATS ============
export const stats = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Supplied" },
  { value: 9, suffix: "", label: "Material Grades" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
];

// ============ GALLERY ============
export const galleryImages = [
  { src: IMG.heroCrusher,  alt: "Stone crusher plant in Kandaghat producing construction aggregates",   category: "Crushing"  },
  { src: IMG.modernPlant,  alt: "Live stone crusher operations with wheel loader at Bajrang plant",     category: "Crushing"  },
  { src: IMG.plantWide,    alt: "Wide view of crusher plant with hopper and conveyor system",           category: "Crushing"  },
  { src: IMG.hopper,       alt: "Heavy-duty jaw crusher hopper at Bajrang Stone Crusher",               category: "Crushing"  },
  { src: IMG.quarry,       alt: "Quarry site near Kandaghat with crusher plant and container offices",  category: "Mining"    },
  { src: IMG.modernPlant,  alt: "Wheel loader moving aggregate piles at the crusher site",            category: "Mining"    },
  { src: IMG.heroCrusher,  alt: "Crushed stone aggregate stockpiled ready for supply",                  category: "Materials" },
  { src: IMG.plantWide,    alt: "Construction sand and aggregate piles at Kandaghat production site",  category: "Materials" },
  { src: IMG.hopper,       alt: "Crushed stone aggregate flowing from primary crusher hopper",        category: "Materials" },
  { src: IMG.quarry,       alt: "Full quarry operations with heavy machinery in Himachal Pradesh",     category: "Projects"  },
  { src: IMG.heroCrusher,  alt: "Crusher plant ready for bulk aggregate supply to road projects",     category: "Projects"  },
  { src: IMG.modernPlant,  alt: "Full site view of Bajrang Stone Crusher operations in Kandaghat",     category: "Projects"  },
];

export const galleryCategories = ["All", "Crushing", "Mining", "Materials", "Projects"];

export const aboutImage = IMG.plantWide;
export const ctaImage = IMG.quarry;

// ============ NAV STRUCTURE ============
export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Construction Sand", href: "/products/construction-sand" },
      { label: "Stone Aggregates", href: "/products/stone-aggregates" },
      { label: "Pebble Stones", href: "/products/pebble-stones" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Process", href: "/process" },
  {
    label: "Industries",
    href: "/industries",
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
