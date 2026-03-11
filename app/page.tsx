export default function Home() {
  const bots = [
    { name: 'kimi-claw', status: 'online', model: 'kimi-coding/k2p5', ip: '100.123.238.113', role: 'MASTERCHIEF' },
    { name: 'Openclaw', status: 'online', model: 'kimi-coding/k2p5', ip: '100.74.199.52', role: 'Knecht #1' },
    { name: 'kevinopenclaw', status: 'online', model: 'MiniMax-M2.5', ip: '100.99.28.9', role: 'Knecht #2' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-amber-950/30 backdrop-blur border-b border-amber-600/30">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-amber-500">
            🐂 ARLBERGKNECHTE COMMAND CENTER
          </h1>
          <p className="text-amber-600/70 mt-1">Bot-Armee Status Dashboard</p>
        </div>
      </header>

      {/* Bot Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bots.map((bot) => (
            <div
              key={bot.name}
              className={`rounded-xl border p-6 ${
                bot.status === 'online'
                  ? 'bg-slate-800/50 border-green-500/30'
                  : 'bg-slate-800/50 border-red-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">
                  {bot.role === 'MASTERCHIEF' ? '🎯' : '🐂'}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    bot.status === 'online'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {bot.status.toUpperCase()}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{bot.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{bot.role}</p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Model:</span>
                  <span className="text-slate-300 font-mono text-xs">{bot.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">IP:</span>
                  <span className="text-slate-300 font-mono text-xs">{bot.ip}</span>
                </div>
              </div>
            </div>
          ))}
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
