/**
 * Application-wide constants
 */

// Base path for assets - used in vite.config.js
export const BASE_PATH = "/landing-page-demo";

// Routes (for future use with React Router)
export const ROUTES = {
  HOME: "/",
  SERVICES: "#services",
  ABOUT: "#about",
  CONTACT: "#contact",
  FAQ: "#faq",
};

// Animation durations (ms)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
};

// Colors
export const COLORS = {
  PRIMARY: "#6366f1",
  SECONDARY: "#8b5cf6",
  ACCENT: "#06b6d4",
  GRADIENT_START: "#6366f1",
  GRADIENT_MID: "#8b5cf6",
  GRADIENT_END: "#06b6d4",
};

// Hero section content
export const heroContent = {
  badge: "New: AI-Powered Analytics",
  title: "AI-driven tools for product teams",
  description:
    "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
  ctaPrimary: "Get Started",
  ctaSecondary: "Schedule Demo",
  stats: [
    { value: "10K+", label: "Active Users", icon: "groups" },
    { value: "99.9%", label: "Uptime", icon: "speed" },
    { value: "24/7", label: "Support", icon: "security" },
  ],
};

// Second section content
export const secondSection = {
  subtitle: "Workflow",
  title: "Streamline your workflow",
  description:
    "Streamline the product development flow with a content platform that's aligned across specs and insights",
};

// Workflow cards data
export const workflowCards = [
  {
    id: 1,
    image: "/landing-page-demo/images/workflow-01.png",
    description: "Collaborate seamlessly with your team in real-time",
  },
  {
    id: 2,
    image: "/landing-page-demo/images/workflow-02.png",
    description: "Track progress and manage tasks efficiently",
  },
  {
    id: 3,
    image: "/landing-page-demo/images/workflow-03.png",
    description: "Deliver projects faster with automated workflows",
  },
];

// Advanced section content
export const advancedSection = {
  subtitle: "Advanced Controls",
  title: "Built for modern product teams",
  description:
    "Open AI reads and understands your files, and with nothing more than a single line of feedback, so you can go further than the speed of thought.",
};
