export type Language = 'uz' | 'ru' | 'en';

export interface Translations {
  nav: {
    about: string;
    aiEngineering: string;
    contentCreation: string;
    technologies: string;
    approach: string;
    synergy: string;
    contact: string;
    available: string;
    letBuild: string;
  };
  hero: {
    badge: string;
    role: string;
    greeting: string;
    tagline: string;
    description: string;
    ctaProjects: string;
    ctaMedia: string;
    stats: {
      projects: string;
      views: string;
      tech: string;
      experience: string;
    };
  };
  about: {
    badge: string;
    heading: string;
    subheading: string;
    bioParagraph1: string;
    bioParagraph2: string;
    pillarsTitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  aiEngineering: {
    badge: string;
    heading: string;
    subheading: string;
    viewDetails: string;
    liveDemo: string;
    githubCode: string;
    architecture: string;
    results: string;
    categories: {
      all: string;
      agents: string;
      webApps: string;
      automations: string;
      llm: string;
      experiments: string;
    };
  };
  contentCreation: {
    badge: string;
    heading: string;
    subheading: string;
    watchNow: string;
    views: string;
    categories: {
      all: string;
      reels: string;
      breakdowns: string;
      tutorials: string;
      documentaries: string;
    };
  };
  techStack: {
    badge: string;
    heading: string;
    subheading: string;
    uses: string;
    experience: string;
  };
  approach: {
    badge: string;
    heading: string;
    subheading: string;
    deliverable: string;
    tools: string;
  };
  synergy: {
    badge: string;
    heading: string;
    subheading: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    typeLabel: string;
    budgetLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    directEmail: string;
    telegram: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    socials: string;
    rights: string;
  };
  modal: {
    close: string;
    overview: string;
    architecture: string;
    results: string;
    technologies: string;
    metrics: string;
    visit: string;
    code: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      about: 'Haqimda',
      aiEngineering: 'AI Injiniring',
      contentCreation: 'Kontent',
      technologies: 'Texnologiyalar',
      approach: 'Yondashuv',
      synergy: 'AI + Kontent',
      contact: 'Aloqa',
      available: 'Loyihalar uchun ochiq',
      letBuild: "Keling, quramiz",
    },
    hero: {
      badge: 'Sun\'iy Intellekt va Kontent',
      role: 'AI Muhandis & Kontent Meyker',
      greeting: 'Salom, men Laziz',
      tagline: 'Muxtor AI Arxitekturasi va Texnologik Storytelling',
      description: 'Men murakkab sun\'iy intellekt agentlarini yarataman, ochiq manbali LLM modellarini sozlayman va 2M+ dasturchilar uchun yuqori ta\'sirchan texnologik kontentlar tayyorlayman.',
      ctaProjects: 'AI Loyihalarni Ko\'rish',
      ctaMedia: 'Media & Videolar',
      stats: {
        projects: 'Yaratilgan AI Loyihalar',
        views: 'Kontent Ko\'rishlar Soni',
        tech: 'Asosiy Texnologiyalar',
        experience: 'Yillik Tajriba',
      },
    },
    about: {
      badge: 'Profil & Missiya',
      heading: 'Dasturlash va Media Chorrahasida',
      subheading: 'Intellektual AI tizimlarini yaratish va ularni sodda hamda ta\'sirli tilda auditoriyaga yetkazish.',
      bioParagraph1: 'Men O\'zbekistonda joylashgan AI muhandis va content makerman. Mening asosiy vazifam — AI agentlarni yaratish va AI orqali turli xil applar va web sitelar yaratish, va ularni odamlar bilan ulashib, ularga shu sohani o\'rgatish.',
      bioParagraph2: 'Bu sohada 2 yillik tajribam bor va bundan tashqari ingliz tili xalqaro sertifikati IELTSdan 6 ball egasiman. Har bir loyihani professional darajada va global standartlarga mos holda amalga oshiraman.',
      pillarsTitle: 'Asosiy Ustunlar',
      pillar1Title: 'Muxtor AI Agentlar',
      pillar1Desc: 'LangGraph va Gemini yordamida murakkab vazifalarni avtomatlashtiruvchi ko\'p agentli tizimlar.',
      pillar2Title: 'LLM Fine-Tuning',
      pillar2Desc: 'O\'zbek tili va sohaviy ma\'lumotlar bo\'yicha LLaMA-3 va open-source modellarini sozlash.',
      pillar3Title: 'Tech Storytelling',
      pillar3Desc: 'Murakkab AI arxitekturalarini sodda va qiziqarli vizual videolar va maqolalar orqali yoritish.',
    },
    aiEngineering: {
      badge: 'Portfel',
      heading: 'AI Injiniring Loyihalari',
      subheading: 'Amaliyotda ishlaydigan real AI agentlar, LLM modellar va aqlli veb-ilovalar.',
      viewDetails: 'Batafsil',
      liveDemo: 'Demo',
      githubCode: 'Manba kodi',
      architecture: 'Arxitektura',
      results: 'Natija va Ta\'sir',
      categories: {
        all: 'Barchasi',
        agents: 'AI Agentlar',
        webApps: 'AI Veb Ilovalar',
        automations: 'Avtomatlashtirish',
        llm: 'LLM & Fine-tuning',
        experiments: 'Eksperimentlar',
      },
    },
    contentCreation: {
      badge: 'Media & Ta\'sir',
      heading: 'Texnologik Kontentlar',
      subheading: 'Millionlab ko\'rilgan vizual videolar, darsliklar va texnik tahlillar.',
      watchNow: 'Tomosha qilish',
      views: 'ko\'rishlar',
      categories: {
        all: 'Barchasi',
        reels: 'Qisqa Reels/Shorts',
        breakdowns: 'Texnik Tahlillar',
        tutorials: 'AI Darsliklar',
        documentaries: 'Hujjatli Videolar',
      },
    },
    techStack: {
      badge: 'Ko\'nikmalar',
      heading: 'Texnologik Stek',
      subheading: 'Loyihalarda qo\'llaniladigan zamonaviy freymvorklar va vositalar.',
      uses: 'Ko\'p qo\'llaniladigan sohalar:',
      experience: 'Tajriba:',
    },
    approach: {
      badge: 'Metodologiya',
      heading: 'Ishlash Yondashuvi',
      subheading: 'G\'oyadan tortib ishlab chiqarish va kontent targ\'ibotigacha bo\'lgan 6 bosqich.',
      deliverable: 'Natijaviy Hujjat / Mahsulot:',
      tools: 'Ishlatiladigan Vositalar:',
    },
    synergy: {
      badge: 'Sinergiya',
      heading: 'Nega AI + Kontent?',
      subheading: 'Muhandislik va media uyg\'unligi yaratadigan mislsiz ustunliklar.',
      card1Title: 'Tezkor Mahsulot Validatsiyasi',
      card1Desc: 'Yaratilgan AI vositasini darhol minglab dasturchilar auditoriyasida sinovdan o\'tkazish va qayta aloqa olish.',
      card2Title: 'Dasturchilar Ishonchi',
      card2Desc: 'Shaffof kod va tushunarli arxitektura tahlillari orqali auditoriyada yuqori darajadagi ishonch shakllantirish.',
      card3Title: 'Virusli Organik O\'sish',
      card3Desc: 'Reklama xarajatlarisiz, sifatli va foydali vizual kontent orqali mahsulotga organik mijozlar jalb qilish.',
    },
    contact: {
      badge: 'Bog\'lanish',
      heading: 'Birgalikda AI Loyiha Quramiz',
      subheading: 'G\'oyangiz bormi yoki AI maslahati kerakmi? Quyidagi shakl orqali xabar qoldiring.',
      nameLabel: 'Ismingiz',
      namePlaceholder: 'Jasur Karimov',
      emailLabel: 'Email manzilingiz',
      emailPlaceholder: 'jasur@example.com',
      typeLabel: 'Loyiha turi',
      budgetLabel: 'Byudjet diapazoni',
      messageLabel: 'Loyiha haqida batafsil',
      messagePlaceholder: 'Loyiha maqsadi, talablar va muddatlar haqida yazing...',
      submit: 'Xabar Yuborish',
      sending: 'Yuborilmoqda...',
      successTitle: 'Xabar Muvaffaqiyatli Yuborildi!',
      successMessage: 'Tashakkur! Tez orada siz bilan bog\'lanaman.',
      directEmail: 'Doimiy Email',
      telegram: 'Telegram Kanal / Aloqa',
    },
    footer: {
      tagline: 'Muxtor AI Tizimlari va Texnologik Storytelling.',
      quickLinks: 'Tezkor Havolalar',
      socials: 'Ijtimoiy Tarmoqlar',
      rights: 'Barcha huquqlar himoyalangan.',
    },
    modal: {
      close: 'Yopish',
      overview: 'Loyiha Haqida',
      architecture: 'Asosiy Arxitektura',
      results: 'Erishilgan Natijalar',
      technologies: 'Texnologiyalar',
      metrics: 'Metrikalar',
      visit: 'Saytga o\'tish',
      code: 'GitHub kodi',
    },
  },
  ru: {
    nav: {
      about: 'О себе',
      aiEngineering: 'AI Инженерия',
      contentCreation: 'Контент',
      technologies: 'Технологии',
      approach: 'Подход',
      synergy: 'AI + Контент',
      contact: 'Контакты',
      available: 'Доступен для проектов',
      letBuild: 'Создадим проект',
    },
    hero: {
      badge: 'Искусственный Интеллект и Контент',
      role: 'AI Инженер & Контент-мейкер',
      greeting: 'Привет, я Лазиз',
      tagline: 'Автономная AI Архитектура и Технологический Сторителлинг',
      description: 'Я создаю автономных AI-агентов, дообучаю открытые LLM-модели и делаю высококлассный контент о технологиях для 2M+ разработчиков.',
      ctaProjects: 'Смотреть AI Проекты',
      ctaMedia: 'Медиа & Видео',
      stats: {
        projects: 'Созданных AI Проектов',
        views: 'Просмотров Контента',
        tech: 'Технологический Стек',
        experience: 'Лет Опыта',
      },
    },
    about: {
      badge: 'Профиль & Миссия',
      heading: 'На Стыке Разработки и Медиа',
      subheading: 'Создание интеллектуальных AI-систем и их понятная презентация широкой аудитории.',
      bioParagraph1: 'Я AI-инженер и создатель контента из Узбекистана. Моя основная миссия — разрабатывать AI-агентов, создавать разнообразные приложения и веб-сайты на основе AI, делиться ими с людьми и обучать их в этой области.',
      bioParagraph2: 'У меня 2 года опыта в этой сфере, а также международный сертификат по английскому языку IELTS с баллом 6. Каждый проект я реализую на профессиональном уровне в соответствии с мировыми стандартами.',
      pillarsTitle: 'Ключевые Направления',
      pillar1Title: 'Автономные AI Агенты',
      pillar1Desc: 'Многоагентные системы на базе LangGraph и Gemini для автоматизации сложных процессов.',
      pillar2Title: 'Fine-Tuning LLM',
      pillar2Desc: 'Адаптация LLaMA-3 и open-source моделей под узбекский язык и специализированные базы данных.',
      pillar3Title: 'Tech Storytelling',
      pillar3Desc: 'Наглядный разбор сложных архитектур ИИ через качественные визуальные ролики и статьи.',
    },
    aiEngineering: {
      badge: 'Портфолио',
      heading: 'Проекты AI Инженерии',
      subheading: 'Работающие в продакшене AI-агенты, LLM модели и интеллектуальные веб-сервисы.',
      viewDetails: 'Подробнее',
      liveDemo: 'Демо',
      githubCode: 'Исходный код',
      architecture: 'Архитектура',
      results: 'Результаты и Эффект',
      categories: {
        all: 'Все',
        agents: 'AI Агенты',
        webApps: 'AI Веб-Сервисы',
        automations: 'Автоматизация',
        llm: 'LLM & Fine-tuning',
        experiments: 'Эксперименты',
      },
    },
    contentCreation: {
      badge: 'Медиа & Влияние',
      heading: 'Технологический Контент',
      subheading: 'Вирусные видеоролики, обучающие материалы и архитектурные разборы.',
      watchNow: 'Смотреть',
      views: 'просмотров',
      categories: {
        all: 'Все',
        reels: 'Короткие Reels/Shorts',
        breakdowns: 'Разборы Архитектур',
        tutorials: 'Уроки по AI',
        documentaries: 'Документальные Видео',
      },
    },
    techStack: {
      badge: 'Навыки',
      heading: 'Технологический Стек',
      subheading: 'Современные фреймворки и инструменты, используемые в проектах.',
      uses: 'Основные сферы применения:',
      experience: 'Опыт:',
    },
    approach: {
      badge: 'Методология',
      heading: 'Процесс Разработки',
      subheading: '6 этапов от концепции до запуска в продакшен и медиа-сопровождения.',
      deliverable: 'Результат / Продукт:',
      tools: 'Используемые Инструменты:',
    },
    synergy: {
      badge: 'Синергия',
      heading: 'Почему AI + Контент?',
      subheading: 'Уникальные преимущества объединения инженерии и медиа-ресурсов.',
      card1Title: 'Быстрая Валидация Продукта',
      card1Desc: 'Мгновенное тестирование AI-инструментов на лояльной аудитории разработчиков.',
      card2Title: 'Доверие Разработчиков',
      card2Desc: 'Высокая лояльность за счет открытого кода и подробных разборов архитектуры.',
      card3Title: 'Органический Вирусный Рост',
      card3Desc: 'Привлечение пользователей без затрат на рекламу благодаря ценному контенту.',
    },
    contact: {
      badge: 'Контакты',
      heading: 'Создадим AI Проект Вместе',
      subheading: 'Есть идея или нужна консультация по AI? Заполните форму ниже.',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Иван Иванов',
      emailLabel: 'Ваш Email',
      emailPlaceholder: 'ivan@example.com',
      typeLabel: 'Тип проекта',
      budgetLabel: 'Бюджет',
      messageLabel: 'Детали проекта',
      messagePlaceholder: 'Опишите цели, задачи и сроки проекта...',
      submit: 'Отправить Сообщение',
      sending: 'Отправка...',
      successTitle: 'Сообщение Успешно Отправлено!',
      successMessage: 'Спасибо! Я свяжусь с вами в ближайшее время.',
      directEmail: 'Прямой Email',
      telegram: 'Telegram Канал',
    },
    footer: {
      tagline: 'Автономные AI Системы и Технологический Сторителлинг.',
      quickLinks: 'Быстрые Ссылки',
      socials: 'Социальные Сети',
      rights: 'Все права защищены.',
    },
    modal: {
      close: 'Закрыть',
      overview: 'О Проекте',
      architecture: 'Архитектура',
      results: 'Достигнутые Результаты',
      technologies: 'Технологии',
      metrics: 'Метрики',
      visit: 'Перейти на сайт',
      code: 'Исходный код',
    },
  },
  en: {
    nav: {
      about: 'About',
      aiEngineering: 'AI Engineering',
      contentCreation: 'Content',
      technologies: 'Technologies',
      approach: 'Approach',
      synergy: 'AI + Content',
      contact: 'Contact',
      available: 'Available for Projects',
      letBuild: "Let's Build",
    },
    hero: {
      badge: 'Artificial Intelligence & Content',
      role: 'AI Engineer & Content Creator',
      greeting: "Hello, I'm Laziz",
      tagline: 'Bridging Autonomous AI Architecture & Visual Tech Storytelling',
      description: 'I build autonomous AI agents, fine-tune open-source LLMs, and craft high-impact tech content that demystifies artificial intelligence for 2M+ developers worldwide.',
      ctaProjects: 'View AI Projects',
      ctaMedia: 'Media & Videos',
      stats: {
        projects: 'AI Projects Built',
        views: 'Content Views',
        tech: 'Core Tech Stack',
        experience: 'Years Experience',
      },
    },
    about: {
      badge: 'Profile & Mission',
      heading: 'At the Intersection of Code & Media',
      subheading: 'Building intelligent AI systems and explaining complex architectures with clarity.',
      bioParagraph1: 'I am an AI Engineer and Content Creator based in Uzbekistan. My core mission is to build AI agents, create diverse apps and websites powered by AI, share them with people, and teach others in this field.',
      bioParagraph2: 'I have 2 years of experience in this field and hold an international English certificate — IELTS with a score of 6. I deliver every project at a professional level aligned with global standards.',
      pillarsTitle: 'Core Pillars',
      pillar1Title: 'Autonomous AI Agents',
      pillar1Desc: 'Multi-agent orchestration systems built with LangGraph and Gemini for complex workflows.',
      pillar2Title: 'LLM Fine-Tuning',
      pillar2Desc: 'Customizing open-source LLMs for localized languages and domain-specific corpora.',
      pillar3Title: 'Tech Storytelling',
      pillar3Desc: 'Demystifying complex AI architectures through engaging cinematic videos and breakdowns.',
    },
    aiEngineering: {
      badge: 'Portfolio',
      heading: 'AI Engineering Projects',
      subheading: 'Production-ready autonomous AI agents, fine-tuned models, and smart web apps.',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo',
      githubCode: 'Source Code',
      architecture: 'Architecture',
      results: 'Results & Impact',
      categories: {
        all: 'All',
        agents: 'AI Agents',
        webApps: 'AI Web Apps',
        automations: 'Automations',
        llm: 'LLM & Fine-tuning',
        experiments: 'Experiments',
      },
    },
    contentCreation: {
      badge: 'Media & Impact',
      heading: 'Tech Content Creation',
      subheading: 'Viral tech breakdowns, tutorials, and documentaries reaching millions of developers.',
      watchNow: 'Watch Now',
      views: 'views',
      categories: {
        all: 'All',
        reels: 'Short-Form Reels',
        breakdowns: 'Tech Breakdowns',
        tutorials: 'AI Tutorials',
        documentaries: 'Documentaries',
      },
    },
    techStack: {
      badge: 'Skills',
      heading: 'Technology Stack',
      subheading: 'Modern frameworks, libraries, and cloud infrastructure used across projects.',
      uses: 'Popular Uses:',
      experience: 'Experience:',
    },
    approach: {
      badge: 'Methodology',
      heading: 'Development Approach',
      subheading: 'A 6-step framework from initial concept to production deployment and media push.',
      deliverable: 'Key Deliverable:',
      tools: 'Primary Tools:',
    },
    synergy: {
      badge: 'Synergy',
      heading: 'Why AI + Content?',
      subheading: 'Unfair advantages created by combining deep engineering with media distribution.',
      card1Title: 'Rapid Product Validation',
      card1Desc: 'Instant feedback loops by launching new AI tools directly to a developer audience.',
      card2Title: 'Developer Trust & Authority',
      card2Desc: 'Building genuine trust through open-source code and deep architecture teardowns.',
      card3Title: 'Viral Organic Growth',
      card3Desc: 'Driving massive user adoption with zero ad spend through educational storytelling.',
    },
    contact: {
      badge: 'Get In Touch',
      heading: "Let's Build an AI Solution",
      subheading: 'Have a project idea or need AI architecture consulting? Send a message below.',
      nameLabel: 'Your Name',
      namePlaceholder: 'Alex Johnson',
      emailLabel: 'Your Email',
      emailPlaceholder: 'alex@example.com',
      typeLabel: 'Project Type',
      budgetLabel: 'Budget Range',
      messageLabel: 'Project Details',
      messagePlaceholder: 'Describe your goals, requirements, and timeline...',
      submit: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent Successfully!',
      successMessage: 'Thank you! I will get back to you shortly.',
      directEmail: 'Direct Email',
      telegram: 'Telegram Channel',
    },
    footer: {
      tagline: 'Autonomous AI Systems & Visual Tech Storytelling.',
      quickLinks: 'Quick Links',
      socials: 'Social Media',
      rights: 'All rights reserved.',
    },
    modal: {
      close: 'Close',
      overview: 'Project Overview',
      architecture: 'Key Architecture',
      results: 'Measured Results',
      technologies: 'Technologies Used',
      metrics: 'Engagement Metrics',
      visit: 'Visit Live Site',
      code: 'Source Code',
    },
  },
};
