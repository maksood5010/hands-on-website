export const site = {
  name: "Hands-On Innovations",
  shortName: "Hands-On",
  domain: "www.hands-on.ae",
  url: "https://www.hands-on.ae",
  email: "sales@hands-on.ae",
  phone: "+971 50 872 9464",
  phoneHref: "+971508729464",
  whatsappHref: "https://wa.me/971508729464",
  tagline: "Upgrade Your Business with Smart Digital Displays",
};

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Cloud CMS", href: "#cms" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export type IndustryIcon = "restaurant" | "retail" | "hotel" | "office" | "salon";

export const industries: { label: string; icon: IndustryIcon }[] = [
  { label: "Restaurants & Cafés", icon: "restaurant" },
  { label: "Retail Stores", icon: "retail" },
  { label: "Hotels", icon: "hotel" },
  { label: "Offices", icon: "office" },
  { label: "Salons & Spas", icon: "salon" },
];

export const screenSizes = [
  '32"',
  '43"',
  '50"',
  '55"',
  '65"',
  '75"',
  '85"',
  '95"',
];

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  bullets: string[];
};

export const products: Product[] = [
  {
    id: "floor-stand",
    name: "Floor Stand Display",
    image: "/images/floor_standing_full.png",
    description:
      "A freestanding, full-height display that turns any corner of your venue into a bold advertising or menu screen.",
    bullets: ["Freestanding, no wall needed", "High-brightness panel", "Ideal for entrances & lobbies"],
  },
  {
    id: "countertop-horizontal",
    name: "Counter Top Horizontal Display",
    image: "/images/horizontal_display.png",
    description:
      "A compact, landscape-orientation screen with a fold-out kickstand — perfect for bar counters, reception desks, and checkout areas.",
    bullets: ["Sits flat on any counter", "Landscape menu-board format", "Quick to set up, easy to move"],
  },
  {
    id: "display-panel",
    name: "Display Panel",
    image: "/images/product_1.jpg",
    description:
      "A slim, portrait display panel with a compact stand — a lightweight option for tabletop menus and promotions.",
    bullets: ["Slim, lightweight panel", "Great for tabletop menus", "Portrait or landscape mounting"],
  },
  {
    id: "a-stand",
    name: "A Stand Display",
    image: "/images/stand_display.png",
    description:
      "A sandwich-board-style A-frame display that stands on its own — ideal for sidewalks, storefronts, and daily specials.",
    bullets: ["Self-standing A-frame", "Great for foot-traffic areas", "Weatherable indoor/outdoor use"],
  },
  {
    id: "a-stand-wheel",
    name: "A Stand with Wheel Base",
    image: "/images/stand_with_wheel_base.png",
    description:
      "The same A-frame design on a mobile wheel base, so you can roll your display wherever the promotion needs to be.",
    bullets: ["Mobile, wheeled base", "Reposition in seconds", "Perfect for retail floors & events"],
  },
];

export type CmsFeatureIcon = "multidevice" | "schedule" | "remote" | "groups";

export const cmsFeatures: { icon: CmsFeatureIcon; title: string; description: string }[] = [
  {
    icon: "multidevice",
    title: "Multi-Device Management",
    description: "See every screen across every location from a single dashboard, with live online/offline status.",
  },
  {
    icon: "schedule",
    title: "Playlists & Scheduling",
    description: "Build content playlists and schedule what plays, where, and when — down to the day and hour.",
  },
  {
    icon: "remote",
    title: "Remote Control, Anywhere",
    description: "Push new content, restart a screen, or swap a promotion instantly, without visiting the site.",
  },
  {
    icon: "groups",
    title: "Groups & User Access",
    description: "Organize displays into groups and give staff the right level of access to manage them.",
  },
];

export type WhyUsIcon = "plug" | "sizes" | "pin" | "toggle";

export const whyUs: { icon: WhyUsIcon; title: string; description: string }[] = [
  {
    icon: "plug",
    title: "Plug-and-Play Setup",
    description: "Your display arrives ready to go — power it on, connect to Wi-Fi, and start showing content.",
  },
  {
    icon: "sizes",
    title: "Every Size, One Supplier",
    description: "From 32\" countertop screens to 95\" floor stands, we outfit an entire location from one source.",
  },
  {
    icon: "pin",
    title: "UAE-Based Support",
    description: "Local sales, installation guidance, and support — no waiting on overseas time zones.",
  },
  {
    icon: "toggle",
    title: "CMS Is Optional, Not Forced",
    description: "Run a display standalone, or add our Cloud CMS when you need remote, multi-screen control.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Choose Your Display",
    description: "Pick the display type and screen size that fits your space — from countertop panels to full floor stands.",
  },
  {
    step: "02",
    title: "Load Your Content",
    description: "Upload menus, offers, or media through the Cloud CMS — or hand it to us and we'll set it up for you.",
  },
  {
    step: "03",
    title: "We Install",
    description: "Your display is delivered and set up on-site, ready to power on.",
  },
  {
    step: "04",
    title: "Manage Anytime, Anywhere",
    description: "Schedule updates and monitor every screen remotely, from one dashboard.",
  },
];

export const businessTypes = [
  "Restaurant / Café",
  "Retail Store",
  "Hotel",
  "Office",
  "Salon / Spa",
  "Other",
];
