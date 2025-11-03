import React, { useMemo, useState } from 'react';
import { Wand2, Sparkles, Image as ImageIcon, Palette, Users, Bookmark } from 'lucide-react';

function generateContent(prompt, style, theme) {
  const seed = (prompt + style + theme).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const rng = (n) => Math.abs(Math.sin(seed + n));
  const genres = ['Action', 'Fantasy', 'Sci‑Fi', 'Mystery', 'Romance', 'Slice of Life'];
  const moods = ['Hopeful', 'Dark', 'Whimsical', 'Epic', 'Melancholic'];
  const settings = ['Neo‑Tokyo', 'Floating City', 'Arcane Academy', 'Lunar Colony', 'Sunken Kingdom'];

  const title = `${theme} of ${['Shadows','Starlight','Embers','Echoes','Dreams'][Math.floor(rng(1)*5)]}`;
  const mainTheme = `${moods[Math.floor(rng(2)*moods.length)]} ${genres[Math.floor(rng(3)*genres.length)]}`;
  const location = settings[Math.floor(rng(4)*settings.length)];

  const characters = Array.from({ length: 4 }, (_, i) => ({
    name: ['Aki','Rin','Kaito','Mira','Yuki','Ren'][Math.floor(rng(10+i)*6)],
    role: ['Protagonist','Deuteragonist','Mentor','Antagonist'][Math.floor(rng(20+i)*4)],
    trait: ['Stoic','Reckless','Clever','Empathic','Lone Wolf'][Math.floor(rng(30+i)*5)],
  }));

  const keyPoints = [
    `Inciting Incident in ${location}`,
    `Trial that tests ${characters[0].name}'s resolve`,
    `Twist: a secret in the ${location}`,
    'Rivalry escalates under crimson moon',
    'Cliffhanger at the gates of fate',
  ];

  const panels = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    caption: ['Arrival','Confrontation','Quiet Moment','Revelation','Chase','Final Stand'][i % 6],
  }));

  return { title, mainTheme, characters, keyPoints, panels };
}

export default function MangaGenerator() {
  const [prompt, setPrompt] = useState('cyber ninja in neon city');
  const [style, setStyle] = useState('ink & screentone');
  const [theme, setTheme] = useState('Echo');
  const [data, setData] = useState(() => generateContent(prompt, style, theme));

  const posterGradient = useMemo(() => {
    const colors = [
      'from-fuchsia-600 to-indigo-600',
      'from-cyan-500 to-blue-700',
      'from-rose-500 to-orange-500',
      'from-emerald-500 to-teal-700',
    ];
    const idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
  }, [data]);

  function handleGenerate(e) {
    e.preventDefault();
    setData(generateContent(prompt, style, theme));
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid lg:grid-cols-3 gap-6">
        <form onSubmit={handleGenerate} className="lg:col-span-1 space-y-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-white font-semibold flex items-center gap-2"><Wand2 className="h-5 w-5"/> Manga Generator</h3>
          <div className="space-y-1">
            <label className="text-sm text-white/70">Prompt</label>
            <input value={prompt} onChange={(e)=>setPrompt(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"/>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-white/70">Art Style</label>
              <input value={style} onChange={(e)=>setStyle(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"/>
            </div>
            <div>
              <label className="text-sm text-white/70">Theme</label>
              <input value={theme} onChange={(e)=>setTheme(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"/>
            </div>
          </div>
          <button type="submit" className="w-full py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4"/> Generate
          </button>
          <p className="text-xs text-white/50">This is a demo generator that builds narratives locally.</p>
        </form>

        <div className="lg:col-span-2 space-y-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className={`aspect-[3/4] w-full md:w-64 rounded-lg bg-gradient-to-br ${posterGradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_40%)]" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white/80 text-xs">Poster</p>
                  <h2 className="text-white text-xl font-bold leading-tight">{data.title}</h2>
                  <p className="text-white/70 text-xs">{data.mainTheme}</p>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-2">Story Outline</h3>
                <p className="text-white/80 text-sm">An original {data.mainTheme.toLowerCase()} tale set against the backdrop of rival clans and shifting destinies. Guided by instinct and burdened by secrets, our heroes navigate the neon haze.</p>
                <div className="mt-3 grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-white/60 text-xs mb-1">Key Points</p>
                    <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                      {data.keyPoints.map((k, i) => (<li key={i}>{k}</li>))}
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-white/60 text-xs mb-1">Characters</p>
                    <ul className="text-white/80 text-sm space-y-1">
                      {data.characters.map((c, i) => (
                        <li key={i}><span className="font-medium text-white">{c.name}</span> — {c.role}, {c.trait}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-white/70 text-sm">
                  <Palette className="h-4 w-4"/> {style}
                  <Bookmark className="h-4 w-4 ml-2"/> {theme}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2"><ImageIcon className="h-5 w-5"/> Panels</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.panels.map((p) => (
                <div key={p.id} className="rounded-lg overflow-hidden bg-white/5 border border-white/10">
                  <div className="aspect-video bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
                  <div className="p-2 text-white/80 text-sm">{p.caption}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2"><Users className="h-5 w-5"/> Art Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-slate-800 to-slate-900" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
