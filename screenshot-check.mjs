import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
});

async function snap(page, label, selector, padding = 0) {
  // Force all reveal elements visible
  await page.evaluate(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => el.classList.add('revealed'));
  });
  if (selector) {
    await page.waitForSelector(selector, { timeout: 5000 }).catch(() => {});
    const el = await page.$(selector);
    if (el) {
      await el.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      const box = await el.boundingBox();
      await page.screenshot({
        path: path.join(dir, `check-${label}.png`),
        clip: { x: Math.max(0, box.x - padding), y: Math.max(0, box.y - padding), width: box.width + padding * 2, height: Math.min(box.height + padding * 2, 1200) }
      });
      console.log(`Saved check-${label}.png`);
      return;
    }
  }
  await page.screenshot({ path: path.join(dir, `check-${label}.png`), fullPage: true });
  console.log(`Saved check-${label}.png (fullPage)`);
}

// ── Desktop 1440px ───────────────────────────────────────────────
const desktop = await browser.newPage();
await desktop.setViewport({ width: 1440, height: 900 });
await desktop.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));

await snap(desktop, 'desktop-nav', 'nav');
await snap(desktop, 'desktop-contact', '#contact');
await snap(desktop, 'desktop-full', null);

// ── Mobile 390px (iPhone 14) ──────────────────────────────────────
const mobile = await browser.newPage();
await mobile.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await mobile.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
// Force all reveals visible
await mobile.evaluate(() => {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => el.classList.add('revealed'));
});
await new Promise(r => setTimeout(r, 800));

await snap(mobile, 'mobile-nav', 'nav');

// Targeted viewport screenshots at key scroll positions
async function viewSnap(page, label, scrollY) {
  await page.evaluate(y => window.scrollTo(0, y), scrollY);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(dir, `check-${label}.png`) });
  console.log(`Saved check-${label}.png`);
}

await viewSnap(mobile, 'mobile-hero', 0);
await viewSnap(mobile, 'mobile-about', 900);
await viewSnap(mobile, 'mobile-portfolio', 2400);
await viewSnap(mobile, 'mobile-people', 6566);
await viewSnap(mobile, 'mobile-contact-top', 9291);
await viewSnap(mobile, 'mobile-contact-support', 9800);
await viewSnap(mobile, 'mobile-contact-form', 10400);

await browser.close();
console.log('Done.');
