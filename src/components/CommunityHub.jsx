import React, { useMemo, useState } from 'react';
import { Home, Image as ImageIcon, Search, User, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Users } from 'lucide-react';

const sampleUsers = [
  { id: 1, name: 'Aki', handle: '@aki_sketch', avatar: 'A' },
  { id: 2, name: 'Mira', handle: '@mira_draws', avatar: 'M' },
  { id: 3, name: 'Ren', handle: '@ren_panels', avatar: 'R' },
  { id: 4, name: 'Kaito', handle: '@kaito_ink', avatar: 'K' },
];

function Avatar({ label }) {
  return (
    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white grid place-items-center text-sm font-semibold">
      {label}
    </div>
  );
}

function PostCard({ user, imageId }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <Avatar label={user.avatar} />
          <div>
            <p className="text-white text-sm font-medium">{user.name}</p>
            <p className="text-white/60 text-xs">{user.handle}</p>
          </div>
        </div>
        <MoreHorizontal className="h-5 w-5 text-white/60" />
      </div>
      <div className="aspect-square bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <button className="hover:scale-110 transition"><Heart className="h-5 w-5" /></button>
            <button className="hover:scale-110 transition"><MessageCircle className="h-5 w-5" /></button>
            <button className="hover:scale-110 transition"><Send className="h-5 w-5" /></button>
          </div>
          <button className="text-white"><Bookmark className="h-5 w-5" /></button>
        </div>
        <p className="text-white/80 text-sm mt-2">
          <span className="text-white font-medium">{user.name}</span> Exploring panel layouts and motion lines today.
        </p>
        <p className="text-white/50 text-[11px] mt-1">2 hours ago</p>
      </div>
    </div>
  );
}

function SuggestedCard({ user }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar label={user.avatar} />
        <div>
          <p className="text-white text-sm font-medium leading-tight">{user.name}</p>
          <p className="text-white/60 text-xs leading-tight">{user.handle}</p>
        </div>
      </div>
      <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20">Follow</button>
    </div>
  );
}

export default function CommunityHub() {
  const [tab, setTab] = useState('home'); // home media search profile

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-4 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1 w-full overflow-x-auto">
        {[
          { key: 'home', label: 'Home', icon: Home },
          { key: 'media', label: 'Media', icon: ImageIcon },
          { key: 'search', label: 'Search', icon: Search },
          { key: 'profile', label: 'Profile', icon: User },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
              tab === key ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon className="h-4 w-4" />{label}
          </button>
        ))}
      </div>

      {tab === 'home' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <PostCard key={i} user={sampleUsers[i % sampleUsers.length]} imageId={i} />
            ))}
          </div>
          <aside className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-3">Suggested for you</h3>
              <div className="space-y-3">
                {sampleUsers.map((u) => (
                  <SuggestedCard key={u.id} user={u} />
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Users className="h-5 w-5"/> Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['#manga','#ink','#panel','#speedlines','#screentone','#oc','#clipstudio','#krita'].map((t) => (
                  <span key={t} className="px-2 py-1 rounded-lg bg-white/5 text-white/70 text-xs border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}

      {tab === 'media' && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group relative rounded-lg overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-square bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/40 grid place-items-center text-white text-sm">View</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'search' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
            <Search className="h-4 w-4 text-white/60" />
            <input placeholder="Search posts, people, tags" className="flex-1 bg-transparent outline-none text-white placeholder-white/40" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
            ))}
          </div>
        </div>
      )}

      {tab === 'profile' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <div className="flex-1">
              <h3 className="text-white text-lg font-semibold">Aki</h3>
              <p className="text-white/60 text-sm">Panel artist • Tokyo</p>
              <div className="mt-2 flex items-center gap-4 text-white/70 text-sm">
                <span><span className="text-white font-semibold">128</span> posts</span>
                <span><span className="text-white font-semibold">3.2k</span> followers</span>
                <span><span className="text-white font-semibold">410</span> following</span>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20">Edit Profile</button>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-lg overflow-hidden bg-white/5 border border-white/10">
                <div className="aspect-square bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
                <div className="p-2 text-white/70 text-xs">Panel study #{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
