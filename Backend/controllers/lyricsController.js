const puppeteer = require('puppeteer');
const axios = require('axios');

exports.getLyrics = async (req, res) => {
  const { song, artist } = req.query;

  try {
    const artistSlug = artist.replace(/\s+/g, '').toLowerCase();
    const songSlug = song.replace(/\s+/g, '').toLowerCase();
    const url = `https://www.azlyrics.com/lyrics/${artistSlug}/${songSlug}.html`;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const result = await page.evaluate(() => {
      const divs = Array.from(document.querySelectorAll('div'));
      const lyricsDiv = divs.find(div =>
        div.getAttribute('class') === null &&
        div.getAttribute('id') === null &&
        div.innerText.trim().length > 0
      );
      const lyrics = lyricsDiv ? lyricsDiv.innerText.trim() : null;

      const infoPanels = Array.from(document.querySelectorAll('div.panel.album-panel.noprint'));
      const additionalInfo = infoPanels.map(div => div.innerText.trim());

      return { lyrics, additionalInfo };
    });

    await browser.close();

    if (!result.lyrics) return res.status(404).json({ message: 'Lyrics not found' });

    // ✅ Fetch album cover from Deezer API
    const deezerResponse = await axios.get(
      `https://api.deezer.com/search?q=track:"${song}" artist:"${artist}"`
    );
    const albumCover =
      deezerResponse.data?.data?.[0]?.album?.cover_medium || null;

    res.json({
      song,
      artist,
      lyrics: result.lyrics,
      info: result.additionalInfo,
      coverImage: albumCover,
    });

  } catch (err) {
    console.error('Scraping error:', err);
    res.status(500).json({ message: 'Error scraping lyrics', error: err.message });
  }
};
