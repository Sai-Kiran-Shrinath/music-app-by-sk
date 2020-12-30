import React from "react";
import { Songs } from "../songsinfo";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Playlist() {
  const song = Songs.map((song) => {
    return (
      <div id={song.id}>
        <h5>{song.name}</h5>
        <img src={song.image} alt={song.name} />
        <h6>{song.artist}</h6>
        <AudioPlayer src={song.song}></AudioPlayer>
      </div>
    );
  });
  return (
    <div className="container">
      <h1>Playlist</h1>
      {song}
    </div>
  );
}

export default Playlist;
