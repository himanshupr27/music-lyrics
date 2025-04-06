import React, { useState } from 'react';
import '../../css/SearchPage.css';

const SearchPage = ({ onSearch }) => {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [language, setLanguage] = useState('hindi');

  const handleSearch = () => {
    if (song.trim() || artist.trim()) {
      onSearch(song, artist);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="search-page">
      <div className="radio-group">
        <div>
          <input
            type="radio"
            id="hindi"
            name="language"
            value="hindi"
            checked={language === 'hindi'}
            onChange={() => setLanguage('hindi')}
          />
          <label htmlFor="hindi">Hindi</label>
        </div>

        <div>
          <input
            type="radio"
            id="english"
            name="language"
            value="english"
            checked={language === 'english'}
            onChange={() => setLanguage('english')}
          />
          <label htmlFor="english">English</label>
        </div>
      </div>

      <input
        type="text"
        placeholder="Enter song name..."
        value={song}
        onChange={(e) => setSong(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <input
        type="text"
        placeholder="Enter artist name..."
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPage;
