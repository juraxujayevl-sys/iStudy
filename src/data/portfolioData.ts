import { AiProject, ContentItem, Technology, ProcessStep, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'LAZIZ',
  fullName: 'Lazizbek (Laziz)',
  title: 'AI Engineer & Content Creator',
  tagline: 'Bridging Autonomous AI Architecture & Visual Tech Storytelling',
  location: 'Tashkent, Uzbekistan 🇺🇿',
  bio: 'I am an AI Engineer and Content Creator based in Uzbekistan. I specialize in building autonomous AI agents, fine-tuning open-source LLMs, and crafting high-impact tech content that demystifies artificial intelligence for over 2M+ developers and tech enthusiasts across Central Asia & globally.',
  email: 'contact@laziz.ai',
  telegram: 'https://t.me/laziz_ai',
  instagram: 'https://instagram.com/laziz.ai',
  youtube: 'https://youtube.com/@laziz_ai',
  github: 'https://github.com/laziz-ai',
  linkedin: 'https://linkedin.com/in/laziz-ai',
  stats: [
    { label: 'AI Projects Built', value: 25, suffix: '+' },
    { label: 'Content Views', value: 2.4, suffix: 'M+' },
    { label: 'Core Tech Stack', value: 18, suffix: '+' },
    { label: 'Years Experience', value: 4, suffix: '+' },
  ]
};

