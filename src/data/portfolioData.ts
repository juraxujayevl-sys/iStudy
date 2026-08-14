import { AiProject, ContentItem, Technology, ProcessStep, Testimonial } from '../types';
import { Language } from './translations';

export const PERSONAL_INFO = {
  name: 'LAZIZ',
  fullName: 'Lazizbek (Laziz)',
  email: 'contact@laziz.ai',
  telegram: 'https://t.me/laziz_ai',
  instagram: 'https://instagram.com/laziz.ai',
  youtube: 'https://youtube.com/@laziz_ai',
  github: 'https://github.com/laziz-ai',
  linkedin: 'https://linkedin.com/in/laziz-ai',
};

export const getPersonalStats = (lang: Language) => {
  const statsMap: Record<Language, { label: string; value: number | string; suffix: string }[]> = {
    uz: [
      { label: 'Yaratilgan AI Loyihalar', value: 25, suffix: '+' },
      { label: 'Kontent Ko\'rishlar', value: 2.4, suffix: 'M+' },
      { label: 'Asosiy Texnologiyalar', value: 18, suffix: '+' },
      { label: 'Tajriba Yillari', value: 4, suffix: '+' },
    ],
    ru: [
      { label: 'AI Проектов Создано', value: 25, suffix: '+' },
      { label: 'Просмотров Контента', value: 2.4, suffix: 'M+' },
      { label: 'Технологический Стек', value: 18, suffix: '+' },
      { label: 'Лет Опыта', value: 4, suffix: '+' },
    ],
    en: [
      { label: 'AI Projects Built', value: 25, suffix: '+' },
      { label: 'Content Views', value: 2.4, suffix: 'M+' },
      { label: 'Core Tech Stack', value: 18, suffix: '+' },
      { label: 'Years Experience', value: 4, suffix: '+' },
    ],
  };
  return statsMap[lang];
};

