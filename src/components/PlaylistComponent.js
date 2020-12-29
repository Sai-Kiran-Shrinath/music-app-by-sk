import React from "react";
import { Songs } from "../songsinfo";

function Playlist() {
  const song = Songs.map((song) => {
    return (
      <div id={song.id}>
        <h5>{song.name}</h5>
        <img src={song.image} alt={song.name} />
        <h6>{song.artist}</h6>
        <audio src={song.song} controls></audio>
      </div>
    );
  });
  return (
    <div>
      <h1>Playlist</h1>
      {song}
    </div>
  );
}

export default Playlist;
