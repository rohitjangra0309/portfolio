import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  brane_enterprises_logo,
  neuralhive_logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Full Stack Engineer",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Neuralhive Technologies Pvt. Ltd.",
    icon: neuralhive_logo,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Jun 2025",
    points: [
      "Built responsive features for KEA and Datahub using React.js, Redux, and SCSS.",
      "Replaced WebSocket updates with polling APIs for smoother real-time UI.",
      "Redesigned the KEA landing page and created onboarding/training modules.",
      "Delivered a standalone demo app with S3 integration for offline usage.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Brane Enterprises Pvt. Ltd.",
    icon: brane_enterprises_logo,
    iconBg: "#E6DEDD",
    date: "May 2023 - Sept 2024",
    points: [
      "Developed a QA platform with React, Material-UI, and interactive DataGrids.",
      "Boosted UI performance with Vite, custom hooks, and Context API.",
      "Secured access with Azure MSAL and implemented role-based control.",
      "Built complex dashboards and integrated REST APIs for test triaging.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Rohit joined as a fresher but quickly became invaluable to our Dev Tool team. He led frontend development for our advanced testing systems including mutation testing, contract testing, and predictive analysis. His MERN stack expertise and leadership qualities were exceptional, consistently delivering complex solutions with remarkable efficiency.",
    name: "Vijay Vyawhare",
    designation: "SDET 3",
    company: "Games 24x7",
    image: "https://media.licdn.com/dms/image/v2/C5603AQFvmvxv_szcjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1638785264204?e=1755734400&v=beta&t=oUcbcDU-aJjbaF9yhdxJ3KlaNpCIgzte-rQDsCcJYHY",
  },
  {
    testimonial:
      "Rohit was pivotal to our team at Brane, contributing across the entire stack from mutation testing to Node.js backend development. He stepped up to lead frontend development, mentored two interns, and significantly boosted our team's velocity and product quality. His sense of ownership and ability to quickly master new technologies made him invaluable.",
    name: "Sahil Sarwar",
    designation: "Software Engineer",
    company: "Confluent",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH0FkovKOSKEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697997649028?e=1755734400&v=beta&t=chAzGmenYyM2RCY_prIOk741SZHNXEl_asMNzymG8Gs",
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const overview = "I'm a Frontend Engineer with 2 years of experience building performant, scalable, and user-friendly web applications. A Computer Science graduate from IIIT Delhi, I specialize in React.js, Redux, and modern UI libraries like Bootstrap and Material-UI. From redesigning complex interfaces to optimizing real-time performance, I turn design mockups into responsive, production-ready code. I've worked on SaaS platforms in healthcare and QA automation, collaborating across teams to ship impactful features with clean architecture and efficient APIs.";

export { services, technologies, experiences, testimonials, projects, overview };