export const AI_PROJECTS: AiProject[] = [
  {
    id: 'aegis-agent-framework',
    title: 'Aegis — Multi-Agent Software Engine',
    category: 'AI Agents',
    shortDescription: 'Autonomous multi-agent system that coordinates LLMs to refactor codebases, write unit tests, and audit API vulnerabilities.',
    fullDescription: 'Aegis is an enterprise-grade multi-agent orchestration framework designed for developer workflows. Built using Python, LangGraph, and Gemini 1.5 Pro, it assigns specialized agent personas (Architect, Coder, Auditor, Tester) to break down complex features, generate isolated code, and run synthetic unit tests before human approval.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'LangGraph', 'Gemini API', 'FastAPI', 'Docker'],
    role: 'Lead AI Engineer & System Architect',
    architecture: [
      'Multi-agent graph orchestration via LangGraph',
      'Asynchronous task worker queues with Redis',
      'Semantic AST code chunking & vector embedding',
      'Sandboxed execution runtime in Docker containers'
    ],
    results: 'Reduced code review & refactoring time by 68% across test teams, handling over 10,000 automated pull request analysis runs.',
    demoUrl: 'https://aegis-ai-demo.laziz.ai',
    githubUrl: 'https://github.com/laziz-ai/aegis-agents',
    featured: true
  },
  {
    id: 'uzbek-llm-fine-tune',
    title: 'Uzbek-LLM — Fine-Tuned LLaMA 3 for Legal & Tech',
    category: 'LLM & Fine-tuning',
    shortDescription: 'Custom 8B parameter language model fine-tuned on specialized Uzbek legal documents and software engineering corpora.',
    fullDescription: 'A domain-specific open-weight LLM specifically tailored for high-accuracy translation, legal document summarization, and technical terminology in the Uzbek language. Trained using QLoRA techniques on a curated 1.2M token dataset.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    tags: ['PyTorch', 'HuggingFace', 'QLoRA', 'LLaMA-3', 'vLLM'],
    role: 'AI Researcher & Model Trainer',
    architecture: [
      'Data cleaning & synthetic QA dataset synthesis',
      '4-bit quantized QLoRA fine-tuning on Dual RTX 4090s',
      'High-throughput inference serving via vLLM',
      'Gradio & React web chat interface integration'
    ],
    results: 'Achieved 91.4% accuracy on Uzbek legal query benchmarks, outperforming stock GPT-3.5 Turbo in localized terminology precision.',
    demoUrl: 'https://uzbek-llm.laziz.ai',
    githubUrl: 'https://github.com/laziz-ai/uzbek-llama-3',
    featured: true
  },
  {
    id: 'mindforge-content-ai',
    title: 'MindForge — AI Video Script & Storyboard Creator',
    category: 'AI Web Apps',
    shortDescription: 'AI-powered studio web app that converts rough audio voice notes into polished video scripts, visual shot lists, and viral hooks.',
    fullDescription: 'MindForge is a web application built for creators to streamline their pre-production workflow. Users record a quick 30-second voice memo; MindForge transcribe it, analyzes trending hook patterns, generates scene-by-scene camera instructions, and formats teleprompter copy.',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Tailwind'],
    role: 'Full-Stack Developer & AI Designer',
    architecture: [
      'Whisper AI speech-to-text pipeline',
      'Structured JSON mode prompt engineering with GPT-4o',
      'Real-time streaming UI with server-sent events',
      'PDF & Notion export integration'
    ],
    results: 'Used by 1,200+ content creators to cut video pre-production time from 3 hours down to 10 minutes per video.',
    demoUrl: 'https://mindforge-ai.laziz.ai',
    githubUrl: 'https://github.com/laziz-ai/mindforge-studio',
    featured: true
  },
  {
    id: 'autocontent-pipeline-n8n',
    title: 'AutoContent — Automated Tech Media Engine',
    category: 'Automations',
    shortDescription: 'Zero-code automation pipeline combining N8n, Webhooks, and AI APIs to syndicate technical blog posts across 5 platforms.',
    fullDescription: 'An autonomous content processing factory that monitors RSS feeds, GitHub release logs, and voice memos, runs summarization & graphic generation, and drafts ready-to-publish posts for LinkedIn, Telegram Channel, Twitter, and Medium.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['N8n', 'Python', 'Webhooks', 'Telegram API', 'Gemini API'],
    role: 'Automation Architect',
    architecture: [
      'N8n workflow automation backend',
      'Dynamic image generation via Imagen / DALL-E 3',
      'Telegram Bot API instant notification & human approval button',
      'PostgreSQL logging & analytical queue'
    ],
    results: 'Automated 85% of social distribution workload for Laziz Media, publishing over 400 tech posts with zero manual copy-pasting.',
    demoUrl: 'https://t.me/laziz_ai',
    githubUrl: 'https://github.com/laziz-ai/autocontent-n8n',
    featured: false
  },
  {
    id: 'omnisearch-enterprise-rag',
    title: 'OmniSearch — Semantic Vector RAG Engine',
    category: 'AI Web Apps',
    shortDescription: 'High-speed retrieval-augmented generation search platform for multi-gigabyte technical PDF documentation.',
    fullDescription: 'Enterprise document search tool that embeds technical manuals, API specs, and codebase docs into Qdrant vector database, enabling instant natural language answers with exact citations and page highlights.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'Qdrant', 'Gemini API', 'Express', 'React'],
    role: 'AI Engineer',
    architecture: [
      'Hybrid dense vector + sparse keyword search (BM25 + Cohere)',
      'Recursive character & markdown parser',
      'Low-latency streaming responses via Server-Side Events',
      'Sub-200ms vector index querying'
    ],
    results: 'Query response time dropped from minutes of manual searching to under 1.2 seconds with 98% factual grounding accuracy.',
    demoUrl: 'https://omnisearch.laziz.ai',
    githubUrl: 'https://github.com/laziz-ai/omnisearch-rag',
    featured: false
  },
  {
    id: 'neural-vision-qa',
    title: 'VisionGuard — Edge AI Inspection System',
    category: 'Experiments',
    shortDescription: 'Real-time computer vision quality inspection system running locally on low-power Jetson Nano edge hardware.',
    fullDescription: 'An experimental computer vision project using custom-trained YOLOv8 models to detect micro-defects on assembly line components at 60 FPS with real-time bounding box overlays.',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'TensorRT'],
    role: 'Computer Vision Engineer',
    architecture: [
      'YOLOv8 nano model optimization with TensorRT FP16 quantization',
      'High-speed camera frame buffer pipeline',
      'Local WebSocket alert broadcaster to web dashboard'
    ],
    results: 'Maintained 60 FPS inference latency on sub-15W edge devices with 99.2% defect recall accuracy.',
    demoUrl: 'https://visionguard.laziz.ai',
    githubUrl: 'https://github.com/laziz-ai/visionguard-cv',
    featured: false
  }
];

