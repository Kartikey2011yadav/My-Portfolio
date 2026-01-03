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
export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const collaboration = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
  },
  {
    id: "1",
    title: "Smart Automation",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
  },
  {
    id: "2",
    title: "Top-notch Security",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
  },
];

export const services = [
  {
    id: "0",
    title: "Photo generating",
    text: "Automatically enhance your photos using our AI app's photo editing feature. Try it now!",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Photo enhance",
    text: "Automatically enhance your photos using our AI app's photo editing feature. Try it now!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Seamless Integration",
    text: "Automatically enhance your photos using our AI app's photo editing feature. Try it now!",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const collabText = "";
  // "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const notificationImages = [notification4, notification3, notification2];

export const techLogos = [
  // yourlogo, yourlogo, yourlogo, yourlogo, yourlogo
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const work = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];






