#!/usr/bin/env bash
# Run on the production host AFTER this branch is merged to main.
# Merge on GitHub does not restart PM2 or rebuild dist.
set -euo pipefail
cd /var/www/html/TeechEeezLander
git fetch origin
git checkout main
git pull origin main
npm install
npm run build
pm2 delete techeeez-lander || true
pm2 start ecosystem.config.cjs --only techeeez-lander --update-env
pm2 save
