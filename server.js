const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(urlObj.pathname);

  // Normalize path
  if (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1);
  }

  // Routing matches based on vercel.json rewrites:
  let filePath = null;

  if (pathname === '' || pathname === '/') {
    filePath = path.join(ROOT, 'index.html');
  } else if (pathname === '/launch') {
    filePath = path.join(ROOT, 'launch', 'index.html');
  } else if (pathname === '/launchpad') {
    filePath = path.join(ROOT, 'launchpad', 'index.html');
  } else if (pathname === '/launches' || pathname.startsWith('/launches/')) {
    filePath = path.join(ROOT, 'launches', 'index.html');
  } else {
    // Check direct static file
    const candidate = path.join(ROOT, pathname.replace(/^\//, ''));
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      filePath = candidate;
    } else if (fs.existsSync(path.join(candidate, 'index.html'))) {
      filePath = path.join(candidate, 'index.html');
    } else {
      // Fallback
      filePath = path.join(ROOT, 'index.html');
    }
  }

  if (filePath && fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`⚡ BifrostPad Local Server running at:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`==================================================\n`);
});
