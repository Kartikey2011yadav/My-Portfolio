import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import {
  SiFlutter,
  SiGo,
  SiDocker,
  SiKubernetes,
  SiReact,
  SiAndroid
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const navLinks = [
  { id: "about", title: "About", url: "/about" },
  { id: "work", title: "Work", url: "/work" },
  { id: "research", title: "Research", url: "/research" },
  { id: "contact", title: "Contact", url: "/contact" },
];

export const heroData = {
  title: "Full Stack Engineer",
  subtitle: "Mobile + Backend + Research",
  ctaText: "View My Work",
  ctaLink: "/work"
};

export const skills = [
  { name: "Flutter", icon: SiFlutter },
  { name: "Go", icon: SiGo },
  { name: "Java", icon: FaJava },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
];

export const experiences = [
  {
    company: "Tech Corp",
    date: "2023 - Present",
    points: [
      "Developed scalable backend services using Go.",
      "Optimized Docker containers for production."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "SynopTrack",
    description: "Location-based social app",
    tags: ["Mobile", "Flutter", "Firebase"],
    category: "mobile",
    modelType: "iphone",
    img: "/assets/textures/synoptrack.jpg", 
    source_code_link: "https://github.com/user/synoptrack"
  },
  {
    id: 2,
    title: "VoidSink",
    description: "Honeypot application",
    tags: ["System", "Go", "Security"],
    category: "system",
    modelType: "laptop",
    img: "/assets/textures/voidsink.jpg",
    source_code_link: "https://github.com/user/voidsink"
  },
  {
    id: 3,
    title: "Go Backup Utility",
    description: "CLI database tool",
    tags: ["System", "Go", "CLI"],
    category: "system",
    modelType: "laptop",
    img: "/assets/textures/gobackup.jpg",
    source_code_link: "https://github.com/user/gobackup"
  },
  {
    id: 4,
    title: "Video Calling App",
    description: "Native Android application",
    tags: ["Mobile", "Android", "WebRTC"],
    category: "mobile",
    modelType: "iphone",
    img: "/assets/textures/videocall.jpg",
    source_code_link: "https://github.com/user/videocall"
  }
];

export const research = [
  {
    title: "Advanced Honeypot Architectures",
    conference: "IEEE 2024",
    abstract: "A study on distributed honeypot systems...",
    link: "https://ieee.org/paper"
  }
];

// Backward compatibility aliases
export const navigation = navLinks;
export const heroContent = {
    title: heroData.title,
    subtitle: heroData.subtitle,
    description: heroData.subtitle, 
    buttonText: heroData.ctaText,
    buttonLink: heroData.ctaLink,
    secondaryButtonText: "Contact Me",
    secondaryButtonLink: "/contact"
};
export const techSlides = skills;
export const heroIcons = [homeSmile, file02, searchMd, plusSquare]; // Keep this as it was used in Hero

// Empty arrays to prevent build errors in existing components
export const benefits = [];
export const pricing = [];
export const socials = [];
export const collaboration = [];
export const services = [];
export const collabContent = [];
export const collabApps = [];
export const collabText = "";
export const brainwaveServices = [];
export const notificationImages = [];
export const techLogos = [];
export const brainwaveServicesIcons = [];
export const work = [];






