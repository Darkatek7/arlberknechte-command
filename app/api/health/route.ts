import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data - in production, this would SSH to each bot
  const health = {
    bots: [
      {
        name: 'kimi-claw',
        uptime: '18:28',
        load: '0.17',
        memory: '1.1Gi / 7.7Gi',
        disk: '18G / 29G (60%)',
        status: 'healthy'
      },
      {
        name: 'Openclaw',
        uptime: '335 days',
        load: '0.09',
        memory: '956Mi / 15Gi',
        disk: '16G / 443G (4%)',
        status: 'healthy'
      },
      {
        name: 'kevinopenclaw',
        uptime: 'unknown',
        load: 'N/A',
        memory: 'N/A',
        disk: 'N/A',
        status: 'unknown'
      }
    ],
    timestamp: new Date().toISOString()
  };

  return NextResponse.json(health);
}
