#!/bin/bash

# Test runner script
# Starts dev server separately, then runs tests

set -e

PORT=3000
MAX_RETRIES=30
RETRY_COUNT=0

echo "🚀 Starting development server..."
npm run dev > /tmp/dev-server.log 2>&1 &
DEV_PID=$!
echo "Dev server PID: $DEV_PID"

echo "⏳ Waiting for server to be ready..."
while ! curl -s http://localhost:$PORT > /dev/null 2>&1; do
  RETRY_COUNT=$((RETRY_COUNT + 1))
  if [ $RETRY_COUNT -ge $MAX_RETRIES ]; then
    echo "❌ Server failed to start after 30 seconds"
    echo "Dev server output:"
    cat /tmp/dev-server.log
    kill $DEV_PID 2>/dev/null || true
    exit 1
  fi
  echo "  Waiting... ($RETRY_COUNT/30)"
  sleep 1
done

echo "✅ Server is ready!"
echo ""
echo "🧪 Running tests..."
npm run test:e2e -- --project=chromium --workers=1

# Cleanup
echo ""
echo "🛑 Stopping dev server..."
kill $DEV_PID 2>/dev/null || true
