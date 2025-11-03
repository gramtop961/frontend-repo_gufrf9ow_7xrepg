import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import MangaReader from './components/MangaReader.jsx';
import MangaGenerator from './components/MangaGenerator.jsx';
import CommunityHub from './components/CommunityHub.jsx';

export default function App() {
  const [section, setSection] = useState('reader');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <HeaderNav current={section} onChange={setSection} />

      {section === 'reader' && <MangaReader />}
      {section === 'generator' && <MangaGenerator />}
      {section === 'community' && <CommunityHub />}

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-white/60 text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} MangaVerse. Built for creativity.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
