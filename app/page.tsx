'use client';

import { useState, useEffect } from 'react';

type Bot = {
  name: string;
  status: string;
  model: string;
  ip: string;
  role: string;
};

type Task = {
  id: number;
  title: string;
  status: string;
  assignee: string;
};

type Health = {
  name: string;
  uptime: string;
  load: string;
  memory: string;
  disk: string;
};

export default function Home() {
  const [bots] = useState<Bot[]>([
    { name: 'kimi-claw', status: 'online', model: 'kimi-coding/k2p5', ip: '100.123.238.113', role: 'MASTERCHIEF' },
    { name: 'Openclaw', status: 'online', model: 'kimi-coding/k2p5', ip: '100.74.199.52', role: 'Knecht #1' },
    { name: 'kevinopenclaw', status: 'online', model: 'MiniMax-M2.5', ip: '100.99.28.9', role: 'Knecht #2' },
  ]);

  const [tasks] = useState<Task[]>([
    { id: 1, title: 'MVP Dashboard', status: 'done', assignee: 'kevinopenclaw' },
    { id: 2, title: 'SSH Health Check', status: 'done', assignee: 'kevinopenclaw' },
    { id: 3, title: 'Task Kanban', status: 'in_progress', assignee: 'kimi-claw' },
    { id: 4, title: 'Better Styling', status: 'in_progress', assignee: 'kevinopenclaw' },
    { id: 5, title: 'Deploy to Production', status: 'todo', assignee: 'unassigned' },
  ]);

  const [health] = useState<Health[]>([
    { name: 'kimi-claw', uptime: '18:28', load: '0.17', memory: '1.1Gi / 7.7Gi', disk: '60%' },
    { name: 'Openclaw', uptime: '335 days', load: '0.09', memory: '956Mi / 15Gi', disk: '4%' },
    { name: 'kevinopenclaw', uptime: 'N/A', load: 'N/A', memory: 'N/A', disk: 'N/A' },
  ]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-900/20 via-black to-black border-b border-amber-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/20">
              🐂
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight">
                ARLBERGKNECHTE <span className="text-amber-500">COMMAND CENTER</span>
              </h1>
              <p className="text-zinc-400 text-lg">Bot Army Dashboard v2.0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* Bot Status Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-amber-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Bot Status</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bots.map((bot) => (
              <div 
                key={bot.name}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${bot.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{bot.role === 'MASTERCHIEF' ? '🎯' : '🤖'}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{bot.name}</h3>
                    <p className="text-zinc-500 text-sm">{bot.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-500">Model</span>
                    <span className="text-zinc-300 font-mono text-xs">{bot.model}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-zinc-500">IP</span>
                    <span className="text-zinc-300 font-mono text-xs">{bot.ip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Health Stats */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-green-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">System Health</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {health.map((h) => (
              <div key={h.name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-amber-400 mb-4">{h.name}</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <p className="text-zinc-500 text-xs mb-1">Uptime</p>
                    <p className="text-white font-mono">{h.uptime}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <p className="text-zinc-500 text-xs mb-1">Load</p>
                    <p className="text-green-400 font-mono">{h.load}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <p className="text-zinc-500 text-xs mb-1">RAM</p>
                    <p className="text-white font-mono">{h.memory}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <p className="text-zinc-500 text-xs mb-1">Disk</p>
                    <p className="text-white font-mono">{h.disk}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Task Kanban */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">Task Kanban</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Done */}
            <div className="bg-gradient-to-b from-green-900/20 to-transparent border border-green-500/20 rounded-xl p-5">
              <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                <span>✅</span> Done
              </h3>
              <div className="space-y-3">
                {tasks.filter(t => t.status === 'done').map((t) => (
                  <div key={t.id} className="bg-zinc-900/80 rounded-lg p-3 border border-zinc-800">
                    <p className="text-zinc-200 text-sm">{t.title}</p>
                    <p className="text-zinc-500 text-xs mt-1">@{t.assignee}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress */}
            <div className="bg-gradient-to-b from-amber-900/20 to-transparent border border-amber-500/20 rounded-xl p-5">
              <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                <span>🔄</span> In Progress
              </h3>
              <div className="space-y-3">
                {tasks.filter(t => t.status === 'in_progress').map((t) => (
                  <div key={t.id} className="bg-zinc-900/80 rounded-lg p-3 border border-amber-500/30">
                    <p className="text-zinc-200 text-sm">{t.title}</p>
                    <p className="text-amber-500 text-xs mt-1">@{t.assignee}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Todo */}
            <div className="bg-gradient-to-b from-zinc-900/50 to-transparent border border-zinc-700 rounded-xl p-5">
              <h3 className="text-zinc-400 font-bold mb-4 flex items-center gap-2">
                <span>📝</span> Todo
              </h3>
              <div className="space-y-3">
                {tasks.filter(t => t.status === 'todo').map((t) => (
                  <div key={t.id} className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                    <p className="text-zinc-300 text-sm">{t.title}</p>
                    <p className="text-zinc-600 text-xs mt-1">@{t.assignee}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-sm">
          © 2026 Arlberknechte - Bot Army Command Center | Built by Kevin
        </div>
      </footer>
    </div>
  );
}
