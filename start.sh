#!/bin/bash

PORT=5173

echo "🌿 Sri Kalleshwara Enterprises — Dev Server"
echo "--------------------------------------------"

# Kill anything on the port
PID=$(lsof -ti :$PORT)
if [ -n "$PID" ]; then
  echo "⚡ Killing process on port $PORT (PID: $PID)"
  kill -9 $PID
fi

# Check if node_modules is missing or rolldown native binding is broken
ROLLDOWN_BINDING="node_modules/@rolldown/binding-darwin-arm64"
if [ ! -d "node_modules" ] || [ ! -d "$ROLLDOWN_BINDING" ]; then
  echo "📦 Installing dependencies (clean install)..."
  rm -rf node_modules package-lock.json
  npm install
  echo "✅ Dependencies installed"
else
  echo "✅ Dependencies already installed"
fi

# Start dev server
echo "🚀 Starting dev server on http://localhost:$PORT"
npm run dev
