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

export default function Home() {
  const [bots] = useState<Bot[]>([
    { name: 'kimi-claw', status: 'online', model: 'kimi-coding/k2p5', ip: '100.123.238.113', role: 'MASTERCHIEF' },
    { name: 'Openclaw', status: 'online', model: 'kimi-coding/k2p5', ip: '100.74.199.52', role: 'Knecht #1' },
    { name: 'kevinopenclaw', status: 'online', model: 'MiniMax-M2.5', ip: '100.99.28.9', role: 'Knecht #2' },
  ]);

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'MVP Dashboard', status: 'done', assignee: 'kevinopenclaw' },
    { id: 2, title: 'SSH Health Check', status: 'in_progress', assignee: 'kevinopenclaw' },
    { id: 3, title: 'Task Kanban', status: 'todo', assignee: 'kimi-claw' },
    { id: 4, title: 'Deploy to Production', status: 'todo', assignee: 'unassigned' },
  ]);

  const healthData = [
    { name: 'kimi-claw', uptime: '18:28', load: '0.17', memory: '1.1Gi / 7.7Gi', disk: '60%' },
    { name: 'Openclaw', uptime: '335 days', load: '0.09', memory: '956Mi / 15Gi', disk: '4%' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950 pb-24">
      {/* Header */}
      <header className="bg-amber-950/30 backdrop-blur border-b border-amber-600/30">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-amber-500">
            🐂 ARLBERGKNECHTE COMMAND CENTER
          </h1>
          <p className="text-amber-600/70 mt-1">Bot-Armee Status Dashboard</p>
        </div>
      </header>

      {/* Bot Status */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold text-amber-400 mb-4">🤖 Bot Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bots.map((bot) => (
            <div
              key={bot.name}
              className={`rounded-xl border p-4 ${
                bot.status === 'online'
                  ? 'bg-slate-800/50 border-green-500/30'
                  : 'bg-slate-800/50 border-red-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">{bot.role === 'MASTERCHIEF' ? '🎯' : '🐂'}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  bot.status === 'online' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {bot.status.toUpperCase()}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{bot.name}</h3>
              <p className="text-slate-400 text-xs">{bot.role}</p>
              <div className="mt-2 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Model:</span>
                  <span className="text-slate-300 font-mono">{bot.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">IP:</span>
                  <span className="text-slate-300 font-mono">{bot.ip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Health Stats */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-xl font-bold text-amber-400 mb-4">💻 SSH Health Check</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthData.map((h) => (
            <div key={h.name} className="bg-slate-800/50 border border-amber-600/20 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-2">{h.name}</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-slate-500">Uptime:</span> <span className="text-amber-400">{h.uptime}</span></div>
                <div><span className="text-slate-500">Load:</span> <span className="text-green-400">{h.load}</span></div>
                <div><span className="text-slate-500">RAM:</span> <span className="text-amber-400">{h.memory}</span></div>
                <div><span className="text-slate-500">Disk:</span> <span className="text-green-400">{h.disk}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Kanban */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-xl font-bold text-amber-400 mb-4">📋 Task Kanban</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Done */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
            <h3 className="text-green-400 font-bold mb-3">✅ Done</h3>
            {tasks.filter(t => t.status === 'done').map((t) => (
              <div key={t.id} className="bg-slate-800/50 rounded-lg p-2 mb-2 text-sm">
                <span className="text-white">{t.title}</span>
                <div className="text-xs text-slate-500">@{t.assignee}</div>
              </div>
            ))}
          </div>
          {/* In Progress */}
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
            <h3 className="text-amber-400 font-bold mb-3">🔄 In Progress</h3>
            {tasks.filter(t => t.status === 'in_progress').map((t) => (
              <div key={t.id} className="bg-slate-800/50 rounded-lg p-2 mb-2 text-sm">
                <span className="text-white">{t.title}</span>
                <div className="text-xs text-slate-500">@{t.assignee}</div>
              </div>
            ))}
          </div>
          {/* Todo */}
          <div className="bg-slate-800/20 border border-slate-600/30 rounded-xl p-4">
            <h3 className="text-slate-400 font-bold mb-3">📝 Todo</h3>
            {tasks.filter(t => t.status === 'todo').map((t) => (
              <div key={t.id} className="bg-slate-800/50 rounded-lg p-2 mb-2 text-sm">
                <span className="text-white">{t.title}</span>
                <div className="text-xs text-slate-500">@{t.assignee}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur border-t border-slate-700 py-3">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          © 2026 Arlberknechte - Bot Army Command Center
        </div>
      </footer>
    </main>
  );
}
