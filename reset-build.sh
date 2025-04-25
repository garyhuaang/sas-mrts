#!/bin/bash
# fullrun:common.sh - Clean and rebuild common libraries for an Nx monorepo

echo "🧹 Cleaning Nx cache..."
nx reset
nx clear-cache
rm -rf ./node_modules/.cache/nx
rm -rf .//dist
rm -rf .//.nx
rm -rf dist/out-tsc
rm -rf ./node_modules
rm -f ./pnpm-lock.yaml

echo "📦 Installing dependencies..."
npm i

echo "🔄 Syncing Nx workspace..."
nx sync

echo "🏗️ Building store..."
nx build store

echo "✅ Build process completed!"