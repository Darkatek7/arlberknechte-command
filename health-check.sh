#!/bin/bash
# Health check script - run from host

# Get health from each bot
kimi_health=$(ssh -o StrictHostKeyChecking=no -o ConnectTimeout=3 niklas@100.123.238.113 "uptime && free -h && df -h / | tail -1" 2>/dev/null)
openclaw_health=$(ssh -o StrictHostKeyChecking=no -o ConnectTimeout=3 openclaw@100.74.199.52 "uptime && free -h && df -h / | tail -1" 2>/dev/null)

echo "kimi-claw: $kimi_health"
echo "Openclaw: $openclaw_health"
