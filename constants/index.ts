import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
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
  // {
  //   skill_name: "Redux",
  //   image: "redux.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "MongoDB",
  //   image: "mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/amit17.shekhawat/",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/itsamitsingh17",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/itsamitshekhawat17",
  },
] as const;

export const FRONTEND_SKILL: Array<{
  skill_name: string;
  image: string;
  width: number;
  height: number;
}> = [
  // Commented items
];

export const BACKEND_SKILL: Array<{
  skill_name: string;
  image: string;
  width: number;
  height: number;
}> = [
  // Commented items
];

export const FULLSTACK_SKILL = [
  // {
  //   skill_name: "React Native",
  //   image: "reactnative.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Docker",
  //   image: "docker.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Python",
    image: "Python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "C++.jpg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Pandas",
    image: "Pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    image: "FastAPI.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Streamlit",
    image: "streamlit.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Render",
    image: "Render.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL: Array<{
  skill_name: string;
  image: string;
  width: number;
  height: number;
}> = [
  // No items
];

export const PROJECTS = [
  {
    title: "Smart File Analyzer",
    description:
      "An intelligent file analysis tool that automatically processes and extracts valuable insights from various file formats. Built using Python and modern data processing libraries, this application provides comprehensive analysis, data visualization, and pattern recognition capabilities for text, spreadsheets, and structured data files.",
    image: "/projects/project-1.png",
    link: "https://github.com/itsamitshekhawat17",
  },
  {
    title: "ACM-PIET Chapter Website",
    description:
      "An ongoing development of the official website for the ACM PIET Jaipur Student Chapter. Built with Next.js, React, and Tailwind CSS, this responsive platform showcases chapter activities, member achievements, upcoming events, and resources for the student community. Features an admin dashboard for content management.",
    image: "/projects/project-2.png",
    link: "https://github.com/itsamitshekhawat17",
  },
  {
    title: "Unified Media Search Engine",
    description:
      "Ongoing development of Our project that solves this by creating one unified search bar → which fetches results from all sources (Movies, Music, Videos, Products) in one dashboard. It provides a seamless and efficient way for users to find and access diverse media content without switching between multiple platforms.",
    image: "/projects/project-3.png",
    link: "https://github.com/itsamitshekhawat17",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/itsamitshekhawat17",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/amit17.shekhawat/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/itsamitsingh17",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/amit-singh-7246002b7",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Portfolio",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:itsmeamitsingh17@gmail.com",
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
    title: "EE",
    link: "#education-experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const EDUCATION_DATA = [
  {
    title: "Secondary Education (Class 10)",
    institution: "Green Field High School, Bikaner",
    duration: "2020",
    description: "Achieved 88.4% in Class 10 examinations with distinction in Mathematics and Science. Participated actively in various school competitions and extracurricular activities.",
    isLeft: true,
  },
  {
    title: "Senior Secondary Education (Class 12)",
    institution: "St. Vivekanand Sr. Sec. School, Bikaner",
    duration: "2022",
    description: "Completed Science stream with Mathematics, achieving 90% marks. Developed strong analytical and problem-solving skills that formed the foundation for pursuing engineering.",
    isLeft: false,
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Poornima Institute of Engineering and Technology, Jaipur",
    duration: "2023 - Present",
    description: "Currently pursuing Computer Science Engineering with focus on software development, web technologies, and data science. Actively participating in coding competitions and technical workshops.",
    isLeft: true,
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: "Captain, ACM PIET Student Chapter",
    company: "ACM PIET Jaipur",
    duration: "2024 - 2025",
    description: "Led the ACM PIET Jaipur Student Chapter as Captain, coordinating technical events, workshops, and community initiatives. Managed a team of student volunteers while fostering technical growth and professional development. ACM Member ID: 0885793.",
    isLeft: true,
  },
  {
    title: "Vice Chair, ACM PIET Student Chapter",
    company: "ACM PIET Jaipur",
    duration: "2025 - Present",
    description: "Currently serving as Vice Chair of the ACM PIET Jaipur Student Chapter. Collaborating with the executive committee to develop strategic initiatives, organize technical events, and enhance member engagement. Working on the chapter&apos;s official website development.",
    isLeft: false,
  },
  {
    title: "Frontend Development Intern",
    company: "Busibees Pvt. Ltd.",
    duration: "July 8 - 22, 2024",
    description: "Completed a focused 15-day internship mastering frontend technologies including HTML, CSS, JavaScript, and React. Contributed to UI/UX improvements and responsive design implementation for client projects.",
    isLeft: true,
  },
  {
    title: "Python Backend Development Intern",
    company: "EntoSpark Technologies",
    duration: "June 12 - July 28, 2025",
    description: "Engaged in an intensive 45-day internship focused on Python backend development. Gained hands-on experience with FastAPI, database integration, API development, and deployment strategies. Successfully contributed to production-level microservices.",
    isLeft: false,
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/itsamitshekhawat17/my-space-portfolio",
};
