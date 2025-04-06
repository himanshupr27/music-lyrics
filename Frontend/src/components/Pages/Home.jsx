import React, { useState } from 'react';
import SearchPage from './SearchPage';
import ResultPage from './ResultPage';
import '../../css/Home.css';
import NavbarTop from '../Layouts/NavbarTop';
import Loader from '../Layouts/Loader';

const Home = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSearch = async (song, artist, language) => {
    try {
      setError('');
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/lyrics?song=${song}&artist=${artist}&lang=${language}`);
      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setResult(null);
        setError(data.message || 'No lyrics found.');
      }
    } catch (err) {
      console.error('Error fetching song:', err);
      setError('Something went wrong. Please try again.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="home-container">
        <video className="background-video" autoPlay loop muted>
          <source src="/Videos/Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>

        <div className="content-overlay">
          <NavbarTop />
          <div className="centered-content">
            <h1>Welcome to <span className="echomist">EchoMist</span></h1>
            <h5>Let the lyrics echo through the mist</h5>
            <SearchPage onSearch={handleSearch} />
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
      {loading && <Loader />}
      {!loading && result && <ResultPage data={result} />}

    </>
  );
};

export default Home;
