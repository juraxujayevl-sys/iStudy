import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AiEngineering } from './components/AiEngineering';
import { ContentCreation } from './components/ContentCreation';
import { TechStack } from './components/TechStack';
import { ApproachTimeline } from './components/ApproachTimeline';
import { ContentAiSynergy } from './components/ContentAiSynergy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { MediaModal } from './components/MediaModal';
import { AiProject, ContentItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<AiProject | null>(null);
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);

  // Intersection observer for section highlight in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'ai-engineering', 'content-creation', 'technologies', 'approach', 'synergy', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-cyan-500 selection:text-black">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <AiEngineering onSelectProject={(project) => setSelectedProject(project)} />
        <ContentCreation onSelectContent={(item) => setSelectedContent(item)} />
        <TechStack />
        <ApproachTimeline />
        <ContentAiSynergy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <MediaModal
        item={selectedContent}
        onClose={() => setSelectedContent(null)}
      />
    </div>
  );
}