export const CONTENT_ITEMS: ContentItem[] = [
  {
    id: 'content-1',
    title: 'How Autonomous AI Agents Actually Work (No Hype Architecture Breakdown)',
    category: 'Tech Breakdowns',
    views: '480K',
    platform: 'Instagram',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'A 90-second cinematic video breakdown explaining memory, vector search, and tool use in agentic AI frameworks.',
    link: 'https://instagram.com/laziz.ai',
    metrics: { likes: '38.2K', shares: '14.5K', comments: '1.2K' }
  },
  {
    id: 'content-2',
    title: 'Building an Autonomous AI Startup in 48 Hours: Full Documentary',
    category: 'Documentaries',
    views: '210K',
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'Deep dive vlog documenting every step from initial prompt ideation, vector database setup, to launching live revenue.',
    link: 'https://youtube.com/@laziz_ai',
    metrics: { likes: '19.4K', shares: '5.1K', comments: '890' }
  },
  {
    id: 'content-3',
    title: 'Prompt Engineering Masterclass: From Beginner to System Prompts',
    category: 'AI Tutorials',
    views: '350K',
    platform: 'Instagram',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'Visual carousel & short reel detailing Few-Shot, Chain-of-Thought, and XML tag structuring for high accuracy outputs.',
    link: 'https://instagram.com/laziz.ai',
    metrics: { likes: '29.1K', shares: '22.8K', comments: '940' }
  },
  {
    id: 'content-4',
    title: 'Fine-Tuning Local LLaMA 3 on Uzbek Language (Code Walkthrough)',
    category: 'Short-Form Reels',
    views: '620K',
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    description: 'High energy fast-paced coding video demonstrating QLoRA fine-tuning on a local machine using Python and Unsloth.',
    link: 'https://tiktok.com/@laziz_ai',
    metrics: { likes: '54.0K', shares: '31.2K', comments: '2.1K' }
  },
  {
    id: 'content-5',
    title: 'AI vs Senior Developer: Who Writes Cleaner Production Code?',
    category: 'Tech Breakdowns',
    views: '410K',
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description: 'Head-to-head comparison testing Claude 3.5 Sonnet against human senior engineers across complex refactoring tasks.',
    link: 'https://youtube.com/@laziz_ai',
    metrics: { likes: '32.6K', shares: '9.8K', comments: '1.4K' }
  },
  {
    id: 'content-6',
    title: 'The Future of Local AI on Apple Silicon (M3 Max Benchmarks)',
    category: 'Short-Form Reels',
    views: '330K',
    platform: 'Instagram',
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: 'Cinematic hardware test showcasing tokens/second performance running 70B parameter models locally with MLX.',
    link: 'https://instagram.com/laziz.ai',
    metrics: { likes: '26.4K', shares: '11.2K', comments: '750' }
  }
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    icon: 'code-xml',
    level: 'Expert',
    experienceYears: '4+ Yrs',
    description: 'Core language for AI models, PyTorch, LangGraph, agent frameworks, and backend microservices.',
    popularUses: ['AI Model Training', 'LangChain/LangGraph', 'FastAPI', 'Data Scraping']
  },
  {
    id: 'typescript-react',
    name: 'TypeScript & React',
    category: 'Web Stack',
    icon: 'layout',
    level: 'Expert',
    experienceYears: '4+ Yrs',
    description: 'Building ultra-responsive dark-mode modern user interfaces, streaming AI text components, and web apps.',
    popularUses: ['Full-Stack AI Interfaces', 'Vite', 'Tailwind CSS', 'State Management']
  },
  {
    id: 'gemini-openai-apis',
    name: 'Gemini & OpenAI APIs',
    category: 'AI Frameworks',
    icon: 'sparkles',
    level: 'Expert',
    experienceYears: '3+ Yrs',
    description: 'Integrating state-of-the-art multimodal LLMs, function calling, structured JSON output, and live audio streams.',
    popularUses: ['Multimodal RAG', 'Tool Calling Agents', 'Whisper Speech', 'Embeddings']
  },
  {
    id: 'pytorch-huggingface',
    name: 'PyTorch & HuggingFace',
    category: 'AI Frameworks',
    icon: 'cpu',
    level: 'Advanced',
    experienceYears: '3+ Yrs',
    description: 'Fine-tuning open-source LLMs (LLaMA-3, Mistral), QLoRA quantization, and model evaluation pipelines.',
    popularUses: ['Local Model Quantization', 'QLoRA Training', 'Transformers', 'vLLM Serving']
  },
  {
    id: 'langchain-langgraph',
    name: 'LangGraph & AI Agents',
    category: 'AI Frameworks',
    icon: 'bot',
    level: 'Expert',
    experienceYears: '2+ Yrs',
    description: 'Architecting stateful multi-agent systems with cyclic control loops, human-in-the-loop validation, and memory.',
    popularUses: ['Stateful Workflows', 'Autonomous Coding Agents', 'Tool Integration']
  },
  {
    id: 'n8n-automation',
    name: 'N8n & Workflow Automation',
    category: 'Automation & Cloud',
    icon: 'workflow',
    level: 'Expert',
    experienceYears: '3+ Yrs',
    description: 'Designing self-healing automated pipelines connecting webhooks, LLMs, Telegram bots, and databases.',
    popularUses: ['Social Media Syndication', 'API Integration', 'Webhook Routers']
  },
  {
    id: 'vectordb-qdrant',
    name: 'Vector DBs (Qdrant / Pinecone)',
    category: 'AI Frameworks',
    icon: 'database',
    level: 'Advanced',
    experienceYears: '2+ Yrs',
    description: 'Setting up high-speed similarity search, hybrid keyword-vector indexing, and document embeddings for RAG.',
    popularUses: ['Semantic Document Search', 'Hybrid BM25 + Dense Retrieval', 'Metadata Filtering']
  },
  {
    id: 'git-docker-cloud',
    name: 'Docker & Git / Cloud',
    category: 'Automation & Cloud',
    icon: 'terminal',
    level: 'Advanced',
    experienceYears: '4+ Yrs',
    description: 'Containerizing AI services, GitHub Actions CI/CD pipelines, and cloud deployment on Cloud Run & AWS.',
    popularUses: ['Docker Containers', 'GitHub Actions', 'GCP / Cloud Run', 'Vercel']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Idea & Problem Framing',
    tagline: 'Deconstructing the Vision',
    description: 'We clarify the core objective, pinpoint where AI actually creates leverage, and define measurable project outcomes.',
    deliverable: 'Product Specification & AI Architecture Plan',
    tools: ['Excalidraw', 'Notion', 'Prompt Prototyping']
  },
  {
    number: '02',
    title: 'Research & Model Selection',
    tagline: 'Finding the Optimal AI Engine',
    description: 'Evaluating proprietary APIs (Gemini 1.5, GPT-4o) vs local fine-tuned open-source models (LLaMA 3, Qwen) for speed & cost.',
    deliverable: 'Benchmark Matrix & Data Strategy',
    tools: ['HuggingFace', 'PyTorch', 'Model Benchmarks']
  },
  {
    number: '03',
    title: 'Architect & Build',
    tagline: 'Clean Code Execution',
    description: 'Developing high-performance backends, multi-agent logic, RAG pipelines, and responsive frontend UI.',
    deliverable: 'Working Prototype & API Backends',
    tools: ['Python', 'LangGraph', 'React', 'FastAPI']
  },
  {
    number: '04',
    title: 'Evaluation & Test',
    tagline: 'Rigorous Stress Testing',
    description: 'Testing prompt robustness, hallucinations, edge cases, rate limits, and securing API endpoints.',
    deliverable: 'Test Reports & Accuracy Guardrails',
    tools: ['Ragas', 'Docker', 'pytest', 'LlamaIndex']
  },
  {
    number: '05',
    title: 'Launch & Content Push',
    tagline: 'Deploying with Impact',
    description: 'Shipping the application to production while creating viral tech content to demonstrate the product value.',
    deliverable: 'Live Production App & Tech Launch Video',
    tools: ['GCP Cloud Run', 'Vite', 'YouTube / Reels']
  },
  {
    number: '06',
    title: 'Iterate & Scale',
    tagline: 'Continuous Refinement',
    description: 'Analyzing real-world telemetry, user feedback, and retraining prompts or fine-tuning weights for enhanced performance.',
    deliverable: 'Telemetry Dashboard & v2 Roadmap',
    tools: ['PostHog', 'vLLM', 'LangSmith']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Laziz built our custom RAG search engine in less than 3 weeks. What impressed us most was how clean his code was, paired with a cinematic product demo video that gained 200k views on launch day.',
    author: 'Sardor Rakhimov',
    role: 'Co-Founder & CTO',
    company: 'TechFlow Central Asia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectType: 'Enterprise AI Search Platform'
  },
  {
    id: 'test-2',
    quote: 'Rarely do you find an AI engineer who is equally brilliant at deep Python model architecture and crafting captivating educational video content. Laziz is a force of nature in the tech space.',
    author: 'Elena Vance',
    role: 'Head of Innovation',
    company: 'Neural Labs Global',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectType: 'AI Agent System & Launch Video'
  },
  {
    id: 'test-3',
    quote: 'Working with Laziz transformed our brand presence. His breakdown videos brought 50,000+ developer signups to our platform while his technical advice saved us thousands in API costs.',
    author: 'Jamshid Alimov',
    role: 'Product Lead',
    company: 'DataSphere Tech',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectType: 'Tech Campaign & AI Integration'
  }
];
