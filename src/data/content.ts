export interface Project {
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  description: string[];
  tools: string[];
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  paper?: {
    title: string;
    status: string;
    resources?: { name: string; url: string }[];
  };
  thesis?: {
    title: string;
    supervisor: string;
    paperUrl?: string;
  };
  bullets: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    institution: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    devPortfolio: string;
  };
  researchInterests: string[];
  education: Education[];
  researchExperience: Experience[];
  industryExperience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  algorithms: {
    leetcode: string;
    other: string;
  };
  honorsAndCertifications: {
    honors: {
      title: string;
      description: string;
      links?: { name: string; url: string }[];
    }[];
    certifications: string[];
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Gour Gupal Talukder Shawon",
    title: "Research Contributor & Software Engineer",
    institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
    location: "Dhaka, Bangladesh",
    email: "gourgupaltalukder@gmail.com",
    phone: "+880 1746-244930",
    github: "https://github.com/gfor-gour",
    linkedin: "https://linkedin.com/in/gour-gupal-talukder",
    devPortfolio: "https://gforgour.vercel.app/",
  },
  researchInterests: [
    "Multi-agent LLM systems",
    "AI evaluation and benchmark design",
    "Federated learning and privacy-preserving machine learning",
    "Large language model alignment",
    "Natural language processing",
    "Software engineering automation",
    "Distributed systems"
  ],
  education: [
    {
      institution: "Shahjalal University of Science and Technology",
      location: "Sylhet, Bangladesh",
      degree: "B.Sc. in Software Engineering",
      period: "Mar 2022 - May 2026",
      gpa: "CGPA: 3.45 / 4.00 (through 7th semester)"
    }
  ],
  researchExperience: [
    {
      role: "Research Contributor",
      organization: "HiveMind Research Group",
      location: "Remote",
      period: "Jan 2026 - Present",
      paper: {
        title: "AgentCollabBench: Diagnosing When Good Agents Make Bad Collaborators",
        status: "Under Review (NeurIPS 2026)",
        resources: [
          { name: "arXiv Preprint", url: "https://arxiv.org/pdf/2605.08647" },
          { name: "GitHub", url: "https://anonymous.4open.science/r/AgentCollabBench_codebase" },
          { name: "HuggingFace Dataset", url: "https://huggingface.co/datasets/AgentCollabBench/AgentCollabBench" }
        ]
      },
      bullets: [
        "Contributed to AgentCollabBench, a benchmark for evaluating reliability and communication failures in multi-agent LLM systems across Software Engineering, DevOps, and Data Engineering tasks.",
        "Assisted in early-stage metric and dataset planning for controlled multi-agent evaluation scenarios, including experiments related to inter-agent influence and echo-chamber behavior; created structured JSON benchmark samples and task configurations.",
        "Reviewed benchmark task structures, communication topologies, and annotation workflows to help improve dataset consistency and evaluation quality across collaborative agent pipelines.",
        "Participated in collaborative benchmark development and research review processes, contributing to dataset validation, experimental refinement, and technical coordination within a distributed AI research team."
      ]
    },
    {
      role: "Undergraduate Thesis Student",
      organization: "Shahjalal University of Science and Technology",
      location: "Sylhet, Bangladesh",
      period: "May 2025 - Nov 2025",
      thesis: {
        title: "Commit Message Generation using LLMs with Issue-Based Context",
        supervisor: "Mahfuzur Rahman Emon, Lecturer, IICT, SUST",
        paperUrl: "https://drive.google.com/drive/folders/16YGcs-Qw5AT1tFSZKXsh897jnwMTS2yd?usp=sharing"
      },
      bullets: [
        "Conducted a comparative study of GPT-4 Turbo, Claude 3.5, and Gemini 1.5 Pro on a curated dataset of 309 real-world issue-linked commits from high-authority repositories (freeCodeCamp, OWASP).",
        "Built a dual evaluation framework combining NLP metrics (BLEU, BERTScore) with double-blind assessment by 30 expert developers, supported by a full-stack Human Evaluation Platform (Next.js, Node.js, MongoDB).",
        "Achieved 42–53% performance gain in commit message quality over human-written baselines through optimized prompt engineering."
      ]
    },
    {
      role: "Intern Research Assistant",
      organization: "Advanced Machine Intelligence Research Lab, AIUB",
      location: "Remote",
      period: "Feb 2026 - Present",
      bullets: [
        "Contributing to early-stage research on federated unlearning for LoRA-tuned LLMs, focusing on privacy-aware machine learning and GDPR 'Right to be Forgotten' compliance in decentralized environments.",
        "Assisting with literature review, dataset preparation, and preliminary experimental analysis for research involving non-IID federated learning, statistical heterogeneity metrics, and parameter-efficient fine-tuning workflows.",
        "Participating in an ongoing CVPR-oriented research initiative on spectral restoration of snow-degraded images using diffusion-based models, including proposal development, dataset exploration, and baseline analysis.",
        "Collaborating within a small research team on experiment planning, technical discussions, and iterative research documentation under faculty supervision."
      ]
    }
  ],
  industryExperience: [
    {
      role: "Intern Software Engineer (Onsite)",
      organization: "ShellBeeHaken Ltd.",
      location: "Dhaka, Bangladesh",
      period: "Dec 2025 - May 2026",
      bullets: [
        "Contributed to production UI components and navigation flows using React Native (Expo) and Next.js, integrating REST APIs and managing application state across screens.",
        "Assisted in building event-driven backend services with AWS Lambda; gained hands-on exposure to distributed systems concepts including data replication and load balancing during architecture discussions.",
        "Participated in the full API development cycle from writing data contracts to integration testing, while working in an Agile team with sprint planning and code reviews."
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "Java", "C++", "Python", "TypeScript"]
    },
    {
      category: "Frontend",
      skills: ["Next.js", "React", "React Native", "Flutter"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Postman"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "Firebase", "MySQL"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git", "Linux", "Serverless (AWS Lambda)"]
    }
  ],
  projects: [
    {
      title: "Personality Detection Using Machine Learning",
      githubUrl: "https://github.com/gfor-gour",
      liveUrl: "#",
      description: [
        "Improved model F1 score by 20% via advanced feature engineering and hyperparameter tuning, achieving 91% accuracy in real-time personality prediction."
      ],
      tools: ["Python", "scikit-learn", "Flask", "Next.js", "Pandas", "NumPy", "joblib"]
    },
    {
      title: "Local Household Service Provider Platform",
      githubUrl: "https://github.com/gfor-gour",
      liveUrl: "#",
      description: [
        "Designed an optimized data-fetching architecture that reduced retrieval time by 60%, resulting in 20% higher overall application responsiveness and user satisfaction.",
        "Integrated Google Gemini-powered AI chatbot, improving service query response rate by 60%; authored critical system documents including SRS and project proposal."
      ],
      tools: ["Next.js", "Express.js", "MongoDB", "Nodemailer", "Cloudinary"]
    },
    {
      title: "IICT Library Management System",
      githubUrl: "https://github.com/gfor-gour",
      liveUrl: "#",
      description: [
        "Built a scalable digital library management system with searchable catalog, lending history, and admin-student workflows; digitized 100% of physical catalog.",
        "Designed responsive UI in React/TypeScript with secure login and role-based access control."
      ],
      tools: ["React", "Node.js", "Express.js", "TypeScript", "CSS"]
    }
  ],
  algorithms: {
    leetcode: "Solved 670+ LeetCode problems; maximum streak of 433 days; peak contest rating 1622; earned 23 badges.",
    other: "Completed 250 - 300 algorithmic problems across Codeforces, UVA, and VJudge platforms."
  },
  honorsAndCertifications: {
    honors: [
      {
        title: "2nd Runner-up - “Bridging Engineering & Computer Science” International Hackathon",
        description: "Organized by ILMAI, co-hosted by St. George’s, University of London. Built a browser-based projectile motion simulator with optional air resistance (two-member team).",
        links: [
          { name: "GitHub", url: "https://github.com/gfor-gour" },
          { name: "Live", url: "#" }
        ]
      }
    ],
    certifications: [
      "AWS Cloud Practitioner",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS API Gateway",
      "Claude Code in Action (Anthropic)",
      "Generative AI (Udacity & AWS)",
      "ML Crash Course (Google)"
    ]
  }
};
