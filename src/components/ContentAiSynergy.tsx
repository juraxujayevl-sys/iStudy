import React, { useState } from 'react';
import { Sparkles, Terminal, Video, Cpu, Copy, Check, RefreshCw, Zap } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { useLanguage } from '../context/LanguageContext';

export const ContentAiSynergy: React.FC = () => {
  const { language, t } = useLanguage();
  const [promptInput, setPromptInput] = useState('Build an AI Agent for automated code reviews');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  
  // Default sample result
  const [result, setResult] = useState<{
    architectureTitle: string;
    codeSnippet: string;
    contentHook: string;
    scriptOutline: string[];
    techImpact: string;
  }>({
    architectureTitle: 'Aegis Agentic Code Review Graph',
    codeSnippet: `from google import genai\nfrom langgraph.graph import StateGraph\n\n# Initialize Gemini 1.5 Client\nclient = genai.Client()\n\ndef code_audit_agent(state):\n    response = client.models.generate_content(\n        model='gemini-2.5-flash',\n        contents=f"Analyze code security: {state['code']}"\n    )\n    return {"audit_notes": response.text}`,
    contentHook: '⚡ "Stop reviewing PRs manually. Here is how a 15-line Python AI Agent catches 90% of bugs before production!"',
    scriptOutline: [
      '0:00 - Hook: Show a buggy PR that passed human review.',
      '0:15 - Code: Explain the LangGraph state loop in 2 sentences.',
      '0:40 - Demo: Run the terminal command live on screen.',
      '1:00 - Call to Action: Grab the open-source code on my GitHub.'
    ],
    techImpact: 'Estimated Reach: 350K+ Views • 12,000+ GitHub Stars Target'
  });

  const presetTopics = [
    'Automated Code Review Agent',
    'Uzbek Legal LLM Fine-Tuning',
    'RAG Search for PDF Technical Manuals',
    'Voice-to-Video Script Studio'
  ];

  const handleGenerate = async (topicToUse?: string) => {
    const topic = topicToUse || promptInput;
    if (!topic.trim()) return;

    setIsGenerating(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
        const ai = new GoogleGenAI({ apiKey });
        const systemInstruction = `You are Laziz, an expert AI Engineer and Content Creator in Uzbekistan.
The user gives a topic or AI project idea.
Return a valid JSON object with keys:
- architectureTitle: short project title
- codeSnippet: 8-12 lines of clean Python / Gemini code snippet
- contentHook: viral short video hook in quotes
- scriptOutline: array of 4 short timeline steps for a tech video
- techImpact: expected views & impact
Return ONLY raw JSON.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `Topic: ${topic}`,
          config: {
            systemInstruction,
            responseMimeType: 'application/json'
          }
        });

        if (response.text) {
          const parsed = JSON.parse(response.text);
          setResult(parsed);
          setIsGenerating(false);
          return;
        }
      }
    } catch (err) {
      console.warn('Gemini API call fell back to local generator:', err);
    }

    // Local intelligent generator fallback
    setTimeout(() => {
      setResult({
        architectureTitle: `${topic} System Architecture`,
        codeSnippet: `# Laziz AI Lab — ${topic}\nimport asyncio\nfrom google import genai\n\nasync def run_pipeline(prompt: str):\n    ai = genai.Client()\n    response = await ai.aio.models.generate_content(\n        model="gemini-2.5-flash",\n        contents=f"Execute workflow for: {prompt}"\n    )\n    print("[LAZIZ_AI] Execution Output:", response.text)\n\nasyncio.run(run_pipeline("${topic}"))`,
        contentHook: `🔥 "Why 99% of developers build ${topic} wrong — and the 3-step AI pattern that actually scales in production!"`,
        scriptOutline: [
          `0:00 - Hook: The #1 flaw when building ${topic}.`,
          '0:20 - Tech: Show vector embeddings & LLM function calling diagram.',
          '0:45 - Live Demo: Run the Python execution script.',
          '1:15 - CTA: Link in bio for full source code & weights.'
        ],
        techImpact: `Target Reach: 420K+ Tech Enthusiasts • High Engagement`
      });
      setIsGenerating(false);
    }, 800);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(result.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="synergy" className="py-24 relative bg-slate-50 dark:bg-[#090A0F] overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // {t.synergy.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.synergy.heading}
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base">
            {t.synergy.subheading}
          </p>
        </div>

        {/* Feature Spotlight Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          <div className="lg:col-span-5 rounded-3xl glass-panel p-8 border border-slate-200 dark:border-white/10 space-y-6 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-white dark:bg-[#090A0F] rounded-[15px] flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Zap className="w-7 h-7" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.synergy.card1Title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
              {t.synergy.card1Desc}
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center gap-3 text-xs text-cyan-700 dark:text-cyan-300">
                <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>1. {t.synergy.card1Title}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center gap-3 text-xs text-purple-700 dark:text-purple-300">
                <Video className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>2. {t.synergy.card2Title}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center gap-3 text-xs text-emerald-700 dark:text-emerald-300">
                <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>3. {t.synergy.card3Title}</span>
              </div>
            </div>
          </div>

          {/* Interactive AI Studio Box */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6 bg-white/90 dark:bg-[#0F121A]/90">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                  laziz_ai_studio_v2.py
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 px-2 py-1 rounded bg-slate-200 dark:bg-white/5">
                LIVE DEMO
              </span>
            </div>

            {/* Topic Input Bar */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-600 dark:text-gray-300 block">
                Enter an AI Project or Tech Topic to Generate Code + Content Breakdown:
              </label>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder="e.g. Build an AI Agent for automated code reviews"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/60 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  id="ai-studio-topic-input"
                />
                <button
                  onClick={() => handleGenerate()}
                  disabled={isGenerating}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                  id="btn-generate-ai-studio"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Synthesizing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Synthesize</span>
                    </>
                  )}
                </button>
              </div>

              {/* Preset buttons */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] font-mono text-slate-400 dark:text-gray-500">Presets:</span>
                {presetTopics.map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPromptInput(topic);
                      handleGenerate(topic);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-[10px] font-mono text-cyan-700 dark:text-cyan-300 border border-slate-300 dark:border-white/10 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Generated Output Showcase */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
              
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{result.architectureTitle}</span>
                </h4>
                <button
                  onClick={copyCode}
                  className="p-1.5 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 text-xs font-mono flex items-center gap-1 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 rounded-xl bg-slate-900 dark:bg-black/80 border border-slate-800 dark:border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto">
                <pre>{result.codeSnippet}</pre>
              </div>

              {/* Content Strategy Breakdown */}
              <div className="p-4 rounded-xl bg-purple-100 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-900 dark:text-purple-300">
                  <Video className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Viral Video Hook & Content Strategy</span>
                </div>
                <p className="text-xs text-purple-950 dark:text-gray-200 italic">
                  {result.contentHook}
                </p>

                <div className="pt-2 border-t border-purple-200 dark:border-purple-500/20 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700 dark:text-gray-300">
                  {result.scriptOutline.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  ⚡ {result.techImpact}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
