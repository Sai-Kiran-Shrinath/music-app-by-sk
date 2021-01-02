import React from "react";
import { Songs } from "../songsinfo";

function Home() {
  const songCard = Songs.map((song) => {
    return (
      <>
        <div className="row text-center song-info">
          <a href="/playlist" className="col-12 col-md-4">
            <img src={song.image} alt={song.name} height="200px" width="100%" />
          </a>
          <div className="col-12 col-md-8">
            <h5>
              <a style={{ textDecoration: "none" }} href="/playlist">
                <strong style={{ color: "rgb(92, 1, 8)" }}>{song.name}</strong>
              </a>
            </h5>
            <p>By {song.artist}</p>
            <p>Released in {song.released}</p>
            <p>Genre: {song.genre}</p>
            <p>Lyricists: {song.lyricist}</p>
          </div>
        </div>
        <br />
      </>
    );
  });
  return (
    <div className="bgstyle">
      <div className="container text-center">
        <h3>Featured Songs</h3>
        {songCard}
      </div>
    </div>
  );
}

export default Home;
