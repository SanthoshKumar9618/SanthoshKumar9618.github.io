export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  pipeline: string[];
  highlights: string[];
  metrics?: string;
  architectureDetails: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export const personalData = {
  name: "T Santhosh Kumar",
  label: "SOFTWARE ENGINEER",
  primaryPositioning: "Software Engineer",
  secondaryPositioning: "Backend Engineer • Python Full Stack Developer • AI/GenAI Engineer",
  headline: "Building scalable backend systems and AI-powered applications.",
  supportingText: "Software Engineer focused on Python, backend engineering, full-stack development, real-time systems, and practical Generative AI applications.",
  location: "Bangalore, India",
  relocationStatus: "Open to Relocation",
  email: "tsanthoshdev6@gmail.com",
  phone: "+91 9019545616",
  
  socials: {
    linkedin: "https://www.linkedin.com/in/tsanthoshkumar-dev/",
    github: "https://github.com/SanthoshKumar9618",
    leetcode: "https://leetcode.com/u/SanthoshKumar96/",
    naukri: "https://www.naukri.com/mnjuser/profile",
    email: "mailto:tsanthoshdev6@gmail.com",
    phone: "tel:+919019545616",
  },

  techStackLine: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "React",
    "WebSockets",
    "RAG",
    "LLMs"
  ]
};

export const aboutData = {
  heading: "ABOUT ME",
  paragraphs: [
    "I’m a Software Engineer focused on building production-grade backend systems, full-stack applications, and AI-powered solutions.",
    "My primary strength is backend engineering with Python and FastAPI, supported by experience with PostgreSQL, Redis, REST APIs, WebSockets, authentication, authorization, Docker, and real-time systems.",
    "I also build Generative AI applications using RAG, LLMs, LangChain, OpenAI, Gemini, vector search, and Agentic AI."
  ],
  cards: [
    {
      number: "01",
      title: "BACKEND ENGINEERING",
      skills: ["Python", "FastAPI", "Django", "REST APIs", "AsyncIO", "WebSockets", "JWT", "RBAC"]
    },
    {
      number: "02",
      title: "PYTHON FULL STACK",
      skills: ["ReactJS", "React Native", "JavaScript", "HTML5", "CSS3", "PostgreSQL", "Redis"]
    },
    {
      number: "03",
      title: "AI SYSTEMS",
      skills: ["RAG", "LLMs", "LangChain", "Agentic AI", "OpenAI", "Gemini", "pgvector", "Vector Search"]
    }
  ]
};

