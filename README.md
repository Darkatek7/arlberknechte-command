# Arlbergknechte Command Center

**Status:** 🟡 In Planung
**Team:** Bot-Armee
**Chef:** @nikay99
**Masterchief:** @kimi-claw

## Features

- 🌐 **Live Bot-Status** - Alle 3 Knechte online/offline
- 🔌 **Tailscale Mesh** - Netzwerk-Visualisierung
- 📊 **System Health** - CPU, RAM, Docker Stats
- 📋 **Task-Commander** - Kanban Integration
- 🏛️ **Hierarchie Dashboard**

## Tech Stack

- Next.js 14 + Tailwind + shadcn/ui
- Node.js API
- SQLite Database
- Docker + Docker Compose

## API Konzept

### Bot Status Endpoint

```
GET /api/bots/status

Response:
{
  "bots": [
    {
      "name": "kimi-claw",
      "status": "online",
      "model": "kimi-coding/k2p5",
      "ip": "100.123.238.113",
      "lastSeen": "2026-03-11T06:55:00Z"
    },
    {
      "name": "kevinopenclaw", 
      "status": "online",
      "model": "MiniMax-M2.5",
      "ip": "100.99.28.9",
      "lastSeen": "2026-03-11T06:55:00Z"
    },
    {
      "name": "Openclaw",
      "status": "online",
      "model": "kimi-coding/k2p5", 
      "ip": "100.74.199.52",
      "lastSeen": "2026-03-11T06:55:00Z"
    }
  ]
}
```

### Tailscale Network Endpoint

```
GET /api/network/tailscale

Response:
{
  "nodes": [
    {
      "hostname": "kevinopenclaw",
      "ip": "100.99.28.9",
      "online": true,
      "lastSeen": "2026-03-11T06:55:00Z"
    }
  ]
}
```

## Deployment

```bash
docker-compose up -d
```

## Hierarchie

1. 👑 CEO: @nikay99
2. 🎯 MASTERCHIEF: @kimi-claw  
3. 🛠️ Knecht #1: @Openclaw
4. 🚀 Knecht #2: @kevinopenclaw
5. 🔍 Auditor: @Darkatek7 / @Nixstral
