import { NextResponse } from 'next/server';
import os from 'os';

export async function GET() {
  const uptime = os.uptime();
  const days = Math.floor(uptime / 86400);
  const hours = Math.floor((uptime % 86400) / 3600);
  const mins = Math.floor((uptime % 3600) / 60);
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  
  return NextResponse.json({
    id: 'kevinopenclaw',
    status: 'online',
    uptime: days > 0 ? `${days}d ${hours}h` : `${hours}h ${mins}m`,
    cpu: Math.round(os.loadavg()[0] * 100) / 100,
    ram: {
      total: Math.round(totalMem / 1024 / 1024 / 1024 * 10) / 10,
      used: Math.round(usedMem / 1024 / 1024 / 1024 * 10) / 10,
      percent: Math.round(usedMem / totalMem * 100)
    },
    model: 'MiniMax-M2.5',
    last_ping: new Date().toISOString()
  });
}
