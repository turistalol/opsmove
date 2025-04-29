import { Car, Clock, Shield, DollarSign } from "lucide-react";

export const FEATURES = [
  {
    title: "Safety First",
    description: "All drivers are vetted and background-checked. GPS tracking and share your trip features keep you safe.",
    icon: Shield,
  },
  {
    title: "Fast Pickup",
    description: "Our large network of drivers ensures you'll never wait long. Average pickup time under 5 minutes.",
    icon: Clock,
  },
  {
    title: "Go Anywhere",
    description: "Whether it's across town or to the next city, we've got you covered with service in over 50 cities.",
    icon: Car,
  },
  {
    title: "Affordable Rates",
    description: "Competitive pricing with transparent fare estimates upfront. No surge pricing during peak hours.",
    icon: DollarSign,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Download the App",
    description: "Get the OPS MOVE app on iOS or Android and create your account in seconds.",
  },
  {
    title: "Enter Destination",
    description: "Type or select your destination and choose from available ride options.",
  },
  {
    title: "Match with Driver",
    description: "We'll connect you with the nearest available driver who'll arrive promptly.",
  },
  {
    title: "Enjoy Your Ride",
    description: "Relax and enjoy the journey. Rate your experience when you arrive.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Regular Commuter",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "OPS MOVE has completely changed my daily commute. The drivers are always on time and professional. I've never waited more than 5 minutes for a pickup!",
  },
  {
    name: "Michael Rodriguez",
    role: "Business Traveler",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "As someone who travels for business frequently, I rely on OPS MOVE in multiple cities. The consistency of service and the ease of use make it my go-to ride service.",
  },
  {
    name: "Emily Wong",
    role: "Night Shift Nurse",
    image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
    text: "Working late nights at the hospital, I need reliable transportation that makes me feel safe. OPS MOVE has been a lifesaver with their tracking features and vetted drivers.",
  },
  {
    name: "James Taylor",
    role: "Weekend Socialite",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "The weekend rates are amazing, and I never have to worry about finding a designated driver. The app is intuitive and the drivers are friendly. Highly recommend!",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
  },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { name: "Home", url: "/" },
    { name: "Features", url: "#features" },
    { name: "How it Works", url: "#how-it-works" },
    { name: "Testimonials", url: "#testimonials" },
    { name: "Download", url: "#download" },
    { name: "Become a Driver", url: "#" },
  ],
  legal: [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Cookie Policy", url: "#" },
  ],
};