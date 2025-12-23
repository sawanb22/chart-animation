const fs = require('fs').promises;
const path = require('path');

async function copyRecursive(src, dest) {
  const stat = await fs.stat(src);
  if (stat.isDirectory()) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src);
    await Promise.all(entries.map(e => copyRecursive(path.join(src, e), path.join(dest, e))));
  } else {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
  }
}

async function build() {
  const root = path.resolve(__dirname, '..');
  const out = path.join(root, 'dist');
  try {
    await fs.rm(out, { recursive: true, force: true });
  } catch (e) {}

  // copy index.html and any static assets (css, js, images)
  const toCopy = ['index.html'];
  for (const f of toCopy) {
    const src = path.join(root, f);
    const dest = path.join(out, f);
    try {
      await copyRecursive(src, dest);
      console.log('Copied', f);
    } catch (err) {
      console.warn('Skipping', f, err.message);
    }
  }

  console.log('Build complete — dist/ created');
}

build().catch(err => { console.error(err); process.exit(1); });
