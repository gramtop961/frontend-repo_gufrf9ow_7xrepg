import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Play, Pause, Star, Bookmark, Share2 } from 'lucide-react';

const sampleChapters = [
  { id: 'ch1', title: 'Chapter 1 — Awakening' },
  { id: 'ch2', title: 'Chapter 2 — Trial by Fire' },
  { id: 'ch3', title: 'Chapter 3 — Moonlit Oath' },
];

function PageCard({ index, active, zoom }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg transition-all ${
        active ? 'ring-2 ring-fuchsia-500' : 'ring-1 ring-white/10'
      }`}
      style={{ transform: `scale(${active ? 1 : 0.98})` }}
    >
      <div
        className="h-[60vh] sm:h-[70vh] w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center"
        style={{ backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 30%)` }}
      >
        <div className="text-center">
          <p className="text-white/70 text-sm">Page</p>
          <p className="text-5xl font-bold text-white/90 leading-none">{index + 1}</p>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/60 text-white/70">{Math.round(zoom * 100)}%</div>
    </div>
  );
}

export default function MangaReader() {
  const [chapter, setChapter] = useState(sampleChapters[0].id);
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [autoplay, setAutoplay] = useState(false);

  const pages = useMemo(() => Array.from({ length: 12 }, (_, i) => i), [chapter]);

  React.useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pages.length), 2500);
    return () => clearInterval(id);
  }, [autoplay, pages.length]);

  const goPrev = () => setPage((p) => (p - 1 + pages.length) % pages.length);
  const goNext = () => setPage((p) => (p + 1) % pages.length);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <select
                value={chapter}
                onChange={(e) => {
                  setChapter(e.target.value);
                  setPage(0);
                }}
                className="bg-white/5 border border-white/10 text-white/90 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
              >
                {sampleChapters.map((c) => (
                  <option key={c.id} value={c.id} className="bg-slate-900">
                    {c.title}
                  </option>
                ))}
              </select>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Star className="h-4 w-4" /> 4.9 • 12.3k likes
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10" onClick={() => setAutoplay((v) => !v)}>
                {autoplay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10" onClick={() => setZoom((z) => Math.min(2, z + 0.1))}>
                <ZoomIn className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10" onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))}>
                <ZoomOut className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={goPrev} className="m-2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/60">
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <PageCard index={page} active zoom={zoom} />

            <div className="absolute inset-y-0 right-0 flex items-center">
              <button onClick={goNext} className="m-2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/60">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-white/70 text-sm">
            <div>Page {page + 1} / {pages.length}</div>
            <input
              type="range"
              min={0}
              max={pages.length - 1}
              value={page}
              onChange={(e) => setPage(parseInt(e.target.value))}
              className="w-64"
            />
          </div>
        </div>

        <aside className="w-full lg:w-80 space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-medium mb-3">Chapters</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
              {sampleChapters.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setChapter(c.id);
                    setPage(0);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm text-left transition ${
                    chapter === c.id ? 'bg-white/10 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-medium mb-3">Details</h3>
            <ul className="text-white/70 text-sm space-y-1">
              <li>Genre: Action • Fantasy • Adventure</li>
              <li>Schedule: Weekly</li>
              <li>Author: K. Aoki</li>
              <li>Language: EN / JP</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
