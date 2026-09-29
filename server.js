#!/usr/bin/env node
// Load environment variables immediately
try {
  require('dotenv').config();
} catch (e) {}

// Production entrypoint for MilesWeb / cPanel Node.js Application
process.on('uncaughtException', (err) => {
  console.error('[UNCAUGHT EXCEPTION]', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('[UNHANDLED REJECTION]', reason);
});

require('./dist/server.js');
