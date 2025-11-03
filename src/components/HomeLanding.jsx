import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Bookmark, Heart, Tag, Search, Play, Image, Users } from 'lucide-react';

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition overflow-hidden">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl pointer-events-none" />
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center text-white shadow">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function SeriesCard({ title, chapter, likes, cover }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <div className="aspect-[3/4] bg-black/40 relative">
        <img src={cover} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="font-semibold leading-tight line-clamp-1">{title}</h4>
            <p className="text-xs text-white/60">Chapter {chapter}</p>
          </div>
          <div className="flex items-center gap-1 text-white/70">
            <Heart className="h-4 w-4" />
            <span className="text-xs">{likes}</span>
          </div>
        </div>
        <button className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm">
          <Play className="h-4 w-4" /> Read now
        </button>
      </div>
    </div>
  );
}

export default function HomeLanding({ onGoTo }) {
  return (
    <div className="relative">
      {/* Hero with Spline 3D */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/6xVwVx0a6Gx2sEJr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur text-white/80 text-xs">
              <Rocket className="h-4 w-4" /> Welcome to MangaVerse
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
              Read, create, and share manga in one beautiful place
            </h1>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Dive into a curated library, generate fresh story ideas, and connect with a vibrant community of artists and fans.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button onClick={() => onGoTo?.('reader')} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 shadow">Start Reading</button>
              <button onClick={() => onGoTo?.('generator')} className="px-5 py-2.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 transition">Create a Story</button>
            </div>
            <div className="mt-6 max-w-xl mx-auto relative">
              <div className="absolute inset-0 rounded-xl bg-white/10 blur-xl pointer-events-none" />
              <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 p-2">
                <Search className="h-5 w-5 text-white/60" />
                <input className="flex-1 bg-transparent outline-none placeholder:text-white/50" placeholder="Search manga, creators, or tags..." />
                <button onClick={() => onGoTo?.('community')} className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={Star} title="Curated Library" desc="Hand-picked series across action, romance, sci-fi, and more." />
          <FeatureCard icon={Bookmark} title="Reading Lists" desc="Save favorites and organize by vibe, genre, or mood." />
          <FeatureCard icon={Image} title="Visual Generator" desc="Turn prompts into covers, panels, and gallery ideas locally." />
          <FeatureCard icon={Users} title="Creator Community" desc="Follow artists, join threads, and share your latest works." />
        </div>
      </section>

      {/* Trending tags */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2 text-white/70 mb-3">
          <Tag className="h-4 w-4" />
          <span className="text-sm">Trending Tags</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['#neoTokyo', '#cosmicLove', '#rogueNinjas', '#mecha', '#sliceOfLife', '#mythic', '#sports', '#retro'].map((t) => (
            <button key={t} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm">
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Popular now */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Popular right now</h2>
          <button onClick={() => onGoTo?.('community')} className="text-sm text-white/70 hover:text-white">See all</button>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { title: 'Neon Ronin', chapter: 42, likes: '12.7k', cover: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Cosmic Hearts', chapter: 16, likes: '8.9k', cover: 'https://images.unsplash.com/photo-1508349937151-22b68b72d5bc?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Mecha Rebirth', chapter: 8, likes: '6.1k', cover: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Moonlight Cafe', chapter: 27, likes: '4.4k', cover: 'https://images.unsplash.com/photo-1502136969935-8d07106b9aa1?q=80&w=1200&auto=format&fit=crop' },
            { title: 'Mythfall', chapter: 12, likes: '3.7k', cover: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop' },
          ].map((s) => (
            <SeriesCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Newsletter + stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Stay in the loop</h3>
            <p className="text-white/70 text-sm">Get weekly highlights, creator spotlights, and new releases.</p>
            <div className="mt-4 flex gap-2">
              <input className="flex-1 px-3 py-2 rounded-xl bg-black/40 border border-white/10 outline-none" placeholder="Your email" />
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500">Subscribe</button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-bold">120k+</div>
              <div className="text-xs text-white/60">Readers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">9.3k</div>
              <div className="text-xs text-white/60">Creators</div>
            </div>
            <div>
              <div className="text-2xl font-bold">38k</div>
              <div className="text-xs text-white/60">Chapters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { q: 'The reader is buttery smooth and gorgeous on mobile.', a: 'Kai, Tokyo' },
            { q: 'I sketched a prompt and got a full concept in minutes.', a: 'Mina, Berlin' },
            { q: 'Feels like home for manga lovers and artists alike.', a: 'Rin, Vancouver' },
          ].map((t) => (
            <div key={t.a} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="">“{t.q}”</p>
              <p className="mt-3 text-sm text-white/60">— {t.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 to-indigo-600/20 p-8 text-center">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.12),transparent_45%)]" />
          <div className="relative">
            <h3 className="text-2xl font-semibold">Ready to create your world?</h3>
            <p className="text-white/70 max-w-2xl mx-auto mt-2">Jump into the reader to get inspired, or open the generator and craft your next hit series today.</p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button onClick={() => onGoTo?.('generator')} className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition">Open Generator</button>
              <button onClick={() => onGoTo?.('community')} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500">Join Community</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
