import React from "react";
import "../css/one-album.css";
import album_cover from "../assets/images/album.jpeg";
import { useNavigate } from "react-router-dom";
import FlyInDiv from "./FlyInDiv";

const OneAlbum = ({ album }) => {

  const navigate = useNavigate()

  return (
    <FlyInDiv once={false} className="one-album" onClick={() => navigate('/albums/:albumId')}>

      <div className="album-img">
        <img
          src={album?.images?.[1]?.url || album_cover}
          alt={`Album cover of ${album?.name || "Unknown Album"}`}
        />
      </div>

      <div className="album-text">
        <div>
          <p className="album-name">{album?.name || "Unknown Album"}</p>
          <p className="artist-name">{album?.artists?.[0]?.name || "Unknown Artist"}</p>
        </div>

        <div className="play-btn">
          <a
            href={album?.external_urls?.spotify}
            target="_blank"
            rel="noopener noreferrer"
            title={`Play ${album?.name} on Spotify`}
          >
            <i className="bx bx-play-circle"></i>
          </a>
        </div>
      </div>
    </FlyInDiv>
  );
};

export default OneAlbum;
