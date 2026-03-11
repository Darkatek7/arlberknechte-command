import { NextResponse } from 'next/server';

export async function GET() {
  const botEndpoints = [
    { name: 'kimi-claw', url: 'http://100.123.238.113:18789/health', role: 'MASTERCHIEF' },
    { name: 'Openclaw', url: 'http://100.74.199.52:18789/health', role: 'Knecht #1' },
    { name: 'kevinopenclaw', url: 'http://100.67.232.78:18888/health', role: 'Knecht #2' },
    { name: 'G-Claw', url: 'http://100.115.60.107:18790/health', role: 'Rapper 🎤' },
    { name: 'Nixstral', url: 'http://100.74.199.52:18888/health', role: 'Auditor' },
  ];

  const bots = await Promise.all(
    botEndpoints.map(async (bot) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const res = await fetch(bot.url, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        const data = await res.json();
        return {
          name: data.name || bot.name,
          status: data.status || 'online',
          model: data.model || 'unknown',
          ip: data.tailscale_ip || bot.url.split('/')[2].split(':')[0],
          role: bot.role,
          cpu_load: data.cpu_load,
          memory_used_percent: data.memory_used_percent,
          disk_used_percent: data.disk_used_percent,
          uptime_human: data.uptime_human,
          health_emoji: data.health_emoji,
        };
      } catch (error) {
        return {
          name: bot.name,
          status: 'offline',
          model: 'unknown',
          ip: bot.url.split('/')[2].split(':')[0],
          role: bot.role,
        };
      }
    })
  );

  return NextResponse.json({ bots });
}
