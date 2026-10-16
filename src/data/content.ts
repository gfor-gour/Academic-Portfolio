export interface Project {
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  description: string[];
  tools: string[];
}

export interface PaperResource {
  name: string;
  url: string;
}

export interface PaperItem {
  title: string;
  status: string;
  badge?: string;
  resources?: PaperResource[];
  bullets?: string[];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  badge: string;
  badgeTone: "accepted" | "review" | "progress";
  note?: string;
  resources?: PaperResource[];
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  paper?: PaperItem;
  papers?: PaperItem[];
  thesis?: {
    title: string;
    supervisor: string;
    paperUrl?: string;
    status?: string;
    role?: string;
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
  publications: Publication[];
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
    title: "Full Stack Engineer & FDE",
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
    "LLM-assisted software engineering",
    "Federated learning and privacy-preserving machine learning"
  ],
  education: [
    {
      institution: "Shahjalal University of Science and Technology",
      location: "Sylhet, Bangladesh",
      degree: "B.Sc. in Software Engineering",
      period: "Mar 2022 - May 2026",
      gpa: "CGPA: 3.52 / 4.00"
    }
  ],
  publications: [
    {
      title: "AgentCollabBench: Diagnosing When Good Agents Make Bad Collaborators",
      authors: "Aritra Mazumder, …, **Gour Gupal Talukder Shawon**, … (8th of 13 authors)",
      venue: "NeurIPS 2026, Evaluations & Datasets Track · FAGEN Workshop, ICML 2026",
      badge: "Accepted",
      badgeTone: "accepted",
      resources: [
        { name: "arXiv", url: "https://arxiv.org/pdf/2605.08647" },
        { name: "Dataset", url: "https://huggingface.co/datasets/AgentCollabBench/AgentCollabBench" }
      ]
    },
    {
      title: "Commit Message Generation using LLMs with Issue-Based Context",
      authors: "Amit Kumar Sharma*, **Gour Gupal Talukder Shawon***†, Prottya Roy Chayan, Mahfuzur Rahman Emon",
      venue: "Informatica",
      badge: "Under Review",
      badgeTone: "review",
      note: "* co-first authors, † corresponding author",
      resources: [
        { name: "Dataset", url: "https://huggingface.co/datasets/g-for-gour/llm-commit-message-evaluation" },
        { name: "Paper (Under Review)", url: "https://drive.google.com/drive/folders/16YGcs-Qw5AT1tFSZKXsh897jnwMTS2yd?usp=sharing" }
      ]
    }
  ],
  researchExperience: [
    {
      role: "Research Contributor",
      organization: "HiveMind Research Group",
      location: "Remote",
      period: "Jan 2026 - Present",
      bullets: [
        "AgentCollabBench (NeurIPS 2026): Worked on dataset design, task construction and evaluation setup for a 900-task benchmark that shows where multi-agent LLM systems silently drop constraints, spread false beliefs or leak private context.",
        "Found that communication topology accounted for 7–40% of the variance in constraint preservation during multi-hop forwarding.",
        "Memory-gated tool use (manuscript in preparation): Annotated and quality-checked coding-domain examples for a 340-pair benchmark examining when agents should apply stored rules or seek human confirmation before tool use (five annotators per pair; coding κ = 0.72)."
      ]
    },
    {
      role: "Undergraduate Thesis",
      organization: "Shahjalal University of Science and Technology",
      location: "Sylhet, Bangladesh",
      period: "May 2025 - Nov 2025",
      thesis: {
        title: "Commit Message Generation using LLMs with Issue-Based Context",
        supervisor: "Mahfuzur Rahman Emon, Lecturer, Software Engineering, IICT, SUST (on study leave)",
        status: "Co-first & Corresponding Author"
      },
      bullets: [
        "Designed the study, wrote the manuscript and curated 309 issue-linked commits from open-source repositories and compared GPT-4 Turbo, Claude 3.5 and Gemini 1.5 Pro.",
        "Evaluated outputs with automated text metrics and double-blind ratings from 30 software developers."
      ]
    },
    {
      role: "Intern Research Assistant",
      organization: "Advanced Machine Intelligence Research Lab, AIUB",
      location: "Remote",
      period: "Feb 2026 - Jun 2026",
      bullets: [
        "Assisted with literature review and dataset preparation for early-stage research on federated unlearning for LoRA-tuned LLMs."
      ]
    }
  ],
  industryExperience: [
    {
      role: "Full Stack Engineer & FDE (Hybrid)",
      organization: "RunAgent Technology Limited",
      location: "Dhaka, Bangladesh",
      period: "Oct 2026 - Present",
      bullets: [
        "Built and deployed a client-facing business system using Next.js, TypeScript and PostgreSQL, taking responsibility for implementation from initial development through production delivery.",
        "Manage staging and production deployments on a self-hosted Coolify server, maintaining a live system for client use and feedback.",
        "Presented the first working version to the client and am extending the system to a companion Expo (React Native) app that shares the existing backend and database."
      ]
    },
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
      category: "Research Methods",
      skills: ["Benchmark & Dataset Construction", "Human Evaluation", "LLM-as-a-Judge Evaluation", "Statistical Testing"]
    },
    {
      category: "ML & NLP",
      skills: ["PyTorch", "NumPy", "Pandas", "Scikit-learn", "Hugging Face Transformers & Datasets"]
    },
    {
      category: "Languages",
      skills: ["Python", "C++", "TypeScript", "JavaScript", "Java"]
    },
    {
      category: "Software Engineering",
      skills: ["Next.js", "React", "React Native (Expo)", "Node.js", "REST APIs", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Systems & Tools",
      skills: ["Linux", "Git", "Docker", "AWS Lambda", "LaTeX"]
    }
  ],
  projects: [
    {
      title: "Personality Detection Using Machine Learning",
      githubUrl: "https://github.com/gfor-gour",
      liveUrl: "https://personalitydetection.vercel.app/",
      description: [
        "Improved model F1 score by 20% via advanced feature engineering and hyperparameter tuning, achieving 91% accuracy in real-time personality prediction."
      ],
      tools: ["Python", "scikit-learn", "Flask", "Next.js", "Pandas", "NumPy", "joblib"]
    },
    {
      title: "Local Household Service Provider Platform",
      githubUrl: "https://github.com/gfor-gour",
      liveUrl: "https://service-connect-350.vercel.app/",
      description: [
        "Designed an optimized data-fetching architecture that reduced retrieval time by 60%, resulting in 20% higher overall application responsiveness and user satisfaction.",
        "Integrated Google Gemini-powered AI chatbot, improving service query response rate by 60%; authored critical system documents including SRS and project proposal."
      ],
      tools: ["Next.js", "Express.js", "MongoDB", "Nodemailer", "Cloudinary"]
    },
    {
      title: "IICT Library Management System",
      githubUrl: "https://github.com/gfor-gour",
      liveUrl: "https://iict-library.vercel.app/",
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
          { name: "Live", url: "https://simulating-projectile-motion-by-gou.vercel.app/" }
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