export const getAiProjects = (lang: Language): AiProject[] => {
  if (lang === 'uz') {
    return [
      {
        id: 'aegis-agent-framework',
        title: 'Aegis — Ko\'p Agentli Avtomatlashtirish Tizimi',
        category: 'AI Agents',
        shortDescription: 'Kodni refaktor qilish, unit testlar yozish va API xavfsizligini tekshiruvchi muxtor AI agentlar tizimi.',
        fullDescription: 'Aegis — dasturchilar jamoasi uchun mo\'ljallangan ko\'p agentli avtomatlashtirish tizimi. Python, LangGraph va Gemini 1.5 Pro yordamida yaratilgan bo\'lib, maxsus agent rollarini (Arxitektor, Dasturchi, Auditor, Tester) tayinlaydi.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        tags: ['Python', 'LangGraph', 'Gemini API', 'FastAPI', 'Docker'],
        role: 'Bosh AI Muhandis & Arxitektor',
        architecture: [
          'LangGraph orqali ko\'p agentli mantiqiy grafik',
          'Redis yordamida asinxron vazifalar navbati',
          'Vektor va semantik kod bo\'laklash',
          'Docker konteynerlarida xavfsiz sinov muhiti'
        ],
        results: 'Kod tahlili va ko\'rib chiqish vaqtini 68% ga qisqartirdi va 10,000 dan ortiq avtomatik PR tahlillarini amalga oshirdi.',
        demoUrl: 'https://aegis-ai-demo.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/aegis-agents',
        featured: true
      },
      {
        id: 'uzbek-llm-fine-tune',
        title: 'Uzbek-LLM — O\'zbek Tili Uchun Sozlangan LLaMA 3',
        category: 'LLM & Fine-tuning',
        shortDescription: 'O\'zbek tili huquqiy va texnik hujjatlari bo\'yicha fine-tune qilingan 8B parametrli LLaMA 3 modeli.',
        fullDescription: 'O\'zbek tilidagi huquqiy va texnik terminologiyani aniq tushunadigan ochiq manbali sun\'iy intellekt modeli. QLoRA usuli yordamida 1.2M tokenlik sara ma\'lumotlar to\'plamida o\'qitilgan.',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
        tags: ['PyTorch', 'HuggingFace', 'QLoRA', 'LLaMA-3', 'vLLM'],
        role: 'AI Tadqiqotchi & Model O\'qituvchisi',
        architecture: [
          'Ma\'lumotlarni tozalash va sintetik savol-javob dataset yaratish',
          'Dual RTX 4090 grafik kartalarida 4-bitli QLoRA fine-tuning',
          'vLLM orqali yuqori tezlikdagi inferens serveri',
          'React va Gradio veb interfeysi'
        ],
        results: 'O\'zbek tili huquqiy so\'rovlarida 91.4% aniqlikka erishildi, standart GPT-3.5 Turbo natijalaridan o\'zbek tilida o\'zib ketdi.',
        demoUrl: 'https://uzbek-llm.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/uzbek-llama-3',
        featured: true
      },
      {
        id: 'mindforge-content-ai',
        title: 'MindForge — AI Video Ssenariy va Storitelling Studiyasi',
        category: 'AI Web Apps',
        shortDescription: 'Ovozli xabarlardan video ssenariylar, kadrlar ketma-ketligi va sarlavhalar yaratuvchi AI veb-ilovasi.',
        fullDescription: 'MindForge — kontent meykerlar uchun tezkor video tayyorlash vositasi. 30 soniyalik ovozli xabarni avtomatik ravishda matnga o\'girib, sahnama-sahna video ssenariylar va kadrlar rejasini tuzib beradi.',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
        tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Tailwind'],
        role: 'Full-Stack Dasturchi & AI Dizayner',
        architecture: [
          'Whisper AI ovozni matnga o\'girish konveyeri',
          'GPT-4o bilan tuzilmaviy JSON rejimi',
          'Real vaqtdagi translatsiya UI va Server-Sent Events',
          'Notion va PDF eksport integratsiyasi'
        ],
        results: '1,200+ dan ortiq kontent meykerlar videolarga tayyorgarlik vaqtini 3 soatdan 10 daqiqagacha qisqartirishdi.',
        demoUrl: 'https://mindforge-ai.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/mindforge-studio',
        featured: true
      },
      {
        id: 'autocontent-pipeline-n8n',
        title: 'AutoContent — Avtomatlashtirilgan Tech Media Tizimi',
        category: 'Automations',
        shortDescription: 'N8n, Webhook va AI API lar orqali texnik postlarni 5 ta tarmoqqa avtomatik nashr qilish tizimi.',
        fullDescription: 'RSS va GitHub yangiliklarini kuzatib boruvchi, avtomatik ravishda post va rasm tayyorlab, Telegram, LinkedIn va Twitter kanallariga joylovchi muxtor konveyer.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        tags: ['N8n', 'Python', 'Webhooks', 'Telegram API', 'Gemini API'],
        role: 'Avtomatlashtirish Arxitektori',
        architecture: [
          'N8n ishchi ketma-ketlik backend tizimi',
          'Imagen va DALL-E 3 orqali dinamik rasmlar generatsiyasi',
          'Telegram bot orqali tezkor tasdiqlash tugmalari',
          'PostgreSQL bazasida ma\'lumotlar jurnali'
        ],
        results: 'Laziz Media uchun tarmoqlarga post joylash mehnatining 85% qismini avtomatlashtirdi, 400+ dan ortiq postlar qo\'lda yozilmasdan nashr etildi.',
        demoUrl: 'https://t.me/laziz_ai',
        githubUrl: 'https://github.com/laziz-ai/autocontent-n8n',
        featured: false
      },
      {
        id: 'omnisearch-enterprise-rag',
        title: 'OmniSearch — Hujjatlar Uchun Semantik RAG Qidiruv',
        category: 'AI Web Apps',
        shortDescription: 'Katta hajmdagi PDF va texnik hujjatlar ichidan lahzada aniq javob topuvchi AI qidiruv platformasi.',
        fullDescription: 'Kompaniyalar texnik qo\'llanmalari va API hujjatlarini Qdrant vektor ma\'lumotlar bazasiga joylab, daqiqalar o\'rniga soniyalar ichida aniq sahifa va havola bilan javob beruvchi tizim.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        tags: ['TypeScript', 'Qdrant', 'Gemini API', 'Express', 'React'],
        role: 'AI Muhandis',
        architecture: [
          'BM25 va gibrid vektor qidiruv tizimi',
          'Rekursiv markdown va matn bo\'laklovchi',
          'Low-latency javob uzatish',
          '200ms dan kam bo\'lgan indekslash tezligi'
        ],
        results: 'Qidiruv vaqti bir necha daqiqadan 1.2 soniyagacha tushdi va 98% aniqlik ta\'minlandi.',
        demoUrl: 'https://omnisearch.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/omnisearch-rag',
        featured: false
      },
      {
        id: 'neural-vision-qa',
        title: 'VisionGuard — Real Vaqtdagi Kompyuter Vizual Tizimi',
        category: 'Experiments',
        shortDescription: 'Jetson Nano qurilmasida lokal ishlaydigan va mahsulot nuqsonlarini aniqlovchi kompyuter vizualizatsiyasi.',
        fullDescription: 'YOLOv8 neyron tarmog\'iga asoslangan eksperimental kompyuter vizual tizimi bo\'lib, 60 FPS tezlikda konveyerdagi nuqsonlarni avtomatik aniqlaydi.',
        image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80',
        tags: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'TensorRT'],
        role: 'Computer Vision Muhandisi',
        architecture: [
          'TensorRT quantizatsiyasi bilan optizallashtirilgan YOLOv8',
          'Yuqori tezlikdagi kamera kadrlar buferi',
          'WebSocket orqali real vaqtdagi bildirishnomalar'
        ],
        results: 'Kichik qurilmada 60 FPS tezlik va 99.2% aniqlikda nuqsonlarni aniqladi.',
        demoUrl: 'https://visionguard.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/visionguard-cv',
        featured: false
      }
    ];
  }

  if (lang === 'ru') {
    return [
      {
        id: 'aegis-agent-framework',
        title: 'Aegis — Многоагентная Система Автоматизации',
        category: 'AI Agents',
        shortDescription: 'Автономная система AI-агентов для рефакторинга кода, написания тестов и аудита безопасности API.',
        fullDescription: 'Aegis — корпоративная фреймворк-система для разработчиков. Создана на Python, LangGraph и Gemini 1.5 Pro, распределяет задачи между специальными агентами (Архитектор, Кодер, Аудитор, Тестировщик).',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        tags: ['Python', 'LangGraph', 'Gemini API', 'FastAPI', 'Docker'],
        role: 'Ведущий AI Инженер & Архитектор',
        architecture: [
          'Многоагентная графовая оркестрация через LangGraph',
          'Асинхронная очередь задач с использованием Redis',
          'Семантический чанкинг кода и векторные эмбеддинги',
          'Изолированная среда выполнения в Docker контейнерах'
        ],
        results: 'Сокращение времени ревью кода на 68% и проведение более 10 000 автоматических проверок PR.',
        demoUrl: 'https://aegis-ai-demo.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/aegis-agents',
        featured: true
      },
      {
        id: 'uzbek-llm-fine-tune',
        title: 'Uzbek-LLM — Дообученная LLaMA 3 для Узбекского Языка',
        category: 'LLM & Fine-tuning',
        shortDescription: 'Языковая модель LLaMA 3 8B, дообученная на юридических и технических текстах узбекского языка.',
        fullDescription: 'Специализированная открытая модель для точного перевода, суммаризации документов и понимания терминологии на узбекском языке.',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
        tags: ['PyTorch', 'HuggingFace', 'QLoRA', 'LLaMA-3', 'vLLM'],
        role: 'AI Исследователь & Тренер Моделей',
        architecture: [
          'Очистка данных и создание датасета синтетических вопросов',
          '4-битное дообучение QLoRA на связке 2x RTX 4090',
          'Высокоскоростной инференс-сервер на базе vLLM',
          'Интеграция с веб-интерфейсом React и Gradio'
        ],
        results: 'Достигнута точность 91.4% на юридических тестах узбекского языка, превосходя стандартный GPT-3.5 Turbo.',
        demoUrl: 'https://uzbek-llm.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/uzbek-llama-3',
        featured: true
      },
      {
        id: 'mindforge-content-ai',
        title: 'MindForge — Генератор Сценариев и Сторибордов',
        category: 'AI Web Apps',
        shortDescription: 'AI-сервис, превращающий голосовые заметки в готовые видеосценарии, раскадровки и заголовки.',
        fullDescription: 'MindForge — веб-приложение для авторов контента. Превращает 30-секундное голосовое сообщение в структурированный сценарий с указанием ракурсов камеры и хуков.',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
        tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Tailwind'],
        role: 'Full-Stack Разработчик & AI Дизайнер',
        architecture: [
          'Распознавание речи через Whisper AI',
          'Промпт-инжиниринг с JSON режимом в GPT-4o',
          'Стриминг интерфейс реального времени',
          'Экспорт в Notion и PDF'
        ],
        results: 'Более 1200 авторов сократили время подготовки видео с 3 часов до 10 минут.',
        demoUrl: 'https://mindforge-ai.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/mindforge-studio',
        featured: true
      },
      {
        id: 'autocontent-pipeline-n8n',
        title: 'AutoContent — Автоматизированный Медиа-Движок',
        category: 'Automations',
        shortDescription: 'Автоматизация публикации IT-контента в 5 социальных сетях через N8n, Webhooks и AI API.',
        fullDescription: 'Автономная фабрика контента, которая отслеживает RSS, создаёт посты и визуальные обложки и публикует их в Telegram, LinkedIn и Twitter.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        tags: ['N8n', 'Python', 'Webhooks', 'Telegram API', 'Gemini API'],
        role: 'Архитектор Автоматизации',
        architecture: [
          'N8n воркфлоу бэкенд',
          'Генерация обложек через Imagen / DALL-E 3',
          'Telegram бот с кнопками модерации',
          'Логирование в PostgreSQL'
        ],
        results: 'Автоматизировано 85% дистрибуции контента, опубликовано более 400 постов без ручного копирования.',
        demoUrl: 'https://t.me/laziz_ai',
        githubUrl: 'https://github.com/laziz-ai/autocontent-n8n',
        featured: false
      },
      {
        id: 'omnisearch-enterprise-rag',
        title: 'OmniSearch — Векторный Поисковый Движок RAG',
        category: 'AI Web Apps',
        shortDescription: 'Скоростной семантический поиск по многостраничным техническим PDF документам.',
        fullDescription: 'Корпоративный поиск по техническим руководствам и документации с моментальным точным ответом и ссылкой на страницу.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        tags: ['TypeScript', 'Qdrant', 'Gemini API', 'Express', 'React'],
        role: 'AI Инженер',
        architecture: [
          'Гибридный векторный + ключевой поиск BM25',
          'Рекурсивный парсер Markdown и текстов',
          'Стриминг ответов с низкой задержкой',
          'Индексация до 200 мс'
        ],
        results: 'Время поиска сократилось с нескольких минут до 1.2 секунды с точностью фактов 98%.',
        demoUrl: 'https://omnisearch.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/omnisearch-rag',
        featured: false
      },
      {
        id: 'neural-vision-qa',
        title: 'VisionGuard — Компьютерное Зрение на Edge',
        category: 'Experiments',
        shortDescription: 'Система контроля качества детали на базе YOLOv8, работающая локально на Jetson Nano.',
        fullDescription: 'Экспериментальный проект компьютерного зрения для обнаружения микродефектов на сборочной линии со скоростью 60 FPS.',
        image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80',
        tags: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'TensorRT'],
        role: 'Инженер Компьютерного Зрения',
        architecture: [
          'Оптимизация YOLOv8 с помощью TensorRT FP16',
          'Высокоскоростной буфер видеокадров',
          'WebSocket алерты на веб-дашборд'
        ],
        results: 'Стабильные 60 FPS на энергоэффективном оборудовании с точностью 99.2%.',
        demoUrl: 'https://visionguard.laziz.ai',
        githubUrl: 'https://github.com/laziz-ai/visionguard-cv',
        featured: false
      }
    ];
  }

  // English fallback
  return [
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
};

