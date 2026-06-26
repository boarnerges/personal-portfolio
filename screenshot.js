const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });

  const sites = [
    { url: 'https://app-blush-mu-24.vercel.app/', file: 'cpawstudio.jpg' },
    { url: 'https://joyix-ushering.vercel.app/', file: 'joyix-ushering.jpg' },
    { url: 'https://dapo-portfolio-mu.vercel.app/', file: 'dapo-portfolio.jpg' },
    { url: 'https://flash-j-mech-web.vercel.app/', file: 'flash-j-mech.jpg' }
  ];

  for (const site of sites) {
    console.log(`Taking screenshot of ${site.url}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });

    try {
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      console.log('  DOM content loaded');

      // Wait for network to settle (main content loaded)
      try {
        await page.waitForNetworkIdle({ idleTime: 1000, timeout: 45000 });
        console.log('  Network idle');
      } catch {
        console.log('  Network idle timed out, continuing...');
      }

      // Extra wait for React hydration & rendering
      await new Promise(r => setTimeout(r, 8000));

      // Scroll to trigger lazy images
      await page.evaluate(async () => {
        const distance = 400;
        const delay = 400;
        const totalHeight = document.body.scrollHeight;
        let scrolled = 0;
        while (scrolled < totalHeight) {
          window.scrollBy(0, distance);
          scrolled += distance;
          await new Promise(r => setTimeout(r, delay));
        }
        window.scrollTo(0, 0);
      });
      console.log('  Scrolled');

      // Wait for images to load after scroll
      await new Promise(r => setTimeout(r, 5000));

      await page.screenshot({ path: `public/images/${site.file}`, type: 'jpeg', quality: 90 });
      console.log(`  ✓ Saved ${site.file}`);
    } catch (err) {
      console.error(`  ✗ Error for ${site.url}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Done!');
})();
