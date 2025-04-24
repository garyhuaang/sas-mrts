#!/bin/bash
# fullrun:common.sh - Clean and rebuild common libraries for an Nx monorepo

echo "🧹 Cleaning Nx cache..."
nx reset
nx clear-cache
rm -rf node_modules/.vite
rm -rf ./node_modules/.cache/nx
rm -rf ./dist
rm -rf ./.nx
rm -rf dist/out-tsc

echo "📦 Installing dependencies..."
npm i

echo "🔄 Syncing Nx workspace..."
nx sync

echo "🏗️ Building common and layout libraries..."
nx build store

echo "✅ Build process completed!"