import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/ArtistDetails.css';

const ArtistDetails = () => {
    const { artistName } = useParams();
    const [artist, setArtist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtistDetails = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/artist-info?artist=${encodeURIComponent(artistName)}`
                );
                const data = await response.json();
                setArtist(data);
            } catch (error) {
                console.error('Error fetching artist details:', error);
            } finally {
                setLoading(false);
            }
        };

        if (artistName) fetchArtistDetails();
    }, [artistName]);

    return (
        <div className="artist-page-container">
            <div className="wave-bg">
  <div className="wave wave1"></div>
  <div className="wave wave2"></div>
  <div className="wave wave3"></div>
</div>
            <div className="animated-purple-bg"></div>

            <div className="artist-content-wrapper">
                <h1 className="artist-heading">{artistName?.toUpperCase()}</h1>

                {loading ? (
                    <p className="loading-text">Loading artist information...</p>
                ) : !artist || Object.keys(artist).length === 0 ? (
                    <p className="error-text">No data found for this artist.</p>
                ) : (
                    <div className="artist-details-card fade-in">
                        {artist.infobox?.image && (
                            <img
                                src={artist.infobox.image}
                                alt="Artist"
                                className="artist-image pop-in"
                            />
                        )}
                        <div className="artist-info-list">
                            {Object.entries(artist.infobox || {}).map(([key, value]) => {
                                if (!value?.trim() || key === 'image') return null;

                                return (
                                    <div key={key} className="artist-info-row">
                                        <span className="info-key">{key}:</span>
                                        <span className="info-value">{value}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArtistDetails;
