import React from 'react';
import '../../css/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loading-text">Fetching lyrics...</p>
    </div>
  );
};

export default Loader;
