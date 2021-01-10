import React from "react";
import { Songs } from "../songsinfo";
import { Link } from "react-router-dom";

function SongInfo({ setIndex }) {
  const songCard = Songs.map((song) => {
    return (
      <>
        <div
          className="row text-center"
          style={{ borderBottom: "3px solid #070047", paddingBottom: "15px" }}
        >
          <Link to="/" className="col-12 col-md-4">
            <img src={song.image} alt={song.name} height="200px" width="100%" />
          </Link>
          <div className="col-12 col-md-8">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h5 style={{ color: "rgb(92, 1, 8)" }}>{song.name}</h5>

              <p style={{ color: "black" }}>By {song.artist}</p>
              <p style={{ color: "black" }}>Released in {song.released}</p>
              <p style={{ color: "black" }}>Genre: {song.genre}</p>
              <p style={{ color: "black" }}>Lyricists: {song.lyricist}</p>
            </Link>
          </div>
        </div>
        <br />
      </>
    );
  });
  return (
    <>
      <div className="bgstyle">
        <div className="container text-center">
          <br />
          {songCard}
        </div>
      </div>
    </>
  );
}

export default SongInfo;