export const engineeringPhilosophy = [
  {
    number: "01",
    title: "DESIGN",
    description: "Clean architecture and clear separation of responsibilities."
  },
  {
    number: "02",
    title: "BUILD",
    description: "Reliable APIs, scalable backend services, and maintainable code."
  },
  {
    number: "03",
    title: "OPTIMIZE",
    description: "Database performance, caching, asynchronous workflows, and efficient system design."
  },
  {
    number: "04",
    title: "SHIP",
    description: "Dockerized applications, testing, debugging, deployment, and production improvements."
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "SOFTWARE ENGINEER / FULL STACK DEVELOPER",
    company: "Unishrine Technologies Private Limited",
    location: "Bangalore, India",
    period: "Nov 2025 – Present",
    badge: "Current Role",
    highlights: [
      "Develop backend services for a production AI Voice Agent platform using Python, FastAPI, PostgreSQL, Redis, and WebSockets.",
      "Build real-time voice communication workflows using Twilio Media Streams.",
      "Implement asynchronous event-driven architectures using AsyncIO and WebSockets.",
      "Develop multi-tenant RAG pipelines covering PDF ingestion, chunking, embeddings, pgvector, and semantic search.",
      "Integrate LangChain, OpenAI, and Gemini into AI-powered workflows.",
      "Develop Agentic AI solutions combining LLM reasoning, tools, and retrieval.",
      "Build secure REST APIs using JWT authentication and RBAC.",
      "Work with PostgreSQL and Redis for data storage, caching, and session management.",
      "Containerize applications using Docker and Docker Compose.",
      "Collaborate with frontend and product teams."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Twilio Media Streams",
      "WebSockets",
      "AsyncIO",
      "LangChain",
      "OpenAI",
      "Gemini",
      "pgvector",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JWT / RBAC"
    ]
  },
  {
    role: "SOFTWARE ENGINEER INTERN",
    company: "3 Fortune Minds",
    location: "Bangalore, India",
    period: "Mar 2025 – Jun 2025",
    badge: "Internship",
    highlights: [
      "Developed ReactJS components.",
      "Integrated backend REST APIs.",
      "Improved page load time by approximately 30% through API optimization and reduction of unnecessary component re-renders."
    ],
    technologies: [
      "ReactJS",
      "JavaScript",
      "REST APIs",
      "Performance Optimization",
      "Frontend Architecture"
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "ai-voice-agent",
    number: "01",
    title: "AI VOICE AGENT PLATFORM",
    category: "REAL-TIME AI SYSTEM",
    description: "Production-grade voice conversational infrastructure connecting telephony media streams to low-latency LLM inference pipelines with multi-tenant RAG context retrieval.",
    technologies: [
      "Python",
      "FastAPI",
      "WebSockets",
      "Twilio Media Streams",
      "PostgreSQL",
      "Redis",
      "LLMs",
      "RAG"
    ],
    pipeline: [
      "Phone / Voice",
      "Twilio",
      "WebSocket",
      "FastAPI",
      "AI Agent",
      "RAG / Knowledge",
      "LLM",
      "Response"
    ],
    highlights: [
      "Real-time bidirectional audio streaming over Twilio Media Streams and WebSockets",
      "AsyncIO event-driven backend handling concurrent voice interaction state",
      "Multi-tenant RAG pipeline parsing PDFs into semantic vector embeddings with pgvector",
      "Dynamic prompt engineering & context management with LangChain and Gemini/OpenAI"
    ],
    architectureDetails: "Asynchronous pipeline utilizing Python FastAPI & WebSockets to stream incoming 8kHz PCM audio from Twilio Media Streams, route speech-to-text tokens through an Agentic orchestrator, ground context against a pgvector-backed multi-tenant knowledge store, and stream synthesized audio responses back under minimal latency budgets."
  },
  {
    id: "digital-business-card",
    number: "02",
    title: "NFC + QR DIGITAL BUSINESS CARD PLATFORM",
    category: "FULL-STACK PLATFORM",
    description: "NFC and QR-code based digital business card platform for sharing professional profiles and contact information securely with analytics and role-based access.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "JWT",
      "RBAC",
      "Python",
      "REST APIs"
    ],
    pipeline: [
      "NFC / QR",
      "API",
      "FastAPI",
      "PostgreSQL",
      "Profile"
    ],
    highlights: [
      "NFC payload generation & dynamic responsive QR profile endpoints",
      "FastAPI backend architecture with JWT token authentication and role-based authorization",
      "Optimized relational schema design in PostgreSQL for sub-50ms profile lookups",
      "Containerized deployment using Docker and Docker Compose"
    ],
    architectureDetails: "High-throughput REST API layer built on FastAPI that serves instantaneous profile payloads upon physical NFC tap or QR scan. Features structured relational models in PostgreSQL, automated migrations via Alembic, and isolated container execution via Docker."
  },
  {
    id: "road-accident-prediction",
    number: "03",
    title: "AI DRIVEN ROAD ACCIDENT PREDICTION SYSTEM",
    category: "MACHINE LEARNING",
    description: "Predictive machine learning pipeline analyzing multi-variable historical accident datasets to assess traffic incident probabilities and risk factors.",
    technologies: [
      "Python",
      "scikit-learn",
      "Machine Learning",
      "Pandas",
      "Feature Engineering"
    ],
    pipeline: [
      "Dataset",
      "Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Evaluation",
      "Prediction"
    ],
    highlights: [
      "Exploratory data analysis and missing value imputation across spatial & temporal traffic data",
      "Feature selection and correlation modeling to isolate primary accident risk indicators",
      "Supervised classifier training with hyperparameter tuning via scikit-learn",
      "Model validation and evaluation metrics analysis"
    ],
    architectureDetails: "End-to-end Python ML workflow ingesting historical traffic datasets, applying structured feature engineering (temporal factors, weather conditions, road geometry), training ensemble models in scikit-learn, and delivering probabilistic risk predictions."
  }
];

