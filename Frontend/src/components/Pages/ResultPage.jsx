import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/ResultPage.css'

const ResultPage = ({ data }) => {
  const resultRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    resultRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [data])

  const handleArtistClick = () => {
    if (data.artist) {
      navigate(`/artist-details/${encodeURIComponent(data.artist)}`)
    }
  }

  return (
    <div className="result-container" ref={resultRef}>
      <div className="result-card animate-fade-in">
        <div className="left">
           <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmRoMXVvZGNyeGx2bno3bGQyZ214aXFyMDVpZjkwZXVzcXJqYnJhbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vkuXUYemxADfVx6ogY/giphy.gif"
            alt="song-art"
            className="song-art bounce-on-hover"
          />
          <button className="play-button pulse-on-hover">
            <span className="play-icon">▶</span> Play Song
          </button>
        </div>

        <div className="right">
          <h2 className="song-title">{data.song?.toUpperCase()}</h2>

          <p className="artist">
            <strong>Artist:</strong>{' '}
            <span className="artist-link" onClick={handleArtistClick}>
              {data.artist}
            </span>

          </p>

          <p className="release-date"><strong>Release Info:</strong> {data.info?.[0] || 'N/A'}</p>

          <div className="lyrics-section slide-in">
            <h3>Lyrics</h3>
            <pre className="lyrics-text">{data.lyrics}</pre>
          </div>

          {data.info?.length > 1 && (
            <div className="info-section fade-in-late">
              <h4>🎵 Did you know?</h4>
              <ul>
                {data.info.slice(1).map((item, index) => (
                  <li key={index}>➤ {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResultPage
