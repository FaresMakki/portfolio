import { FaYoutube, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "C++",
    image: "C++.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 100,
    height: 100,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/fares.wolf?igsh=bDNlOGVzNmdhd3U3",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/share/1CgKPaL1N8/",
  },
  {
    name: "X",
    icon: BsTwitterX,
    link: "https://x.com/makki_fares?t=Kfi2Q3AfAlk0Habew_e7Mg&s=09",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/FaresMakki",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "C++",
    image: "C++.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MariaDB",
    image: "Mariadb.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "Supabase",
    image: "supabase-logo-wordmark--dark.png",
    width: 100,
    height: 100,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Apache Spark",
    image: "spark.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "Apache Hive",
    image: "hive.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "Apache Kafka",
    image: "kafaka.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "Hadoop",
    image: "hadoop.png",
    width: 90,
    height: 90,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Video Streaming Platform",
    description:
      "Developed a comprehensive video streaming platform featuring a robust 4-layer architecture for enhanced scalability and maintainability. The platform implements role-based access control, enabling different user roles to manipulate and manage video content with specific permissions. Utilized Java for backend development and OracleDB for efficient data storage and retrieval. The system architecture was carefully designed using UML diagrams to ensure clear documentation and systematic development approach.",
    image: "/projects/project-1.png",
    link: "https://github.com/FaresMakki/NetflixProject",
    tools: ["Java", "OracleDB", "UML", "4-Layer Architecture", "Role-Based Access Control"],
  },
  {
    title: "Smart House Management Website",
    description:
      "Built a modern smart house management platform with comprehensive user authentication and role-based access control. The system features distinct functionalities for administrators and regular users, with admins having full system management capabilities while users enjoy personalized smart home features. Leveraged Next.js for the frontend, Express.js for the backend API, and MongoDB Atlas for cloud-based data storage, creating an efficient and scalable solution for smart home automation and control.",
    image: "/projects/project-2.png",
    link: "https://github.com/FaresMakki/SmartHouse",
    tools: ["Next.js", "Express.js", "MongoDB Atlas", "Authentication", "Role-Based Access"],
  },
  {
    title: "Auto École Management Platform",
    description:
      "Developed a comprehensive driving school management system with three specialized dashboards: a student dashboard for viewing and managing driving sessions with request acceptance/cancellation features, a monitor dashboard displaying daily schedules, and an admin dashboard for complete system oversight. The admin panel includes advanced features for managing students and monitors, scheduling exam dates through a shared calendar, pricing management, and real-time notifications. Additionally, created a mobile application to provide easy access for both students and monitors. Built with Angular for the frontend and Supabase as a secure Backend-as-a-Service solution, ensuring data security and real-time synchronization.",
    image: "/projects/project-3.png",
    link: "private",
    tools: ["Angular", "Supabase", "Mobile App Development", "Real-time Notifications", "Calendar Integration"],
  },
  {
    title: "Insurance Claims Predictor Model",
    description:
      "Engineered a sophisticated machine learning model for insurance claims prediction, addressing complex data challenges including significant class imbalance, numerous outliers, and missing values. Conducted comprehensive data distribution analysis and implemented embedded feature selection methods to identify the most impactful predictors. Experimented with multiple approaches for handling missing values and outlier treatment. Tackled the class imbalance problem through various techniques including weight adjustment and ultimately achieved optimal results using bagging methods with K-fold cross-validation. The solution demonstrates advanced data preprocessing techniques and ensemble learning strategies to create a robust predictive model.",
    image: "/projects/project-4.png",
    link: "https://github.com/FaresMakki/BuildingClaimPredictor",
    tools: ["Python", "Scikit-learn", "Pandas", "Feature Selection", "Bagging", "K-Fold Cross-Validation", "Machine Learning"],
  },
] as const;

export const EXPERIENCES = [
  {
    title: "Software Engineer Intern",
    company: "ToCodePro",
    period: "June 2024 - July 2024",
    description:
      "Built a comprehensive full-stack e-commerce platform featuring React & Redux for the frontend and Express.js with MongoDB for the backend. Implemented secure user authentication and role-based access control for Admins and Customers. Developed key features including product management, shopping cart functionality, order management, and payment integration. Designed an intuitive shopping experience to improve usability and simulate real-world commerce workflows. Successfully optimized checkout flow and API performance, achieving approximately 30% reduction in load times.",
    tools: ["React", "Redux", "Express.js", "MongoDB", "Authentication", "Payment Integration", "REST API"],
  },
  {
    title: "Network Security Intern",
    company: "Sagemcom",
    period: "May 2025 - June 2025",
    description:
      "Implemented a comprehensive FreeRADIUS solution integrated with PrivacyIDEA to deploy two-factor authentication (2FA) across network devices, significantly enhancing security infrastructure. Conducted thorough analysis and monitoring of network traffic flows to detect anomalies and suspicious patterns. Documented detailed security procedures and provided strategic recommendations to strengthen system resilience and improve overall network security posture.",
    tools: ["FreeRADIUS", "PrivacyIDEA", "2FA", "Network Security", "Traffic Analysis", "Security Documentation"],
  },
  {
    title: "Software Engineer Intern",
    company: "EthionAI",
    period: "July 2025 - September 2025",
    description:
      "Contributed to the development of an AI-powered application designed to deliver intelligent solutions to users. Worked on implementing secure authentication mechanisms and access control systems to ensure data privacy and proper permission management. Developed custom tools that provide AI models with enhanced capabilities including GitHub search, web search, and other external integrations to extend functionality. Participated in backend optimization efforts including performance tuning, efficient data handling, and system scalability improvements. Gained hands-on experience in building production-ready systems that handle high traffic volumes and maintain consistent performance under concurrent user loads.",
    tools: ["Backend Development", "Authentication & Security", "API Design", "System Optimization", "AI Tool Development", "Custom Integrations"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/FaresMakki",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "#",
        username: "pixelpusher07",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/fares.wolf?igsh=bDNlOGVzNmdhd3U3",
      },
      {
        name: "X",
        icon: BsTwitterX,
        link: "https://x.com/makki_fares?t=Kfi2Q3AfAlk0Habew_e7Mg&s=09",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/fares-makki",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
