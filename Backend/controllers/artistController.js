const axios = require('axios');
const cheerio = require('cheerio');

exports.getArtistDetails = async (req, res) => {
  const { artist } = req.query;

  if (!artist) {
    return res.status(400).json({ message: 'Artist name is required' });
  }

  const artistSlug = artist.replace(/\s+/g, '_');
  const url = `https://en.wikipedia.org/wiki/${artistSlug}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Get the first paragraph of the article
    const firstPara = $('p').first().text().trim();

    // Get infobox if available (like image and basic info)
    const infobox = {};
    const infoboxTable = $('.infobox.vcard');

    if (infoboxTable.length) {
      const imageSrc = infoboxTable.find('img').first().attr('src');
      if (imageSrc) infobox.image = 'https:' + imageSrc;
      infobox.name = infoboxTable.find('caption').text().trim();

      infoboxTable.find('tr').each((i, el) => {
        const key = $(el).find('th').text().trim();

        // Clean HTML, strip tags and decode text
        const valueHtml = $(el).find('td').html();
        let cleanText = '';

        if (valueHtml) {
          const clean = cheerio.load(valueHtml);
          clean('sup, .reference, style, script').remove(); // remove footnotes & styles
          cleanText = clean.text().replace(/\s+/g, ' ').trim(); // final cleaned text
        }

        if (key && cleanText) infobox[key] = cleanText;
      });
    }

    res.json({
      artist: artist.trim(),
      summary: firstPara,
      infobox
    });
  } catch (err) {
    console.error('Error fetching artist info:', err);
    res.status(500).json({ message: 'Error fetching artist info', error: err.message });
  }
};
