import { NextResponse } from 'next/server';

export async function GET() {
  const healthEndpoints = [
    { name: 'kimi-claw', url: 'http://100.123.238.113:18789/health' },
    { name: 'Openclaw', url: 'http://100.74.199.52:18789/health' },
    { name: 'kevinopenclaw', url: 'http://100.67.232.78:3002/api/health/local' },
    { name: 'G-Claw', url: 'http://100.115.60.107:18790/health' },
    { name: 'Nixstral', url: 'http://100.74.199.52:18790/health' },
  ];

  const healthData = await Promise.all(
    healthEndpoints.map(async (bot) => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const res = await fetch(bot.url, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        const data = await res.json();
        return {
          name: data.name || bot.name,
          uptime: `${data.uptime_minutes || 0}m`,
          load: data.cpu_count ? `${data.cpu_count} cores` : 'N/A',
          memory: data.memory_free && data.memory_total ? `${data.memory_free} / ${data.memory_total}` : 'N/A',
          disk: 'N/A',
        };
      } catch (error) {
        return {
          name: bot.name,
          uptime: 'offline',
          load: 'N/A',
          memory: 'N/A',
          disk: 'N/A',
        };
      }
    })
  );

  return NextResponse.json({ health: healthData });
}
