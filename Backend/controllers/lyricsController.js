// controllers/lyricsController.js
const puppeteer = require('puppeteer');

exports.getLyrics = async (req, res) => {
  const { song, artist } = req.query;

  try {
    const artistSlug = artist.replace(/\s+/g, '').toLowerCase();
    const songSlug = song.replace(/\s+/g, '').toLowerCase();
    const url = `https://www.azlyrics.com/lyrics/${artistSlug}/${songSlug}.html`;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const lyrics = await page.evaluate(() => {
      const divs = document.querySelectorAll('div');
      let found = false;
      for (let div of divs) {
        if (div.innerText.includes("Submit Corrections")) {
          found = true;
          continue;
        }
        if (found && div.innerText.trim()) {
          return div.innerText.trim();
        }
      }
      return null;
    });

    await browser.close();

    if (!lyrics) return res.status(404).json({ message: 'Lyrics not found' });
    res.json({ song, artist, lyrics });
  } catch (err) {
    res.status(500).json({ message: 'Error scraping lyrics', error: err.message });
  }
};
