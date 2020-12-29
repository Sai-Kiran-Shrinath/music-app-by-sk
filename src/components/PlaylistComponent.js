import React from "react";
import { Songs } from "../songsinfo";

function Playlist() {
  return (
    <div>
      <h1>Playlist</h1>
      <audio src={Songs.song} controls></audio>
    </div>
  );
}

export default Playlist;