export const systemArchitectureNodes = [
  {
    id: "client",
    name: "CLIENT LAYER",
    tech: "ReactJS / Web / Mobile / Twilio Voice",
    purpose: "User interface, WebSocket audio streaming, and REST API consumption.",
    details: "Initiates authenticated HTTP requests and persistent bidirectional WebSocket channels for real-time interaction."
  },
  {
    id: "gateway",
    name: "REST / WEBSOCKET API GATEWAY",
    tech: "FastAPI + AsyncIO",
    purpose: "High-performance asynchronous request routing and event loop orchestration.",
    details: "Handles concurrent non-blocking I/O operations with strict schema validation using Pydantic."
  },
  {
    id: "auth",
    name: "AUTH & ACCESS CONTROL",
    tech: "JWT + RBAC",
    purpose: "Stateless authentication and fine-grained permission enforcement.",
    details: "Secures multi-tenant endpoints and validates token signatures before delegating to application services."
  },
  {
    id: "app_logic",
    name: "APPLICATION SERVICES",
    tech: "Python Core Logic",
    purpose: "Business logic execution, orchestrating data transactions and external services.",
    details: "Modular service layer separating domain rules, transactional integrity, and external integrations."
  },
  {
    id: "postgres",
    name: "POSTGRESQL PRIMARY DB",
    tech: "PostgreSQL + pgvector",
    purpose: "Primary relational data store for structured application data & vector embeddings.",
    details: "Ensures ACID guarantees for user profiles, transactional records, and vector similarity indexing."
  },
  {
    id: "redis",
    name: "REDIS CACHE & STATE",
    tech: "Redis In-Memory",
    purpose: "Caching, rate limiting, and real-time session state management.",
    details: "Reduces database read load and preserves active voice session states with sub-millisecond retrieval."
  },
  {
    id: "rag",
    name: "RAG RETRIEVAL PIPELINE",
    tech: "LangChain + Document Ingestion",
    purpose: "Document chunking, embedding generation, and semantic context retrieval.",
    details: "Ingests domain documents, segments them into semantic chunks, and retrieves relevant context for prompt grounding."
  },
  {
    id: "llm",
    name: "LLM REASONING & AGENTS",
    tech: "OpenAI / Gemini / Tool Execution",
    purpose: "Contextual reasoning, structured output synthesis, and autonomous tool calling.",
    details: "Synthesizes final grounded responses or invokes application tools based on multi-step reasoning."
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "BACKEND",
    description: "Server architecture, asynchronous APIs, and distributed workflows",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "AsyncIO",
      "WebSockets",
      "JWT",
      "RBAC"
    ]
  },
  {
    id: "database",
    name: "DATABASE & DATA",
    description: "Relational modeling, caching layers, and vector storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "pgvector",
      "Vector Database",
      "SQL",
      "Database Design"
    ]
  },
  {
    id: "ai_genai",
    name: "AI & GENAI",
    description: "Applied generative AI, retrieval-augmented generation, and agentic workflows",
    skills: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "OpenAI",
      "Gemini",
      "Agentic AI",
      "AI Agents",
      "Embeddings",
      "Semantic Search"
    ]
  },
  {
    id: "frontend",
    name: "FRONTEND",
    description: "Performant user interfaces and responsive client development",
    skills: [
      "ReactJS",
      "React Native",
      "JavaScript",
      "HTML5",
      "CSS3"
    ]
  },
  {
    id: "devops",
    name: "DEVOPS & TOOLS",
    description: "Containerization, schema migrations, and collaboration tools",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Alembic",
      "Postman",
      "Swagger"
    ]
  },
  {
    id: "fundamentals",
    name: "FUNDAMENTALS",
    description: "Core computer science principles and distributed networking protocols",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "SDLC",
      "TCP/IP",
      "HTTP/HTTPS",
      "DNS",
      "Client-Server Architecture"
    ]
  }
];

export const dsaTopics = [
  "Arrays",
  "Hash Tables",
  "Binary Search",
  "Sliding Window",
  "Dynamic Programming",
  "Greedy",
  "Backtracking",
  "Trees",
  "Graphs",
  "Stacks",
  "Queues"
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Nitte Meenakshi Institute of Technology",
    period: "2023 – 2025",
    score: "8.6 CGPA",
    location: "Bangalore, India"
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Sri Venkateshwara Degree College",
    period: "2019 – 2022",
    score: "8.1 CGPA",
    location: "Andhra Pradesh / Bangalore, India"
  }
];
