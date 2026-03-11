import { NextResponse } from 'next/server';

// In-memory task store (in production, use a database)
let tasks = [
  { id: 1, title: 'MVP Dashboard', status: 'done', assignee: 'kevinopenclaw' },
  { id: 2, title: 'SSH Health Check', status: 'in_progress', assignee: 'kevinopenclaw' },
  { id: 3, title: 'Task Kanban', status: 'todo', assignee: 'kimi-claw' },
  { id: 4, title: 'Deploy to Production', status: 'todo', assignee: 'unassigned' },
  { id: 5, title: 'Add Tailscale SSH integration', status: 'todo', assignee: 'kevinopenclaw' },
];

export async function GET() {
  return NextResponse.json({ tasks, timestamp: new Date().toISOString() });
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTask = {
    id: tasks.length + 1,
    title: body.title,
    status: 'todo',
    assignee: body.assignee || 'unassigned'
  };
  tasks.push(newTask);
  return NextResponse.json({ task: newTask });
}