export const getContentItems = (lang: Language): ContentItem[] => {
  if (lang === 'uz') {
    return [
      {
        id: 'content-1',
        title: 'Muxtor AI Agentlar Qanday Ishlaydi? (Shov-shuvsiz Texnik Tahlil)',
        category: 'Tech Breakdowns',
        views: '480K',
        platform: 'Instagram',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        description: 'AI agentlarda xotira, vektor qidiruvi va vositalar binar aloqasi 90 soniyalik kinematoqrafik videoda tushuntirilgan.',
        link: 'https://instagram.com/laziz.ai',
        metrics: { likes: '38.2K', shares: '14.5K', comments: '1.2K' }
      },
      {
        id: 'content-2',
        title: '48 Soatda Muxtor AI Startap Qurish: Hujjatli Filmi',
        category: 'Documentaries',
        views: '210K',
        platform: 'YouTube',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        description: 'Dastlabki prompit g\'oyasidan tortib, vektor bazani sozlash va birinchi daromadgacha bo\'lgan har bir bosqichni ko\'rsatuvchi dokumental vlog.',
        link: 'https://youtube.com/@laziz_ai',
        metrics: { likes: '19.4K', shares: '5.1K', comments: '890' }
      },
      {
        id: 'content-3',
        title: 'Prompt Injiniring Master-Klass: Boshlang\'ichdan Tizim Promptlarigacha',
        category: 'AI Tutorials',
        views: '350K',
        platform: 'Instagram',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        description: 'Few-Shot, Chain-of-Thought va XML teglar tuzilishi orqali ancha aniq natijalar olish bo\'yicha darslik.',
        link: 'https://instagram.com/laziz.ai',
        metrics: { likes: '29.1K', shares: '22.8K', comments: '940' }
      },
      {
        id: 'content-4',
        title: 'Lokal LLaMA 3 ni O\'zbek Tiliga Fine-Tune Qilish (Kod Bilan)',
        category: 'Short-Form Reels',
        views: '620K',
        platform: 'TikTok',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
        description: 'Python va Unsloth yordamida shaxsiy kompyuterda LLaMA-3 modelini QLoRA orqali fine-tune qilish videosi.',
        link: 'https://tiktok.com/@laziz_ai',
        metrics: { likes: '54.0K', shares: '31.2K', comments: '2.1K' }
      },
      {
        id: 'content-5',
        title: 'AI vs Senior Dasturchi: Kim Toza Kod Yozadi?',
        category: 'Tech Breakdowns',
        views: '410K',
        platform: 'YouTube',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
        description: 'Claude 3.5 Sonnet va tajribali dasturchi o\'rtasida murakkab refaktoring topshiriqlarini solishtirish testi.',
        link: 'https://youtube.com/@laziz_ai',
        metrics: { likes: '32.6K', shares: '9.8K', comments: '1.4K' }
      },
      {
        id: 'content-6',
        title: 'Apple Silicon (M3 Max) Kompyuterlarida Lokal AI Kelajagi',
        category: 'Short-Form Reels',
        views: '330K',
        platform: 'Instagram',
        thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        description: '70B parametrli modelni MLX orqali lokal yurgizib, soniyasiga tokenlar tezligini sinovdan o\'tkazish.',
        link: 'https://instagram.com/laziz.ai',
        metrics: { likes: '26.4K', shares: '11.2K', comments: '750' }
      }
    ];
  }

  if (lang === 'ru') {
    return [
      {
        id: 'content-1',
        title: 'Как На самом Деле Работают Автономные AI Агенты',
        category: 'Tech Breakdowns',
        views: '480K',
        platform: 'Instagram',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        description: 'Разбор работы векторного поиска, памяти и взаимодействия инструментов в AI агентских системах.',
        link: 'https://instagram.com/laziz.ai',
        metrics: { likes: '38.2K', shares: '14.5K', comments: '1.2K' }
      },
      {
        id: 'content-2',
        title: 'Создание Автономного AI Стартапа за 48 Часов: Фильм',
        category: 'Documentaries',
        views: '210K',
        platform: 'YouTube',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        description: 'Документальный влог от генерации идеи промпта до развертывания векторной базы и первых продаж.',
        link: 'https://youtube.com/@laziz_ai',
        metrics: { likes: '19.4K', shares: '5.1K', comments: '890' }
      },
      {
        id: 'content-3',
        title: 'Мастер-класс по Промпт-Инжинирингу: От Новичка до Системных Промптов',
        category: 'AI Tutorials',
        views: '350K',
        platform: 'Instagram',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        description: 'Разбор техник Few-Shot, Chain-of-Thought и форматирования XML тегов для повышения точности.',
        link: 'https://instagram.com/laziz.ai',
        metrics: { likes: '29.1K', shares: '22.8K', comments: '940' }
      },
      {
        id: 'content-4',
        title: 'Дообучение Модели LLaMA 3 под Узбекский Язык (Код и Разбор)',
        category: 'Short-Form Reels',
        views: '620K',
        platform: 'TikTok',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
        description: 'Динамичный ролик по дообучению LLaMA-3 с использованием Python и Unsloth на локальном ПК.',
        link: 'https://tiktok.com/@laziz_ai',
        metrics: { likes: '54.0K', shares: '31.2K', comments: '2.1K' }
      },
      {
        id: 'content-5',
        title: 'AI против Senior Разработчика: Кто Пишет Более Чистый Код?',
        category: 'Tech Breakdowns',
        views: '410K',
        platform: 'YouTube',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
        description: 'Сравнение способностей Claude 3.5 Sonnet и опытного инженера в сложных задачах рефакторинга.',
        link: 'https://youtube.com/@laziz_ai',
        metrics: { likes: '32.6K', shares: '9.8K', comments: '1.4K' }
      },
      {
        id: 'content-6',
        title: 'Будущее Локального ИИ на Apple Silicon (Тесты M3 Max)',
        category: 'Short-Form Reels',
        views: '330K',
        platform: 'Instagram',
        thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        description: 'Тестирование генерации токенов в секунду при запуске 70B модели локально через MLX.',
        link: 'https://instagram.com/laziz.ai',
        metrics: { likes: '26.4K', shares: '11.2K', comments: '750' }
      }
    ];
  }

  // English fallback
  return [
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
};

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

export const getProcessSteps = (lang: Language): ProcessStep[] => {
  if (lang === 'uz') {
    return [
      {
        number: '01',
        title: 'G\'oya va Muammoni Tahlil Qilish',
        tagline: 'Vazifani Qismlarga Ajratish',
        description: 'Loyiha maqsadi va AI eng yuqori samara beradigan nuqtalarni aniqlash.',
        deliverable: 'Mahsulot Spetsifikatsiyasi & AI Arxitektura Rejasi',
        tools: ['Excalidraw', 'Notion', 'Prompt Prototyping']
      },
      {
        number: '02',
        title: 'Tadqiqot va Model Tanlovi',
        tagline: 'Eng Maqbul AI Dvigatelini Tanlash',
        description: 'Tizim uchun Gemini/GPT API lari va lokal open-source (LLaMA/Qwen) modellarni solishtirish.',
        deliverable: 'Tahlil Matritsasi va Ma\'lumotlar Stratejiyasi',
        tools: ['HuggingFace', 'PyTorch', 'Model Benchmarks']
      },
      {
        number: '03',
        title: 'Arxitektura va Kodlash',
        tagline: 'Toza va Yuqori Unumli Kod',
        description: 'Ko\'p agentli mantiq, RAG konveyerlari va qulay foydalanuvchi interfeysini qurish.',
        deliverable: 'Ishchi Prototip va API Backend',
        tools: ['Python', 'LangGraph', 'React', 'FastAPI']
      },
      {
        number: '04',
        title: 'Sinov va Xavfsizlik',
        tagline: 'Chuqur Stress Testlari',
        description: 'Promptlar ustuvorligi, gallyutsinatsiya va cheklovlarni tekshirib chiqish.',
        deliverable: 'Test Hisobotlari va Aniqlik Kafolati',
        tools: ['Ragas', 'Docker', 'pytest', 'LlamaIndex']
      },
      {
        number: '05',
        title: 'Ishga Tushirish va Kontent',
        tagline: 'Keng Auditoriyaga Taqdirlash',
        description: 'Mahsulotni ishlab chiqarishga chiqarish va uni namoyish etuvchi vizual kontent yaratish.',
        deliverable: 'Ishchi Veb Ilova va Video Taqdimot',
        tools: ['GCP Cloud Run', 'Vite', 'YouTube / Reels']
      },
      {
        number: '06',
        title: 'Takomillashtirish va O\'stirish',
        tagline: 'Doimiy Yaxshilash',
        description: 'Foydalanuvchilar fikri va telemetriya asosida prompit va modellarni optimallashtirish.',
        deliverable: 'Telemetriya Boshqaruv Paneli va Yangilanish Rejasi',
        tools: ['PostHog', 'vLLM', 'LangSmith']
      }
    ];
  }

  if (lang === 'ru') {
    return [
      {
        number: '01',
        title: 'Идея и Формулировка Задачи',
        tagline: 'Декомпозиция Видения',
        description: 'Определение ключевых целей проекта и точек максимальной эффективности AI.',
        deliverable: 'Спецификация Продукта и План AI Архитектуры',
        tools: ['Excalidraw', 'Notion', 'Prompt Prototyping']
      },
      {
        number: '02',
        title: 'Исследование и Выбор Модели',
        tagline: 'Поиск Оптимального AI Движка',
        description: 'Сравнение коммерческих API (Gemini, GPT) и локальных открытых моделей (LLaMA).',
        deliverable: 'Матрица Бенчмарков и Стратегия Данных',
        tools: ['HuggingFace', 'PyTorch', 'Model Benchmarks']
      },
      {
        number: '03',
        title: 'Архитектура и Разработка',
        tagline: 'Чистая Реализация Кода',
        description: 'Разработка бэкенда, многоагентной логики, RAG и адаптивного веб-интерфейса.',
        deliverable: 'Рабочий Прототип и API Бэкенд',
        tools: ['Python', 'LangGraph', 'React', 'FastAPI']
      },
      {
        number: '04',
        title: 'Тестирование и Надежность',
        tagline: 'Нагрузочные Тесты и Настройки',
        description: 'Проверка устойчивости промптов, галлюцинаций и обработка ошибок.',
        deliverable: 'Отчеты о Тестировании и Метрики',
        tools: ['Ragas', 'Docker', 'pytest', 'LlamaIndex']
      },
      {
        number: '05',
        title: 'Релиз и Медиа-Кампания',
        tagline: 'Запуск с Максимальным Эффектом',
        description: 'Развертывание приложения в продакшен и подготовка обзоров для аудитории.',
        deliverable: 'Работающий Сервис и Видео-Запуск',
        tools: ['GCP Cloud Run', 'Vite', 'YouTube / Reels']
      },
      {
        number: '06',
        title: 'Итерации и Масштабирование',
        tagline: 'Непрерывное Улучшение',
        description: 'Анализ пользовательского поведения и дообучение моделей.',
        deliverable: 'Дашборд Метрик и Роадмап v2',
        tools: ['PostHog', 'vLLM', 'LangSmith']
      }
    ];
  }

  // English fallback
  return [
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
};

export const getTestimonials = (lang: Language): Testimonial[] => {
  if (lang === 'uz') {
    return [
      {
        id: 'test-1',
        quote: 'Laziz bizning kompaniyamiz uchun maxsus RAG qidiruv tizimini 3 hafta ichida yaratib berdi. Eng hayratlantirgani — uning toza kodi va reliz kuni 200 ming ko\'rilgan taqdimot videosi bo\'ldi.',
        author: 'Sardor Rahimov',
        role: 'Hamtasischi & CTO',
        company: 'TechFlow Central Asia',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        projectType: 'Korporativ AI Qidiruv Tizimi'
      },
      {
        id: 'test-2',
        quote: 'Dasturlashda ham, tushunarli va qiziqarli videolar yaratishda ham birdek professional bo\'lgan muhandisni uchratish juda kamdan-kam holat. Laziz — texnologiyalar olamida haqiqiy mutaxassis.',
        author: 'Elena Vance',
        role: 'Innovatsiyalar Rahbari',
        company: 'Neural Labs Global',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        projectType: 'AI Agent Tizimi va Video Taqdimot'
      },
      {
        id: 'test-3',
        quote: 'Laziz bilan ishlash brendimizni yangi bosqichga olib chiqdi. Uning texnik videolardan 50,000+ dasturchilar platformamizga a\'zo bo\'lishdi.',
        author: 'Jamshid Alimov',
        role: 'Mahsulot Rahbari',
        company: 'DataSphere Tech',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        projectType: 'Texnologik Kampaniya & AI Integratsiya'
      }
    ];
  }

  if (lang === 'ru') {
    return [
      {
        id: 'test-1',
        quote: 'Лазиз создал для нашей компании поисковый движок RAG менее чем за 3 недели. Нас поразил как чистый код, так и презентационный ролик, набравший 200к просмотров в день запуска.',
        author: 'Сардор Рахимов',
        role: 'Сооснователь & CTO',
        company: 'TechFlow Central Asia',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        projectType: 'Корпоративная Поисковая Система AI'
      },
      {
        id: 'test-2',
        quote: 'Редко встретишь AI-инженера, который одинаково виртуозно разбирается в архитектуре моделей Python и умеет создавать захватывающий обучающий видеоконтент.',
        author: 'Елена Вэнс',
        role: 'Руководитель Инноваций',
        company: 'Neural Labs Global',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        projectType: 'Система AI Агентов и Видео-Презентация'
      },
      {
        id: 'test-3',
        quote: 'Сотрудничество с Лазизом трансформировало наш бренд. Его видеообзоры привлекли более 50 000 разработчиков на нашу платформу.',
        author: 'Джамшид Алимов',
        role: 'Продукт-Лид',
        company: 'DataSphere Tech',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        projectType: 'Техническая Кампания и AI Интеграция'
      }
    ];
  }

  // English fallback
  return [
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
};
