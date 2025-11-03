import React from 'react';
import { Users, BookOpen, Wand2 } from 'lucide-react';

const tabs = [
  { key: 'reader', label: 'Reader', icon: BookOpen },
  { key: 'generator', label: 'Generator', icon: Wand2 },
  { key: 'community', label: 'Community', icon: Users },
];

export default function HeaderNav({ current, onChange }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
          <div className="leading-tight">
            <h1 className="text-white font-semibold tracking-tight">MangaVerse</h1>
            <p className="text-xs text-white/60">Read • Create • Connect</p>
          </div>
        </div>

        <nav className="flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm transition-colors ${
                current === key
                  ? 'bg-white/10 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition">Sign in</button>
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow">Get Pro</button>
        </div>
      </div>
    </header>
  );
}
