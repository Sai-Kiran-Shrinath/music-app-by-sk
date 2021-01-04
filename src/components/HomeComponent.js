import React from "react";
import { Songs } from "../songsinfo";
import { Link } from "react-router-dom";

function Home() {
  const songCard = Songs.map((song) => {
    return (
      <>
        <div
          className="row text-center"
          style={{ borderBottom: "3px solid #070047", paddingBottom: "15px" }}
        >
          <Link to="/playlist" className="col-12 col-md-4">
            <img src={song.image} alt={song.name} height="200px" width="100%" />
          </Link>
          <div className="col-12 col-md-8">
            <h5>
              <Link to="/playlist" href="/playlist">
                <strong style={{ color: "rgb(92, 1, 8)" }}>{song.name}</strong>
              </Link>
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
    <>
      <div className="bgstyle">
        <div className="container text-center">
          <h3>Featured Songs</h3>
          <br />
          {songCard}
        </div>
      </div>
      <footer className="footer text-center foot">
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/sai-kiran-shrinath-2048a0187/"
          className="foot"
        >
          <strong>Designed & Developed by SK </strong>
          <img
            src="/images/sk.jpeg"
            width="100px"
            height="100px"
            alt="sk"
            style={{
              border: "2px solid  rgb(255, 217, 0)",
              borderRadius: "100%",
            }}
          />
        </a>
      </footer>
    </>
  );
}

export default Home;
