#!/usr/bin/env node
// Wrapper to guarantee binding explicitly to 0.0.0.0 as required by MilesWeb / LiteSpeed Reverse Proxy
process.env.NODE_ENV = 'test';
const app = require('./dist/server.js').default || require('./dist/server.js');
process.env.NODE_ENV = 'production';

const PORT = process.env.PORT || 3000;
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`🚀 Parth Packaging Server running on http://0.0.0.0:${PORT}`);
  console.log(`🏭 Environment: ${process.env.NODE_ENV}`);
  console.log(`📦 Pan-India Carboys Reconditioning Portal Ready`);
  console.log(`====================================================`);
});
