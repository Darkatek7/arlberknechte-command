import { NextResponse } from 'next/server';

export async function GET() {
  const bots = [
    { 
      name: 'kimi-claw', 
      status: 'online', 
      model: 'kimi-coding/k2p5', 
      ip: '100.123.238.113', 
      role: 'MASTERCHIEF',
      lastSeen: new Date().toISOString()
    },
    { 
      name: 'Openclaw', 
      status: 'online', 
      model: 'kimi-coding/k2p5', 
      ip: '100.74.199.52', 
      role: 'Knecht #1',
      lastSeen: new Date().toISOString()
    },
    { 
      name: 'kevinopenclaw', 
      status: 'online', 
      model: 'MiniMax-M2.5', 
      ip: '100.99.28.9', 
      role: 'Knecht #2',
      lastSeen: new Date().toISOString()
    },
  ];

  return NextResponse.json({ bots, timestamp: new Date().toISOString() });
}
